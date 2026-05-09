import { phones } from "@/data/phones";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScoreRing from "@/components/ScoreRing";
import PhoneImage from "@/components/PhoneImage";
import ZoomLens from "@/components/ZoomLens";
import ScoreBar from "@/components/ScoreBar";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return phones.map((p) => ({ slug: p.slug }));
}

export default async function PhoneDetailPage({ params }: Props) {
  const { slug } = await params;
  const phone = phones.find((p) => p.slug === slug);
  if (!phone) notFound();

  const scoreLabels: Record<keyof typeof phone.scores, string> = {
    performance: "Производительность",
    camera: "Камера",
    battery: "Батарея",
    display: "Экран",
    design: "Дизайн",
    value: "Ценность",
  };

  const specItems = [
    { label: "Экран", value: phone.specs.display },
    { label: "Процессор", value: phone.specs.processor },
    { label: "ОЗУ", value: phone.specs.ram },
    { label: "Накопитель", value: phone.specs.storage },
    { label: "Основная камера", value: phone.specs.mainCamera },
    { label: "Фронтальная", value: phone.specs.frontCamera },
    { label: "Батарея", value: phone.specs.battery },
    { label: "Зарядка", value: phone.specs.charging },
    { label: "ОС", value: phone.specs.os },
    { label: "Вес", value: phone.specs.weight },
    { label: "Размеры", value: phone.specs.dimensions },
    { label: "Защита", value: phone.specs.protection },
  ];

  const similar = phones
    .filter((p) => p.id !== phone.id && (p.brand === phone.brand || Math.abs(p.price - phone.price) < 20000))
    .sort((a, b) => b.totalScore - a.totalScore)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/phones" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Все телефоны
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        {/* Left: image + scores */}
        <div className="flex flex-col items-center gap-8">
          <div className="relative h-80 w-full max-w-xs overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-white shadow-sm border border-slate-100">
            <ZoomLens
              src={phone.image}
              alt={phone.name}
              brand={phone.brand}
              name={phone.name}
              zoomFactor={3}
              lensSize={150}
            />
          </div>
          <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{phone.brand}</p>
                <h1 className="text-2xl font-bold text-slate-900">{phone.name}</h1>
                <p className="mt-1 text-lg font-bold text-blue-600">{phone.priceLabel}</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ScoreRing score={phone.totalScore} size={80} strokeWidth={7} />
                <span className="text-xs text-slate-500">Общий балл</span>
              </div>
            </div>
            <div className="space-y-3 border-t border-slate-100 pt-4">
              {Object.entries(phone.scores).map(([key, val]) => (
                <ScoreBar
                  key={key}
                  label={scoreLabels[key as keyof typeof phone.scores]}
                  score={val}
                />
              ))}
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-3">
            <div className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold ${phone.specs.fiveG ? "bg-blue-50 text-blue-700 border border-blue-200" : "bg-slate-100 text-slate-400"}`}>
              {phone.specs.fiveG ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              5G
            </div>
            <div className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold ${phone.specs.nfc ? "bg-blue-50 text-blue-700 border border-blue-200" : "bg-slate-100 text-slate-400"}`}>
              {phone.specs.nfc ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              NFC
            </div>
          </div>
        </div>

        {/* Right: specs table */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-900">Технические характеристики</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {specItems.map((s) => (
              <div key={s.label} className="flex gap-4 px-6 py-3.5">
                <span className="w-36 flex-shrink-0 text-sm font-semibold text-slate-500">{s.label}</span>
                <span className="text-sm text-slate-800">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pros / Cons */}
      {(phone.pros?.length || phone.cons?.length) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {phone.pros?.length && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                <span className="text-lg">✅</span> Плюсы
              </h3>
              <ul className="space-y-2">
                {phone.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-emerald-700">
                    <span className="mt-0.5 text-emerald-500 flex-shrink-0">+</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {phone.cons?.length && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <span className="text-lg">❌</span> Минусы
              </h3>
              <ul className="space-y-2">
                {phone.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-700">
                    <span className="mt-0.5 text-red-400 flex-shrink-0">−</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Similar */}
      {similar.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-5">Похожие телефоны</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {similar.map((p) => (
              <Link
                key={p.id}
                href={`/phones/${p.slug}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="relative h-14 w-14 flex-shrink-0">
                  <PhoneImage src={p.image} alt={p.name} brand={p.brand} name={p.name} fill className="object-contain" sizes="56px" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-400">{p.brand}</p>
                  <p className="font-semibold text-sm truncate group-hover:text-blue-700 transition-colors">{p.name}</p>
                  <p className="text-xs text-slate-500">{p.priceLabel}</p>
                </div>
                <ScoreRing score={p.totalScore} size={48} strokeWidth={4} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
