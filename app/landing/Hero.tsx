"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-2xl lg:text-6xl text-center font-[600] text-white mb-6 tracking-tight leading-[1.1]">
          Deja que Pluto maneje
          <br /> tus finanzas
        </h1>
      </div>
    </section>
  );
}
