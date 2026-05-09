import { readFileSync, writeFileSync } from 'fs';

// Mapping: phone slug in URL → correct GSMArena image slug
const SLUG_MAP = {
  // ═══ XIAOMI ═══
  'xiaomi-redmi-note-10-pro':   null, // not found
  'xiaomi-redmi-note-10':       null,
  'xiaomi-redmi-note-9s':       null,
  'xiaomi-redmi-note-9-pro':    'xiaomi-redmi-note-9-pro',
  'xiaomi-redmi-note-12':       null,
  'xiaomi-redmi-note-13':       'xiaomi-redmi-note-13',
  'xiaomi-redmi-note-11':       null,
  'xiaomi-redmi-note-11-pro':   null,
  'xiaomi-redmi-note-11s':      null,
  'xiaomi-redmi-note-8-pro':    'xiaomi-redmi-note-8-pro',
  'xiaomi-redmi-note-8-2021':   'xiaomi-redmi-note-8',
  'xiaomi-redmi-note-7':        'xiaomi-redmi-note-7',
  'xiaomi-redmi-note-7-pro':    'xiaomi-redmi-note-7-pro',
  'xiaomi-redmi-note-6-pro':    null,
  'xiaomi-redmi-note-5-pro':    'xiaomi-redmi-note-5-pro',
  'xiaomi-redmi-note-4':        'xiaomi-redmi-note-4',
  'xiaomi-redmi-9':             'xiaomi-redmi-9',
  'xiaomi-redmi-9a':            null,
  'xiaomi-redmi-9c':            'xiaomi-redmi-9c',
  'xiaomi-redmi-9t':            null,
  'xiaomi-redmi-10':            'xiaomi-redmi-10',
  'xiaomi-redmi-10a':           'xiaomi-redmi-10a',
  'xiaomi-redmi-10c':           'xiaomi-redmi-10c',
  'xiaomi-redmi-12':            'xiaomi-redmi-12',
  'xiaomi-redmi-12c':           'xiaomi-redmi-12c',
  'xiaomi-redmi-14c':           'xiaomi-redmi-14c',
  'xiaomi-mi-9-':               'xiaomi-mi-9-',
  'xiaomi-mi-9t-pro-':          null,
  'xiaomi-mi-8':                null,
  'xiaomi-mi-8-pro-':           'xiaomi-mi-8-pro-',
  'xiaomi-mi-8-lite-':          'xiaomi-mi-8-lite-',
  'xiaomi-mi-10-pro-5g':        'xiaomi-mi-10-pro-5g',
  'xiaomi-11t-pro':             'xiaomi-11t-pro',
  'xiaomi-11t':                 'xiaomi-11t',
  'xiaomi-mi-11-lite-5g':       'xiaomi-mi-11-lite-5g',
  'xiaomi-11-lite-5g-ne':       'xiaomi-11-lite-5g-ne',
  'xiaomi-12-lite-5g':          'xiaomi-12-lite-5g',
  'xiaomi-12t':                 'xiaomi-12t',
  'xiaomi-12t-pro':             'xiaomi-12t-pro',
  'xiaomi-poco-f4-5g':          'xiaomi-poco-f4-5g',
  'xiaomi-poco-f3':             'xiaomi-poco-f3',
  'xiaomi-poco-f2-pro':         'xiaomi-poco-f2-pro',
  'xiaomi-poco-x3-pro-':        'xiaomi-poco-x3-pro-',
  'xiaomi-poco-x3-nfc':         'xiaomi-poco-x3-nfc',
  'xiaomi-poco-x3':             'xiaomi-poco-x3',
  'xiaomi-poco-x4-gt':          'xiaomi-poco-x4-gt',
  'xiaomi-poco-m4-pro':         'xiaomi-poco-m4-pro',
  'xiaomi-poco-m3-pro-5g':      'xiaomi-poco-m3-pro-5g',
  'xiaomi-poco-m3':             'xiaomi-poco-m3',
  'xiaomi-poco-c40':            'xiaomi-poco-c40',
  'xiaomi-poco-c55':            'xiaomi-poco-c55',
  'xiaomi-civi-4-pro':          'xiaomi-civi-4-pro',
  'xiaomi-civi-3':              'xiaomi-civi-3',
  'xiaomi-civi-2':              null,
  'xiaomi-civi-1s':             'xiaomi-civi-1s',
  'xiaomi-mix-fold-2':          'xiaomi-mix-fold-2',
  'xiaomi-mix-4':               null,

  // ═══ SAMSUNG ═══
  'samsung-galaxy-s20-ultra-5g':    null,
  'samsung-galaxy-s20-plus':        'samsung-galaxy-s20-plus',
  'samsung-galaxy-s205g':           null,
  'samsung-galaxy-note20-ultra-5g': null,
  'samsung-galaxy-note20-5g':       null,
  'samsung-galaxy-z-fold3-5g':      'samsung-galaxy-z-fold3-5g',
  'samsung-galaxy-z-flip4':         null,
  'samsung-galaxy-s10-plus-':       'samsung-galaxy-s10-plus-',
  'samsung-galaxy-s10':             'samsung-galaxy-s10',
  'samsung-galaxy-s10e':            'samsung-galaxy-s10e',
  'samsung-galaxy-s9-plus':         null,
  'samsung-galaxy-s9-':             'samsung-galaxy-s9-',
  'samsung-galaxy-note10-plus-5g':  null,
  'samsung-galaxy-note10-5g':       null,
  'samsung-galaxy-a52-5g':          'samsung-galaxy-a52-5g',
  'samsung-galaxy-a51':             null,
  'samsung-galaxy-a71':             'samsung-galaxy-a71',
  'samsung-galaxy-a70':             'samsung-galaxy-a70',
  'samsung-galaxy-a50-':            'samsung-galaxy-a50-',
  'samsung-galaxy-m52-5g':          null,

  // ═══ ONEPLUS ═══
  'oneplus-7-pro':     null,
  'oneplus-7t-':       'oneplus-7t-',
  'oneplus-6t':        null,
  'oneplus-9r':        'oneplus-9r',
  'oneplus-9rt-5g':    null,
  'oneplus-10r':       'oneplus-10r',
  'oneplus-nord-2-5g': 'oneplus-nord-2-5g',

  // ═══ GOOGLE ═══
  'google-pixel-4a':    'google-pixel-4a',
  'google-pixel-4-xl':  null,
  'google-pixel-4':     null,
  'google-pixel-5a-5g': 'google-pixel-5a-5g',

  // ═══ SONY ═══
  'sony-xperia-1-ii':  null,
  'sony-xperia-5-ii':  null,
  'sony-xperia-10-iv': 'sony-xperia-10-iv',

  // ═══ OTHERS ═══
  'realme-gt2-pro':          'realme-gt2-pro',
  'oppo-find-x6-pro':        'oppo-find-x6-pro',
  'oppo-find-x5-pro':        'oppo-find-x5-pro',
  'motorola-moto-g72-5g':    'motorola-moto-g72-5g',
  'motorola-edge-40-pro':    'motorola-edge-40-pro',
  'motorola-edge-40':        'motorola-edge-40',
  'motorola-edge-30-ultra':  'motorola-edge-30-ultra',
  'asus-rog-phone-6':        null,
  'nothing-phone-2':         null,
  'nothing-phone-1':         'nothing-phone-1',
  'honor-magic5-pro':        'honor-magic5-pro',
  'honor-magic6-pro':        'honor-magic6-pro',
  'honor-x9b':               'honor-x9b',
};

// Brand fallbacks for phones with no specific slug
const BRAND_FALLBACK = {
  'Xiaomi': 'xiaomi-15',
  'Redmi':  'xiaomi-redmi-note-13-pro',
  'POCO':   'xiaomi-poco-f6-pro',
  'Samsung': 'samsung-galaxy-s26-ultra',
  'OnePlus': 'oneplus-13',
  'Google':  'google-pixel-9-pro-',
  'Sony':    'sony-xperia-1-vi',
  'Nothing': 'nothing-phone-3a',
  'Asus':    'asus-rog-phone-9-pro',
};

let c = readFileSync('./data/phones.ts', 'utf8');

// Extract phone entries with their details
const re = /\{id:"([^"]+)",slug:"([^"]+)",name:"([^"]+)",brand:"([^"]+)",image:G\("([^"]+)"\)/g;
let m;
const updates = new Map();

while ((m = re.exec(c)) !== null) {
  const [, id, phoneslug, name, brand, imgSlug] = m;

  // Skip if already has a good specific slug
  if (SLUG_MAP[imgSlug] !== undefined) {
    const newSlug = SLUG_MAP[imgSlug];
    if (newSlug && newSlug !== imgSlug) {
      updates.set(imgSlug, newSlug);
    }
    continue;
  }

  // Check if phone is using a generic brand fallback
  const genericFallbacks = Object.values(BRAND_FALLBACK);
  if (genericFallbacks.includes(imgSlug)) {
    // This phone uses a generic fallback - try to find a better slug based on phone slug
    // Convert phone slug to potential GSMArena slug
    const potentialSlug = 'xiaomi-' + phoneslug.replace(/-5g$/, '');
    // Will be handled by other logic
  }
}

// Apply all updates
let changes = 0;
for (const [oldSlug, newSlug] of updates) {
  const count = c.split(`G("${oldSlug}")`).length - 1;
  if (count > 0) {
    c = c.split(`G("${oldSlug}")`).join(`G("${newSlug}")`);
    changes += count;
    console.log(`✓ ${oldSlug} → ${newSlug} (${count}x)`);
  }
}

// Now fix phones that have brand generic fallbacks by mapping phone slug → correct image slug
// These are phones that got overwritten by fallback script
const phoneSlugToImgSlug = {
  // Xiaomi Mi series
  'xiaomi-mi-9t-pro':     'xiaomi-mi-9-',  // Use Mi 9 as visual stand-in
  'xiaomi-mi-8':          'xiaomi-mi-8-pro-',
  'xiaomi-mi-10-ultra':   'xiaomi-mi-10-pro-5g',
  'xiaomi-12':            'xiaomi-12t',
  'xiaomi-12-pro':        'xiaomi-12t-pro',
  'xiaomi-14-ultra':      'xiaomi-15',
  'xiaomi-civi-2':        'xiaomi-civi-1s',
  'xiaomi-mix-4':         'xiaomi-mix-fold-2',
  // Redmi
  'redmi-note-10-pro':    'xiaomi-redmi-note-9-pro',
  'redmi-note-10':        'xiaomi-redmi-note-10',
  'redmi-note-9s':        null, // keep fallback
  'redmi-note-12':        'xiaomi-redmi-note-12',
  'redmi-note-12-pro':    'xiaomi-redmi-note-13-pro',
  'redmi-note-11-pro':    'xiaomi-redmi-note-8-pro',
  'redmi-note-11':        'xiaomi-redmi-note-11',
  'redmi-note-11s':       'xiaomi-redmi-note-11s',
  'redmi-note-9-pro':     'xiaomi-redmi-note-9-pro',
  'redmi-note-6-pro':     'xiaomi-redmi-note-7-pro',
  'redmi-9a':             'xiaomi-redmi-9',
  'redmi-9t':             'xiaomi-redmi-9t',
  'redmi-note-14':        'xiaomi-redmi-note-13-pro',
  'redmi-note-13-5g':     'xiaomi-redmi-note-13',
  'redmi-note-4x':        'xiaomi-redmi-note-4',
  'redmi-note-5-pro':     'xiaomi-redmi-note-5-pro',
  // POCO
  'poco-f1':              'xiaomi-poco-f2-pro',
  'poco-f4':              'xiaomi-poco-f4-5g',
  'poco-x3-pro':          'xiaomi-poco-x3-pro-',
  'poco-x3-nfc':          'xiaomi-poco-x3-nfc',
  'poco-x2':              'xiaomi-poco-x3',
  'poco-x4-pro-5g':       'xiaomi-poco-x4-gt',
  'poco-m4-pro':          'xiaomi-poco-m4-pro',
  'poco-m4-5g':           'xiaomi-poco-m3',
  'poco-m5':              'xiaomi-poco-m3',
  'poco-m5s-':            'xiaomi-poco-m4-pro',
  // Samsung
  'samsung-galaxy-s20-ultra': 'samsung-galaxy-s26-ultra',
  'samsung-galaxy-note20-ultra': 'samsung-galaxy-s26-ultra',
  'samsung-galaxy-note20': 'samsung-galaxy-s26-ultra',
  'samsung-galaxy-s9-plus': 'samsung-galaxy-s10-plus-',
  'samsung-galaxy-a51-':  'samsung-galaxy-a52-5g',
  'samsung-galaxy-m52-5g': 'samsung-galaxy-a55',
  // OnePlus
  'oneplus-7-pro':   'oneplus-7t-',
  'oneplus-6t-':     'oneplus-7t-',
  'oneplus-9rt':     'oneplus-9r',
  'oneplus-nord-ce-5g': 'oneplus-nord-2-5g',
  // Google
  'google-pixel-4':    'google-pixel-4a',
  'google-pixel-4-xl': 'google-pixel-4a',
  'google-pixel-3-xl': 'google-pixel-4a',
  'google-pixel-3a':   'google-pixel-4a',
  // Sony
  'sony-xperia-1-ii': 'sony-xperia-10-iv',
  'sony-xperia-5-ii': 'sony-xperia-10-iv',
  // Others
  'asus-rog-phone-6': 'asus-rog-phone-9-pro',
  'nothing-phone-2-': 'nothing-phone-1',
  'realme-gt-2-pro':  'realme-gt2-pro',
};

// Apply phone-slug based fixes
const re2 = /slug:"([^"]+)"[^}]*image:G\("([^"]+)"\)/g;
let m2;
while ((m2 = re2.exec(c)) !== null) {
  const [full, phoneslug, imgSlug] = m2;
  const newImg = phoneSlugToImgSlug[phoneslug];
  if (newImg && newImg !== imgSlug) {
    // Replace only this specific occurrence
    const before = `slug:"${phoneslug}",name:`;
    const idx = c.indexOf(before);
    if (idx >= 0) {
      const chunk = c.slice(idx, idx + 500);
      const newChunk = chunk.replace(`G("${imgSlug}")`, `G("${newImg}")`);
      if (newChunk !== chunk) {
        c = c.slice(0, idx) + newChunk + c.slice(idx + 500);
        changes++;
        console.log(`~ ${phoneslug}: ${imgSlug} → ${newImg}`);
      }
    }
  }
}

writeFileSync('./data/phones.ts', c, 'utf8');
console.log(`\nTotal changes: ${changes}`);
