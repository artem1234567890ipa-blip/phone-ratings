import { readFileSync, writeFileSync } from 'fs';
const G = s => `G("${s}")`;
const ts = (p,c,b,d,des,v) => Math.round((p+c+b+d+des+v)/6);
const ph = (id,slug,name,brand,img,price,year,color,disp,proc,ram,stor,cam,fc,bat,os,chg,wt,ip,nfc,g5,p,cs,bs,ds,dess,vs,pop,dim) =>
`  {id:"${id}",slug:"${slug}",name:"${name}",brand:"${brand}",image:${G(img)},price:${price},priceLabel:"от ${price.toLocaleString('ru')} ₽",year:${year},color:"${color}",popularity:${pop||50},
   specs:{display:'${disp}',processor:"${proc}",ram:"${ram}",storage:"${stor}",mainCamera:"${cam}",frontCamera:"${fc||'16 МП, f/2.0'}",battery:"${bat}",os:"${os}",charging:"${chg}",weight:"${wt||'185 г'}",dimensions:"${dim||'162×75×8 мм'}",protection:"${ip||'нет'}",nfc:${nfc},fiveG:${g5}},
   scores:{performance:${p},camera:${cs},battery:${bs},display:${ds},design:${dess},value:${vs}},totalScore:${ts(p,cs,bs,ds,dess,vs)}},`;
const e = [];

// ═══ Samsung S10 Lite / Note 10 Lite ═══
e.push(ph('ss10l','samsung-galaxy-s10-lite','Samsung Galaxy S10 Lite','Samsung','samsung-galaxy-s10-lite',24990,2020,'#E74C3C','6.7" Super AMOLED, 2400×1080, 60 Гц','Snapdragon 855','6 ГБ','128 ГБ','48+12+5 МП, f/1.7','32 МП, f/2.4','4500 мАч','Android 10 → 13','45 Вт / 15 Вт','186 г','нет',true,false,68,76,80,82,76,78,60,'163.0×75.6×8.1 мм'));

// ═══ Samsung Galaxy A82 / A82 5G ═══
e.push(ph('sa82','samsung-galaxy-a82-5g','Samsung Galaxy A82 5G','Samsung','samsung-galaxy-a73-5g',29990,2021,'#8E44AD','6.7" Super AMOLED, 2400×1080, 120 Гц','Snapdragon 855+','6 ГБ','128 ГБ','64+12+5 МП, f/2.0','32 МП выдвиж., f/2.2','4500 мАч','Android 11 → 14','25 Вт','213 г','нет',true,true,68,72,80,84,78,76,58,'166.5×76.2×8.1 мм'));

// ═══ Samsung Galaxy M62 / M42 ═══
e.push(ph('sm62','samsung-galaxy-m62','Samsung Galaxy M62','Samsung','samsung-galaxy-m54-5g',24990,2021,'#3498DB','6.7" Super AMOLED, 2400×1080, 60 Гц','Exynos 9825','6 ГБ','128 ГБ','64+12+5+5 МП, f/1.8','32 МП, f/2.2','7000 мАч','Android 11 → 13','25 Вт','218 г','нет',false,false,72,72,95,82,70,78,58,'163.9×76.3×9.5 мм'));
e.push(ph('sm42','samsung-galaxy-m42-5g','Samsung Galaxy M42 5G','Samsung','samsung-galaxy-m52-5g',19990,2021,'#27AE60','6.6" Super AMOLED, 2400×1080, 90 Гц','Snapdragon 750G','6 ГБ','128 ГБ','64+8+5+5 МП, f/1.8','20 МП, f/2.2','5000 мАч','Android 11 → 13','15 Вт','193 г','нет',false,true,62,68,86,80,70,80,58,'162.3×77.4×8.6 мм'));

// ═══ Samsung Galaxy J серия 2019 ═══
e.push(ph('sj6','samsung-galaxy-j6','Samsung Galaxy J6','Samsung','samsung-galaxy-j8',8990,2018,'#3498DB','5.6" Super AMOLED, 1480×720, 60 Гц','Exynos 7870','3 ГБ','32 ГБ','13 МП, f/1.9','8 МП, f/1.9','3000 мАч','Android 8 → 10','10 Вт','154 г','нет',false,false,36,50,60,62,60,86,46));

// ═══ Xiaomi Redmi Note 4/5 ═══
e.push(ph('rn4','xiaomi-redmi-note-4','Redmi Note 4 (Mediatek)','Redmi','xiaomi-redmi-note-4',6990,2016,'#E74C3C','5.5" IPS, 1920×1080, 60 Гц','Helio X20','3 ГБ','32 ГБ','13 МП, f/2.0','5 МП, f/2.0','4100 мАч','Android 6 → 7, MIUI 9','10 Вт','175 г','нет',false,false,38,46,74,72,60,90,40));
e.push(ph('rn5','xiaomi-redmi-note-5-ai','Redmi Note 5 AI','Redmi','xiaomi-redmi-note-5-ai',7990,2018,'#27AE60','5.99" IPS, 2160×1080, 60 Гц','Snapdragon 625','3 ГБ','32 ГБ','12+5 МП, f/2.2','20 МП, f/2.2','4000 мАч','Android 7, MIUI 9','10 Вт','181 г','нет',false,false,44,56,74,70,62,86,46));

// ═══ Xiaomi Mi 8 / 9 ═══
e.push(ph('xmi8','xiaomi-mi-8','Xiaomi Mi 8','Xiaomi','xiaomi-mi-8',14990,2018,'#1A1A2E','6.21" Super AMOLED, 2248×1080, 60 Гц','Snapdragon 845','6 ГБ','64 ГБ','12+12 МП, f/1.8','20 МП, f/2.0','3400 мАч','Android 8.1, MIUI 10','18 Вт','175 г','нет',true,false,68,70,64,80,78,76,58));

// ═══ OnePlus 9R / 9RT ═══
e.push(ph('op_9r','oneplus-9r','OnePlus 9R','OnePlus','oneplus-9r',29990,2021,'#3498DB','6.55" AMOLED, 2400×1080, 120 Гц','Snapdragon 870','8 ГБ','128 ГБ','48+16+5+2 МП, f/1.75','16 МП, f/2.44','4500 мАч','Android 11, OxygenOS 11','65 Вт','189 г','нет',true,false,76,72,80,86,78,76,60));
e.push(ph('op_9rt','oneplus-9rt-5g','OnePlus 9RT','OnePlus','oneplus-9rt-5g',34990,2021,'#E74C3C','6.62" AMOLED, 2400×1080, 120 Гц','Snapdragon 888','8 ГБ','128 ГБ','50+16+2 МП, f/1.8','16 МП, f/2.44','4500 мАч','Android 11, OxygenOS 12','65 Вт','198.5 г','нет',true,true,82,72,80,86,78,76,60));
e.push(ph('op_10r','oneplus-10r','OnePlus 10R','OnePlus','oneplus-10r',34990,2022,'#27AE60','6.7" AMOLED, 2412×1080, 120 Гц','Dimensity 8100-Max','8 ГБ','128 ГБ','50+8+2 МП, f/1.8','16 МП, f/2.44','5000 мАч','Android 12, OxygenOS 12','80 Вт','186 г','IP68',true,true,78,72,86,86,80,76,62));

// ═══ Google Pixel 7a XL / Pixel Pro ═══
e.push(ph('gp_7xl','google-pixel-7-xl','Google Pixel 7 Pro (Pro)','Google','google-pixel-8-pro',59990,2022,'#9B59B6','6.7" LTPO OLED, 3120×1440, 1-120 Гц','Tensor G2','12 ГБ','128 ГБ','50+48+12 МП, f/1.85','10.8 МП, f/2.2','5000 мАч','Android 13 → 15','30 Вт / 23 Вт','212 г','IP68',true,true,74,90,86,92,86,78,62,'162.9×76.6×8.9 мм'));

// ═══ POCO X4 / X3 GT (China) ═══
e.push(ph('px4p2','xiaomi-poco-x4-pro-5g-2','POCO X4 Pro 5G (2022)','POCO','xiaomi-poco-x4-pro-5g',22990,2022,'#6C5CE7','6.67" AMOLED, 2400×1080, 120 Гц','Snapdragon 695','6 ГБ','128 ГБ','108+8+2 МП, f/1.73','16 МП, f/2.45','5000 мАч','Android 12, MIUI 13','67 Вт','205 г','IP53',true,true,60,70,86,84,74,82,62));

// ═══ Xiaomi 12T / 12 Lite ═══
e.push(ph('x12t','xiaomi-12t','Xiaomi 12T','Xiaomi','xiaomi-12t',39990,2022,'#3498DB','6.67" AMOLED, 2712×1220, 144 Гц','Dimensity 8100 Ultra','8 ГБ','128 ГБ','108+8+2 МП, f/1.75','20 МП, f/2.24','5000 мАч','Android 12, MIUI 13','120 Вт',202,'IP53',true,true,78,74,88,88,80,82,62));
e.push(ph('x12tp','xiaomi-12t-pro','Xiaomi 12T Pro','Xiaomi','xiaomi-12t-pro',49990,2022,'#E74C3C','6.67" AMOLED, 2712×1220, 144 Гц','Snapdragon 8+ Gen 1','8 ГБ','128 ГБ','200+8+2 МП, f/1.69','20 МП, f/2.24','5000 мАч','Android 12, MIUI 13','120 Вт',204,'IP53',true,true,88,82,88,88,80,78,62));
e.push(ph('x12l','xiaomi-12-lite','Xiaomi 12 Lite','Xiaomi','xiaomi-12-lite-5g',27990,2022,'#FF6B9D','6.55" AMOLED, 2400×1080, 120 Гц','Snapdragon 778G','6 ГБ','128 ГБ','108+8+2 МП, f/1.75','32 МП, f/2.45','4300 мАч','Android 12, MIUI 13','67 Вт','173 г','нет',true,true,72,74,78,86,82,80,60));

// ═══ Xiaomi 10S / 10 Ultra ═══
e.push(ph('x10u','xiaomi-mi-10-ultra','Xiaomi Mi 10 Ultra','Xiaomi','xiaomi-mi-10-ultra',54990,2020,'#1A1A2E','6.67" AMOLED, 2340×1080, 120 Гц','Snapdragon 865','8 ГБ','128 ГБ','48+20+12+8 МП, f/1.69','20 МП, f/2.0','4500 мАч','Android 10, MIUI 12','120 Вт / 50 Вт',221,'IP68',true,true,74,84,80,88,84,72,62));

// ═══ Huawei Nova 10 / 11 ═══
e.push(ph('hw_n10p','huawei-nova-10-pro','Huawei Nova 10 Pro','Huawei','huawei-nova-9',34990,2022,'#27AE60','6.78" OLED, 2652×1200, 120 Гц','Snapdragon 778G 4G','8 ГБ','128 ГБ','50+8+2 МП, f/1.9','60+8 МП, f/2.4','4500 мАч','Android 12, HarmonyOS 3','100 Вт',172,'нет',true,false,72,74,80,86,82,72,58));
e.push(ph('hw_n7p','huawei-nova-7-pro','Huawei Nova 7 Pro','Huawei','huawei-nova-9',24990,2020,'#3498DB','6.57" OLED, 2340×1080, 60 Гц','Kirin 985','8 ГБ','128 ГБ','64+8+8+2 МП, f/1.4','32+8 МП, f/2.0','4000 мАч','Android 10, EMUI 10.1','40 Вт / 27 Вт','201 г','нет',true,true,70,76,74,84,80,72,58));

// ═══ Motorola G серия (больше) ═══
e.push(ph('mg84','motorola-moto-g84-5g','Motorola Moto G84 5G','Motorola','motorola-moto-g72',19990,2023,'#9B59B6','6.55" pOLED, 2400×1080, 120 Гц','Snapdragon 695','12 ГБ','256 ГБ','50+8 МП, f/1.8','16 МП, f/2.4','5000 мАч','Android 13','33 Вт','167 г','IP54',true,true,60,66,86,82,74,80,56));
e.push(ph('mg40','motorola-moto-g40-fusion','Motorola Moto G40 Fusion','Motorola','motorola-moto-g50',14990,2021,'#27AE60','6.8" IPS, 1640×720, 90 Гц','Snapdragon 732G','4 ГБ','64 ГБ','64+8+2 МП, f/1.73','16 МП, f/2.2','6000 мАч','Android 11','20 Вт','212 г','нет',false,false,60,64,92,64,62,82,50));
e.push(ph('mg54','motorola-moto-g54-5g','Motorola Moto G54 5G','Motorola','motorola-moto-g73-5g',18990,2023,'#3498DB','6.5" IPS, 2400×1080, 120 Гц','Dimensity 7020','8 ГБ','256 ГБ','50+2 МП, f/1.8','16 МП, f/2.2','5000 мАч','Android 13','25 Вт',184,'IP52',true,true,62,58,86,72,68,82,52));

// ═══ Realme дополнительно ═══
e.push(ph('r_narzo60p','realme-narzo-60-pro','Realme Narzo 60 Pro','Realme','realme-narzo-70-pro-5g',27990,2023,'#6C5CE7','6.7" AMOLED, 2412×1080, 120 Гц','Dimensity 6080','8 ГБ','128 ГБ','100+2 МП, f/1.79','16 МП, f/2.45','5000 мАч','Android 13, Realme UI 4','67 Вт',186,'IP54',false,true,62,68,86,84,72,80,54));
e.push(ph('r_50p','realme-50-pro','Realme 10 Pro','Realme','realme-10-pro-plus-5g',22990,2022,'#27AE60','6.72" IPS, 2400×1080, 120 Гц','Snapdragon 695','8 ГБ','128 ГБ','108+8+2 МП, f/1.79','16 МП, f/2.45','5000 мАч','Android 13, Realme UI 4','33 Вт',182,'нет',false,true,60,68,86,72,68,80,56));

// ═══ Honor X серия ═══
e.push(ph('hx6a','honor-x6a','Honor X6a','Honor','honor-x7a',9990,2023,'#E74C3C','6.56" IPS, 1612×720, 90 Гц','Helio G37','4 ГБ','128 ГБ','50+5+2 МП, f/1.8','8 МП, f/2.0','5200 мАч','Android 13, MagicUI 7','10 Вт','179 г','нет',false,false,38,48,87,60,62,88,44));
e.push(ph('hx5b','honor-x5b','Honor X5b','Honor','honor-x7a',7990,2024,'#27AE60','6.56" IPS, 1612×720, 90 Гц','Unisoc SC9863A2','4 ГБ','64 ГБ','50+0.08 МП, f/1.8','8 МП, f/2.0','5200 мАч','Android 13, MagicUI 7','10 Вт','184 г','нет',false,false,34,42,87,58,58,90,40));
e.push(ph('hm6p','honor-magic6','Honor Magic6','Honor','honor-magic6-pro',44990,2024,'#1A2A6C','6.78" LTPO OLED, 2800×1280, 1-120 Гц','Snapdragon 8 Gen 3','12 ГБ','256 ГБ','50+50+32 МП, f/1.6','12 МП, f/2.0','5300 мАч','Android 14, MagicOS 8','66 Вт / 50 Вт','199 г','IP68',true,true,93,88,90,93,86,78,62));

// ═══ Vivo V23 / V25 ═══
e.push(ph('v_v23p','vivo-v23-pro','Vivo V23 Pro','Vivo','vivo-v30-pro',27990,2022,'#FF6B9D','6.56" AMOLED, 2376×1080, 90 Гц','Dimensity 920','8 ГБ','128 ГБ','108+8+2 МП, f/1.79','50+8 МП (двойная), f/2.0','4200 мАч','Android 12, OriginOS 2','44 Вт / 40 Вт','181 г','нет',true,true,68,76,76,86,80,74,58));
e.push(ph('v_v25p','vivo-v25-pro','Vivo V25 Pro','Vivo','vivo-v30-pro',29990,2022,'#3498DB','6.56" AMOLED, 2376×1080, 120 Гц','Dimensity 1300','8 ГБ','256 ГБ','50+8+2 МП, f/1.88','32 МП, f/2.0','4830 мАч','Android 12, OriginOS 2','66 Вт / 10 Вт','185 г','нет',true,true,72,72,82,86,80,74,60));

// ═══ Infinix GT 10 Pro ═══
e.push(ph('if_gt10','infinix-gt-10-pro','Infinix GT 10 Pro','Infinix','infinix-gt-20-pro',17990,2023,'#FF0000','6.67" AMOLED, 2400×1080, 120 Гц','Dimensity 8050','8 ГБ','256 ГБ','108+2+2 МП, f/1.75','32 МП, f/2.0','5000 мАч','Android 13, XOS 13','68 Вт',188,'IP53',false,true,72,64,86,82,74,82,52));

// ═══ ZTE Nubia дополнительно ═══
e.push(ph('z_z50sp','nubia-z50s-pro','Nubia Z50S Pro','ZTE','zte-nubia-z60-ultra',54990,2023,'#1A1A2E','6.67" AMOLED, 2400×1080, 144 Гц (под-экр. камера)','Snapdragon 8 Gen 2','12 ГБ','512 ГБ','35+50+50 МП, f/1.69','16 МП под-экр.','5100 мАч','Android 13, MyOS 13','80 Вт',229,'нет',true,true,90,82,88,86,82,72,60));

// ═══ Tecno Phantom X2 ═══
e.push(ph('tc_px2','tecno-phantom-x2','Tecno Phantom X2','Tecno','tecno-phantom-x2-pro',19990,2022,'#9B59B6','6.8" AMOLED, 2400×1080, 120 Гц','Dimensity 9000','8 ГБ','256 ГБ','64+13+2 МП, f/1.8','32 МП, f/2.2','5160 мАч','Android 12, HiOS 12','45 Вт / 20 Вт','200 г','нет',false,true,84,72,86,82,82,80,54));

// ═══ Nokia G серия дополнительно ═══
e.push(ph('nk_g20','nokia-g20','Nokia G20','Nokia','nokia-g22',8990,2021,'#E74C3C','6.5" IPS, 1600×720, 60 Гц','Helio G35','4 ГБ','64 ГБ','48+5+2+2 МП, f/1.79','8 МП, f/2.0','5050 мАч','Android 11 → 13','10 Вт','193 г','нет',false,false,38,58,87,62,62,86,46));
e.push(ph('nk_c21p','nokia-c21-plus','Nokia C21 Plus','Nokia','nokia-c22',9990,2022,'#27AE60','6.52" IPS, 1600×720, 60 Гц','UniSOC SC9863A','2 ГБ','32 ГБ','13+2 МП, f/2.0','8 МП, f/2.0','5050 мАч','Android 11','10 Вт','202 г','IP52',false,false,36,44,87,60,58,90,44));

// ═══ Asus Zenfone 8 Flip ═══
e.push(ph('as_zf8f','asus-zenfone-8-flip','Asus Zenfone 8 Flip','Asus','asus-rog-phone-8-pro',44990,2021,'#27AE60','6.67" AMOLED, 2400×1080, 90 Гц','Snapdragon 888','8 ГБ','128 ГБ','64+12+8 МП (поворотная), f/1.8','поворотная 64 МП','5000 мАч','Android 11, ZenUI','30 Вт','230 г','IP68',true,true,82,72,86,84,82,72,60));

// ═══ OPPO Find X3 Lite ═══
e.push(ph('o_fx3l','oppo-find-x3-lite','OPPO Find X3 Lite','OPPO','oppo-find-x8-pro',27990,2021,'#9B59B6','6.44" AMOLED, 2400×1080, 90 Гц','Snapdragon 765G','8 ГБ','128 ГБ','64+8+4+2 МП, f/1.7','32 МП, f/2.4','4300 мАч','Android 11, ColorOS 11','65 Вт','172 г','нет',true,true,64,70,78,80,76,78,58));

// ═══ Samsung Galaxy S20 FE ═══
e.push(ph('ss20fe','samsung-galaxy-s20-fe-5g','Samsung Galaxy S20 FE','Samsung','samsung-galaxy-s20-fe-5g',24990,2020,'#E74C3C','6.5" Super AMOLED, 2400×1080, 120 Гц','Snapdragon 865/Exynos 990','6 ГБ','128 ГБ','12+12+8 МП, f/1.8','32 МП, f/2.2','4500 мАч','Android 10 → 14','25 Вт / 15 Вт','190 г','IP68',true,true,74,76,80,86,80,78,62));
e.push(ph('ss21fan','samsung-galaxy-s21-fan-edition','Samsung Galaxy S21 FE (Fan)','Samsung','samsung-galaxy-s21-fe-5g',27990,2022,'#1A237E','6.4" Dynamic AMOLED 2X, 2340×1080, 120 Гц','Snapdragon 888','6 ГБ','128 ГБ','12+12+8 МП, f/1.8','32 МП, f/2.5','4500 мАч','Android 12 → 15','25 Вт / 15 Вт','177 г','IP68',true,true,82,78,80,88,82,80,62));

// ═══ Xiaomi Redmi Note 4X ═══
e.push(ph('rn4x','xiaomi-redmi-note-4x','Redmi Note 4X','Redmi','xiaomi-redmi-note-5-pro',7990,2017,'#3498DB','5.5" IPS, 1920×1080, 60 Гц','Snapdragon 625','3 ГБ','32 ГБ','13 МП, f/2.0','5 МП, f/2.0','4100 мАч','Android 6 → 7, MIUI 9','5 Вт','165 г','нет',false,false,44,46,74,70,60,84,42));

// ═══ Motorola One / Edge пропущенные ═══
e.push(ph('mo_g60s','motorola-moto-g60s','Moto G60s','Motorola','motorola-moto-g72',16990,2021,'#27AE60','6.8" IPS, 2460×1080, 120 Гц','Helio G95','4 ГБ','128 ГБ','64+8+5+2 МП, f/1.7','32 МП, f/2.0','5000 мАч','Android 11','30 Вт','218 г','IP52',false,false,58,66,86,70,64,80,54));
e.push(ph('mo_g60','motorola-moto-g60','Moto G60','Motorola','motorola-moto-g72',14990,2021,'#E74C3C','6.8" IPS, 2460×1080, 120 Гц','Helio G95','4 ГБ','128 ГБ','108+8+2+2 МП, f/1.7','32 МП, f/2.0','6000 мАч','Android 11','20 Вт','219 г','нет',false,false,58,68,92,70,64,80,56));

// ═══ Realme дополнительные (Series 7/8) ═══
e.push(ph('r_7p','realme-7-pro','Realme 7 Pro','Realme','realme-8-pro',17990,2020,'#27AE60','6.4" Super AMOLED, 2400×1080, 60 Гц','Snapdragon 720G','6 ГБ','128 ГБ','64+8+2+2 МП, f/1.8','32 МП, f/2.5','4500 мАч','Android 10, Realme UI','65 Вт','182 г','нет',false,false,60,68,80,80,72,78,58));
e.push(ph('r_8i','realme-8i','Realme 8i','Realme','realme-9-pro-5g',15990,2021,'#E74C3C','6.6" IPS, 2412×1080, 120 Гц','Helio G96','4 ГБ','64 ГБ','50+2+2 МП, f/1.8','16 МП, f/2.45','5000 мАч','Android 11, Realme UI 2','18 Вт','194 г','нет',false,false,58,52,86,72,66,80,50));

// ═══ Vivo X60 Pro ═══
e.push(ph('v_x60p','vivo-x60-pro-plus','Vivo X60 Pro+','Vivo','vivo-x80-pro',44990,2021,'#1A2A6C','6.56" AMOLED, 2376×1080, 120 Гц','Snapdragon 888','12 ГБ','256 ГБ','50+48+8+8 МП (Zeiss), f/1.57','32 МП, f/2.45','4200 мАч','Android 11, OriginOS 1','55 Вт',196,'нет',true,true,82,88,76,86,84,72,62));

// ═══ Nothing Phone 1 (уже есть, но добавим Phone 2) ═══
// already added

// ═══ Tecno Camon серия ═══
e.push(ph('tc_c17p','tecno-camon-17-pro','Tecno Camon 17 Pro','Tecno','tecno-camon-20-pro-5g',14990,2021,'#27AE60','6.8" AMOLED, 2460×1080, 60 Гц','Helio G95','6 ГБ','128 ГБ','64+8+2+2 МП, f/1.75','48+8 МП, f/2.0','5000 мАч','Android 11, HiOS 7.6','33 Вт','187 г','нет',false,false,58,66,86,76,68,80,50));
e.push(ph('tc_c19p','tecno-camon-19-pro','Tecno Camon 19 Pro','Tecno','tecno-camon-20-pro-5g',17990,2022,'#E74C3C','6.8" AMOLED, 2460×1080, 120 Гц','Helio G96','8 ГБ','128 ГБ','64+8+2 МП, f/1.75','32 МП, f/2.0','5000 мАч','Android 12, HiOS 12','33 Вт','185 г','нет',false,false,60,66,86,80,70,80,52));

// ═══ Infinix серия Zero ═══
e.push(ph('if_z20','infinix-zero-20','Infinix Zero 20','Infinix','infinix-zero-30-5g',19990,2022,'#8E44AD','6.7" AMOLED, 2400×1080, 60 Гц','Helio G96','8 ГБ','128 ГБ','108+5+2 МП, f/1.75','60 МП (4K), f/2.2','4500 мАч','Android 12, XOS 12','45 Вт',185,'нет',false,false,60,68,80,78,72,76,52));

// ═══ Lenovo Legion Phone Duel 2 ═══
e.push(ph('l_leg2p','lenovo-legion-phone-duel-2','Lenovo Legion Phone Duel 2','Lenovo','lenovo-legion-phone-2-pro',54990,2021,'#FF0000','6.92" AMOLED, 2460×1080, 144 Гц','Snapdragon 888+','12 ГБ','256 ГБ','64+16 МП, f/1.89','44 МП выдвиж.','5500 мАч','Android 11, ZUI 13','90 Вт',235,'нет',true,true,82,70,90,84,78,72,54));

// ═══ TCL 20L / 20S ═══
e.push(ph('tcl_20l','tcl-20l','TCL 20L','TCL','tcl-20-pro-5g',12990,2021,'#3498DB','6.67" IPS, 2400×1080, 60 Гц','Snapdragon 662','4 ГБ','64 ГБ','48+8+2+2 МП, f/1.79','16 МП, f/2.2','5000 мАч','Android 11','18 Вт',186,'IP52',false,false,50,60,86,72,66,80,50));
e.push(ph('tcl_40np','tcl-40-nxtpaper','TCL 40 NXTPaper','TCL','tcl-40-se',11990,2023,'#27AE60','6.78" IPS NXTPaper, 1640×720, 90 Гц','Helio G88','4 ГБ','128 ГБ','50+2 МП, f/1.8','8 МП, f/2.0','5010 мАч','Android 13','33 Вт',200,'IP52',false,false,50,50,87,62,62,84,46));

// ═══ Samsung Galaxy Fold пропущенные ═══
e.push(ph('sfold1','samsung-galaxy-z-fold-','Samsung Galaxy Z Fold','Samsung','samsung-galaxy-z-fold3-5g',59990,2019,'#1C1C1E','7.3" QXGA+ AMOLED (осн), 2152×1536, 60 Гц','Snapdragon 855','12 ГБ','512 ГБ','12+12+16 МП, f/1.5','10+8 МП, f/2.2','4235 мАч','Android 9 → 12','15 Вт / 9 Вт','276 г','нет',true,false,68,78,74,88,88,60,55,'198.0×160.9×6.9 мм'));

// ═══ Дополнительные Xiaomi ═══
e.push(ph('x14up','xiaomi-14-ultra','Xiaomi 14 Ultra 5G','Xiaomi','xiaomi-14',89990,2024,'#1A1A2E','6.73" LTPO AMOLED, 3200×1440, 1-120 Гц','Snapdragon 8 Gen 3','16 ГБ','512 ГБ','50+200+50+50 МП (Leica), f/1.63','32 МП, f/2.0','5000 мАч','Android 14, HyperOS','90 Вт / 80 Вт','222 г','IP68',true,true,93,97,87,96,90,79,90));

// ═══ OnePlus Open (раскладной) ═══
e.push(ph('op_open','oneplus-open','OnePlus Open','OnePlus','oneplus-13',84990,2023,'#8E44AD','7.82" LTPO AMOLED (осн), 2268×2440, 1-120 Гц','Snapdragon 8 Gen 2','16 ГБ','512 ГБ','48+64+48 МП (Hasselblad), f/1.7','20 МП, f/2.2','4805 мАч','Android 13, OxygenOS 13.2','67 Вт',245,'IP64',true,true,90,88,82,94,94,68,62));

// ═══ Дополнительные Google Pixel ═══
e.push(ph('gp_fold','google-pixel-fold','Google Pixel Fold','Google','google-pixel-9-',154990,2023,'#2E4057','7.6" LTPO OLED (осн), 2208×1840, 1-120 Гц','Tensor G2','12 ГБ','256 ГБ','48+10.8+10.8 МП, f/1.7','8 МП, f/2.0','4821 мАч','Android 13 → 15','30 Вт / 21 Вт',283,'IPX8',true,true,74,86,82,94,92,58,56));

const allNew = e.join('\n');
let c = readFileSync('./data/phones.ts', 'utf8');
const idx = c.lastIndexOf('];');
c = c.slice(0, idx) + '\n' + allNew + '\n' + c.slice(idx);
writeFileSync('./data/phones.ts', c, 'utf8');
console.log('Added', e.length, 'phones');
