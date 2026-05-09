"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { phones, brands } from "@/data/phones";
import PhoneImage from "@/components/PhoneImage";
import ScoreRing from "@/components/ScoreRing";
import { ChevronDown, ChevronUp, Search, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Brand metadata ─────────────────────────────────── */
const BRAND_META: Record<string, { g1: string; g2: string; text: string }> = {
  Apple:    { g1: "#1c1c1e", g2: "#48484a",  text: "#fff" },
  Samsung:  { g1: "#1428a0", g2: "#0070c9",  text: "#fff" },
  Google:   { g1: "#0f9d58", g2: "#34a853",  text: "#fff" },
  Xiaomi:   { g1: "#ff6900", g2: "#ff9500",  text: "#fff" },
  OnePlus:  { g1: "#eb0029", g2: "#ff3b4e",  text: "#fff" },
  Sony:     { g1: "#001489", g2: "#0033a0",  text: "#fff" },
  Nothing:  { g1: "#2c2c2e", g2: "#48484a",  text: "#fff" },
  POCO:     { g1: "#d4a400", g2: "#e6b800",  text: "#000" },
  Realme:   { g1: "#ff8c00", g2: "#ffa500",  text: "#fff" },
  Huawei:   { g1: "#c0392b", g2: "#e74c3c",  text: "#fff" },
  Honor:    { g1: "#00457c", g2: "#0070c0",  text: "#fff" },
  Motorola: { g1: "#2c3e50", g2: "#34495e",  text: "#fff" },
  OPPO:     { g1: "#0d47a1", g2: "#1565c0",  text: "#fff" },
  Vivo:     { g1: "#1a2a6c", g2: "#2e4a9e",  text: "#fff" },
  Asus:     { g1: "#1a1a2e", g2: "#16213e",  text: "#fff" },
  Nokia:    { g1: "#124191", g2: "#1565c0",  text: "#fff" },
  Infinix:  { g1: "#7b1fa2", g2: "#9c27b0",  text: "#fff" },
  Tecno:    { g1: "#1565c0", g2: "#1976d2",  text: "#fff" },
  ZTE:      { g1: "#b71c1c", g2: "#d32f2f",  text: "#fff" },
  Lenovo:   { g1: "#e53935", g2: "#f44336",  text: "#fff" },
  TCL:      { g1: "#00695c", g2: "#00897b",  text: "#fff" },
};

function getInitials(brand: string) {
  return brand.substring(0, 2).toUpperCase();
}

/* ── Mini phone card inside accordion ─────────────────── */
function MiniCard({ phone }: { phone: typeof phones[0] }) {
  return (
    <Link
      href={`/phones/${phone.slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      <div className="relative h-36 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center overflow-hidden">
        <div className="relative h-28 w-28 group-hover:scale-110 transition-transform duration-300">
          <PhoneImage
            src={phone.image} alt={phone.name}
            brand={phone.brand} name={phone.name}
            fill className="object-contain drop-shadow-md" sizes="112px"
          />
        </div>
        {phone.isNew && (
          <span className="absolute top-2 left-2 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white">NEW</span>
        )}
        {phone.isTrending && (
          <span className="absolute top-2 right-2 text-sm">🔥</span>
        )}
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{phone.year}</p>
        <p className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight line-clamp-2">{phone.name}</p>
        <p className="text-sm font-extrabold text-blue-600">{phone.priceLabel}</p>
        <div className="flex items-center justify-between mt-1">
          <div className="flex gap-1 flex-wrap">
            {phone.specs.fiveG && <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[9px] font-bold text-blue-700">5G</span>}
            {phone.specs.nfc  && <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-600">NFC</span>}
          </div>
          <ScoreRing score={phone.totalScore} size={36} strokeWidth={3} />
        </div>
      </div>
    </Link>
  );
}

/* ── Brand tile ─────────────────────────────────────── */
function BrandTile({
  brand, count, isOpen, onToggle,
}: {
  brand: string; count: number; isOpen: boolean; onToggle: () => void;
}) {
  const meta = BRAND_META[brand] ?? { g1: "#3b82f6", g2: "#6366f1", text: "#fff" };

  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 rounded-2xl p-5 transition-all duration-300 cursor-pointer select-none",
        "border-2 hover:scale-[1.03] active:scale-[0.98]",
        isOpen
          ? "border-blue-500 shadow-xl shadow-blue-200 scale-[1.03]"
          : "border-transparent hover:border-blue-200 shadow-sm hover:shadow-md"
      )}
      style={{ background: `linear-gradient(135deg, ${meta.g1}, ${meta.g2})` }}
    >
      {/* Brand initial circle */}
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-black shadow-md"
        style={{ background: "rgba(255,255,255,0.15)", color: meta.text }}
      >
        {getInitials(brand)}
      </div>
      <div className="text-center">
        <p className="text-sm font-bold" style={{ color: meta.text }}>{brand}</p>
        <p className="text-xs font-medium opacity-70" style={{ color: meta.text }}>
          {count} {count === 1 ? "телефон" : count < 5 ? "телефона" : "телефонов"}
        </p>
      </div>
      {/* Open indicator */}
      <div
        className={cn(
          "absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full transition-all",
          isOpen ? "bg-blue-400 opacity-100" : "opacity-0"
        )}
      />
      {isOpen && (
        <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 shadow-md">
          <ChevronUp className="h-3.5 w-3.5 text-white" />
        </div>
      )}
    </button>
  );
}

/* ══ Main catalogue page ════════════════════════════════ */
export default function CataloguePage() {
  const [openBrand, setOpenBrand] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sortMode, setSortMode] = useState<"score" | "price-asc" | "price-desc" | "year">("score");

  const brandPhones = useMemo(() => {
    const map: Record<string, typeof phones> = {};
    for (const p of phones) {
      if (!map[p.brand]) map[p.brand] = [];
      map[p.brand].push(p);
    }
    return map;
  }, []);

  const filteredBrands = useMemo(
    () => brands.filter(b => b.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const sortedPhones = (list: typeof phones) => {
    const copy = [...list];
    switch (sortMode) {
      case "score":      return copy.sort((a, b) => b.totalScore - a.totalScore);
      case "price-asc":  return copy.sort((a, b) => a.price - b.price);
      case "price-desc": return copy.sort((a, b) => b.price - a.price);
      case "year":       return copy.sort((a, b) => b.year - a.year);
    }
  };

  const totalPhones = phones.length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-slate-900">Каталог телефонов</h1>
        <p className="mt-2 text-slate-500">
          <span className="font-semibold text-slate-700">{filteredBrands.length}</span> брендов ·{" "}
          <span className="font-semibold text-slate-700">{totalPhones}</span> телефонов
        </p>
      </div>

      {/* Search + sort bar */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Поиск бренда..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        {openBrand && (
          <select
            value={sortMode}
            onChange={e => setSortMode(e.target.value as typeof sortMode)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-blue-400"
          >
            <option value="score">По рейтингу</option>
            <option value="price-asc">Цена ↑</option>
            <option value="price-desc">Цена ↓</option>
            <option value="year">Новинки</option>
          </select>
        )}
      </div>

      {/* Brand grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
        {filteredBrands.map(brand => {
          const count = brandPhones[brand]?.length ?? 0;
          const isOpen = openBrand === brand;
          return (
            <BrandTile
              key={brand}
              brand={brand}
              count={count}
              isOpen={isOpen}
              onToggle={() => setOpenBrand(prev => prev === brand ? null : brand)}
            />
          );
        })}
      </div>

      {/* Accordion panel */}
      {openBrand && brandPhones[openBrand] && (
        <div className="mt-6 rounded-2xl border border-blue-200 bg-white shadow-xl overflow-hidden">
          {/* Panel header */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b border-slate-100"
            style={{
              background: `linear-gradient(135deg, ${BRAND_META[openBrand]?.g1 ?? "#3b82f6"}, ${BRAND_META[openBrand]?.g2 ?? "#6366f1"})`,
            }}
          >
            <div className="flex items-center gap-3">
              <Smartphone className="h-5 w-5 text-white/80" />
              <h2 className="text-lg font-bold text-white">
                {openBrand} — {brandPhones[openBrand].length}{" "}
                {brandPhones[openBrand].length === 1 ? "телефон" : brandPhones[openBrand].length < 5 ? "телефона" : "телефонов"}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href={`/phones?brand=${encodeURIComponent(openBrand)}`}
                className="rounded-xl bg-white/20 hover:bg-white/30 px-4 py-1.5 text-sm font-semibold text-white transition-colors"
              >
                Полный каталог →
              </Link>
              <button
                onClick={() => setOpenBrand(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              >
                <ChevronUp className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Phone grid */}
          <div className="p-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {sortedPhones(brandPhones[openBrand]).map(phone => (
                <MiniCard key={phone.id} phone={phone} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Empty state */}
      {filteredBrands.length === 0 && (
        <div className="mt-20 flex flex-col items-center gap-4 text-center">
          <span className="text-5xl">🔍</span>
          <p className="text-lg font-semibold text-slate-700">Бренд «{search}» не найден</p>
          <button
            onClick={() => setSearch("")}
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Сбросить поиск
          </button>
        </div>
      )}
    </div>
  );
}
