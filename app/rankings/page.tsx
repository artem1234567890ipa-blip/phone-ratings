import { phones } from "@/data/phones";
import Link from "next/link";
import PhoneImage from "@/components/PhoneImage";
import ScoreRing from "@/components/ScoreRing";

const CATEGORIES = [
  { id:"overall",     label:"🏆 Лучшие в целом",          fn: (p: typeof phones[0]) => p.totalScore,          color:"from-amber-400 to-orange-500" },
  { id:"camera",      label:"📸 Лучшая камера",            fn: (p: typeof phones[0]) => p.scores.camera,       color:"from-violet-500 to-purple-600" },
  { id:"performance", label:"⚡ Производительность",       fn: (p: typeof phones[0]) => p.scores.performance,  color:"from-blue-500 to-blue-700" },
  { id:"battery",     label:"🔋 Батарея",                  fn: (p: typeof phones[0]) => p.scores.battery,      color:"from-emerald-500 to-green-700" },
  { id:"value",       label:"💰 Цена / качество",          fn: (p: typeof phones[0]) => p.scores.value,        color:"from-teal-500 to-cyan-600" },
  { id:"design",      label:"✨ Дизайн",                   fn: (p: typeof phones[0]) => p.scores.design,       color:"from-rose-500 to-pink-600" },
  { id:"display",     label:"🖥️ Экран",                    fn: (p: typeof phones[0]) => p.scores.display,      color:"from-sky-500 to-indigo-600" },
  { id:"new",         label:"🆕 Лучшие новинки 2025-2026", fn: (p: typeof phones[0]) => p.isNew ? p.totalScore : 0, color:"from-lime-500 to-green-600" },
  { id:"popular",     label:"🔥 Самые популярные",         fn: (p: typeof phones[0]) => p.popularity ?? 0,     color:"from-red-500 to-orange-600" },
];

function TopList({ label, color, items }: { label: string; color: string; items: typeof phones }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className={`bg-gradient-to-r ${color} px-5 py-4`}>
        <h2 className="text-base font-bold text-white">{label}</h2>
      </div>
      <div className="divide-y divide-slate-100">
        {items.slice(0,10).map((phone, i) => (
          <Link
            key={phone.id}
            href={`/phones/${phone.slug}`}
            className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group"
          >
            <span className={`w-6 text-center text-sm font-black ${i < 3 ? "text-amber-500" : "text-slate-300"}`}>
              {i+1}
            </span>
            <div className="relative h-10 w-10 flex-shrink-0">
              <PhoneImage
                src={phone.image} alt={phone.name}
                brand={phone.brand} name={phone.name}
                fill className="object-contain" sizes="40px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-400 font-medium">{phone.brand}</p>
              <p className="text-sm font-semibold text-slate-800 truncate group-hover:text-blue-700 transition-colors">{phone.name}</p>
            </div>
            {phone.isNew && (
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">NEW</span>
            )}
            <ScoreRing score={phone.totalScore} size={40} strokeWidth={4} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function RankingsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Рейтинги телефонов</h1>
        <p className="mt-2 text-slate-500">
          Топ-10 смартфонов в каждой категории · {phones.length} телефонов в базе
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {CATEGORIES.map(cat => {
          const sorted = [...phones]
            .filter(p => cat.fn(p) > 0)
            .sort((a,b) => cat.fn(b) - cat.fn(a));
          return <TopList key={cat.id} label={cat.label} color={cat.color} items={sorted} />;
        })}
      </div>
    </div>
  );
}
