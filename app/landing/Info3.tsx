'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function Info3() {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <section className="w-full flex items-center bg-black relative overflow-hidden pb-16 sm:pb-36 pt-8 rounded-b-[4rem] leading-tight tracking-tighter">
        {/* GRADIENTE DE FONDO */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/30 to-blue-400/50 blur-3xl scale-150 translate-x-1/4 pointer-events-none rounded-b-[4rem]"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* CONTENIDO A LA IZQUIERDA - IMAGEN */}
            <div className="flex items-center justify-center order-1 lg:order-1 mb-6 lg:mb-0">
              <div className="relative">
                <Image
                  src="/mockup.png"
                  alt="Pluto App Security"
                  width={800}
                  height={800}
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>

            {/* CONTENIDO A LA DERECHA - TEXTO */}
            <div className="text-center lg:text-left order-2 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                {t('info3.title')}
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 px-2 sm:px-0">
                {t('info3.description')}
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 px-2 sm:px-0">
                {t('info3.extra')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FONDO DE LA SIGUIENTE SECCIÓN PARA LAS ESQUINAS REDONDEADAS */}
      <div className="absolute bottom-0 left-0 right-0 h-[3rem] bg-[#171717] -z-10"></div>
    </div>
  );
}
