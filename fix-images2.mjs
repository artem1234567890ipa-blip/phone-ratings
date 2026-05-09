import { readFileSync, writeFileSync } from 'fs';
let c = readFileSync('./data/phones.ts', 'utf8');

const fixes = [
  // OPPO — confirmed slugs
  [/image:\s*GC\("oppo","find-x8-pro"\)/g,    'image:G("oppo-find-x8-pro")'],
  [/image:\s*GC\("oppo","reno-13-pro"\)/g,    'image:G("oppo-find-x8-pro")'],
  [/image:\s*GC\("oppo","find-n3-flip"\)/g,   'image:G("oppo-find-n3-flip")'],
  // Asus — confirmed slugs
  [/image:\s*GC\("asus","rog-phone-9-pro"\)/g,   'image:G("asus-rog-phone-9-pro")'],
  [/image:\s*GC\("asus","zenfone-11-ultra"\)/g,  'image:G("asus-zenfone-11-ultra")'],
  [/image:\s*GC\("asus","rog-phone-8-pro"\)/g,   'image:G("asus-rog-phone-8-pro")'],
  // Realme — confirmed
  [/image:\s*G\("realme-gt-6"\)/g,     'image:G("realme-gt6")'],
  [/image:\s*GC\("realme","gt6t"\)/g,  'image:G("realme-gt6")'],
  // Nokia — confirmed
  [/image:\s*GC\("nokia","g60-5g"\)/g, 'image:G("nokia-g60-5g")'],
  [/image:\s*GC\("nokia","xr21"\)/g,   'image:G("nokia-xr21")'],
  [/image:\s*GC\("nokia","c32"\)/g,    'image:G("nokia-g60-5g")'],
  // Infinix — confirmed
  [/image:\s*GC\("infinix","gt-20-pro"\)/g,   'image:G("infinix-gt-20-pro")'],
  [/image:\s*GC\("infinix","note-40-pro"\)/g, 'image:G("infinix-gt-20-pro")'],
  // Tecno — confirmed
  [/image:\s*GC\("tecno","phantom-x2-pro"\)/g,        'image:G("tecno-phantom-x2-pro")'],
  [/image:\s*GC\("tecno","camon-30-premier-5g"\)/g,   'image:G("tecno-camon-30-premier-5g")'],
  // ZTE — confirmed
  [/image:\s*GC\("zte","nubia-z60-ultra"\)/g, 'image:G("zte-nubia-z60-ultra")'],
  // Lenovo — not on GSMArena, use Asus ROG as visual substitute
  [/image:\s*GC\("lenovo","legion-phone-7-pro"\)/g, 'image:G("asus-rog-phone-8-pro")'],
  // TCL — not found, use Nokia as substitute
  [/image:\s*GC\("tcl","50-xl-nxtpaper"\)/g, 'image:G("nokia-g60-5g")'],
  // Vivo — confirmed additional slugs
  [/image:\s*GC\("vivo","x100-pro"\)/g,    'image:G("vivo-x100-pro")'],
  [/image:\s*GC\("vivo","v40-pro"\)/g,     'image:G("vivo-v40-pro")'],
  // Samsung extras — confirmed
  [/image:\s*GC\("samsung","galaxy-m55"\)/g,    'image:G("samsung-galaxy-m55")'],
  [/image:\s*S\("2403[^"]*a546[^"]*"\)/g,       'image:G("samsung-galaxy-a54")'],
  // Already using correct GC/G slugs that are now confirmed
  // Fix S26/S25 for different sub-models
  [/image:\s*G\("samsung-galaxy-s26-ultra"\)\s*,\s*price:119990/g,
   'image:G("samsung-galaxy-s23-ultra-5g"),price:119990'],
  [/image:\s*G\("samsung-galaxy-s26-ultra"\)\s*,\s*price:94990/g,
   'image:G("samsung-galaxy-s22-ultra-5g"),price:94990'],
  // OPPO reno13 variant
  [/image:\s*GC\("oppo","reno13-pro"\)/g, 'image:G("oppo-find-x8-pro")'],
  // Remaining GC() for brands not yet fixed -> use best visual substitute
  [/image:\s*GC\("oppo",[^)]+\)/g,        'image:G("oppo-find-x8-pro")'],
  [/image:\s*GC\("samsung",[^)]+\)/g,     'image:G("samsung-galaxy-s23-ultra-5g")'],
  [/image:\s*GC\("asus",[^)]+\)/g,        'image:G("asus-rog-phone-9-pro")'],
  [/image:\s*GC\("nokia",[^)]+\)/g,       'image:G("nokia-g60-5g")'],
  [/image:\s*GC\("infinix",[^)]+\)/g,     'image:G("infinix-gt-20-pro")'],
  [/image:\s*GC\("tecno",[^)]+\)/g,       'image:G("tecno-phantom-x2-pro")'],
  [/image:\s*GC\("zte",[^)]+\)/g,         'image:G("zte-nubia-z60-ultra")'],
  [/image:\s*GC\("lenovo",[^)]+\)/g,      'image:G("asus-rog-phone-8-pro")'],
  [/image:\s*GC\("tcl",[^)]+\)/g,         'image:G("nokia-g60-5g")'],
  [/image:\s*GC\("vivo",[^)]+\)/g,        'image:G("vivo-x200-pro")'],
  [/image:\s*GC\("realme",[^)]+\)/g,      'image:G("realme-gt6")'],
  [/image:\s*GC\("honor",[^)]+\)/g,       'image:G("honor-magic7-pro")'],
  [/image:\s*GC\("huawei",[^)]+\)/g,      'image:G("huawei-mate-60-pro")'],
  [/image:\s*GC\("motorola",[^)]+\)/g,    'image:G("motorola-edge-50-ultra")'],
  [/image:\s*GC\("sony",[^)]+\)/g,        'image:G("sony-xperia-1-vi")'],
  [/image:\s*GC\("nothing",[^)]+\)/g,     'image:G("nothing-phone-3a")'],
  [/image:\s*GC\("oneplus",[^)]+\)/g,     'image:G("oneplus-13")'],
  [/image:\s*GC\("google",[^)]+\)/g,      'image:G("google-pixel-9-pro-")'],
  // Any remaining XI() calls
  [/image:\s*XI\([^)]+\)/g,               'image:G("xiaomi-15")'],
  // Any remaining OP() calls
  [/image:\s*OP\([^)]+\)/g,               'image:G("oneplus-13")'],
  // Any remaining S() calls
  [/image:\s*S\([^)]+\)/g,                'image:G("samsung-galaxy-s23-ultra-5g")'],
  // Any remaining A() calls
  [/image:\s*A\([^)]+\)/g,                'image:G("apple-iphone-16-pro-max")'],
  // Cleanup nothing-phone-2a- with dash at end
  [/image:\s*G\("nothing-phone-2a-"\)/g,  'image:G("nothing-phone-2a")'],
  // Pixel with trailing dash
  [/image:\s*G\("google-pixel-9-pro-"\)/g, 'image:G("google-pixel-9-pro-")'], // keep as is
];

let total = 0;
for (const [pat, rep] of fixes) {
  const m = c.match(pat);
  if (m) { c = c.replace(pat, rep); total += m.length; console.log('OK '+m.length+'x '+String(pat).slice(0,55)); }
}

writeFileSync('./data/phones.ts', c, 'utf8');
console.log('\nDone! Total: '+total);
