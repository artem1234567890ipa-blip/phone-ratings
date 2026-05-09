import { readFileSync, writeFileSync } from 'fs';

const SLUG_MAP = JSON.parse(readFileSync('./slug-results.json', 'utf8'));

// Phones with no slug found → use closest visual match
const FALLBACK_MAP = {
  'xiaomi-mi-8':           'xiaomi-mi-8-pro-',
  'xiaomi-mi-11-pro':      'xiaomi-11t-pro',
  'xiaomi-13':             'xiaomi-14',
  'redmi-note-6-pro':      'xiaomi-redmi-note-7-pro-',
  'redmi-note-10':         'xiaomi-redmi-note-12-',
  'redmi-note-10-pro':     'xiaomi-redmi-note-12-pro-',
  'redmi-note-10s':        'xiaomi-redmi-note-12-pro-',
  'redmi-note-10-5g':      'xiaomi-redmi-note-12-',
  'redmi-note-11':         'xiaomi-redmi-note-13-',
  'redmi-note-11-pro':     'xiaomi-redmi-note-12-pro-',
  'redmi-note-11s':        'xiaomi-redmi-note-13-',
  'redmi-note-11-5g':      'xiaomi-redmi-note-13-',
  'redmi-note-12':         'xiaomi-redmi-note-13-',
  'redmi-note-14':         'xiaomi-redmi-note-14-pro-5g',
  'redmi-note-14-pro-plus':'xiaomi-redmi-note-13-pro-plus-',
  'redmi-14':              'xiaomi-redmi-14c',
  'poco-f1':               'xiaomi-poco-f2-pro',
  'poco-x3-gt':            'xiaomi-poco-x4-gt-',
  'poco-x4-pro-5g':        'xiaomi-poco-x4-gt-',
  'poco-x5':               'xiaomi-poco-x6',
  'poco-x5-pro':           'xiaomi-poco-x6-pro-',
  'samsung-galaxy-s20-ultra':   'samsung-galaxy-s26-ultra',
  'samsung-galaxy-s20-plus':    'samsung-galaxy-s26-ultra',
  'samsung-galaxy-s20':         'samsung-galaxy-s22-ultra-5g',
  'samsung-galaxy-note-20-ultra':'samsung-galaxy-s26-ultra',
  'samsung-galaxy-note-20':     'samsung-galaxy-s22-ultra-5g',
  'samsung-galaxy-s9-plus':     'samsung-galaxy-s10-plus-',
  'samsung-galaxy-note-10-plus':'samsung-galaxy-s23-ultra-5g',
  'samsung-galaxy-note-10':     'samsung-galaxy-s22-ultra-5g',
  'samsung-galaxy-a51':         'samsung-galaxy-a52-5g',
  'samsung-galaxy-m52-5g':      'samsung-galaxy-a55',
  'samsung-galaxy-z-flip4':     'samsung-galaxy-z-flip6',
  'oneplus-6t':            'oneplus-7t-',
  'oneplus-9rt':           'oneplus-9r',
  'google-pixel-4':        'google-pixel-4a',
  'google-pixel-4-xl':     'google-pixel-4a',
  'sony-xperia-1-ii':      'sony-xperia-1-vi',
  'sony-xperia-5-ii':      'sony-xperia-5-vi',
  'asus-rog-phone-6':      'asus-rog-phone-9-pro',
  'nothing-phone-2':       'nothing-phone-1',
};

// Build complete fix map: phoneSlug → imageSlug
const fixes = {};
for (const [phoneSlug, imgSlug] of Object.entries(SLUG_MAP)) {
  if (imgSlug) fixes[phoneSlug] = imgSlug;
  else if (FALLBACK_MAP[phoneSlug]) fixes[phoneSlug] = FALLBACK_MAP[phoneSlug];
}

console.log(`Will apply fixes for ${Object.keys(fixes).length} phone types`);

let c = readFileSync('./data/phones.ts', 'utf8');
let changes = 0;

// For each phone in the database, find its phone-slug and current image slug
// Then update if we have a better slug
const re = /\{id:"[^"]+",slug:"([^"]+)",name:"[^"]+",brand:"[^"]+",image:G\("([^"]+)"\)/g;
let m;
const replacements = []; // [{pos, phoneslug, oldImg, newImg}]

while ((m = re.exec(c)) !== null) {
  const phoneslug = m[1];
  const oldImg = m[2];

  // Map phone slug to shorter form for lookup
  // e.g. "iphone-12-pro-max" → no change needed
  // "redmi-note-10-pro" → maps to fix above
  const fix = fixes[phoneslug];
  if (fix && fix !== oldImg) {
    replacements.push({ fullMatch: m[0], phoneslug, oldImg, newImg: fix });
  }
}

console.log(`Found ${replacements.length} phones to update`);

// Apply replacements (do it carefully to avoid double-replacement)
for (const { fullMatch, phoneslug, oldImg, newImg } of replacements) {
  // Replace only in context of this phone's slug
  const searchStr = `slug:"${phoneslug}",name:`;
  const idx = c.indexOf(searchStr);
  if (idx >= 0) {
    const segment = c.slice(idx, idx + 600);
    const imgPattern = `G("${oldImg}")`;
    if (segment.includes(imgPattern)) {
      const newSegment = segment.replace(imgPattern, `G("${newImg}")`);
      c = c.slice(0, idx) + newSegment + c.slice(idx + 600);
      changes++;
      if (newImg !== oldImg) {
        console.log(`✓ ${phoneslug}: "${oldImg}" → "${newImg}"`);
      }
    }
  }
}

writeFileSync('./data/phones.ts', c, 'utf8');
console.log(`\nApplied ${changes} changes`);
