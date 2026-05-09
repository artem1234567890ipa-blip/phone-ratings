import { readFileSync, writeFileSync } from 'fs';

let c = readFileSync('./data/phones.ts', 'utf8');

const updates = [
  // APPLE — all to GSMArena confirmed slugs
  [/image:\s*A\([^)]*iphone-17-pro-max[^)]*\)/g,    'image:G("apple-iphone-17-pro-max")'],
  [/image:\s*A\([^)]*iphone-17-pro-finish[^)]*\)/g, 'image:G("apple-iphone-17-pro")'],
  [/image:\s*A\([^)]*iphone-air[^)]*\)/g,            'image:G("apple-iphone-17")'],
  [/image:\s*A\([^)]*iphone-17-finish[^)]*\)/g,     'image:G("apple-iphone-17")'],
  [/image:\s*A\([^)]*iphone-16-pro-max[^)]*\)/g,    'image:G("apple-iphone-16-pro-max")'],
  [/image:\s*A\([^)]*iphone-16-pro-finish[^)]*\)/g, 'image:G("apple-iphone-16-pro")'],
  [/image:\s*A\([^)]*iphone-16-plus[^)]*\)/g,       'image:G("apple-iphone-16")'],
  [/image:\s*A\([^)]*iphone-16-finish[^)]*\)/g,     'image:G("apple-iphone-16")'],
  [/image:\s*A\([^)]*iphone-15-pro-max[^)]*\)/g,    'image:G("apple-iphone-15-pro-max")'],
  [/image:\s*A\([^)]*iphone-15-pro-finish[^)]*\)/g, 'image:G("apple-iphone-15-pro")'],
  [/image:\s*A\([^)]*iphone-15-finish[^)]*\)/g,     'image:G("apple-iphone-15")'],
  [/image:\s*A\([^)]*iphone-14-pro-max[^)]*\)/g,    'image:G("apple-iphone-14-pro")'],
  [/image:\s*A\([^)]*iphone-14-pro-finish[^)]*\)/g, 'image:G("apple-iphone-14-pro")'],
  [/image:\s*A\([^)]*iphone-14-finish[^)]*\)/g,     'image:G("apple-iphone-14")'],
  [/image:\s*A\([^)]*iphone-13-pro-max[^)]*\)/g,    'image:G("apple-iphone-13-pro-max")'],
  [/image:\s*A\([^)]*iphone-13-pro-finish[^)]*\)/g, 'image:G("apple-iphone-13-pro")'],
  [/image:\s*A\([^)]*iphone-13-mini[^)]*\)/g,       'image:G("apple-iphone-13-mini")'],
  [/image:\s*A\([^)]*iphone-13-finish[^)]*\)/g,     'image:G("apple-iphone-13")'],
  [/image:\s*A\([^)]*iphone-12-pro-max[^)]*\)/g,    'image:G("apple-iphone-12-pro-max")'],
  [/image:\s*A\([^)]*iphone-12-pro-select[^)]*\)/g, 'image:G("apple-iphone-12-pro")'],
  [/image:\s*A\([^)]*iphone-12-mini[^)]*\)/g,       'image:G("apple-iphone-12-mini")'],
  [/image:\s*A\([^)]*iphone-12-select[^)]*\)/g,     'image:G("apple-iphone-12")'],
  [/image:\s*A\([^)]*iphone-11-pro-max[^)]*\)/g,    'image:G("apple-iphone-11-pro")'],
  [/image:\s*A\([^)]*iphone-11-pro-select[^)]*\)/g, 'image:G("apple-iphone-11-pro")'],
  [/image:\s*A\([^)]*iphone-11-select[^)]*\)/g,     'image:G("apple-iphone-11")'],
  [/image:\s*A\([^)]*iphone-xs-max[^)]*\)/g,        'image:G("apple-iphone-xs-max")'],
  [/image:\s*A\([^)]*iphone-xr[^)]*\)/g,            'image:G("apple-iphone-xr")'],
  [/image:\s*A\([^)]*iphone-se-4[^)]*\)/g,          'image:G("apple-iphone-se-2022")'],
  [/image:\s*A\([^)]*iphone-se-3[^)]*\)/g,          'image:G("apple-iphone-se-2022")'],
  [/image:\s*A\([^)]*iphone-se-2nd[^)]*\)/g,        'image:G("apple-iphone-se-2020")'],

  // SAMSUNG — Samsung CDN -> GSMArena slugs
  [/image:\s*S\("2602[^"]*s938[^"]*"\)/g,   'image:G("samsung-galaxy-s26-ultra")'],
  [/image:\s*S\("2602[^"]*s936[^"]*"\)/g,   'image:G("samsung-galaxy-s26-ultra")'],
  [/image:\s*S\("2602[^"]*s931[^"]*"\)/g,   'image:G("samsung-galaxy-s26-ultra")'],
  [/image:\s*S\("2501[^"]*s938[^"]*"\)/g,   'image:G("samsung-galaxy-s23-ultra-5g")'],
  [/image:\s*S\("2501[^"]*s936[^"]*"\)/g,   'image:G("samsung-galaxy-s23-ultra-5g")'],
  [/image:\s*S\("2501[^"]*s931[^"]*"\)/g,   'image:G("samsung-galaxy-s22-ultra-5g")'],
  [/image:\s*S\("2302[^"]*s918[^"]*"\)/g,   'image:G("samsung-galaxy-s23-ultra-5g")'],
  [/image:\s*S\("2302[^"]*s916[^"]*"\)/g,   'image:G("samsung-galaxy-s22-ultra-5g")'],
  [/image:\s*S\("2302[^"]*s911[^"]*"\)/g,   'image:G("samsung-galaxy-s22-ultra-5g")'],
  [/image:\s*S\("2201[^"]*s908[^"]*"\)/g,   'image:G("samsung-galaxy-s22-ultra-5g")'],
  [/image:\s*S\("2201[^"]*s906[^"]*"\)/g,   'image:G("samsung-galaxy-s22-ultra-5g")'],
  [/image:\s*S\("2201[^"]*s901[^"]*"\)/g,   'image:G("samsung-galaxy-s22-ultra-5g")'],
  [/image:\s*S\("2401[^"]*s928[^"]*"\)/g,   'image:G("samsung-galaxy-s23-ultra-5g")'],
  [/image:\s*S\("2401[^"]*s926[^"]*"\)/g,   'image:G("samsung-galaxy-s23-ultra-5g")'],
  [/image:\s*S\("2401[^"]*s921[^"]*"\)/g,   'image:G("samsung-galaxy-s22-ultra-5g")'],
  [/image:\s*S\("2101[^"]*g998[^"]*"\)/g,   'image:G("samsung-galaxy-s22-ultra-5g")'],
  [/image:\s*S\("2101[^"]*g996[^"]*"\)/g,   'image:G("samsung-galaxy-s22-ultra-5g")'],
  [/image:\s*S\("2101[^"]*g991[^"]*"\)/g,   'image:G("samsung-galaxy-s22-ultra-5g")'],
  [/image:\s*S\("2407[^"]*f956[^"]*"\)/g,   'image:G("samsung-galaxy-z-fold6")'],
  [/image:\s*S\("2407[^"]*f741[^"]*"\)/g,   'image:G("samsung-galaxy-z-flip6")'],
  [/image:\s*S\("2308[^"]*f946[^"]*"\)/g,   'image:G("samsung-galaxy-z-fold5")'],
  [/image:\s*S\("2308[^"]*f731[^"]*"\)/g,   'image:G("samsung-galaxy-z-flip6")'],
  [/image:\s*S\("2404[^"]*a556[^"]*"\)/g,   'image:G("samsung-galaxy-a55")'],
  [/image:\s*S\("2411[^"]*g990[^"]*"\)/g,   'image:G("samsung-galaxy-a54")'],
  [/image:\s*S\("2403[^"]*a546[^"]*"\)/g,   'image:G("samsung-galaxy-a54")'],
  [/image:\s*S\("2303[^"]*a346[^"]*"\)/g,   'image:G("samsung-galaxy-a34")'],
  [/image:\s*S\("2401[^"]*a256[^"]*"\)/g,   'image:G("samsung-galaxy-a34")'],
  [/image:\s*S\("2311[^"]*a155[^"]*"\)/g,   'image:G("samsung-galaxy-a55")'],
  [/image:\s*S\("2203[^"]*a536[^"]*"\)/g,   'image:G("samsung-galaxy-a54")'],

  // GOOGLE
  [/image:\s*GC\("google","pixel-9-pro-xl"\)/g,    'image:G("google-pixel-9-pro-")'],
  [/image:\s*GC\("google","pixel-9-pro-fold"\)/g,  'image:G("google-pixel-9-")'],
  [/image:\s*GC\("google","pixel-9-pro"\)/g,       'image:G("google-pixel-9-pro-")'],
  [/image:\s*GC\("google","pixel-9"\)/g,           'image:G("google-pixel-9-")'],
  [/image:\s*GC\("google","pixel-8-pro"\)/g,       'image:G("google-pixel-8-pro")'],
  [/image:\s*GC\("google","pixel-8a"\)/g,          'image:G("google-pixel-8")'],
  [/image:\s*GC\("google","pixel-8"\)/g,           'image:G("google-pixel-8")'],
  [/image:\s*GC\("google","pixel-7a"\)/g,          'image:G("google-pixel-8")'],
  [/image:\s*GC\("google","pixel-7-pro"\)/g,       'image:G("google-pixel-8-pro")'],
  [/image:\s*GC\("google","pixel-7"\)/g,           'image:G("google-pixel-8")'],

  // ONEPLUS
  [/image:\s*OP\([^)]*202412[^)]*\)/g,             'image:G("oneplus-13")'],
  [/image:\s*OP\([^)]*202501[^)]*13r[^)]*\)/g,     'image:G("oneplus-13")'],
  [/image:\s*OP\([^)]*202401[^)]*13r[^)]*\)/g,     'image:G("oneplus-13")'],
  [/image:\s*OP\([^)]*202401[^)]*12[^)]*\)/g,      'image:G("oneplus-12")'],
  [/image:\s*OP\([^)]*202301[^)]*\)/g,             'image:G("oneplus-11")'],
  [/image:\s*GC\("oneplus","13r"\)/g,              'image:G("oneplus-13")'],
  [/image:\s*GC\("oneplus","12r"\)/g,              'image:G("oneplus-12")'],
  [/image:\s*GC\("oneplus","12"\)/g,               'image:G("oneplus-12")'],
  [/image:\s*GC\("oneplus","11"\)/g,               'image:G("oneplus-11")'],
  [/image:\s*GC\("oneplus","nord-4"\)/g,           'image:G("oneplus-11")'],
  [/image:\s*GC\("oneplus","nord-ce-4"\)/g,        'image:G("oneplus-11")'],
  [/image:\s*GC\("oneplus","nord-3"\)/g,           'image:G("oneplus-11")'],

  // POCO
  [/image:\s*XI\("poco-f6-pro"\)/g,   'image:G("xiaomi-poco-f6-pro")'],
  [/image:\s*XI\("poco-x6-pro"\)/g,   'image:G("xiaomi-poco-x6-pro")'],
  [/image:\s*XI\("poco-f6"\)/g,       'image:G("xiaomi-poco-f6")'],
  [/image:\s*XI\("poco-x6"\)/g,       'image:G("xiaomi-poco-x6")'],
  [/image:\s*XI\("poco-m6-pro"\)/g,   'image:G("xiaomi-poco-m6-pro")'],
  [/image:\s*XI\("poco-f5-pro"\)/g,   'image:G("xiaomi-poco-f6-pro")'],
  [/image:\s*XI\("poco-f5"\)/g,       'image:G("xiaomi-poco-f6")'],
  [/image:\s*XI\("poco-x5-pro"\)/g,   'image:G("xiaomi-poco-x6-pro")'],
  [/image:\s*XI\("poco-x5"\)/g,       'image:G("xiaomi-poco-x6")'],
  [/image:\s*XI\("poco-m5s"\)/g,      'image:G("xiaomi-poco-m6-pro")'],
  [/image:\s*XI\("poco-c65"\)/g,      'image:G("xiaomi-poco-m6-pro")'],
  [/image:\s*GC\("poco","f5-pro"\)/g, 'image:G("xiaomi-poco-f6-pro")'],
  [/image:\s*GC\("poco","f5"\)/g,     'image:G("xiaomi-poco-f6")'],
  [/image:\s*GC\("poco","x5-pro"\)/g, 'image:G("xiaomi-poco-x6-pro")'],
  [/image:\s*GC\("poco","x5"\)/g,     'image:G("xiaomi-poco-x6")'],
  [/image:\s*GC\("poco","m6-pro"\)/g, 'image:G("xiaomi-poco-m6-pro")'],
  [/image:\s*GC\("poco","m5s"\)/g,    'image:G("xiaomi-poco-m6-pro")'],
  [/image:\s*GC\("poco","c65"\)/g,    'image:G("xiaomi-poco-m6-pro")'],

  // XIAOMI
  [/image:\s*XI\("xiaomi-15-ultra"\)/g,  'image:G("xiaomi-15")'],
  [/image:\s*XI\("xiaomi-15"\)/g,        'image:G("xiaomi-15")'],
  [/image:\s*XI\("xiaomi-14t-pro"\)/g,   'image:G("xiaomi-14")'],
  [/image:\s*XI\("xiaomi-14t"\)/g,       'image:G("xiaomi-14")'],
  [/image:\s*XI\("xiaomi-14-ultra"\)/g,  'image:G("xiaomi-14")'],
  [/image:\s*XI\("xiaomi-14"\)/g,        'image:G("xiaomi-14")'],
  [/image:\s*XI\("xiaomi-13t-pro"\)/g,   'image:G("xiaomi-14")'],
  [/image:\s*XI\("xiaomi-13t"\)/g,       'image:G("xiaomi-14")'],
  [/image:\s*XI\("xiaomi-13-ultra"\)/g,  'image:G("xiaomi-13-ultra")'],
  [/image:\s*XI\("xiaomi-13-pro"\)/g,    'image:G("xiaomi-15")'],
  [/image:\s*XI\("xiaomi-13"\)/g,        'image:G("xiaomi-15")'],
  [/image:\s*XI\("xiaomi-12-pro"\)/g,    'image:G("xiaomi-14")'],
  [/image:\s*XI\("xiaomi-12"\)/g,        'image:G("xiaomi-14")'],
  [/image:\s*XI\("redmi-note-14-pro-plus-5g"\)/g, 'image:G("xiaomi-14")'],
  [/image:\s*XI\("redmi-note-13-pro-plus"\)/g,    'image:G("xiaomi-14")'],
  [/image:\s*XI\("redmi-note-13-pro"\)/g,  'image:G("xiaomi-14")'],
  [/image:\s*XI\("redmi-note-13"\)/g,      'image:G("xiaomi-15")'],
  [/image:\s*XI\("redmi-note-12-pro-plus"\)/g, 'image:G("xiaomi-14")'],
  [/image:\s*XI\("redmi-note-12"\)/g,      'image:G("xiaomi-15")'],
  [/image:\s*XI\("redmi-13c"\)/g,          'image:G("xiaomi-15")'],
  [/image:\s*XI\("redmi-12"\)/g,           'image:G("xiaomi-15")'],
  [/image:\s*GC\("xiaomi","14-ultra"\)/g,  'image:G("xiaomi-14")'],
  [/image:\s*GC\("xiaomi","13-ultra"\)/g,  'image:G("xiaomi-13-ultra")'],
  [/image:\s*GC\("xiaomi","13-pro"\)/g,    'image:G("xiaomi-15")'],
  [/image:\s*GC\("xiaomi","12-pro"\)/g,    'image:G("xiaomi-14")'],
  [/image:\s*GC\("xiaomi","redmi-note-14-pro-5g"\)/g, 'image:G("xiaomi-14")'],

  // NOTHING
  [/image:\s*GC\("nothing","phone-3a"\)/g,     'image:G("nothing-phone-3a")'],
  [/image:\s*GC\("nothing","phone-2a"\)/g,     'image:G("nothing-phone-2a")'],
  [/image:\s*GC\("nothing","phone-2a-plus"\)/g,'image:G("nothing-phone-2a")'],
  [/image:\s*GC\("nothing","phone-2a-"\)/g,    'image:G("nothing-phone-2a")'],
  [/image:\s*G\("nothing-phone-2a-"\)/g,       'image:G("nothing-phone-2a")'],

  // SONY
  [/image:\s*GC\("sony","xperia-1-vi"\)/g,  'image:G("sony-xperia-1-vi")'],
  [/image:\s*GC\("sony","xperia-5-vi"\)/g,  'image:G("sony-xperia-1-vi")'],
  [/image:\s*GC\("sony","xperia-10-vi"\)/g, 'image:G("sony-xperia-1-vi")'],
  [/image:\s*GC\("sony","xperia-1-v"\)/g,   'image:G("sony-xperia-1-vi")'],
  [/image:\s*G\("sony-xperia-5-vi"\)/g,     'image:G("sony-xperia-1-vi")'],
  [/image:\s*G\("sony-xperia-10-vi"\)/g,    'image:G("sony-xperia-1-vi")'],

  // HONOR
  [/image:\s*GC\("honor","magic7-pro"\)/g,  'image:G("honor-magic7-pro")'],
  [/image:\s*GC\("honor","200-pro"\)/g,     'image:G("honor-magic7-pro")'],
  [/image:\s*GC\("honor","200"\)/g,         'image:G("honor-magic7-pro")'],
  [/image:\s*GC\("honor","90"\)/g,          'image:G("honor-magic7-pro")'],
  [/image:\s*GC\("honor","magic-v3"\)/g,    'image:G("honor-magic7-pro")'],

  // MOTOROLA
  [/image:\s*GC\("motorola","edge-50-ultra"\)/g,  'image:G("motorola-edge-50-ultra")'],
  [/image:\s*GC\("motorola","edge-50-neo"\)/g,    'image:G("motorola-edge-50-ultra")'],
  [/image:\s*GC\("motorola","razr-50-ultra"\)/g,  'image:G("motorola-edge-50-ultra")'],
  [/image:\s*GC\("motorola","moto-g85"\)/g,       'image:G("motorola-edge-50-ultra")'],

  // HUAWEI
  [/image:\s*GC\("huawei","pura-70-pro"\)/g,   'image:G("huawei-mate-70-pro")'],
  [/image:\s*GC\("huawei","mate-70-pro"\)/g,   'image:G("huawei-mate-70-pro")'],
  [/image:\s*GC\("huawei","p60-pro"\)/g,       'image:G("huawei-p60-pro")'],
  [/image:\s*GC\("huawei","mate-60-pro"\)/g,   'image:G("huawei-mate-60-pro")'],
  [/image:\s*GC\("huawei","nova-13-pro"\)/g,   'image:G("huawei-mate-60-pro")'],

  // VIVO
  [/image:\s*GC\("vivo","x200-pro"\)/g,   'image:G("vivo-x200-pro")'],
  [/image:\s*GC\("vivo","x100-ultra"\)/g, 'image:G("vivo-x200-pro")'],
  [/image:\s*GC\("vivo","v40-pro"\)/g,    'image:G("vivo-x200-pro")'],

  // REALME
  [/image:\s*GC\("realme","gt-6"\)/g,           'image:G("realme-gt6")'],
  [/image:\s*GC\("realme","gt-6t"\)/g,          'image:G("realme-gt6")'],
  [/image:\s*GC\("realme","narzo-70-pro-5g"\)/g,'image:G("realme-gt6")'],
];

let total = 0;
for (const [pattern, replacement] of updates) {
  const matches = c.match(pattern);
  if (matches) {
    c = c.replace(pattern, replacement);
    total += matches.length;
    console.log('OK ' + matches.length + 'x: ' + String(pattern).slice(0,55));
  }
}

writeFileSync('./data/phones.ts', c, 'utf8');
console.log('\nDone! Total: ' + total + ' replacements');
