'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="h-screen w-full flex items-center bg-black relative overflow-hidden">
      {/* Gradiente de fondo que se extiende hasta la derecha */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/30 to-blue-400/50 blur-3xl scale-150 translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido a la izquierda */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-[3.5rem] font-extrabold mb-6 text-white leading-tight tracking-tighter">
              {t('hero.title')}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed tracking-tighter">
              {t('hero.subtitle')}
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-white text-black px-6 py-2 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-3 text-md hover:scale-105 tracking-tighter">
                {t('hero.downloadButton')}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Foto a la derecha */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src="/mockup.png"
                alt="Pluto App Mockup"
                width={1000}
                height={1000}
                className="relative w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
