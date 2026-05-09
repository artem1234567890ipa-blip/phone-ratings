"use client";
import { useSearchParams } from "next/navigation";
import { phones } from "@/data/phones";
import Link from "next/link";
import ScoreRing from "@/components/ScoreRing";
import PhoneImage from "@/components/PhoneImage";
import { ArrowLeft, CheckCircle, XCircle, Trophy } from "lucide-react";
import { Suspense } from "react";

const scoreLabels = [
  { key: "performance", label: "Производительность" },
  { key: "camera",      label: "Камера" },
  { key: "battery",     label: "Батарея" },
  { key: "display",     label: "Экран" },
  { key: "design",      label: "Дизайн" },
  { key: "value",       label: "Ценность" },
];

const specLabels: { key: keyof typeof phones[0]["specs"]; label: string }[] = [
  { key: "display",     label: "Экран" },
  { key: "processor",   label: "Процессор" },
  { key: "ram",         label: "ОЗУ" },
  { key: "storage",     label: "Память" },
  { key: "mainCamera",  label: "Камера" },
  { key: "battery",     label: "Батарея" },
  { key: "charging",    label: "Зарядка" },
  { key: "os",          label: "ОС" },
  { key: "weight",      label: "Вес" },
  { key: "protection",  label: "Защита" },
  { key: "nfc",         label: "NFC" },
  { key: "fiveG",       label: "5G" },
];

type ScoreKey = "performance" | "camera" | "battery" | "display" | "design" | "value";

interface Recommendation {
  emoji: string;
  title: string;
  desc: string;
  winnerIndex: number;
  winnerScore: number;
}

function buildRecommendations(selected: typeof phones): Recommendation[] {
  if (selected.length < 2) return [];

  const avg = (a: ScoreKey, b: ScoreKey) => (p: typeof phones[0]) =>
    (p.scores[a] + p.scores[b]) / 2;

  const best = (fn: (p: typeof phones[0]) => number) => {
    let best = 0;
    selected.forEach((p, i) => { if (fn(p) > fn(selected[best])) best = i; });
    return { idx: best, score: Math.round(fn(selected[best])) };
  };

  return [
    {
      emoji: "🏆", title: "Лучший в целом",
      desc: "Набрал наибольший совокупный балл по всем критериям",
      ...(() => { const b = best(p => p.totalScore); return { winnerIndex: b.idx, winnerScore: b.score }; })(),
    },
    {
      emoji: "📸", title: "Лучший для фото и видео",
      desc: "Камера с наивысшим баллом — для контента, Instagram и YouTube",
      ...(() => { const b = best(p => p.scores.camera); return { winnerIndex: b.idx, winnerScore: b.score }; })(),
    },
    {
      emoji: "🎮", title: "Лучший для игр",
      desc: "Мощный процессор — для требовательных игр и приложений",
      ...(() => { const b = best(p => p.scores.performance); return { winnerIndex: b.idx, winnerScore: b.score }; })(),
    },
    {
      emoji: "🔋", title: "Лучший для путешествий",
      desc: "Долгая батарея — идеален вдали от розетки",
      ...(() => { const b = best(p => p.scores.battery); return { winnerIndex: b.idx, winnerScore: b.score }; })(),
    },
    {
      emoji: "💼", title: "Лучший для работы",
      desc: "Производительность + экран — для офиса и мультизадачности",
      ...(() => { const b = best(avg("performance", "display")); return { winnerIndex: b.idx, winnerScore: b.score }; })(),
    },
    {
      emoji: "🎥", title: "Лучший для видеосъёмки",
      desc: "Камера + процессор — для плавной записи и обработки видео",
      ...(() => { const b = best(avg("camera", "performance")); return { winnerIndex: b.idx, winnerScore: b.score }; })(),
    },
    {
      emoji: "💰", title: "Лучшее за свои деньги",
      desc: "Максимальные характеристики при минимальной цене",
      ...(() => { const b = best(p => p.scores.value); return { winnerIndex: b.idx, winnerScore: b.score }; })(),
    },
    {
      emoji: "✨", title: "Лучший дизайн",
      desc: "Лучшие материалы, защита и внешний вид",
      ...(() => { const b = best(p => p.scores.design); return { winnerIndex: b.idx, winnerScore: b.score }; })(),
    },
    {
      emoji: "🖥️", title: "Лучший экран",
      desc: "Самый яркий, чёткий и плавный дисплей",
      ...(() => { const b = best(p => p.scores.display); return { winnerIndex: b.idx, winnerScore: b.score }; })(),
    },
  ];
}

const COLS = ["", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"];

function CompareContent() {
  const params = useSearchParams();
  const slugs = params.get("phones")?.split(",").filter(Boolean) ?? [];
  const selected = slugs.map(s => phones.find(p => p.slug === s)).filter(Boolean) as typeof phones;

  if (selected.length === 0) {
    return (
      <div className="flex flex-col items-center gap-6 py-32 text-center">
        <span className="text-6xl">📱</span>
        <h2 className="text-2xl font-bold text-slate-900">Выберите телефоны для сравнения</h2>
        <p className="text-slate-500 max-w-sm">
          Перейдите в каталог, нажмите «+ Сравнить» на карточках телефонов (до 3 штук)
        </p>
        <Link href="/phones" className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3 font-semibold text-white shadow-md">
          Перейти в каталог
        </Link>
      </div>
    );
  }

  const bestScore = (key: ScoreKey) => Math.max(...selected.map(p => p.scores[key]));
  const recommendations = buildRecommendations(selected);
  const gridCols = COLS[selected.length] ?? COLS[3];

  return (
    <div>
      {/* Header */}
      <div className="grid gap-4 mb-6" style={{ gridTemplateColumns: `180px ${gridCols}` }}>
        <div />
        {selected.map(phone => (
          <div key={phone.id} className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center">
            <div className="relative h-24 w-24">
              <PhoneImage src={phone.image} alt={phone.name} brand={phone.brand} name={phone.name} fill className="object-contain drop-shadow-lg" sizes="96px" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold">{phone.brand}</p>
              <p className="font-bold text-slate-900 text-sm leading-tight">{phone.name}</p>
              <p className="text-blue-600 font-semibold text-sm mt-1">{phone.priceLabel}</p>
            </div>
            <ScoreRing score={phone.totalScore} size={64} strokeWidth={6} />
          </div>
        ))}
      </div>

      {/* Scores */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden mb-4">
        <div className="border-b border-slate-100 px-6 py-4">
          <h3 className="font-bold text-slate-900">Оценки</h3>
        </div>
        {scoreLabels.map(({ key, label }) => (
          <div key={key} className="grid border-b border-slate-50 last:border-0" style={{ gridTemplateColumns: `180px ${gridCols}` }}>
            <div className="flex items-center px-6 py-3.5 text-sm font-semibold text-slate-600 bg-slate-50/50">{label}</div>
            {selected.map(phone => {
              const val = phone.scores[key as ScoreKey];
              const isBest = val === bestScore(key as ScoreKey);
              return (
                <div key={phone.id} className={`flex items-center justify-center px-4 py-3.5 ${isBest ? "bg-blue-50" : ""}`}>
                  <span className={`text-lg font-bold ${isBest ? "text-blue-700" : "text-slate-700"}`}>{val}</span>
                  {isBest && selected.length > 1 && <span className="ml-1 text-xs text-blue-400">▲</span>}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Specs */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden mb-10">
        <div className="border-b border-slate-100 px-6 py-4">
          <h3 className="font-bold text-slate-900">Характеристики</h3>
        </div>
        {specLabels.map(({ key, label }) => (
          <div key={key} className="grid border-b border-slate-50 last:border-0" style={{ gridTemplateColumns: `180px ${gridCols}` }}>
            <div className="flex items-center px-6 py-3.5 text-sm font-semibold text-slate-500 bg-slate-50/50">{label}</div>
            {selected.map(phone => {
              const val = phone.specs[key as keyof typeof phone.specs];
              return (
                <div key={phone.id} className="flex items-center justify-center px-4 py-3.5">
                  {typeof val === "boolean"
                    ? (val ? <CheckCircle className="h-5 w-5 text-emerald-500" /> : <XCircle className="h-5 w-5 text-slate-300" />)
                    : <span className="text-xs text-slate-700 text-center">{String(val)}</span>
                  }
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* ─── Recommendations ─── */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-md">
            <Trophy className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Что выбрать и для чего?</h3>
            <p className="text-sm text-slate-500">Рекомендации на основе сравнения характеристик</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {recommendations.map((rec) => {
            const winner = selected[rec.winnerIndex];
            return (
              <div key={rec.title} className="flex flex-col gap-3 p-5">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{rec.emoji}</span>
                  <span className="font-bold text-slate-800 text-sm leading-tight">{rec.title}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{rec.desc}</p>
                <div className="mt-auto flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 px-3 py-2.5">
                  <div className="relative h-10 w-10 flex-shrink-0">
                    <PhoneImage src={winner.image} alt={winner.name} brand={winner.brand} name={winner.name} fill className="object-contain" sizes="40px" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">{winner.brand}</p>
                    <p className="text-sm font-bold text-blue-700 truncate">{winner.name}</p>
                  </div>
                  <div className="ml-auto flex-shrink-0">
                    <span className="text-lg font-extrabold text-blue-600">{rec.winnerScore}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/phones" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> К каталогу
      </Link>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Сравнение телефонов</h1>
      <Suspense fallback={<div className="py-20 text-center text-slate-400">Загрузка...</div>}>
        <CompareContent />
      </Suspense>
    </div>
  );
}
