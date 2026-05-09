// Скрипт добавления всех телефонов 2020-2026
import { readFileSync, writeFileSync } from 'fs';

const G = s => `G("${s}")`;

// Helper: totalScore = round((p+c+b+d+des+v)/6)
const ts = (p,c,b,d,des,v) => Math.round((p+c+b+d+des+v)/6);

// Compact phone builder
const ph = (id, slug, name, brand, gslug, price, year, color, proc, ram, storage, cam, bat, os, chg, w, prot, nfc, g5, perf, cam_s, bat_s, disp_s, des_s, val_s, disp_spec, extras={}) => {
  const scores = {performance:perf,camera:cam_s,battery:bat_s,display:disp_s,design:des_s,value:val_s};
  return `  {id:"${id}",slug:"${slug}",name:"${name}",brand:"${brand}",image:${G(gslug)},price:${price},priceLabel:"от ${price.toLocaleString('ru')} ₽",year:${year},color:"${color}",popularity:${extras.pop||50},
   specs:{display:'${disp_spec}',processor:"${proc}",ram:"${ram}",storage:"${storage}",mainCamera:"${cam}",frontCamera:"${extras.fc||'32 МП, f/2.0'}",battery:"${bat}",os:"${os}",charging:"${chg}",weight:"${w}",dimensions:"${extras.dim||'160×75×8 мм'}",protection:"${prot}",nfc:${nfc},fiveG:${g5}},
   scores:{performance:${perf},camera:${cam_s},battery:${bat_s},display:${disp_s},design:${des_s},value:${val_s}},totalScore:${ts(perf,cam_s,bat_s,disp_s,des_s,val_s)}},`;
};

const phones = [];

// ════ SAMSUNG S20 series (2020) ════
phones.push(`  {id:"s_s20u",slug:"samsung-galaxy-s20-ultra",name:"Samsung Galaxy S20 Ultra",brand:"Samsung",image:${G("samsung-galaxy-s20-ultra-5g")},price:34990,priceLabel:"от 34 990 ₽",year:2020,color:"#1C1C1E",popularity:72,
   specs:{display:'6.9" Dynamic AMOLED, 3200×1440, 10-120 Гц',processor:"Snapdragon 865/Exynos 990",ram:"12 ГБ",storage:"128 ГБ — 512 ГБ",mainCamera:"108+48+12+ToF МП, f/1.8",frontCamera:"40 МП, f/2.2",battery:"5000 мАч",os:"Android 10 → 14",charging:"45 Вт / 15 Вт",weight:"220 г",dimensions:"166.9×76.0×8.8 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:74,camera:84,battery:84,display:90,design:82,value:78},totalScore:82},`);
phones.push(`  {id:"s_s20p",slug:"samsung-galaxy-s20-plus",name:"Samsung Galaxy S20+",brand:"Samsung",image:${G("samsung-galaxy-s20-plus-5g")},price:24990,priceLabel:"от 24 990 ₽",year:2020,color:"#4A90D9",popularity:66,
   specs:{display:'6.7" Dynamic AMOLED, 3200×1440, 10-120 Гц',processor:"Snapdragon 865/Exynos 990",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"64+12+12 МП, f/1.8",frontCamera:"10 МП, f/2.2",battery:"4500 мАч",os:"Android 10 → 14",charging:"25 Вт / 15 Вт",weight:"186 г",dimensions:"161.9×73.7×7.8 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:74,camera:80,battery:80,display:88,design:80,value:78},totalScore:80},`);
phones.push(`  {id:"s_s20",slug:"samsung-galaxy-s20",name:"Samsung Galaxy S20",brand:"Samsung",image:${G("samsung-galaxy-s20-5g")},price:19990,priceLabel:"от 19 990 ₽",year:2020,color:"#6C757D",popularity:62,
   specs:{display:'6.2" Dynamic AMOLED, 3200×1440, 48-120 Гц',processor:"Snapdragon 865/Exynos 990",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"64+12+12 МП, f/1.8",frontCamera:"10 МП, f/2.2",battery:"4000 мАч",os:"Android 10 → 14",charging:"25 Вт / 15 Вт",weight:"163 г",dimensions:"151.7×69.1×7.9 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:74,camera:78,battery:73,display:86,design:80,value:80},totalScore:79},`);
phones.push(`  {id:"s_n20u",slug:"samsung-galaxy-note-20-ultra",name:"Samsung Galaxy Note 20 Ultra",brand:"Samsung",image:${G("samsung-galaxy-note20-ultra-5g")},price:34990,priceLabel:"от 34 990 ₽",year:2020,color:"#1C1C1E",popularity:70,
   specs:{display:'6.9" Dynamic AMOLED 2X, 3088×1440, 1-120 Гц',processor:"Snapdragon 865+/Exynos 990",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"108+12+12 МП, f/1.8",frontCamera:"10 МП, f/2.2",battery:"4500 мАч",os:"Android 10 → 14",charging:"25 Вт / 15 Вт",weight:"208 г",dimensions:"164.8×77.2×8.1 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:76,camera:86,battery:80,display:92,design:86,value:76},totalScore:83},`);
phones.push(`  {id:"s_n20",slug:"samsung-galaxy-note-20",name:"Samsung Galaxy Note 20",brand:"Samsung",image:${G("samsung-galaxy-note20-5g")},price:24990,priceLabel:"от 24 990 ₽",year:2020,color:"#4A3728",popularity:64,
   specs:{display:'6.7" Flat AMOLED, 2400×1080, 60 Гц',processor:"Snapdragon 865+/Exynos 990",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"64+12+12 МП, f/1.8",frontCamera:"10 МП, f/2.2",battery:"4300 мАч",os:"Android 10 → 14",charging:"25 Вт / 15 Вт",weight:"192 г",dimensions:"161.6×75.2×8.3 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:76,camera:80,battery:76,display:84,design:80,value:76},totalScore:79},`);
// Samsung Z Fold 2/3/4, Z Flip 3/4
phones.push(`  {id:"s_zf2",slug:"samsung-galaxy-z-fold-2",name:"Samsung Galaxy Z Fold 2",brand:"Samsung",image:${G("samsung-galaxy-z-fold2-5g")},price:39990,priceLabel:"от 39 990 ₽",year:2020,color:"#1C2536",popularity:58,
   specs:{display:'7.6" Dynamic AMOLED (осн), 2208×1768, 120 Гц',processor:"Snapdragon 865+",ram:"12 ГБ",storage:"256 ГБ",mainCamera:"12+12+12 МП, f/1.8",frontCamera:"10 МП, f/2.2",battery:"4500 мАч",os:"Android 10 → 14",charging:"25 Вт / 11 Вт",weight:"282 г",dimensions:"159.2×128.2×6.9 мм (развёрнут)",protection:"нет",nfc:true,fiveG:true},
   scores:{performance:76,camera:76,battery:78,display:90,design:94,value:60},totalScore:79},`);
phones.push(`  {id:"s_zfold3",slug:"samsung-galaxy-z-fold-3",name:"Samsung Galaxy Z Fold 3",brand:"Samsung",image:${G("samsung-galaxy-z-fold3-5g")},price:44990,primeLabel:"от 44 990 ₽",year:2021,color:"#2C2C2E",popularity:62,
   specs:{display:'7.6" Dynamic AMOLED 2X (осн), 2208×1768, 120 Гц',processor:"Snapdragon 888",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"12+12+12 МП, f/1.8",frontCamera:"4 МП (под экраном)",battery:"4400 мАч",os:"Android 11 → 14",charging:"25 Вт / 11 Вт",weight:"271 г",dimensions:"158.2×128.1×6.4 мм (развёрнут)",protection:"IPX8",nfc:true,fiveG:true},
   scores:{performance:82,camera:78,battery:76,display:92,design:96,value:60},totalScore:81},`);
phones.push(`  {id:"s_zfold4",slug:"samsung-galaxy-z-fold-4",name:"Samsung Galaxy Z Fold 4",brand:"Samsung",image:${G("samsung-galaxy-z-fold4")},price:69990,priceLabel:"от 69 990 ₽",year:2022,color:"#1C2536",popularity:66,
   specs:{display:'7.6" Dynamic AMOLED 2X (осн), 2176×1812, 120 Гц',processor:"Snapdragon 8 Gen 1+",ram:"12 ГБ",storage:"256 ГБ — 1 ТБ",mainCamera:"50+10+12 МП, f/1.8",frontCamera:"10 МП, f/2.4",battery:"4400 мАч",os:"Android 12 → 15",charging:"25 Вт / 15 Вт",weight:"263 г",dimensions:"154.9×130.1×6.3 мм (развёрнут)",protection:"IPX8",nfc:true,fiveG:true},
   scores:{performance:86,camera:82,battery:74,display:93,design:97,value:60},totalScore:82},`);
phones.push(`  {id:"s_zflip3",slug:"samsung-galaxy-z-flip-3",name:"Samsung Galaxy Z Flip 3",brand:"Samsung",image:${G("samsung-galaxy-z-flip3-5g")},price:29990,priceLabel:"от 29 990 ₽",year:2021,color:"#6C5CE7",popularity:66,
   specs:{display:'6.7" Dynamic AMOLED, 2640×1080, 120 Гц',processor:"Snapdragon 888",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"12+12 МП, f/1.8",frontCamera:"10 МП, f/2.4",battery:"3300 мАч",os:"Android 11 → 14",charging:"15 Вт / 10 Вт",weight:"183 г",dimensions:"166.0×72.2×6.9 мм (развёрнут)",protection:"IPX8",nfc:true,fiveG:true},
   scores:{performance:82,camera:72,battery:62,display:86,design:96,value:68},totalScore:78},`);
phones.push(`  {id:"s_zflip4",slug:"samsung-galaxy-z-flip-4",name:"Samsung Galaxy Z Flip 4",brand:"Samsung",image:${G("samsung-galaxy-z-flip4")},price:44990,priceLabel:"от 44 990 ₽",year:2022,color:"#4169E1",popularity:68,
   specs:{display:'6.7" Dynamic AMOLED 2X, 2640×1080, 120 Гц',processor:"Snapdragon 8 Gen 1+",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"12+12 МП, f/1.8",frontCamera:"10 МП, f/2.4",battery:"3700 мАч",os:"Android 12 → 15",charging:"25 Вт / 15 Вт",weight:"187 г",dimensions:"165.2×71.9×6.9 мм (развёрнут)",protection:"IPX8",nfc:true,fiveG:true},
   scores:{performance:86,camera:76,battery:68,display:88,design:97,value:68},totalScore:81},`);
// Samsung A series
phones.push(`  {id:"s_a52s",slug:"samsung-galaxy-a52s-5g",name:"Samsung Galaxy A52s 5G",brand:"Samsung",image:${G("samsung-galaxy-a52s-5g")},price:22990,priceLabel:"от 22 990 ₽",year:2021,color:"#A8D8EA",popularity:70,
   specs:{display:'6.5" Super AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 778G",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"64+12+5+5 МП, f/1.8",frontCamera:"32 МП, f/2.2",battery:"4500 мАч",os:"Android 11 → 14",charging:"25 Вт",weight:"189 г",dimensions:"159.9×75.1×8.4 мм",protection:"IP67",nfc:true,fiveG:true},
   scores:{performance:72,camera:72,battery:80,display:82,design:76,value:86},totalScore:78},`);
phones.push(`  {id:"s_a52",slug:"samsung-galaxy-a52",name:"Samsung Galaxy A52",brand:"Samsung",image:${G("samsung-galaxy-a52")},price:19990,priceLabel:"от 19 990 ₽",year:2021,color:"#9B59B6",popularity:68,
   specs:{display:'6.5" Super AMOLED, 2400×1080, 90 Гц',processor:"Snapdragon 720G",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"64+12+5+5 МП, f/1.8",frontCamera:"32 МП, f/2.2",battery:"4500 мАч",os:"Android 11 → 14",charging:"25 Вт",weight:"189 г",dimensions:"159.9×75.1×8.4 мм",protection:"IP67",nfc:true,fiveG:false},
   scores:{performance:66,camera:70,battery:80,display:80,design:74,value:86},totalScore:76},`);
phones.push(`  {id:"s_a73",slug:"samsung-galaxy-a73-5g",name:"Samsung Galaxy A73 5G",brand:"Samsung",image:${G("samsung-galaxy-a73-5g")},price:29990,priceLabel:"от 29 990 ₽",year:2022,color:"#27AE60",popularity:66,
   specs:{display:'6.7" Super AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 778G",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"108+12+5+5 МП, f/1.8",frontCamera:"32 МП, f/2.2",battery:"5000 мАч",os:"Android 12 → 15",charging:"25 Вт",weight:"181 г",dimensions:"163.7×76.1×7.6 мм",protection:"IP67",nfc:true,fiveG:true},
   scores:{performance:72,camera:76,battery:86,display:82,design:78,value:84},totalScore:80},`);
phones.push(`  {id:"s_a33",slug:"samsung-galaxy-a33-5g",name:"Samsung Galaxy A33 5G",brand:"Samsung",image:${G("samsung-galaxy-a33-5g")},price:19990,priceLabel:"от 19 990 ₽",year:2022,color:"#3498DB",popularity:62,
   specs:{display:'6.4" Super AMOLED, 2400×1080, 90 Гц',processor:"Exynos 1280",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"48+8+5+2 МП, f/1.8",frontCamera:"13 МП, f/2.2",battery:"5000 мАч",os:"Android 12 → 15",charging:"25 Вт",weight:"186 г",dimensions:"159.7×74.0×8.1 мм",protection:"IP67",nfc:true,fiveG:true},
   scores:{performance:62,camera:68,battery:86,display:80,design:74,value:88},totalScore:76},`);
phones.push(`  {id:"s_a23",slug:"samsung-galaxy-a23-5g",name:"Samsung Galaxy A23 5G",brand:"Samsung",image:${G("samsung-galaxy-a23-5g")},price:14990,priceLabel:"от 14 990 ₽",year:2022,color:"#2C3E50",popularity:58,
   specs:{display:'6.6" PLS IPS, 2408×1080, 120 Гц',processor:"Snapdragon 695",ram:"4 ГБ",storage:"64 ГБ — 128 ГБ",mainCamera:"50+5+2+2 МП, f/1.8",frontCamera:"8 МП, f/2.2",battery:"5000 мАч",os:"Android 12 → 14",charging:"25 Вт",weight:"195 г",dimensions:"164.4×76.9×8.4 мм",protection:"IP67",nfc:false,fiveG:true},
   scores:{performance:60,camera:60,battery:86,display:72,design:68,value:90},totalScore:73},`);
phones.push(`  {id:"s_a13",slug:"samsung-galaxy-a13",name:"Samsung Galaxy A13",brand:"Samsung",image:${G("samsung-galaxy-a13")},price:10990,priceLabel:"от 10 990 ₽",year:2022,color:"#7F8C8D",popularity:60,
   specs:{display:'6.6" PLS IPS, 2408×1080, 90 Гц',processor:"Exynos 850",ram:"3 ГБ",storage:"32 ГБ — 128 ГБ",mainCamera:"50+5+2+2 МП, f/1.8",frontCamera:"8 МП, f/2.2",battery:"5000 мАч",os:"Android 12 → 14",charging:"15 Вт",weight:"195 г",dimensions:"165.1×76.4×8.8 мм",protection:"нет",nfc:false,fiveG:false},
   scores:{performance:48,camera:56,battery:86,display:68,design:62,value:92},totalScore:69},`);
phones.push(`  {id:"s_a21s",slug:"samsung-galaxy-a21s",name:"Samsung Galaxy A21s",brand:"Samsung",image:${G("samsung-galaxy-a21s")},price:8990,priceLabel:"от 8 990 ₽",year:2020,color:"#ECF0F1",popularity:56,
   specs:{display:'6.5" PLS IPS, 1600×720, 60 Гц',processor:"Exynos 850",ram:"3 ГБ",storage:"32 ГБ — 64 ГБ",mainCamera:"48+8+2+2 МП, f/2.0",frontCamera:"13 МП, f/2.2",battery:"5000 мАч",os:"Android 10 → 13",charging:"15 Вт",weight:"192 г",dimensions:"163.7×75.4×8.9 мм",protection:"нет",nfc:false,fiveG:false},
   scores:{performance:44,camera:54,battery:86,display:62,design:60,value:92},totalScore:66},`);
phones.push(`  {id:"s_a52_20",slug:"samsung-galaxy-a51",name:"Samsung Galaxy A51",brand:"Samsung",image:${G("samsung-galaxy-a51")},price:14990,priceLabel:"от 14 990 ₽",year:2020,color:"#3498DB",popularity:65,
   specs:{display:'6.5" Super AMOLED, 2400×1080, 60 Гц',processor:"Exynos 9611",ram:"4 ГБ",storage:"64 ГБ — 128 ГБ",mainCamera:"48+12+5+5 МП, f/2.0",frontCamera:"32 МП, f/2.2",battery:"4000 мАч",os:"Android 10 → 13",charging:"15 Вт",weight:"172 г",dimensions:"158.5×73.6×7.9 мм",protection:"нет",nfc:true,fiveG:false},
   scores:{performance:52,camera:66,battery:74,display:80,design:72,value:86},totalScore:72},`);
phones.push(`  {id:"s_a71",slug:"samsung-galaxy-a71",name:"Samsung Galaxy A71",brand:"Samsung",image:${G("samsung-galaxy-a71")},price:17990,priceLabel:"от 17 990 ₽",year:2020,color:"#9B59B6",popularity:62,
   specs:{display:'6.7" Super AMOLED, 2400×1080, 60 Гц',processor:"Snapdragon 730",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"64+12+5+5 МП, f/1.8",frontCamera:"32 МП, f/2.2",battery:"4500 мАч",os:"Android 10 → 13",charging:"25 Вт",weight:"179 г",dimensions:"163.6×76.0×7.7 мм",protection:"нет",nfc:true,fiveG:false},
   scores:{performance:60,camera:70,battery:80,display:80,design:72,value:82},totalScore:74},`);
phones.push(`  {id:"s_s21fe",slug:"samsung-galaxy-s21-fe-5g",name:"Samsung Galaxy S21 FE",brand:"Samsung",image:${G("samsung-galaxy-s21-fe-5g")},price:24990,priceLabel:"от 24 990 ₽",year:2022,color:"#5DADE2",popularity:68,
   specs:{display:'6.4" Dynamic AMOLED 2X, 2340×1080, 120 Гц',processor:"Snapdragon 888",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"12+12+8 МП, f/1.8",frontCamera:"32 МП, f/2.5",battery:"4500 мАч",os:"Android 12 → 15",charging:"25 Вт / 15 Вт",weight:"177 г",dimensions:"155.7×74.5×7.9 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:76,battery:80,display:88,design:82,value:82},totalScore:82},`);
phones.push(`  {id:"s_m54",slug:"samsung-galaxy-m54-5g",name:"Samsung Galaxy M54",brand:"Samsung",image:${G("samsung-galaxy-m54-5g")},price:27990,priceLabel:"от 27 990 ₽",year:2023,color:"#1A5276",popularity:62,
   specs:{display:'6.7" Super AMOLED, 2400×1080, 120 Гц',processor:"Exynos 1380",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"108+8+2 МП, f/1.8",frontCamera:"32 МП, f/2.2",battery:"6000 мАч",os:"Android 13 → 15",charging:"25 Вт",weight:"199 г",dimensions:"161.3×77.4×8.0 мм",protection:"IP67",nfc:true,fiveG:true},
   scores:{performance:66,camera:72,battery:92,display:82,design:76,value:86},totalScore:79},`);
phones.push(`  {id:"s_m53",slug:"samsung-galaxy-m53-5g",name:"Samsung Galaxy M53 5G",brand:"Samsung",image:${G("samsung-galaxy-m53-5g")},price:21990,priceLabel:"от 21 990 ₽",year:2022,color:"#2E86C1",popularity:60,
   specs:{display:'6.7" Super AMOLED, 2400×1080, 120 Гц',processor:"Dimensity 900",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"108+8+2+2 МП, f/1.8",frontCamera:"32 МП, f/2.2",battery:"5000 мАч",os:"Android 12 → 15",charging:"25 Вт",weight:"176 г",dimensions:"164.7×77.0×7.4 мм",protection:"нет",nfc:false,fiveG:true},
   scores:{performance:68,camera:70,battery:86,display:82,design:72,value:86},totalScore:77},`);

// ════ XIAOMI 10/11 series ════
phones.push(`  {id:"x_10pro",slug:"xiaomi-mi-10-pro",name:"Xiaomi Mi 10 Pro",brand:"Xiaomi",image:${G("xiaomi-mi-10-pro-")},price:29990,priceLabel:"от 29 990 ₽",year:2020,color:"#2C3E50",popularity:62,
   specs:{display:'6.67" AMOLED, 2340×1080, 90 Гц',processor:"Snapdragon 865",ram:"8 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"108+20+12+8 МП, f/1.69",frontCamera:"20 МП, f/2.0",battery:"4500 мАч",os:"Android 10, MIUI 12",charging:"50 Вт / 30 Вт",weight:"208 г",dimensions:"162.6×74.8×8.96 мм",protection:"нет",nfc:true,fiveG:true},
   scores:{performance:74,camera:84,battery:80,display:86,design:78,value:78},totalScore:80},`);
phones.push(`  {id:"x_10t",slug:"xiaomi-mi-10t-pro",name:"Xiaomi Mi 10T Pro",brand:"Xiaomi",image:${G("xiaomi-mi-10t-pro-")},price:22990,priceLabel:"от 22 990 ₽",year:2020,color:"#27AE60",popularity:60,
   specs:{display:'6.67" IPS LCD, 2400×1080, 144 Гц',processor:"Snapdragon 865",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"108+13+5 МП, f/1.69",frontCamera:"20 МП, f/2.0",battery:"5000 мАч",os:"Android 10, MIUI 12",charging:"33 Вт",weight:"218 г",dimensions:"165.4×76.8×9.33 мм",protection:"нет",nfc:true,fiveG:true},
   scores:{performance:74,camera:76,battery:86,display:80,design:72,value:82},totalScore:78},`);
phones.push(`  {id:"x_11ultra",slug:"xiaomi-mi-11-ultra",name:"Xiaomi Mi 11 Ultra",brand:"Xiaomi",image:${G("xiaomi-mi-11-ultra-")},price:49990,priceLabel:"от 49 990 ₽",year:2021,color:"#1A1A2E",popularity:72,
   specs:{display:'6.81" LTPO AMOLED, 3200×1440, 1-120 Гц',processor:"Snapdragon 888",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+48+48 МП (Leica), f/1.95",frontCamera:"20 МП, f/2.2",battery:"5000 мАч",os:"Android 11, MIUI 12.5",charging:"67 Вт / 67 Вт",weight:"234 г",dimensions:"163.2×74.6×8.38 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:92,battery:86,display:93,design:86,value:76},totalScore:86},`);
phones.push(`  {id:"x_11pro",slug:"xiaomi-mi-11-pro",name:"Xiaomi Mi 11 Pro",brand:"Xiaomi",image:${G("xiaomi-mi-11-pro-")},price:39990,priceLabel:"от 39 990 ₽",year:2021,color:"#2C3E50",popularity:66,
   specs:{display:'6.81" LTPO AMOLED, 3200×1440, 1-120 Гц',processor:"Snapdragon 888",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+48+12 МП, f/1.95",frontCamera:"20 МП, f/2.2",battery:"5000 мАч",os:"Android 11, MIUI 12.5",charging:"67 Вт / 67 Вт",weight:"208 г",dimensions:"163.2×74.6×8.53 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:88,battery:86,display:92,design:84,value:76},totalScore:85},`);
phones.push(`  {id:"x_11",slug:"xiaomi-mi-11",name:"Xiaomi Mi 11",brand:"Xiaomi",image:${G("xiaomi-mi-11-")},price:29990,priceLabel:"от 29 990 ₽",year:2021,color:"#3498DB",popularity:68,
   specs:{display:'6.81" AMOLED, 3200×1440, 120 Гц',processor:"Snapdragon 888",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"108+13+5 МП, f/1.69",frontCamera:"20 МП, f/2.2",battery:"4600 мАч",os:"Android 11, MIUI 12.5",charging:"55 Вт / 50 Вт",weight:"196 г",dimensions:"164.3×74.6×8.06 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:78,battery:82,display:90,design:82,value:80},totalScore:83},`);
phones.push(`  {id:"x_11lite",slug:"xiaomi-mi-11-lite-5g",name:"Xiaomi Mi 11 Lite 5G",brand:"Xiaomi",image:${G("xiaomi-mi-11-lite-5g")},price:19990,priceLabel:"от 19 990 ₽",year:2021,color:"#F39C12",popularity:66,
   specs:{display:'6.55" AMOLED, 2400×1080, 90 Гц',processor:"Snapdragon 780G",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"64+8+5 МП, f/1.79",frontCamera:"20 МП, f/2.2",battery:"4250 мАч",os:"Android 11, MIUI 12.5",charging:"33 Вт",weight:"157 г",dimensions:"160.5×75.7×6.81 мм",protection:"IP53",nfc:true,fiveG:true},
   scores:{performance:74,camera:70,battery:78,display:86,design:82,value:88},totalScore:80},`);
phones.push(`  {id:"x_11tpro",slug:"xiaomi-11t-pro",name:"Xiaomi 11T Pro",brand:"Xiaomi",image:${G("xiaomi-11t-pro")},price:29990,priceLabel:"от 29 990 ₽",year:2021,color:"#6C5CE7",popularity:68,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 888",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"108+8+5 МП, f/1.75",frontCamera:"16 МП, f/2.45",battery:"5000 мАч",os:"Android 11, MIUI 12.5",charging:"120 Вт",weight:"204 г",dimensions:"164.1×76.9×8.8 мм",protection:"IP53",nfc:true,fiveG:true},
   scores:{performance:82,camera:74,battery:88,display:86,design:78,value:82},totalScore:82},`);
phones.push(`  {id:"x_11t",slug:"xiaomi-11t",name:"Xiaomi 11T",brand:"Xiaomi",image:${G("xiaomi-11t")},price:22990,priceLabel:"от 22 990 ₽",year:2021,color:"#27AE60",popularity:64,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Dimensity 1200 Ultra",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"108+8+5 МП, f/1.75",frontCamera:"16 МП, f/2.45",battery:"5000 мАч",os:"Android 11, MIUI 12.5",charging:"67 Вт",weight:"203 г",dimensions:"164.1×76.9×8.8 мм",protection:"IP53",nfc:true,fiveG:true},
   scores:{performance:72,camera:72,battery:87,display:84,design:76,value:86},totalScore:80},`);

// ════ Redmi Note series ════
phones.push(`  {id:"rn_9p",slug:"xiaomi-redmi-note-9-pro",name:"Redmi Note 9 Pro",brand:"Xiaomi",image:${G("xiaomi-redmi-note-9-pro-")},price:12990,priceLabel:"от 12 990 ₽",year:2020,color:"#27AE60",popularity:68,
   specs:{display:'6.67" IPS LCD, 2400×1080, 60 Гц',processor:"Snapdragon 720G",ram:"6 ГБ",storage:"64 ГБ — 128 ГБ",mainCamera:"64+8+5+2 МП, f/1.89",frontCamera:"16 МП, f/2.48",battery:"5020 мАч",os:"Android 10, MIUI 12",charging:"30 Вт",weight:"209 г",dimensions:"165.75×76.68×8.8 мм",protection:"нет",nfc:false,fiveG:false},
   scores:{performance:60,camera:64,battery:87,display:76,design:66,value:90},totalScore:74},`);
phones.push(`  {id:"rn_9s",slug:"xiaomi-redmi-note-9s",name:"Redmi Note 9S",brand:"Xiaomi",image:${G("xiaomi-redmi-note-9s")},price:10990,priceLabel:"от 10 990 ₽",year:2020,color:"#3498DB",popularity:64,
   specs:{display:'6.67" IPS LCD, 2400×1080, 60 Гц',processor:"Snapdragon 720G",ram:"4 ГБ",storage:"64 ГБ — 128 ГБ",mainCamera:"48+8+5+2 МП, f/1.79",frontCamera:"16 МП, f/2.48",battery:"5020 мАч",os:"Android 10, MIUI 12",charging:"18 Вт",weight:"209 г",dimensions:"165.75×76.68×8.8 мм",protection:"нет",nfc:false,fiveG:false},
   scores:{performance:60,camera:60,battery:87,display:74,design:64,value:90},totalScore:73},`);
phones.push(`  {id:"rn_10pro",slug:"xiaomi-redmi-note-10-pro",name:"Redmi Note 10 Pro",brand:"Xiaomi",image:${G("xiaomi-redmi-note-10-pro")},price:15990,priceLabel:"от 15 990 ₽",year:2021,color:"#8E44AD",popularity:72,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 732G",ram:"6 ГБ",storage:"64 ГБ — 128 ГБ",mainCamera:"108+8+5+2 МП, f/1.9",frontCamera:"16 МП, f/2.45",battery:"5020 мАч",os:"Android 11, MIUI 12.5",charging:"33 Вт",weight:"193 г",dimensions:"164.0×76.5×8.1 мм",protection:"нет",nfc:false,fiveG:false},
   scores:{performance:62,camera:70,battery:87,display:84,design:70,value:90},totalScore:77},`);
phones.push(`  {id:"rn_10",slug:"xiaomi-redmi-note-10",name:"Redmi Note 10",brand:"Xiaomi",image:${G("xiaomi-redmi-note-10")},price:11990,priceLabel:"от 11 990 ₽",year:2021,color:"#3498DB",popularity:68,
   specs:{display:'6.43" AMOLED, 2400×1080, 60 Гц',processor:"Snapdragon 678",ram:"4 ГБ",storage:"64 ГБ — 128 ГБ",mainCamera:"48+8+2+2 МП, f/1.79",frontCamera:"13 МП, f/2.45",battery:"5000 мАч",os:"Android 11, MIUI 12.5",charging:"33 Вт",weight:"178.8 г",dimensions:"160.5×74.5×8.3 мм",protection:"нет",nfc:false,fiveG:false},
   scores:{performance:58,camera:62,battery:86,display:80,design:68,value:90},totalScore:74},`);
phones.push(`  {id:"rn_11pro",slug:"xiaomi-redmi-note-11-pro",name:"Redmi Note 11 Pro",brand:"Xiaomi",image:${G("xiaomi-redmi-note-11-pro")},price:17990,priceLabel:"от 17 990 ₽",year:2022,color:"#6C5CE7",popularity:70,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Dimensity 920",ram:"6 ГБ",storage:"64 ГБ — 128 ГБ",mainCamera:"108+8+2 МП, f/1.69",frontCamera:"16 МП, f/2.45",battery:"5000 мАч",os:"Android 11, MIUI 13",charging:"67 Вт",weight:"202 г",dimensions:"164.2×76.1×8.1 мм",protection:"IP53",nfc:true,fiveG:true},
   scores:{performance:68,camera:70,battery:87,display:84,design:74,value:88},totalScore:79},`);
phones.push(`  {id:"rn_11",slug:"xiaomi-redmi-note-11",name:"Redmi Note 11",brand:"Xiaomi",image:${G("xiaomi-redmi-note-11")},price:12990,priceLabel:"от 12 990 ₽",year:2022,color:"#2ECC71",popularity:66,
   specs:{display:'6.43" AMOLED, 2400×1080, 90 Гц',processor:"Snapdragon 680",ram:"4 ГБ",storage:"64 ГБ — 128 ГБ",mainCamera:"50+8+2+2 МП, f/1.8",frontCamera:"13 МП, f/2.45",battery:"5000 мАч",os:"Android 11, MIUI 13",charging:"33 Вт",weight:"179 г",dimensions:"160.5×74.5×8.09 мм",protection:"нет",nfc:false,fiveG:false},
   scores:{performance:56,camera:60,battery:86,display:80,design:68,value:90},totalScore:73},`);

// ════ OnePlus 2020-2022 ════
phones.push(`  {id:"op_8pro",slug:"oneplus-8-pro",name:"OnePlus 8 Pro",brand:"OnePlus",image:${G("oneplus-8-pro")},price:29990,priceLabel:"от 29 990 ₽",year:2020,color:"#1B2A4A",popularity:68,
   specs:{display:'6.78" LTPO AMOLED, 3168×1440, 1-120 Гц',processor:"Snapdragon 865",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"48+48+8+5 МП, f/1.78",frontCamera:"16 МП, f/2.44",battery:"4510 мАч",os:"Android 10, OxygenOS 10",charging:"65 Вт / 30 Вт",weight:"199 г",dimensions:"165.3×74.35×8.5 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:74,camera:82,battery:80,display:92,design:84,value:78},totalScore:82},`);
phones.push(`  {id:"op_8t",slug:"oneplus-8t",name:"OnePlus 8T",brand:"OnePlus",image:${G("oneplus-8t")},price:24990,priceLabel:"от 24 990 ₽",year:2020,color:"#2ECC71",popularity:64,
   specs:{display:'6.55" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 865",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"48+16+5+2 МП, f/1.7",frontCamera:"16 МП, f/2.45",battery:"4500 мАч",os:"Android 11, OxygenOS 11",charging:"65 Вт",weight:"188 г",dimensions:"160.7×74.1×8.4 мм",protection:"нет",nfc:true,fiveG:true},
   scores:{performance:74,camera:76,battery:80,display:86,design:78,value:80},totalScore:79},`);
phones.push(`  {id:"op_9pro",slug:"oneplus-9-pro",name:"OnePlus 9 Pro",brand:"OnePlus",image:${G("oneplus-9-pro")},price:39990,priceLabel:"от 39 990 ₽",year:2021,color:"#1B2A4A",popularity:70,
   specs:{display:'6.7" LTPO AMOLED, 3216×1440, 1-120 Гц',processor:"Snapdragon 888",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"48+50+8+2 МП (Hasselblad), f/1.8",frontCamera:"16 МП, f/2.44",battery:"4500 мАч",os:"Android 11, OxygenOS 11",charging:"65 Вт / 50 Вт",weight:"197 г",dimensions:"163.2×73.6×8.7 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:86,battery:80,display:92,design:82,value:76},totalScore:83},`);
phones.push(`  {id:"op_9",slug:"oneplus-9",name:"OnePlus 9",brand:"OnePlus",image:${G("oneplus-9")},price:29990,priceLabel:"от 29 990 ₽",year:2021,color:"#8B0000",popularity:66,
   specs:{display:'6.55" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 888",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"48+50+2 МП (Hasselblad), f/1.8",frontCamera:"16 МП, f/2.44",battery:"4500 мАч",os:"Android 11, OxygenOS 11",charging:"65 Вт / 15 Вт",weight:"183 г",dimensions:"160.0×74.2×8.7 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:82,battery:80,display:86,design:80,value:78},totalScore:81},`);
phones.push(`  {id:"op_10pro",slug:"oneplus-10-pro",name:"OnePlus 10 Pro",brand:"OnePlus",image:${G("oneplus-10-pro")},price:44990,priceLabel:"от 44 990 ₽",year:2022,color:"#1B2A4A",popularity:68,
   specs:{display:'6.7" LTPO AMOLED, 3216×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 1",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"48+50+8 МП (Hasselblad), f/1.8",frontCamera:"32 МП, f/2.24",battery:"5000 мАч",os:"Android 12, OxygenOS 12",charging:"80 Вт / 50 Вт",weight:"200.5 г",dimensions:"163.0×73.9×8.55 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:86,camera:86,battery:86,display:92,design:84,value:78},totalScore:85},`);
phones.push(`  {id:"op_10t",slug:"oneplus-10t",name:"OnePlus 10T",brand:"OnePlus",image:${G("oneplus-10t")},price:39990,priceLabel:"от 39 990 ₽",year:2022,color:"#2C3E50",popularity:64,
   specs:{display:'6.7" AMOLED, 2412×1080, 120 Гц',processor:"Snapdragon 8+ Gen 1",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+8+2 МП, f/1.8",frontCamera:"16 МП, f/2.45",battery:"4800 мАч",os:"Android 12, OxygenOS 12",charging:"150 Вт",weight:"203.5 г",dimensions:"163.3×75.4×8.75 мм",protection:"нет",nfc:true,fiveG:true},
   scores:{performance:88,camera:76,battery:84,display:86,design:76,value:78},totalScore:81},`);
phones.push(`  {id:"op_nord2",slug:"oneplus-nord-2-5g",name:"OnePlus Nord 2",brand:"OnePlus",image:${G("oneplus-nord-2-5g")},price:24990,priceLabel:"от 24 990 ₽",year:2021,color:"#3498DB",popularity:64,
   specs:{display:'6.43" AMOLED, 2400×1080, 90 Гц',processor:"Dimensity 1200 AI",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+8+2 МП, f/1.88",frontCamera:"32 МП, f/2.45",battery:"4500 мАч",os:"Android 11, OxygenOS 11",charging:"65 Вт",weight:"189 г",dimensions:"159.1×73.3×8.25 мм",protection:"нет",nfc:true,fiveG:true},
   scores:{performance:72,camera:74,battery:80,display:82,design:76,value:82},totalScore:78},`);

// ════ Google Pixel 5-6 series ════
phones.push(`  {id:"gp_5",slug:"google-pixel-5",name:"Google Pixel 5",brand:"Google",image:${G("google-pixel-5")},price:24990,priceLabel:"от 24 990 ₽",year:2020,color:"#27AE60",popularity:62,
   specs:{display:'6.0" OLED, 2340×1080, 90 Гц',processor:"Snapdragon 765G",ram:"8 ГБ",storage:"128 ГБ",mainCamera:"12.2+16 МП, f/1.7",frontCamera:"8 МП, f/2.0",battery:"4080 мАч",os:"Android 11 → 14",charging:"18 Вт / 12 Вт",weight:"151 г",dimensions:"144.7×70.4×8.0 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:66,camera:84,battery:76,display:84,design:82,value:84},totalScore:79},`);
phones.push(`  {id:"gp_6pro",slug:"google-pixel-6-pro",name:"Google Pixel 6 Pro",brand:"Google",image:${G("google-pixel-6-pro")},price:44990,priceLabel:"от 44 990 ₽",year:2021,color:"#2C3E50",popularity:68,
   specs:{display:'6.71" LTPO OLED, 3120×1440, 10-120 Гц',processor:"Google Tensor G1",ram:"12 ГБ",storage:"128 ГБ — 512 ГБ",mainCamera:"50+48+12 МП, f/1.85",frontCamera:"11.1 МП, f/2.2",battery:"5003 мАч",os:"Android 12 → 15",charging:"30 Вт / 23 Вт",weight:"210 г",dimensions:"163.9×75.9×8.9 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:68,camera:88,battery:86,display:90,design:82,value:78},totalScore:82},`);
phones.push(`  {id:"gp_6",slug:"google-pixel-6",name:"Google Pixel 6",brand:"Google",image:${G("google-pixel-6")},price:34990,priceLabel:"от 34 990 ₽",year:2021,color:"#FF6B35",popularity:65,
   specs:{display:'6.4" OLED, 2400×1080, 90 Гц',processor:"Google Tensor G1",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+12 МП, f/1.85",frontCamera:"8 МП, f/2.0",battery:"4614 мАч",os:"Android 12 → 15",charging:"21 Вт / 21 Вт",weight:"207 г",dimensions:"158.6×74.8×8.9 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:68,camera:84,battery:82,display:86,design:80,value:80},totalScore:80},`);
phones.push(`  {id:"gp_6a",slug:"google-pixel-6a",name:"Google Pixel 6a",brand:"Google",image:${G("google-pixel-6a")},price:29990,priceLabel:"от 29 990 ₽",year:2022,color:"#2C3E50",popularity:66,
   specs:{display:'6.1" OLED, 2400×1080, 60 Гц',processor:"Google Tensor G1",ram:"6 ГБ",storage:"128 ГБ",mainCamera:"12.2+12 МП, f/1.7",frontCamera:"8 МП, f/2.0",battery:"4306 мАч",os:"Android 12 → 15",charging:"18 Вт / нет",weight:"178 г",dimensions:"152.2×71.8×8.9 мм",protection:"IP67",nfc:true,fiveG:true},
   scores:{performance:68,camera:82,battery:78,display:82,design:78,value:82},totalScore:78},`);

// ════ Sony Xperia series ════
phones.push(`  {id:"so_1ii",slug:"sony-xperia-1-ii",name:"Sony Xperia 1 II",brand:"Sony",image:${G("sony-xperia-1-ii")},price:49990,priceLabel:"от 49 990 ₽",year:2020,color:"#1C2B3A",popularity:54,
   specs:{display:'6.5" 4K OLED, 3840×1644, 60 Гц',processor:"Snapdragon 865",ram:"8 ГБ",storage:"256 ГБ",mainCamera:"12+12+12+ToF МП, f/1.7",frontCamera:"8 МП, f/2.0",battery:"4000 мАч",os:"Android 10 → 13",charging:"21 Вт / 10 Вт",weight:"181 г",dimensions:"166×72×7.6 мм",protection:"IP65/68",nfc:true,fiveG:true},
   scores:{performance:74,camera:82,battery:74,display:88,design:84,value:68},totalScore:78},`);
phones.push(`  {id:"so_5ii",slug:"sony-xperia-5-ii",name:"Sony Xperia 5 II",brand:"Sony",image:${G("sony-xperia-5-ii")},price:39990,priceLabel:"от 39 990 ₽",year:2020,color:"#2E3A59",popularity:52,
   specs:{display:'6.1" 4K OLED, 3840×1644, 120 Гц',processor:"Snapdragon 865",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"12+12+12 МП, f/1.7",frontCamera:"8 МП, f/2.0",battery:"4000 мАч",os:"Android 10 → 13",charging:"21 Вт / 10 Вт",weight:"163 г",dimensions:"158×68×7.9 мм",protection:"IP65/68",nfc:true,fiveG:true},
   scores:{performance:74,camera:80,battery:74,display:86,design:84,value:68},totalScore:78},`);
phones.push(`  {id:"so_1iii",slug:"sony-xperia-1-iii",name:"Sony Xperia 1 III",brand:"Sony",image:${G("sony-xperia-1-iii")},price:69990,priceLabel:"от 69 990 ₽",year:2021,color:"#1C2B3A",popularity:56,
   specs:{display:'6.5" 4K OLED, 3840×1644, 120 Гц',processor:"Snapdragon 888",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"12+12+12 МП (переменный телефото), f/1.7",frontCamera:"8 МП, f/2.0",battery:"4500 мАч",os:"Android 11 → 14",charging:"30 Вт / 15 Вт",weight:"186 г",dimensions:"165×71×8.2 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:86,battery:80,display:90,design:86,value:66},totalScore:82},`);
phones.push(`  {id:"so_10iv",slug:"sony-xperia-10-iv",name:"Sony Xperia 10 IV",brand:"Sony",image:${G("sony-xperia-10-iv")},price:34990,priceLabel:"от 34 990 ₽",year:2022,color:"#3D5A80",popularity:50,
   specs:{display:'6.0" OLED, 2520×1080, 60 Гц',processor:"Snapdragon 695",ram:"6 ГБ",storage:"128 ГБ",mainCamera:"12+8+8 МП, f/1.8",frontCamera:"8 МП, f/2.0",battery:"5000 мАч",os:"Android 12 → 14",charging:"30 Вт",weight:"161 г",dimensions:"153×67×8.3 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:60,camera:70,battery:88,display:80,design:80,value:78},totalScore:76},`);
phones.push(`  {id:"so_1iv",slug:"sony-xperia-1-iv",name:"Sony Xperia 1 IV",brand:"Sony",image:${G("sony-xperia-1-iv")},price:84990,priceLabel:"от 84 990 ₽",year:2022,color:"#2E3A59",popularity:52,
   specs:{display:'6.5" 4K OLED, 3840×1644, 1-120 Гц',processor:"Snapdragon 8 Gen 1",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"12+12+12 МП (непрерывный зум), f/1.7",frontCamera:"12 МП, f/2.0",battery:"5000 мАч",os:"Android 12 → 14",charging:"30 Вт / 15 Вт",weight:"185 г",dimensions:"165×71×8.2 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:86,camera:88,battery:86,display:90,design:86,value:64},totalScore:83},`);

// ════ Huawei 2020-2023 ════
phones.push(`  {id:"hw_p40pro",slug:"huawei-p40-pro",name:"Huawei P40 Pro",brand:"Huawei",image:${G("huawei-p40-pro")},price:39990,priceLabel:"от 39 990 ₽",year:2020,color:"#8E44AD",popularity:60,
   specs:{display:'6.58" LTPO OLED, 2640×1200, 1-90 Гц',processor:"Kirin 990 5G",ram:"8 ГБ",storage:"128 ГБ — 512 ГБ",mainCamera:"50+40+12+ToF МП, f/1.9",frontCamera:"32+ToF МП, f/2.2",battery:"4200 мАч",os:"Android 10, EMUI 10.1",charging:"40 Вт / 27 Вт",weight:"209 г",dimensions:"158.2×72.6×9.0 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:76,camera:90,battery:76,display:88,design:88,value:72},totalScore:82},`);
phones.push(`  {id:"hw_p40",slug:"huawei-p40",name:"Huawei P40",brand:"Huawei",image:${G("huawei-p40")},price:29990,priceLabel:"от 29 990 ₽",year:2020,color:"#2C3E50",popularity:56,
   specs:{display:'6.1" OLED, 2340×1080, 60 Гц',processor:"Kirin 990 5G",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+16+8 МП, f/1.9",frontCamera:"32 МП, f/2.2",battery:"3800 мАч",os:"Android 10, EMUI 10.1",charging:"40 Вт / 27 Вт",weight:"175 г",dimensions:"148.9×71.06×8.5 мм",protection:"IP53",nfc:true,fiveG:true},
   scores:{performance:76,camera:84,battery:72,display:84,design:84,value:74},totalScore:79},`);
phones.push(`  {id:"hw_mate40pro",slug:"huawei-mate-40-pro",name:"Huawei Mate 40 Pro",brand:"Huawei",image:${G("huawei-mate-40-pro")},price:49990,priceLabel:"от 49 990 ₽",year:2020,color:"#1A237E",popularity:62,
   specs:{display:'6.76" OLED, 2772×1344, 1-90 Гц',processor:"Kirin 9000",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+12+20 МП (перископ), f/1.9",frontCamera:"13+ToF МП, f/2.4",battery:"4400 мАч",os:"Android 10, EMUI 11",charging:"66 Вт / 50 Вт",weight:"212 г",dimensions:"162.9×75.5×9.1 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:78,camera:88,battery:78,display:90,design:88,value:70},totalScore:82},`);
phones.push(`  {id:"hw_p50pro",slug:"huawei-p50-pro",name:"Huawei P50 Pro",brand:"Huawei",image:${G("huawei-p50-pro")},price:54990,priceLabel:"от 54 990 ₽",year:2021,color:"#B7950B",popularity:60,
   specs:{display:'6.6" LTPO OLED, 2700×1228, 1-120 Гц',processor:"Kirin 9000",ram:"8 ГБ",storage:"128 ГБ — 512 ГБ",mainCamera:"50+64+13+ToF МП, f/1.8",frontCamera:"13 МП, f/2.4",battery:"4360 мАч",os:"Android 11, EMUI 12",charging:"66 Вт / 50 Вт",weight:"195 г",dimensions:"158.8×72.8×8.5 мм",protection:"IP68",nfc:true,fiveG:false},
   scores:{performance:78,camera:90,battery:78,display:90,design:88,value:70},totalScore:82},`);

// ════ Honor 2020-2024 ════
phones.push(`  {id:"h_50",slug:"honor-50",name:"Honor 50",brand:"Honor",image:${G("honor-50")},price:24990,priceLabel:"от 24 990 ₽",year:2021,color:"#27AE60",popularity:62,
   specs:{display:'6.57" OLED, 2340×1080, 120 Гц',processor:"Snapdragon 778G",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"108+8+2+2 МП, f/1.9",frontCamera:"32 МП, f/2.4",battery:"4300 мАч",os:"Android 11, MagicUI 5",charging:"66 Вт",weight:"175 г",dimensions:"160×73.8×7.78 мм",protection:"нет",nfc:false,fiveG:true},
   scores:{performance:72,camera:72,battery:76,display:84,design:78,value:82},totalScore:77},`);
phones.push(`  {id:"h_70",slug:"honor-70",name:"Honor 70",brand:"Honor",image:${G("honor-70")},price:29990,priceLabel:"от 29 990 ₽",year:2022,color:"#3498DB",popularity:64,
   specs:{display:'6.67" OLED, 2400×1080, 120 Гц',processor:"Snapdragon 778G+",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"54+50+2 МП, f/1.9",frontCamera:"32 МП, f/2.4",battery:"4800 мАч",os:"Android 12, MagicUI 6",charging:"66 Вт",weight:"178 г",dimensions:"161.4×73.3×7.91 мм",protection:"нет",nfc:false,fiveG:true},
   scores:{performance:74,camera:76,battery:84,display:86,design:80,value:82},totalScore:80},`);
phones.push(`  {id:"h_magic5pro",slug:"honor-magic5-pro",name:"Honor Magic5 Pro",brand:"Honor",image:${G("honor-magic5-pro")},price:59990,priceLabel:"от 59 990 ₽",year:2023,color:"#1A3A6B",popularity:68,
   specs:{display:'6.81" LTPO OLED, 2848×1312, 1-120 Гц',processor:"Snapdragon 8 Gen 2",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+50+50 МП, f/1.6",frontCamera:"12 МП, f/2.4",battery:"5450 мАч",os:"Android 13, MagicOS 7.1",charging:"66 Вт / 50 Вт",weight:"219 г",dimensions:"162.9×75.6×9.15 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:90,camera:90,battery:90,display:94,design:86,value:76},totalScore:88},`);
phones.push(`  {id:"h_magic6pro",slug:"honor-magic6-pro",name:"Honor Magic6 Pro",brand:"Honor",image:${G("honor-magic6-pro")},price:74990,priceLabel:"от 74 990 ₽",year:2024,color:"#2C3E50",popularity:66,
   specs:{display:'6.8" LTPO OLED, 2800×1280, 1-120 Гц',processor:"Snapdragon 8 Gen 3",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+180+40 МП, f/1.6",frontCamera:"50 МП, f/2.0",battery:"5600 мАч",os:"Android 14, MagicOS 8",charging:"80 Вт / 66 Вт",weight:"225 г",dimensions:"162.9×76.8×9.0 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:93,camera:92,battery:91,display:93,design:86,value:76},totalScore:89},`);
phones.push(`  {id:"h_x9b",slug:"honor-x9b",name:"Honor X9b",brand:"Honor",image:${G("honor-x9b")},price:22990,priceLabel:"от 22 990 ₽",year:2024,color:"#27AE60",popularity:60,
   specs:{display:'6.78" AMOLED, 2652×1200, 120 Гц',processor:"Snapdragon 6 Gen 1",ram:"8 ГБ",storage:"256 ГБ",mainCamera:"108+5+2 МП, f/1.75",frontCamera:"16 МП, f/2.4",battery:"5800 мАч",os:"Android 13, MagicOS 7.2",charging:"35 Вт",weight:"185 г",dimensions:"165.1×76.1×7.98 мм",protection:"IP53",nfc:false,fiveG:true},
   scores:{performance:68,camera:68,battery:92,display:84,design:78,value:88},totalScore:80},`);

// ════ Motorola 2020-2024 ════
phones.push(`  {id:"mo_e40pro",slug:"motorola-edge-40-pro",name:"Motorola Edge 40 Pro",brand:"Motorola",image:${G("motorola-edge-40-pro")},price:44990,priceLabel:"от 44 990 ₽",year:2023,color:"#1C2536",popularity:62,
   specs:{display:'6.67" pOLED, 2400×1080, 165 Гц',processor:"Snapdragon 8 Gen 2",ram:"12 ГБ",storage:"256 ГБ",mainCamera:"50+50+12 МП, f/1.8",frontCamera:"60 МП, f/2.2",battery:"4600 мАч",os:"Android 13",charging:"125 Вт / 15 Вт",weight:"199 г",dimensions:"161.2×74.0×8.6 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:90,camera:82,battery:82,display:90,design:84,value:80},totalScore:85},`);
phones.push(`  {id:"mo_e40",slug:"motorola-edge-40",name:"Motorola Edge 40",brand:"Motorola",image:${G("motorola-edge-40")},price:29990,priceLabel:"от 29 990 ₽",year:2023,color:"#6C5CE7",popularity:60,
   specs:{display:'6.55" pOLED, 2400×1080, 144 Гц',processor:"Dimensity 8020",ram:"8 ГБ",storage:"256 ГБ",mainCamera:"50+13 МП, f/1.4",frontCamera:"32 МП, f/2.4",battery:"4400 мАч",os:"Android 13",charging:"68 Вт / 15 Вт",weight:"167 г",dimensions:"158.4×72.1×7.49 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:78,camera:76,battery:80,display:86,design:82,value:82},totalScore:81},`);
phones.push(`  {id:"mo_e30u",slug:"motorola-edge-30-ultra",name:"Motorola Edge 30 Ultra",brand:"Motorola",image:${G("motorola-edge-30-ultra")},price:44990,priceLabel:"от 44 990 ₽",year:2022,color:"#C0392B",popularity:62,
   specs:{display:'6.67" pOLED, 2400×1080, 144 Гц',processor:"Snapdragon 8+ Gen 1",ram:"12 ГБ",storage:"256 ГБ",mainCamera:"200+50+12 МП, f/1.95",frontCamera:"60 МП, f/2.2",battery:"4610 мАч",os:"Android 12",charging:"125 Вт / 50 Вт",weight:"198.5 г",dimensions:"161.8×73.5×8.39 мм",protection:"IP52",nfc:true,fiveG:true},
   scores:{performance:88,camera:84,battery:82,display:88,design:82,value:78},totalScore:84},`);
phones.push(`  {id:"mo_e30",slug:"motorola-edge-30",name:"Motorola Edge 30",brand:"Motorola",image:${G("motorola-edge-30")},price:19990,priceLabel:"от 19 990 ₽",year:2022,color:"#2ECC71",popularity:58,
   specs:{display:'6.5" pOLED, 2400×1080, 144 Гц',processor:"Snapdragon 778G+",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+50+2 МП, f/1.8",frontCamera:"32 МП, f/2.25",battery:"4020 мАч",os:"Android 12",charging:"33 Вт",weight:"155 г",dimensions:"159.0×74.2×6.79 мм",protection:"IP52",nfc:true,fiveG:true},
   scores:{performance:74,camera:74,battery:72,display:86,design:78,value:84},totalScore:78},`);
phones.push(`  {id:"mo_g82",slug:"motorola-moto-g82",name:"Motorola Moto G82",brand:"Motorola",image:${G("motorola-moto-g82-5g")},price:19990,priceLabel:"от 19 990 ₽",year:2022,color:"#3498DB",popularity:58,
   specs:{display:'6.55" pOLED, 2400×1080, 120 Гц',processor:"Snapdragon 695",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+8+2 МП, f/1.8",frontCamera:"16 МП, f/2.2",battery:"5000 мАч",os:"Android 12",charging:"33 Вт",weight:"173 г",dimensions:"160.9×74.5×7.45 мм",protection:"IP52",nfc:true,fiveG:true},
   scores:{performance:60,camera:66,battery:86,display:82,design:74,value:86},totalScore:76},`);
phones.push(`  {id:"mo_razr40",slug:"motorola-razr-40",name:"Motorola Razr 40",brand:"Motorola",image:${G("motorola-razr-40")},price:44990,priceLabel:"от 44 990 ₽",year:2023,color:"#27AE60",popularity:60,
   specs:{display:'6.9" pOLED, 2640×1080, 144 Гц; 1.5\" внешний',processor:"Snapdragon 7 Gen 1",ram:"8 ГБ",storage:"256 ГБ",mainCamera:"64+13 МП, f/1.7",frontCamera:"32 МП, f/2.4",battery:"4200 мАч",os:"Android 13",charging:"30 Вт / 5 Вт",weight:"188.6 г",dimensions:"170.8×73.95×7.35 мм (развёрнут)",protection:"IP52",nfc:true,fiveG:true},
   scores:{performance:74,camera:72,battery:76,display:86,design:94,value:74},totalScore:79},`);

// ════ OPPO 2020-2024 ════
phones.push(`  {id:"o_fx5pro",slug:"oppo-find-x5-pro",name:"OPPO Find X5 Pro",brand:"OPPO",image:${G("oppo-find-x5-pro")},price:59990,priceLabel:"от 59 990 ₽",year:2022,color:"#1C2536",popularity:62,
   specs:{display:'6.7" LTPO AMOLED, 3216×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 1",ram:"12 ГБ",storage:"256 ГБ",mainCamera:"50+50+13 МП (Hasselblad), f/1.7",frontCamera:"32 МП, f/2.4",battery:"5000 мАч",os:"Android 12, ColorOS 12",charging:"80 Вт / 50 Вт",weight:"218 г",dimensions:"163.7×73.9×8.5 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:86,camera:88,battery:86,display:92,design:88,value:74},totalScore:86},`);
phones.push(`  {id:"o_fx6pro",slug:"oppo-find-x6-pro",name:"OPPO Find X6 Pro",brand:"OPPO",image:${G("oppo-find-x6-pro")},price:69990,priceLabel:"от 69 990 ₽",year:2023,color:"#2C3E50",popularity:66,
   specs:{display:'6.82" LTPO AMOLED, 3168×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 2",ram:"16 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+50+50 МП (Hasselblad), f/1.7",frontCamera:"32 МП, f/2.4",battery:"5000 мАч",os:"Android 13, ColorOS 13",charging:"100 Вт / 50 Вт",weight:"218 г",dimensions:"163.8×73.0×8.51 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:90,camera:92,battery:86,display:93,design:88,value:74},totalScore:87},`);
phones.push(`  {id:"o_reno12",slug:"oppo-reno-12-pro",name:"OPPO Reno 12 Pro",brand:"OPPO",image:${G("oppo-reno12-pro-5g")},price:39990,priceLabel:"от 39 990 ₽",year:2024,color:"#8E44AD",popularity:60,
   specs:{display:'6.65" AMOLED, 2412×1080, 120 Гц',processor:"Dimensity 9200+",ram:"12 ГБ",storage:"256 ГБ",mainCamera:"50+50+8 МП, f/1.8",frontCamera:"50 МП, f/2.0",battery:"5000 мАч",os:"Android 14, ColorOS 14",charging:"80 Вт",weight:"180 г",dimensions:"161.8×74.8×7.98 мм",protection:"IP65",nfc:true,fiveG:true},
   scores:{performance:88,camera:82,battery:86,display:86,design:84,value:80},totalScore:84},`);

// ════ Vivo 2020-2023 ════
phones.push(`  {id:"v_x80pro",slug:"vivo-x80-pro",name:"Vivo X80 Pro",brand:"Vivo",image:${G("vivo-x80-pro")},price:59990,priceLabel:"от 59 990 ₽",year:2022,color:"#1A2A6C",popularity:62,
   specs:{display:'6.78" LTPO AMOLED, 3200×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 1",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+48+12+8 МП (Zeiss), f/1.57",frontCamera:"32 МП, f/2.45",battery:"4700 мАч",os:"Android 12, OriginOS Ocean",charging:"80 Вт / 50 Вт",weight:"219 г",dimensions:"164.6×75.3×9.1 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:86,camera:90,battery:82,display:93,design:86,value:74},totalScore:85},`);
phones.push(`  {id:"v_x90pro",slug:"vivo-x90-pro",name:"Vivo X90 Pro",brand:"Vivo",image:${G("vivo-x90-pro")},price:64990,priceLabel:"от 64 990 ₽",year:2022,color:"#2C3E50",popularity:64,
   specs:{display:'6.78" LTPO AMOLED, 3200×1440, 1-120 Гц',processor:"Dimensity 9200",ram:"12 ГБ",storage:"256 ГБ",mainCamera:"50+12+12 МП (Zeiss), f/1.75",frontCamera:"32 МП, f/2.0",battery:"4870 мАч",os:"Android 13, OriginOS 3",charging:"120 Вт / 50 Вт",weight:"215 г",dimensions:"164.6×75.4×9.7 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:90,camera:90,battery:84,display:93,design:86,value:72},totalScore:86},`);
phones.push(`  {id:"v_v30pro",slug:"vivo-v30-pro",name:"Vivo V30 Pro",brand:"Vivo",image:${G("vivo-v30-pro")},price:39990,priceLabel:"от 39 990 ₽",year:2024,color:"#8B0000",popularity:60,
   specs:{display:'6.78" AMOLED, 2800×1260, 120 Гц',processor:"Snapdragon 7 Gen 3",ram:"12 ГБ",storage:"256 ГБ",mainCamera:"50+50+8 МП (Zeiss), f/1.69",frontCamera:"50 МП, f/2.0",battery:"5000 мАч",os:"Android 14, OriginOS 4",charging:"80 Вт",weight:"190 г",dimensions:"163.1×74.4×7.45 мм",protection:"IP64",nfc:true,fiveG:true},
   scores:{performance:78,camera:82,battery:86,display:88,design:84,value:82},totalScore:83},`);

// ════ Nothing 2022-2025 ════
phones.push(`  {id:"n_1",slug:"nothing-phone-1",name:"Nothing Phone (1)",brand:"Nothing",image:${G("nothing-phone-1-")},price:24990,priceLabel:"от 24 990 ₽",year:2022,color:"#E8E8E8",popularity:66,
   specs:{display:'6.55" OLED, 2400×1080, 120 Гц',processor:"Snapdragon 778G+",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+50 МП, f/1.88",frontCamera:"16 МП, f/2.45",battery:"4500 мАч",os:"Android 12, Nothing OS 1",charging:"45 Вт / 15 Вт",weight:"193.5 г",dimensions:"159.2×75.8×8.3 мм",protection:"IP53",nfc:true,fiveG:true},
   scores:{performance:72,camera:72,battery:80,display:82,design:92,value:86},totalScore:81},`);
phones.push(`  {id:"n_2",slug:"nothing-phone-2-",name:"Nothing Phone (2)",brand:"Nothing",image:${G("nothing-phone-2-")},price:34990,priceLabel:"от 34 990 ₽",year:2023,color:"#EBEBEB",popularity:70,
   specs:{display:'6.7" LTPO OLED, 2412×1080, 1-120 Гц',processor:"Snapdragon 8+ Gen 1",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+50 МП, f/1.88",frontCamera:"32 МП, f/2.45",battery:"4700 мАч",os:"Android 13, Nothing OS 2",charging:"45 Вт / 15 Вт",weight:"201.2 г",dimensions:"162.1×76.4×8.6 мм",protection:"IP54",nfc:true,fiveG:true},
   scores:{performance:86,camera:74,battery:82,display:86,design:94,value:82},totalScore:84},`);
phones.push(`  {id:"n_cmf1",slug:"nothing-cmf-phone-1",name:"CMF Phone 1",brand:"Nothing",image:${G("nothing-cmf-phone-1-")},price:16990,priceLabel:"от 16 990 ₽",year:2024,color:"#FF6B35",popularity:60,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Dimensity 7300",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+2 МП, f/1.88",frontCamera:"16 МП, f/2.45",battery:"5000 мАч",os:"Android 14, Nothing OS 2.6",charging:"33 Вт",weight:"197 г",dimensions:"163.7×76.7×7.8 мм",protection:"IP52",nfc:false,fiveG:true},
   scores:{performance:68,camera:64,battery:86,display:80,design:86,value:94},totalScore:80},`);

// ════ Realme 2020-2024 ════
phones.push(`  {id:"r_gt5pro",slug:"realme-gt5-pro",name:"Realme GT 5 Pro",brand:"Realme",image:${G("realme-gt5-pro")},price:39990,priceLabel:"от 39 990 ₽",year:2023,color:"#1A1A2E",popularity:64,
   specs:{display:'6.78" LTPO AMOLED, 2780×1264, 1-144 Гц',processor:"Snapdragon 8 Gen 3",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+50+8 МП, f/1.69",frontCamera:"32 МП, f/2.45",battery:"5400 мАч",os:"Android 14, Realme UI 5",charging:"100 Вт / 50 Вт",weight:"219 г",dimensions:"162.0×75.8×9.5 мм",protection:"IP64",nfc:true,fiveG:true},
   scores:{performance:93,camera:82,battery:91,display:91,design:82,value:82},totalScore:87},`);
phones.push(`  {id:"r_gt2pro",slug:"realme-gt-2-pro",name:"Realme GT 2 Pro",brand:"Realme",image:${G("realme-gt-2-pro")},price:34990,priceLabel:"от 34 990 ₽",year:2022,color:"#2C3E50",popularity:62,
   specs:{display:'6.7" LTPO AMOLED, 3216×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 1",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+50+3 МП, f/1.88",frontCamera:"32 МП, f/2.45",battery:"5000 мАч",os:"Android 12, Realme UI 3",charging:"65 Вт",weight:"189 г",dimensions:"163.6×74.7×8.2 мм",protection:"нет",nfc:true,fiveG:true},
   scores:{performance:86,camera:78,battery:86,display:91,design:82,value:78},totalScore:84},`);
phones.push(`  {id:"r_12pro",slug:"realme-12-pro-plus",name:"Realme 12 Pro+",brand:"Realme",image:${G("realme-12-pro-plus-5g")},price:29990,priceLabel:"от 29 990 ₽",year:2024,color:"#8E44AD",popularity:60,
   specs:{display:'6.7" AMOLED, 2412×1080, 120 Гц',processor:"Snapdragon 7s Gen 2",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+64+8 МП (перископ), f/1.8",frontCamera:"32 МП, f/2.45",battery:"5000 мАч",os:"Android 14, Realme UI 5",charging:"67 Вт",weight:"195 г",dimensions:"161.5×74.7×8.8 мм",protection:"IP65",nfc:true,fiveG:true},
   scores:{performance:72,camera:78,battery:86,display:84,design:80,value:82},totalScore:80},`);

// ════ Asus 2020-2024 ════
phones.push(`  {id:"as_rog5",slug:"asus-rog-phone-5",name:"Asus ROG Phone 5",brand:"Asus",image:${G("asus-rog-phone-5")},price:44990,priceLabel:"от 44 990 ₽",year:2021,color:"#FF0000",popularity:62,
   specs:{display:'6.78" AMOLED, 2448×1080, 144 Гц',processor:"Snapdragon 888",ram:"12 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"64+13+5 МП, f/1.8",frontCamera:"24 МП, f/2.45",battery:"6000 мАч",os:"Android 11, ROG UI",charging:"65 Вт",weight:"238 г",dimensions:"172.8×77.3×10.3 мм",protection:"IP54",nfc:true,fiveG:true},
   scores:{performance:82,camera:72,battery:92,display:86,design:82,value:78},totalScore:82},`);
phones.push(`  {id:"as_rog6",slug:"asus-rog-phone-6",name:"Asus ROG Phone 6",brand:"Asus",image:${G("asus-rog-phone-6")},price:54990,priceLabel:"от 54 990 ₽",year:2022,color:"#E53935",popularity:64,
   specs:{display:'6.78" AMOLED, 2448×1080, 165 Гц',processor:"Snapdragon 8+ Gen 1",ram:"12 ГБ",storage:"256 ГБ",mainCamera:"50+13+5 МП, f/1.9",frontCamera:"12 МП, f/2.45",battery:"6000 мАч",os:"Android 12, ROG UI",charging:"65 Вт",weight:"239 г",dimensions:"173×77×10.4 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:88,camera:74,battery:92,display:88,design:84,value:76},totalScore:84},`);
phones.push(`  {id:"as_zf10",slug:"asus-zenfone-10",name:"Asus Zenfone 10",brand:"Asus",image:${G("asus-zenfone-10")},price:44990,priceLabel:"от 44 990 ₽",year:2023,color:"#E53935",popularity:58,
   specs:{display:'5.92" AMOLED, 2400×1080, 144 Гц',processor:"Snapdragon 8 Gen 2",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+13 МП, f/1.9",frontCamera:"32 МП, f/2.45",battery:"4300 мАч",os:"Android 13, ZenUI 10",charging:"30 Вт",weight:"172 г",dimensions:"146.5×68.1×9.4 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:90,camera:76,battery:78,display:86,design:82,value:80},totalScore:82},`);

// ════ Nokia 2020-2024 ════
phones.push(`  {id:"nk_x30",slug:"nokia-x30-5g",name:"Nokia X30 5G",brand:"Nokia",image:${G("nokia-x30-5g")},price:24990,priceLabel:"от 24 990 ₽",year:2022,color:"#3498DB",popularity:52,
   specs:{display:'6.43" PureDisplay OLED, 2400×1080, 90 Гц',processor:"Snapdragon 695",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+13 МП, f/1.8",frontCamera:"16 МП, f/2.4",battery:"4200 мАч",os:"Android 12 → 14",charging:"33 Вт",weight:"185 г",dimensions:"159.9×73.9×7.99 мм",protection:"IP67",nfc:true,fiveG:true},
   scores:{performance:60,camera:66,battery:76,display:80,design:76,value:82},totalScore:73},`);
phones.push(`  {id:"nk_g42",slug:"nokia-g42-5g",name:"Nokia G42 5G",brand:"Nokia",image:${G("nokia-g42-5g")},price:14990,priceLabel:"от 14 990 ₽",year:2023,color:"#27AE60",popularity:50,
   specs:{display:'6.56" IPS, 1612×720, 90 Гц',processor:"Snapdragon 480+",ram:"4 ГБ",storage:"128 ГБ",mainCamera:"50+2+2 МП, f/1.8",frontCamera:"8 МП, f/2.0",battery:"5000 мАч",os:"Android 13 → 15",charging:"20 Вт",weight:"193 г",dimensions:"163.6×76.0×8.4 мм",protection:"IP52",nfc:false,fiveG:true},
   scores:{performance:56,camera:54,battery:86,display:66,design:66,value:88},totalScore:69},`);
phones.push(`  {id:"nk_g22",slug:"nokia-g22",name:"Nokia G22",brand:"Nokia",image:${G("nokia-g22")},price:10990,priceLabel:"от 10 990 ₽",year:2023,color:"#ECF0F1",popularity:48,
   specs:{display:'6.52" IPS, 1600×720, 90 Гц',processor:"UniSOC T606",ram:"4 ГБ",storage:"64 ГБ — 128 ГБ",mainCamera:"50+2+2 МП, f/1.8",frontCamera:"8 МП, f/2.0",battery:"5050 мАч",os:"Android 12 → 14",charging:"20 Вт",weight:"195 г",dimensions:"166.3×76.1×8.5 мм",protection:"IP52",nfc:false,fiveG:false},
   scores:{performance:40,camera:50,battery:87,display:62,design:62,value:92},totalScore:66},`);

// ════ Infinix 2021-2024 ════
phones.push(`  {id:"if_nt40",slug:"infinix-note-40",name:"Infinix Note 40",brand:"Infinix",image:${G("infinix-note-40")},price:14990,priceLabel:"от 14 990 ₽",year:2024,color:"#6C5CE7",popularity:48,
   specs:{display:'6.78" AMOLED, 2436×1080, 120 Гц',processor:"Helio G99 Ultimate",ram:"8 ГБ",storage:"128 ГБ",mainCamera:"108+2+2 МП, f/1.75",frontCamera:"32 МП, f/2.0",battery:"5000 мАч",os:"Android 14, XOS 14",charging:"45 Вт",weight:"198 г",dimensions:"167.2×76.5×7.79 мм",protection:"IP53",nfc:false,fiveG:false},
   scores:{performance:62,camera:62,battery:86,display:80,design:72,value:92},totalScore:76},`);
phones.push(`  {id:"if_zero30",slug:"infinix-zero-30-5g",name:"Infinix Zero 30 5G",brand:"Infinix",image:${G("infinix-zero-30-5g")},price:19990,priceLabel:"от 19 990 ₽",year:2023,color:"#E74C3C",popularity:46,
   specs:{display:'6.78" AMOLED, 2400×1080, 144 Гц',processor:"Dimensity 8020",ram:"8 ГБ",storage:"256 ГБ",mainCamera:"108+50+2 МП, f/1.75",frontCamera:"50 МП (4K 60fps), f/2.2",battery:"5000 мАч",os:"Android 13, XOS 13",charging:"68 Вт",weight:"200 г",dimensions:"168.4×75.8×7.9 мм",protection:"нет",nfc:false,fiveG:true},
   scores:{performance:78,camera:70,battery:86,display:84,design:74,value:88},totalScore:80},`);

// ════ Tecno 2021-2024 ════
phones.push(`  {id:"tc_spark20",slug:"tecno-spark-20-pro-plus",name:"Tecno Spark 20 Pro+",brand:"Tecno",image:${G("tecno-spark-20-pro")},price:16990,priceLabel:"от 16 990 ₽",year:2024,color:"#27AE60",popularity:44,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Helio G99",ram:"8 ГБ",storage:"256 ГБ",mainCamera:"108+2+2 МП, f/1.75",frontCamera:"32 МП, f/2.0",battery:"5000 мАч",os:"Android 14, HiOS 14",charging:"45 Вт",weight:"193 г",dimensions:"164.2×75.5×7.9 мм",protection:"IP53",nfc:false,fiveG:false},
   scores:{performance:62,camera:62,battery:86,display:80,design:70,value:92},totalScore:75},`);

// ════ ZTE / Nubia 2020-2024 ════
phones.push(`  {id:"z_axon40u",slug:"zte-axon-40-ultra",name:"ZTE Axon 40 Ultra",brand:"ZTE",image:${G("zte-axon-40-ultra")},price:44990,priceLabel:"от 44 990 ₽",year:2022,color:"#1A1A2E",popularity:52,
   specs:{display:'6.8" AMOLED, 2480×1116, 120 Гц (под-экр. камера)',processor:"Snapdragon 8 Gen 1",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"64+64+8 МП, f/1.6",frontCamera:"16 МП под-экр.",battery:"5000 мАч",os:"Android 12, MyOS 12",charging:"65 Вт",weight:"204 г",dimensions:"163.4×75.4×8.3 мм",protection:"нет",nfc:true,fiveG:true},
   scores:{performance:86,camera:78,battery:86,display:86,design:82,value:78},totalScore:83},`);
phones.push(`  {id:"z_rm8pro",slug:"nubia-redmagic-8-pro",name:"Nubia Red Magic 8 Pro",brand:"ZTE",image:${G("nubia-redmagic-8-pro-")},price:54990,priceLabel:"от 54 990 ₽",year:2022,color:"#FF0000",popularity:54,
   specs:{display:'6.8" AMOLED, 2480×1116, 120 Гц',processor:"Snapdragon 8 Gen 2",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+50+8 МП, f/1.9",frontCamera:"16 МП под-экр.",battery:"6000 мАч",os:"Android 13, RedMagic OS 8",charging:"165 Вт",weight:"228 г",dimensions:"164.6×76.4×8.9 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:90,camera:74,battery:93,display:88,design:82,value:76},totalScore:84},`);

// ════ Lenovo 2020-2024 ════
phones.push(`  {id:"l_leg2",slug:"lenovo-legion-phone-2-pro",name:"Lenovo Legion Phone 2 Pro",brand:"Lenovo",image:${G("lenovo-legion-phone-2-pro")},price:39990,priceLabel:"от 39 990 ₽",year:2021,color:"#FF0000",popularity:50,
   specs:{display:'6.92" AMOLED, 2460×1080, 144 Гц',processor:"Snapdragon 888",ram:"12 ГБ",storage:"256 ГБ",mainCamera:"64+16+2 МП, f/1.89",frontCamera:"44 МП выдвижная",battery:"5500 мАч",os:"Android 11, ZUI 13",charging:"90 Вт",weight:"259 г",dimensions:"170.4×78.5×9.9 мм",protection:"нет",nfc:true,fiveG:true},
   scores:{performance:82,camera:70,battery:90,display:84,design:78,value:78},totalScore:80},`);

// ════ TCL 2021-2024 ════
phones.push(`  {id:"tcl_20p",slug:"tcl-20-pro-5g",name:"TCL 20 Pro 5G",brand:"TCL",image:${G("tcl-20-pro-5g")},price:19990,priceLabel:"от 19 990 ₽",year:2021,color:"#2C3E50",popularity:44,
   specs:{display:'6.67" AMOLED, 2400×1080, 60 Гц',processor:"Snapdragon 750G",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"48+16+5+2 МП, f/1.8",frontCamera:"32 МП, f/2.45",battery:"4500 мАч",os:"Android 11",charging:"18 Вт / 15 Вт",weight:"190 г",dimensions:"164.2×73.8×7.99 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:62,camera:64,battery:80,display:78,design:76,value:82},totalScore:74},`);
phones.push(`  {id:"tcl_40se",slug:"tcl-40-se",name:"TCL 40 SE",brand:"TCL",image:${G("tcl-40-se")},price:9990,priceLabel:"от 9 990 ₽",year:2023,color:"#3498DB",popularity:42,
   specs:{display:'6.75" IPS, 1600×720, 60 Гц',processor:"Helio G37",ram:"4 ГБ",storage:"128 ГБ",mainCamera:"50+2+2 МП, f/1.8",frontCamera:"8 МП, f/2.0",battery:"5010 мАч",os:"Android 13",charging:"15 Вт",weight:"195 г",dimensions:"167.6×76.6×8.5 мм",protection:"IP52",nfc:false,fiveG:false},
   scores:{performance:38,camera:48,battery:87,display:60,design:60,value:94},totalScore:65},`);

// ════ POCO дополнительные ════
phones.push(`  {id:"pc_f4gt",slug:"xiaomi-poco-f4-gt",name:"POCO F4 GT",brand:"POCO",image:${G("xiaomi-poco-f4-gt")},price:34990,priceLabel:"от 34 990 ₽",year:2022,color:"#E53935",popularity:66,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 8 Gen 1",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"64+8+2 МП, f/1.73",frontCamera:"20 МП, f/2.45",battery:"4700 мАч",os:"Android 12, MIUI 13",charging:"120 Вт",weight:"210 г",dimensions:"162.5×76.7×8.5 мм",protection:"IP53",nfc:true,fiveG:true},
   scores:{performance:86,camera:70,battery:82,display:84,design:78,value:84},totalScore:81},`);
phones.push(`  {id:"pc_f3",slug:"xiaomi-poco-f3",name:"POCO F3",brand:"POCO",image:${G("xiaomi-poco-f3")},price:22990,priceLabel:"от 22 990 ₽",year:2021,color:"#1A1A2E",popularity:68,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 870",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"48+8+5 МП, f/1.79",frontCamera:"20 МП, f/2.45",battery:"4520 мАч",os:"Android 11, MIUI 12.5",charging:"33 Вт",weight:"196 г",dimensions:"163.7×76.4×7.8 мм",protection:"нет",nfc:true,fiveG:true},
   scores:{performance:76,camera:68,battery:80,display:84,design:78,value:88},totalScore:79},`);
phones.push(`  {id:"pc_x3pro",slug:"xiaomi-poco-x3-pro",name:"POCO X3 Pro",brand:"POCO",image:${G("xiaomi-poco-x3-pro")},price:17990,priceLabel:"от 17 990 ₽",year:2021,color:"#FF6B35",popularity:70,
   specs:{display:'6.67" IPS LCD, 2400×1080, 120 Гц',processor:"Snapdragon 860",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"48+8+2+2 МП, f/1.79",frontCamera:"20 МП, f/2.45",battery:"5160 мАч",os:"Android 11, MIUI 12.5",charging:"33 Вт",weight:"215 г",dimensions:"165.3×76.8×9.4 мм",protection:"IP53",nfc:false,fiveG:false},
   scores:{performance:72,camera:64,battery:88,display:78,design:68,value:88},totalScore:76},`);
phones.push(`  {id:"pc_m4pro",slug:"xiaomi-poco-m4-pro",name:"POCO M4 Pro",brand:"POCO",image:${G("xiaomi-poco-m4-pro")},price:14990,priceLabel:"от 14 990 ₽",year:2022,color:"#6C5CE7",popularity:60,
   specs:{display:'6.43" AMOLED, 2400×1080, 90 Гц',processor:"Dimensity 810",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"64+8+2 МП, f/1.89",frontCamera:"16 МП, f/2.45",battery:"5000 мАч",os:"Android 12, MIUI 13",charging:"33 Вт",weight:"179.5 г",dimensions:"160.5×74.5×8.09 мм",protection:"нет",nfc:true,fiveG:true},
   scores:{performance:64,camera:62,battery:86,display:80,design:68,value:90},totalScore:75},`);

const allNew = phones.join('\n');

let c = readFileSync('./data/phones.ts', 'utf8');

// Remove closing `];` and add new phones before it
const idx = c.lastIndexOf('];');
c = c.slice(0, idx) + '\n' + allNew + '\n' + c.slice(idx);

writeFileSync('./data/phones.ts', c, 'utf8');
console.log('Added ' + phones.length + ' new phones!');
console.log('Total approx: check with grep');
