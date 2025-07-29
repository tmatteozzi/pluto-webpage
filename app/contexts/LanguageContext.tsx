'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ES' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  ES: {
    // Navbar
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
    'nav.openAccount': 'Abrir cuenta',

    // Hero
    'hero.title': 'Tu billetera inteligente. Potenciada por IA.',
    'hero.subtitle':
      'Pluto te ayuda a enviar dinero, consultar tus movimientos y obtener respuestas instantáneas sobre tus finanzas con solo escribir o hablar.',
    'hero.downloadButton': 'Descargar app',

    // Common
    'common.pluto': 'Pluto'
  },
  EN: {
    // Navbar
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.openAccount': 'Open Account',

    // Hero
    'hero.title': 'Your smart wallet. Powered by AI.',
    'hero.subtitle':
      'Pluto helps you send money, check your transactions and get instant answers about your finances just by typing or speaking.',
    'hero.downloadButton': 'Download app',

    // Common
    'common.pluto': 'Pluto'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ES');

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
