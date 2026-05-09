"use client";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { phones } from "@/data/phones";
import PhoneCard from "@/components/PhoneCard";
import FilterBar, { Filters } from "@/components/FilterBar";
import { Phone } from "@/types/phone";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";

const MAX_COMPARE = 3;

function PhonesContent() {
  const searchParams = useSearchParams();
  const brandFromUrl = searchParams.get("brand") ?? "";

  const [filters, setFilters] = useState<Filters>({
    search: "",
    brand: brandFromUrl,
    year: "",
    sort: "score",
    fiveG: false,
    nfc: false,
  });
  const [compareList, setCompareList] = useState<Phone[]>([]);

  const filtered = useMemo(() => {
    let list = [...phones];
    if (filters.search) {
      const q = filters.search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    }
    if (filters.brand) list = list.filter((p) => p.brand === filters.brand);
    if (filters.year) list = list.filter((p) => p.year === parseInt(filters.year));
    if (filters.fiveG) list = list.filter((p) => p.specs.fiveG);
    if (filters.nfc) list = list.filter((p) => p.specs.nfc);
    switch (filters.sort) {
      case "score": list.sort((a, b) => b.totalScore - a.totalScore); break;
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "name": list.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return list;
  }, [filters]);

  const handleCompare = (phone: Phone) => {
    setCompareList((prev) => {
      if (prev.find((p) => p.id === phone.id)) return prev.filter((p) => p.id !== phone.id);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, phone];
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Все смартфоны</h1>
        <p className="mt-2 text-slate-500">
          Найдено: <span className="font-semibold text-slate-700">{filtered.length}</span> из {phones.length}
        </p>
      </div>
      <div className="mb-6">
        <FilterBar filters={filters} onChange={setFilters} />
      </div>
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-24 text-center">
          <span className="text-5xl">🔍</span>
          <p className="text-lg font-semibold text-slate-700">Ничего не найдено</p>
          <p className="text-slate-500">Попробуйте изменить фильтры</p>
          <button
            onClick={() => setFilters({ search: "", brand: "", year: "", sort: "score", fiveG: false, nfc: false })}
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Сбросить фильтры
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((phone, i) => (
            <PhoneCard
              key={phone.id}
              phone={phone}
              rank={filters.sort === "score" ? phones.indexOf(phone) + 1 : undefined}
              onAddToCompare={handleCompare}
              isInCompare={!!compareList.find((p) => p.id === phone.id)}
            />
          ))}
        </div>
      )}

      {/* Compare sticky bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 rounded-2xl border border-blue-200 bg-white px-6 py-4 shadow-2xl shadow-blue-100">
          <div className="flex items-center gap-2">
            {compareList.map((p) => (
              <div key={p.id} className="flex items-center gap-1.5 rounded-xl bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                {p.name}
                <button onClick={() => handleCompare(p)} className="ml-1 text-blue-400 hover:text-blue-700">×</button>
              </div>
            ))}
            {Array.from({ length: MAX_COMPARE - compareList.length }).map((_, i) => (
              <div key={i} className="rounded-xl border-2 border-dashed border-slate-200 px-6 py-1.5 text-sm text-slate-400">
                + телефон
              </div>
            ))}
          </div>
          <Link
            href={`/compare?phones=${compareList.map((p) => p.slug).join(",")}`}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-lg transition-shadow whitespace-nowrap"
          >
            Сравнить →
          </Link>
        </div>
      )}
    </div>
  );
}

export default function PhonesPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-400">Загрузка...</div>}>
      <PhonesContent />
    </Suspense>
  );
}
