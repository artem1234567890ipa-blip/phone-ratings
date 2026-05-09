"use client";
import Link from "next/link";
import { Phone } from "@/types/phone";
import ScoreRing from "./ScoreRing";
import PhoneImage from "./PhoneImage";
import { cn } from "@/lib/utils";
import { useState } from "react";

const BADGE_COLORS: Record<string, string> = {
  "Выбор редакции": "bg-amber-100 text-amber-700 border-amber-200",
  "Лучшая камера":  "bg-blue-100 text-blue-700 border-blue-200",
  "Лучший бюджет":  "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Лучший дизайн":  "bg-purple-100 text-purple-700 border-purple-200",
  "Лучший звук":    "bg-rose-100 text-rose-700 border-rose-200",
};

const SCORE_ITEMS = [
  { key: "performance", icon: "⚡", label: "Проц." },
  { key: "camera",      icon: "📸", label: "Камера" },
  { key: "battery",     icon: "🔋", label: "Батарея" },
  { key: "display",     icon: "🖥️", label: "Экран" },
] as const;

interface Props {
  phone: Phone;
  rank?: number;
  onAddToCompare?: (phone: Phone) => void;
  isInCompare?: boolean;
}

export default function PhoneCard({ phone, rank, onAddToCompare, isInCompare }: Props) {
  const [hovered, setHovered] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-white transition-all duration-300",
        hovered
          ? "border-blue-300 shadow-xl shadow-blue-100 -translate-y-0.5"
          : "border-slate-200 shadow-sm hover:shadow-md"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Rank badge */}
      {rank && rank <= 10 && (
        <div className="absolute -top-3 -left-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-xs font-bold text-white shadow-md">
          #{rank}
        </div>
      )}

      {/* Badge */}
      {phone.badge && (
        <div className={cn(
          "absolute top-3 left-3 z-10 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
          BADGE_COLORS[phone.badge]
        )}>
          {phone.badge}
        </div>
      )}

      {/* Image area — gsmchoice style: white bg, large image, zoom on hover */}
      <Link href={`/phones/${phone.slug}`} className="block">
        <div
          className="relative mx-auto h-44 w-full overflow-hidden rounded-t-2xl bg-gradient-to-b from-slate-50 to-white cursor-zoom-in"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setLensPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
        >
          <div className={cn(
            "absolute inset-0 flex items-center justify-center transition-transform duration-500",
            hovered ? "scale-110" : "scale-100"
          )}>
            <div className="relative h-36 w-36">
              <PhoneImage
                src={phone.image}
                alt={phone.name}
                brand={phone.brand}
                name={phone.name}
                fill
                className="object-contain drop-shadow-lg"
                sizes="144px"
                onLoad={() => setImgLoaded(true)}
              />
            </div>
          </div>

          {/* Magnifier lens overlay */}
          {hovered && imgLoaded && (
            <div
              className="pointer-events-none absolute z-20 rounded-full border-2 border-white/80 overflow-hidden shadow-2xl"
              style={{
                width: 80,
                height: 80,
                left: lensPos.x - 40,
                top: lensPos.y - 40,
                backgroundImage: `url(${phone.image})`,
                backgroundSize: "360px 360px",
                backgroundPosition: `${-(lensPos.x * 2.5 - 40)}px ${-(lensPos.y * 2.5 - 40)}px`,
                backgroundRepeat: "no-repeat",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            />
          )}

          {/* Zoom hint icon */}
          <div className={cn(
            "absolute bottom-2 right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/80 shadow transition-opacity",
            hovered ? "opacity-100" : "opacity-0"
          )}>
            <svg className="h-3.5 w-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth="2.5" />
              <path d="m21 21-4.35-4.35" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </Link>

      {/* Info section */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <Link href={`/phones/${phone.slug}`}>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{phone.brand} · {phone.year}</p>
            <h3 className={cn(
              "mt-0.5 text-sm font-bold leading-tight transition-colors",
              hovered ? "text-blue-700" : "text-slate-900"
            )}>
              {phone.name}
            </h3>
            <p className="mt-1 text-base font-extrabold text-blue-600">{phone.priceLabel}</p>
          </div>
        </Link>

        {/* Score ring + mini scores */}
        <div className="flex items-center gap-3">
          <ScoreRing score={phone.totalScore} size={56} strokeWidth={5} />
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 flex-1">
            {SCORE_ITEMS.map(({ key, icon, label }) => (
              <div key={key} className="flex items-center gap-1">
                <span className="text-xs">{icon}</span>
                <span className="text-xs text-slate-500">{label}</span>
                <span className="ml-auto text-xs font-bold text-slate-700">
                  {phone.scores[key as keyof typeof phone.scores]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key specs chips — gsmchoice style */}
        <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">{phone.specs.ram}</span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">{phone.specs.battery}</span>
          {phone.specs.fiveG && <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">5G</span>}
          {phone.specs.nfc  && <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">NFC</span>}
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 ml-auto">{phone.specs.protection}</span>
        </div>

        {/* Compare button */}
        {onAddToCompare && (
          <button
            onClick={() => onAddToCompare(phone)}
            className={cn(
              "mt-auto w-full rounded-xl py-2 text-xs font-bold transition-all",
              isInCompare
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
            )}
          >
            {isInCompare ? "✓ Добавлен в сравнение" : "+ Сравнить"}
          </button>
        )}
      </div>
    </div>
  );
}
