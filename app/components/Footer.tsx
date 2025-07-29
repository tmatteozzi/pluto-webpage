'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#171717] py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-3xl font-extrabold text-white hover:text-gray-200 transition-colors tracking-tighter mb-6 inline-block"
            >
              {t('common.pluto')}
            </Link>
            <p className="text-white/80 text-base leading-relaxed max-w-md tracking-tighter">
              {t('footer.description')}
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-tighter text-lg">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-white/70 hover:text-white transition-colors text-sm tracking-tighter"
                >
                  {t('nav.features')}
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-white/70 hover:text-white transition-colors text-sm tracking-tighter"
                >
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors text-sm tracking-tighter"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-tighter text-lg">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@pluto.com"
                  className="text-white/70 hover:text-white transition-colors text-sm tracking-tighter"
                >
                  info@pluto.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-white/70 hover:text-white transition-colors text-sm tracking-tighter"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright y enlaces legales */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm tracking-tighter">
              © 2024 {t('common.pluto')}. {t('footer.rights')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-white/50 hover:text-white transition-colors text-sm tracking-tighter"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                href="/terms"
                className="text-white/50 hover:text-white transition-colors text-sm tracking-tighter"
              >
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
