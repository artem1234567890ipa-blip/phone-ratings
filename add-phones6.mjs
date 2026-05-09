import { readFileSync, writeFileSync } from 'fs';
const G = s => `G("${s}")`;
const ts = (p,c,b,d,des,v) => Math.round((p+c+b+d+des+v)/6);
const ph = (id,slug,name,brand,img,price,year,color,disp,proc,ram,stor,cam,fc,bat,os,chg,wt,ip,nfc,g5,p,cs,bs,ds,dess,vs,pop) =>
`  {id:"${id}",slug:"${slug}",name:"${name}",brand:"${brand}",image:${G(img)},price:${price},priceLabel:"от ${price.toLocaleString('ru')} ₽",year:${year},color:"${color}",popularity:${pop||50},
   specs:{display:'${disp}',processor:"${proc}",ram:"${ram}",storage:"${stor}",mainCamera:"${cam}",frontCamera:"${fc}",battery:"${bat}",os:"${os}",charging:"${chg}",weight:"${wt}",dimensions:"162×75×8 мм",protection:"${ip}",nfc:${nfc},fiveG:${g5}},
   scores:{performance:${p},camera:${cs},battery:${bs},display:${ds},design:${dess},value:${vs}},totalScore:${ts(p,cs,bs,ds,dess,vs)}},`;

const e = [];
const a = (id,sl,n,br,img,pr,yr,clr,d,proc,ram,st,cam,fc,bat,os,chg,wt,ip,nfc,g5,p,cs,bs,ds,dess,vs,pop) =>
  e.push(ph(id,sl,n,br,img,pr,yr,clr,d,proc,ram,st,cam,fc,bat,os,chg,wt,ip,nfc,g5,p,cs,bs,ds,dess,vs,pop));

// ════ SAMSUNG — больше моделей ════
a('ss8p','samsung-galaxy-s8-plus','Samsung Galaxy S8+','Samsung','samsung-galaxy-s9-plus',12990,2017,'#1C1C1E','6.2" Super AMOLED, 2960×1440, 60 Гц','Exynos 8895','4 ГБ','64 ГБ','12 МП, f/1.7','8 МП, f/1.7','3500 мАч','Android 7 → 9','15 Вт / 12 Вт','173 г','IP68',true,false,62,70,66,84,78,72,48);
a('ss8','samsung-galaxy-s8','Samsung Galaxy S8','Samsung','samsung-galaxy-s9',9990,2017,'#3498DB','5.8" Super AMOLED, 2960×1440, 60 Гц','Exynos 8895','4 ГБ','64 ГБ','12 МП, f/1.7','8 МП, f/1.7','3000 мАч','Android 7 → 9','15 Вт / 12 Вт','155 г','IP68',true,false,62,68,62,84,78,72,46);
a('sa80','samsung-galaxy-a80','Samsung Galaxy A80','Samsung','samsung-galaxy-a71',17990,2019,'#27AE60','6.7" Super AMOLED, 2400×1080, 60 Гц','Snapdragon 730','6 ГБ','128 ГБ','48+8+ToF МП (поворотная), f/2.0','поворотная 48 МП','3700 мАч','Android 9 → 11','25 Вт',220,'нет',true,false,60,70,68,80,74,76,52);
a('sa60p','samsung-galaxy-a60','Samsung Galaxy A60','Samsung','samsung-galaxy-a71',12990,2019,'#E74C3C','6.3" IPS, 2340×1080, 60 Гц','Snapdragon 675','6 ГБ','64 ГБ','32+8+5 МП, f/1.8','32 МП, f/2.0','3500 мАч','Android 9 → 11','15 Вт','168 г','нет',true,false,56,68,64,76,70,76,50);

// Samsung M35 / M15 2024
a('sm35','samsung-galaxy-m35-5g','Samsung Galaxy M35 5G','Samsung','samsung-galaxy-a55',24990,2024,'#8E44AD','6.7" Super AMOLED, 2340×1080, 120 Гц','Exynos 1380','6 ГБ','128 ГБ','50+8+5 МП, f/1.8','13 МП, f/2.2','6000 мАч','Android 14','25 Вт',202,'нет',true,true,66,72,92,82,72,82,56);
a('sm15','samsung-galaxy-m15-5g','Samsung Galaxy M15 5G','Samsung','samsung-galaxy-a55',14990,2024,'#3498DB','6.5" Super AMOLED, 2340×1080, 90 Гц','Dimensity 6100+','4 ГБ','128 ГБ','50+5+2 МП, f/1.8','13 МП, f/2.2','6000 мАч','Android 14','25 Вт',199,'нет',false,true,56,58,92,78,66,82,52);

// ════ XIAOMI Mi 8 Pro / Lite ════
a('xmi8p','xiaomi-mi-8-pro','Xiaomi Mi 8 Pro','Xiaomi','xiaomi-mi-8',19990,2018,'#E74C3C','6.21" Super AMOLED, 2248×1080, 60 Гц','Snapdragon 845','8 ГБ','128 ГБ','12+12 МП (прозрачный), f/1.8','20 МП, f/2.0','3000 мАч','Android 8.1, MIUI 10','18 Вт / 10 Вт','180 г','нет',true,false,68,70,62,80,82,74,56);
a('xmi8l','xiaomi-mi-8-lite','Xiaomi Mi 8 Lite','Xiaomi','xiaomi-mi-8',12990,2018,'#27AE60','6.26" IPS, 2280×1080, 60 Гц','Snapdragon 660','4 ГБ','64 ГБ','12+5 МП, f/1.9','24 МП, f/2.0','3350 мАч','Android 8.1, MIUI 10','18 Вт','169 г','нет',false,false,56,62,64,72,68,76,50);
a('xpocof1p','xiaomi-poco-f1-plus','POCO F1 (8 ГБ)','POCO','xiaomi-poco-f1',13990,2018,'#1A1A2E','6.18" IPS, 2246×1080, 60 Гц','Snapdragon 845','8 ГБ','256 ГБ','12+5 МП, f/1.9','20 МП, f/2.0','4000 мАч','Android 9 → 11, MIUI','18 Вт','182 г','нет',true,false,70,64,74,76,68,82,62);

// Redmi Note 3 / 4 Pro
a('rn3p','xiaomi-redmi-note-3','Redmi Note 3 (Pro)','Redmi','xiaomi-redmi-note-5-pro',5990,2016,'#E74C3C','5.5" IPS, 1920×1080, 60 Гц','Snapdragon 650','2 ГБ','16 ГБ','16 МП, f/2.0','5 МП, f/2.0','4050 мАч','Android 5.1, MIUI 7','10 Вт','164 г','нет',false,false,38,46,74,70,58,90,38);

// ════ Samsung Galaxy Fold первое поколение ════
// уже добавлен выше

// ════ POCO X2 дополнительная версия ════
a('px2v2','xiaomi-poco-x2-v2','POCO X2 (12 ГБ)','POCO','xiaomi-poco-x2',16990,2020,'#9B59B6','6.67" IPS, 2400×1080, 120 Гц','Snapdragon 730G','8 ГБ','256 ГБ','64+8+2+2 МП, f/1.89','20+2 МП, f/2.2','4500 мАч','Android 10, MIUI 11','27 Вт','220 г','нет',false,false,60,66,80,76,70,82,58);

// ════ OnePlus Nord N200 / N100 ════
a('op_n2','oneplus-nord-n200-5g','OnePlus Nord N200 5G','OnePlus','oneplus-nord-ce-5g',12990,2021,'#3498DB','6.49" IPS, 1600×720, 90 Гц','Snapdragon 480','4 ГБ','64 ГБ','13+2+2 МП, f/2.2','16 МП, f/2.0','5000 мАч','Android 11, OxygenOS 11','18 Вт','189 г','нет',false,true,50,52,86,62,66,80,50);
a('op_n1','oneplus-nord-n100','OnePlus Nord N100','OnePlus','oneplus-nord-ce-5g',9990,2020,'#E74C3C','6.52" IPS, 1600×720, 60 Гц','Snapdragon 460','4 ГБ','64 ГБ','13+2+2 МП, f/2.2','8 МП, f/2.0','5000 мАч','Android 10, OxygenOS 10','18 Вт','190 г','нет',false,false,44,48,86,60,62,80,46);

// ════ Google Pixel 2 серия ════
a('gp_2xl','google-pixel-2-xl','Google Pixel 2 XL','Google','google-pixel-3a',9990,2017,'#F5F5F5','6.0" P-OLED, 2880×1440, 60 Гц','Snapdragon 835','4 ГБ','64 ГБ','12.2 МП, f/1.8','8 МП, f/2.4','3520 мАч','Android 8 → 11','18 Вт','175 г','IP67',true,false,62,76,66,84,76,68,48);

// ════ Honor Magic3 / Magic2 ════
a('hm2','honor-magic-2','Honor Magic 2','Honor','honor-magic7-pro',19990,2018,'#1A1A2E','6.39" AMOLED, 2340×1080, 60 Гц','Kirin 980','6 ГБ','128 ГБ','16+24+16 МП, f/1.8','24 МП выдвижная, f/2.0','3500 мАч','Android 9, EMUI 9','40 Вт',206,'нет',true,false,70,72,66,80,80,72,52);

// ════ Motorola Moto G серия (ещё) ════
a('mg23','motorola-moto-g23','Moto G23','Motorola','motorola-moto-g32',12990,2023,'#27AE60','6.5" IPS, 2400×1080, 90 Гц','Helio G85','4 ГБ','128 ГБ','50+8+2 МП, f/1.8','16 МП, f/2.2','5000 мАч','Android 13','15 Вт','184 г','нет',false,false,50,60,86,70,64,80,50);
a('mg14p','motorola-moto-g14','Moto G14','Motorola','motorola-moto-g20',10990,2023,'#E74C3C','6.5" IPS, 2400×1080, 60 Гц','Helio G85','4 ГБ','128 ГБ','50+2+2 МП, f/1.8','8 МП, f/2.0','5000 мАч','Android 13','10 Вт','183 г','нет',false,false,50,52,86,68,62,82,48);
a('mg42','motorola-moto-g42','Moto G42','Motorola','motorola-moto-g52',14990,2022,'#3498DB','6.4" pOLED, 2400×1080, 60 Гц','Snapdragon 680','4 ГБ','64 ГБ','50+8+2 МП, f/1.8','16 МП, f/2.2','5000 мАч','Android 12','20 Вт','175 г','нет',false,false,48,60,86,78,70,80,52);

// ════ OPPO дополнительно ════
a('o_a98','oppo-a98-5g','OPPO A98 5G','OPPO','oppo-find-x8-pro',17990,2023,'#9B59B6','6.72" IPS, 2400×1080, 120 Гц','Snapdragon 695','8 ГБ','256 ГБ','64+2+2 МП, f/1.7','32 МП, f/2.4','5000 мАч','Android 13, ColorOS 13','67 Вт',191,'нет',false,true,60,64,86,72,72,80,52);
a('o_reno5','oppo-reno-5-pro','OPPO Reno 5 Pro','OPPO','oppo-find-x8-pro',24990,2021,'#27AE60','6.55" AMOLED, 2400×1080, 90 Гц','Dimensity 1000+','12 ГБ','256 ГБ','64+8+2+2 МП, f/1.7','32 МП, f/2.4','4350 мАч','Android 11, ColorOS 11','65 Вт','163 г','нет',true,true,72,72,78,84,78,76,58);
a('o_reno4p','oppo-reno-4-pro','OPPO Reno 4 Pro','OPPO','oppo-find-x8-pro',22990,2020,'#E74C3C','6.55" AMOLED, 2400×1080, 90 Гц','Snapdragon 720G','8 ГБ','128 ГБ','48+12+13+2 МП, f/1.7','32 МП, f/2.4','4000 мАч','Android 10, ColorOS 7','65 Вт','163 г','нет',true,false,60,72,74,84,76,76,56);

// ════ Vivo Y серия ════
a('v_y35','vivo-y35','Vivo Y35','Vivo','vivo-y100',14990,2022,'#3498DB','6.58" IPS, 2408×1080, 60 Гц','Snapdragon 680','4 ГБ','128 ГБ','50+2+2 МП, f/1.8','16 МП, f/2.0','5000 мАч','Android 12, OriginOS 2','44 Вт','195 г','нет',false,false,50,54,86,70,68,76,50);
a('v_y55s','vivo-y55s-5g','Vivo Y55s 5G','Vivo','vivo-y100',12990,2021,'#27AE60','6.58" IPS, 2408×1080, 60 Гц','Dimensity 700','4 ГБ','128 ГБ','50+2+2 МП, f/1.8','16 МП, f/2.0','5000 мАч','Android 11, OriginOS 1','33 Вт','185 г','нет',false,true,58,52,86,68,66,76,50);

// ════ Realme C21 / C25 ════
a('r_c21','realme-c21','Realme C21','Realme','realme-c55',9990,2021,'#E74C3C','6.5" IPS, 1600×720, 60 Гц','Helio G35','3 ГБ','32 ГБ','13+2+2 МП, f/2.0','8 МП, f/2.0','5000 мАч','Android 10, Realme UI 2','10 Вт','190 г','нет',false,false,38,48,86,60,60,86,44);
a('r_c35','realme-c35','Realme C35','Realme','realme-c67-5g',12990,2022,'#27AE60','6.6" IPS, 1080×2408, 60 Гц','UNISOC T616','4 ГБ','64 ГБ','50+2+0.3 МП, f/1.8','8 МП, f/2.0','5000 мАч','Android 11, Realme UI 3','18 Вт','189 г','нет',false,false,46,52,86,68,66,82,48);
a('r_c53','realme-c53','Realme C53','Realme','realme-c55',10990,2023,'#9B59B6','6.74" IPS, 1600×720, 90 Гц','UNISOC T612','6 ГБ','128 ГБ','50+0.08+0.08 МП, f/1.88','8 МП, f/2.0','5000 мАч','Android 13, Realme UI 4','33 Вт','193 г','нет',false,false,42,44,86,60,62,86,44);

// ════ Infinix Hot 20 / Zero 5G ════
a('if_h20p','infinix-hot-20-pro','Infinix Hot 20 Pro','Infinix','infinix-hot-40-pro',12990,2022,'#FF6B35','6.82" IPS, 2460×1080, 120 Гц','Helio G85','6 ГБ','128 ГБ','64+2+2+2 МП, f/1.75','16 МП, f/2.0','5000 мАч','Android 12, XOS 12','18 Вт','194 г','нет',false,false,50,58,86,68,64,82,48);
a('if_zero5','infinix-zero-5g-2023','Infinix Zero 5G 2023','Infinix','infinix-zero-30-5g',15990,2023,'#3498DB','6.78" IPS, 2460×1080, 120 Гц','Dimensity 8020','8 ГБ','128 ГБ','50+2+2 МП, f/1.79','16 МП, f/2.0','5000 мАч','Android 12, XOS 12','68 Вт','192 г','нет',false,true,78,52,86,68,68,78,52);

// ════ Honor 30 / 20 серия ════
a('h20p','honor-20-pro','Honor 20 Pro','Honor','honor-magic7-pro',19990,2019,'#27AE60','6.26" IPS, 2340×1080, 60 Гц','Kirin 980','8 ГБ','256 ГБ','48+16+8+2 МП, f/1.4','32 МП, f/2.0','4000 мАч','Android 9, EMUI 9.1','22.5 Вт','182 г','нет',true,false,70,78,74,76,76,72,58);
a('h30p','honor-30-pro','Honor 30 Pro+','Honor','honor-magic7-pro',29990,2020,'#E74C3C','6.57" OLED, 2340×1080, 60 Гц','Kirin 990','8 ГБ','256 ГБ','50+16+8 МП, f/1.9','32+8 МП, f/2.0','4200 мАч','Android 10, EMUI 10.1','40 Вт / 27 Вт','188 г','нет',true,false,76,82,76,84,82,70,62);
a('h60','honor-60-pro','Honor 60 Pro','Honor','honor-magic5-pro',29990,2021,'#3498DB','6.78" OLED, 2652×1200, 120 Гц','Snapdragon 778G+','8 ГБ','256 ГБ','108+50+2 МП, f/1.9','50+2 МП, f/2.4','4800 мАч','Android 11, MagicUI 6','66 Вт',188,'нет',false,false,72,76,82,86,82,72,60);
a('h80p','honor-80-pro','Honor 80 Pro','Honor','honor-magic6-pro',39990,2022,'#9B59B6','6.78" OLED, 2652×1200, 120 Гц','Snapdragon 8+ Gen 1','12 ГБ','256 ГБ','160+50+8 МП, f/1.8','50+2 МП, f/2.4','4800 мАч','Android 12, MagicUI 7','66 Вт / 50 Вт','199 г','нет',true,true,88,82,82,86,82,72,62);

// ════ Tecno Spark 20 серия ════
a('tc_s20p','tecno-spark-20','Tecno Spark 20','Tecno','tecno-spark-20-pro',12990,2024,'#27AE60','6.56" IPS, 1612×720, 90 Гц','Helio G85','8 ГБ','128 ГБ','50+AI МП, f/1.8','32 МП, f/2.0','5000 мАч','Android 14, HiOS 14','18 Вт','194 г','нет',false,false,50,44,86,60,60,82,44);

// ════ Nokia X60 (2023) ════
a('nk_x60','nokia-x60','Nokia X60 5G','Nokia','nokia-xr21',22990,2023,'#27AE60','6.67" AMOLED, 2400×1080, 120 Гц','Snapdragon 695','8 ГБ','128 ГБ','50+12+2 МП, f/1.8','16 МП, f/2.2','4500 мАч','Android 13 → 15','18 Вт','186 г','IP67',false,true,60,64,80,82,74,76,52);

// ════ Samsung Galaxy S23 FE ════
a('ss23fe','samsung-galaxy-s23-fe','Samsung Galaxy S23 FE','Samsung','samsung-galaxy-s21-fe-5g',34990,2023,'#4169E1','6.4" Dynamic AMOLED 2X, 2340×1080, 120 Гц','Exynos 2200','8 ГБ','128 ГБ','50+12+8 МП, f/1.8','10 МП, f/2.4','4500 мАч','Android 14 → 16','25 Вт / 15 Вт','177 г','IP68',true,true,82,80,80,86,80,80,62);

// ════ ZTE Blade серия ════
a('z_b30p','zte-blade-a53-pro','ZTE Blade A53 Pro','ZTE','zte-blade-v50-design',9990,2022,'#E74C3C','6.52" IPS, 1600×720, 60 Гц','UniSOC T610','3 ГБ','64 ГБ','50+2+0.3 МП, f/1.8','8 МП, f/2.0','4500 мАч','Android 12','10 Вт','184 г','нет',false,false,38,48,80,60,58,86,44);

// ════ Lenovo K12 Pro ════
a('l_k12','lenovo-k12-pro','Lenovo K12 Pro','Lenovo','lenovo-k14-plus',9990,2020,'#27AE60','6.7" IPS, 2400×1080, 60 Гц','Snapdragon 662','4 ГБ','64 ГБ','48+8+2+2 МП, f/1.7','8 МП, f/2.0','5000 мАч','Android 10','18 Вт','215 г','нет',false,false,50,56,86,70,60,82,46);

// ════ OPPO A серия бюджет ════
a('o_a57','oppo-a57-4g','OPPO A57','OPPO','oppo-a78',12990,2022,'#3498DB','6.56" IPS, 1612×720, 90 Гц','Helio G35','3 ГБ','64 ГБ','13+2 МП, f/2.2','8 МП, f/2.0','5000 мАч','Android 12, ColorOS 12','33 Вт',191,'нет',false,false,38,46,86,60,62,82,44);
a('o_a17','oppo-a17','OPPO A17','OPPO','oppo-a78',9990,2022,'#27AE60','6.56" IPS, 1612×720, 60 Гц','Helio G35','3 ГБ','64 ГБ','50+2 МП, f/1.8','8 МП, f/2.0','5000 мАч','Android 12, ColorOS 12','10 Вт',188,'нет',false,false,38,48,86,58,60,82,42);

// ════ Realme дополнительно ════
a('r_5p','realme-5-pro','Realme 5 Pro','Realme','realme-9-pro-5g',9990,2019,'#27AE60','6.3" IPS, 2340×1080, 60 Гц','Snapdragon 712','4 ГБ','64 ГБ','48+8+2+2 МП, f/1.7','16 МП, f/2.0','4035 мАч','Android 9, Realme UI','20 Вт','184 г','нет',false,false,56,62,74,74,66,80,50);
a('r_6p','realme-6-pro','Realme 6 Pro','Realme','realme-8-pro',13990,2020,'#E74C3C','6.6" IPS, 2400×1080, 90 Гц','Snapdragon 720G','6 ГБ','64 ГБ','64+12+8+2 МП, f/1.8','16+2 МП, f/2.0','4300 мАч','Android 10, Realme UI','30 Вт','202 г','нет',false,false,60,68,78,76,68,76,55);
a('r_xt','realme-xt','Realme XT','Realme','realme-9-pro-5g',12990,2019,'#9B59B6','6.4" Super AMOLED, 2340×1080, 60 Гц','Snapdragon 712','4 ГБ','64 ГБ','64+8+5+2 МП, f/1.8','16 МП, f/2.0','4000 мАч','Android 9, Realme UI','20 Вт','183 г','нет',false,false,56,66,74,78,68,76,52);

// ════ Huawei P30 ════
a('hw_p30p','huawei-p30-pro','Huawei P30 Pro','Huawei','huawei-p40-pro',19990,2019,'#9B59B6','6.47" OLED, 2340×1080, 60 Гц','Kirin 980','8 ГБ','128 ГБ','40+20+8+ToF МП (перископ), f/1.6','32 МП, f/2.0','4200 мАч','Android 9, EMUI 9.1','40 Вт / 15 Вт','192 г','IP68',true,false,70,88,76,82,82,70,62);
a('hw_p30','huawei-p30','Huawei P30','Huawei','huawei-p40',14990,2019,'#E74C3C','6.1" OLED, 2340×1080, 60 Гц','Kirin 980','6 ГБ','128 ГБ','40+16+8 МП, f/1.8','32 МП, f/2.0','3650 мАч','Android 9, EMUI 9.1','22.5 Вт / 15 Вт','165 г','IP53',true,false,70,82,68,80,80,72,58);

// ════ Samsung Galaxy Fold серия (все) ════
// добавлены частично

// ════ Asus ROG Phone 5s ════
a('as_rog5s','asus-rog-phone-5s','Asus ROG Phone 5s','Asus','asus-rog-phone-5',49990,2021,'#FF0000','6.78" AMOLED, 2448×1080, 144 Гц','Snapdragon 888+','8 ГБ','128 ГБ','64+13+5 МП, f/1.8','24 МП, f/2.45','6000 мАч','Android 11, ROG UI','65 Вт','238 г','IP54',true,true,82,72,92,86,82,72,60);
a('as_rog7u','asus-rog-phone-7-ultimate','Asus ROG Phone 7 Ultimate','Asus','asus-rog-phone-7',79990,2023,'#E53935','6.78" AMOLED, 2448×1080, 165 Гц','Snapdragon 8 Gen 2','16 ГБ','512 ГБ','50+13+5 МП, f/1.9','32 МП, f/2.0','6000 мАч','Android 13, ROG UI','65 Вт',239,'IP54',true,true,90,74,92,88,84,70,62);

// ════ Xiaomi Civi 2 ════
a('xcivi2','xiaomi-civi-2','Xiaomi Civi 2','Xiaomi','xiaomi-civi-3',34990,2022,'#FF6B9D','6.55" AMOLED, 2400×1080, 120 Гц','Snapdragon 7 Gen 1','8 ГБ','128 ГБ','50+20+2 МП, f/1.69','32+32 МП (двойная), f/2.0','4500 мАч','Android 12, MIUI 13','67 Вт','171.5 г','нет',true,true,74,74,80,86,86,78,58);
a('xcivi1','xiaomi-civi-1s','Xiaomi Civi 1S','Xiaomi','xiaomi-civi-3',27990,2022,'#E91E63','6.55" AMOLED, 2400×1080, 120 Гц','Snapdragon 778G+','8 ГБ','128 ГБ','64+8+2 МП, f/1.73','32 МП (Sony IMX616), f/2.45','4500 мАч','Android 12, MIUI 13','55 Вт','166 г','нет',true,false,72,72,80,86,86,76,56);

// ════ Nothing Phone 1 уже есть ════
// ════ Xiaomi MIX Fold ════
a('xmixf2','xiaomi-mix-fold-2','Xiaomi MIX Fold 2','Xiaomi','xiaomi-mix-4',84990,2022,'#1A1A2E','8.02" LTPO AMOLED (осн), 2160×1914, 120 Гц','Snapdragon 8+ Gen 1','12 ГБ','256 ГБ','50+13+8 МП (Leica), f/1.6','20 МП, f/2.2','4500 мАч','Android 12, MIUI 13','67 Вт / 50 Вт','263 г','нет',true,true,88,82,80,94,94,66,60);

// ════ Motorola Moto G (older) ════
a('mg9p','motorola-moto-g9-plus','Moto G9 Plus','Motorola','motorola-moto-g72',12990,2020,'#9B59B6','6.81" IPS, 2400×1080, 60 Гц','Snapdragon 730G','4 ГБ','128 ГБ','64+8+2+2 МП, f/1.7','16 МП, f/2.2','5000 мАч','Android 10 → 12','30 Вт','223 г','нет',false,false,58,64,86,68,62,78,52);
a('mg8p','motorola-moto-g8-plus','Moto G8 Plus','Motorola','motorola-moto-g50',10990,2019,'#E74C3C','6.3" IPS, 2280×1080, 60 Гц','Snapdragon 665','4 ГБ','64 ГБ','48+16+5 МП, f/1.7','25 МП, f/2.0','4000 мАч','Android 9 → 11','15 Вт','188 г','нет',false,false,50,60,74,72,62,76,52);

// ════ Redmi Note 14 / 13 базовые ════
a('rn14','xiaomi-redmi-note-14','Redmi Note 14','Redmi','xiaomi-redmi-note-13',17990,2024,'#3498DB','6.67" AMOLED, 2400×1080, 120 Гц','Snapdragon 685','6 ГБ','128 ГБ','108+2+2 МП, f/1.75','16 МП, f/2.4','5500 мАч','Android 14, HyperOS','33 Вт',180,'IP54',false,false,56,68,90,82,72,82,56);
a('rn135g','xiaomi-redmi-note-13-5g','Redmi Note 13 5G','Redmi','xiaomi-redmi-note-13',14990,2023,'#27AE60','6.67" AMOLED, 2400×1080, 120 Гц','Dimensity 6080','8 ГБ','128 ГБ','100+2+2 МП, f/1.65','16 МП, f/2.4','5000 мАч','Android 13, HyperOS','33 Вт',175,'IP54',false,true,62,70,86,82,70,80,58);

// ════ Samsung A серия 2023 ════
a('sa24','samsung-galaxy-a24','Samsung Galaxy A24','Samsung','samsung-galaxy-a34',17990,2023,'#E74C3C','6.5" Super AMOLED, 2340×1080, 90 Гц','Helio G99','6 ГБ','128 ГБ','50+5+2 МП, f/1.8','13 МП, f/2.2','5000 мАч','Android 13 → 15','25 Вт','195 г','нет',true,false,60,68,86,80,74,82,56);

// Добавляем ещё партию маленьких телефонов
a('r_gt3pro','realme-gt3-pro','Realme GT3 Pro','Realme','realme-gt5-pro',44990,2024,'#FF6B35','6.74" LTPO AMOLED, 2772×1240, 1-144 Гц','Snapdragon 8 Gen 2','8 ГБ','256 ГБ','50+50+8 МП, f/1.8','16 МП, f/2.45','5000 мАч','Android 14, Realme UI 5','100 Вт / 50 Вт','205 г','IP65',true,true,90,80,86,92,80,78,60);

a('v_x100','vivo-x100','Vivo X100','Vivo','vivo-x200-pro',59990,2023,'#2C3E50','6.78" LTPO AMOLED, 2800×1260, 1-120 Гц','Dimensity 9300','12 ГБ','256 ГБ','50+50+64 МП (Zeiss), f/1.75','32 МП, f/2.0','5000 мАч','Android 14, OriginOS 4','120 Вт / 50 Вт','216 г','IP68',true,true,96,92,88,93,88,76,64);

a('h_m8p','honor-magic8-pro','Honor Magic8 Pro','Honor','honor-magic7-pro',89990,2025,'#1A2A6C','6.8" LTPO OLED, 2800×1280, 1-120 Гц','Snapdragon 8 Elite','16 ГБ','512 ГБ','50+200+50 МП, f/1.6','50 МП, f/2.0','5850 мАч','Android 15, MagicOS 9','100 Вт / 80 Вт',213,'IP68',true,true,100,96,92,95,92,70,65);

a('nk_g50p','nokia-g50','Nokia G50 5G','Nokia','nokia-g60-5g',13990,2021,'#3498DB','6.82" IPS, 1560×720, 60 Гц','Snapdragon 480','4 ГБ','64 ГБ','48+5+2 МП, f/1.8','8 МП, f/2.0','5000 мАч','Android 11 → 13','18 Вт','220 г','IP52',false,true,50,56,86,62,64,78,50);

a('z_rm5s','nubia-redmagic-5s','Nubia Red Magic 5S','ZTE','zte-nubia-z60-ultra',29990,2020,'#FF0000','6.65" AMOLED, 2340×1080, 144 Гц','Snapdragon 865+','8 ГБ','128 ГБ','64+8+2 МП, f/1.9','8 МП, f/2.0','4500 мАч','Android 10, RedMagic OS','55 Вт',218,'нет',true,true,74,70,80,82,78,76,56);

a('l_p50p','lenovo-p50','Lenovo P50','Lenovo','lenovo-k14-plus',9990,2015,'#1C1C1E','5.5" IPS, 1920×1080, 60 Гц','Snapdragon 615','3 ГБ','32 ГБ','13 МП, f/2.0','5 МП, f/2.0','5000 мАч','Android 5.1','10 Вт','167 г','нет',false,false,36,46,87,68,60,82,36);

a('tc_ph8p','tecno-phantom-8','Tecno Phantom 8','Tecno','tecno-phantom-x2-pro',14990,2017,'#27AE60','6.0" AMOLED, 2160×1080, 60 Гц','Helio X27','4 ГБ','64 ГБ','24 МП, f/2.0','13+13 МП, f/2.0','3500 мАч','Android 7, HIOS 2.0','10 Вт','176 г','нет',false,false,46,56,64,72,68,76,44);

// Добавляем Sony Xperia компакт
a('so_1ii_c','sony-xperia-1-iii-b','Sony Xperia 5 V','Sony','sony-xperia-1-vi',74990,2023,'#2E3A59','6.1" 4K OLED, 3840×1644, 1-120 Гц','Snapdragon 8 Gen 2','8 ГБ','128 ГБ','48+12+12 МП, f/1.9','12 МП, f/2.0','5000 мАч','Android 14','30 Вт / 15 Вт',182,'IP68',true,true,90,84,87,86,84,66,58);

const allNew = e.join('\n');
let c = readFileSync('./data/phones.ts', 'utf8');
const idx = c.lastIndexOf('];');
c = c.slice(0, idx) + '\n' + allNew + '\n' + c.slice(idx);
writeFileSync('./data/phones.ts', c, 'utf8');
console.log('Added', e.length, 'phones');
