export interface PhoneSpecs {
  display: string;
  processor: string;
  ram: string;
  storage: string;
  mainCamera: string;
  frontCamera: string;
  battery: string;
  os: string;
  charging: string;
  weight: string;
  dimensions: string;
  protection: string;
  nfc: boolean;
  fiveG: boolean;
}

export interface PhoneScores {
  performance: number;
  camera: number;
  battery: number;
  display: number;
  design: number;
  value: number;
}

export interface Phone {
  id: string;
  slug: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  priceLabel: string;
  year: number;
  color: string;
  specs: PhoneSpecs;
  scores: PhoneScores;
  totalScore: number;
  badge?: "Выбор редакции" | "Лучшая камера" | "Лучший бюджет" | "Лучший дизайн" | "Лучший звук" | "Лучший игровой";
  pros?: string[];
  cons?: string[];
  popularity?: number;   // 0-100
  isNew?: boolean;       // 2025-2026
  isTrending?: boolean;
}
