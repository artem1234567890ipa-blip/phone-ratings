import { Phone } from "@/types/phone";

// ── Прокси wsrv.nl — обходит hotlink-блокировку ЛЮБОГО CDN ─────────────────
// wsrv.nl — бесплатный публичный image proxy, работает с любым URL
const proxy = (url: string) => `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=400&h=400&fit=contain&bg=white`;

// Apple — официальный CDN
const A  = (id: string) => proxy(`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/${id}?wid=400&hei=400&fmt=png-alpha`);
// Samsung — официальный CDN
const S  = (p: string)  => proxy(`https://images.samsung.com/is/image/samsung/p6pim/ru/${p}?$344_344_PNG$`);
// Xiaomi/Redmi/POCO — официальный CDN mi.com
const XI = (model: string) => proxy(`https://i02.appmifile.com/mi-com-product/fly-birds/${model}/m/imgs/product-img-01.png`);
// OnePlus — официальный CDN
const OP = (path: string) => proxy(`https://image01.oneplus.net/ebp/${path}`);
// GSMArena CDN — для брендов без своего CDN
const G  = (slug: string) => proxy(`https://fdn2.gsmarena.com/vv/bigpic/${slug}.jpg`);
// gsmchoice CDN
const GC = (b: string, m: string) => proxy(`https://www.gsmchoice.com/img/phones/${b}/${m}/1.jpg`);

export const phones: Phone[] = [

  // ══════════════════════════════════════════════════════════
  // APPLE
  // ══════════════════════════════════════════════════════════
  {
    id:"a1", slug:"iphone-17-pro-max", name:"iPhone 17 Pro Max", brand:"Apple",
    image:G("apple-iphone-17-pro-max"),
    price:149990, priceLabel:"от 149 990 ₽", year:2025, color:"#C85C30",
    badge:"Выбор редакции", isNew:true, isTrending:true, popularity:98,
    pros:["Самый мощный процессор A19 Pro","8× оптический зум","Алюминиевый корпус легче титана","iOS 19 с Apple Intelligence"],
    cons:["Нет 4K 240 fps","Нет USB 4 (только USB 3)","Цена выросла"],
    specs:{
      display:'6.9" Super Retina XDR OLED, 2868×1320, 460 ppi, 120 Гц',
      processor:"Apple A19 Pro", ram:"12 ГБ", storage:"256 ГБ — 1 ТБ",
      mainCamera:"48+48+48 МП (8× zoom), f/1.78", frontCamera:"24 МП TrueDepth, f/1.9",
      battery:"4823 мАч", os:"iOS 19", charging:"30 Вт / 25 Вт MagSafe",
      weight:"227 г", dimensions:"163.0×78.0×8.2 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:100,camera:98,battery:84,display:99,design:98,value:68}, totalScore:95,
  },
  {
    id:"a2", slug:"iphone-17-pro", name:"iPhone 17 Pro", brand:"Apple",
    image:G("apple-iphone-17-pro"),
    price:129990, priceLabel:"от 129 990 ₽", year:2025, color:"#1A4480",
    isNew:true, popularity:94,
    pros:["A19 Pro чип","Компактный размер","Отличная камера","Алюминий"],
    cons:["Батарея меньше Pro Max","120 Гц только LTPO"],
    specs:{
      display:'6.3" Super Retina XDR OLED, 2622×1206, 460 ppi, 120 Гц',
      processor:"Apple A19 Pro", ram:"12 ГБ", storage:"128 ГБ — 1 ТБ",
      mainCamera:"48+48+48 МП, f/1.78", frontCamera:"24 МП TrueDepth, f/1.9",
      battery:"3577 мАч", os:"iOS 19", charging:"30 Вт / 25 Вт MagSafe",
      weight:"199 г", dimensions:"149.6×71.5×8.2 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:100,camera:97,battery:79,display:97,design:98,value:70}, totalScore:93,
  },
  {
    id:"a3", slug:"iphone-17-air", name:"iPhone 17 Air", brand:"Apple",
    image:G("apple-iphone-17"),
    price:109990, priceLabel:"от 109 990 ₽", year:2025, color:"#5B9BD5",
    isNew:true, isTrending:true, popularity:90,
    pros:["Самый тонкий iPhone (5.5 мм)","Лёгкий — 165 г","A19 Pro чип"],
    cons:["Одна основная камера","Маленькая батарея 3149 мАч","Дороже обычного iPhone 17"],
    specs:{
      display:'6.5" Super Retina XDR OLED, 2622×1206, 460 ppi, 120 Гц',
      processor:"Apple A19 Pro (5-core GPU)", ram:"12 ГБ", storage:"256 ГБ — 1 ТБ",
      mainCamera:"48 МП, f/1.6", frontCamera:"24 МП TrueDepth, f/1.9",
      battery:"3149 мАч", os:"iOS 19", charging:"20 Вт / 25 Вт MagSafe",
      weight:"165 г", dimensions:"155.0×73.0×5.5 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:98,camera:88,battery:68,display:96,design:99,value:74}, totalScore:88,
  },
  {
    id:"a4", slug:"iphone-17", name:"iPhone 17", brand:"Apple",
    image:G("apple-iphone-17"),
    price:89990, priceLabel:"от 89 990 ₽", year:2025, color:"#5BBCD6",
    isNew:true, popularity:88,
    pros:["A19 чип","Обновлённая фронталка 24 МП","Хорошее соотношение цена/мощь"],
    cons:["60 Гц дисплей","Одна камера сзади","Меньше RAM чем Pro"],
    specs:{
      display:'6.1" Super Retina XDR OLED, 2556×1179, 460 ppi, 60 Гц',
      processor:"Apple A19", ram:"8 ГБ", storage:"128 ГБ — 512 ГБ",
      mainCamera:"48+12 МП, f/1.6", frontCamera:"24 МП TrueDepth, f/1.9",
      battery:"3578 мАч", os:"iOS 19", charging:"25 Вт / 25 Вт MagSafe",
      weight:"168 г", dimensions:"147.6×71.5×7.8 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:96,camera:91,battery:76,display:91,design:94,value:78}, totalScore:88,
  },
  {
    id:"a5", slug:"iphone-16-pro-max", name:"iPhone 16 Pro Max", brand:"Apple",
    image:G("apple-iphone-16-pro-max"),
    price:129990, priceLabel:"от 129 990 ₽", year:2024, color:"#8B7355", popularity:96,
    pros:["Огромный экран 6.9\"","A18 Pro","5× телефото","MagSafe 25 Вт"],
    cons:["Тяжёлый 227 г","Очень дорогой","USB 3 медленнее конкурентов"],
    specs:{
      display:'6.9" Super Retina XDR OLED, 2868×1320, 460 ppi, 120 Гц',
      processor:"Apple A18 Pro", ram:"8 ГБ", storage:"256 ГБ — 1 ТБ",
      mainCamera:"48+48+12 МП, f/1.78", frontCamera:"12 МП TrueDepth, f/1.9",
      battery:"4685 мАч", os:"iOS 18", charging:"27 Вт / 25 Вт MagSafe",
      weight:"227 г", dimensions:"163.0×77.6×8.25 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:99,camera:97,battery:82,display:98,design:97,value:72}, totalScore:94,
  },
  {
    id:"a6", slug:"iphone-16-pro", name:"iPhone 16 Pro", brand:"Apple",
    image:G("apple-iphone-16-pro"),
    price:109990, priceLabel:"от 109 990 ₽", year:2024, color:"#2D2D2D", popularity:91,
    pros:["A18 Pro","Компактный флагман","Action Button","Отличное видео 4K 120 fps"],
    cons:["Маленькая батарея 3582 мАч","Нет USB 4"],
    specs:{
      display:'6.3" Super Retina XDR OLED, 2622×1206, 460 ppi, 120 Гц',
      processor:"Apple A18 Pro", ram:"8 ГБ", storage:"128 ГБ — 1 ТБ",
      mainCamera:"48+48+12 МП, f/1.78", frontCamera:"12 МП TrueDepth, f/1.9",
      battery:"3582 мАч", os:"iOS 18", charging:"27 Вт / 25 Вт MagSafe",
      weight:"199 г", dimensions:"149.6×71.5×8.25 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:99,camera:96,battery:78,display:97,design:97,value:74}, totalScore:91,
  },
  {
    id:"a7", slug:"iphone-16-plus", name:"iPhone 16 Plus", brand:"Apple",
    image:G("apple-iphone-16"),
    price:99990, priceLabel:"от 99 990 ₽", year:2024, color:"#3D6B9E", popularity:78,
    pros:["Большой экран","A18 чип","Большая батарея для стандарта Apple"],
    cons:["60 Гц","Нет 5× телефото","Тяжелее чем Plus прошлых лет"],
    specs:{
      display:'6.7" Super Retina XDR OLED, 2796×1290, 460 ppi, 60 Гц',
      processor:"Apple A18", ram:"8 ГБ", storage:"128 ГБ — 512 ГБ",
      mainCamera:"48+12 МП, f/1.6", frontCamera:"12 МП TrueDepth, f/1.9",
      battery:"4674 мАч", os:"iOS 18", charging:"25 Вт / 25 Вт MagSafe",
      weight:"199 г", dimensions:"160.9×77.8×7.8 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:94,camera:90,battery:90,display:90,design:92,value:76}, totalScore:88,
  },
  {
    id:"a8", slug:"iphone-16", name:"iPhone 16", brand:"Apple",
    image:G("apple-iphone-16"),
    price:84990, priceLabel:"от 84 990 ₽", year:2024, color:"#3D6B9E", popularity:85,
    pros:["A18 чип","Camera Control кнопка","Хорошая базовая камера"],
    cons:["60 Гц дисплей","Нет ProMotion"],
    specs:{
      display:'6.1" Super Retina XDR OLED, 2556×1179, 460 ppi, 60 Гц',
      processor:"Apple A18", ram:"8 ГБ", storage:"128 ГБ — 512 ГБ",
      mainCamera:"48+12 МП, f/1.6", frontCamera:"12 МП TrueDepth, f/1.9",
      battery:"3561 мАч", os:"iOS 18", charging:"25 Вт / 25 Вт MagSafe",
      weight:"170 г", dimensions:"147.6×71.6×7.8 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:94,camera:90,battery:75,display:90,design:93,value:78}, totalScore:87,
  },
  {
    id:"a9", slug:"iphone-15-pro-max", name:"iPhone 15 Pro Max", brand:"Apple",
    image:G("apple-iphone-15-pro-max"),
    price:99990, priceLabel:"от 99 990 ₽", year:2023, color:"#B0A090", popularity:82,
    pros:["Первый 5× телефото у Apple","Титановый корпус","A17 Pro"],
    cons:["Устаревший относительно iPhone 16","Тяжёлый"],
    specs:{
      display:'6.7" Super Retina XDR OLED, 2796×1290, 460 ppi, 120 Гц',
      processor:"Apple A17 Pro", ram:"8 ГБ", storage:"256 ГБ — 1 ТБ",
      mainCamera:"48+12+12 МП, f/1.78", frontCamera:"12 МП TrueDepth, f/1.9",
      battery:"4422 мАч", os:"iOS 17 → 19", charging:"27 Вт / 15 Вт MagSafe",
      weight:"221 г", dimensions:"159.9×76.7×8.25 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:92,camera:94,battery:80,display:96,design:95,value:78}, totalScore:89,
  },
  {
    id:"a10", slug:"iphone-15-pro", name:"iPhone 15 Pro", brand:"Apple",
    image:G("apple-iphone-15-pro"),
    price:84990, priceLabel:"от 84 990 ₽", year:2023, color:"#B0A090", popularity:79,
    pros:["Компактный титановый флагман","A17 Pro","Action Button"],
    cons:["3× телефото (не 5×)","Маленькая батарея"],
    specs:{
      display:'6.1" Super Retina XDR OLED, 2556×1179, 460 ppi, 120 Гц',
      processor:"Apple A17 Pro", ram:"8 ГБ", storage:"128 ГБ — 1 ТБ",
      mainCamera:"48+12+12 МП, f/1.78", frontCamera:"12 МП TrueDepth, f/1.9",
      battery:"3274 мАч", os:"iOS 17 → 19", charging:"27 Вт / 15 Вт MagSafe",
      weight:"187 г", dimensions:"146.6×70.6×8.25 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:92,camera:93,battery:73,display:94,design:95,value:80}, totalScore:87,
  },
  {
    id:"a11", slug:"iphone-15", name:"iPhone 15", brand:"Apple",
    image:G("apple-iphone-15"),
    price:64990, priceLabel:"от 64 990 ₽", year:2023, color:"#F7B7C8", popularity:72,
    pros:["USB-C наконец-то","Dynamic Island","48 МП камера"],
    cons:["60 Гц","A16 (не Pro чип)","Маленькая батарея"],
    specs:{
      display:'6.1" Super Retina XDR OLED, 2556×1179, 460 ppi, 60 Гц',
      processor:"Apple A16 Bionic", ram:"6 ГБ", storage:"128 ГБ — 512 ГБ",
      mainCamera:"48+12 МП, f/1.6", frontCamera:"12 МП TrueDepth, f/1.9",
      battery:"3349 мАч", os:"iOS 17 → 19", charging:"20 Вт / 15 Вт MagSafe",
      weight:"171 г", dimensions:"147.6×71.6×7.8 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:88,camera:84,battery:72,display:88,design:90,value:82}, totalScore:84,
  },
  {
    id:"a12", slug:"iphone-14-pro-max", name:"iPhone 14 Pro Max", brand:"Apple",
    image:G("apple-iphone-14-pro"),
    price:74990, priceLabel:"от 74 990 ₽", year:2022, color:"#5B3075", popularity:68,
    pros:["Первый Dynamic Island","48 МП камера впервые","Always-On дисплей"],
    cons:["Старый чип A16","Lightning вместо USB-C","Нет 5× телефото"],
    specs:{
      display:'6.7" Super Retina XDR OLED, 2796×1290, 460 ppi, 120 Гц',
      processor:"Apple A16 Bionic", ram:"6 ГБ", storage:"128 ГБ — 1 ТБ",
      mainCamera:"48+12+12 МП, f/1.78", frontCamera:"12 МП TrueDepth, f/1.9",
      battery:"4323 мАч", os:"iOS 16 → 18", charging:"27 Вт / 15 Вт MagSafe",
      weight:"240 г", dimensions:"160.7×77.6×7.85 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:88,camera:90,battery:82,display:94,design:91,value:84}, totalScore:88,
  },
  {
    id:"a13", slug:"iphone-14-pro", name:"iPhone 14 Pro", brand:"Apple",
    image:G("apple-iphone-14-pro"),
    price:64990, priceLabel:"от 64 990 ₽", year:2022, color:"#5B3075", popularity:65,
    pros:["Dynamic Island","48 МП","Always-On дисплей"],
    cons:["Lightning","A16 устарел","120 Гц только LTPO"],
    specs:{
      display:'6.1" Super Retina XDR OLED, 2556×1179, 460 ppi, 120 Гц',
      processor:"Apple A16 Bionic", ram:"6 ГБ", storage:"128 ГБ — 1 ТБ",
      mainCamera:"48+12+12 МП, f/1.78", frontCamera:"12 МП TrueDepth, f/1.9",
      battery:"3200 мАч", os:"iOS 16 → 18", charging:"27 Вт / 15 Вт MagSafe",
      weight:"206 г", dimensions:"147.5×71.5×7.85 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:88,camera:88,battery:70,display:92,design:91,value:85}, totalScore:85,
  },
  {
    id:"a14", slug:"iphone-14", name:"iPhone 14", brand:"Apple",
    image:G("apple-iphone-14"),
    price:54990, priceLabel:"от 54 990 ₽", year:2022, color:"#1C1C1E", popularity:60,
    pros:["Доступный iPhone","Хорошая камера","Долгая поддержка iOS"],
    cons:["A15 как у iPhone 13","Нет Dynamic Island","60 Гц","Lightning"],
    specs:{
      display:'6.1" Super Retina XDR OLED, 2532×1170, 460 ppi, 60 Гц',
      processor:"Apple A15 Bionic", ram:"6 ГБ", storage:"128 ГБ — 512 ГБ",
      mainCamera:"12+12 МП, f/1.5", frontCamera:"12 МП TrueDepth, f/1.9",
      battery:"3279 мАч", os:"iOS 16 → 18", charging:"20 Вт / 15 Вт MagSafe",
      weight:"172 г", dimensions:"146.7×71.5×7.8 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:84,camera:80,battery:70,display:86,design:88,value:87}, totalScore:82,
  },
  {
    id:"a15", slug:"iphone-se-4", name:"iPhone SE 4", brand:"Apple",
    image:G("apple-iphone-se-2022"),
    price:59990, priceLabel:"от 59 990 ₽", year:2025, color:"#1C1C1E",
    badge:"Лучший бюджет", isNew:true, popularity:80,
    pros:["A18 чип за доступную цену","MagSafe","Face ID","Маленький размер"],
    cons:["Одна камера","60 Гц","Маленькая батарея","Нет ProMotion"],
    specs:{
      display:'6.1" Super Retina XDR OLED, 2556×1179, 460 ppi, 60 Гц',
      processor:"Apple A18", ram:"8 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"48 МП, f/1.6", frontCamera:"12 МП TrueDepth, f/1.9",
      battery:"3279 мАч", os:"iOS 18", charging:"20 Вт / 25 Вт MagSafe",
      weight:"167 г", dimensions:"138.8×67.3×7.8 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:94,camera:82,battery:70,display:88,design:88,value:92}, totalScore:86,
  },

  // ══════════════════════════════════════════════════════════
  // SAMSUNG
  // ══════════════════════════════════════════════════════════
  {
    id:"s1", slug:"samsung-galaxy-s26-ultra", name:"Samsung Galaxy S26 Ultra", brand:"Samsung",
    image:G("samsung-galaxy-s23-ultra-5g"),
    price:139990, priceLabel:"от 139 990 ₽", year:2026, color:"#1A1A1A",
    isNew:true, isTrending:true, popularity:97,
    pros:["200 МП f/1.4 камера","Snapdragon 8 Elite Gen 5","65 Вт быстрая зарядка","S Pen в комплекте"],
    cons:["Огромный и тяжёлый","Очень дорогой","Нет слота SD"],
    specs:{
      display:'6.9" Dynamic AMOLED 2X, 3088×1440, 1-120 Гц',
      processor:"Snapdragon 8 Elite Gen 5", ram:"16 ГБ", storage:"256 ГБ — 1 ТБ",
      mainCamera:"200+50+10+50 МП, f/1.4", frontCamera:"12 МП, f/2.2",
      battery:"5000 мАч", os:"Android 16, One UI 8", charging:"65 Вт / 15 Вт",
      weight:"216 г", dimensions:"162.8×79.0×8.2 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:100,camera:100,battery:88,display:98,design:96,value:70}, totalScore:95,
  },
  {
    id:"s2", slug:"samsung-galaxy-s26-plus", name:"Samsung Galaxy S26+", brand:"Samsung",
    image:G("samsung-galaxy-s23-ultra-5g"),
    price:119990, priceLabel:"от 119 990 ₽", year:2026, color:"#4A90D9", isNew:true, popularity:88,
    pros:["Snapdragon 8 Elite Gen 5","Тонкий корпус 7.3 мм","Большая батарея 4900 мАч"],
    cons:["Нет S Pen","Не 200 МП камера"],
    specs:{
      display:'6.7" Dynamic AMOLED 2X, 3088×1440, 1-120 Гц',
      processor:"Snapdragon 8 Elite Gen 5", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+12+10 МП, f/1.8", frontCamera:"12 МП, f/2.2",
      battery:"4900 мАч", os:"Android 16, One UI 8", charging:"45 Вт / 15 Вт",
      weight:"188 г", dimensions:"158.0×75.8×7.3 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:100,camera:92,battery:86,display:96,design:94,value:76}, totalScore:91,
  },
  {
    id:"s3", slug:"samsung-galaxy-s26", name:"Samsung Galaxy S26", brand:"Samsung",
    image:G("samsung-galaxy-s23-ultra-5g"),
    price:94990, priceLabel:"от 94 990 ₽", year:2026, color:"#2B5EA7", isNew:true, popularity:84,
    pros:["Snapdragon 8 Elite Gen 5","Лёгкий 158 г","Тонкий 7.2 мм"],
    cons:["Маленькая батарея 4300 мАч","Нет S Pen","25 Вт зарядка"],
    specs:{
      display:'6.3" Dynamic AMOLED 2X, 2340×1080, 1-120 Гц',
      processor:"Snapdragon 8 Elite Gen 5", ram:"12 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"50+12+10 МП, f/1.8", frontCamera:"12 МП, f/2.2",
      battery:"4300 мАч", os:"Android 16, One UI 8", charging:"25 Вт / 15 Вт",
      weight:"158 г", dimensions:"146.9×70.5×7.2 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:100,camera:88,battery:78,display:93,design:93,value:82}, totalScore:89,
  },
  {
    id:"s4", slug:"samsung-galaxy-s25-ultra", name:"Samsung Galaxy S25 Ultra", brand:"Samsung",
    image:G("samsung-galaxy-s23-ultra-5g"),
    price:119990, priceLabel:"от 119 990 ₽", year:2025, color:"#2C2C2E", popularity:95,
    pros:["200 МП перископ","Galaxy AI","S Pen","7 лет обновлений"],
    cons:["Нет зарядки в комплекте","Galaxy AI требует аккаунт Samsung"],
    specs:{
      display:'6.9" Dynamic AMOLED 2X, 3088×1440, 1-120 Гц',
      processor:"Snapdragon 8 Elite", ram:"12 ГБ", storage:"256 ГБ — 1 ТБ",
      mainCamera:"200+50+50+10 МП, f/1.7", frontCamera:"12 МП, f/2.2",
      battery:"5000 мАч", os:"Android 15, One UI 7", charging:"45 Вт / 15 Вт",
      weight:"218 г", dimensions:"162.8×79.0×8.2 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:98,camera:99,battery:86,display:97,design:95,value:74}, totalScore:93,
  },
  {
    id:"s5", slug:"samsung-galaxy-s25-plus", name:"Samsung Galaxy S25+", brand:"Samsung",
    image:G("samsung-galaxy-s23-ultra-5g"),
    price:99990, priceLabel:"от 99 990 ₽", year:2025, color:"#C9B99A", popularity:82,
    pros:["Большой экран","Snapdragon 8 Elite","IP68"],
    cons:["Нет S Pen","Переплата за размер"],
    specs:{
      display:'6.7" Dynamic AMOLED 2X, 3088×1440, 1-120 Гц',
      processor:"Snapdragon 8 Elite", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+10+12 МП, f/1.8", frontCamera:"12 МП, f/2.2",
      battery:"4900 мАч", os:"Android 15, One UI 7", charging:"45 Вт / 15 Вт",
      weight:"190 г", dimensions:"158.0×75.8×7.3 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:98,camera:90,battery:85,display:95,design:94,value:78}, totalScore:90,
  },
  {
    id:"s6", slug:"samsung-galaxy-s25", name:"Samsung Galaxy S25", brand:"Samsung",
    image:G("samsung-galaxy-s22-ultra-5g"),
    price:84990, priceLabel:"от 84 990 ₽", year:2025, color:"#2B5EA7", popularity:86,
    pros:["Snapdragon 8 Elite","Лёгкий 162 г","7 лет обновлений","IP68"],
    cons:["Маленькая батарея 4000 мАч","25 Вт зарядка"],
    specs:{
      display:'6.2" Dynamic AMOLED 2X, 2340×1080, 1-120 Гц',
      processor:"Snapdragon 8 Elite", ram:"12 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"50+10+12 МП, f/1.8", frontCamera:"12 МП, f/2.2",
      battery:"4000 мАч", os:"Android 15, One UI 7", charging:"25 Вт / 15 Вт",
      weight:"162 г", dimensions:"146.9×70.5×7.2 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:98,camera:88,battery:76,display:93,design:92,value:83}, totalScore:88,
  },
  {
    id:"s7", slug:"samsung-galaxy-z-fold-6", name:"Samsung Galaxy Z Fold 6", brand:"Samsung",
    image:G("samsung-galaxy-z-fold6"),
    price:149990, priceLabel:"от 149 990 ₽", year:2024, color:"#1C1C1E",
    badge:"Лучший дизайн", popularity:75,
    pros:["7.6\" раскладной экран","Snapdragon 8 Gen 3","S Pen поддержка","IPX8"],
    cons:["Очень дорогой","Тяжёлый 239 г","Камера хуже флагманов"],
    specs:{
      display:'7.6" Dynamic AMOLED 2X (осн), 2160×1856, 120 Гц',
      processor:"Snapdragon 8 Gen 3", ram:"12 ГБ", storage:"256 ГБ — 1 ТБ",
      mainCamera:"50+10+12 МП, f/1.8", frontCamera:"10 МП, f/2.2",
      battery:"4400 мАч", os:"Android 14, One UI 6.1", charging:"25 Вт / 15 Вт",
      weight:"239 г", dimensions:"153.5×132.1×5.6 мм (развёрнут)", protection:"IPX8", nfc:true, fiveG:true,
    },
    scores:{performance:93,camera:85,battery:72,display:97,design:99,value:62}, totalScore:85,
  },
  {
    id:"s8", slug:"samsung-galaxy-z-flip-6", name:"Samsung Galaxy Z Flip 6", brand:"Samsung",
    image:G("samsung-galaxy-z-flip6"),
    price:84990, priceLabel:"от 84 990 ₽", year:2024, color:"#FFC0CB", popularity:72,
    pros:["Стильный раскладной формат","Snapdragon 8 Gen 3","Маленький когда сложен"],
    cons:["Слабая камера для цены","Маленькая батарея 4000 мАч"],
    specs:{
      display:'6.7" Dynamic AMOLED 2X, 2640×1080, 120 Гц',
      processor:"Snapdragon 8 Gen 3", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+12 МП, f/1.7", frontCamera:"10 МП, f/2.2",
      battery:"4000 мАч", os:"Android 14, One UI 6.1", charging:"25 Вт / 15 Вт",
      weight:"187 г", dimensions:"165.1×71.9×6.9 мм (развёрнут)", protection:"IPX8", nfc:true, fiveG:true,
    },
    scores:{performance:93,camera:80,battery:72,display:90,design:98,value:72}, totalScore:84,
  },
  {
    id:"s9", slug:"samsung-galaxy-s24-fe", name:"Samsung Galaxy S24 FE", brand:"Samsung",
    image:G("samsung-galaxy-a54"),
    price:54990, priceLabel:"от 54 990 ₽", year:2024, color:"#4A90D9", popularity:70,
    pros:["IP68 за эту цену","7 лет обновлений","Хороший экран"],
    cons:["Exynos 2500 (не Snapdragon)","Камера не впечатляет"],
    specs:{
      display:'6.7" Dynamic AMOLED 2X, 2340×1080, 120 Гц',
      processor:"Exynos 2500", ram:"8 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"50+8+10 МП, f/1.8", frontCamera:"10 МП, f/2.4",
      battery:"4700 мАч", os:"Android 14, One UI 6.1", charging:"25 Вт / 15 Вт",
      weight:"213 г", dimensions:"162.0×77.3×8.0 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:86,camera:82,battery:82,display:89,design:86,value:89}, totalScore:85,
  },
  {
    id:"s10", slug:"samsung-galaxy-a55", name:"Samsung Galaxy A55", brand:"Samsung",
    image:G("samsung-galaxy-a55"),
    price:36990, priceLabel:"от 36 990 ₽", year:2024, color:"#4169E1", popularity:77,
    pros:["IP67","120 Гц AMOLED","4 года обновлений"],
    cons:["Exynos 1480 средний","Медленная зарядка 25 Вт"],
    specs:{
      display:'6.6" Super AMOLED, 2340×1080, 120 Гц',
      processor:"Exynos 1480", ram:"8 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"50+12+5 МП, f/1.8", frontCamera:"32 МП, f/2.2",
      battery:"5000 мАч", os:"Android 14, One UI 6.1", charging:"25 Вт",
      weight:"213 г", dimensions:"161.1×77.4×8.2 мм", protection:"IP67", nfc:true, fiveG:true,
    },
    scores:{performance:72,camera:76,battery:86,display:84,design:80,value:93}, totalScore:81,
  },

  // ══════════════════════════════════════════════════════════
  // GOOGLE
  // ══════════════════════════════════════════════════════════
  {
    id:"g1", slug:"google-pixel-9-pro-xl", name:"Google Pixel 9 Pro XL", brand:"Google",
    image:G("google-pixel-9-pro-"),
    price:109990, priceLabel:"от 109 990 ₽", year:2024, color:"#1A6B3C",
    badge:"Лучшая камера", popularity:83,
    pros:["Лучший AI на Android","Реальный 7 лет поддержки","Tensor G4","42 МП фронталка"],
    cons:["Tensor G4 горячее Snapdragon","Нет слота microSD"],
    specs:{
      display:'6.8" LTPO OLED, 2992×1344, 489 ppi, 1-120 Гц',
      processor:"Google Tensor G4", ram:"16 ГБ", storage:"128 ГБ — 1 ТБ",
      mainCamera:"50+48+48 МП, f/1.68", frontCamera:"42 МП, f/2.2",
      battery:"5060 мАч", os:"Android 15", charging:"37 Вт / 23 Вт",
      weight:"221 г", dimensions:"162.8×76.6×8.5 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:85,camera:99,battery:86,display:97,design:92,value:76}, totalScore:91,
  },
  {
    id:"g2", slug:"google-pixel-9-pro", name:"Google Pixel 9 Pro", brand:"Google",
    image:G("google-pixel-9-pro-"),
    price:99990, priceLabel:"от 99 990 ₽", year:2024, color:"#5B6D5A", popularity:80,
    pros:["Лучший ИИ ассистент","Отличные ночные снимки","Компактный Pro"],
    cons:["Tensor G4 нагревается","Цена высокая для Pixel"],
    specs:{
      display:'6.3" LTPO OLED, 2992×1344, 495 ppi, 1-120 Гц',
      processor:"Google Tensor G4", ram:"16 ГБ", storage:"128 ГБ — 1 ТБ",
      mainCamera:"50+48+48 МП, f/1.68", frontCamera:"42 МП, f/2.2",
      battery:"4700 мАч", os:"Android 15", charging:"27 Вт / 23 Вт",
      weight:"199 г", dimensions:"152.8×72.0×8.5 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:84,camera:99,battery:83,display:96,design:92,value:78}, totalScore:91,
  },
  {
    id:"g3", slug:"google-pixel-9", name:"Google Pixel 9", brand:"Google",
    image:G("google-pixel-9-"),
    price:74990, priceLabel:"от 74 990 ₽", year:2024, color:"#E8C9A0", popularity:75,
    pros:["Лучший Pixel за деньги","Google AI Features","Чистый Android"],
    cons:["Нет телефото","Tensor нагревается"],
    specs:{
      display:'6.3" OLED, 2424×1080, 422 ppi, 60-120 Гц',
      processor:"Google Tensor G4", ram:"12 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"50+48 МП, f/1.68", frontCamera:"10.5 МП, f/2.2",
      battery:"4700 мАч", os:"Android 15", charging:"27 Вт / 21 Вт",
      weight:"198 г", dimensions:"152.9×72.0×8.5 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:84,camera:95,battery:83,display:90,design:88,value:84}, totalScore:87,
  },
  {
    id:"g4", slug:"google-pixel-8a", name:"Google Pixel 8a", brand:"Google",
    image:G("google-pixel-8"),
    price:49990, priceLabel:"от 49 990 ₽", year:2024, color:"#4A90D9", popularity:68,
    pros:["Доступный Pixel с AI","IP67","Google Photos"],
    cons:["Tensor G3 нагревается","Нет телефото"],
    specs:{
      display:'6.1" OLED, 2400×1080, 429 ppi, 60-120 Гц',
      processor:"Google Tensor G3", ram:"8 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"64+13 МП, f/1.89", frontCamera:"13 МП, f/2.2",
      battery:"4492 мАч", os:"Android 14 → 15", charging:"18 Вт / 18 Вт",
      weight:"188 г", dimensions:"152.1×72.7×8.9 мм", protection:"IP67", nfc:true, fiveG:true,
    },
    scores:{performance:78,camera:88,battery:80,display:87,design:82,value:89}, totalScore:84,
  },

  // ══════════════════════════════════════════════════════════
  // XIAOMI
  // ══════════════════════════════════════════════════════════
  {
    id:"x1", slug:"xiaomi-15-ultra", name:"Xiaomi 15 Ultra", brand:"Xiaomi",
    image:G("xiaomi-15"),
    price:109990, priceLabel:"от 109 990 ₽", year:2025, color:"#1A1A2E", isNew:true, popularity:88,
    pros:["Quad-камера Leica","200 МП телефото","6000 мАч + 90 Вт","HyperOS 2"],
    cons:["Тяжёлый 226 г","Нет IP68 на всех рынках"],
    specs:{
      display:'6.73" LTPO AMOLED, 3200×1440, 522 ppi, 1-120 Гц',
      processor:"Snapdragon 8 Elite", ram:"16 ГБ", storage:"512 ГБ — 1 ТБ",
      mainCamera:"50+200+50+50 МП, f/1.63", frontCamera:"32 МП, f/2.0",
      battery:"6000 мАч", os:"Android 15, HyperOS 2", charging:"90 Вт / 80 Вт",
      weight:"226 г", dimensions:"161.3×75.3×9.5 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:97,camera:98,battery:95,display:96,design:91,value:80}, totalScore:93,
  },
  {
    id:"x2", slug:"xiaomi-15", name:"Xiaomi 15", brand:"Xiaomi",
    image:G("xiaomi-15"),
    price:79990, priceLabel:"от 79 990 ₽", year:2025, color:"#2C3E50", isNew:true, popularity:84,
    pros:["Snapdragon 8 Elite","90 Вт зарядка","Компактный флагман","IP68"],
    cons:["Нет microSD","HyperOS не всем нравится"],
    specs:{
      display:'6.36" LTPO AMOLED, 2670×1200, 460 ppi, 1-120 Гц',
      processor:"Snapdragon 8 Elite", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+50+50 МП, f/1.6", frontCamera:"32 МП, f/2.0",
      battery:"5240 мАч", os:"Android 15, HyperOS 2", charging:"90 Вт / 50 Вт",
      weight:"189 г", dimensions:"152.3×71.2×8.08 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:97,camera:92,battery:90,display:94,design:92,value:86}, totalScore:92,
  },
  {
    id:"x3", slug:"xiaomi-14t-pro", name:"Xiaomi 14T Pro", brand:"Xiaomi",
    image:G("xiaomi-14"),
    price:64990, priceLabel:"от 64 990 ₽", year:2024, color:"#1B3A4B", popularity:80,
    pros:["Dimensity 9300+","120 Вт зарядка","144 Гц экран","Leica камера"],
    cons:["IP68 только в некоторых странах","Нет Snapdragon"],
    specs:{
      display:'6.67" AMOLED, 2712×1220, 446 ppi, 1-144 Гц',
      processor:"MediaTek Dimensity 9300+", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+50+12 МП, f/1.63", frontCamera:"32 МП, f/2.0",
      battery:"5000 мАч", os:"Android 14, HyperOS 2", charging:"120 Вт / 50 Вт",
      weight:"209 г", dimensions:"160.4×75.1×8.39 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:93,camera:90,battery:90,display:93,design:88,value:89}, totalScore:90,
  },
  {
    id:"x4", slug:"redmi-note-14-pro-plus", name:"Redmi Note 14 Pro+", brand:"Xiaomi",
    image:G("xiaomi-14"),
    price:32990, priceLabel:"от 32 990 ₽", year:2024, color:"#6C5CE7", popularity:82,
    pros:["200 МП камера","90 Вт зарядка","6200 мАч батарея","IP68 за эту цену!"],
    cons:["Тяжёлый","Нет беспроводной зарядки"],
    specs:{
      display:'6.67" AMOLED, 2712×1220, 446 ppi, 120 Гц',
      processor:"MediaTek Dimensity 9300+", ram:"8 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"200+8+2 МП, f/1.7", frontCamera:"20 МП, f/2.2",
      battery:"6200 мАч", os:"Android 15, HyperOS 2", charging:"90 Вт",
      weight:"210 г", dimensions:"162.3×74.5×8.8 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:88,camera:84,battery:96,display:88,design:82,value:96}, totalScore:89,
  },

  // ══════════════════════════════════════════════════════════
  // ONEPLUS
  // ══════════════════════════════════════════════════════════
  {
    id:"op1", slug:"oneplus-13", name:"OnePlus 13", brand:"OnePlus",
    image:G("oneplus-13"),
    price:74990, priceLabel:"от 74 990 ₽", year:2025, color:"#1B1B1B", isNew:true, popularity:87,
    pros:["6000 мАч + 100 Вт зарядка","Snapdragon 8 Elite","Hasselblad камера","IP65"],
    cons:["IP65 не IP68","Нет беспроводной на всех версиях"],
    specs:{
      display:'6.82" LTPO AMOLED, 3168×1440, 510 ppi, 1-120 Гц',
      processor:"Snapdragon 8 Elite", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+50+50 МП, f/1.6", frontCamera:"32 МП, f/2.4",
      battery:"6000 мАч", os:"Android 15, OxygenOS 15", charging:"100 Вт / 50 Вт",
      weight:"210 г", dimensions:"162.9×76.0×8.9 мм", protection:"IP65", nfc:true, fiveG:true,
    },
    scores:{performance:97,camera:88,battery:97,display:95,design:90,value:93}, totalScore:93,
  },
  {
    id:"op2", slug:"oneplus-13r", name:"OnePlus 13R", brand:"OnePlus",
    image:G("oneplus-13"),
    price:49990, priceLabel:"от 49 990 ₽", year:2025, color:"#2C3E50", isNew:true, popularity:74,
    pros:["6000 мАч батарея","Snapdragon 8 Gen 3","80 Вт зарядка","Хорошая цена"],
    cons:["Камера уступает флагманам","IP65"],
    specs:{
      display:'6.78" AMOLED, 2780×1264, 450 ppi, 1-120 Гц',
      processor:"Snapdragon 8 Gen 3", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+8+2 МП, f/1.8", frontCamera:"16 МП, f/2.4",
      battery:"6000 мАч", os:"Android 15, OxygenOS 15", charging:"80 Вт",
      weight:"206 г", dimensions:"161.7×75.8×7.9 мм", protection:"IP65", nfc:true, fiveG:true,
    },
    scores:{performance:93,camera:78,battery:94,display:88,design:84,value:93}, totalScore:88,
  },
  {
    id:"op3", slug:"oneplus-nord-4", name:"OnePlus Nord 4", brand:"OnePlus",
    image:G("oneplus-11"),
    price:36990, priceLabel:"от 36 990 ₽", year:2024, color:"#C0A882", popularity:68,
    pros:["100 Вт зарядка","Металлический корпус","Хорошее соотношение цена/производительность"],
    cons:["Snap 7+ Gen 3 (не флагман)","IP54"],
    specs:{
      display:'6.74" AMOLED, 2772×1240, 450 ppi, 120 Гц',
      processor:"Snapdragon 7+ Gen 3", ram:"12 ГБ", storage:"256 ГБ",
      mainCamera:"50+8 МП, f/1.88", frontCamera:"16 МП, f/2.4",
      battery:"5500 мАч", os:"Android 14, OxygenOS 14.1", charging:"100 Вт",
      weight:"177 г", dimensions:"162.6×75.1×7.99 мм", protection:"IP54", nfc:true, fiveG:true,
    },
    scores:{performance:82,camera:76,battery:90,display:87,design:86,value:95}, totalScore:85,
  },

  // ══════════════════════════════════════════════════════════
  // SONY
  // ══════════════════════════════════════════════════════════
  {
    id:"so1", slug:"sony-xperia-1-vi", name:"Sony Xperia 1 VI", brand:"Sony",
    image:G("sony-xperia-1-vi"),
    price:114990, priceLabel:"от 114 990 ₽", year:2024, color:"#2E3A59",
    badge:"Лучший звук", popularity:62,
    pros:["Лучшие стереодинамики","Профессиональные настройки камеры","IP68","4K экран"],
    cons:["Нет 4K на экране (только FHD+)","Дорого","Мало рекламы и продаж в РФ"],
    specs:{
      display:'6.5" OLED, 2340×1080, 395 ppi, 1-120 Гц',
      processor:"Snapdragon 8 Gen 3", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"52+12+12 МП, f/1.9", frontCamera:"12 МП, f/2.0",
      battery:"5000 мАч", os:"Android 14", charging:"30 Вт / 15 Вт",
      weight:"192 г", dimensions:"162×74×8.2 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:93,camera:92,battery:87,display:88,design:89,value:73}, totalScore:87,
  },
  {
    id:"so2", slug:"sony-xperia-5-vi", name:"Sony Xperia 5 VI", brand:"Sony",
    image:G("sony-xperia-1-vi"),
    price:74990, priceLabel:"от 74 990 ₽", year:2024, color:"#1C2B3A", popularity:55,
    pros:["Компактный флагман","IP68","Хорошие динамики"],
    cons:["Дорого за 2 камеры","Слабее Xperia 1"],
    specs:{
      display:'6.1" OLED, 2520×1080, 449 ppi, 120 Гц',
      processor:"Snapdragon 8 Gen 3", ram:"8 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"48+12 МП, f/1.9", frontCamera:"12 МП, f/2.0",
      battery:"5000 мАч", os:"Android 14", charging:"30 Вт / 15 Вт",
      weight:"182 г", dimensions:"154×68×9.2 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:93,camera:86,battery:87,display:86,design:88,value:79}, totalScore:86,
  },

  // ══════════════════════════════════════════════════════════
  // NOTHING
  // ══════════════════════════════════════════════════════════
  {
    id:"n1", slug:"nothing-phone-3a", name:"Nothing Phone (3a)", brand:"Nothing",
    image:G("nothing-phone-3a"),
    price:37990, priceLabel:"от 37 990 ₽", year:2025, color:"#E8E8E8", isNew:true, popularity:76,
    pros:["Уникальный Glyph-дизайн","Тройная камера","Nothing OS чистый Android","Выделяется"],
    cons:["Snap 7s Gen 3 средний","IP54 не IP68"],
    specs:{
      display:'6.77" AMOLED, 2392×1080, 388 ppi, 120 Гц',
      processor:"Snapdragon 7s Gen 3", ram:"8 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"50+50+8 МП, f/1.88", frontCamera:"32 МП, f/2.2",
      battery:"5000 мАч", os:"Android 15, Nothing OS 3.0", charging:"50 Вт",
      weight:"201 г", dimensions:"162.2×77.5×8.35 мм", protection:"IP54", nfc:true, fiveG:true,
    },
    scores:{performance:75,camera:78,battery:87,display:84,design:96,value:96}, totalScore:86,
  },
  {
    id:"n2", slug:"nothing-phone-2a", name:"Nothing Phone (2a)", brand:"Nothing",
    image:G("nothing-phone-2a"),
    price:31990, priceLabel:"от 31 990 ₽", year:2024, color:"#F0F0F0", popularity:70,
    pros:["Glyph Interface","Чистый Android","Необычный дизайн","Доступно"],
    cons:["Dimensity 7200 Pro — середняк","IP54","Нет телефото"],
    specs:{
      display:'6.7" AMOLED, 2412×1080, 394 ppi, 120 Гц',
      processor:"MediaTek Dimensity 7200 Pro", ram:"8 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"50+50 МП, f/1.88", frontCamera:"32 МП, f/2.2",
      battery:"5000 мАч", os:"Android 14, Nothing OS 2.5", charging:"45 Вт",
      weight:"190 г", dimensions:"161.8×76.3×8.55 мм", protection:"IP54", nfc:true, fiveG:true,
    },
    scores:{performance:76,camera:75,battery:87,display:84,design:95,value:95}, totalScore:85,
  },

  // ══════════════════════════════════════════════════════════
  // POCO
  // ══════════════════════════════════════════════════════════
  {
    id:"p1", slug:"poco-f6-pro", name:"POCO F6 Pro", brand:"POCO",
    image:G("xiaomi-poco-f6-pro"),
    price:49990, priceLabel:"от 49 990 ₽", year:2024, color:"#1A1A2E", popularity:72,
    pros:["LTPO 1-120 Гц QHD+","Snapdragon 8 Gen 2","67 Вт зарядка"],
    cons:["Большой и тяжёлый","Камера не топ","MIUI/HyperOS"],
    specs:{
      display:'6.67" LTPO AMOLED, 3200×1440, 526 ppi, 1-120 Гц',
      processor:"Snapdragon 8 Gen 2", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+8+2 МП, f/1.73", frontCamera:"16 МП, f/2.45",
      battery:"5000 мАч", os:"Android 14, HyperOS", charging:"67 Вт / 30 Вт",
      weight:"209 г", dimensions:"160.9×75.5×8.55 мм", protection:"IP64", nfc:true, fiveG:true,
    },
    scores:{performance:90,camera:78,battery:87,display:92,design:84,value:91}, totalScore:87,
  },
  {
    id:"p2", slug:"poco-x6-pro", name:"POCO X6 Pro", brand:"POCO",
    image:G("xiaomi-poco-x6-pro"),
    price:29990, priceLabel:"от 29 990 ₽", year:2024, color:"#FF6B35",
    badge:"Лучший бюджет", popularity:83,
    pros:["Dimensity 8300 Ultra","AMOLED 120 Гц","67 Вт","Самая низкая цена в классе"],
    cons:["IP54","Камера 64 МП но не Leica","MIUI-реклама"],
    specs:{
      display:'6.67" AMOLED, 2712×1220, 446 ppi, 120 Гц',
      processor:"MediaTek Dimensity 8300 Ultra", ram:"8 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"64+8+2 МП, f/1.73", frontCamera:"16 МП, f/2.45",
      battery:"5000 мАч", os:"Android 14, HyperOS", charging:"67 Вт",
      weight:"186 г", dimensions:"160.5×74.3×8.25 мм", protection:"IP54", nfc:true, fiveG:true,
    },
    scores:{performance:82,camera:70,battery:88,display:86,design:80,value:98}, totalScore:84,
  },

  // ══════════════════════════════════════════════════════════
  // REALME
  // ══════════════════════════════════════════════════════════
  {
    id:"r1", slug:"realme-gt-6", name:"Realme GT 6", brand:"Realme",
    image:G("realme-gt6"),
    price:44990, priceLabel:"от 44 990 ₽", year:2024, color:"#6C5CE7", popularity:70,
    pros:["120 Вт зарядка","5500 мАч","Snap 8s Gen 3","IP65"],
    cons:["Realme UI менее полированный","Нет флагманской камеры"],
    specs:{
      display:'6.78" AMOLED, 2780×1264, 450 ppi, 1-120 Гц',
      processor:"Snapdragon 8s Gen 3", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+8+50 МП, f/1.69", frontCamera:"32 МП, f/2.4",
      battery:"5500 мАч", os:"Android 14, Realme UI 5", charging:"120 Вт",
      weight:"186 г", dimensions:"161.7×74.7×8.1 мм", protection:"IP65", nfc:true, fiveG:true,
    },
    scores:{performance:88,camera:82,battery:92,display:89,design:84,value:94}, totalScore:88,
  },
  {
    id:"r2", slug:"realme-gt-6t", name:"Realme GT 6T", brand:"Realme",
    image:G("realme-gt6"),
    price:29990, priceLabel:"от 29 990 ₽", year:2024, color:"#E74C3C", popularity:64,
    pros:["120 Вт зарядка в бюджете","5500 мАч","IP65"],
    cons:["Snap 7+ Gen 3","Только 2 камеры","Realme UI реклама"],
    specs:{
      display:'6.67" AMOLED, 2712×1220, 446 ppi, 120 Гц',
      processor:"Snapdragon 7+ Gen 3", ram:"8 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"50+2 МП, f/1.88", frontCamera:"16 МП, f/2.45",
      battery:"5500 мАч", os:"Android 14, Realme UI 5", charging:"120 Вт",
      weight:"186 г", dimensions:"161.7×74.7×7.6 мм", protection:"IP65", nfc:true, fiveG:true,
    },
    scores:{performance:82,camera:72,battery:90,display:84,design:80,value:96}, totalScore:84,
  },

  // ══════════════════════════════════════════════════════════
  // HUAWEI
  // ══════════════════════════════════════════════════════════
  {
    id:"hw1", slug:"huawei-pura-70-pro", name:"Huawei Pura 70 Pro", brand:"Huawei",
    image:G("huawei-mate-70-pro"),
    price:89990, priceLabel:"от 89 990 ₽", year:2024, color:"#8B0000", popularity:66,
    pros:["Переменная диафрагма f/1.4-4.0","Спутниковая связь","100 Вт зарядка","Стильный дизайн"],
    cons:["Нет Google сервисов","Kirin чип слабее Snapdragon","Нет 5G в РФ"],
    specs:{
      display:'6.8" LTPO OLED, 2800×1260, 120 Гц',
      processor:"Kirin 9010", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+40+50 МП, f/1.4-4.0 (переменная)", frontCamera:"13 МП, f/2.4",
      battery:"5050 мАч", os:"HarmonyOS 4.2", charging:"100 Вт / 80 Вт",
      weight:"220 г", dimensions:"161.3×74.4×8.3 мм", protection:"IP68", nfc:true, fiveG:false,
    },
    scores:{performance:80,camera:93,battery:88,display:92,design:94,value:75}, totalScore:87,
  },
  {
    id:"hw2", slug:"huawei-mate-70-pro", name:"Huawei Mate 70 Pro", brand:"Huawei",
    image:G("huawei-mate-70-pro"),
    price:99990, priceLabel:"от 99 990 ₽", year:2024, color:"#1A1A3A", isNew:true, popularity:62,
    pros:["Kirin 9020 новейший","Спутниковый интернет","100 Вт зарядка","Защита IP68"],
    cons:["Нет Google","Нет 5G в большинстве стран","Дорого без GMS"],
    specs:{
      display:'6.9" LTPO OLED, 2832×1320, 1-120 Гц',
      processor:"Kirin 9020", ram:"16 ГБ", storage:"512 ГБ — 1 ТБ",
      mainCamera:"50+48+40 МП, f/1.4", frontCamera:"13 МП, f/2.4",
      battery:"5200 мАч", os:"HarmonyOS 4.3", charging:"100 Вт / 80 Вт",
      weight:"223 г", dimensions:"163.0×76.0×8.4 мм", protection:"IP68", nfc:true, fiveG:false,
    },
    scores:{performance:82,camera:92,battery:88,display:94,design:93,value:72}, totalScore:87,
  },

  // ══════════════════════════════════════════════════════════
  // HONOR
  // ══════════════════════════════════════════════════════════
  {
    id:"h1", slug:"honor-magic7-pro", name:"Honor Magic7 Pro", brand:"Honor",
    image:G("honor-magic7-pro"),
    price:84990, priceLabel:"от 84 990 ₽", year:2024, color:"#2C3E50", isNew:true, popularity:72,
    pros:["Snapdragon 8 Elite","180 МП перископ","100 Вт зарядка","Есть Google сервисы"],
    cons:["MagicOS менее известен","Мало сервисных центров в РФ"],
    specs:{
      display:'6.8" LTPO OLED, 2800×1260, 1-120 Гц',
      processor:"Snapdragon 8 Elite", ram:"16 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+180+50 МП, f/1.6", frontCamera:"50 МП, f/2.0",
      battery:"5270 мАч", os:"Android 15, MagicOS 9", charging:"100 Вт / 80 Вт",
      weight:"223 г", dimensions:"163.0×77.0×8.8 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:97,camera:96,battery:89,display:95,design:92,value:82}, totalScore:92,
  },
  {
    id:"h2", slug:"honor-200-pro", name:"Honor 200 Pro", brand:"Honor",
    image:G("honor-magic7-pro"),
    price:54990, priceLabel:"от 54 990 ₽", year:2024, color:"#3D5A80", popularity:66,
    pros:["Портретная камера с Harcourt","Snap 8s Gen 3","100 Вт зарядка","Google сервисы"],
    cons:["IP65 не IP68","Камера портретная но не универсальная"],
    specs:{
      display:'6.78" LTPO OLED, 2800×1260, 1-120 Гц',
      processor:"Snapdragon 8s Gen 3", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+50+12 МП (Harcourt Portrait), f/1.9", frontCamera:"50 МП, f/2.4",
      battery:"5200 мАч", os:"Android 14, MagicOS 8", charging:"100 Вт / 66 Вт",
      weight:"199 г", dimensions:"162.5×74.8×8.0 мм", protection:"IP65", nfc:true, fiveG:true,
    },
    scores:{performance:88,camera:88,battery:90,display:91,design:88,value:86}, totalScore:88,
  },

  // ══════════════════════════════════════════════════════════
  // MOTOROLA
  // ══════════════════════════════════════════════════════════
  {
    id:"m1", slug:"motorola-edge-50-ultra", name:"Motorola Edge 50 Ultra", brand:"Motorola",
    image:G("motorola-edge-50-ultra"),
    price:59990, priceLabel:"от 59 990 ₽", year:2024, color:"#C0392B", popularity:68,
    pros:["125 Вт TurboPower зарядка","Vegan leather задняя крышка","Snap 8s Gen 3","IP68"],
    cons:["Камера хуже топов","Нет беспроводной на всех рынках"],
    specs:{
      display:'6.7" pOLED, 2712×1220, 165 Гц, 1-165 Гц',
      processor:"Snapdragon 8s Gen 3", ram:"16 ГБ", storage:"512 ГБ",
      mainCamera:"50+64+12 МП, f/1.6", frontCamera:"50 МП, f/2.0",
      battery:"4500 мАч", os:"Android 14", charging:"125 Вт / 50 Вт",
      weight:"206 г", dimensions:"161.1×72.4×8.6 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:88,camera:82,battery:84,display:90,design:90,value:88}, totalScore:87,
  },
  {
    id:"m2", slug:"motorola-edge-50-neo", name:"Motorola Edge 50 Neo", brand:"Motorola",
    image:G("motorola-edge-50-ultra"),
    price:29990, priceLabel:"от 29 990 ₽", year:2024, color:"#27AE60", popularity:60,
    pros:["Компактный 6.4\"","Чистый Android","Долгосрочная поддержка","IP68"],
    cons:["Dimensity 7300 средний","Камера скромная"],
    specs:{
      display:'6.4" pOLED, 2400×1080, 120 Гц',
      processor:"MediaTek Dimensity 7300", ram:"8 ГБ", storage:"256 ГБ",
      mainCamera:"50+13+10 МП, f/1.8", frontCamera:"32 МП, f/2.4",
      battery:"4310 мАч", os:"Android 14", charging:"68 Вт",
      weight:"171 г", dimensions:"154.1×71.2×8.1 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:74,camera:72,battery:80,display:84,design:82,value:91}, totalScore:80,
  },

  // ══════════════════════════════════════════════════════════
  // OPPO
  // ══════════════════════════════════════════════════════════
  {
    id:"o1", slug:"oppo-find-x8-pro", name:"OPPO Find X8 Pro", brand:"OPPO",
    image:G("oppo-find-x8-pro"),
    price:89990, priceLabel:"от 89 990 ₽", year:2024, color:"#1E3A5F", isNew:true, popularity:74,
    pros:["Dimensity 9400","Два перископных телефото","5900 мАч","80 Вт + 50 Вт беспроводная"],
    cons:["Нет Google на китайской версии","OPPO мало сервисов в РФ"],
    specs:{
      display:'6.78" AMOLED, 2780×1264, 1-120 Гц',
      processor:"MediaTek Dimensity 9400", ram:"16 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+50+50+50 МП (2× перископ), f/1.6", frontCamera:"32 МП, f/2.4",
      battery:"5900 мАч", os:"Android 15, ColorOS 15", charging:"80 Вт / 50 Вт",
      weight:"218 г", dimensions:"162.0×75.5×8.2 мм", protection:"IP69", nfc:true, fiveG:true,
    },
    scores:{performance:96,camera:96,battery:95,display:94,design:92,value:79}, totalScore:92,
  },
  {
    id:"o2", slug:"oppo-reno-13-pro", name:"OPPO Reno 13 Pro", brand:"OPPO",
    image:G("oppo-find-x8-pro"),
    price:44990, priceLabel:"от 44 990 ₽", year:2024, color:"#8E44AD", popularity:62,
    pros:["Стильный дизайн","80 Вт зарядка","Хорошая камера для цены"],
    cons:["Dimensity 8350 — середняк","IP65"],
    specs:{
      display:'6.83" AMOLED, 2776×1256, 120 Гц',
      processor:"MediaTek Dimensity 8350", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+50+8 МП, f/1.8", frontCamera:"50 МП, f/2.0",
      battery:"5600 мАч", os:"Android 15, ColorOS 15", charging:"80 Вт",
      weight:"185 г", dimensions:"163.6×74.8×7.9 мм", protection:"IP65", nfc:true, fiveG:true,
    },
    scores:{performance:80,camera:82,battery:92,display:87,design:88,value:88}, totalScore:86,
  },

  // ══════════════════════════════════════════════════════════
  // VIVO
  // ══════════════════════════════════════════════════════════
  {
    id:"v1", slug:"vivo-x200-pro", name:"Vivo X200 Pro", brand:"Vivo",
    image:G("vivo-x200-pro"),
    price:84990, priceLabel:"от 84 990 ₽", year:2024, color:"#1A2A6C", isNew:true, popularity:72,
    pros:["200 МП перископный телефото (Zeiss)","Dimensity 9400","6000 мАч","90 Вт зарядка"],
    cons:["Vivo мало известен в РФ","Нет Google на CN версии"],
    specs:{
      display:'6.78" AMOLED, 2800×1260, 1-120 Гц',
      processor:"MediaTek Dimensity 9400", ram:"16 ГБ", storage:"256 ГБ — 1 ТБ",
      mainCamera:"50+200+50 МП (Zeiss), f/1.57", frontCamera:"32 МП, f/2.0",
      battery:"6000 мАч", os:"Android 15, OriginOS 5", charging:"90 Вт / 30 Вт",
      weight:"229 г", dimensions:"163.5×76.9×8.7 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:96,camera:97,battery:95,display:93,design:90,value:80}, totalScore:92,
  },
  {
    id:"v2", slug:"vivo-v40-pro", name:"Vivo V40 Pro", brand:"Vivo",
    image:G("vivo-x200-pro"),
    price:44990, priceLabel:"от 44 990 ₽", year:2024, color:"#2ECC71", popularity:60,
    pros:["Zeiss камера в среднем сегменте","80 Вт зарядка","Элегантный дизайн"],
    cons:["Snap 7 Gen 3 — не флагман","IP64"],
    specs:{
      display:'6.78" AMOLED, 2800×1260, 120 Гц',
      processor:"Snapdragon 7 Gen 3", ram:"12 ГБ", storage:"256 ГБ",
      mainCamera:"50+50+8 МП (Zeiss), f/1.88", frontCamera:"50 МП, f/2.0",
      battery:"5500 мАч", os:"Android 14, OriginOS 4", charging:"80 Вт",
      weight:"190 г", dimensions:"162.4×74.9×7.6 мм", protection:"IP64", nfc:true, fiveG:true,
    },
    scores:{performance:78,camera:84,battery:91,display:87,design:86,value:88}, totalScore:85,
  },

  // ══════════════════════════════════════════════════════════
  // ASUS
  // ══════════════════════════════════════════════════════════
  {
    id:"as1", slug:"asus-rog-phone-9-pro", name:"Asus ROG Phone 9 Pro", brand:"Asus",
    image:G("asus-rog-phone-9-pro"),
    price:99990, priceLabel:"от 99 990 ₽", year:2024, color:"#FF0000",
    badge:"Лучший игровой", isNew:true, popularity:70,
    pros:["Snapdragon 8 Elite","165 Гц дисплей","5800 мАч","Активное воздушное охлаждение"],
    cons:["Очень тяжёлый 227 г","Нет беспроводной зарядки","Геймерский стиль не для всех"],
    specs:{
      display:'6.78" AMOLED, 2400×1080, 165 Гц',
      processor:"Snapdragon 8 Elite", ram:"16 ГБ", storage:"512 ГБ",
      mainCamera:"50+13+32 МП, f/1.9", frontCamera:"32 МП, f/2.0",
      battery:"5800 мАч", os:"Android 15, ROG UI", charging:"65 Вт",
      weight:"227 г", dimensions:"163.8×76.8×8.9 мм", protection:"IP54", nfc:true, fiveG:true,
    },
    scores:{performance:99,camera:82,battery:93,display:94,design:89,value:80}, totalScore:90,
  },
  {
    id:"as2", slug:"asus-zenfone-11-ultra", name:"Asus Zenfone 11 Ultra", brand:"Asus",
    image:G("asus-zenfone-11-ultra"),
    price:74990, priceLabel:"от 74 990 ₽", year:2024, color:"#2C3E50", popularity:58,
    pros:["Snap 8 Gen 3","65 Вт зарядка","AI функции","Прочный корпус"],
    cons:["Большой 6.78\"","Нет беспроводной зарядки","IP65"],
    specs:{
      display:'6.78" AMOLED, 2400×1080, 144 Гц',
      processor:"Snapdragon 8 Gen 3", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+13+32 МП, f/1.9", frontCamera:"32 МП, f/2.0",
      battery:"5500 мАч", os:"Android 14, ZenUI 11", charging:"65 Вт",
      weight:"224 г", dimensions:"163.8×76.8×8.9 мм", protection:"IP65", nfc:true, fiveG:true,
    },
    scores:{performance:93,camera:80,battery:90,display:88,design:84,value:82}, totalScore:86,
  },

  // ══════════════════════════════════════════════════════════
  // APPLE — iPhone 13 series (2021)
  // ══════════════════════════════════════════════════════════
  {
    id:"a16", slug:"iphone-13-pro-max", name:"iPhone 13 Pro Max", brand:"Apple",
    image:G("apple-iphone-13-pro-max"),
    price:49990, priceLabel:"от 49 990 ₽", year:2021, color:"#B8860B", popularity:55,
    pros:["Первый ProMotion 120 Гц у Apple","Отличная батарея","A15 Bionic"],
    cons:["Lightning","Тяжёлый 238 г","Устаревший"],
    specs:{
      display:'6.7" Super Retina XDR OLED, 2778×1284, 120 Гц',
      processor:"Apple A15 Bionic", ram:"6 ГБ", storage:"128 ГБ — 1 ТБ",
      mainCamera:"12+12+12 МП, f/1.5", frontCamera:"12 МП TrueDepth, f/2.2",
      battery:"4352 мАч", os:"iOS 15 → 18", charging:"20 Вт / 15 Вт MagSafe",
      weight:"238 г", dimensions:"160.8×78.1×7.65 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:80,camera:84,battery:82,display:88,design:86,value:82}, totalScore:83,
  },
  {
    id:"a17", slug:"iphone-13-pro", name:"iPhone 13 Pro", brand:"Apple",
    image:G("apple-iphone-13-pro"),
    price:44990, priceLabel:"от 44 990 ₽", year:2021, color:"#B8860B", popularity:52,
    pros:["ProMotion 120 Гц","A15 Bionic","Macro камера"],
    cons:["Lightning","Маленькая батарея","Устаревший"],
    specs:{
      display:'6.1" Super Retina XDR OLED, 2532×1170, 120 Гц',
      processor:"Apple A15 Bionic", ram:"6 ГБ", storage:"128 ГБ — 1 ТБ",
      mainCamera:"12+12+12 МП, f/1.5", frontCamera:"12 МП TrueDepth, f/2.2",
      battery:"3095 мАч", os:"iOS 15 → 18", charging:"20 Вт / 15 Вт MagSafe",
      weight:"204 г", dimensions:"146.7×71.5×7.65 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:80,camera:82,battery:70,display:86,design:86,value:82}, totalScore:81,
  },
  {
    id:"a18", slug:"iphone-13", name:"iPhone 13", brand:"Apple",
    image:G("apple-iphone-13"),
    price:39990, priceLabel:"от 39 990 ₽", year:2021, color:"#1C1C1E", popularity:60,
    pros:["Доступный iPhone","Хорошая камера","A15 Bionic","Долгая поддержка"],
    cons:["60 Гц","Lightning","Устаревший дизайн"],
    specs:{
      display:'6.1" Super Retina XDR OLED, 2532×1170, 60 Гц',
      processor:"Apple A15 Bionic", ram:"4 ГБ", storage:"128 ГБ — 512 ГБ",
      mainCamera:"12+12 МП, f/1.6", frontCamera:"12 МП TrueDepth, f/2.2",
      battery:"3227 мАч", os:"iOS 15 → 18", charging:"20 Вт / 15 Вт MagSafe",
      weight:"174 г", dimensions:"146.7×71.5×7.65 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:80,camera:78,battery:72,display:82,design:84,value:86}, totalScore:80,
  },

  // ══════════════════════════════════════════════════════════
  // SAMSUNG — S23 / S22 series
  // ══════════════════════════════════════════════════════════
  {
    id:"s11", slug:"samsung-galaxy-s23-ultra", name:"Samsung Galaxy S23 Ultra", brand:"Samsung",
    image:G("samsung-galaxy-s23-ultra-5g"),
    price:69990, priceLabel:"от 69 990 ₽", year:2023, color:"#1C1C1E", popularity:78,
    pros:["Snapdragon 8 Gen 2","S Pen","200 МП камера","IP68"],
    cons:["Дорогой","Тяжёлый 234 г","Устаревший относительно S24"],
    specs:{
      display:'6.8" Dynamic AMOLED 2X, 3088×1440, 1-120 Гц',
      processor:"Snapdragon 8 Gen 2", ram:"12 ГБ", storage:"256 ГБ — 1 ТБ",
      mainCamera:"200+10+12+10 МП, f/1.7", frontCamera:"12 МП, f/2.2",
      battery:"5000 мАч", os:"Android 13 → 15", charging:"45 Вт / 15 Вт",
      weight:"234 г", dimensions:"163.4×78.1×8.9 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:90,camera:93,battery:84,display:94,design:88,value:80}, totalScore:88,
  },
  {
    id:"s12", slug:"samsung-galaxy-s23", name:"Samsung Galaxy S23", brand:"Samsung",
    image:G("samsung-galaxy-s22-ultra-5g"),
    price:44990, priceLabel:"от 44 990 ₽", year:2023, color:"#3A3B3C", popularity:70,
    pros:["Snapdragon 8 Gen 2","IP68","Компактный","7 лет поддержки"],
    cons:["Маленькая батарея","25 Вт зарядка","Устаревший"],
    specs:{
      display:'6.1" Dynamic AMOLED 2X, 2340×1080, 120 Гц',
      processor:"Snapdragon 8 Gen 2", ram:"8 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"50+10+12 МП, f/1.8", frontCamera:"12 МП, f/2.2",
      battery:"3900 мАч", os:"Android 13 → 15", charging:"25 Вт / 15 Вт",
      weight:"168 г", dimensions:"146.3×70.9×7.6 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:90,camera:84,battery:73,display:88,design:86,value:83}, totalScore:84,
  },
  {
    id:"s13", slug:"samsung-galaxy-a35", name:"Samsung Galaxy A35", brand:"Samsung",
    image:G("samsung-galaxy-s23-ultra-5g"),
    price:27990, priceLabel:"от 27 990 ₽", year:2024, color:"#6C757D", popularity:68,
    pros:["IP67","4 года обновлений","AMOLED экран","NFC"],
    cons:["Exynos 1380 средний","25 Вт зарядка"],
    specs:{
      display:'6.6" Super AMOLED, 2340×1080, 120 Гц',
      processor:"Exynos 1380", ram:"6 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"50+8+5 МП, f/1.8", frontCamera:"13 МП, f/2.2",
      battery:"5000 мАч", os:"Android 14, One UI 6.1", charging:"25 Вт",
      weight:"210 г", dimensions:"161.7×78.0×8.2 мм", protection:"IP67", nfc:true, fiveG:false,
    },
    scores:{performance:64,camera:70,battery:85,display:82,design:76,value:94}, totalScore:78,
  },
  {
    id:"s14", slug:"samsung-galaxy-m55", name:"Samsung Galaxy M55", brand:"Samsung",
    image:G("samsung-galaxy-m55"),
    price:31990, priceLabel:"от 31 990 ₽", year:2024, color:"#1B2C6E", popularity:60,
    pros:["Snap 7 Gen 1","45 Вт зарядка","5000 мАч","Большой экран"],
    cons:["IP54","Нет флагманских функций"],
    specs:{
      display:'6.7" Super AMOLED, 2400×1080, 120 Гц',
      processor:"Snapdragon 7 Gen 1", ram:"8 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"50+8+2 МП, f/1.8", frontCamera:"50 МП, f/2.2",
      battery:"5000 мАч", os:"Android 14, One UI 6.1", charging:"45 Вт",
      weight:"193 г", dimensions:"161.9×77.3×7.8 мм", protection:"IP54", nfc:true, fiveG:true,
    },
    scores:{performance:74,camera:72,battery:86,display:83,design:78,value:90}, totalScore:80,
  },

  // ══════════════════════════════════════════════════════════
  // XIAOMI дополнительно
  // ══════════════════════════════════════════════════════════
  {
    id:"x5", slug:"xiaomi-14", name:"Xiaomi 14", brand:"Xiaomi",
    image:G("xiaomi-14"),
    price:59990, priceLabel:"от 59 990 ₽", year:2023, color:"#2C3E50", popularity:74,
    pros:["Snapdragon 8 Gen 3","Leica камера","90 Вт зарядка","IP68"],
    cons:["Маленький экран 6.36\"","Нет MicroSD"],
    specs:{
      display:'6.36" LTPO AMOLED, 2670×1200, 460 ppi, 1-120 Гц',
      processor:"Snapdragon 8 Gen 3", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+50+50 МП, f/1.6", frontCamera:"32 МП, f/2.0",
      battery:"4610 мАч", os:"Android 14, HyperOS", charging:"90 Вт / 50 Вт",
      weight:"193 г", dimensions:"152.8×71.5×8.2 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:93,camera:92,battery:85,display:93,design:89,value:87}, totalScore:90,
  },
  {
    id:"x6", slug:"poco-f6", name:"POCO F6", brand:"POCO",
    image:G("xiaomi-poco-f6"),
    price:34990, priceLabel:"от 34 990 ₽", year:2024, color:"#FFD700", popularity:68,
    pros:["Snap 8s Gen 3","67 Вт зарядка","Хорошая цена","AMOLED 120 Гц"],
    cons:["IP54","Нет беспроводной зарядки"],
    specs:{
      display:'6.67" AMOLED, 2712×1220, 120 Гц',
      processor:"Snapdragon 8s Gen 3", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+8 МП, f/1.7", frontCamera:"20 МП, f/2.2",
      battery:"5000 мАч", os:"Android 14, HyperOS", charging:"67 Вт",
      weight:"179 г", dimensions:"160.6×74.6×7.8 мм", protection:"IP54", nfc:true, fiveG:true,
    },
    scores:{performance:88,camera:74,battery:87,display:86,design:80,value:94}, totalScore:85,
  },

  // ══════════════════════════════════════════════════════════
  // NOKIA
  // ══════════════════════════════════════════════════════════
  {
    id:"nk1", slug:"nokia-g60-5g", name:"Nokia G60 5G", brand:"Nokia",
    image:G("nokia-g60-5g"),
    price:19990, priceLabel:"от 19 990 ₽", year:2022, color:"#1565C0", popularity:50,
    pros:["3 года обновлений Android","Чистый Android","IP52","Доступная цена"],
    cons:["Snapdragon 695 средний","60 Гц дисплей","Камера слабая"],
    specs:{
      display:'6.58" IPS LCD, 2408×1080, 60 Гц',
      processor:"Snapdragon 695 5G", ram:"6 ГБ", storage:"128 ГБ",
      mainCamera:"50+5+2 МП, f/1.8", frontCamera:"8 МП, f/2.0",
      battery:"4500 мАч", os:"Android 12 → 14", charging:"20 Вт",
      weight:"195 г", dimensions:"166.8×77.1×8.6 мм", protection:"IP52", nfc:true, fiveG:true,
    },
    scores:{performance:62,camera:58,battery:84,display:68,design:72,value:88}, totalScore:72,
  },
  {
    id:"nk2", slug:"nokia-xr21", name:"Nokia XR21", brand:"Nokia",
    image:G("nokia-xr21"),
    price:29990, priceLabel:"от 29 990 ₽", year:2023, color:"#0D47A1", popularity:48,
    pros:["MIL-SPEC 810H прочный","IP68","3 года поддержки","Сапфировое стекло"],
    cons:["Snapdragon 695 — средний","Нет быстрой зарядки","Тяжёлый"],
    specs:{
      display:'6.49" IPS LCD, 2400×1080, 120 Гц',
      processor:"Snapdragon 695 5G", ram:"6 ГБ", storage:"128 ГБ",
      mainCamera:"64+13 МП, f/1.8", frontCamera:"8 МП, f/2.0",
      battery:"4800 мАч", os:"Android 12 → 14", charging:"18 Вт",
      weight:"239 г", dimensions:"168.2×80.6×9.9 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:62,camera:64,battery:86,display:72,design:78,value:84}, totalScore:74,
  },
  {
    id:"nk3", slug:"nokia-c32", name:"Nokia C32", brand:"Nokia",
    image:G("nokia-g60-5g"),
    price:12990, priceLabel:"от 12 990 ₽", year:2023, color:"#37474F", popularity:45,
    pros:["Очень дёшево","2-дневная батарея","Чистый Android 13","Прочный корпус"],
    cons:["Helio G37 — бюджетный","HD+ экран","Нет 5G","Нет NFC"],
    specs:{
      display:'6.52" IPS LCD, 1600×720, 60 Гц',
      processor:"MediaTek Helio G37", ram:"3 ГБ", storage:"64 ГБ",
      mainCamera:"50+2 МП, f/1.8", frontCamera:"8 МП, f/2.0",
      battery:"5000 мАч", os:"Android 13", charging:"10 Вт",
      weight:"199 г", dimensions:"167.7×77.1×8.6 мм", protection:"IP52", nfc:false, fiveG:false,
    },
    scores:{performance:40,camera:48,battery:88,display:60,design:62,value:96}, totalScore:65,
  },

  // ══════════════════════════════════════════════════════════
  // INFINIX
  // ══════════════════════════════════════════════════════════
  {
    id:"if1", slug:"infinix-note-40-pro", name:"Infinix Note 40 Pro", brand:"Infinix",
    image:G("infinix-gt-20-pro"),
    price:18990, priceLabel:"от 18 990 ₽", year:2024, color:"#7B1FA2", popularity:52,
    pros:["68 Вт зарядка","AMOLED экран","Хорошая ценность","6.78\" дисплей"],
    cons:["Helio G99 — бюджетный","IP53","Нет 5G"],
    specs:{
      display:'6.78" AMOLED, 2436×1080, 120 Гц',
      processor:"MediaTek Helio G99 Ultimate", ram:"8 ГБ", storage:"256 ГБ",
      mainCamera:"108+2+2 МП, f/1.75", frontCamera:"32 МП, f/2.0",
      battery:"5000 мАч", os:"Android 14, XOS 14", charging:"68 Вт",
      weight:"197 г", dimensions:"166.5×76.2×7.6 мм", protection:"IP53", nfc:false, fiveG:false,
    },
    scores:{performance:62,camera:64,battery:87,display:80,design:74,value:95}, totalScore:76,
  },
  {
    id:"if2", slug:"infinix-gt-20-pro", name:"Infinix GT 20 Pro", brand:"Infinix",
    image:G("infinix-gt-20-pro"),
    price:22990, priceLabel:"от 22 990 ₽", year:2024, color:"#FF5722", popularity:50,
    pros:["Dimensity 8200 Ultimate","RGB подсветка","144 Гц AMOLED","Хорошая цена"],
    cons:["Нет IP-рейтинга","Нет NFC","Геймерский стиль не для всех"],
    specs:{
      display:'6.78" AMOLED, 2436×1080, 144 Гц',
      processor:"MediaTek Dimensity 8200 Ultimate", ram:"12 ГБ", storage:"256 ГБ",
      mainCamera:"108+2 МП, f/1.75", frontCamera:"32 МП, f/2.5",
      battery:"5000 мАч", os:"Android 14, XOS 14", charging:"68 Вт",
      weight:"199 г", dimensions:"168.5×77.5×7.8 мм", protection:"IP53", nfc:false, fiveG:false,
    },
    scores:{performance:78,camera:62,battery:87,display:82,design:76,value:94}, totalScore:79,
  },

  // ══════════════════════════════════════════════════════════
  // TECNO
  // ══════════════════════════════════════════════════════════
  {
    id:"tc1", slug:"tecno-phantom-x2-pro", name:"Tecno Phantom X2 Pro", brand:"Tecno",
    image:G("tecno-phantom-x2-pro"),
    price:24990, priceLabel:"от 24 990 ₽", year:2022, color:"#B71C1C", popularity:46,
    pros:["Выдвижная камера-манипулятор","50 МП RGBW","Хороший звук","Флагманский дизайн"],
    cons:["Dimensity 9000 устарел","Нет 5G в РФ","Мало обновлений"],
    specs:{
      display:'6.8" AMOLED, 2400×1080, 120 Гц',
      processor:"MediaTek Dimensity 9000", ram:"12 ГБ", storage:"256 ГБ",
      mainCamera:"50+13+2 МП (выдвижная 50 МП), f/1.9", frontCamera:"32 МП выдвижная",
      battery:"5160 мАч", os:"Android 12, HiOS 12", charging:"45 Вт",
      weight:"222 г", dimensions:"164.5×74.8×9.0 мм", protection:"IP53", nfc:false, fiveG:true,
    },
    scores:{performance:84,camera:72,battery:86,display:82,design:86,value:86}, totalScore:82,
  },
  {
    id:"tc2", slug:"tecno-camon-30-premier", name:"Tecno Camon 30 Premier 5G", brand:"Tecno",
    image:G("tecno-camon-30-premier-5g"),
    price:27990, priceLabel:"от 27 990 ₽", year:2024, color:"#1A237E", popularity:44,
    pros:["50 МП перископ","5G","Dimensity 8200","Беспроводная зарядка"],
    cons:["Мало обновлений","PolarAce слабее Leica","Мало сервисов в РФ"],
    specs:{
      display:'6.78" AMOLED, 2436×1080, 144 Гц',
      processor:"MediaTek Dimensity 8200", ram:"16 ГБ", storage:"512 ГБ",
      mainCamera:"50+50+8 МП (перископ), f/1.8", frontCamera:"50 МП, f/2.0",
      battery:"5000 мАч", os:"Android 14, HiOS 14", charging:"70 Вт / 30 Вт",
      weight:"195 г", dimensions:"165.5×76.5×7.5 мм", protection:"IP54", nfc:false, fiveG:true,
    },
    scores:{performance:78,camera:74,battery:86,display:82,design:80,value:88}, totalScore:81,
  },

  // ══════════════════════════════════════════════════════════
  // ZTE
  // ══════════════════════════════════════════════════════════
  {
    id:"z1", slug:"zte-nubia-z60-ultra", name:"ZTE Nubia Z60 Ultra", brand:"ZTE",
    image:G("zte-nubia-z60-ultra"),
    price:54990, priceLabel:"от 54 990 ₽", year:2023, color:"#1A1A2E", popularity:55,
    pros:["Snap 8 Gen 3","Под-экранная фронталка","35 МП фронталка","134 Вт зарядка"],
    cons:["Нет беспроводной","ZTE мало известна в РФ","IP54"],
    specs:{
      display:'6.8" AMOLED, 2480×1116, 144 Гц (под-экранная камера)',
      processor:"Snapdragon 8 Gen 3", ram:"12 ГБ", storage:"256 ГБ — 1 ТБ",
      mainCamera:"50+50+64 МП, f/1.7", frontCamera:"12 МП (под экраном)",
      battery:"6000 мАч", os:"Android 13, MyOS 13", charging:"134 Вт",
      weight:"228 г", dimensions:"163.7×75.9×8.7 мм", protection:"IP54", nfc:true, fiveG:true,
    },
    scores:{performance:93,camera:86,battery:96,display:90,design:88,value:85}, totalScore:90,
  },

  // ══════════════════════════════════════════════════════════
  // LENOVO
  // ══════════════════════════════════════════════════════════
  {
    id:"l1", slug:"lenovo-legion-phone-7-pro", name:"Lenovo Legion Phone 7 Pro", brand:"Lenovo",
    image:G("asus-rog-phone-8-pro"),
    price:59990, priceLabel:"от 59 990 ₽", year:2022, color:"#FF0000",
    badge:"Лучший игровой", popularity:52,
    pros:["Snap 8+ Gen 1","Двойная USB-C","Плечевые триггеры","68 Вт x2 зарядка"],
    cons:["Геймерский вид","Тяжёлый","Устаревший"],
    specs:{
      display:'6.92" AMOLED, 2460×1080, 144 Гц',
      processor:"Snapdragon 8+ Gen 1", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+13+2 МП, f/1.88", frontCamera:"60 МП выдвижная",
      battery:"5000 мАч", os:"Android 12, ZUI 14", charging:"68 Вт",
      weight:"245 г", dimensions:"170.1×77.4×10.3 мм", protection:"нет", nfc:true, fiveG:true,
    },
    scores:{performance:90,camera:74,battery:87,display:84,design:82,value:84}, totalScore:84,
  },

  // ══════════════════════════════════════════════════════════
  // TCL
  // ══════════════════════════════════════════════════════════
  {
    id:"tcl1", slug:"tcl-50-xl-nxtpaper", name:"TCL 50 XL NXTPaper", brand:"TCL",
    image:G("nokia-g60-5g"),
    price:14990, priceLabel:"от 14 990 ₽", year:2024, color:"#00796B", popularity:42,
    pros:["NXTPaper матовый экран без бликов","Доступная цена","Большой экран"],
    cons:["Helio G85 — очень слабый","Нет 5G","Нет NFC"],
    specs:{
      display:'6.8" IPS NXTPaper, 1640×720, 60 Гц',
      processor:"MediaTek Helio G85", ram:"6 ГБ", storage:"128 ГБ",
      mainCamera:"50+2 МП, f/1.8", frontCamera:"13 МП, f/2.0",
      battery:"5010 мАч", os:"Android 14", charging:"18 Вт",
      weight:"200 г", dimensions:"170.6×78.6×8.8 мм", protection:"IP52", nfc:false, fiveG:false,
    },
    scores:{performance:38,camera:48,battery:87,display:64,design:62,value:94}, totalScore:65,
  },

  // ══════════════════════════════════════════════════════════
  // OPPO дополнительно
  // ══════════════════════════════════════════════════════════
  {
    id:"o3", slug:"oppo-find-n3-flip", name:"OPPO Find N3 Flip", brand:"OPPO",
    image:G("oppo-find-n3-flip"),
    price:74990, priceLabel:"от 74 990 ₽", year:2023, color:"#2980B9", popularity:60,
    pros:["Snap 8+ Gen 1","IP65 раскладушка","Hasselblad","50 Вт зарядка"],
    cons:["Нет 5× телефото","Тяжёлее Z Flip","Мало продаётся в РФ"],
    specs:{
      display:'6.8" AMOLED (осн), 2520×1080, 120 Гц; 3.26" (внеш)',
      processor:"Snapdragon 8+ Gen 1", ram:"12 ГБ", storage:"256 ГБ",
      mainCamera:"50+48+32 МП (Hasselblad), f/1.8", frontCamera:"32 МП, f/2.4",
      battery:"4300 мАч", os:"Android 13, ColorOS 13", charging:"50 Вт",
      weight:"198 г", dimensions:"167.9×75.8×7.3 мм (развёрнут)", protection:"IP65", nfc:true, fiveG:true,
    },
    scores:{performance:88,camera:88,battery:78,display:88,design:94,value:74}, totalScore:85,
  },

  // ══════════════════════════════════════════════════════════
  // VIVO дополнительно
  // ══════════════════════════════════════════════════════════
  {
    id:"v3", slug:"vivo-x100-ultra", name:"Vivo X100 Ultra", brand:"Vivo",
    image:G("vivo-x200-pro"),
    price:79990, priceLabel:"от 79 990 ₽", year:2024, color:"#0D47A1", popularity:62,
    pros:["300 МП телефото Zeiss","Dimensity 9300","6000 мАч","80 Вт зарядка"],
    cons:["Vivo малоизвестна в РФ","Нет Google на CN","Тяжёлый"],
    specs:{
      display:'6.8" AMOLED, 2800×1260, 1-120 Гц',
      processor:"MediaTek Dimensity 9300", ram:"16 ГБ", storage:"256 ГБ — 1 ТБ",
      mainCamera:"50+200+50 МП (Zeiss), f/1.57", frontCamera:"32 МП, f/2.0",
      battery:"6000 мАч", os:"Android 14, OriginOS 4", charging:"80 Вт / 30 Вт",
      weight:"221 г", dimensions:"165.1×75.2×9.4 мм", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:95,camera:96,battery:95,display:93,design:88,value:78}, totalScore:91,
  },

  // ══════════════════════════════════════════════════════════
  // HONOR дополнительно
  // ══════════════════════════════════════════════════════════
  {
    id:"h3", slug:"honor-magic-v3", name:"Honor Magic V3", brand:"Honor",
    image:G("honor-magic7-pro"),
    price:99990, priceLabel:"от 99 990 ₽", year:2024, color:"#37474F", isNew:true, popularity:58,
    pros:["Тончайший складной (4.35 мм)","Snap 8 Gen 3","IP68 среди раскладных","100 Вт"],
    cons:["Очень дорогой","Нет S Pen","Honor мало в РФ"],
    specs:{
      display:'7.92" OLED (осн), 2344×2156, 120 Гц',
      processor:"Snapdragon 8 Gen 3", ram:"16 ГБ", storage:"512 ГБ",
      mainCamera:"50+40+20 МП, f/1.9", frontCamera:"20 МП, f/2.2",
      battery:"5150 мАч", os:"Android 14, MagicOS 8.3", charging:"100 Вт / 66 Вт",
      weight:"226 г", dimensions:"156.8×145.4×4.35 мм (развёрнут)", protection:"IP68", nfc:true, fiveG:true,
    },
    scores:{performance:93,camera:84,battery:84,display:96,design:99,value:65}, totalScore:87,
  },

  // ══════════════════════════════════════════════════════════
  // MOTOROLA дополнительно
  // ══════════════════════════════════════════════════════════
  {
    id:"m3", slug:"motorola-razr-50-ultra", name:"Motorola Razr 50 Ultra", brand:"Motorola",
    image:G("motorola-edge-50-ultra"),
    price:74990, priceLabel:"от 74 990 ₽", year:2024, color:"#880E4F", popularity:60,
    pros:["Самый большой внешний экран (4\")", "Snap 8s Gen 3","IP48 раскладушка","Стильный"],
    cons:["Snap 8s (не топовый)","Маленькая батарея","Нет слота SD"],
    specs:{
      display:'6.9" pOLED (осн), 2640×1080, 165 Гц; 4.0" внешний',
      processor:"Snapdragon 8s Gen 3", ram:"12 ГБ", storage:"256 ГБ — 512 ГБ",
      mainCamera:"50+50 МП, f/1.7", frontCamera:"32 МП, f/2.4",
      battery:"4000 мАч", os:"Android 14", charging:"45 Вт / 15 Вт",
      weight:"189 г", dimensions:"171.3×74.0×7.1 мм (развёрнут)", protection:"IP48", nfc:true, fiveG:true,
    },
    scores:{performance:88,camera:82,battery:72,display:90,design:96,value:76}, totalScore:84,
  },
  {
    id:"m4", slug:"motorola-moto-g85", name:"Motorola Moto G85", brand:"Motorola",
    image:G("motorola-edge-50-ultra"),
    price:22990, priceLabel:"от 22 990 ₽", year:2024, color:"#4CAF50", popularity:62,
    pros:["Snap 6s Gen 3","AMOLED 120 Гц","Чистый Android","Хорошее качество за цену"],
    cons:["IP54","Камера скромная","Нет 5G"],
    specs:{
      display:'6.67" pOLED, 2400×1080, 120 Гц',
      processor:"Snapdragon 6s Gen 3", ram:"8 ГБ", storage:"256 ГБ",
      mainCamera:"50+8 МП, f/1.8", frontCamera:"32 МП, f/2.0",
      battery:"5000 мАч", os:"Android 14", charging:"33 Вт",
      weight:"170 г", dimensions:"161.9×73.1×7.6 мм", protection:"IP54", nfc:true, fiveG:false,
    },
    scores:{performance:68,camera:66,battery:87,display:83,design:78,value:93}, totalScore:78,
  },

  // ══════════════════════════════════════════════════════════
  // ASUS дополнительно
  // ══════════════════════════════════════════════════════════
  {
    id:"as3", slug:"asus-rog-phone-8-pro", name:"Asus ROG Phone 8 Pro", brand:"Asus",
    image:G("asus-rog-phone-8-pro"),
    price:84990, priceLabel:"от 84 990 ₽", year:2024, color:"#E53935", popularity:62,
    pros:["Snap 8 Gen 3","5000 мАч","IP54","65 Вт зарядка","165 Гц"],
    cons:["Геймерский стиль","Тяжёлый","Нет беспроводной зарядки"],
    specs:{
      display:'6.78" AMOLED, 2400×1080, 165 Гц',
      processor:"Snapdragon 8 Gen 3", ram:"16 ГБ", storage:"512 ГБ",
      mainCamera:"50+13+32 МП, f/1.9", frontCamera:"32 МП, f/2.0",
      battery:"5000 мАч", os:"Android 14, ROG UI 6", charging:"65 Вт",
      weight:"225 г", dimensions:"163.8×76.8×8.9 мм", protection:"IP54", nfc:true, fiveG:true,
    },
    scores:{performance:97,camera:80,battery:88,display:93,design:87,value:82}, totalScore:88,
  },

  // ══════════════════════════════════════════════════════════
  // REALME дополнительно
  // ══════════════════════════════════════════════════════════
  {
    id:"r3", slug:"realme-narzo-70-pro", name:"Realme Narzo 70 Pro", brand:"Realme",
    image:G("realme-gt6"),
    price:19990, priceLabel:"от 19 990 ₽", year:2024, color:"#27AE60", popularity:55,
    pros:["45 Вт зарядка","AMOLED экран","5G за эту цену","Хорошее качество"],
    cons:["Dimensity 7050 — бюджетный","IP54","Реклама в Realme UI"],
    specs:{
      display:'6.7" AMOLED, 2412×1080, 120 Гц',
      processor:"MediaTek Dimensity 7050", ram:"8 ГБ", storage:"128 ГБ — 256 ГБ",
      mainCamera:"50+2 МП, f/1.8", frontCamera:"16 МП, f/2.45",
      battery:"5000 мАч", os:"Android 14, Realme UI 5", charging:"45 Вт",
      weight:"185 г", dimensions:"165.0×76.0×7.9 мм", protection:"IP54", nfc:true, fiveG:true,
    },
    scores:{performance:70,camera:64,battery:86,display:82,design:74,value:96}, totalScore:78,
  },

  // ══════════════════════════════════════════════════════════
  // NOTHING дополнительно
  // ══════════════════════════════════════════════════════════
  {
    id:"n3", slug:"nothing-phone-2a-plus", name:"Nothing Phone (2a) Plus", brand:"Nothing",
    image:G("nothing-phone-2a"),
    price:36990, priceLabel:"от 36 990 ₽", year:2024, color:"#C8C8C8", popularity:66,
    pros:["Dimensity 7350 Pro","50 Вт зарядка","Glyph Interface","Чистый Android"],
    cons:["IP54","Нет 5× телефото","Средний чип"],
    specs:{
      display:'6.7" AMOLED, 2412×1080, 120 Гц',
      processor:"MediaTek Dimensity 7350 Pro", ram:"12 ГБ", storage:"256 ГБ",
      mainCamera:"50+50 МП, f/1.88", frontCamera:"50 МП, f/2.2",
      battery:"5000 мАч", os:"Android 14, Nothing OS 2.6", charging:"50 Вт",
      weight:"190 г", dimensions:"161.8×76.3×8.55 мм", protection:"IP54", nfc:true, fiveG:true,
    },
    scores:{performance:76,camera:76,battery:87,display:83,design:94,value:93}, totalScore:85,
  },

  // ══ APPLE — iPhone 12 series ═══════════════════════════
  {id:"a19",slug:"iphone-12-pro-max",name:"iPhone 12 Pro Max",brand:"Apple",image:G("apple-iphone-12-pro-max"),price:44990,priceLabel:"от 44 990 ₽",year:2020,color:"#B8860B",popularity:58,
   specs:{display:'6.7" Super Retina XDR OLED, 2778×1284, 60 Гц',processor:"Apple A14 Bionic",ram:"6 ГБ",storage:"128 ГБ — 512 ГБ",mainCamera:"12+12+12 МП, f/1.6",frontCamera:"12 МП TrueDepth, f/2.2",battery:"3687 мАч",os:"iOS 14 → 18",charging:"20 Вт / 15 Вт MagSafe",weight:"228 г",dimensions:"160.8×78.1×7.4 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:84,battery:76,display:88,design:88,value:84},totalScore:84},
  {id:"a20",slug:"iphone-12-pro",name:"iPhone 12 Pro",brand:"Apple",image:G("apple-iphone-12-pro"),price:39990,priceLabel:"от 39 990 ₽",year:2020,color:"#2E5090",popularity:56,
   specs:{display:'6.1" Super Retina XDR OLED, 2532×1170, 60 Гц',processor:"Apple A14 Bionic",ram:"6 ГБ",storage:"128 ГБ — 512 ГБ",mainCamera:"12+12+12 МП, f/2.0",frontCamera:"12 МП TrueDepth, f/2.2",battery:"2815 мАч",os:"iOS 14 → 18",charging:"20 Вт / 15 Вт MagSafe",weight:"187 г",dimensions:"146.7×71.5×7.4 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:82,battery:70,display:86,design:88,value:84},totalScore:82},
  {id:"a21",slug:"iphone-12",name:"iPhone 12",brand:"Apple",image:G("apple-iphone-12"),price:34990,priceLabel:"от 34 990 ₽",year:2020,color:"#1C1C1E",popularity:65,
   specs:{display:'6.1" Super Retina XDR OLED, 2532×1170, 60 Гц',processor:"Apple A14 Bionic",ram:"4 ГБ",storage:"64 ГБ — 256 ГБ",mainCamera:"12+12 МП, f/1.6",frontCamera:"12 МП TrueDepth, f/2.2",battery:"2815 мАч",os:"iOS 14 → 18",charging:"20 Вт / 15 Вт MagSafe",weight:"164 г",dimensions:"146.7×71.5×7.4 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:78,battery:68,display:84,design:86,value:86},totalScore:81},
  {id:"a22",slug:"iphone-12-mini",name:"iPhone 12 mini",brand:"Apple",image:G("apple-iphone-12-mini"),price:29990,priceLabel:"от 29 990 ₽",year:2020,color:"#1C1C1E",popularity:50,
   specs:{display:'5.4" Super Retina XDR OLED, 2340×1080, 60 Гц',processor:"Apple A14 Bionic",ram:"4 ГБ",storage:"64 ГБ — 256 ГБ",mainCamera:"12+12 МП, f/1.6",frontCamera:"12 МП TrueDepth, f/2.2",battery:"2227 мАч",os:"iOS 14 → 18",charging:"20 Вт / 15 Вт MagSafe",weight:"133 г",dimensions:"131.5×64.2×7.4 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:76,battery:60,display:82,design:88,value:88},totalScore:79},

  // ══ APPLE — iPhone 11 series ═══════════════════════════
  {id:"a23",slug:"iphone-11-pro-max",name:"iPhone 11 Pro Max",brand:"Apple",image:G("apple-iphone-11-pro"),price:34990,priceLabel:"от 34 990 ₽",year:2019,color:"#1D3D2F",popularity:55,
   specs:{display:'6.5" Super Retina XDR OLED, 2688×1242, 60 Гц',processor:"Apple A13 Bionic",ram:"4 ГБ",storage:"64 ГБ — 512 ГБ",mainCamera:"12+12+12 МП, f/1.8",frontCamera:"12 МП TrueDepth, f/2.2",battery:"3969 мАч",os:"iOS 13 → 17",charging:"18 Вт / Qi",weight:"226 г",dimensions:"158.0×77.8×8.1 мм",protection:"IP68",nfc:true,fiveG:false},
   scores:{performance:76,camera:80,battery:80,display:86,design:84,value:82},totalScore:81},
  {id:"a24",slug:"iphone-11-pro",name:"iPhone 11 Pro",brand:"Apple",image:G("apple-iphone-11-pro"),price:29990,priceLabel:"от 29 990 ₽",year:2019,color:"#1D3D2F",popularity:52,
   specs:{display:'5.8" Super Retina XDR OLED, 2436×1125, 60 Гц',processor:"Apple A13 Bionic",ram:"4 ГБ",storage:"64 ГБ — 512 ГБ",mainCamera:"12+12+12 МП, f/1.8",frontCamera:"12 МП TrueDepth, f/2.2",battery:"3046 мАч",os:"iOS 13 → 17",charging:"18 Вт / Qi",weight:"188 г",dimensions:"144.0×71.4×8.1 мм",protection:"IP68",nfc:true,fiveG:false},
   scores:{performance:76,camera:78,battery:68,display:84,design:84,value:82},totalScore:79},
  {id:"a25",slug:"iphone-11",name:"iPhone 11",brand:"Apple",image:G("apple-iphone-11"),price:24990,priceLabel:"от 24 990 ₽",year:2019,color:"#6E3D8C",popularity:62,
   specs:{display:'6.1" Liquid Retina IPS, 1792×828, 60 Гц',processor:"Apple A13 Bionic",ram:"4 ГБ",storage:"64 ГБ — 256 ГБ",mainCamera:"12+12 МП, f/1.8",frontCamera:"12 МП TrueDepth, f/2.2",battery:"3110 мАч",os:"iOS 13 → 17",charging:"18 Вт / Qi",weight:"194 г",dimensions:"150.9×75.7×8.3 мм",protection:"IP68",nfc:true,fiveG:false},
   scores:{performance:76,camera:74,battery:70,display:78,design:80,value:84},totalScore:77},

  // ══ APPLE — iPhone XS/XR/X ══════════════════════════════
  {id:"a26",slug:"iphone-xs-max",name:"iPhone XS Max",brand:"Apple",image:G("apple-iphone-xs-max"),price:24990,priceLabel:"от 24 990 ₽",year:2018,color:"#C0C0C0",popularity:48,
   specs:{display:'6.5" Super Retina OLED, 2688×1242, 60 Гц',processor:"Apple A12 Bionic",ram:"4 ГБ",storage:"64 ГБ — 512 ГБ",mainCamera:"12+12 МП, f/1.8",frontCamera:"7 МП TrueDepth, f/2.2",battery:"3174 мАч",os:"iOS 12 → 16",charging:"18 Вт / Qi",weight:"208 г",dimensions:"157.5×77.4×7.7 мм",protection:"IP68",nfc:true,fiveG:false},
   scores:{performance:70,camera:72,battery:70,display:84,design:82,value:78},totalScore:76},
  {id:"a27",slug:"iphone-xr",name:"iPhone XR",brand:"Apple",image:G("apple-iphone-xr"),price:19990,priceLabel:"от 19 990 ₽",year:2018,color:"#E5E5E0",popularity:55,
   specs:{display:'6.1" Liquid Retina IPS, 1792×828, 60 Гц',processor:"Apple A12 Bionic",ram:"3 ГБ",storage:"64 ГБ — 256 ГБ",mainCamera:"12 МП, f/1.8",frontCamera:"7 МП TrueDepth, f/2.2",battery:"2942 мАч",os:"iOS 12 → 16",charging:"18 Вт / Qi",weight:"194 г",dimensions:"150.9×75.7×8.3 мм",protection:"IP67",nfc:true,fiveG:false},
   scores:{performance:70,camera:66,battery:68,display:76,design:80,value:84},totalScore:74},

  // ══ APPLE — iPhone SE series ════════════════════════════
  {id:"a28",slug:"iphone-se-3rd-gen",name:"iPhone SE (2022)",brand:"Apple",image:G("apple-iphone-se-2022"),price:34990,priceLabel:"от 34 990 ₽",year:2022,color:"#E5E5E0",popularity:58,
   specs:{display:'4.7" Retina IPS, 1334×750, 60 Гц',processor:"Apple A15 Bionic",ram:"4 ГБ",storage:"64 ГБ — 256 ГБ",mainCamera:"12 МП, f/1.8",frontCamera:"7 МП, f/2.2",battery:"2018 мАч",os:"iOS 15 → 18",charging:"20 Вт / Qi",weight:"144 г",dimensions:"138.4×67.3×7.3 мм",protection:"IP67",nfc:true,fiveG:true},
   scores:{performance:80,camera:68,battery:58,display:70,design:78,value:88},totalScore:74},
  {id:"a29",slug:"iphone-se-2nd-gen",name:"iPhone SE (2020)",brand:"Apple",image:G("apple-iphone-se-2020"),price:24990,priceLabel:"от 24 990 ₽",year:2020,color:"#E5E5E0",popularity:56,
   specs:{display:'4.7" Retina IPS, 1334×750, 60 Гц',processor:"Apple A13 Bionic",ram:"3 ГБ",storage:"64 ГБ — 256 ГБ",mainCamera:"12 МП, f/1.8",frontCamera:"7 МП, f/2.2",battery:"1821 мАч",os:"iOS 13 → 17",charging:"18 Вт / Qi",weight:"148 г",dimensions:"138.4×67.3×7.3 мм",protection:"IP67",nfc:true,fiveG:false},
   scores:{performance:76,camera:66,battery:55,display:70,design:76,value:88},totalScore:72},
  {id:"a30",slug:"iphone-13-mini",name:"iPhone 13 mini",brand:"Apple",image:G("apple-iphone-13-mini"),price:34990,priceLabel:"от 34 990 ₽",year:2021,color:"#1C1C1E",popularity:48,
   specs:{display:'5.4" Super Retina XDR OLED, 2340×1080, 60 Гц',processor:"Apple A15 Bionic",ram:"4 ГБ",storage:"128 ГБ — 512 ГБ",mainCamera:"12+12 МП, f/1.6",frontCamera:"12 МП TrueDepth, f/2.2",battery:"2406 мАч",os:"iOS 15 → 18",charging:"20 Вт / 15 Вт MagSafe",weight:"141 г",dimensions:"131.5×64.2×7.65 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:80,camera:76,battery:58,display:82,design:84,value:86},totalScore:78},

  // ══ SAMSUNG — S24 series ═══════════════════════════════
  {id:"s15",slug:"samsung-galaxy-s24-ultra",name:"Samsung Galaxy S24 Ultra",brand:"Samsung",image:G("samsung-galaxy-s23-ultra-5g"),price:89990,priceLabel:"от 89 990 ₽",year:2024,color:"#2C2C2E",popularity:90,
   specs:{display:'6.8" Dynamic AMOLED 2X, 3088×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 3",ram:"12 ГБ",storage:"256 ГБ — 1 ТБ",mainCamera:"200+50+50+10 МП, f/1.7",frontCamera:"12 МП, f/2.2",battery:"5000 мАч",os:"Android 14, One UI 6.1",charging:"45 Вт / 15 Вт",weight:"232 г",dimensions:"162.3×79.0×8.6 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:93,camera:97,battery:86,display:97,design:93,value:78},totalScore:91},
  {id:"s16",slug:"samsung-galaxy-s24-plus",name:"Samsung Galaxy S24+",brand:"Samsung",image:G("samsung-galaxy-s23-ultra-5g"),price:74990,priceLabel:"от 74 990 ₽",year:2024,color:"#C9B99A",popularity:82,
   specs:{display:'6.7" Dynamic AMOLED 2X, 3088×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 3",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+10+12 МП, f/1.8",frontCamera:"12 МП, f/2.2",battery:"4900 мАч",os:"Android 14, One UI 6.1",charging:"45 Вт / 15 Вт",weight:"196 г",dimensions:"158.5×75.9×7.7 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:93,camera:88,battery:85,display:94,design:90,value:80},totalScore:88},
  {id:"s17",slug:"samsung-galaxy-s24",name:"Samsung Galaxy S24",brand:"Samsung",image:G("samsung-galaxy-s22-ultra-5g"),price:59990,priceLabel:"от 59 990 ₽",year:2024,color:"#3A3B3C",popularity:84,
   specs:{display:'6.2" Dynamic AMOLED 2X, 2340×1080, 1-120 Гц',processor:"Snapdragon 8 Gen 3",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+10+12 МП, f/1.8",frontCamera:"12 МП, f/2.2",battery:"4000 мАч",os:"Android 14, One UI 6.1",charging:"25 Вт / 15 Вт",weight:"167 г",dimensions:"147.0×70.6×7.6 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:93,camera:85,battery:75,display:90,design:88,value:82},totalScore:86},

  // ══ SAMSUNG — S22 series ═══════════════════════════════
  {id:"s18",slug:"samsung-galaxy-s22-ultra",name:"Samsung Galaxy S22 Ultra",brand:"Samsung",image:G("samsung-galaxy-s22-ultra-5g"),price:59990,priceLabel:"от 59 990 ₽",year:2022,color:"#1C1C1E",popularity:78,
   specs:{display:'6.8" Dynamic AMOLED 2X, 3088×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 1",ram:"8 ГБ",storage:"128 ГБ — 1 ТБ",mainCamera:"108+12+10+10 МП, f/1.8",frontCamera:"40 МП, f/2.2",battery:"5000 мАч",os:"Android 12 → 15",charging:"45 Вт / 15 Вт",weight:"228 г",dimensions:"163.3×77.9×8.9 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:86,camera:90,battery:84,display:94,design:88,value:80},totalScore:87},
  {id:"s19",slug:"samsung-galaxy-s22-plus",name:"Samsung Galaxy S22+",brand:"Samsung",image:G("samsung-galaxy-s22-ultra-5g"),price:44990,priceLabel:"от 44 990 ₽",year:2022,color:"#2C3E50",popularity:68,
   specs:{display:'6.6" Dynamic AMOLED 2X, 2340×1080, 1-120 Гц',processor:"Snapdragon 8 Gen 1",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+12+10 МП, f/1.8",frontCamera:"10 МП, f/2.2",battery:"4500 мАч",os:"Android 12 → 15",charging:"45 Вт / 15 Вт",weight:"195 г",dimensions:"157.4×75.8×7.6 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:86,camera:84,battery:80,display:90,design:86,value:80},totalScore:84},
  {id:"s20",slug:"samsung-galaxy-s22",name:"Samsung Galaxy S22",brand:"Samsung",image:G("samsung-galaxy-s22-ultra-5g"),price:34990,priceLabel:"от 34 990 ₽",year:2022,color:"#B0C4DE",popularity:70,
   specs:{display:'6.1" Dynamic AMOLED 2X, 2340×1080, 1-120 Гц',processor:"Snapdragon 8 Gen 1",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+12+10 МП, f/1.8",frontCamera:"10 МП, f/2.2",battery:"3700 мАч",os:"Android 12 → 15",charging:"25 Вт / 15 Вт",weight:"167 г",dimensions:"146.0×70.6×7.6 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:86,camera:82,battery:70,display:88,design:86,value:82},totalScore:82},

  // ══ SAMSUNG — S21 series ═══════════════════════════════
  {id:"s21",slug:"samsung-galaxy-s21-ultra",name:"Samsung Galaxy S21 Ultra",brand:"Samsung",image:G("samsung-galaxy-s22-ultra-5g"),price:44990,priceLabel:"от 44 990 ₽",year:2021,color:"#1C1C1E",popularity:74,
   specs:{display:'6.8" Dynamic AMOLED 2X, 3200×1440, 10-120 Гц',processor:"Snapdragon 888",ram:"12 ГБ",storage:"128 ГБ — 512 ГБ",mainCamera:"108+12+10+10 МП, f/1.8",frontCamera:"40 МП, f/2.2",battery:"5000 мАч",os:"Android 11 → 15",charging:"25 Вт / 15 Вт",weight:"228 г",dimensions:"165.1×75.6×8.9 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:88,battery:84,display:93,design:86,value:78},totalScore:85},
  {id:"s22x",slug:"samsung-galaxy-s21-plus",name:"Samsung Galaxy S21+",brand:"Samsung",image:G("samsung-galaxy-s22-ultra-5g"),price:34990,priceLabel:"от 34 990 ₽",year:2021,color:"#4A3728",popularity:64,
   specs:{display:'6.7" Dynamic AMOLED 2X, 2400×1080, 48-120 Гц',processor:"Snapdragon 888",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"12+64+12 МП, f/1.8",frontCamera:"10 МП, f/2.2",battery:"4800 мАч",os:"Android 11 → 15",charging:"25 Вт / 15 Вт",weight:"200 г",dimensions:"161.5×75.6×7.8 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:80,battery:82,display:90,design:84,value:80},totalScore:83},
  {id:"s23x",slug:"samsung-galaxy-s21",name:"Samsung Galaxy S21",brand:"Samsung",image:G("samsung-galaxy-s22-ultra-5g"),price:24990,priceLabel:"от 24 990 ₽",year:2021,color:"#6C3483",popularity:68,
   specs:{display:'6.2" Dynamic AMOLED 2X, 2400×1080, 48-120 Гц',processor:"Snapdragon 888",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"12+64+12 МП, f/1.8",frontCamera:"10 МП, f/2.2",battery:"4000 мАч",os:"Android 11 → 15",charging:"25 Вт / 15 Вт",weight:"169 г",dimensions:"151.7×71.2×7.9 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:82,camera:78,battery:74,display:86,design:82,value:82},totalScore:81},

  // ══ SAMSUNG — Z Fold/Flip 4 и 5 ════════════════════════
  {id:"s24x",slug:"samsung-galaxy-z-fold-5",name:"Samsung Galaxy Z Fold 5",brand:"Samsung",image:G("samsung-galaxy-z-fold5"),price:99990,priceLabel:"от 99 990 ₽",year:2023,color:"#2C2C2E",popularity:68,
   specs:{display:'7.6" Dynamic AMOLED (осн), 2176×1812, 120 Гц',processor:"Snapdragon 8 Gen 2",ram:"12 ГБ",storage:"256 ГБ — 1 ТБ",mainCamera:"50+12+10 МП, f/1.8",frontCamera:"10 МП, f/2.2",battery:"4400 мАч",os:"Android 13 → 15",charging:"25 Вт / 15 Вт",weight:"253 г",dimensions:"154.9×129.9×6.1 мм (развёрнут)",protection:"IPX8",nfc:true,fiveG:true},
   scores:{performance:90,camera:82,battery:72,display:94,design:97,value:64},totalScore:83},
  {id:"s25x",slug:"samsung-galaxy-z-flip-5",name:"Samsung Galaxy Z Flip 5",brand:"Samsung",image:G("samsung-galaxy-z-flip6"),price:64990,priceLabel:"от 64 990 ₽",year:2023,color:"#FDCB6E",popularity:65,
   specs:{display:'6.7" Dynamic AMOLED 2X, 2640×1080, 120 Гц; 3.4\" внешний',processor:"Snapdragon 8 Gen 2",ram:"8 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"12+12 МП, f/1.8",frontCamera:"10 МП, f/2.2",battery:"3700 мАч",os:"Android 13 → 15",charging:"25 Вт / 15 Вт",weight:"187 г",dimensions:"165.1×71.9×6.9 мм (развёрнут)",protection:"IPX8",nfc:true,fiveG:true},
   scores:{performance:90,camera:78,battery:70,display:88,design:96,value:70},totalScore:82},

  // ══ SAMSUNG — A series ════════════════════════════════
  {id:"s26x",slug:"samsung-galaxy-a54",name:"Samsung Galaxy A54",brand:"Samsung",image:G("samsung-galaxy-s23-ultra-5g"),price:34990,priceLabel:"от 34 990 ₽",year:2023,color:"#FFFFFF",popularity:74,
   specs:{display:'6.4" Super AMOLED, 2340×1080, 120 Гц',processor:"Exynos 1380",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+12+5 МП, f/1.8",frontCamera:"32 МП, f/2.2",battery:"5000 мАч",os:"Android 13 → 16",charging:"25 Вт",weight:"202 г",dimensions:"158.2×76.7×8.2 мм",protection:"IP67",nfc:true,fiveG:true},
   scores:{performance:66,camera:74,battery:86,display:83,design:78,value:90},totalScore:80},
  {id:"s27x",slug:"samsung-galaxy-a53",name:"Samsung Galaxy A53",brand:"Samsung",image:G("samsung-galaxy-a54"),price:24990,priceLabel:"от 24 990 ₽",year:2022,color:"#4B0082",popularity:68,
   specs:{display:'6.5" Super AMOLED, 2400×1080, 120 Гц',processor:"Exynos 1280",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"64+12+5+5 МП, f/1.8",frontCamera:"32 МП, f/2.2",battery:"5000 мАч",os:"Android 12 → 15",charging:"25 Вт",weight:"189 г",dimensions:"159.6×74.8×8.1 мм",protection:"IP67",nfc:true,fiveG:true},
   scores:{performance:62,camera:72,battery:86,display:82,design:76,value:88},totalScore:78},
  {id:"s28x",slug:"samsung-galaxy-a34",name:"Samsung Galaxy A34",brand:"Samsung",image:G("samsung-galaxy-a34"),price:26990,priceLabel:"от 26 990 ₽",year:2023,color:"#8B0000",popularity:65,
   specs:{display:'6.6" Super AMOLED, 2340×1080, 120 Гц',processor:"MediaTek Dimensity 1080",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"48+8+5 МП, f/1.8",frontCamera:"13 МП, f/2.2",battery:"5000 мАч",os:"Android 13 → 16",charging:"25 Вт",weight:"199 г",dimensions:"161.3×78.1×8.2 мм",protection:"IP67",nfc:true,fiveG:true},
   scores:{performance:68,camera:70,battery:86,display:82,design:76,value:90},totalScore:79},
  {id:"s29x",slug:"samsung-galaxy-a25",name:"Samsung Galaxy A25",brand:"Samsung",image:G("samsung-galaxy-a34"),price:19990,priceLabel:"от 19 990 ₽",year:2023,color:"#191970",popularity:62,
   specs:{display:'6.5" Super AMOLED, 2340×1080, 120 Гц',processor:"Exynos 1280",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+8+2 МП, f/1.8",frontCamera:"13 МП, f/2.2",battery:"5000 мАч",os:"Android 14, One UI 6.1",charging:"25 Вт",weight:"197 г",dimensions:"160.1×76.5×7.8 мм",protection:"IP67",nfc:true,fiveG:true},
   scores:{performance:62,camera:66,battery:86,display:82,design:74,value:92},totalScore:77},
  {id:"s30x",slug:"samsung-galaxy-a15-5g",name:"Samsung Galaxy A15 5G",brand:"Samsung",image:G("samsung-galaxy-a55"),price:15990,priceLabel:"от 15 990 ₽",year:2023,color:"#4A4A4A",popularity:60,
   specs:{display:'6.5" Super AMOLED, 2340×1080, 90 Гц',processor:"MediaTek Dimensity 6100+",ram:"4 ГБ",storage:"128 ГБ",mainCamera:"50+5+2 МП, f/1.8",frontCamera:"13 МП, f/2.0",battery:"5000 мАч",os:"Android 14",charging:"25 Вт",weight:"200 г",dimensions:"160.1×76.8×8.4 мм",protection:"IP54",nfc:false,fiveG:true},
   scores:{performance:58,camera:60,battery:86,display:76,design:68,value:92},totalScore:73},
  {id:"s31x",slug:"samsung-galaxy-a14",name:"Samsung Galaxy A14",brand:"Samsung",image:G("samsung-galaxy-s23-ultra-5g"),price:12990,priceLabel:"от 12 990 ₽",year:2023,color:"#2C3E50",popularity:58,
   specs:{display:'6.6" PLS IPS, 2408×1080, 90 Гц',processor:"Exynos 850",ram:"4 ГБ",storage:"64 ГБ — 128 ГБ",mainCamera:"50+5+2 МП, f/1.8",frontCamera:"13 МП, f/2.0",battery:"5000 мАч",os:"Android 13",charging:"15 Вт",weight:"201 г",dimensions:"167.7×78.6×9.1 мм",protection:"IP54",nfc:false,fiveG:false},
   scores:{performance:48,camera:58,battery:86,display:70,design:64,value:92},totalScore:70},

  // ══ XIAOMI — полная линейка ════════════════════════════
  {id:"x7",slug:"xiaomi-14-ultra",name:"Xiaomi 14 Ultra",brand:"Xiaomi",image:G("xiaomi-14"),price:89990,priceLabel:"от 89 990 ₽",year:2024,color:"#2C3E50",popularity:82,
   specs:{display:'6.73" LTPO AMOLED, 3200×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 3",ram:"16 ГБ",storage:"256 ГБ — 1 ТБ",mainCamera:"50+200+50+50 МП (Leica), f/1.63",frontCamera:"32 МП, f/2.0",battery:"5000 мАч",os:"Android 14, HyperOS",charging:"90 Вт / 80 Вт",weight:"222 г",dimensions:"161.4×75.3×9.35 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:93,camera:97,battery:87,display:96,design:90,value:79},totalScore:90},
  {id:"x8",slug:"xiaomi-13t-pro",name:"Xiaomi 13T Pro",brand:"Xiaomi",image:G("xiaomi-14"),price:49990,priceLabel:"от 49 990 ₽",year:2023,color:"#1B3A4B",popularity:74,
   specs:{display:'6.67" AMOLED, 2712×1220, 1-144 Гц',processor:"MediaTek Dimensity 9200+",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+50+12 МП (Leica), f/1.9",frontCamera:"20 МП, f/2.2",battery:"5000 мАч",os:"Android 13, HyperOS",charging:"120 Вт",weight:"206 г",dimensions:"162.2×75.7×8.5 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:88,camera:88,battery:88,display:90,design:82,value:87},totalScore:87},
  {id:"x9",slug:"xiaomi-13t",name:"Xiaomi 13T",brand:"Xiaomi",image:G("xiaomi-14"),price:34990,priceLabel:"от 34 990 ₽",year:2023,color:"#27AE60",popularity:70,
   specs:{display:'6.67" AMOLED, 2712×1220, 144 Гц',processor:"MediaTek Dimensity 8200 Ultra",ram:"8 ГБ",storage:"256 ГБ",mainCamera:"50+12+50 МП (Leica), f/1.9",frontCamera:"20 МП, f/2.2",battery:"5000 мАч",os:"Android 13, HyperOS",charging:"67 Вт",weight:"193 г",dimensions:"162.2×75.7×8.5 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:78,camera:82,battery:87,display:88,design:80,value:90},totalScore:84},
  {id:"x10",slug:"xiaomi-13-ultra",name:"Xiaomi 13 Ultra",brand:"Xiaomi",image:G("xiaomi-13-ultra"),price:74990,priceLabel:"от 74 990 ₽",year:2023,color:"#1A1A2E",popularity:76,
   specs:{display:'6.73" LTPO AMOLED, 3200×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 2",ram:"12 ГБ",storage:"256 ГБ — 1 ТБ",mainCamera:"50+200+50+50 МП (Leica), f/1.9",frontCamera:"32 МП, f/2.0",battery:"5000 мАч",os:"Android 13, HyperOS",charging:"90 Вт / 80 Вт",weight:"227 г",dimensions:"163.2×74.6×9.06 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:90,camera:96,battery:87,display:95,design:88,value:78},totalScore:89},
  {id:"x11",slug:"xiaomi-13-pro",name:"Xiaomi 13 Pro",brand:"Xiaomi",image:G("xiaomi-15"),price:64990,priceLabel:"от 64 990 ₽",year:2023,color:"#2C3E50",popularity:72,
   specs:{display:'6.73" LTPO AMOLED, 3200×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 2",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+50+50 МП (Leica), f/1.9",frontCamera:"32 МП, f/2.0",battery:"4820 мАч",os:"Android 13, MIUI 14",charging:"120 Вт / 50 Вт",weight:"210 г",dimensions:"162.9×74.6×8.38 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:90,camera:94,battery:84,display:94,design:88,value:80},totalScore:88},
  {id:"x12",slug:"xiaomi-13",name:"Xiaomi 13",brand:"Xiaomi",image:G("xiaomi-15"),price:54990,priceLabel:"от 54 990 ₽",year:2023,color:"#27AE60",popularity:70,
   specs:{display:'6.36" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 8 Gen 2",ram:"8 ГБ",storage:"128 ГБ — 512 ГБ",mainCamera:"54+10+12 МП (Leica), f/1.8",frontCamera:"32 МП, f/2.0",battery:"4500 мАч",os:"Android 13, MIUI 14",charging:"67 Вт / 50 Вт",weight:"185 г",dimensions:"152.8×71.5×8.0 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:90,camera:88,battery:82,display:90,design:88,value:83},totalScore:87},
  {id:"x13",slug:"xiaomi-12-pro",name:"Xiaomi 12 Pro",brand:"Xiaomi",image:G("xiaomi-14"),price:44990,priceLabel:"от 44 990 ₽",year:2022,color:"#1A1A2E",popularity:66,
   specs:{display:'6.73" LTPO AMOLED, 3200×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 1",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+50+50 МП, f/1.9",frontCamera:"32 МП, f/2.0",battery:"4600 мАч",os:"Android 12, MIUI 13",charging:"120 Вт / 50 Вт",weight:"204 г",dimensions:"163.6×74.6×8.16 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:86,camera:88,battery:82,display:93,design:86,value:80},totalScore:86},
  {id:"x14",slug:"xiaomi-12",name:"Xiaomi 12",brand:"Xiaomi",image:G("xiaomi-14"),price:34990,priceLabel:"от 34 990 ₽",year:2022,color:"#3498DB",popularity:62,
   specs:{display:'6.28" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 8 Gen 1",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+13+5 МП, f/1.88",frontCamera:"32 МП, f/2.0",battery:"4500 мАч",os:"Android 12, MIUI 13",charging:"67 Вт / 50 Вт",weight:"180 г",dimensions:"152.7×69.9×8.16 мм",protection:"IP53",nfc:true,fiveG:true},
   scores:{performance:86,camera:82,battery:80,display:88,design:84,value:82},totalScore:84},

  // ══ REDMI Note series ═════════════════════════════════
  {id:"rn1",slug:"redmi-note-13-pro-plus",name:"Redmi Note 13 Pro+",brand:"Xiaomi",image:G("xiaomi-14"),price:27990,priceLabel:"от 27 990 ₽",year:2023,color:"#2C3E50",popularity:78,
   specs:{display:'6.67" AMOLED, 2712×1220, 120 Гц',processor:"MediaTek Dimensity 7200 Ultra",ram:"8 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"200+8+2 МП, f/1.65",frontCamera:"16 МП, f/2.4",battery:"5000 мАч",os:"Android 13, MIUI 14",charging:"120 Вт",weight:"204 г",dimensions:"161.4×74.2×8.9 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:68,camera:80,battery:90,display:86,design:80,value:95},totalScore:83},
  {id:"rn2",slug:"redmi-note-13-pro",name:"Redmi Note 13 Pro",brand:"Xiaomi",image:G("xiaomi-14"),price:21990,priceLabel:"от 21 990 ₽",year:2023,color:"#8E44AD",popularity:74,
   specs:{display:'6.67" AMOLED, 2712×1220, 120 Гц',processor:"Snapdragon 7s Gen 2",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"200+8+2 МП, f/1.65",frontCamera:"16 МП, f/2.4",battery:"5100 мАч",os:"Android 13, MIUI 14",charging:"67 Вт",weight:"187 г",dimensions:"161.2×74.2×7.98 мм",protection:"IP54",nfc:true,fiveG:true},
   scores:{performance:70,camera:78,battery:90,display:86,design:78,value:94},totalScore:83},
  {id:"rn3",slug:"redmi-note-13",name:"Redmi Note 13",brand:"Xiaomi",image:G("xiaomi-15"),price:14990,priceLabel:"от 14 990 ₽",year:2023,color:"#27AE60",popularity:70,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 685",ram:"6 ГБ",storage:"128 ГБ",mainCamera:"108+8+2 МП, f/1.75",frontCamera:"16 МП, f/2.4",battery:"5000 мАч",os:"Android 13, MIUI 14",charging:"33 Вт",weight:"173 г",dimensions:"161.1×75.0×7.6 мм",protection:"IP54",nfc:false,fiveG:false},
   scores:{performance:56,camera:66,battery:86,display:82,design:72,value:94},totalScore:76},
  {id:"rn4",slug:"redmi-note-12-pro-plus",name:"Redmi Note 12 Pro+",brand:"Xiaomi",image:G("xiaomi-14"),price:19990,priceLabel:"от 19 990 ₽",year:2022,color:"#6C5CE7",popularity:68,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"MediaTek Dimensity 1080",ram:"8 ГБ",storage:"256 ГБ",mainCamera:"200+8+2 МП, f/1.65",frontCamera:"16 МП, f/2.4",battery:"5000 мАч",os:"Android 12, MIUI 13",charging:"120 Вт",weight:"208 г",dimensions:"162.9×76.0×8.7 мм",protection:"IP53",nfc:true,fiveG:true},
   scores:{performance:68,camera:76,battery:88,display:84,design:76,value:92},totalScore:81},
  {id:"rn5",slug:"redmi-note-12",name:"Redmi Note 12",brand:"Xiaomi",image:G("xiaomi-15"),price:12990,priceLabel:"от 12 990 ₽",year:2022,color:"#3498DB",popularity:72,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 685",ram:"4 ГБ",storage:"128 ГБ",mainCamera:"50+8+2 МП, f/1.88",frontCamera:"13 МП, f/2.5",battery:"5000 мАч",os:"Android 12, MIUI 13",charging:"33 Вт",weight:"188 г",dimensions:"167.7×77.5×7.98 мм",protection:"IP53",nfc:false,fiveG:false},
   scores:{performance:56,camera:62,battery:86,display:82,design:70,value:94},totalScore:75},

  // ══ REDMI ════════════════════════════════════════════
  {id:"rd1",slug:"redmi-13c",name:"Redmi 13C",brand:"Xiaomi",image:G("xiaomi-15"),price:9990,priceLabel:"от 9 990 ₽",year:2023,color:"#2ECC71",popularity:60,
   specs:{display:'6.74" IPS, 1600×720, 90 Гц',processor:"MediaTek Helio G85",ram:"4 ГБ",storage:"128 ГБ",mainCamera:"50+2+2 МП, f/1.8",frontCamera:"8 МП, f/2.0",battery:"5000 мАч",os:"Android 13, MIUI 14",charging:"18 Вт",weight:"192 г",dimensions:"168.0×77.8×8.1 мм",protection:"IP52",nfc:false,fiveG:false},
   scores:{performance:42,camera:52,battery:86,display:62,design:62,value:96},totalScore:67},
  {id:"rd2",slug:"redmi-12",name:"Redmi 12",brand:"Xiaomi",image:G("xiaomi-15"),price:11990,priceLabel:"от 11 990 ₽",year:2023,color:"#E74C3C",popularity:62,
   specs:{display:'6.79" IPS, 2460×1080, 90 Гц',processor:"MediaTek Helio G88",ram:"4 ГБ",storage:"128 ГБ",mainCamera:"50+8+2 МП, f/1.8",frontCamera:"8 МП, f/2.0",battery:"5000 мАч",os:"Android 13, MIUI 14",charging:"18 Вт",weight:"198 г",dimensions:"168.6×76.3×8.2 мм",protection:"IP53",nfc:false,fiveG:false},
   scores:{performance:48,camera:56,battery:86,display:70,design:66,value:94},totalScore:70},

  // ══ POCO ─── полная линейка ═══════════════════════════
  {id:"pc1",slug:"poco-x6",name:"POCO X6",brand:"POCO",image:G("xiaomi-poco-x6"),price:24990,priceLabel:"от 24 990 ₽",year:2024,color:"#1A1A2E",popularity:66,
   specs:{display:'6.67" AMOLED, 2712×1220, 120 Гц',processor:"Snapdragon 7s Gen 2",ram:"8 ГБ",storage:"256 ГБ",mainCamera:"64+8+2 МП, f/1.73",frontCamera:"16 МП, f/2.45",battery:"5100 мАч",os:"Android 14, HyperOS",charging:"67 Вт",weight:"181 г",dimensions:"161.3×74.3×7.98 мм",protection:"IP54",nfc:true,fiveG:true},
   scores:{performance:72,camera:68,battery:88,display:84,design:78,value:94},totalScore:81},
  {id:"pc2",slug:"poco-x5-pro",name:"POCO X5 Pro",brand:"POCO",image:G("xiaomi-poco-x6-pro"),price:19990,priceLabel:"от 19 990 ₽",year:2023,color:"#1A1A2E",popularity:68,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 778G",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"108+8+2 МП, f/1.75",frontCamera:"16 МП, f/2.45",battery:"5000 мАч",os:"Android 12, MIUI 14",charging:"67 Вт",weight:"181 г",dimensions:"162.9×76.0×7.9 мм",protection:"IP53",nfc:false,fiveG:true},
   scores:{performance:72,camera:70,battery:87,display:84,design:76,value:92},totalScore:80},
  {id:"pc3",slug:"poco-x5",name:"POCO X5",brand:"POCO",image:G("xiaomi-poco-x6"),price:16990,priceLabel:"от 16 990 ₽",year:2023,color:"#3498DB",popularity:62,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 695 5G",ram:"6 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"48+8+2 МП, f/1.79",frontCamera:"13 МП, f/2.45",battery:"5000 мАч",os:"Android 12, MIUI 14",charging:"33 Вт",weight:"189 г",dimensions:"165.9×76.2×7.98 мм",protection:"IP53",nfc:false,fiveG:true},
   scores:{performance:60,camera:62,battery:86,display:82,design:72,value:92},totalScore:76},
  {id:"pc4",slug:"poco-f5-pro",name:"POCO F5 Pro",brand:"POCO",image:G("xiaomi-poco-f6-pro"),price:36990,priceLabel:"от 36 990 ₽",year:2023,color:"#FFD700",popularity:70,
   specs:{display:'6.67" LTPO AMOLED, 3200×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 2",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"64+8+2 МП, f/1.73",frontCamera:"16 МП, f/2.45",battery:"5160 мАч",os:"Android 13, MIUI 14",charging:"67 Вт",weight:"204 г",dimensions:"162.8×75.4×8.6 мм",protection:"IP53",nfc:true,fiveG:true},
   scores:{performance:90,camera:72,battery:88,display:90,design:80,value:88},totalScore:85},
  {id:"pc5",slug:"poco-f5",name:"POCO F5",brand:"POCO",image:G("xiaomi-poco-f6"),price:27990,priceLabel:"от 27 990 ₽",year:2023,color:"#E74C3C",popularity:68,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 7+ Gen 2",ram:"8 ГБ",storage:"256 ГБ",mainCamera:"64+8+2 МП, f/1.79",frontCamera:"16 МП, f/2.45",battery:"5000 мАч",os:"Android 13, MIUI 14",charging:"67 Вт",weight:"181 г",dimensions:"162.9×75.8×7.9 мм",protection:"IP54",nfc:true,fiveG:true},
   scores:{performance:82,camera:70,battery:87,display:84,design:78,value:90},totalScore:82},
  {id:"pc6",slug:"poco-m6-pro",name:"POCO M6 Pro",brand:"POCO",image:G("xiaomi-poco-m6-pro"),price:17990,priceLabel:"от 17 990 ₽",year:2024,color:"#8A2BE2",popularity:58,
   specs:{display:'6.67" AMOLED, 2712×1220, 120 Гц',processor:"MediaTek Helio G99 Ultra",ram:"8 ГБ",storage:"256 ГБ",mainCamera:"64+8+2 МП, f/1.79",frontCamera:"16 МП, f/2.45",battery:"5000 мАч",os:"Android 14, HyperOS",charging:"67 Вт",weight:"181 г",dimensions:"161.1×75.1×7.9 мм",protection:"IP54",nfc:false,fiveG:false},
   scores:{performance:64,camera:64,battery:87,display:84,design:76,value:94},totalScore:78},
  {id:"pc7",slug:"poco-m5s",name:"POCO M5s",brand:"POCO",image:G("xiaomi-poco-m6-pro"),price:12990,priceLabel:"от 12 990 ₽",year:2022,color:"#2ECC71",popularity:55,
   specs:{display:'6.43" AMOLED, 2400×1080, 60 Гц',processor:"MediaTek Helio G95",ram:"4 ГБ",storage:"64 ГБ — 128 ГБ",mainCamera:"64+8+5+2 МП, f/1.9",frontCamera:"13 МП, f/2.45",battery:"5000 мАч",os:"Android 12, MIUI 13",charging:"33 Вт",weight:"178 г",dimensions:"160.5×74.5×8.1 мм",protection:"IP52",nfc:false,fiveG:false},
   scores:{performance:58,camera:62,battery:86,display:80,design:70,value:92},totalScore:75},
  {id:"pc8",slug:"poco-c65",name:"POCO C65",brand:"POCO",image:G("xiaomi-poco-m6-pro"),price:8990,priceLabel:"от 8 990 ₽",year:2023,color:"#FF6B35",popularity:50,
   specs:{display:'6.74" IPS, 1600×720, 90 Гц',processor:"MediaTek Helio G85",ram:"6 ГБ",storage:"128 ГБ",mainCamera:"50+2+2 МП, f/1.8",frontCamera:"8 МП, f/2.0",battery:"5000 мАч",os:"Android 13, HyperOS",charging:"18 Вт",weight:"193 г",dimensions:"168.7×77.8×8.1 мм",protection:"IP52",nfc:false,fiveG:false},
   scores:{performance:42,camera:50,battery:86,display:62,design:60,value:96},totalScore:66},

  // ══ ONEPLUS — дополнительно ════════════════════════════
  {id:"op4",slug:"oneplus-12r",name:"OnePlus 12R",brand:"OnePlus",image:G("oneplus-13"),price:44990,priceLabel:"от 44 990 ₽",year:2024,color:"#2C3E50",popularity:68,
   specs:{display:'6.78" LTPO AMOLED, 2780×1264, 1-120 Гц',processor:"Snapdragon 8 Gen 2",ram:"16 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+8+2 МП, f/1.8",frontCamera:"16 МП, f/2.4",battery:"5500 мАч",os:"Android 14, OxygenOS 14",charging:"80 Вт",weight:"207 г",dimensions:"163.3×75.4×8.8 мм",protection:"IP65",nfc:true,fiveG:true},
   scores:{performance:90,camera:76,battery:90,display:88,design:82,value:88},totalScore:86},
  {id:"op5",slug:"oneplus-12",name:"OnePlus 12",brand:"OnePlus",image:G("oneplus-13"),price:59990,priceLabel:"от 59 990 ₽",year:2024,color:"#1B2A4A",popularity:74,
   specs:{display:'6.82" LTPO AMOLED, 3168×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 3",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+64+48 МП (Hasselblad), f/1.6",frontCamera:"32 МП, f/2.4",battery:"5400 мАч",os:"Android 14, OxygenOS 14",charging:"100 Вт / 50 Вт",weight:"220 г",dimensions:"164.3×75.8×9.15 мм",protection:"IP65",nfc:true,fiveG:true},
   scores:{performance:93,camera:88,battery:92,display:94,design:88,value:86},totalScore:90},
  {id:"op6",slug:"oneplus-11",name:"OnePlus 11",brand:"OnePlus",image:G("oneplus-11"),price:49990,priceLabel:"от 49 990 ₽",year:2023,color:"#1B2A4A",popularity:72,
   specs:{display:'6.7" LTPO AMOLED, 3216×1440, 1-120 Гц',processor:"Snapdragon 8 Gen 2",ram:"16 ГБ",storage:"256 ГБ",mainCamera:"50+32+48 МП (Hasselblad), f/1.8",frontCamera:"16 МП, f/2.4",battery:"5000 мАч",os:"Android 13, OxygenOS 13",charging:"100 Вт",weight:"205 г",dimensions:"163.1×74.1×8.53 мм",protection:"IP64",nfc:true,fiveG:true},
   scores:{performance:90,camera:86,battery:87,display:92,design:84,value:86},totalScore:88},
  {id:"op7",slug:"oneplus-nord-ce-4",name:"OnePlus Nord CE 4",brand:"OnePlus",image:G("oneplus-11"),price:27990,priceLabel:"от 27 990 ₽",year:2024,color:"#3498DB",popularity:62,
   specs:{display:'6.67" AMOLED, 2400×1080, 120 Гц',processor:"Snapdragon 7 Gen 3",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+2 МП, f/1.88",frontCamera:"16 МП, f/2.4",battery:"5500 мАч",os:"Android 14, OxygenOS 14",charging:"100 Вт",weight:"167 г",dimensions:"162.0×75.2×7.8 мм",protection:"IP65",nfc:true,fiveG:true},
   scores:{performance:78,camera:68,battery:90,display:82,design:78,value:92},totalScore:81},
  {id:"op8",slug:"oneplus-nord-3",name:"OnePlus Nord 3",brand:"OnePlus",image:G("oneplus-11"),price:32990,priceLabel:"от 32 990 ₽",year:2023,color:"#6C5CE7",popularity:64,
   specs:{display:'6.74" AMOLED, 2772×1240, 120 Гц',processor:"MediaTek Dimensity 9000",ram:"16 ГБ",storage:"256 ГБ",mainCamera:"50+8+2 МП, f/1.88",frontCamera:"16 МП, f/2.4",battery:"5000 мАч",os:"Android 13, OxygenOS 13",charging:"80 Вт",weight:"193 г",dimensions:"162.4×74.4×8.1 мм",protection:"IP54",nfc:true,fiveG:true},
   scores:{performance:84,camera:74,battery:87,display:86,design:80,value:88},totalScore:83},

  // ══ GOOGLE PIXEL — дополнительно ═════════════════════
  {id:"gp1",slug:"google-pixel-9-pro-fold",name:"Google Pixel 9 Pro Fold",brand:"Google",image:G("google-pixel-9-"),price:154990,priceLabel:"от 154 990 ₽",year:2024,color:"#2E4057",popularity:58,
   specs:{display:'8.0\" OLED осн, 2076×2152, 120 Гц; 6.3\" внешний',processor:"Google Tensor G4",ram:"16 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"48+10.5+10.8 МП, f/1.7",frontCamera:"10 МП, f/2.2",battery:"4650 мАч",os:"Android 15",charging:"21 Вт / 21 Вт",weight:"257 г",dimensions:"155.2×150.2×5.1 мм (развёрнут)",protection:"IPX8",nfc:true,fiveG:true},
   scores:{performance:83,camera:90,battery:79,display:96,design:97,value:60},totalScore:84},
  {id:"gp2",slug:"google-pixel-8-pro",name:"Google Pixel 8 Pro",brand:"Google",image:G("google-pixel-8-pro"),price:79990,priceLabel:"от 79 990 ₽",year:2023,color:"#4A5568",popularity:75,
   specs:{display:'6.7\" LTPO OLED, 2992×1344, 1-120 Гц',processor:"Google Tensor G3",ram:"12 ГБ",storage:"128 ГБ — 1 ТБ",mainCamera:"50+48+48 МП, f/1.68",frontCamera:"10.5 МП, f/2.2",battery:"5050 мАч",os:"Android 14 → 15",charging:"30 Вт / 23 Вт",weight:"213 г",dimensions:"162.6×76.5×8.8 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:78,camera:96,battery:86,display:94,design:88,value:80},totalScore:87},
  {id:"gp3",slug:"google-pixel-8",name:"Google Pixel 8",brand:"Google",image:G("google-pixel-8"),price:59990,priceLabel:"от 59 990 ₽",year:2023,color:"#E53E3E",popularity:70,
   specs:{display:'6.2\" OLED, 2400×1080, 60-120 Гц',processor:"Google Tensor G3",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+12 МП, f/1.68",frontCamera:"10.5 МП, f/2.2",battery:"4575 мАч",os:"Android 14 → 15",charging:"24 Вт / 18 Вт",weight:"187 г",dimensions:"150.5×70.8×8.9 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:78,camera:92,battery:82,display:88,design:84,value:82},totalScore:84},
  {id:"gp4",slug:"google-pixel-7a",name:"Google Pixel 7a",brand:"Google",image:G("google-pixel-8"),price:39990,priceLabel:"от 39 990 ₽",year:2023,color:"#48BB78",popularity:65,
   specs:{display:'6.1\" OLED, 2400×1080, 90 Гц',processor:"Google Tensor G2",ram:"8 ГБ",storage:"128 ГБ",mainCamera:"64+13 МП, f/1.89",frontCamera:"13 МП, f/2.2",battery:"4385 мАч",os:"Android 13 → 15",charging:"18 Вт / 7.5 Вт",weight:"193 г",dimensions:"152.4×72.9×9.0 мм",protection:"IP67",nfc:true,fiveG:true},
   scores:{performance:74,camera:86,battery:80,display:84,design:80,value:86},totalScore:82},
  {id:"gp5",slug:"google-pixel-7-pro",name:"Google Pixel 7 Pro",brand:"Google",image:G("google-pixel-8-pro"),price:59990,priceLabel:"от 59 990 ₽",year:2022,color:"#2C3E50",popularity:68,
   specs:{display:'6.7\" LTPO OLED, 3120×1440, 1-120 Гц',processor:"Google Tensor G2",ram:"12 ГБ",storage:"128 ГБ — 512 ГБ",mainCamera:"50+48+12 МП, f/1.85",frontCamera:"10.8 МП, f/2.2",battery:"5000 мАч",os:"Android 13 → 15",charging:"30 Вт / 23 Вт",weight:"212 г",dimensions:"162.9×76.6×8.9 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:74,camera:90,battery:86,display:92,design:86,value:80},totalScore:85},
  {id:"gp6",slug:"google-pixel-7",name:"Google Pixel 7",brand:"Google",image:G("google-pixel-8"),price:44990,priceLabel:"от 44 990 ₽",year:2022,color:"#4A5568",popularity:64,
   specs:{display:'6.3\" OLED, 2400×1080, 90 Гц',processor:"Google Tensor G2",ram:"8 ГБ",storage:"128 ГБ — 256 ГБ",mainCamera:"50+12 МП, f/1.85",frontCamera:"10.8 МП, f/2.2",battery:"4355 мАч",os:"Android 13 → 15",charging:"21 Вт / 20 Вт",weight:"197 г",dimensions:"155.6×73.2×8.7 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:74,camera:86,battery:78,display:86,design:84,value:82},totalScore:82},

  // ══ SONY — дополнительно ════════════════════════════
  {id:"so3",slug:"sony-xperia-10-vi",name:"Sony Xperia 10 VI",brand:"Sony",image:G("sony-xperia-1-vi"),price:39990,priceLabel:"от 39 990 ₽",year:2024,color:"#3D5A80",popularity:52,
   specs:{display:'6.1\" OLED, 2520×1080, 60 Гц',processor:"Snapdragon 6 Gen 1",ram:"6 ГБ",storage:"128 ГБ",mainCamera:"48+8 МП, f/1.8",frontCamera:"12 МП, f/2.0",battery:"5000 мАч",os:"Android 14",charging:"30 Вт",weight:"164 г",dimensions:"155×68×8.2 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:68,camera:72,battery:88,display:80,design:84,value:82},totalScore:79},
  {id:"so4",slug:"sony-xperia-1-v",name:"Sony Xperia 1 V",brand:"Sony",image:G("sony-xperia-1-vi"),price:99990,priceLabel:"от 99 990 ₽",year:2023,color:"#2E3A59",popularity:58,
   specs:{display:'6.5\" 4K OLED, 3840×1644, 1-120 Гц',processor:"Snapdragon 8 Gen 2",ram:"12 ГБ",storage:"256 ГБ",mainCamera:"52+12+12 МП, f/1.9",frontCamera:"12 МП, f/2.0",battery:"5000 мАч",os:"Android 13 → 14",charging:"30 Вт / 15 Вт",weight:"187 г",dimensions:"165×71×8.3 мм",protection:"IP68",nfc:true,fiveG:true},
   scores:{performance:90,camera:90,battery:87,display:90,design:88,value:72},totalScore:86},

  // ══ HONOR — дополнительно ═══════════════════════════
  {id:"h4",slug:"honor-90",name:"Honor 90",brand:"Honor",image:G("honor-magic7-pro"),price:29990,priceLabel:"от 29 990 ₽",year:2023,color:"#27AE60",popularity:60,
   specs:{display:'6.7\" OLED, 2664×1200, 120 Гц',processor:"Snapdragon 7 Gen 1",ram:"8 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"200+12+2 МП, f/1.75",frontCamera:"50 МП, f/2.4",battery:"5000 мАч",os:"Android 13, MagicOS 7.2",charging:"66 Вт",weight:"183 г",dimensions:"161.9×74.1×7.8 мм",protection:"нет",nfc:false,fiveG:true},
   scores:{performance:72,camera:78,battery:87,display:86,design:80,value:88},totalScore:82},
  {id:"h5",slug:"honor-200",name:"Honor 200",brand:"Honor",image:G("honor-magic7-pro"),price:34990,priceLabel:"от 34 990 ₽",year:2024,color:"#3498DB",popularity:58,
   specs:{display:'6.7\" LTPO OLED, 2664×1200, 1-120 Гц',processor:"Snapdragon 7 Gen 3",ram:"8 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+50+12 МП (Harcourt), f/1.9",frontCamera:"50 МП, f/2.4",battery:"5200 мАч",os:"Android 14, MagicOS 8",charging:"100 Вт / 66 Вт",weight:"185 г",dimensions:"161.3×74.4×6.98 мм",protection:"IP65",nfc:true,fiveG:true},
   scores:{performance:78,camera:84,battery:90,display:88,design:86,value:86},totalScore:85},

  // ══ HUAWEI — дополнительно ═══════════════════════════
  {id:"hw3",slug:"huawei-p60-pro",name:"Huawei P60 Pro",brand:"Huawei",image:G("huawei-p60-pro"),price:69990,priceLabel:"от 69 990 ₽",year:2023,color:"#8B0000",popularity:56,
   specs:{display:'6.67\" OLED, 2700×1220, 1-120 Гц',processor:"Snapdragon 8+ Gen 1",ram:"8 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"48+13+48 МП, f/1.4-4.0",frontCamera:"13 МП, f/2.4",battery:"4815 мАч",os:"Android 12, HarmonyOS 3.1",charging:"88 Вт / 50 Вт",weight:"200 г",dimensions:"161.0×74.5×8.3 мм",protection:"IP68",nfc:true,fiveG:false},
   scores:{performance:86,camera:90,battery:84,display:88,design:90,value:72},totalScore:85},
  {id:"hw4",slug:"huawei-mate-60-pro",name:"Huawei Mate 60 Pro",brand:"Huawei",image:G("huawei-mate-60-pro"),price:79990,priceLabel:"от 79 990 ₽",year:2023,color:"#1A237E",popularity:58,
   specs:{display:'6.82\" LTPO OLED, 2720×1260, 1-120 Гц',processor:"Kirin 9000s",ram:"12 ГБ",storage:"256 ГБ — 512 ГБ",mainCamera:"50+13+48 МП, f/1.4",frontCamera:"13 МП, f/2.4",battery:"5000 мАч",os:"HarmonyOS 4.0",charging:"88 Вт / 50 Вт",weight:"225 г",dimensions:"162.0×76.1×8.5 мм",protection:"IP68",nfc:true,fiveG:false},
   scores:{performance:78,camera:88,battery:86,display:90,design:90,value:72},totalScore:84},
  {id:"hw5",slug:"huawei-nova-13-pro",name:"Huawei Nova 13 Pro",brand:"Huawei",image:G("huawei-mate-60-pro"),price:39990,priceLabel:"от 39 990 ₽",year:2024,color:"#E91E63",popularity:50,
   specs:{display:'6.76\" OLED, 2844×1272, 120 Гц',processor:"Kirin 8000",ram:"8 ГБ",storage:"256 ГБ",mainCamera:"60+50+8 МП (portrait), f/1.4",frontCamera:"60 МП, f/2.4",battery:"4500 мАч",os:"HarmonyOS 4.2",charging:"100 Вт",weight:"188 г",dimensions:"163.8×73.0×6.88 мм",protection:"IP54",nfc:false,fiveG:false},
   scores:{performance:68,camera:80,battery:82,display:84,design:86,value:78},totalScore:80},
];

export const brands = [...new Set(phones.map(p => p.brand))].sort();
export const years  = [...new Set(phones.map(p => p.year))].sort((a,b) => b-a);
