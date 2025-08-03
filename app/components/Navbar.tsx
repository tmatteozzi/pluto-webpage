"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ES" ? "EN" : "ES");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-xl mx-auto px-4 py-3 bg-[#171717]/50 backdrop-blur-lg mt-4 rounded-full">
        <div className="flex items-center justify-between">
          {/* Logo/Texto a la izquierda */}
          <div className="flex items-center space-x-2">
            <Image
              src="/pluto-logo.png"
              alt="Pluto Logo"
              width={100}
              height={100}
              className="w-7 h-7"
            />
            <Link
              href="/"
              className="text-xl focus:outline-none font-bold text-white hover:text-gray-200 transition-colors tracking-tighter"
            >
              {t("common.pluto")}
            </Link>
          </div>

          {/* Links y botones a la derecha */}
          <div className="flex items-center space-x-6">
            {/* Links de navegación */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="#pricing"
                className="text-white/80 hover:text-white transition-colors font-semibold tracking-tighter"
              >
                {t("nav.pricing")}
              </Link>
            </div>

            {/* Botón de cambio de idioma */}
            {/* <button
              onClick={toggleLanguage}
              className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl tracking-tighter"
            >
              <span className="flex items-center space-x-2">
                <span className="font-semibold">{language}</span>
                <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                  {language === "ES" ? "EN" : "ES"}
                </span>
              </span>
            </button> */}

            {/* Botón Abrir cuenta */}
            <Link
              href="/login"
              className="cursor-pointer bg-white rounded-full text-black px-4 py-2 font-[600] hover:bg-gray-200 transition-all duration-300 tracking-tight"
            >
              {t("nav.openAccount")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
