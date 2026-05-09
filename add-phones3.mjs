/**
 * Генератор ~750 телефонов для phonератingс
 * Формат: [id, slug, name, brand, gsmarenaSlug, price, year, color, display, proc, ram, storage, cam, fc, battery, os, charging, weight, ip, nfc, g5, perf, cam_s, bat_s, disp_s, des_s, val_s]
 */
import { readFileSync, writeFileSync } from 'fs';

const G = s => `G("${s}")`;
const ts = (p,c,b,d,des,v) => Math.round((p+c+b+d+des+v)/6);

function ph(id, slug, name, brand, img, price, year, color, disp, proc, ram, stor, cam, fc, bat, os, chg, wt, ip, nfc, g5, perf, cscore, bscore, dscore, desscore, vscore, pop=55, dim='161×74×8 мм') {
  return `  {id:"${id}",slug:"${slug}",name:"${name}",brand:"${brand}",image:${G(img)},price:${price},priceLabel:"от ${price.toLocaleString('ru')} ₽",year:${year},color:"${color}",popularity:${pop},
   specs:{display:'${disp}',processor:"${proc}",ram:"${ram}",storage:"${stor}",mainCamera:"${cam}",frontCamera:"${fc}",battery:"${bat}",os:"${os}",charging:"${chg}",weight:"${wt}",dimensions:"${dim}",protection:"${ip}",nfc:${nfc},fiveG:${g5}},
   scores:{performance:${perf},camera:${cscore},battery:${bscore},display:${dscore},design:${desscore},value:${vscore}},totalScore:${ts(perf,cscore,bscore,dscore,desscore,vscore)}},`;
}

const entries = [];

// ══════════════════════════════════════════════════════════
// SAMSUNG — S серия (старые флагманы)
// ══════════════════════════════════════════════════════════
entries.push(ph('ss10u','samsung-galaxy-s10-plus','Samsung Galaxy S10+','Samsung','samsung-galaxy-s10-plus',29990,2019,'#1C1C1E','6.4" Dynamic AMOLED, 3040×1440, 60 Гц','Exynos 9820/Snapdragon 855','8 ГБ','128 ГБ — 1 ТБ','12+12+16 МП, f/1.5','10+8 МП, f/1.9','4100 мАч','Android 9 → 12','25 Вт / 15 Вт','175 г','IP68',true,true,72,80,74,88,82,76,65,'157.6×74.1×7.8 мм'));
entries.push(ph('ss10','samsung-galaxy-s10','Samsung Galaxy S10','Samsung','samsung-galaxy-s10',24990,2019,'#27AE60','6.1" Dynamic AMOLED, 3040×1440, 60 Гц','Exynos 9820/Snapdragon 855','8 ГБ','128 ГБ — 512 ГБ','12+12+16 МП, f/1.5','10 МП, f/1.9','3400 мАч','Android 9 → 12','25 Вт / 15 Вт','157 г','IP68',true,true,72,78,70,86,82,78,62,'149.9×70.4×7.8 мм'));
entries.push(ph('ss10e','samsung-galaxy-s10e','Samsung Galaxy S10e','Samsung','samsung-galaxy-s10e',17990,2019,'#FFEB3B','5.8" Dynamic AMOLED, 2280×1080, 60 Гц','Exynos 9820/Snapdragon 855','6 ГБ','128 ГБ — 256 ГБ','12+16 МП, f/1.5','10 МП, f/1.9','3100 мАч','Android 9 → 12','25 Вт / 15 Вт','150 г','IP68',true,true,72,74,66,82,80,80,58,'142.2×69.9×7.9 мм'));
entries.push(ph('ss9p','samsung-galaxy-s9-plus','Samsung Galaxy S9+','Samsung','samsung-galaxy-s9-plus',19990,2018,'#1C1C1E','6.2" Super AMOLED, 2960×1440, 60 Гц','Exynos 9810/Snapdragon 845','6 ГБ','64 ГБ — 256 ГБ','12+12 МП, f/1.5','8 МП, f/1.7','3500 мАч','Android 8 → 10','15 Вт / 15 Вт','189 г','IP68',true,false,68,76,68,86,80,76,58,'158.1×73.8×8.5 мм'));
entries.push(ph('ss9','samsung-galaxy-s9','Samsung Galaxy S9','Samsung','samsung-galaxy-s9',14990,2018,'#3498DB','5.8" Super AMOLED, 2960×1440, 60 Гц','Exynos 9810/Snapdragon 845','4 ГБ','64 ГБ — 256 ГБ','12 МП, f/1.5-2.4','8 МП, f/1.7','3000 мАч','Android 8 → 10','15 Вт / 15 Вт','163 г','IP68',true,false,68,72,64,84,80,78,55,'147.7×68.7×8.5 мм'));
entries.push(ph('sn10u','samsung-galaxy-note-10-plus','Samsung Galaxy Note 10+','Samsung','samsung-galaxy-note10-plus',34990,2019,'#1C1C1E','6.8" Dynamic AMOLED, 3040×1440, 60 Гц','Exynos 9825/Snapdragon 855+','12 ГБ','256 ГБ — 512 ГБ','12+12+16+ToF МП, f/1.5','10 МП, f/2.2','4300 мАч','Android 9 → 12','45 Вт / 12 Вт','196 г','IP68',true,true,74,82,78,90,84,74,65,'162.3×77.2×7.9 мм'));
entries.push(ph('sn10','samsung-galaxy-note-10','Samsung Galaxy Note 10','Samsung','samsung-galaxy-note10-5g',24990,2019,'#3498DB','6.3" Dynamic AMOLED, 2280×1080, 60 Гц','Exynos 9825/Snapdragon 855+','8 ГБ','256 ГБ — 512 ГБ','12+12+16 МП, f/1.5','10 МП, f/2.2','3500 мАч','Android 9 → 12','25 Вт / 12 Вт','168 г','IP68',true,false,74,78,70,86,82,76,60,'151.0×71.8×7.9 мм'));
entries.push(ph('sn10l','samsung-galaxy-note-10-lite','Samsung Galaxy Note 10 Lite','Samsung','samsung-galaxy-note10-lite',19990,2020,'#E74C3C','6.7" Super AMOLED, 2400×1080, 60 Гц','Exynos 9810','6 ГБ','128 ГБ — 256 ГБ','12+12+12 МП, f/1.7','32 МП, f/2.2','4500 мАч','Android 10 → 13','25 Вт',199,'нет',true,false,68,76,80,82,78,78,58,'163.7×76.1×8.7 мм'));

// ══════════════════════════════════════════════════════════
// SAMSUNG A серия (старые + пропущенные)
// ══════════════════════════════════════════════════════════
const sA = [
  ['sa10','samsung-galaxy-a10','Galaxy A10','samsung-galaxy-a10',7990,2019,'#2C3E50','6.2" IPS, 1520×720, 60 Гц','Exynos 7884','2 ГБ','32 ГБ','13+5 МП, f/1.9','5 МП, f/2.0','3400 мАч','Android 9 → 11','15 Вт','173 г','нет',false,false,38,52,66,62,58,90,50,'155.6×75.6×7.9 мм'],
  ['sa20','samsung-galaxy-a20','Galaxy A20','samsung-galaxy-a20',9990,2019,'#E74C3C','6.4" Super AMOLED, 1560×720, 60 Гц','Exynos 7884','3 ГБ','32 ГБ','13+5 МП, f/1.9','8 МП, f/2.0','4000 мАч','Android 9 → 11','15 Вт','169 г','нет',false,false,42,56,74,68,64,88,50,'161.7×76.6×7.8 мм'],
  ['sa30','samsung-galaxy-a30','Galaxy A30','samsung-galaxy-a30',12990,2019,'#9B59B6','6.4" Super AMOLED, 2340×1080, 60 Гц','Exynos 7904','4 ГБ','64 ГБ','16+5 МП, f/1.7','16 МП, f/2.0','4000 мАч','Android 9 → 11','15 Вт','165 г','нет',false,false,46,62,74,76,68,86,52,'158.5×74.7×7.7 мм'],
  ['sa40','samsung-galaxy-a40','Galaxy A40','samsung-galaxy-a40',14990,2019,'#27AE60','5.9" Super AMOLED, 2340×1080, 60 Гц','Exynos 7904','4 ГБ','64 ГБ','16+5 МП, f/1.7','25 МП, f/2.0','3100 мАч','Android 9 → 11','15 Вт','140 г','нет',true,false,46,64,64,76,70,84,52,'144.4×69.0×7.9 мм'],
  ['sa50','samsung-galaxy-a50','Galaxy A50','samsung-galaxy-a50',15990,2019,'#3498DB','6.4" Super AMOLED, 2340×1080, 60 Гц','Exynos 9610','4 ГБ','64 ГБ','25+8+5 МП, f/1.7','25 МП, f/2.0','4000 мАч','Android 9 → 11','15 Вт','166 г','нет',true,false,54,66,74,78,70,84,55,'158.5×74.5×7.7 мм'],
  ['sa70','samsung-galaxy-a70','Galaxy A70','samsung-galaxy-a70',19990,2019,'#E67E22','6.7" Super AMOLED, 2400×1080, 60 Гц','Snapdragon 675','6 ГБ','128 ГБ','32+8+5 МП, f/1.7','32 МП, f/2.0','4500 мАч','Android 9 → 11','25 Вт','183 г','нет',true,false,58,68,80,80,72,80,58,'164.3×76.7×7.9 мм'],
  ['sa01','samsung-galaxy-a01','Galaxy A01','samsung-galaxy-a01',6990,2020,'#E74C3C','5.7" IPS, 1520×720, 60 Гц','Snapdragon 439','2 ГБ','16 ГБ','13+2 МП, f/2.0','5 МП, f/2.0','3000 мАч','Android 10 → 11','10 Вт','154 г','нет',false,false,38,48,60,58,56,90,45,'143.0×70.9×8.3 мм'],
  ['sa11','samsung-galaxy-a11','Galaxy A11','samsung-galaxy-a11',8990,2020,'#2ECC71','6.4" IPS, 1560×720, 60 Гц','Snapdragon 450','3 ГБ','32 ГБ','13+5+2 МП, f/1.8','8 МП, f/2.0','4000 мАч','Android 10 → 12','15 Вт','177 г','нет',false,false,42,54,74,62,60,90,48,'161.4×76.3×8.0 мм'],
  ['sa31','samsung-galaxy-a31','Galaxy A31','samsung-galaxy-a31',14990,2020,'#8E44AD','6.4" Super AMOLED, 2400×1080, 60 Гц','MediaTek Helio P65','4 ГБ','64 ГБ','48+8+5+5 МП, f/2.0','20 МП, f/2.0','5000 мАч','Android 10 → 12','15 Вт','185 г','нет',false,false,46,64,86,78,68,84,55,'159.3×73.1×8.6 мм'],
  ['sa41','samsung-galaxy-a41','Galaxy A41','samsung-galaxy-a41',17990,2020,'#3498DB','6.1" Super AMOLED, 2520×1080, 60 Гц','MediaTek Helio P65','4 ГБ','64 ГБ','48+8+5 МП, f/2.0','25 МП, f/2.0','3500 мАч','Android 10 → 12','15 Вт','152 г','нет',true,false,46,66,68,80,72,82,56,'149.9×69.8×7.9 мм'],
];
for (const a of sA) {
  const [id,slug,name,img,price,year,color,disp,proc,ram,stor,cam,fc,bat,os,chg,wt,ip,nfc,g5,perf,cs,bs,ds,dess,vs,pop,dim] = a;
  entries.push(ph(id,slug,'Samsung '+name,'Samsung',img,price,year,color,disp,proc,ram,stor,cam,fc,bat,os,chg,wt,ip,nfc,g5,perf,cs,bs,ds,dess,vs,pop,dim));
}

// ══════════════════════════════════════════════════════════
// SAMSUNG — M / F серия
// ══════════════════════════════════════════════════════════
const sMF = [
  ['sm02','samsung-galaxy-m02','Galaxy M02','samsung-galaxy-m02',5990,2021,'#E74C3C','6.5" IPS, 1600×720, 60 Гц','Snapdragon 450','2 ГБ','32 ГБ','13+2 МП, f/2.2','5 МП, f/2.0','5000 мАч','Android 10','10 Вт','196 г','нет',false,false,38,46,87,60,56,92,42,'164.2×75.9×9.1 мм'],
  ['sm12','samsung-galaxy-m12','Galaxy M12','samsung-galaxy-m12',9990,2021,'#27AE60','6.5" PLS IPS, 1600×720, 90 Гц','Exynos 850','4 ГБ','64 ГБ','48+5+2+2 МП, f/2.0','8 МП, f/2.2','6000 мАч','Android 11 → 13','15 Вт','213 г','нет',false,false,44,60,92,64,60,90,50,'164.0×75.9×9.7 мм'],
  ['sm22','samsung-galaxy-m22','Galaxy M22','samsung-galaxy-m22',14990,2021,'#3498DB','6.4" Super AMOLED, 2400×1080, 90 Гц','MediaTek Helio G80','4 ГБ','64 ГБ','48+8+2+2 МП, f/2.0','13 МП, f/2.2','5000 мАч','Android 11 → 13','25 Вт','186 г','нет',false,false,50,62,86,80,68,86,55,'159.3×74.0×8.4 мм'],
  ['sm32','samsung-galaxy-m32','Galaxy M32','samsung-galaxy-m32',16990,2021,'#9B59B6','6.4" Super AMOLED, 2400×1080, 90 Гц','MediaTek Helio G85','6 ГБ','128 ГБ','64+8+5+2 МП, f/1.8','20 МП, f/2.2','6000 мАч','Android 11 → 13','25 Вт','180 г','нет',false,false,50,68,92,80,68,84,58,'158.4×73.6×8.4 мм'],
  ['sm52','samsung-galaxy-m52-5g','Galaxy M52 5G','samsung-galaxy-m52-5g',22990,2021,'#8E44AD','6.7" Super AMOLED, 2400×1080, 120 Гц','Snapdragon 778G','6 ГБ','128 ГБ','64+12+5 МП, f/1.8','32 МП, f/2.2','5000 мАч','Android 11 → 13','25 Вт','173 г','нет',true,true,72,72,86,84,72,84,62,'164.5×76.4×7.4 мм'],
  ['sf12','samsung-galaxy-f12','Galaxy F12','samsung-galaxy-f12',9990,2021,'#2ECC71','6.5" PLS IPS, 1600×720, 90 Гц','Exynos 850','4 ГБ','64 ГБ','48+5+2+2 МП, f/2.0','8 МП, f/2.2','6000 мАч','Android 11','15 Вт','210 г','нет',false,false,44,60,92,64,60,90,48,'164.0×75.9×9.7 мм'],
  ['sf22','samsung-galaxy-f22','Galaxy F22','samsung-galaxy-f22',12990,2021,'#E74C3C','6.4" Super AMOLED, 1600×720, 90 Гц','MediaTek Helio G80','4 ГБ','64 ГБ','48+8+2+2 МП, f/2.0','13 МП, f/2.2','6000 мАч','Android 11 → 13','15 Вт','203 г','нет',false,false,50,62,92,70,64,88,50,'166.5×77.0×9.5 мм'],
  ['sf42','samsung-galaxy-f42-5g','Galaxy F42 5G','samsung-galaxy-f42-5g',17990,2021,'#1A5276','6.6" Super AMOLED, 2408×1080, 90 Гц','Dimensity 700','6 ГБ','128 ГБ','64+8+5 МП, f/1.9','8 МП, f/2.2','5000 мАч','Android 11 → 13','15 Вт','193 г','нет',false,true,58,70,86,80,66,86,55,'163.8×76.3×8.4 мм'],
  ['sf54','samsung-galaxy-f54-5g','Galaxy F54 5G','samsung-galaxy-f54-5g',22990,2023,'#6C5CE7','6.7" Super AMOLED, 2400×1080, 120 Гц','Exynos 1380','8 ГБ','256 ГБ','108+8+2 МП, f/1.8','32 МП, f/2.2','6000 мАч','Android 13 → 15','25 Вт','199 г','нет',true,true,66,74,92,82,70,86,60,'163.7×76.3×8.0 мм'],
  ['sfxc6','samsung-galaxy-xcover-6-pro','Galaxy XCover 6 Pro','samsung-galaxy-xcover-6-pro',34990,2022,'#2C3E50','6.6" PLS IPS, 2408×1080, 60 Гц','Snapdragon 778G','6 ГБ','128 ГБ','50+8 МП, f/1.8','13 МП, f/2.4','4050 мАч','Android 12 → 15','15 Вт','249 г','IP68',true,true,72,66,72,72,78,78,52,'168.8×79.6×10.1 мм'],
];
for (const a of sMF) {
  const [id,slug,name,img,price,year,color,disp,proc,ram,stor,cam,fc,bat,os,chg,wt,ip,nfc,g5,perf,cs,bs,ds,dess,vs,pop,dim] = a;
  entries.push(ph(id,slug,'Samsung '+name,'Samsung',img,price,year,color,disp,proc,ram,stor,cam,fc,bat,os,chg,wt,ip,nfc,g5,perf,cs,bs,ds,dess,vs,pop,dim));
}

// ══════════════════════════════════════════════════════════
// SAMSUNG J серия (2017-2019)
// ══════════════════════════════════════════════════════════
entries.push(ph('sj8','samsung-galaxy-j8','Samsung Galaxy J8','Samsung','samsung-galaxy-j8',9990,2018,'#2ECC71','6.0" Super AMOLED, 1480×720, 60 Гц','Snapdragon 450','3 ГБ','32 ГБ','16+5 МП, f/1.7','16 МП, f/1.9','3500 мАч','Android 8 → 10','15 Вт','174 г','нет',false,false,38,58,66,66,64,88,48,'160.6×75.7×7.5 мм'));
entries.push(ph('sj6p','samsung-galaxy-j6-plus','Samsung Galaxy J6+','Samsung','samsung-galaxy-j6-plus',8990,2018,'#E74C3C','6.0" PLS IPS, 1480×720, 60 Гц','Snapdragon 425','3 ГБ','32 ГБ','13+5 МП, f/1.9','8 МП, f/2.0','3300 мАч','Android 8 → 10','10 Вт','169 г','нет',false,false,36,52,62,60,60,88,45,'161.4×76.9×7.9 мм'));
entries.push(ph('sj4p','samsung-galaxy-j4-plus','Samsung Galaxy J4+','Samsung','samsung-galaxy-j4-plus',6990,2018,'#9B59B6','6.0" PLS IPS, 1480×720, 60 Гц','Snapdragon 425','2 ГБ','32 ГБ','13 МП, f/1.9','5 МП, f/2.0','3300 мАч','Android 8 → 10','10 Вт','168 г','нет',false,false,34,46,62,58,58,90,42,'161.4×76.9×7.9 мм'));
entries.push(ph('sj2c','samsung-galaxy-j2-core','Samsung Galaxy J2 Core','Samsung','samsung-galaxy-j2-core',5990,2018,'#3498DB','5.0" TFT, 960×540, 60 Гц','Exynos 7570','1 ГБ','8 ГБ','8 МП, f/2.2','5 МП, f/2.2','2600 мАч','Android 8.1 Go','5 Вт','154 г','нет',false,false,30,38,50,50,50,90,38,'143.4×71.0×8.7 мм'));

// ══════════════════════════════════════════════════════════
// REDMI (отдельный бренд)
// ══════════════════════════════════════════════════════════
const redmiPhones = [
  // Redmi Note старые серии
  ['rdn7','xiaomi-redmi-note-7','Redmi Note 7','Redmi','xiaomi-redmi-note-7',9990,2019,'#3498DB','6.3" IPS, 2340×1080, 60 Гц','Snapdragon 660','3 ГБ','32 ГБ','48+5 МП, f/1.79','13 МП, f/2.0','4000 мАч','Android 9, MIUI 10','18 Вт','186 г','нет',false,false,56,60,74,76,66,88,62],
  ['rdn7p','xiaomi-redmi-note-7-pro','Redmi Note 7 Pro','Redmi','xiaomi-redmi-note-7-pro',12990,2019,'#E74C3C','6.3" IPS, 2340×1080, 60 Гц','Snapdragon 675','4 ГБ','64 ГБ','48+5 МП, f/1.79','13 МП, f/2.0','4000 мАч','Android 9, MIUI 10','18 Вт','186 г','нет',false,false,62,62,74,76,68,86,64],
  ['rdn8','xiaomi-redmi-note-8-2021','Redmi Note 8 (2021)','Redmi','xiaomi-redmi-note-8-2021',11990,2021,'#27AE60','6.3" IPS, 2340×1080, 60 Гц','Helio G85','3 ГБ','64 ГБ','48+8+2+2 МП, f/1.79','13 МП, f/2.0','4000 мАч','Android 11, MIUI 12','18 Вт','190 г','нет',false,false,50,60,74,74,66,86,58],
  ['rdn8p','xiaomi-redmi-note-8-pro','Redmi Note 8 Pro','Redmi','xiaomi-redmi-note-8-pro',15990,2019,'#27AE60','6.53" IPS, 2340×1080, 60 Гц','Helio G90T','6 ГБ','64 ГБ','64+8+2+2 МП, f/1.79','20 МП, f/2.0','4500 мАч','Android 9, MIUI 10','18 Вт','200 г','нет',false,false,56,66,80,76,68,84,64],
  ['rdn9t','xiaomi-redmi-note-9t','Redmi Note 9T','Redmi','xiaomi-redmi-note-9t',14990,2021,'#3498DB','6.53" IPS, 2340×1080, 60 Гц','Dimensity 800U','4 ГБ','64 ГБ','48+2+2 МП, f/1.79','13 МП, f/2.25','5000 мАч','Android 10, MIUI 12','18 Вт','199 г','нет',false,true,64,58,86,74,66,84,58],
  ['rdn95g','xiaomi-redmi-note-9-5g','Redmi Note 9 5G','Redmi','xiaomi-redmi-note-9-5g',13990,2020,'#9B59B6','6.53" IPS, 2340×1080, 60 Гц','Dimensity 800U','4 ГБ','128 ГБ','48+2+2 МП, f/1.79','13 МП, f/2.25','5020 мАч','Android 10, MIUI 12','18 Вт','200 г','нет',false,true,64,56,86,72,64,84,56],
  ['rdn105g','xiaomi-redmi-note-10-5g','Redmi Note 10 5G','Redmi','xiaomi-redmi-note-10-5g',14990,2021,'#27AE60','6.5" IPS, 2400×1080, 90 Гц','Dimensity 700','4 ГБ','128 ГБ','48+2+2 МП, f/1.79','8 МП, f/2.0','5000 мАч','Android 11, MIUI 12','18 Вт','190 г','нет',false,true,64,56,86,74,66,86,58],
  ['rdn10s','xiaomi-redmi-note-10s','Redmi Note 10S','Redmi','xiaomi-redmi-note-10s',17990,2021,'#8E44AD','6.43" Super AMOLED, 2400×1080, 60 Гц','Helio G95','6 ГБ','64 ГБ','64+8+5+2 МП, f/1.79','13 МП, f/2.45','5000 мАч','Android 11, MIUI 12.5','33 Вт','178 г','нет',false,false,56,68,86,80,68,84,62],
  ['rdn11s','xiaomi-redmi-note-11s','Redmi Note 11S','Redmi','xiaomi-redmi-note-11s',19990,2022,'#3498DB','6.43" Super AMOLED, 2400×1080, 90 Гц','Helio G96','6 ГБ','64 ГБ','108+8+2+2 МП, f/1.79','16 МП, f/2.45','5000 мАч','Android 11, MIUI 13','33 Вт','179 г','нет',false,false,58,72,86,80,68,84,64],
  ['rdn115g','xiaomi-redmi-note-11-5g','Redmi Note 11 5G','Redmi','xiaomi-redmi-note-11-5g',16990,2022,'#E74C3C','6.6" IPS, 2400×1080, 90 Гц','Dimensity 810','4 ГБ','128 ГБ','50+8+2 МП, f/1.8','8 МП, f/2.0','5000 мАч','Android 11, MIUI 13','33 Вт','195 г','нет',false,true,64,60,86,74,66,86,58],
  // Redmi base series
  ['rd9a','xiaomi-redmi-9a','Redmi 9A','Redmi','xiaomi-redmi-9a',6990,2020,'#2ECC71','6.53" IPS, 1600×720, 60 Гц','Helio G25','2 ГБ','32 ГБ','13 МП, f/2.2','5 МП, f/2.2','5000 мАч','Android 10, MIUI 12','10 Вт','194 г','нет',false,false,36,44,87,58,56,92,44],
  ['rd9c','xiaomi-redmi-9c','Redmi 9C','Redmi','xiaomi-redmi-9c',7990,2020,'#E74C3C','6.53" IPS, 1600×720, 60 Гц','Helio G35','2 ГБ','32 ГБ','13+2+2 МП, f/2.2','5 МП, f/2.2','5000 мАч','Android 10, MIUI 12','10 Вт','196 г','нет',false,false,38,50,87,58,58,90,45],
  ['rd9','xiaomi-redmi-9','Redmi 9','Redmi','xiaomi-redmi-9',9990,2020,'#8E44AD','6.53" IPS, 2340×1080, 60 Гц','Helio G80','3 ГБ','32 ГБ','13+8+5+2 МП, f/2.0','8 МП, f/2.0','5020 мАч','Android 10, MIUI 12','18 Вт','198 г','нет',false,false,48,56,87,72,62,88,50],
  ['rd9t','xiaomi-redmi-9t','Redmi 9T','Redmi','xiaomi-redmi-9t',11990,2021,'#F39C12','6.53" IPS, 2340×1080, 60 Гц','Snapdragon 662','4 ГБ','64 ГБ','48+8+2+2 МП, f/1.79','8 МП, f/2.0','6000 мАч','Android 10, MIUI 12','18 Вт','198 г','нет',false,false,50,60,92,72,64,86,55],
  ['rd10','xiaomi-redmi-10','Redmi 10','Redmi','xiaomi-redmi-10',11990,2021,'#3498DB','6.5" IPS, 2400×1080, 90 Гц','Helio G88','4 ГБ','64 ГБ','50+8+2+2 МП, f/1.8','8 МП, f/2.0','5000 мАч','Android 11, MIUI 12.5','18 Вт','181 г','нет',false,false,52,60,86,72,66,86,55],
  ['rd10a','xiaomi-redmi-10a','Redmi 10A','Redmi','xiaomi-redmi-10a',7990,2022,'#27AE60','6.53" IPS, 1600×720, 60 Гц','Helio G25','2 ГБ','32 ГБ','13+2 МП, f/2.2','5 МП, f/2.2','5000 мАч','Android 11, MIUI 12','10 Вт','194 г','нет',false,false,36,44,87,58,56,92,42],
  ['rd10c','xiaomi-redmi-10c','Redmi 10C','Redmi','xiaomi-redmi-10c',9990,2022,'#E74C3C','6.71" IPS, 1650×720, 60 Гц','Snapdragon 680','3 ГБ','64 ГБ','50+2 МП, f/1.8','5 МП, f/2.2','5000 мАч','Android 11, MIUI 13','18 Вт','190 г','нет',false,false,48,52,86,62,62,88,46],
  ['rd11a','xiaomi-redmi-11a','Redmi 11A','Redmi','xiaomi-redmi-11a',8990,2023,'#2ECC71','6.71" IPS, 1650×720, 60 Гц','Helio G36','2 ГБ','32 ГБ','50+0.08 МП, f/2.2','5 МП, f/2.2','5000 мАч','Android 13, MIUI 14','10 Вт','192 г','нет',false,false,34,42,87,58,56,92,42],
  ['rd12c','xiaomi-redmi-12c','Redmi 12C','Redmi','xiaomi-redmi-12c',8990,2023,'#8E44AD','6.71" IPS, 1650×720, 60 Гц','Helio G85','3 ГБ','64 ГБ','50+0.08 МП, f/1.8','5 МП, f/2.0','5000 мАч','Android 12, MIUI 13','10 Вт','192 г','нет',false,false,50,48,87,60,60,90,46],
  ['rd14c','xiaomi-redmi-14c','Redmi 14C','Redmi','xiaomi-redmi-14c',9990,2024,'#27AE60','6.88" IPS, 1640×720, 120 Гц','Helio G85','4 ГБ','128 ГБ','50+0.08 МП, f/1.8','13 МП, f/2.0','5160 мАч','Android 14, HyperOS',  '15 Вт','206 г','нет',false,false,50,50,88,62,62,90,46],
  ['rd14',  'xiaomi-redmi-14',  'Redmi 14',    'Redmi','xiaomi-redmi-14',   13990,2024,'#3498DB','6.67" AMOLED, 2400×1080, 60 Гц','Helio G99 Ultra','8 ГБ','128 ГБ','108+2+2 МП, f/1.75','20 МП, f/2.0','5160 мАч','Android 14, HyperOS','18 Вт','184 г','IP54',false,false,62,70,88,80,72,86,52],
];
for (const a of redmiPhones) {
  const [id,slug,name,brand,img,price,year,color,disp,proc,ram,stor,cam,fc,bat,os,chg,wt,ip,nfc,g5,perf,cs,bs,ds,dess,vs,pop] = a;
  entries.push(ph(id,slug,name,brand,img,price,year,color,disp,proc,ram,stor,cam,fc,bat,os,chg,wt,ip,nfc,g5,perf,cs,bs,ds,dess,vs,pop||55));
}

// ══════════════════════════════════════════════════════════
// POCO — все модели
// ══════════════════════════════════════════════════════════
const pocoPhones = [
  ['pf1','xiaomi-poco-f1','POCO F1','POCO','xiaomi-poco-f1',12990,2018,'#E74C3C','6.18" IPS, 2246×1080, 60 Гц','Snapdragon 845','6 ГБ','64 ГБ','12+5 МП, f/1.9','20 МП, f/2.0','4000 мАч','Android 8.1 → 11, MIUI','18 Вт','180 г','нет',true,false,70,64,74,76,68,84,66,'155.5×75.3×8.8 мм'],
  ['pf2p','xiaomi-poco-f2-pro','POCO F2 Pro','POCO','xiaomi-poco-f2-pro',24990,2020,'#6C3483','6.67" AMOLED, 2400×1080, 60 Гц','Snapdragon 865','6 ГБ','128 ГБ','64+5+13+2 МП, f/1.89','20 МП выдвиж., f/2.2','4700 мАч','Android 10 → 12, MIUI','30 Вт','219 г','IP53',false,true,74,70,82,84,76,80,64,'163.3×75.4×8.9 мм'],
  ['px2','xiaomi-poco-x2','POCO X2','POCO','xiaomi-poco-x2',14990,2020,'#3498DB','6.67" IPS, 2400×1080, 120 Гц','Snapdragon 730G','6 ГБ','64 ГБ','64+8+2+2 МП, f/1.89','20+2 МП, f/2.2','4500 мАч','Android 10, MIUI 11','27 Вт','218 г','нет',false,false,60,66,80,76,70,82,60,'165.3×76.6×8.8 мм'],
  ['px3',  'xiaomi-poco-x3','POCO X3','POCO','xiaomi-poco-x3',16990,2020,'#2ECC71','6.67" IPS, 2400×1080, 120 Гц','Snapdragon 732G','6 ГБ','64 ГБ','64+13+2+2 МП, f/1.89','20 МП, f/2.2','5160 мАч','Android 10, MIUI 12','33 Вт','215 г','IP53',false,false,62,66,88,76,70,82,60,'165.3×76.8×9.4 мм'],
  ['px3nfc','xiaomi-poco-x3-nfc','POCO X3 NFC','POCO','xiaomi-poco-x3-nfc',17990,2020,'#27AE60','6.67" IPS, 2400×1080, 120 Гц','Snapdragon 732G','6 ГБ','64 ГБ','64+13+2+2 МП, f/1.79','20 МП, f/2.2','5160 мАч','Android 10, MIUI 12','33 Вт','215 г','IP53',true,false,62,66,88,76,70,82,60,'165.3×76.8×9.4 мм'],
  ['px3gt','xiaomi-poco-x3-gt','POCO X3 GT','POCO','xiaomi-poco-x3-gt',19990,2021,'#E74C3C','6.6" IPS, 2400×1080, 120 Гц','Dimensity 1100','8 ГБ','128 ГБ','64+8+2 МП, f/1.79','16 МП, f/2.45','5000 мАч','Android 11, MIUI 12.5','67 Вт','193 г','IP53',true,true,72,66,86,76,70,82,60,'163.3×75.9×8.9 мм'],
  ['px4gt','xiaomi-poco-x4-gt','POCO X4 GT','POCO','xiaomi-poco-x4-gt',22990,2022,'#1A1A2E','6.6" IPS, 2400×1080, 144 Гц','Dimensity 8100','8 ГБ','128 ГБ','64+8+2 МП, f/1.73','20 МП, f/2.45','5080 мАч','Android 12, MIUI 13','67 Вт','200 г','IP53',true,true,78,66,86,78,72,82,62,'163.5×76.1×8.0 мм'],
  ['px4p','xiaomi-poco-x4-pro-5g','POCO X4 Pro 5G','POCO','xiaomi-poco-x4-pro-5g',24990,2022,'#6C5CE7','6.67" AMOLED, 2400×1080, 120 Гц','Snapdragon 695','6 ГБ','128 ГБ','108+8+2 МП, f/1.73','16 МП, f/2.45','5000 мАч','Android 11, MIUI 13','67 Вт','205 г','IP53',true,true,60,70,86,84,74,82,62,'163.7×76.5×8.1 мм'],
  ['pm3','xiaomi-poco-m3','POCO M3','POCO','xiaomi-poco-m3',9990,2020,'#3498DB','6.53" IPS, 1080×2340, 60 Гц','Snapdragon 662','4 ГБ','64 ГБ','48+2+2 МП, f/1.79','8 МП, f/2.0','6000 мАч','Android 10, MIUI 12','18 Вт','198 г','нет',false,false,50,58,92,72,64,86,50,'162.3×77.3×9.6 мм'],
  ['pm3p','xiaomi-poco-m3-pro','POCO M3 Pro 5G','POCO','xiaomi-poco-m3-pro-5g',12990,2021,'#E74C3C','6.5" Super AMOLED, 2400×1080, 90 Гц','Dimensity 700','4 ГБ','64 ГБ','48+2+2 МП, f/1.79','8 МП, f/2.0','5000 мАч','Android 11, MIUI 12','18 Вт','190 г','нет',false,true,58,56,86,78,64,86,52,'161.8×75.3×8.9 мм'],
  ['pm4','xiaomi-poco-m4-5g','POCO M4 5G','POCO','xiaomi-poco-m4-5g',12990,2022,'#27AE60','6.58" IPS, 2408×1080, 90 Гц','Dimensity 700','4 ГБ','64 ГБ','50+2 МП, f/1.79','8 МП, f/2.0','5000 мАч','Android 12, MIUI 13','18 Вт','195 г','нет',false,true,58,52,86,72,62,86,50,'163.4×76.1×8.9 мм'],
  ['pm5','xiaomi-poco-m5','POCO M5','POCO','xiaomi-poco-m5',14990,2022,'#8E44AD','6.58" IPS, 2408×1080, 90 Гц','Helio G99','4 ГБ','64 ГБ','50+2+2 МП, f/1.8','5 МП, f/2.0','5000 мАч','Android 12, MIUI 13','18 Вт','201 г','IP53',false,false,60,54,86,72,64,86,52,'163.8×76.1×8.9 мм'],
  ['pc40','xiaomi-poco-c40','POCO C40','POCO','xiaomi-poco-c40',8990,2022,'#F39C12','6.71" IPS, 1650×720, 60 Гц','JLQ JR510','3 ГБ','32 ГБ','13+2 МП, f/2.2','5 МП, f/2.2','6000 мАч','Android 11','18 Вт','204 г','нет',false,false,34,44,92,60,58,90,45,'169.6×77.4×9.0 мм'],
  ['pc55','xiaomi-poco-c55','POCO C55','POCO','xiaomi-poco-c55',9990,2023,'#27AE60','6.71" IPS, 1650×720, 60 Гц','Helio G85','4 ГБ','64 ГБ','50+0.08 МП, f/1.8','5 МП, f/2.0','5000 мАч','Android 12, MIUI 13','18 Вт','192 г','нет',false,false,50,48,87,60,60,90,44],
];
for (const a of pocoPhones) {
  const [id,slug,name,brand,img,price,year,color,disp,proc,ram,stor,cam,fc,bat,os,chg,wt,ip,nfc,g5,perf,cs,bs,ds,dess,vs,pop,dim] = a;
  entries.push(ph(id,slug,name,brand,img,price,year,color,disp,proc,ram,stor,cam,fc,bat,os,chg,wt,ip,nfc,g5,perf,cs,bs,ds,dess,vs,pop||55,dim||'163×75×8 мм'));
}

// ══════════════════════════════════════════════════════════
// XIAOMI — серия Civi, MIX, старые Mi
// ══════════════════════════════════════════════════════════
entries.push(ph('xcivi4','xiaomi-civi-4-pro','Xiaomi Civi 4 Pro','Xiaomi','xiaomi-civi-4-pro',54990,2024,'#FF6B9D','6.55" LTPO AMOLED, 2712×1220, 1-144 Гц','Dimensity 9300+','12 ГБ','256 ГБ','50+12+50 МП (Leica), f/1.6','50 МП (3D камера), f/1.6','4700 мАч','Android 14, HyperOS','67 Вт / 50 Вт','185 г','IP68',true,true,93,92,82,93,92,82,60,'154.8×73.3×7.46 мм'));
entries.push(ph('xcivi3','xiaomi-civi-3','Xiaomi Civi 3','Xiaomi','xiaomi-civi-3',39990,2023,'#E91E63','6.55" AMOLED, 2712×1220, 120 Гц','Dimensity 8200 Ultra','12 ГБ','256 ГБ','50+8+2 МП, f/1.69','32+8 МП (двойная), f/1.8','4500 мАч','Android 13, MIUI 14','67 Вт / 50 Вт','171 г','нет',true,true,78,78,80,88,88,80,58,'154.3×72.8×7.3 мм'));
entries.push(ph('xmix4','xiaomi-mix-4','Xiaomi MIX 4','Xiaomi','xiaomi-mix-4',69990,2021,'#1A1A2E','6.67" AMOLED, 2400×1080, 120 Гц','Snapdragon 888+','8 ГБ','128 ГБ','108+13+8 МП, f/1.95','20 МП (под экраном)','4500 мАч','Android 11, MIUI 12.5','120 Вт / 50 Вт','225 г','IP68',true,true,82,76,80,84,88,76,62,'163.0×75.6×8.02 мм'));
entries.push(ph('xmi9','xiaomi-mi-9','Xiaomi Mi 9','Xiaomi','xiaomi-mi-9-',19990,2019,'#3498DB','6.39" AMOLED, 2340×1080, 60 Гц','Snapdragon 855','6 ГБ','64 ГБ','48+12+16 МП, f/1.75','20 МП, f/2.0','3300 мАч','Android 9, MIUI 10','27 Вт / 20 Вт','173 г','нет',true,false,68,76,66,82,80,78,60,'157.5×74.7×7.6 мм'));
entries.push(ph('xmi9t','xiaomi-mi-9t-pro','Xiaomi Mi 9T Pro','Xiaomi','xiaomi-mi-9t-pro-',24990,2019,'#E74C3C','6.39" AMOLED, 2340×1080, 60 Гц','Snapdragon 855','6 ГБ','64 ГБ','48+13+8 МП, f/1.75','20 МП выдвиж., f/2.0','4000 мАч','Android 9, MIUI 10','27 Вт','191 г','нет',true,false,68,74,74,82,80,78,62,'156.7×74.3×8.8 мм'));
entries.push(ph('x11lite5g','xiaomi-11-lite-5g-ne','Xiaomi 11 Lite 5G NE','Xiaomi','xiaomi-11-lite-5g-ne',24990,2021,'#F39C12','6.55" AMOLED, 2400×1080, 90 Гц','Snapdragon 778G','6 ГБ','128 ГБ','64+8+5 МП, f/1.79','20 МП, f/2.2','4250 мАч','Android 11, MIUI 12.5','33 Вт','158 г','IP53',true,true,72,70,78,86,84,84,62,'160.5×75.7×6.81 мм'));
entries.push(ph('xmia3','xiaomi-mi-a3','Xiaomi Mi A3','Xiaomi','xiaomi-mi-a3',12990,2019,'#27AE60','6.088" Super AMOLED, 1560×720, 60 Гц','Snapdragon 665','4 ГБ','64 ГБ','48+8+2 МП, f/1.79','32 МП, f/2.0','4030 мАч','Android 9 → 11 (чистый)','18 Вт','173 г','нет',false,false,54,64,74,72,72,82,55,'153.5×71.9×8.5 мм'));
entries.push(ph('xmia2','xiaomi-mi-a2','Xiaomi Mi A2','Xiaomi','xiaomi-mi-a2-',10990,2018,'#E74C3C','5.99" IPS, 2160×1080, 60 Гц','Snapdragon 660','4 ГБ','32 ГБ','12+20 МП, f/1.75','20 МП, f/1.75','3010 мАч','Android 8 → 10 (чистый)','18 Вт','168 г','нет',true,false,56,70,60,72,72,80,52,'158.7×75.4×7.3 мм'));

// ══════════════════════════════════════════════════════════
// OnePlus — старые серии
// ══════════════════════════════════════════════════════════
entries.push(ph('op6t','oneplus-6t','OnePlus 6T','OnePlus','oneplus-6t',19990,2018,'#1B1B1B','6.41" AMOLED, 2340×1080, 60 Гц','Snapdragon 845','6 ГБ','128 ГБ','16+20 МП, f/1.7','16 МП, f/2.0','3700 мАч','Android 9, OxygenOS 9','20 Вт','185 г','нет',false,false,68,70,68,80,78,78,62,'157.5×74.8×8.2 мм'));
entries.push(ph('op7p','oneplus-7-pro','OnePlus 7 Pro','OnePlus','oneplus-7-pro',29990,2019,'#1B2A4A','6.67" LTPO AMOLED, 3120×1440, 90 Гц','Snapdragon 855','6 ГБ','128 ГБ','48+16+8 МП, f/1.7','16 МП выдвиж., f/2.0','4000 мАч','Android 9, OxygenOS 9','30 Вт','206 г','нет',true,false,68,76,74,90,82,76,66,'162.6×75.9×8.8 мм'));
entries.push(ph('op7t','oneplus-7t','OnePlus 7T','OnePlus','oneplus-7t',24990,2019,'#6C5CE7','6.55" AMOLED, 2400×1080, 90 Гц','Snapdragon 855+','8 ГБ','128 ГБ','48+16+12 МП, f/1.6','16 МП, f/2.0','3800 мАч','Android 10, OxygenOS 10','30 Вт','190 г','нет',true,false,70,78,70,84,80,78,64,'160.9×74.4×8.1 мм'));
entries.push(ph('op_nordce3l','oneplus-nord-ce-3-lite-5g','OnePlus Nord CE 3 Lite','OnePlus','oneplus-nord-ce-3-lite-5g',22990,2023,'#3498DB','6.72" IPS, 2400×1080, 120 Гц','Snapdragon 695','8 ГБ','128 ГБ','108+2+2 МП, f/1.75','16 МП, f/2.45','5000 мАч','Android 13, OxygenOS 13','67 Вт','195 г','IP54',true,true,60,68,86,74,70,86,58,'165.5×75.5×8.3 мм'));

// ══════════════════════════════════════════════════════════
// Google Pixel 3-4 series
// ══════════════════════════════════════════════════════════
entries.push(ph('gp_4xl','google-pixel-4-xl','Google Pixel 4 XL','Google','google-pixel-4-xl',29990,2019,'#F5F5F5','6.3" OLED, 3040×1440, 90 Гц','Snapdragon 855','6 ГБ','64 ГБ','16+12 МП, f/1.73','8 МП, f/2.0','3700 мАч','Android 10 → 14','18 Вт / 11 Вт','193 г','IP68',true,false,68,80,68,86,82,72,58,'160.4×75.1×8.2 мм'));
entries.push(ph('gp_4','google-pixel-4','Google Pixel 4','Google','google-pixel-4',24990,2019,'#F5F5F5','5.7" OLED, 2280×1080, 90 Гц','Snapdragon 855','6 ГБ','64 ГБ','16+12 МП, f/1.73','8 МП, f/2.0','2800 мАч','Android 10 → 14','18 Вт / 11 Вт','162 г','IP68',true,false,68,80,62,82,80,72,55,'147.1×68.8×8.2 мм'));
entries.push(ph('gp_4a','google-pixel-4a','Google Pixel 4a','Google','google-pixel-4a',19990,2020,'#1C1C1E','5.81" OLED, 2340×1080, 60 Гц','Snapdragon 730G','6 ГБ','128 ГБ','12.2 МП, f/1.7','8 МП, f/2.0','3140 мАч','Android 10 → 14','18 Вт',143,'IP68',false,false,60,80,62,80,76,78,58,'144×69.4×8.2 мм'));
entries.push(ph('gp_4a5g','google-pixel-4a-5g','Google Pixel 4a 5G','Google','google-pixel-4a-5g',24990,2020,'#1C1C1E','6.2" OLED, 2340×1080, 60 Гц','Snapdragon 765G','6 ГБ','128 ГБ','12.2+16 МП, f/1.7','8 МП, f/2.0','3885 мАч','Android 11 → 14','18 Вт','168 г','IP68',false,true,64,82,72,80,76,78,58,'153.9×74.0×8.2 мм'));
entries.push(ph('gp_5a','google-pixel-5a','Google Pixel 5a','Google','google-pixel-5a',27990,2021,'#1C1C1E','6.34" OLED, 2400×1080, 60 Гц','Snapdragon 765G','6 ГБ','128 ГБ','12.2+16 МП, f/1.7','8 МП, f/2.0','4680 мАч','Android 11 → 14','18 Вт','183 г','IP67',false,true,64,84,80,80,78,78,60,'156.2×73.2×8.8 мм'));

// ══════════════════════════════════════════════════════════
// Honor — дополнительные
// ══════════════════════════════════════════════════════════
entries.push(ph('hx7a','honor-x7a','Honor X7a','Honor','honor-x7a',14990,2023,'#3498DB','6.8" IPS, 1640×720, 90 Гц','Snapdragon 680','4 ГБ','128 ГБ','108+5+2+2 МП, f/1.75','8 МП, f/2.0','6000 мАч','Android 12, MagicUI 6','35 Вт','196 г','нет',false,false,50,64,92,62,66,84,50,'168.7×77.2×8.4 мм'));
entries.push(ph('hx8','honor-x8','Honor X8','Honor','honor-x8',17990,2022,'#8E44AD','6.7" IPS, 2388×1080, 90 Гц','Snapdragon 680','6 ГБ','128 ГБ','64+5+2+2 МП, f/1.9','16 МП, f/2.45','4000 мАч','Android 11, MagicUI 6','22 Вт','177 г','нет',false,false,50,64,72,72,72,80,52,'163.9×75.3×6.79 мм'));
entries.push(ph('hx9a','honor-x9a','Honor X9a 5G','Honor','honor-x9a',24990,2023,'#27AE60','6.67" AMOLED, 2388×1080, 120 Гц','Snapdragon 695','6 ГБ','128 ГБ','64+8+2 МП, f/1.9','16 МП, f/2.4','4800 мАч','Android 12, MagicUI 7','40 Вт','183 г','IP53',false,true,60,66,82,84,76,80,56,'163.3×74.7×7.7 мм'));
entries.push(ph('hm3p','honor-magic3-pro','Honor Magic3 Pro','Honor','honor-magic3-pro-plus',49990,2021,'#1A3A6B','6.76" LTPO OLED, 2772×1344, 10-120 Гц','Snapdragon 888+','8 ГБ','256 ГБ','50+64+13+ToF МП, f/1.9','13 МП, f/2.4','4600 мАч','Android 11, MagicUI 5','66 Вт / 50 Вт','213 г','IP68',true,true,82,88,82,92,88,72,64,'164.3×75.2×8.83 мм'));
entries.push(ph('hm4pro','honor-magic4-pro','Honor Magic4 Pro','Honor','honor-magic4-pro',64990,2022,'#2C3E50','6.81" LTPO AMOLED, 2848×1312, 1-120 Гц','Snapdragon 8 Gen 1','8 ГБ','256 ГБ','50+50+64 МП, f/1.6','12 МП, f/2.4','4600 мАч','Android 12, MagicUI 6','100 Вт / 100 Вт','218 г','IP68',true,true,86,88,82,93,86,72,66,'162.9×75.6×9.15 мм'));

// ══════════════════════════════════════════════════════════
// Motorola — серия G
// ══════════════════════════════════════════════════════════
entries.push(ph('mg73','motorola-moto-g73','Moto G73 5G','Motorola','motorola-moto-g73-5g',18990,2023,'#6C5CE7','6.5" pOLED, 2400×1080, 120 Гц','Dimensity 930','8 ГБ','256 ГБ','50+8 МП, f/1.8','16 МП, f/2.2','5000 мАч','Android 13','30 Вт','181 г','IP52',true,true,64,66,86,82,74,82,56,'161.5×73.8×8.3 мм'));
entries.push(ph('mg72','motorola-moto-g72','Moto G72','Motorola','motorola-moto-g72',17990,2022,'#27AE60','6.55" pOLED, 2400×1080, 120 Гц','Helio G99','6 ГБ','128 ГБ','108+8+2 МП, f/1.8','16 МП, f/2.2','5000 мАч','Android 12','33 Вт','167 г','IP52',true,false,60,68,86,82,74,82,56,'160.5×74.4×7.9 мм'));
entries.push(ph('mg62','motorola-moto-g62-5g','Moto G62 5G','Motorola','motorola-moto-g62-5g',16990,2022,'#E74C3C','6.5" IPS, 2400×1080, 120 Гц','Snapdragon 480+','4 ГБ','64 ГБ','50+8+2 МП, f/1.8','16 МП, f/2.2','5000 мАч','Android 12','20 Вт','190 г','IP52',false,true,54,62,86,74,68,84,54,'163.0×74.7×8.4 мм'));
entries.push(ph('mg52','motorola-moto-g52','Moto G52','Motorola','motorola-moto-g52',14990,2022,'#9B59B6','6.6" pOLED, 2400×1080, 90 Гц','Snapdragon 680','4 ГБ','128 ГБ','50+8+2 МП, f/1.8','16 МП, f/2.2','5000 мАч','Android 12','30 Вт','169 г','нет',false,false,48,62,86,80,72,84,54,'162.1×74.4×7.9 мм'));
entries.push(ph('mg32','motorola-moto-g32','Moto G32','Motorola','motorola-moto-g32',12990,2022,'#3498DB','6.5" IPS, 2400×1080, 90 Гц','Snapdragon 680','4 ГБ','64 ГБ','50+8+2 МП, f/1.8','16 МП, f/2.2','5000 мАч','Android 12','30 Вт','184 г','нет',false,false,48,60,86,72,66,84,52,'161.7×73.9×8.5 мм'));
entries.push(ph('mg20','motorola-moto-g20','Moto G20','Motorola','motorola-moto-g20',9990,2021,'#27AE60','6.5" IPS, 1600×720, 90 Гц','Helio G35','4 ГБ','64 ГБ','48+8+2+2 МП, f/1.7','13 МП, f/2.2','5000 мАч','Android 11','10 Вт','190 г','нет',false,false,38,58,87,64,62,86,48,'165.2×75.9×9.2 мм'));
entries.push(ph('mg30','motorola-moto-g30','Moto G30','Motorola','motorola-moto-g30',11990,2021,'#E74C3C','6.5" IPS, 1600×720, 90 Гц','Snapdragon 662','4 ГБ','64 ГБ','64+8+2+2 МП, f/1.7','13 МП, f/2.2','5000 мАч','Android 11','20 Вт','200 г','нет',false,false,50,60,87,64,62,86,50,'165.2×75.8×9.1 мм'));
entries.push(ph('mg50','motorola-moto-g50','Moto G50','Motorola','motorola-moto-g50',12990,2021,'#9B59B6','6.5" IPS, 1600×720, 90 Гц','Dimensity 700','4 ГБ','64 ГБ','48+5+2 МП, f/1.7','13 МП, f/2.0','5000 мАч','Android 11','10 Вт','206 г','нет',false,true,58,56,87,64,62,86,50,'163.8×75.9×9.0 мм'));

// ══════════════════════════════════════════════════════════
// OPPO — дополнительные
// ══════════════════════════════════════════════════════════
entries.push(ph('o_reno11','oppo-reno-11-pro','OPPO Reno 11 Pro','OPPO','oppo-reno-11-pro',39990,2023,'#27AE60','6.7" LTPO OLED, 2412×1080, 1-120 Гц','Dimensity 8200','12 ГБ','256 ГБ','50+32+8 МП, f/1.8','32 МП, f/2.4','4600 мАч','Android 14, ColorOS 14','80 Вт',185,'IP65',true,true,78,80,82,88,84,78,60,'161.4×74.3×7.36 мм'));
entries.push(ph('o_reno10','oppo-reno-10-pro','OPPO Reno 10 Pro','OPPO','oppo-reno-10-pro-5g',34990,2023,'#8E44AD','6.7" LTPO OLED, 2412×1080, 1-120 Гц','Snapdragon 778G','12 ГБ','256 ГБ','50+32+8 МП, f/1.8','32 МП, f/2.4','4600 мАч','Android 13, ColorOS 13','80 Вт','185 г','IP54',true,true,72,78,82,88,82,78,58,'161.4×74.2×7.36 мм'));
entries.push(ph('o_reno8','oppo-reno-8','OPPO Reno 8','OPPO','oppo-reno-8',27990,2022,'#3498DB','6.43" AMOLED, 2400×1080, 90 Гц','Snapdragon 680','8 ГБ','128 ГБ','50+8+2 МП, f/1.7','32 МП, f/2.4','4500 мАч','Android 12, ColorOS 12','65 Вт','179 г','нет',true,false,50,68,80,80,78,78,56,'160.2×73.4×7.67 мм'));
entries.push(ph('o_a78','oppo-a78','OPPO A78','OPPO','oppo-a78',17990,2023,'#9B59B6','6.43" AMOLED, 2400×1080, 90 Гц','Snapdragon 680','8 ГБ','128 ГБ','50+2 МП, f/1.7','8 МП, f/2.0','5000 мАч','Android 13, ColorOS 13','67 Вт','186 г','IP54',false,false,50,58,86,80,74,80,52,'160.3×73.7×7.9 мм'));

// ══════════════════════════════════════════════════════════
// Realme — GT Neo и прочие
// ══════════════════════════════════════════════════════════
entries.push(ph('r_gt3','realme-gt3','Realme GT 3','Realme','realme-gt3',39990,2023,'#FF6B35','6.74" AMOLED, 2772×1240, 144 Гц','Snapdragon 8+ Gen 1','16 ГБ','256 ГБ','50+8+2 МП, f/1.88','16 МП, f/2.45','4600 мАч','Android 13, Realme UI 4','240 Вт',199,'нет',true,true,88,76,82,90,82,76,60,'161.0×73.9×8.9 мм'));
entries.push(ph('r_gtn3t','realme-gt-neo-3t','Realme GT Neo 3T','Realme','realme-gt-neo-3t',29990,2022,'#6C5CE7','6.62" AMOLED, 2400×1080, 120 Гц','Snapdragon 870','8 ГБ','128 ГБ','64+8+2 МП, f/1.79','16 МП, f/2.45','5000 мАч','Android 12, Realme UI 3','80 Вт','174 г','нет',true,false,76,68,86,86,78,76,58,'162.9×75.8×8.4 мм'));
entries.push(ph('r_8p','realme-8-pro','Realme 8 Pro','Realme','realme-8-pro',19990,2021,'#E74C3C','6.4" Super AMOLED, 2400×1080, 60 Гц','Snapdragon 720G','6 ГБ','128 ГБ','108+8+2+2 МП, f/1.88','16 МП, f/2.45','4500 мАч','Android 11, Realme UI 2','50 Вт','176 г','нет',false,false,60,72,80,80,72,80,58,'160.6×73.9×8.1 мм'));
entries.push(ph('r_9p','realme-9-pro','Realme 9 Pro','Realme','realme-9-pro-5g',22990,2022,'#27AE60','6.6" IPS, 2412×1080, 120 Гц','Snapdragon 695','6 ГБ','128 ГБ','64+8+2 МП, f/1.79','16 МП, f/2.45','5000 мАч','Android 12, Realme UI 3','33 Вт','195 г','нет',false,true,60,68,86,74,70,80,56,'163.9×75.1×8.5 мм'));
entries.push(ph('r_10p','realme-10-pro-plus','Realme 10 Pro+','Realme','realme-10-pro-plus-5g',24990,2022,'#8E44AD','6.7" Super AMOLED, 2412×1080, 120 Гц','Dimensity 1080','8 ГБ','128 ГБ','108+8+2 МП, f/1.8','16 МП, f/2.45','5000 мАч','Android 13, Realme UI 4','67 Вт','173 г','нет',false,true,68,72,86,84,74,80,58,'162.8×74.3×7.78 мм'));

// ══════════════════════════════════════════════════════════
// Nokia дополнительные
// ══════════════════════════════════════════════════════════
entries.push(ph('nk_54','nokia-5-4','Nokia 5.4','Nokia','nokia-5-4',10990,2021,'#3498DB','6.39" IPS, 1560×720, 60 Гц','Snapdragon 662','4 ГБ','64 ГБ','48+5+2+2 МП, f/1.78','16 МП, f/2.0','4000 мАч','Android 10 → 12','10 Вт','181 г','нет',false,false,50,58,74,66,68,84,48,'160.5×75.1×8.0 мм'));
entries.push(ph('nk_34','nokia-3-4','Nokia 3.4','Nokia','nokia-3-4',9990,2020,'#8E44AD','6.39" IPS, 1560×720, 60 Гц','Snapdragon 460','3 ГБ','32 ГБ','13+5+2 МП, f/1.78','8 МП, f/2.0','4000 мАч','Android 10 → 12','10 Вт','193 г','нет',false,false,42,52,74,64,64,86,46,'160.4×75.9×8.7 мм'));
entries.push(ph('nk_x20','nokia-x20-5g','Nokia X20 5G','Nokia','nokia-x20-5g',19990,2021,'#2ECC71','6.67" IPS, 2400×1080, 60 Гц','Snapdragon 480','6 ГБ','128 ГБ','64+12+2+2 МП, f/1.79','32 МП, f/2.0','4470 мАч','Android 11 → 14','18 Вт','220 г','нет',true,true,52,64,78,74,68,80,52,'168.9×79.2×9.0 мм'));

// ══════════════════════════════════════════════════════════
// Vivo — дополнительные
// ══════════════════════════════════════════════════════════
entries.push(ph('v_x70p','vivo-x70-pro','Vivo X70 Pro','Vivo','vivo-x70-pro-',44990,2021,'#2C3E50','6.56" AMOLED, 2376×1080, 120 Гц','Exynos 1080','8 ГБ','128 ГБ','50+12+12+8 МП (Zeiss), f/1.75','32 МП, f/2.45','4400 мАч','Android 11, OriginOS 1','44 Вт / 11 Вт','188 г','IP68',true,true,78,86,80,88,86,72,62,'159.2×73.9×8.37 мм'));
entries.push(ph('v_t2','vivo-t2','Vivo T2 Pro','Vivo','vivo-t2-pro',29990,2023,'#8E44AD','6.78" AMOLED, 2800×1260, 120 Гц','Dimensity 8200','8 ГБ','128 ГБ','64+8+2 МП, f/1.75','16 МП, f/2.0','4600 мАч','Android 13, OriginOS 3','80 Вт','187 г','IP64',true,true,78,70,82,88,80,74,58,'163.8×74.4×7.3 мм'));
entries.push(ph('v_y100','vivo-y100','Vivo Y100','Vivo','vivo-y100',19990,2023,'#27AE60','6.67" AMOLED, 2400×1080, 120 Гц','Dimensity 7020','8 ГБ','128 ГБ','64+2 МП, f/1.79','16 МП, f/2.4','4800 мАч','Android 13, OriginOS 3','44 Вт','184 г','нет',false,true,62,60,82,84,76,78,56,'165.5×76.2×7.36 мм'));

// ══════════════════════════════════════════════════════════
// ZTE — дополнительные
// ══════════════════════════════════════════════════════════
entries.push(ph('z_rm9p','nubia-redmagic-9-pro','Nubia Red Magic 9 Pro','ZTE','nubia-redmagic-9-pro',64990,2023,'#FF0000','6.8" AMOLED, 2480×1116, 144 Гц','Snapdragon 8 Gen 3','12 ГБ','256 ГБ','50+50+13 МП, f/1.88','16 МП (под экраном)','5000 мАч','Android 14, RedMagic OS 9','165 Вт',229,'IP68',true,true,93,78,88,88,82,76,62,'163.0×76.4×8.9 мм'));
entries.push(ph('z_axon30u','zte-axon-30-ultra','ZTE Axon 30 Ultra','ZTE','zte-axon-30-ultra',39990,2021,'#1A1A2E','6.67" AMOLED, 2400×1080, 120 Гц','Snapdragon 888','8 ГБ','128 ГБ','64+64+8+2 МП, f/1.6','16 МП, f/2.45','4600 мАч','Android 11, MyOS 11','65 Вт','189 г','нет',true,true,82,78,82,86,80,76,58,'163.4×76.3×8.4 мм'));

// ══════════════════════════════════════════════════════════
// Lenovo дополнительные
// ══════════════════════════════════════════════════════════
entries.push(ph('l_leg5p','lenovo-legion-phone-5-pro','Lenovo Legion Phone 5 Pro','Lenovo','lenovo-legion-phone-5-pro',49990,2021,'#FF0000','6.92" AMOLED, 2460×1080, 144 Гц','Snapdragon 888+','16 ГБ','256 ГБ','64+16+2 МП, f/1.89','44 МП выдвиж.','5000 мАч','Android 11, ZUI 13','90 Вт',245,'нет',true,true,82,72,88,84,78,76,58,'168.0×78.5×9.7 мм'));
entries.push(ph('l_k14p','lenovo-k14-plus','Lenovo K14 Plus','Lenovo','lenovo-k14-plus',9990,2022,'#3498DB','6.7" IPS, 2388×1080, 60 Гц','Helio G85','4 ГБ','64 ГБ','50+2+2 МП, f/1.8','13 МП, f/2.2','5000 мАч','Android 12','18 Вт','199 г','нет',false,false,50,54,86,72,62,86,46,'167.5×77.4×8.4 мм'));

// ══════════════════════════════════════════════════════════
// TCL дополнительные
// ══════════════════════════════════════════════════════════
entries.push(ph('tcl_30','tcl-30-5g','TCL 30 5G','TCL','tcl-30-5g',14990,2022,'#E74C3C','6.67" IPS, 2400×1080, 60 Гц','Dimensity 700','4 ГБ','64 ГБ','50+2+2 МП, f/1.79','13 МП, f/2.2','5000 мАч','Android 12','15 Вт','195 г','нет',false,true,58,52,86,72,64,82,52,'165.0×77.0×8.5 мм'));

// ══════════════════════════════════════════════════════════
// Infinix дополнительные
// ══════════════════════════════════════════════════════════
entries.push(ph('if_hot40','infinix-hot-40-pro','Infinix Hot 40 Pro','Infinix','infinix-hot-40-pro',14990,2024,'#2ECC71','6.78" IPS, 1612×720, 90 Гц','Helio G99','8 ГБ','128 ГБ','108+2 МП, f/1.79','32 МП, f/2.0','5000 мАч','Android 14, XOS 14','33 Вт','193 г','нет',false,false,62,58,86,62,66,86,48,'168.0×77.2×7.8 мм'));
entries.push(ph('if_note30vip','infinix-note-30-vip','Infinix Note 30 VIP','Infinix','infinix-note-30-vip',22990,2023,'#9B59B6','6.67" AMOLED, 2400×1080, 144 Гц','Helio G99 Ultimate','12 ГБ','256 ГБ','108+13+2 МП, f/1.75','16 МП, f/2.0','5000 мАч','Android 13, XOS 13','68 Вт','184 г','IP54',false,false,62,64,86,82,74,82,52,'161.5×73.9×7.35 мм'));
entries.push(ph('if_zero40','infinix-zero-40-5g','Infinix Zero 40 5G','Infinix','infinix-zero-40-5g',27990,2024,'#27AE60','6.78" AMOLED, 2436×1080, 144 Гц','Dimensity 8200 Ultra','12 ГБ','256 ГБ','108+50+2 МП, f/1.75','50 МП, f/2.4','5000 мАч','Android 14, XOS 14','70 Вт','192 г','IP54',false,true,78,74,86,84,76,84,54,'168.5×76.8×7.38 мм'));

// ══════════════════════════════════════════════════════════
// Tecno дополнительные
// ══════════════════════════════════════════════════════════
entries.push(ph('tc_pv2','tecno-phantom-v2-fold','Tecno Phantom V2 Fold','Tecno','tecno-phantom-v2-fold',79990,2024,'#1A2A6C','7.85" LTPO AMOLED (осн), 2000×2296, 1-120 Гц','Dimensity 9000','12 ГБ','256 ГБ','50+50+13 МП, f/1.8','32 МП выдвиж.','5750 мАч','Android 14, HiOS 14','45 Вт / 20 Вт','250 г','IPX4',false,true,84,82,90,92,88,62,52,'155.0×139.5×5.8 мм'));
entries.push(ph('tc_camon20','tecno-camon-20-pro','Tecno Camon 20 Pro','Tecno','tecno-camon-20-pro-5g',24990,2023,'#E74C3C','6.67" AMOLED, 2400×1080, 120 Гц','Dimensity 8050','8 ГБ','256 ГБ','64+12+2 МП, f/1.7','32 МП, f/2.2','5000 мАч','Android 13, HiOS 13','33 Вт','186 г','нет',false,true,72,66,86,84,74,80,50,'162.5×73.5×7.9 мм'));
entries.push(ph('tc_pova6','tecno-pova-6-pro','Tecno Pova 6 Pro','Tecno','tecno-pova-6-pro-5g',19990,2024,'#9B59B6','6.78" AMOLED, 2436×1080, 120 Гц','Dimensity 6080','8 ГБ','256 ГБ','108+50 МП, f/1.75','32 МП, f/2.2','6000 мАч','Android 14, HiOS 14','68 Вт','213 г','IP54',false,true,62,68,92,82,72,80,48,'165.4×76.5×8.8 мм'));

// ══════════════════════════════════════════════════════════
// Huawei дополнительные
// ══════════════════════════════════════════════════════════
entries.push(ph('hw_n9','huawei-nova-9','Huawei Nova 9','Huawei','huawei-nova-9',29990,2021,'#27AE60','6.57" OLED, 2340×1080, 120 Гц','Snapdragon 778G','8 ГБ','128 ГБ','50+8+2+2 МП, f/1.9','32 МП, f/2.0','4300 мАч','Android 11, EMUI 12','66 Вт',174,'нет',true,false,72,76,76,86,82,74,60,'160.0×73.3×7.77 мм'));
entries.push(ph('hw_n8p','huawei-nova-8-pro','Huawei Nova 8 Pro','Huawei','huawei-nova-8-pro',34990,2021,'#3498DB','6.72" OLED, 2676×1236, 120 Гц','Kirin 985','8 ГБ','128 ГБ','64+8+2+2 МП, f/1.9','32+ToF МП, f/2.0','4000 мАч','Android 10, EMUI 11','66 Вт / 40 Вт','200 г','нет',true,false,70,76,72,88,82,72,58,'161.8×73.7×8.9 мм'));
entries.push(ph('hw_p50pocket','huawei-p50-pocket','Huawei P50 Pocket','Huawei','huawei-p50-pocket',69990,2021,'#E91E63','6.9" OLED (осн), 2790×1188, 120 Гц','Snapdragon 888 4G','8 ГБ','256 ГБ','40+13+32 МП, f/1.8','10.7 МП (внеш)','4000 мАч','Android 11, HarmonyOS 2','40 Вт',190,'IPX4',true,false,82,82,74,88,96,66,58,'170.2×75.5×7.2 мм'));

// ══════════════════════════════════════════════════════════
// Sony дополнительные
// ══════════════════════════════════════════════════════════
entries.push(ph('so_1v','sony-xperia-1-v','Sony Xperia 1 V','Sony','sony-xperia-1-v',99990,2023,'#2E3A59','6.5" 4K OLED, 3840×1644, 1-120 Гц','Snapdragon 8 Gen 2','12 ГБ','256 ГБ','52+12+12 МП, f/1.9','12 МП, f/2.0','5000 мАч','Android 13 → 14','30 Вт / 15 Вт','187 г','IP68',true,true,90,90,87,90,88,66,58,'165×71×8.3 мм'));
entries.push(ph('so_5iii','sony-xperia-5-iii','Sony Xperia 5 III','Sony','sony-xperia-5-iii',69990,2021,'#1C2B3A','6.1" 4K OLED, 3840×1644, 120 Гц','Snapdragon 888','8 ГБ','128 ГБ','12+12+12 МП, f/1.7','8 МП, f/2.0','4500 мАч','Android 11 → 14','30 Вт / 10 Вт','168 г','IP68',true,false,82,84,80,88,84,64,56,'157×68×8.2 мм'));
entries.push(ph('so_5iv','sony-xperia-5-iv','Sony Xperia 5 IV','Sony','sony-xperia-5-iv',79990,2022,'#2E3A59','6.1" OLED, 3840×1644, 1-120 Гц','Snapdragon 8 Gen 1','8 ГБ','128 ГБ','12+12+12 МП, f/1.7','12 МП, f/2.0','5000 мАч','Android 12 → 14','30 Вт / 10 Вт','172 г','IP68',true,true,86,84,87,86,84,62,56,'156×67×8.2 мм'));
entries.push(ph('so_10v','sony-xperia-10-v','Sony Xperia 10 V','Sony','sony-xperia-10-v',39990,2023,'#3D5A80','6.1" OLED, 2520×1080, 60 Гц','Snapdragon 695','6 ГБ','128 ГБ','48+12+8 МП, f/1.8','8 МП, f/2.0','5000 мАч','Android 13 → 14','30 Вт',159,'IP68',true,true,60,70,88,80,80,78,52,'155×68×8.3 мм'));

// ══════════════════════════════════════════════════════════
// Asus дополнительные
// ══════════════════════════════════════════════════════════
entries.push(ph('as_rog7','asus-rog-phone-7','Asus ROG Phone 7','Asus','asus-rog-phone-7',69990,2023,'#1A1A2E','6.78" AMOLED, 2448×1080, 165 Гц','Snapdragon 8 Gen 2','16 ГБ','512 ГБ','50+13+5 МП, f/1.9','32 МП, f/2.0','6000 мАч','Android 13, ROG UI','65 Вт',239,'IP54',true,true,90,74,92,88,84,72,62,'173.0×77.0×10.3 мм'));
entries.push(ph('as_zf9','asus-zenfone-9','Asus Zenfone 9','Asus','asus-zenfone-9',44990,2022,'#E74C3C','5.9" AMOLED, 2400×1080, 120 Гц','Snapdragon 8+ Gen 1','8 ГБ','128 ГБ','50+12 МП, f/1.9','12 МП, f/2.45','4300 мАч','Android 12, ZenUI','30 Вт','169 г','IP68',true,true,88,74,78,84,80,76,58,'146.5×68.1×9.1 мм'));
entries.push(ph('as_zf8','asus-zenfone-8','Asus Zenfone 8','Asus','asus-zenfone-8-',39990,2021,'#3498DB','5.92" AMOLED, 2400×1080, 120 Гц','Snapdragon 888','8 ГБ','128 ГБ','64+12+8 МП, f/1.8','12 МП, f/2.45','4000 мАч','Android 11, ZenUI','30 Вт','169 г','IP68',true,true,82,72,74,82,80,76,58,'148×68.5×8.9 мм'));

const allNew = entries.join('\n');

let c = readFileSync('./data/phones.ts', 'utf8');
const idx = c.lastIndexOf('];');
c = c.slice(0, idx) + '\n' + allNew + '\n' + c.slice(idx);
writeFileSync('./data/phones.ts', c, 'utf8');
console.log('Added', entries.length, 'phones!');
