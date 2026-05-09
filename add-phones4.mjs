import { readFileSync, writeFileSync } from 'fs';
const G = s => `G("${s}")`;
const ts = (p,c,b,d,des,v) => Math.round((p+c+b+d+des+v)/6);
function ph(id,slug,name,brand,img,price,year,color,disp,proc,ram,stor,cam,fc,bat,os,chg,wt,ip,nfc,g5,p,cs,bs,ds,dess,vs,pop,dim) {
  return `  {id:"${id}",slug:"${slug}",name:"${name}",brand:"${brand}",image:${G(img)},price:${price},priceLabel:"от ${price.toLocaleString('ru')} ₽",year:${year},color:"${color}",popularity:${pop||50},
   specs:{display:'${disp}',processor:"${proc}",ram:"${ram}",storage:"${stor}",mainCamera:"${cam}",frontCamera:"${fc||'16 МП, f/2.0'}",battery:"${bat}",os:"${os}",charging:"${chg}",weight:"${wt||'185 г'}",dimensions:"${dim||'162×75×8 мм'}",protection:"${ip||'нет'}",nfc:${nfc},fiveG:${g5}},
   scores:{performance:${p},camera:${cs},battery:${bs},display:${ds},design:${dess},value:${vs}},totalScore:${ts(p,cs,bs,ds,dess,vs)}},`;
}
const e = [];

// ═══ SAMSUNG S серия (ещё) ═══
e.push(ph('ss24u2','samsung-galaxy-s24-ultra','Samsung Galaxy S24 Ultra','Samsung','samsung-galaxy-s23-ultra-5g',89990,2024,'#2C2C2E','6.8" Dynamic AMOLED 2X, 3088×1440, 1-120 Гц','Snapdragon 8 Gen 3','12 ГБ','256 ГБ — 1 ТБ','200+50+50+10 МП, f/1.7','12 МП, f/2.2','5000 мАч','Android 14, One UI 6.1','45 Вт / 15 Вт','232 г','IP68',true,true,93,97,86,97,93,78,92,'162.3×79.0×8.6 мм'));
e.push(ph('ss24p','samsung-galaxy-s24-plus','Samsung Galaxy S24+','Samsung','samsung-galaxy-s23-ultra-5g',74990,2024,'#C9B99A','6.7" Dynamic AMOLED 2X, 3088×1440, 1-120 Гц','Snapdragon 8 Gen 3','12 ГБ','256 ГБ — 512 ГБ','50+10+12 МП, f/1.8','12 МП, f/2.2','4900 мАч','Android 14, One UI 6.1','45 Вт / 15 Вт','196 г','IP68',true,true,93,88,85,94,90,80,88,'158.5×75.9×7.7 мм'));
// Samsung A серия новые
e.push(ph('sa56','samsung-galaxy-a56','Samsung Galaxy A56','Samsung','samsung-galaxy-a55',44990,2025,'#27AE60','6.7" Super AMOLED, 2340×1080, 120 Гц','Exynos 1580','8 ГБ','256 ГБ','50+12+5 МП, f/1.8','12 МП, f/2.2','5000 мАч','Android 15, One UI 7','45 Вт',198,'IP67',true,true,74,78,86,86,82,86,60,'162×76×7.8 мм'));
e.push(ph('sa36','samsung-galaxy-a36','Samsung Galaxy A36','Samsung','samsung-galaxy-a35',29990,2025,'#3498DB','6.7" Super AMOLED, 2340×1080, 120 Гц','Snapdragon 6 Gen 3','6 ГБ','128 ГБ','50+8+5 МП, f/1.8','12 МП, f/2.2','5000 мАч','Android 15, One UI 7','45 Вт',200,'IP67',true,true,72,74,86,84,80,86,58,'162×76×7.8 мм'));
e.push(ph('sa16','samsung-galaxy-a16-5g','Samsung Galaxy A16 5G','Samsung','samsung-galaxy-a55',16990,2024,'#4A4A4A','6.7" Super AMOLED, 2340×1080, 90 Гц','Dimensity 6300','4 ГБ','128 ГБ','50+5+2 МП, f/1.8','13 МП, f/2.2','5000 мАч','Android 14, One UI 6','25 Вт',198,'IP54',false,true,60,62,86,80,72,88,52,'164×77×8 мм'));
e.push(ph('sa03','samsung-galaxy-a03','Samsung Galaxy A03','Samsung','samsung-galaxy-a13',8990,2021,'#2C3E50','6.5" PLS IPS, 1600×720, 60 Гц','Helio P35','3 ГБ','32 ГБ','48+2+2+2 МП, f/2.0','5 МП, f/2.2','5000 мАч','Android 11','10 Вт','196 г','нет',false,false,38,52,86,60,56,90,45,'164.2×75.9×9.1 мм'));
e.push(ph('sa02s','samsung-galaxy-a02s','Samsung Galaxy A02s','Samsung','samsung-galaxy-a13',7990,2021,'#E74C3C','6.5" PLS IPS, 1600×720, 60 Гц','Snapdragon 450','3 ГБ','32 ГБ','13+2+2 МП, f/1.8','5 МП, f/2.2','5000 мАч','Android 10 → 12','15 Вт','196 г','нет',false,false,38,50,86,58,56,90,44,'164.2×75.9×9.1 мм'));
e.push(ph('sa72','samsung-galaxy-a72','Samsung Galaxy A72','Samsung','samsung-galaxy-a73-5g',22990,2021,'#9B59B6','6.7" Super AMOLED, 2400×1080, 90 Гц','Snapdragon 720G','6 ГБ','128 ГБ','64+12+8+5 МП, f/1.8','32 МП, f/2.2','5000 мАч','Android 11 → 14','25 Вт','203 г','IP67',true,false,60,74,86,82,78,78,58,'165.1×77.4×8.4 мм'));
e.push(ph('sf14','samsung-galaxy-f14-5g','Samsung Galaxy F14 5G','Samsung','samsung-galaxy-a55',13990,2023,'#2ECC71','6.6" Super AMOLED, 2408×1080, 90 Гц','Exynos 1330','4 ГБ','128 ГБ','50+2 МП, f/1.8','13 МП, f/2.2','6000 мАч','Android 13 → 15','25 Вт','178 г','нет',true,true,58,56,92,80,68,84,50,'165.0×77.5×8.4 мм'));
e.push(ph('sf34','samsung-galaxy-f34-5g','Samsung Galaxy F34 5G','Samsung','samsung-galaxy-a55',17990,2023,'#8E44AD','6.5" Super AMOLED, 2340×1080, 120 Гц','Exynos 1280','6 ГБ','128 ГБ','48+8+5 МП, f/1.8','13 МП, f/2.2','6000 мАч','Android 13 → 15','25 Вт','202 г','нет',true,true,62,66,92,82,70,82,52,'164.6×76.7×8.2 мм'));
// Samsung Galaxy S23+ пропущен
e.push(ph('ss23p','samsung-galaxy-s23-plus','Samsung Galaxy S23+','Samsung','samsung-galaxy-s22-ultra-5g',54990,2023,'#C9B99A','6.6" Dynamic AMOLED 2X, 2340×1080, 1-120 Гц','Snapdragon 8 Gen 2','8 ГБ','256 ГБ — 512 ГБ','50+10+12 МП, f/1.8','12 МП, f/2.2','4700 мАч','Android 13 → 15','45 Вт / 15 Вт','196 г','IP68',true,true,90,86,82,90,88,78,86,'157.8×76.2×7.6 мм'));
e.push(ph('ss22fe','samsung-galaxy-s22-plus-','Samsung Galaxy S22 FE','Samsung','samsung-galaxy-s21-fe-5g',27990,2023,'#4169E1','6.4" Dynamic AMOLED 2X, 2340×1080, 120 Гц','Exynos 2300','8 ГБ','128 ГБ','50+8+12 МП, f/1.8','10 МП, f/2.4','4500 мАч','Android 13 → 15','25 Вт / 15 Вт','177 г','IP68',true,true,82,80,80,86,80,80,60,'157.9×74.5×7.7 мм'));

// ═══ Xiaomi Mi 10T Lite / Poco F4 ═══
e.push(ph('x10tl','xiaomi-mi-10t-lite-5g','Xiaomi Mi 10T Lite','Xiaomi','xiaomi-mi-10t-lite-5g',17990,2020,'#9B59B6','6.67" IPS, 2400×1080, 144 Гц','Snapdragon 750G','6 ГБ','64 ГБ','64+8+5+2 МП, f/1.89','16 МП, f/2.45','4820 мАч','Android 10, MIUI 12','33 Вт','214 г','нет',false,true,62,68,82,76,68,78,58,'165.4×76.8×9.0 мм'));
e.push(ph('xpf4','xiaomi-poco-f4','POCO F4 5G','POCO','xiaomi-poco-f4-5g',27990,2022,'#6C5CE7','6.67" AMOLED, 2400×1080, 120 Гц','Snapdragon 870','6 ГБ','128 ГБ','64+8+2 МП, f/1.79','20 МП, f/2.24','4500 мАч','Android 12, MIUI 13','67 Вт','195 г','IP53',false,true,76,68,80,84,78,80,62,'163.2×76.0×7.7 мм'));

// ═══ OnePlus Nord серия ═══
e.push(ph('op_nord','oneplus-nord','OnePlus Nord','OnePlus','oneplus-nord',19990,2020,'#3498DB','6.44" AMOLED, 2400×1080, 90 Гц','Snapdragon 765G','8 ГБ','128 ГБ','48+8+5+2 МП, f/1.75','32+8 МП, f/2.45','4115 мАч','Android 10, OxygenOS 10','30 Вт','184 г','нет',true,true,64,72,74,82,76,78,62,'158.3×73.3×8.2 мм'));
e.push(ph('op_nordce','oneplus-nord-ce-5g','OnePlus Nord CE 5G','OnePlus','oneplus-nord-ce-5g',19990,2021,'#E74C3C','6.43" AMOLED, 2400×1080, 90 Гц','Snapdragon 750G','6 ГБ','128 ГБ','64+8+2 МП, f/1.79','16 МП, f/2.45','4500 мАч','Android 11, OxygenOS 11','30 Вт','170 г','нет',true,true,62,68,80,80,74,80,60,'159.2×73.5×7.9 мм'));
e.push(ph('op_nordce2','oneplus-nord-ce-2-5g','OnePlus Nord CE 2 5G','OnePlus','oneplus-nord-ce-2-5g',22990,2022,'#9B59B6','6.43" AMOLED, 2400×1080, 90 Гц','Dimensity 900','8 ГБ','128 ГБ','64+8+2 МП, f/1.88','16 МП, f/2.45','4500 мАч','Android 11, OxygenOS 12','65 Вт','173 г','нет',true,true,68,68,80,80,74,80,60,'160.2×73.5×7.8 мм'));
e.push(ph('op_nord2t','oneplus-nord-2t-5g','OnePlus Nord 2T','OnePlus','oneplus-nord-2t-5g',27990,2022,'#27AE60','6.43" AMOLED, 2400×1080, 90 Гц','Dimensity 1300','8 ГБ','128 ГБ','50+8+2 МП, f/1.88','32 МП, f/2.45','4500 мАч','Android 12, OxygenOS 12','65 Вт','190 г','IP53',true,true,72,72,80,80,76,80,62,'159.1×73.2×8.2 мм'));
e.push(ph('op_nordce3','oneplus-nord-ce-3-5g','OnePlus Nord CE 3 5G','OnePlus','oneplus-nord-ce-3-5g',27990,2023,'#8E44AD','6.7" AMOLED, 2412×1080, 120 Гц','Snapdragon 782G','8 ГБ','128 ГБ','50+8+2 МП, f/1.88','16 МП, f/2.45','5000 мАч','Android 13, OxygenOS 13','80 Вт','185 г','IP54',true,true,72,72,86,84,76,80,60,'162.8×75.6×8.1 мм'));

// ═══ Google Pixel 2-3 ═══
e.push(ph('gp_3xl','google-pixel-3-xl','Google Pixel 3 XL','Google','google-pixel-3-xl',14990,2018,'#F5F5F5','6.3" P-OLED, 2960×1440, 60 Гц','Snapdragon 845','4 ГБ','64 ГБ','12.2 МП, f/1.8','8+8 МП, f/1.8','3430 мАч','Android 9 → 12','18 Вт / 10 Вт','184 г','IP68',true,false,68,80,66,84,78,68,55,'158×76.7×7.9 мм'));
e.push(ph('gp_3a','google-pixel-3a','Google Pixel 3a','Google','google-pixel-3a',12990,2019,'#F5F5F5','5.6" OLED, 2220×1080, 60 Гц','Snapdragon 670','4 ГБ','64 ГБ','12.2 МП, f/1.8','8 МП, f/2.0','3000 мАч','Android 9 → 12','18 Вт','147 г','нет',false,false,60,78,60,78,72,74,52,'151.3×70.1×8.2 мм'));

// ═══ Huawei Nova / Mate ═══
e.push(ph('hw_n11p','huawei-nova-11-pro','Huawei Nova 11 Pro','Huawei','huawei-nova-11-pro',39990,2023,'#E91E63','6.78" OLED, 2652×1200, 120 Гц','Snapdragon 778G 4G','8 ГБ','256 ГБ','50+8 МП, f/1.9','60+8 МП (двойная), f/2.4','4500 мАч','Android 12, HarmonyOS 4','100 Вт',169,'нет',true,false,72,74,80,86,84,72,58,'164.0×74.5×6.94 мм'));
e.push(ph('hw_m50p','huawei-mate-50-pro','Huawei Mate 50 Pro','Huawei','huawei-mate-50-pro',69990,2022,'#1A237E','6.74" LTPO OLED, 2616×1212, 1-120 Гц','Snapdragon 8 Gen 1 4G','8 ГБ','256 ГБ','50+64+13 МП, f/1.4','13 МП, f/2.4','4700 мАч','Android 12, HarmonyOS 3','66 Вт / 50 Вт','205 г','IP68',true,false,82,90,82,90,90,68,60,'162.1×75.5×8.5 мм'));

// ═══ Infinix Hot серия ═══
e.push(ph('if_h30','infinix-hot-30','Infinix Hot 30','Infinix','infinix-hot-30-5g',12990,2023,'#3498DB','6.78" IPS, 1612×720, 90 Гц','Helio G88','4 ГБ','64 ГБ','50+2+2 МП, f/1.75','8 МП, f/2.0','5000 мАч','Android 13, XOS 13','18 Вт','191 г','нет',false,false,52,52,86,62,60,86,48,'168.7×77.2×8.05 мм'));
e.push(ph('if_h40p','infinix-hot-40-pro-','Infinix Hot 40i','Infinix','infinix-hot-40-pro',9990,2024,'#27AE60','6.56" IPS, 1612×720, 90 Гц','Helio G85','4 ГБ','128 ГБ','50+0.08 МП, f/1.79','8 МП, f/2.0','5000 мАч','Android 14, XOS 14','18 Вт','192 г','нет',false,false,50,44,87,60,58,90,44,'164.6×76.4×8.2 мм'));
e.push(ph('if_n12','infinix-note-12','Infinix Note 12','Infinix','infinix-note-12-turbo',14990,2022,'#E74C3C','6.7" AMOLED, 2400×1080, 60 Гц','Helio G96','4 ГБ','64 ГБ','50+8+2 МП, f/1.79','16 МП, f/2.0','5000 мАч','Android 12, XOS 12','33 Вт','183 г','нет',false,false,58,60,86,78,68,84,50,'164.3×76.8×8.0 мм'));

// ═══ Realme GT Neo серия ═══
e.push(ph('r_gtn2','realme-gt-neo-2','Realme GT Neo 2','Realme','realme-gt-neo-2',24990,2021,'#27AE60','6.62" AMOLED, 2400×1080, 120 Гц','Snapdragon 870','8 ГБ','128 ГБ','64+8+2 МП, f/1.88','16 МП, f/2.45','5000 мАч','Android 11, Realme UI 2','65 Вт','200 г','нет',true,true,76,68,86,86,76,76,60,'162.9×75.8×9.0 мм'));
e.push(ph('r_gtn5se','realme-gt-neo-5-se','Realme GT Neo 5 SE','Realme','realme-gt-neo-5-se',27990,2023,'#E74C3C','6.74" AMOLED, 2772×1240, 120 Гц','Snapdragon 7+ Gen 2','8 ГБ','256 ГБ','50+8+2 МП, f/1.88','16 МП, f/2.45','5500 мАч','Android 13, Realme UI 4','100 Вт','185 г','нет',true,true,78,70,90,88,78,78,60,'162.9×74.7×8.3 мм'));
e.push(ph('r_12prosp','realme-12-pro-plus','Realme 12 Pro+ 5G','Realme','realme-12-pro-plus-5g',32990,2024,'#9B59B6','6.7" AMOLED, 2412×1080, 120 Гц','Snapdragon 7s Gen 2','8 ГБ','256 ГБ','50+64+8 МП, f/1.9','32 МП, f/2.4','5000 мАч','Android 14, Realme UI 5','67 Вт','195 г','IP65',true,true,72,78,86,84,80,82,58,'162.0×74.7×8.8 мм'));
e.push(ph('r_11pro','realme-11-pro-plus','Realme 11 Pro+','Realme','realme-11-pro-plus-5g',27990,2023,'#27AE60','6.7" AMOLED, 2412×1080, 120 Гц','Dimensity 7050','8 ГБ','128 ГБ','200+8+2 МП, f/1.69','16 МП, f/2.45','5000 мАч','Android 13, Realme UI 4','100 Вт','183 г','IP54',true,true,68,74,86,84,74,80,56,'161.6×73.9×8.2 мм'));

// ═══ Vivo серия T ═══
e.push(ph('v_t1p','vivo-t1-pro-5g','Vivo T1 Pro 5G','Vivo','vivo-t1-pro-5g',24990,2022,'#3498DB','6.56" AMOLED, 2376×1080, 90 Гц','Snapdragon 778G','8 ГБ','128 ГБ','64+8+2 МП, f/1.79','16 МП, f/2.45','4700 мАч','Android 12, OriginOS 2','66 Вт','186 г','нет',true,true,72,68,82,86,74,74,58,'163.8×75.6×8.3 мм'));
e.push(ph('v_t2x','vivo-t2x-5g','Vivo T2x 5G','Vivo','vivo-t2x-5g',17990,2023,'#9B59B6','6.64" IPS, 2388×1080, 120 Гц','Dimensity 6020','4 ГБ','128 ГБ','50+2 МП, f/1.8','8 МП, f/2.0','6000 мАч','Android 13, OriginOS 3','18 Вт','203 г','нет',false,true,56,50,92,72,64,80,50,'166.0×76.4×8.0 мм'));
e.push(ph('v_v20p','vivo-v20-pro','Vivo V20 Pro','Vivo','vivo-v20-pro',22990,2020,'#27AE60','6.44" AMOLED, 2400×1080, 90 Гц','Snapdragon 765G','8 ГБ','128 ГБ','64+8+2 МП, f/1.89','44+8 МП, f/2.0','4100 мАч','Android 10, OriginOS 1','33 Вт','169 г','нет',true,true,64,70,74,80,76,74,58,'160.7×74.0×7.38 мм'));

// ═══ Nokia C / G series (полнее) ═══
e.push(ph('nk_g21','nokia-g21','Nokia G21','Nokia','nokia-g21',10990,2022,'#3498DB','6.5" IPS, 1600×720, 90 Гц','UniSOC T606','4 ГБ','64 ГБ','50+5+2 МП, f/1.8','8 МП, f/2.0','5050 мАч','Android 11 → 13','10 Вт','190 г','нет',false,false,42,54,87,64,62,86,46,'165.9×76.3×8.4 мм'));
e.push(ph('nk_g10','nokia-g10','Nokia G10','Nokia','nokia-g10',8990,2021,'#27AE60','6.52" IPS, 1600×720, 60 Гц','UniSOC T606','3 ГБ','32 ГБ','13+2+2 МП, f/2.2','8 МП, f/2.0','5050 мАч','Android 11 → 13','10 Вт','190 г','нет',false,false,40,50,87,60,60,86,44,'165.9×76.3×8.7 мм'));
e.push(ph('nk_c22','nokia-c22','Nokia C22','Nokia','nokia-c22',9990,2023,'#E74C3C','6.5" IPS, 1600×720, 60 Гц','UniSOC T606','2 ГБ','64 ГБ','13+2 МП, f/2.2','5 МП, f/2.2','5000 мАч','Android 12 → 13','10 Вт','196 г','нет',false,false,40,46,87,60,58,90,42,'165.9×76.3×8.7 мм'));
e.push(ph('nk_c32','nokia-c32','Nokia C32','Nokia','nokia-g60-5g',11990,2023,'#2C3E50','6.52" IPS, 1600×720, 90 Гц','UniSOC T606','2 ГБ','64 ГБ','50+2+2 МП, f/1.8','5 МП, f/2.2','5000 мАч','Android 13','10 Вт','199 г','IP52',false,false,40,50,87,60,62,90,44,'166.9×77.0×8.7 мм'));

// ═══ Asus ROG Phone ═══
e.push(ph('as_rog6d','asus-rog-phone-6d','Asus ROG Phone 6D','Asus','asus-rog-phone-6d',64990,2022,'#1A1A2E','6.78" AMOLED, 2448×1080, 165 Гц','Dimensity 9000+','12 ГБ','256 ГБ','50+13+5 МП, f/1.9','12 МП, f/2.45','6000 мАч','Android 12, ROG UI','65 Вт','239 г','IP68',true,true,88,72,92,88,84,72,62,'173.0×77.0×10.4 мм'));

// ═══ Motorola Razr ═══
e.push(ph('mo_razr22','motorola-razr-2022','Motorola Razr 2022','Motorola','motorola-razr-2022',59990,2022,'#9B59B6','6.7" pOLED, 2400×1080, 144 Гц; 2.7\" внешний','Snapdragon 8+ Gen 1','8 ГБ','256 ГБ','50+13 МП, f/1.5','32 МП, f/2.4','3500 мАч','Android 12','30 Вт / 5 Вт','185 г','IP52',true,true,88,72,66,86,92,68,58,'167.5×79.8×7.0 мм'));

// ═══ OPPO Find N ═══
e.push(ph('o_fn2','oppo-find-n2-flip','OPPO Find N2 Flip','OPPO','oppo-find-n2-flip',59990,2023,'#27AE60','6.8" AMOLED (осн), 2520×1080, 120 Гц; 3.26\" внешний','Dimensity 9000+','8 ГБ','256 ГБ','50+8 МП, f/1.8','32 МП, f/2.4','4300 мАч','Android 13, ColorOS 13','44 Вт',191,'IP54',true,true,88,78,76,88,92,72,62,'166.2×75.2×7.5 мм'));
e.push(ph('o_fn3flip','oppo-find-n3-flip','OPPO Find N3 Flip','OPPO','oppo-find-n3-flip',74990,2023,'#2980B9','6.8" AMOLED (осн), 2520×1080, 120 Гц; 3.26\" внешний','Dimensity 9200','8 ГБ','256 ГБ','50+48+32 МП (Hasselblad), f/1.8','32 МП, f/2.4','4300 мАч','Android 13, ColorOS 13','50 Вт',198,'IP65',true,true,90,88,76,88,94,74,62,'167.9×75.8×7.3 мм'));

// ═══ ZTE Blade ═══
e.push(ph('z_blade','zte-blade-v50-design','ZTE Blade V50 Design','ZTE','zte-blade-v50-design',14990,2024,'#3498DB','6.67" AMOLED, 2400×1080, 120 Гц','Dimensity 7025','8 ГБ','256 ГБ','108+2 МП, f/1.75','32 МП, f/2.0','5000 мАч','Android 14','45 Вт',176,'IP54',false,true,64,64,86,80,72,80,50,'163.7×75.6×7.1 мм'));

// ═══ Honor новые ═══
e.push(ph('h_200pro2','honor-200-pro-2','Honor 200 Pro 5G','Honor','honor-magic7-pro',54990,2024,'#2C3E50','6.78" LTPO OLED, 2800×1260, 1-120 Гц','Snapdragon 8s Gen 3','12 ГБ','512 ГБ','50+50+12 МП (Harcourt), f/1.9','50 МП, f/2.4','5200 мАч','Android 14, MagicOS 8','100 Вт / 66 Вт','199 г','IP65',true,true,88,88,90,91,88,76,62,'162.5×74.8×8.0 мм'));

// ═══ Tecno Spark ═══
e.push(ph('tc_s10p','tecno-spark-10-pro','Tecno Spark 10 Pro','Tecno','tecno-spark-20-pro',14990,2023,'#27AE60','6.8" IPS, 1640×720, 90 Гц','Helio G88','8 ГБ','128 ГБ','50+0.08+0.08 МП, f/1.8','32 МП, f/2.0','5000 мАч','Android 13, HiOS 13','18 Вт','195 г','нет',false,false,52,46,86,62,64,86,48,'169.6×78.6×8.1 мм'));
e.push(ph('tc_pfold','tecno-phantom-v-fold','Tecno Phantom V Fold','Tecno','tecno-phantom-v2-fold',69990,2023,'#1A2A6C','7.85" LTPO AMOLED (осн), 2000×2296, 120 Гц','Dimensity 9000','12 ГБ','256 ГБ','50+50+13 МП, f/1.8','16 МП, f/2.2','5000 мАч','Android 13, HiOS 13','45 Вт / 20 Вт','306 г','нет',false,true,84,78,86,90,86,60,50,'158.0×141.7×6.9 мм'));

// ═══ Lenovo новые ═══
e.push(ph('l_k15p','lenovo-k15-plus','Lenovo K15 Plus','Lenovo','lenovo-k14-plus',9990,2022,'#9B59B6','6.5" IPS, 1600×720, 60 Гц','Helio G85','4 ГБ','64 ГБ','50+2+2 МП, f/1.8','8 МП, f/2.0','6000 мАч','Android 11','20 Вт',207,'нет',false,false,50,52,92,60,60,88,44));

// ═══ TCL ═══
e.push(ph('tcl_40r','tcl-40-r-5g','TCL 40R 5G','TCL','tcl-40-se',12990,2023,'#27AE60','6.6" IPS, 1612×720, 90 Гц','Dimensity 700','4 ГБ','64 ГБ','50+2 МП, f/1.8','8 МП, f/2.0','5010 мАч','Android 13','15 Вт',188,'нет',false,true,58,50,86,62,62,82,48));

// ═══ Realme C серия ═══
e.push(ph('r_c55','realme-c55','Realme C55','Realme','realme-c55',10990,2023,'#3498DB','6.72" IPS, 1640×720, 90 Гц','Helio G88','6 ГБ','128 ГБ','64+2 МП, f/1.79','8 МП, f/2.0','5000 мАч','Android 13, Realme UI 4','33 Вт',189,'нет',false,false,50,56,86,62,66,86,50));
e.push(ph('r_c67','realme-c67-5g','Realme C67 5G','Realme','realme-c67-5g',12990,2023,'#27AE60','6.72" IPS, 1640×720, 90 Гц','Snapdragon 695','6 ГБ','128 ГБ','50+2 МП, f/1.88','8 МП, f/2.0','5000 мАч','Android 13, Realme UI 4','33 Вт',188,'нет',false,true,60,52,86,62,64,86,48));

// ═══ Nothing CMF Watch Phone ═══
e.push(ph('n_cmf2','nothing-cmf-phone-2-pro','CMF Phone 2 Pro','Nothing','nothing-phone-2-',22990,2025,'#6C5CE7','6.77" AMOLED, 2392×1080, 120 Гц','Dimensity 7300 Pro','6 ГБ','256 ГБ','50+8 МП, f/1.88','32 МП, f/2.45','5000 мАч','Android 15, Nothing OS 3','45 Вт',196,'IP54',true,true,70,70,86,80,88,88,58));

// ═══ Motorola Edge 20 / 30 серия ═══
e.push(ph('mo_e20p','motorola-edge-20-pro','Motorola Edge 20 Pro','Motorola','motorola-edge-20-pro',34990,2021,'#1C1C1E','6.7" pOLED, 2520×1080, 144 Гц','Snapdragon 870','8 ГБ','128 ГБ','108+8+16 МП, f/2.2','32 МП, f/2.3','4500 мАч','Android 11','30 Вт','163 г','IP52',true,false,76,76,80,86,76,76,62,'163.1×76.0×8.0 мм'));
e.push(ph('mo_e20','motorola-edge-20','Motorola Edge 20','Motorola','motorola-edge-20',24990,2021,'#27AE60','6.7" pOLED, 2400×1080, 144 Гц','Snapdragon 778G','6 ГБ','128 ГБ','108+8+16 МП, f/2.2','32 МП, f/2.3','4000 мАч','Android 11','30 Вт','163 г','IP52',false,true,72,72,72,86,76,76,58,'163.1×76.0×7.0 мм'));
e.push(ph('mo_e30p','motorola-edge-30-pro','Motorola Edge 30 Pro','Motorola','motorola-edge-30-pro',44990,2022,'#1A1A2E','6.7" pOLED, 2400×1080, 144 Гц','Snapdragon 8 Gen 1','8 ГБ','128 ГБ','50+50+2 МП, f/1.8','60 МП, f/2.2','4800 мАч','Android 12','68 Вт / 15 Вт','194 г','IP52',true,true,86,78,82,86,78,76,64,'163.1×76.0×8.9 мм'));
e.push(ph('mo_e30n','motorola-edge-30-neo','Motorola Edge 30 Neo','Motorola','motorola-edge-30',19990,2022,'#E74C3C','6.28" pOLED, 2400×1080, 120 Гц','Snapdragon 695','8 ГБ','128 ГБ','64+13 МП, f/2.2','32 МП, f/2.5','4020 мАч','Android 12','68 Вт',155,'IP52',false,true,60,68,74,82,76,78,56,'149.9×71.2×8.1 мм'));
e.push(ph('mo_e40n','motorola-edge-40-neo','Motorola Edge 40 Neo','Motorola','motorola-edge-40',27990,2023,'#8E44AD','6.55" pOLED, 2400×1080, 144 Гц','Dimensity 7030','8 ГБ','256 ГБ','50+13 МП, f/1.8','32 МП, f/2.4','5000 мАч','Android 13','68 Вт / 15 Вт','170 г','IP68',true,true,64,70,86,84,78,80,58,'157.9×72.9×8.1 мм'));

// ═══ Vivo X50 Pro ═══
e.push(ph('v_x50p','vivo-x50-pro','Vivo X50 Pro','Vivo','vivo-x50-pro-',34990,2020,'#2C3E50','6.56" AMOLED, 2376×1080, 90 Гц','Snapdragon 765G','8 ГБ','128 ГБ','48+13+8+8 МП (гимбал), f/1.6','32 МП, f/2.45','4315 мАч','Android 10, OriginOS','33 Вт / 22 Вт','181 г','IP68',true,true,64,80,78,86,84,74,62,'159.0×73.3×8.04 мм'));

// ═══ OPPO старые Reno ═══
e.push(ph('o_reno6','oppo-reno-6-pro','OPPO Reno 6 Pro 5G','OPPO','oppo-reno6-pro',29990,2021,'#3498DB','6.55" AMOLED, 2400×1080, 90 Гц','Dimensity 1200','12 ГБ','256 ГБ','50+16+13+2 МП, f/1.7','32 МП, f/2.4','4500 мАч','Android 11, ColorOS 11','65 Вт','177 г','нет',true,true,72,76,80,84,80,76,60,'159.1×72.0×7.6 мм'));

// ═══ Xiaomi Redmi Note Pro старые ═══
e.push(ph('rn6p','xiaomi-redmi-note-6-pro','Redmi Note 6 Pro','Redmi','xiaomi-redmi-note-6-pro',8990,2018,'#E74C3C','6.26" IPS, 2280×1080, 60 Гц','Snapdragon 636','3 ГБ','32 ГБ','12+5+20+2 МП, f/1.9','16 МП, f/2.0','4000 мАч','Android 8.1, MIUI 10','10 Вт','182 г','нет',false,false,50,60,74,72,64,84,50));
e.push(ph('rn5p','xiaomi-redmi-note-5-pro','Redmi Note 5 Pro','Redmi','xiaomi-redmi-note-5-pro',7990,2018,'#3498DB','5.99" IPS, 2160×1080, 60 Гц','Snapdragon 636','3 ГБ','32 ГБ','12+5 МП, f/2.2','20 МП, f/2.0','4000 мАч','Android 7.1, MIUI 9','5 Вт','182 г','нет',false,false,48,60,74,70,62,84,48));

// ═══ Samsung A04 / A04s ═══
e.push(ph('sa04','samsung-galaxy-a04','Samsung Galaxy A04','Samsung','samsung-galaxy-a13',7990,2022,'#27AE60','6.5" PLS IPS, 1600×720, 60 Гц','Helio P35','2 ГБ','32 ГБ','50+5+2 МП, f/1.8','5 МП, f/2.0','5000 мАч','Android 12','15 Вт','192 г','нет',false,false,38,52,86,60,58,90,44));
e.push(ph('sa04s','samsung-galaxy-a04s','Samsung Galaxy A04s','Samsung','samsung-galaxy-a13',8990,2022,'#9B59B6','6.5" PLS IPS, 1600×720, 90 Гц','Exynos 850','3 ГБ','32 ГБ','50+5+2 МП, f/1.8','5 МП, f/2.2','5000 мАч','Android 12','15 Вт','195 г','нет',false,false,44,52,86,60,60,90,44));

// ═══ POCO M5 Pro / C ═══
e.push(ph('pm5p','xiaomi-poco-m5s-','POCO M5s Pro','POCO','xiaomi-poco-m6-pro',12990,2023,'#2ECC71','6.43" AMOLED, 2400×1080, 90 Гц','Helio G99','4 ГБ','64 ГБ','64+8+2+2 МП, f/1.79','13 МП, f/2.45','5000 мАч','Android 13, HyperOS','33 Вт','179 г','IP53',false,false,62,60,86,80,68,86,50));

// Итого добавлено, выводим счёт
const allNew = e.join('\n');
let c = readFileSync('./data/phones.ts', 'utf8');
const idx = c.lastIndexOf('];');
c = c.slice(0, idx) + '\n' + allNew + '\n' + c.slice(idx);
writeFileSync('./data/phones.ts', c, 'utf8');
console.log('Added', e.length, 'more phones');
