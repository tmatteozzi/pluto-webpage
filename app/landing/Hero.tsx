"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      <div className="flex flex-col items-center justify-start h-full pt-36 w-xl">
        <h1 className="text-5xl md:text-2xl lg:text-6xl text-center font-[600] text-white mb-6 tracking-tight leading-[1]">
          Try Pluto AI
        </h1>
        <p className="text-lg leading-[1.4] text-neutral-400 text-center">
          Deja que Pluto AI organize tus gastos, transfiera a tus contactos y te
          asista con todas tus finanzas
        </p>
        <div className="flex gap-2 mt-6">
          <button className="bg-[#262626] text-white px-4 py-2 rounded-2xl font-medium">
            Download the app
          </button>
          <button className="bg-white text-black px-10 py-2 rounded-2xl font-medium">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-lg aspect-square bg-white absolute blur-xl -bottom-[316px] rounded-full left-1/2 -translate-x-1/2"></div>
      <div className="custom-shape-divider-bottom-1754088585 z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
