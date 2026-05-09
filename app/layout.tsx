import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "PhoneRank — Рейтинг смартфонов",
  description: "Объективный рейтинг всех смартфонов мира на основе характеристик и цен",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <footer className="mt-24 border-t border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-500">
                © 2025 PhoneRank — данные обновляются на основе официальных характеристик
              </p>
              <p className="text-xs text-slate-400">
                Рейтинг формируется по: производительности, камере, батарее, экрану, дизайну и ценности
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
