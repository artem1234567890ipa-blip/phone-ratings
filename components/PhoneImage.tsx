"use client";
import { useState } from "react";
import Image from "next/image";

// ── SVG phone silhouette fallback ────────────────────────────────────────────
const BRAND_META: Record<string, { g1: string; g2: string }> = {
  Apple:    { g1: "#1c1c1e", g2: "#3a3a3c" },
  Samsung:  { g1: "#1428a0", g2: "#0070c9" },
  Google:   { g1: "#0f9d58", g2: "#34a853" },
  Xiaomi:   { g1: "#ff6900", g2: "#ff9500" },
  OnePlus:  { g1: "#eb0029", g2: "#ff3b4e" },
  Sony:     { g1: "#001489", g2: "#003087" },
  Nothing:  { g1: "#2c2c2e", g2: "#48484a" },
  POCO:     { g1: "#d4a400", g2: "#e6b800" },
  Realme:   { g1: "#ff8c00", g2: "#ffa500" },
  Huawei:   { g1: "#c0392b", g2: "#e74c3c" },
  Honor:    { g1: "#00457c", g2: "#0070c0" },
  Motorola: { g1: "#2c3e50", g2: "#34495e" },
  OPPO:     { g1: "#0d47a1", g2: "#1565c0" },
  Vivo:     { g1: "#1a2a6c", g2: "#2e4a9e" },
  Asus:     { g1: "#1a1a2e", g2: "#16213e" },
  Nokia:    { g1: "#124191", g2: "#1565c0" },
  Infinix:  { g1: "#7b1fa2", g2: "#9c27b0" },
  Tecno:    { g1: "#1565c0", g2: "#1976d2" },
  ZTE:      { g1: "#b71c1c", g2: "#d32f2f" },
  Lenovo:   { g1: "#e53935", g2: "#f44336" },
  TCL:      { g1: "#00695c", g2: "#00897b" },
};

function PhoneSVG({ brand, name }: { brand: string; name: string }) {
  const meta = BRAND_META[brand] ?? { g1: "#3b82f6", g2: "#8b5cf6" };
  const short = name.replace(brand, "").trim().split(" ").slice(0, 3).join(" ");
  const uid = `ph_${brand.replace(/\W/g, "")}`;

  return (
    <svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={`${uid}_b`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={meta.g1}/>
          <stop offset="100%" stopColor={meta.g2}/>
        </linearGradient>
        <linearGradient id={`${uid}_s`} x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#0a0a1a"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
      </defs>
      {/* Body */}
      <rect x="2" y="2" width="196" height="396" rx="32" fill={`url(#${uid}_b)`}/>
      {/* Side buttons */}
      <rect x="198" y="88" width="4" height="44" rx="2" fill="rgba(0,0,0,0.3)"/>
      <rect x="198" y="142" width="4" height="44" rx="2" fill="rgba(0,0,0,0.3)"/>
      <rect x="-2" y="78" width="4" height="32" rx="2" fill="rgba(0,0,0,0.25)"/>
      <rect x="-2" y="118" width="4" height="56" rx="2" fill="rgba(0,0,0,0.25)"/>
      {/* Screen */}
      <rect x="11" y="30" width="178" height="340" rx="22" fill={`url(#${uid}_s)`}/>
      {/* Dynamic island */}
      <rect x="72" y="15" width="56" height="14" rx="7" fill="#000"/>
      {/* Shine */}
      <rect x="11" y="30" width="178" height="340" rx="22" fill="url(#shine)" opacity="0.05"/>
      {/* Brand name */}
      <text x="100" y="210" textAnchor="middle" fill="rgba(255,255,255,0.9)"
        fontSize="18" fontWeight="700" fontFamily="system-ui,-apple-system,sans-serif">{brand}</text>
      <text x="100" y="232" textAnchor="middle" fill="rgba(255,255,255,0.4)"
        fontSize="10" fontFamily="system-ui,-apple-system,sans-serif">{short}</text>
      {/* Home bar */}
      <rect x="72" y="358" width="56" height="4" rx="2" fill="rgba(255,255,255,0.18)"/>
    </svg>
  );
}

// ── Component ────────────────────────────────────────────────────────────────
interface Props {
  src: string;
  alt: string;
  brand: string;
  name: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  onLoad?: () => void;
}

export default function PhoneImage({ src, alt, brand, name, fill, sizes, className, onLoad }: Props) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error) {
    return (
      <div className={`flex items-center justify-center ${fill ? "absolute inset-0" : "w-full h-full"}`}>
        <PhoneSVG brand={brand} name={name}/>
      </div>
    );
  }

  return (
    <>
      {/* Show SVG while loading */}
      {!loaded && (
        <div className={`flex items-center justify-center ${fill ? "absolute inset-0" : "w-full h-full"} z-0`}>
          <PhoneSVG brand={brand} name={name}/>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={`${className ?? ""} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        unoptimized
        onError={() => setError(true)}
        onLoad={() => { setLoaded(true); onLoad?.(); }}
        style={fill ? {} : undefined}
      />
    </>
  );
}
