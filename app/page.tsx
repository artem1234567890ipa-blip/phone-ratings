import Link from "next/link";
import { phones } from "@/data/phones";
import ScoreRing from "@/components/ScoreRing";
import PhoneImage from "@/components/PhoneImage";
import { ArrowRight, TrendingUp, Award, Zap } from "lucide-react";

const sorted = [...phones].sort((a, b) => b.totalScore - a.totalScore);
const top3 = sorted.slice(0, 3);
const top10 = sorted.slice(0, 10);

const BADGE_COLORS: Record<string, string> = {
  "Выбор редакции": "bg-amber-100 text-amber-700 border-amber-200",
  "Лучшая камера": "bg-blue-100 text-blue-700 border-blue-200",
  "Лучший бюджет": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Лучший дизайн": "bg-purple-100 text-purple-700 border-purple-200",
  "Лучший звук": "bg-rose-100 text-rose-700 border-rose-200",
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-violet-950 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm mb-6">
                <TrendingUp className="h-3.5 w-3.5 text-blue-400" />
                Обновлено в 2025 году
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Рейтинг<br />
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  смартфонов
                </span><br />
                мира
              </h1>
              <p className="mt-6 text-lg text-slate-300 max-w-xl">
                Объективный рейтинг на основе реальных характеристик, цен и данных с официальных сайтов производителей.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/phones"
                  className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 transition-shadow"
                >
                  Смотреть все телефоны <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare"
                  className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15 transition-colors"
                >
                  Сравнить телефоны
                </Link>
              </div>
              <div className="mt-10 flex gap-8 justify-center lg:justify-start">
                <div>
                  <p className="text-3xl font-bold">{phones.length}+</p>
                  <p className="text-sm text-slate-400">Смартфонов</p>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <p className="text-3xl font-bold">6</p>
                  <p className="text-sm text-slate-400">Критериев оценки</p>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <p className="text-3xl font-bold">2025</p>
                  <p className="text-sm text-slate-400">Актуальные данные</p>
                </div>
              </div>
            </div>
            {/* Top 3 podium */}
            <div className="flex-1 flex flex-col gap-3 w-full max-w-md">
              {top3.map((phone, i) => (
                <Link
                  key={phone.id}
                  href={`/phones/${phone.slug}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-bold shadow-md">
                    #{i + 1}
                  </div>
                  <div className="relative h-14 w-14 flex-shrink-0">
                    <PhoneImage
                      src={phone.image}
                      alt={phone.name}
                      brand={phone.brand}
                      name={phone.name}
                      fill
                      className="object-contain drop-shadow-lg"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-400">{phone.brand}</p>
                    <p className="font-semibold text-sm truncate group-hover:text-blue-300 transition-colors">{phone.name}</p>
                    <p className="text-xs text-slate-400">{phone.priceLabel}</p>
                  </div>
                  <ScoreRing score={phone.totalScore} size={52} strokeWidth={5} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How rating works */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Как формируется рейтинг</h2>
          <p className="mt-3 text-slate-500">6 критериев оценки с разными весами</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Производительность", icon: "⚡", desc: "Процессор, ОЗУ, скорость", color: "from-blue-500 to-blue-600" },
            { label: "Камера", icon: "📸", desc: "МП, апертура, функции", color: "from-violet-500 to-violet-600" },
            { label: "Батарея", icon: "🔋", desc: "Ёмкость и зарядка", color: "from-emerald-500 to-emerald-600" },
            { label: "Экран", icon: "🖥️", desc: "Разрешение, Hz, тип", color: "from-amber-500 to-amber-600" },
            { label: "Дизайн", icon: "✨", desc: "Материалы, IP, вес", color: "from-rose-500 to-rose-600" },
            { label: "Ценность", icon: "💰", desc: "Цена / характеристики", color: "from-cyan-500 to-cyan-600" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-2xl shadow-md`}>
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">{item.label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top 10 */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-md">
              <Award className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Топ-10 смартфонов</h2>
              <p className="text-sm text-slate-500">По общему рейтингу</p>
            </div>
          </div>
          <Link href="/phones" className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            Все телефоны <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="space-y-3">
          {top10.map((phone, i) => (
            <Link
              key={phone.id}
              href={`/phones/${phone.slug}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <span className="w-8 text-center text-lg font-black text-slate-300">
                {i + 1}
              </span>
              <div className="relative h-14 w-14 flex-shrink-0">
                <PhoneImage
                  src={phone.image}
                  alt={phone.name}
                  brand={phone.brand}
                  name={phone.name}
                  fill
                  className="object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                  sizes="56px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-xs font-semibold text-slate-400">{phone.brand}</p>
                  {phone.badge && (
                    <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-semibold ${BADGE_COLORS[phone.badge]}`}>
                      {phone.badge}
                    </span>
                  )}
                </div>
                <p className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors truncate">{phone.name}</p>
                <p className="text-sm text-slate-500">{phone.priceLabel} · {phone.year}</p>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                <div className="text-center">
                  <p className="text-xs text-slate-400">Проц.</p>
                  <p className="text-sm font-bold text-blue-600">{phone.scores.performance}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400">Камера</p>
                  <p className="text-sm font-bold text-violet-600">{phone.scores.camera}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400">Батарея</p>
                  <p className="text-sm font-bold text-emerald-600">{phone.scores.battery}</p>
                </div>
              </div>
              <ScoreRing score={phone.totalScore} size={60} strokeWidth={5} />
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/phones"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3 font-semibold text-white shadow-md hover:shadow-lg transition-shadow"
          >
            Смотреть все {phones.length} телефонов <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
