/**
 * Тестирует все слаги GSMArena через wsrv.nl и чинит сломанные
 */
import { readFileSync, writeFileSync } from 'fs';
import https from 'https';

function check(slug) {
  return new Promise(res => {
    const url = `https://wsrv.nl/?url=${encodeURIComponent('https://fdn2.gsmarena.com/vv/bigpic/' + slug + '.jpg')}&w=200`;
    const req = https.get(url, r => {
      r.resume();
      res(r.statusCode === 200);
    });
    req.on('error', () => res(false));
    req.setTimeout(8000, () => { req.destroy(); res(false); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Best fallback per brand (known working slugs)
const BRAND_FALLBACK = {
  'Apple': 'apple-iphone-16',
  'Samsung': 'samsung-galaxy-s23-ultra-5g',
  'Google': 'google-pixel-9-',
  'Xiaomi': 'xiaomi-15',
  'OnePlus': 'oneplus-13',
  'Sony': 'sony-xperia-1-vi',
  'Nothing': 'nothing-phone-3a',
  'POCO': 'xiaomi-poco-f6-pro',
  'Realme': 'realme-gt6',
  'Huawei': 'huawei-mate-60-pro',
  'Honor': 'honor-magic7-pro',
  'Motorola': 'motorola-edge-50-ultra',
  'OPPO': 'oppo-find-x8-pro',
  'Vivo': 'vivo-x200-pro',
  'Asus': 'asus-rog-phone-9-pro',
  'Nokia': 'nokia-g60-5g',
  'Infinix': 'infinix-gt-20-pro',
  'Tecno': 'tecno-phantom-x2-pro',
  'ZTE': 'zte-nubia-z60-ultra',
  'Lenovo': 'lenovo-legion-phone-2-pro',
  'TCL': 'nokia-g60-5g',
  'Redmi': 'xiaomi-redmi-note-13-pro',
};

// Alternative slug patterns to try
function alternatives(slug) {
  const alts = [slug];
  // Try without trailing dash
  if (slug.endsWith('-')) alts.push(slug.slice(0, -1));
  // Try with trailing dash
  else alts.push(slug + '-');
  // Try with year in different format
  alts.push(slug.replace(/-5g$/, '').replace(/-5g-/, '-'));
  // Try with plus → plus sign removed
  alts.push(slug.replace('-plus', '').replace('_plus',''));
  return [...new Set(alts)];
}

async function run() {
  const c = readFileSync('./data/phones.ts', 'utf8');

  // Find all phone entries with their brand and slug
  const phonePattern = /\{id:"([^"]+)"[^}]*brand:"([^"]+)"[^}]*image:G\("([^"]+)"\)/g;
  const phones = [];
  let m;
  while ((m = phonePattern.exec(c)) !== null) {
    phones.push({ id: m[1], brand: m[2], imgSlug: m[3] });
  }
  console.log(`Found ${phones.length} phones to check`);

  // Get unique slugs to test
  const uniqueSlugs = [...new Set(phones.map(p => p.imgSlug))];
  console.log(`Testing ${uniqueSlugs.length} unique slugs...`);

  const results = {};
  let tested = 0;

  for (const slug of uniqueSlugs) {
    let ok = false;
    const alts = alternatives(slug);

    for (const alt of alts) {
      const good = await check(alt);
      if (good) { results[slug] = alt; ok = true; break; }
      await sleep(80);
    }

    if (!ok) results[slug] = null; // needs fallback
    tested++;
    if (tested % 20 === 0) console.log(`  ${tested}/${uniqueSlugs.length}...`);
  }

  const broken = Object.entries(results).filter(([,v]) => v === null);
  const fixed = Object.entries(results).filter(([k,v]) => v !== null && v !== k);
  const ok = Object.entries(results).filter(([k,v]) => v === k);

  console.log(`\nResults:`);
  console.log(`  OK: ${ok.length}`);
  console.log(`  Fixed (alt slug): ${fixed.length}`);
  console.log(`  Broken (need fallback): ${broken.length}`);

  // Build replacement map
  const replacements = {};

  // Fixed slugs
  for (const [old, newSlug] of fixed) {
    replacements[old] = newSlug;
  }

  // Apply brand fallback to broken ones - need brand info
  const slugToBrand = {};
  for (const p of phones) {
    if (!slugToBrand[p.imgSlug]) slugToBrand[p.imgSlug] = p.brand;
  }

  for (const [slug] of broken) {
    const brand = slugToBrand[slug] || 'Samsung';
    replacements[slug] = BRAND_FALLBACK[brand] || BRAND_FALLBACK['Samsung'];
    console.log(`  FALLBACK: ${slug} -> ${replacements[slug]} (${brand})`);
  }

  // Apply all replacements to phones.ts
  let newContent = c;
  let count = 0;
  for (const [old, newSlug] of Object.entries(replacements)) {
    const before = newContent.split(`G("${old}")`).length - 1;
    newContent = newContent.split(`G("${old}")`).join(`G("${newSlug}")`);
    count += before;
  }

  writeFileSync('./data/phones.ts', newContent, 'utf8');
  console.log(`\nApplied ${count} replacements`);
  console.log('Done!');
}

run().catch(console.error);
