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

    // Info1
    'info1.innovation.title': 'Innovación Constante',
    'info1.innovation.description': 'Nos dedicamos a crear soluciones tecnológicas que marcan la diferencia, combinando creatividad y eficiencia para potenciar tu negocio.',
    'info1.team.title': 'Equipo Experto',
    'info1.team.description': 'Nuestro equipo está formado por profesionales apasionados y altamente capacitados en tecnología y diseño.',
    'info1.solutions.title': 'Soluciones a Medida',
    'info1.solutions.description': 'Adaptamos cada proyecto a las necesidades de nuestros clientes, asegurando resultados únicos y efectivos.',

    // Info2
    'info2.title': 'Gestión inteligente de tus finanzas',
    'info2.description':
      'Pluto revoluciona la forma en que manejas tu dinero con tecnología de inteligencia artificial avanzada que aprende de tus hábitos financieros.',
    'info2.feature1':
      'Análisis automático de gastos con categorización inteligente',
    'info2.feature2':
      'Predicciones financieras basadas en tu historial de transacciones',
    'info2.feature3':
      'Asistente virtual disponible 24/7 para consultas financieras',

    // Info3
    'info3.title': 'Seguridad y control en tus manos',
    'info3.description':
      'Con Pluto, tu información financiera está protegida con los más altos estándares de seguridad y siempre tienes el control total de tus movimientos.',
    'info3.extra':
      'Nuestra plataforma utiliza tecnología de vanguardia para garantizar que tus datos y transacciones estén siempre seguros. Además, te brindamos herramientas intuitivas para que puedas monitorear y gestionar tu dinero de forma sencilla y personalizada.',

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

    // Info1
    'info1.innovation.title': 'Constant Innovation',
    'info1.innovation.description': 'We are dedicated to creating technological solutions that make a difference, combining creativity and efficiency to boost your business.',
    'info1.team.title': 'Expert Team',
    'info1.team.description': 'Our team consists of passionate and highly skilled professionals in technology and design.',
    'info1.solutions.title': 'Custom Solutions',
    'info1.solutions.description': 'We adapt each project to our clients\' needs, ensuring unique and effective results.',

    // Info2
    'info2.title': 'Smart financial management',
    'info2.description':
      'Pluto revolutionizes how you manage your money with advanced artificial intelligence technology that learns from your financial habits.',
    'info2.feature1':
      'Automatic expense analysis with intelligent categorization',
    'info2.feature2': 'Financial predictions based on your transaction history',
    'info2.feature3': 'Virtual assistant available 24/7 for financial queries',

    // Info3
    'info3.title': 'Security and control at your fingertips',
    'info3.description':
      'With Pluto, your financial information is protected with the highest security standards and you always have full control over your transactions.',
    'info3.extra':
      'Our platform uses cutting-edge technology to ensure your data and transactions are always safe. Plus, we provide intuitive tools so you can monitor and manage your money easily and in a personalized way.',
    'info3.feature1': 'Biometric and two-factor authentication',
    'info3.feature2': 'Real-time notifications for any activity',
    'info3.feature3': 'Customizable limits and alerts settings',

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
