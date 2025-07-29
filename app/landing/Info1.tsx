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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          {/* CUADRADO IZQUIERDO */}
          <div className="h-[500px] bg-[#171717] rounded-2xl transition-all duration-300 flex flex-col justify-start items-start p-8">
            <h2 className="text-3xl font-extrabold mb-2 text-white">
              {t('info1.innovation.title')}
            </h2>
            <p className="mb-6 text-lg text-white/80 max-w-md">
              {t('info1.innovation.description')}
            </p>
            <div className="mt-auto">
              <button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300 text-sm sm:text-md hover:scale-105 tracking-tighter">
                Conocer más
              </button>
            </div>
          </div>

          {/* CUADRADO DERECHO */}
          <div className="h-[500px] bg-[#171717] rounded-2xl transition-all duration-300 flex flex-col justify-start items-start p-8">
            <h2 className="text-2xl font-bold mb-2 text-white">
              {t('info1.team.title')}
            </h2>
            <p className="mb-6 text-base text-white/80">
              {t('info1.team.description')}
            </p>
            <div className="mt-auto">
              <button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300 text-sm sm:text-md hover:scale-105 tracking-tighter">
                Descargar App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
