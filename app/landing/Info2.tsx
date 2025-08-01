'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function Info2() {
  const { t } = useLanguage();

  return (
    <section className="w-full flex items-center bg-black relative overflow-hidden leading-tight tracking-tighter">
      {/* GRADIENTE DE FONDO */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/30 to-blue-400/50 blur-3xl scale-150 translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* CONTENIDO A LA IZQUIERDA */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
              {t('info2.title')}
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 px-2 sm:px-0">
              {t('info2.description')}
            </p>
            <div className="space-y-3 sm:space-y-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-start gap-3 px-2 sm:px-0">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-left">
                  {t('info2.feature1')}
                </p>
              </div>
              <div className="flex items-start gap-3 px-2 sm:px-0">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-left">
                  {t('info2.feature2')}
                </p>
              </div>
              <div className="flex items-start gap-3 px-2 sm:px-0">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-left">
                  {t('info2.feature3')}
                </p>
              </div>
            </div>
          </div>

          {/* CONTENIDO A LA DERECHA */}
          <div className="flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative">
              <Image
                src="/mockup7.png"
                alt="Pluto App Features"
                width={1000}
                height={1000}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[40vh] lg:h-auto sm:pb-22"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
