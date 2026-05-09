import { createRequire } from 'module';
import { writeFileSync } from 'fs';
const require = createRequire(import.meta.url);
const https = require('https');

function check(slug) {
  return new Promise(res => {
    const url = `https://wsrv.nl/?url=fdn2.gsmarena.com/vv/bigpic/${slug}.jpg&w=200`;
    const req = https.get(url, r => {
      const len = parseInt(r.headers['content-length']||'0');
      r.resume();
      res(r.statusCode===200 && (len===0||len>4000));
    });
    req.on('error',()=>res(false));
    req.setTimeout(6000,()=>{req.destroy();res(false);});
  });
}
const sleep = ms => new Promise(r=>setTimeout(r,ms));

const toTest = [
  ['xiaomi-redmi-note-10-pro','xiaomi-redmi-note-10-pro-','xiaomi-redmi-note-10-pro-5g'],
  ['xiaomi-redmi-note-10','xiaomi-redmi-note-10-'],
  ['xiaomi-redmi-note-9s','xiaomi-redmi-note-9s-'],
  ['xiaomi-redmi-note-9-pro','xiaomi-redmi-note-9-pro-'],
  ['xiaomi-redmi-note-12','xiaomi-redmi-note-12-'],
  ['xiaomi-redmi-note-13','xiaomi-redmi-note-13-'],
  ['xiaomi-redmi-note-11','xiaomi-redmi-note-11-'],
  ['xiaomi-redmi-note-11-pro','xiaomi-redmi-note-11-pro-'],
  ['xiaomi-redmi-note-11s','xiaomi-redmi-note-11s-'],
  ['xiaomi-redmi-note-8-pro','xiaomi-redmi-note-8-pro-'],
  ['xiaomi-redmi-note-8','xiaomi-redmi-note-8-2021','xiaomi-redmi-note-8-'],
  ['xiaomi-redmi-note-7','xiaomi-redmi-note-7-'],
  ['xiaomi-redmi-note-7-pro','xiaomi-redmi-note-7-pro-'],
  ['xiaomi-redmi-note-6-pro','xiaomi-redmi-note-6-pro-'],
  ['xiaomi-redmi-note-5-pro','xiaomi-redmi-note-5-pro-'],
  ['xiaomi-redmi-note-4','xiaomi-redmi-note-4-'],
  ['xiaomi-redmi-9','xiaomi-redmi-9-'],
  ['xiaomi-redmi-9a','xiaomi-redmi-9a-'],
  ['xiaomi-redmi-9c','xiaomi-redmi-9c-'],
  ['xiaomi-redmi-9t','xiaomi-redmi-9t-'],
  ['xiaomi-redmi-10','xiaomi-redmi-10-'],
  ['xiaomi-redmi-10a','xiaomi-redmi-10a-'],
  ['xiaomi-redmi-10c','xiaomi-redmi-10c-'],
  ['xiaomi-redmi-12','xiaomi-redmi-12-'],
  ['xiaomi-redmi-12c','xiaomi-redmi-12c-'],
  ['xiaomi-redmi-14c','xiaomi-redmi-14c-'],
  ['xiaomi-mi-9-','xiaomi-mi-9'],
  ['xiaomi-mi-9t-pro-','xiaomi-mi-9t-pro'],
  ['xiaomi-mi-8','xiaomi-mi-8-'],
  ['xiaomi-mi-8-pro-','xiaomi-mi-8-pro'],
  ['xiaomi-mi-8-lite','xiaomi-mi-8-lite-'],
  ['xiaomi-mi-10-pro-5g','xiaomi-mi-10-pro'],
  ['xiaomi-mi-11t-pro','xiaomi-11t-pro'],
  ['xiaomi-mi-11t','xiaomi-11t'],
  ['xiaomi-mi-11-lite-5g','xiaomi-11-lite-5g-ne'],
  ['xiaomi-12-lite-5g','xiaomi-12-lite'],
  ['xiaomi-12t','xiaomi-12t-'],
  ['xiaomi-12t-pro','xiaomi-12t-pro-'],
  ['xiaomi-poco-f4-5g','xiaomi-poco-f4-5g-','xiaomi-poco-f4'],
  ['xiaomi-poco-f3','xiaomi-poco-f3-'],
  ['xiaomi-poco-f2-pro','xiaomi-poco-f2-pro-'],
  ['xiaomi-poco-x3-pro','xiaomi-poco-x3-pro-'],
  ['xiaomi-poco-x3-nfc','xiaomi-poco-x3-nfc-'],
  ['xiaomi-poco-x3','xiaomi-poco-x3-'],
  ['xiaomi-poco-x4-gt','xiaomi-poco-x4-gt-'],
  ['xiaomi-poco-m4-pro','xiaomi-poco-m4-pro-'],
  ['xiaomi-poco-m3-pro-5g','xiaomi-poco-m3-pro'],
  ['xiaomi-poco-m3','xiaomi-poco-m3-'],
  ['xiaomi-poco-c40','xiaomi-poco-c40-'],
  ['xiaomi-poco-c55','xiaomi-poco-c55-'],
  ['xiaomi-civi-4-pro','xiaomi-civi-4-pro-'],
  ['xiaomi-civi-3','xiaomi-civi-3-'],
  ['xiaomi-civi-2','xiaomi-civi-2-'],
  ['xiaomi-civi-1s','xiaomi-civi-1s-'],
  ['xiaomi-mix-fold-2','xiaomi-mix-fold-2-'],
  ['xiaomi-mix-4','xiaomi-mix-4-'],
  // Samsung missing
  ['samsung-galaxy-s20-ultra-5g','samsung-galaxy-s20-ultra','samsung-galaxy-s20-ultra5g'],
  ['samsung-galaxy-s20-plus-5g','samsung-galaxy-s20-plus','samsung-galaxy-s20-plus5g'],
  ['samsung-galaxy-s205g','samsung-galaxy-s20','samsung-galaxy-s205g-'],
  ['samsung-galaxy-note20-ultra-5g','samsung-galaxy-note20-ultra','samsung-galaxy-note20-ultra5g'],
  ['samsung-galaxy-note20-5g','samsung-galaxy-note20','samsung-galaxy-note205g'],
  ['samsung-galaxy-z-fold3-5g','samsung-galaxy-z-fold3','samsung-galaxy-z-fold-3-5g'],
  ['samsung-galaxy-z-flip4','samsung-galaxy-z-flip-4','samsung-galaxy-z-flip4-'],
  ['samsung-galaxy-s10-plus','samsung-galaxy-s10-plus-'],
  ['samsung-galaxy-s10','samsung-galaxy-s10-'],
  ['samsung-galaxy-s10e','samsung-galaxy-s10e-'],
  ['samsung-galaxy-s9-plus','samsung-galaxy-s9-plus-'],
  ['samsung-galaxy-s9-','samsung-galaxy-s9'],
  ['samsung-galaxy-note10-plus-5g','samsung-galaxy-note10-plus'],
  ['samsung-galaxy-note10-5g','samsung-galaxy-note10'],
  ['samsung-galaxy-a52','samsung-galaxy-a52-','samsung-galaxy-a52-5g'],
  ['samsung-galaxy-a51','samsung-galaxy-a51-'],
  ['samsung-galaxy-a71','samsung-galaxy-a71-'],
  ['samsung-galaxy-a70','samsung-galaxy-a70-'],
  ['samsung-galaxy-a50','samsung-galaxy-a50-'],
  ['samsung-galaxy-m52-5g','samsung-galaxy-m52-5g-'],
  // OnePlus missing
  ['oneplus-7-pro','oneplus-7-pro-'],
  ['oneplus-7t','oneplus-7t-'],
  ['oneplus-6t','oneplus-6t-'],
  ['oneplus-9r','oneplus-9r-'],
  ['oneplus-9rt-5g','oneplus-9rt'],
  ['oneplus-10r','oneplus-10r-'],
  ['oneplus-nord-2-5g','oneplus-nord-2-5g-'],
  // Google missing
  ['google-pixel-4a','google-pixel-4a-'],
  ['google-pixel-4-xl','google-pixel-4-xl-'],
  ['google-pixel-4','google-pixel-4-'],
  ['google-pixel-5a-5g','google-pixel-5a'],
  // Sony missing
  ['sony-xperia-1-ii','sony-xperia-1-ii-'],
  ['sony-xperia-5-ii','sony-xperia-5-ii-'],
  ['sony-xperia-10-iv','sony-xperia-10-iv-'],
  // Others
  ['realme-gt2-pro','realme-gt-2-pro-'],
  ['oppo-find-x6-pro','oppo-find-x6-pro-'],
  ['oppo-find-x5-pro','oppo-find-x5-pro-'],
  ['motorola-moto-g82-5g','motorola-moto-g72-5g'],
  ['motorola-edge-40-pro','motorola-edge-40-pro-'],
  ['motorola-edge-40','motorola-edge-40-'],
  ['motorola-edge-30-ultra','motorola-edge-30-ultra-'],
  ['asus-rog-phone-6','asus-rog-phone-6-'],
  ['nothing-phone-2','nothing-phone-2-'],
  ['nothing-phone-1','nothing-phone-1-'],
  ['honor-magic5-pro','honor-magic5-pro-'],
  ['honor-magic6-pro','honor-magic6-pro-'],
  ['honor-x9b','honor-x9b-'],
];

const results = {};
for(const slugs of toTest) {
  let found = null;
  for(const s of slugs) {
    if(await check(s)){found=s;break;}
    await sleep(80);
  }
  results[slugs[0]] = found;
  process.stdout.write(found ? `✓ ${found}\n` : `✗ ${slugs[0]}\n`);
}
console.log(`\nFound: ${Object.values(results).filter(Boolean).length}/${toTest.length}`);
writeFileSync('./gsmarena-slugs.json', JSON.stringify(results,null,2));
