'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Info4() {
  const { t } = useLanguage();

  return (
    <section className="w-full flex items-center bg-[#171717] relative overflow-hidden py-12 sm:py-16 md:py-24 leading-tight tracking-tighter">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* TÍTULO Y DESCRIPCIÓN */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white ">
            {t('info4.title')}
          </h2>
          <p className="text-sm sm:text-md md:text-lg text-gray-300 max-w-3xl mx-auto px-2">
            {t('info4.description')}
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 min-h-[400px] sm:min-h-[500px] lg:h-[650px]">
          {/* PRIMERA COLUMNA - 2 GRIDS VERTICALES */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 h-full">
            {/* PRIMER CUADRADO */}
            <div className="flex-1 bg-[#000109] rounded-xl sm:rounded-2xl transition-all duration-300 flex flex-col justify-start items-start p-4 sm:p-6 lg:p-8 hover:bg-[#16213e] hover:scale-[1.02] min-h-[180px] sm:min-h-[200px]">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white">
                {t('info4.card1.title')}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed flex-1">
                {t('info4.card1.description')}
              </p>
              <div className="mt-4 sm:mt-auto w-full">
                <button className="w-full sm:w-auto bg-white text-black px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300 text-xs sm:text-sm hover:scale-105 tracking-tighter">
                  {t('info4.card1.button')}
                </button>
              </div>
            </div>

            {/* SEGUNDO CUADRADO */}
            <div className="flex-1 bg-[#000109] rounded-xl sm:rounded-2xl transition-all duration-300 flex flex-col justify-start items-start p-4 sm:p-6 lg:p-8 hover:bg-[#16213e] hover:scale-[1.02] min-h-[180px] sm:min-h-[200px]">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white">
                {t('info4.card2.title')}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed flex-1">
                {t('info4.card2.description')}
              </p>
              <div className="mt-4 sm:mt-auto w-full">
                <button className="w-full sm:w-auto bg-white text-black px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300 text-xs sm:text-sm hover:scale-105 tracking-tighter">
                  {t('info4.card2.button')}
                </button>
              </div>
            </div>
          </div>

          {/* SEGUNDA COLUMNA - COMPLETA */}
          <div className="h-full bg-[#000109] rounded-xl sm:rounded-2xl transition-all duration-300 flex flex-col justify-start items-start p-4 sm:p-6 lg:p-8 hover:bg-[#16213e] hover:scale-[1.02] min-h-[300px] sm:min-h-[400px]">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">
              {t('info4.card3.title')}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mb-4 sm:mb-6">
              {t('info4.card3.description')}
            </p>

            {/* LISTA DE CARACTERÍSTICAS */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed">
                  {t('info4.card3.feature1')}
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed">
                  {t('info4.card3.feature2')}
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed">
                  {t('info4.card3.feature3')}
                </p>
              </div>
            </div>

            <div className="mt-auto w-full">
              <button className="w-full sm:w-auto bg-white text-black px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300 text-xs sm:text-sm hover:scale-105 tracking-tighter">
                {t('info4.card3.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
