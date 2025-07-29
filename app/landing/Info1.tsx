'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Info1() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen w-full flex items-center bg-black relative overflow-hidden py-8 sm:py-0 tracking-tight leading-tight">
      {/* GRADIENTE DE FONDO */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/30 to-blue-400/50 blur-3xl scale-150 translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
          {/* CUADRADO SUPERIOR IZQUIERDO */}
          <div className="md:col-span-2 h-96 bg-[#171717] rounded-2xl transition-all duration-300 flex flex-col justify-start items-start p-8">
            <h2 className="text-3xl font-extrabold mb-2 text-white">
              {t('info1.innovation.title')}
            </h2>
            <p className="mb-6 text-lg text-white/80 max-w-md">
              {t('info1.innovation.description')}
            </p>
            <div className="mt-auto">
              <svg
                className="w-14 h-14 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>

          {/* CUADRADO SUPERIOR DERECHO */}
          <div className="h-96 bg-[#171717] rounded-2xl transition-all duration-300 flex flex-col justify-start items-start p-8">
            <h2 className="text-2xl font-bold mb-2 text-white">
              {t('info1.team.title')}
            </h2>
            <p className="mb-6 text-base text-white/80">
              {t('info1.team.description')}
            </p>
            <div className="mt-auto">
              <svg
                className="w-12 h-12 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>

          {/* CUADRADO INFERIOR */}
          <div className="md:col-span-3 h-96 bg-[#171717] rounded-2xl transition-all duration-300 flex flex-col justify-start items-start p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              {t('info1.solutions.title')}
            </h2>
            <p className="mb-4 text-base md:text-lg text-white/80 max-w-xl">
              {t('info1.solutions.description')}
            </p>
            <div className="mt-auto">
              <svg
                className="w-20 h-20 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
