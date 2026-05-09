import { createRequire } from 'module';
import { readFileSync, writeFileSync } from 'fs';
const require = createRequire(import.meta.url);
const https = require('https');

function check(slug) {
  return new Promise(res => {
    const url = `https://wsrv.nl/?url=fdn2.gsmarena.com/vv/bigpic/${slug}.jpg&w=200`;
    const req = https.get(url, r => {
      const len = parseInt(r.headers['content-length'] || '0');
      r.resume();
      // Real image: len=0 (chunked streaming) OR len > 4000 bytes
      res(r.statusCode === 200 && (len === 0 || len > 4000));
    });
    req.on('error', () => res(false));
    req.setTimeout(7000, () => { req.destroy(); res(false); });
  });
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

// Each entry: [phoneSlug, ...candidateImageSlugs]
// Tests candidates in order, takes first that works
const TESTS = [
  // ══ XIAOMI Mi series ══
  ['xiaomi-mi-9t-pro', 'xiaomi-mi-9t-pro-','xiaomi-mi-9t-pro','xiaomi-mi-9t'],
  ['xiaomi-mi-9', 'xiaomi-mi-9-','xiaomi-mi-9','xiaomi-mi-9t'],
  ['xiaomi-mi-8', 'xiaomi-mi-8-','xiaomi-mi-8pro','xiaomi-mi-8-se'],
  ['xiaomi-mi-10-ultra', 'xiaomi-mi-10-ultra-','xiaomi-mi-10-ultra','xiaomi-mi-10-pro-5g'],
  ['xiaomi-mi-10-pro', 'xiaomi-mi-10-pro-5g','xiaomi-mi-10-pro-','xiaomi-mi-10-pro'],
  ['xiaomi-mi-11', 'xiaomi-mi-11-','xiaomi-mi-11','xiaomi-11t-pro'],
  ['xiaomi-mi-11-pro', 'xiaomi-mi-11-pro-','xiaomi-mi-11-pro','xiaomi-mi-11-ultra-'],
  ['xiaomi-mi-11-ultra', 'xiaomi-mi-11-ultra-','xiaomi-mi-11-ultra','xiaomi-11t-pro'],
  ['xiaomi-mi-a2', 'xiaomi-mi-a2-','xiaomi-mi-a2','xiaomi-mi-a2-lite'],
  ['xiaomi-mi-a3', 'xiaomi-mi-a3-','xiaomi-mi-a3','xiaomi-mi-a2-'],
  // ══ XIAOMI numbered series ══
  ['xiaomi-12', 'xiaomi-12-','xiaomi-12','xiaomi-12t'],
  ['xiaomi-12-pro', 'xiaomi-12-pro-','xiaomi-12-pro','xiaomi-12t-pro'],
  ['xiaomi-13', 'xiaomi-13-','xiaomi-13','xiaomi-13-pro-'],
  ['xiaomi-13-pro', 'xiaomi-13-pro-','xiaomi-13-pro','xiaomi-13-ultra'],
  ['xiaomi-14', 'xiaomi-14-','xiaomi-14'],
  ['xiaomi-14-ultra', 'xiaomi-14-ultra-','xiaomi-14-ultra','xiaomi-14'],
  ['xiaomi-14t', 'xiaomi-14t-','xiaomi-14t'],
  ['xiaomi-14t-pro', 'xiaomi-14t-pro-','xiaomi-14t-pro'],
  // ══ REDMI Note series ══
  ['redmi-note-5-pro', 'xiaomi-redmi-note-5-pro-','xiaomi-redmi-note-5-pro'],
  ['redmi-note-6-pro', 'xiaomi-redmi-note-6-pro-','xiaomi-redmi-note-6-pro'],
  ['redmi-note-7', 'xiaomi-redmi-note-7-','xiaomi-redmi-note-7'],
  ['redmi-note-7-pro', 'xiaomi-redmi-note-7-pro-','xiaomi-redmi-note-7-pro'],
  ['redmi-note-8', 'xiaomi-redmi-note-8-','xiaomi-redmi-note-8','xiaomi-redmi-note-8-2021'],
  ['redmi-note-8-pro', 'xiaomi-redmi-note-8-pro-','xiaomi-redmi-note-8-pro'],
  ['redmi-note-9', 'xiaomi-redmi-note-9-','xiaomi-redmi-note-9','xiaomi-redmi-note-9-pro'],
  ['redmi-note-9s', 'xiaomi-redmi-note-9s-','xiaomi-redmi-note-9s','xiaomi-redmi-note-9-pro'],
  ['redmi-note-9-pro', 'xiaomi-redmi-note-9-pro-','xiaomi-redmi-note-9-pro','xiaomi-redmi-note-9s'],
  ['redmi-note-10', 'xiaomi-redmi-note-10-','xiaomi-redmi-note-10','xiaomi-redmi-note-10-pro'],
  ['redmi-note-10-pro', 'xiaomi-redmi-note-10-pro-','xiaomi-redmi-note-10-pro','xiaomi-redmi-note-10s'],
  ['redmi-note-10s', 'xiaomi-redmi-note-10s-','xiaomi-redmi-note-10s'],
  ['redmi-note-10-5g', 'xiaomi-redmi-note-10-5g-','xiaomi-redmi-note-10-5g'],
  ['redmi-note-11', 'xiaomi-redmi-note-11-','xiaomi-redmi-note-11'],
  ['redmi-note-11-pro', 'xiaomi-redmi-note-11-pro-','xiaomi-redmi-note-11-pro'],
  ['redmi-note-11s', 'xiaomi-redmi-note-11s-','xiaomi-redmi-note-11s'],
  ['redmi-note-11-5g', 'xiaomi-redmi-note-11-5g-','xiaomi-redmi-note-11-5g'],
  ['redmi-note-12', 'xiaomi-redmi-note-12-','xiaomi-redmi-note-12'],
  ['redmi-note-12-pro', 'xiaomi-redmi-note-12-pro-','xiaomi-redmi-note-12-pro'],
  ['redmi-note-12-pro-plus', 'xiaomi-redmi-note-12-pro-plus-','xiaomi-redmi-note-12-pro-plus'],
  ['redmi-note-13', 'xiaomi-redmi-note-13-','xiaomi-redmi-note-13'],
  ['redmi-note-13-pro', 'xiaomi-redmi-note-13-pro-','xiaomi-redmi-note-13-pro'],
  ['redmi-note-13-pro-plus', 'xiaomi-redmi-note-13-pro-plus-','xiaomi-redmi-note-13-pro-plus'],
  ['redmi-note-14', 'xiaomi-redmi-note-14-','xiaomi-redmi-note-14'],
  ['redmi-note-14-pro', 'xiaomi-redmi-note-14-pro-','xiaomi-redmi-note-14-pro','xiaomi-redmi-note-14-pro-5g'],
  ['redmi-note-14-pro-plus', 'xiaomi-redmi-note-14-pro-plus-','xiaomi-redmi-note-14-pro-plus'],
  // ══ REDMI base series ══
  ['redmi-9', 'xiaomi-redmi-9-','xiaomi-redmi-9'],
  ['redmi-9a', 'xiaomi-redmi-9a-','xiaomi-redmi-9a','xiaomi-redmi-9c'],
  ['redmi-9c', 'xiaomi-redmi-9c-','xiaomi-redmi-9c'],
  ['redmi-9t', 'xiaomi-redmi-9t-','xiaomi-redmi-9t','xiaomi-redmi-9'],
  ['redmi-10', 'xiaomi-redmi-10-','xiaomi-redmi-10'],
  ['redmi-10a', 'xiaomi-redmi-10a-','xiaomi-redmi-10a'],
  ['redmi-10c', 'xiaomi-redmi-10c-','xiaomi-redmi-10c'],
  ['redmi-12', 'xiaomi-redmi-12-','xiaomi-redmi-12'],
  ['redmi-12c', 'xiaomi-redmi-12c-','xiaomi-redmi-12c'],
  ['redmi-13c', 'xiaomi-redmi-13c-','xiaomi-redmi-13c'],
  ['redmi-14', 'xiaomi-redmi-14-','xiaomi-redmi-14'],
  ['redmi-14c', 'xiaomi-redmi-14c-','xiaomi-redmi-14c'],
  ['redmi-note-4x', 'xiaomi-redmi-note-4x-','xiaomi-redmi-note-4x','xiaomi-redmi-note-4'],
  ['redmi-note-4', 'xiaomi-redmi-note-4-','xiaomi-redmi-note-4'],
  ['redmi-note-5', 'xiaomi-redmi-note-5-ai','xiaomi-redmi-note-5-pro'],
  // ══ POCO series ══
  ['poco-f1', 'xiaomi-poco-f1-','xiaomi-poco-f1'],
  ['poco-f2-pro', 'xiaomi-poco-f2-pro-','xiaomi-poco-f2-pro'],
  ['poco-f3', 'xiaomi-poco-f3-','xiaomi-poco-f3'],
  ['poco-f4', 'xiaomi-poco-f4-5g','xiaomi-poco-f4-5g-','xiaomi-poco-f4'],
  ['poco-f4-gt', 'xiaomi-poco-f4-gt-','xiaomi-poco-f4-gt'],
  ['poco-x2', 'xiaomi-poco-x2-','xiaomi-poco-x2'],
  ['poco-x3', 'xiaomi-poco-x3-','xiaomi-poco-x3'],
  ['poco-x3-nfc', 'xiaomi-poco-x3-nfc-','xiaomi-poco-x3-nfc'],
  ['poco-x3-pro', 'xiaomi-poco-x3-pro-','xiaomi-poco-x3-pro'],
  ['poco-x3-gt', 'xiaomi-poco-x3-gt-','xiaomi-poco-x3-gt'],
  ['poco-x4-pro-5g', 'xiaomi-poco-x4-pro-5g-','xiaomi-poco-x4-pro-5g'],
  ['poco-x4-gt', 'xiaomi-poco-x4-gt-','xiaomi-poco-x4-gt'],
  ['poco-x5', 'xiaomi-poco-x5-','xiaomi-poco-x5'],
  ['poco-x5-pro', 'xiaomi-poco-x5-pro-','xiaomi-poco-x5-pro'],
  ['poco-x6', 'xiaomi-poco-x6-','xiaomi-poco-x6'],
  ['poco-x6-pro', 'xiaomi-poco-x6-pro-','xiaomi-poco-x6-pro'],
  ['poco-m3', 'xiaomi-poco-m3-','xiaomi-poco-m3'],
  ['poco-m3-pro-5g', 'xiaomi-poco-m3-pro-5g-','xiaomi-poco-m3-pro-5g'],
  ['poco-m4-pro', 'xiaomi-poco-m4-pro-','xiaomi-poco-m4-pro'],
  ['poco-m4-5g', 'xiaomi-poco-m4-5g-','xiaomi-poco-m4-5g','xiaomi-poco-m3'],
  ['poco-m5', 'xiaomi-poco-m5-','xiaomi-poco-m5','xiaomi-poco-m4-pro'],
  ['poco-m5s', 'xiaomi-poco-m5s-','xiaomi-poco-m5s'],
  ['poco-m6-pro', 'xiaomi-poco-m6-pro-','xiaomi-poco-m6-pro'],
  ['poco-c40', 'xiaomi-poco-c40-','xiaomi-poco-c40'],
  ['poco-c55', 'xiaomi-poco-c55-','xiaomi-poco-c55'],
  ['poco-c65', 'xiaomi-poco-c65-','xiaomi-poco-c65','xiaomi-poco-c55'],
  ['poco-f6', 'xiaomi-poco-f6-','xiaomi-poco-f6'],
  ['poco-f6-pro', 'xiaomi-poco-f6-pro-','xiaomi-poco-f6-pro'],
  // ══ SAMSUNG S series ══
  ['samsung-galaxy-s20-ultra', 'samsung-galaxy-s20-ultra-5g-','samsung-galaxy-s20-ultra','samsung-galaxy-s20u5g'],
  ['samsung-galaxy-s20-plus', 'samsung-galaxy-s20-plus-','samsung-galaxy-s20-plus5g'],
  ['samsung-galaxy-s20', 'samsung-galaxy-s205g-','samsung-galaxy-s20-5g','samsung-galaxy-s20'],
  ['samsung-galaxy-note-20-ultra', 'samsung-galaxy-note20-ultra-5g-','samsung-galaxy-note20-ultra'],
  ['samsung-galaxy-note-20', 'samsung-galaxy-note20-5g-','samsung-galaxy-note20'],
  ['samsung-galaxy-s10-plus', 'samsung-galaxy-s10-plus-','samsung-galaxy-s10-plus'],
  ['samsung-galaxy-s9-plus', 'samsung-galaxy-s9-plus-','samsung-galaxy-s9-plus'],
  ['samsung-galaxy-note-10-plus', 'samsung-galaxy-note10-plus-5g-','samsung-galaxy-note10-plus'],
  ['samsung-galaxy-note-10', 'samsung-galaxy-note10-5g-','samsung-galaxy-note10'],
  ['samsung-galaxy-a52', 'samsung-galaxy-a52-5g-','samsung-galaxy-a52-5g','samsung-galaxy-a52'],
  ['samsung-galaxy-a51', 'samsung-galaxy-a51-5g-','samsung-galaxy-a51','samsung-galaxy-a52'],
  ['samsung-galaxy-m52-5g', 'samsung-galaxy-m52-5g-','samsung-galaxy-m52-5g'],
  // ══ ONEPLUS ══
  ['oneplus-6t', 'oneplus-6t-','oneplus-6t'],
  ['oneplus-7-pro', 'oneplus-7-pro-','oneplus-7-pro','oneplus-7t-'],
  ['oneplus-7t', 'oneplus-7t-','oneplus-7t'],
  ['oneplus-9rt', 'oneplus-9rt-5g-','oneplus-9rt-5g','oneplus-9rt'],
  // ══ GOOGLE ══
  ['google-pixel-4', 'google-pixel-4-','google-pixel-4'],
  ['google-pixel-4-xl', 'google-pixel-4-xl-','google-pixel-4-xl'],
  // ══ SONY ══
  ['sony-xperia-1-ii', 'sony-xperia-1-ii-','sony-xperia-1-ii'],
  ['sony-xperia-5-ii', 'sony-xperia-5-ii-','sony-xperia-5-ii'],
  // ══ OTHERS ══
  ['asus-rog-phone-6', 'asus-rog-phone-6-','asus-rog-phone-6','asus-rog-phone-6-pro'],
  ['nothing-phone-2', 'nothing-phone-2-','nothing-phone-2'],
  ['samsung-galaxy-z-flip4', 'samsung-galaxy-z-flip4-','samsung-galaxy-z-flip4','samsung-galaxy-z-flip-4'],
];

const results = {};
console.log(`Testing ${TESTS.length} phones...`);
let found = 0;

for (const [phoneSlug, ...candidates] of TESTS) {
  let best = null;
  for (const slug of candidates) {
    const ok = await check(slug);
    await sleep(80);
    if (ok) { best = slug; break; }
  }
  results[phoneSlug] = best;
  process.stdout.write(best ? `✓ ${phoneSlug} → ${best}\n` : `✗ ${phoneSlug}\n`);
  if (best) found++;
}

console.log(`\nFound: ${found}/${TESTS.length}`);
writeFileSync('./slug-results.json', JSON.stringify(results, null, 2));
