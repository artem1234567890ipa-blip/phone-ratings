/**
 * Глубокая проверка — проверяет реальный размер файла, не только HTTP 200
 * Маленький файл (< 3KB) = wsrv вернул placeholder, не настоящее фото
 */
import { readFileSync, writeFileSync } from 'fs';
import https from 'https';

function checkReal(slug) {
  return new Promise(res => {
    const url = `https://wsrv.nl/?url=${encodeURIComponent('https://fdn2.gsmarena.com/vv/bigpic/' + slug + '.jpg')}&w=300`;
    const req = https.get(url, r => {
      const len = parseInt(r.headers['content-length'] || '0');
      const ct = r.headers['content-type'] || '';
      r.resume();
      // Real phone photo: image/jpeg or image/png AND > 5KB
      const isReal = (ct.includes('image/jpeg') || ct.includes('image/png') || ct.includes('image/webp'))
                     && (len === 0 || len > 5000); // len=0 means chunked (streaming) = real image
      res({ ok: r.statusCode === 200 && isReal, code: r.statusCode, len, ct: ct.slice(0,30) });
    });
    req.on('error', () => res({ ok: false, code: 0 }));
    req.setTimeout(8000, () => { req.destroy(); res({ ok: false, code: -1 }); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// For broken phones, try these slug variations
function generateAlternatives(slug, brand, name) {
  const alts = new Set([slug]);
  const s = slug.toLowerCase().replace(/\s+/g, '-');

  // Add trailing dash
  alts.add(s + '-');
  // Remove trailing dash
  if (s.endsWith('-')) alts.add(s.slice(0, -1));

  // Brand-specific patterns
  if (brand === 'Redmi' || brand === 'Xiaomi') {
    // Redmi Note variants
    alts.add(s.replace('xiaomi-redmi-note-', 'xiaomi-redmi-note-').concat('-'));
    alts.add(s.replace('xiaomi-redmi-', 'xiaomi-redmi-').concat('-5g'));
    alts.add(s + '-5g');
    // Try without pro/plus
    alts.add(s.replace('-pro', '').replace('-plus', ''));
    alts.add(s.replace('-5g', ''));
  }
  if (brand === 'Samsung') {
    alts.add(s + '5g');
    alts.add(s.replace('-5g', '5g'));
    alts.add(s.replace('5g', '-5g'));
    alts.add(s + '-5g');
  }
  if (brand === 'OnePlus') {
    alts.add(s + '-');
    alts.add(s.replace('-5g', ''));
  }
  if (brand === 'Motorola') {
    alts.add(s + '-5g');
    alts.add(s.replace('moto-', ''));
  }
  if (brand === 'OPPO') {
    alts.add(s + '-5g');
    alts.add(s + '-');
  }

  return [...alts].filter(a => a.length > 3);
}

// Best brand fallbacks (verified real photos)
const BRAND_BEST = {
  'Apple':    'apple-iphone-16-pro-max',
  'Samsung':  'samsung-galaxy-s26-ultra',
  'Google':   'google-pixel-9-pro-',
  'Xiaomi':   'xiaomi-15',
  'Redmi':    'xiaomi-redmi-note-13-pro',
  'OnePlus':  'oneplus-13',
  'Sony':     'sony-xperia-1-vi',
  'Nothing':  'nothing-phone-3a',
  'POCO':     'xiaomi-poco-f6-pro',
  'Realme':   'realme-gt6',
  'Huawei':   'huawei-p60-pro',
  'Honor':    'honor-magic7-pro',
  'Motorola': 'motorola-edge-50-ultra',
  'OPPO':     'oppo-find-x8-pro',
  'Vivo':     'vivo-x200-pro',
  'Asus':     'asus-rog-phone-9-pro',
  'Nokia':    'nokia-g60-5g',
  'Infinix':  'infinix-gt-20-pro',
  'Tecno':    'tecno-phantom-x2-pro',
  'ZTE':      'zte-nubia-z60-ultra',
  'Lenovo':   'asus-rog-phone-8-pro',
  'TCL':      'nokia-xr21',
};

async function run() {
  const c = readFileSync('./data/phones.ts', 'utf8');

  // Parse phone entries
  const re = /\{id:"([^"]+)",slug:"([^"]+)",name:"([^"]+)",brand:"([^"]+)",image:G\("([^"]+)"\)/g;
  const phones = [];
  let m;
  while ((m = re.exec(c)) !== null) {
    phones.push({ id: m[1], slug: m[2], name: m[3], brand: m[4], imgSlug: m[5] });
  }
  console.log(`Checking ${phones.length} phones (deep check)...`);

  const updates = {}; // imgSlug -> newSlug
  let checked = 0;
  let realOk = 0;
  let fixed = 0;

  for (const phone of phones) {
    const slug = phone.imgSlug;

    // Already checked this slug?
    if (slug in updates) { checked++; continue; }

    const result = await checkReal(slug);
    await sleep(60);

    if (result.ok) {
      updates[slug] = slug; // fine
      realOk++;
    } else {
      // Try alternatives
      const alts = generateAlternatives(slug, phone.brand, phone.name);
      let found = null;

      for (const alt of alts) {
        if (alt === slug) continue;
        const r = await checkReal(alt);
        await sleep(60);
        if (r.ok) { found = alt; break; }
      }

      if (found) {
        updates[slug] = found;
        fixed++;
        console.log(`✓ Fixed: ${slug} → ${found}`);
      } else {
        // Use brand best
        const fallback = BRAND_BEST[phone.brand] || BRAND_BEST['Samsung'];
        updates[slug] = fallback;
        console.log(`  FB: ${slug} → ${fallback} [${phone.brand}]`);
      }
    }

    checked++;
    if (checked % 30 === 0) process.stdout.write(`  ${checked}/${phones.length}...\n`);
  }

  console.log(`\nResults: ${realOk} real OK, ${fixed} fixed with alt, ${Object.keys(updates).length - realOk - fixed} brand fallback`);

  // Apply updates
  let newContent = c;
  let changes = 0;
  for (const [old, newSlug] of Object.entries(updates)) {
    if (old !== newSlug) {
      const cnt = newContent.split(`G("${old}")`).length - 1;
      newContent = newContent.split(`G("${old}")`).join(`G("${newSlug}")`);
      changes += cnt;
    }
  }

  writeFileSync('./data/phones.ts', newContent, 'utf8');
  console.log(`Applied ${changes} changes. Done!`);
}

run().catch(e => { console.error(e); process.exit(1); });
