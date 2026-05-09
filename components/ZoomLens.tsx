"use client";
import { useState, useRef, useCallback, MouseEvent } from "react";
import PhoneImage from "./PhoneImage";

interface Props {
  src: string;
  alt: string;
  brand: string;
  name: string;
  zoomFactor?: number;
  lensSize?: number;
}

export default function ZoomLens({
  src, alt, brand, name,
  zoomFactor = 2.8,
  lensSize = 140,
}: Props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const w = containerRef.current?.offsetWidth ?? 320;
  const h = containerRef.current?.offsetHeight ?? 320;

  const bgX = -(pos.x * zoomFactor - lensSize / 2);
  const bgY = -(pos.y * zoomFactor - lensSize / 2);

  const canZoom = imgLoaded && !imgError;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{ cursor: canZoom ? "crosshair" : "default" }}
      onMouseMove={handleMove}
      onMouseEnter={() => canZoom && setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* Actual image */}
      <div className="relative w-full h-full">
        <PhoneImage
          src={src}
          alt={alt}
          brand={brand}
          name={name}
          fill
          className="object-contain drop-shadow-2xl"
          sizes="320px"
          onLoad={() => setImgLoaded(true)}
        />
      </div>

      {/* Zoom lens */}
      {show && canZoom && (
        <>
          {/* Dark overlay ring */}
          <div
            className="pointer-events-none absolute rounded-full z-20 transition-opacity duration-150"
            style={{
              width: lensSize + 6,
              height: lensSize + 6,
              left: pos.x - (lensSize + 6) / 2,
              top: pos.y - (lensSize + 6) / 2,
              background: "transparent",
              boxShadow: "0 0 0 2000px rgba(0,0,0,0.18)",
              borderRadius: "50%",
            }}
          />
          {/* Lens itself */}
          <div
            className="pointer-events-none absolute rounded-full z-30 overflow-hidden"
            style={{
              width: lensSize,
              height: lensSize,
              left: pos.x - lensSize / 2,
              top: pos.y - lensSize / 2,
              backgroundImage: `url(${src})`,
              backgroundSize: `${w * zoomFactor}px ${h * zoomFactor}px`,
              backgroundPosition: `${bgX}px ${bgY}px`,
              backgroundRepeat: "no-repeat",
              border: "2.5px solid rgba(255,255,255,0.85)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.2)",
            }}
          />
          {/* Crosshair center */}
          <div
            className="pointer-events-none absolute z-40"
            style={{
              width: 12,
              height: 12,
              left: pos.x - 6,
              top: pos.y - 6,
            }}
          >
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/60 -translate-x-1/2" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/60 -translate-y-1/2" />
          </div>
        </>
      )}

      {/* Hover hint */}
      {!show && canZoom && (
        <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" strokeWidth="2"/>
            <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-white text-xs font-medium">Увеличить</span>
        </div>
      )}
    </div>
  );
}
