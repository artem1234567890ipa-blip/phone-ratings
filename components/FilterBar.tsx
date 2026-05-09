"use client";
import { brands, years } from "@/data/phones";
import { Search, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Filters {
  search: string;
  brand: string;
  year: string;
  sort: "score" | "price-asc" | "price-desc" | "name";
  fiveG: boolean;
  nfc: boolean;
}

interface Props {
  filters: Filters;
  onChange: (f: Filters) => void;
}

export default function FilterBar({ filters, onChange }: Props) {
  const set = (key: keyof Filters, value: string | boolean) =>
    onChange({ ...filters, [key]: value });

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
        <SlidersHorizontal className="h-4 w-4" />
        Фильтры
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Поиск телефона..."
          value={filters.search}
          onChange={(e) => set("search", e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Бренд</label>
          <select
            value={filters.brand}
            onChange={(e) => set("brand", e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
          >
            <option value="">Все</option>
            {brands.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Год</label>
          <select
            value={filters.year}
            onChange={(e) => set("year", e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
          >
            <option value="">Все</option>
            {years.map((y) => <option key={y}>{y}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Сортировка</label>
          <select
            value={filters.sort}
            onChange={(e) => set("sort", e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
          >
            <option value="score">По рейтингу</option>
            <option value="price-asc">Цена ↑</option>
            <option value="price-desc">Цена ↓</option>
            <option value="name">По названию</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Функции</label>
          <div className="flex gap-2">
            <button
              onClick={() => set("fiveG", !filters.fiveG)}
              className={cn(
                "flex-1 rounded-xl border px-3 py-2 text-xs font-semibold transition",
                filters.fiveG ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 bg-slate-50 text-slate-600"
              )}
            >
              5G
            </button>
            <button
              onClick={() => set("nfc", !filters.nfc)}
              className={cn(
                "flex-1 rounded-xl border px-3 py-2 text-xs font-semibold transition",
                filters.nfc ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 bg-slate-50 text-slate-600"
              )}
            >
              NFC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
