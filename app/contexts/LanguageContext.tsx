"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ES" | "EN";

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
    "nav.features": "Características",
    "nav.pricing": "Precios",
    "nav.contact": "Contacto",
    "nav.openAccount": "Iniciar sesión",

    // Hero
    "hero.badge": "Billetera con IA",
    "hero.title": "El Futuro de",
    "hero.titleHighlight": "las Finanzas Digitales",
    "hero.subtitle":
      "Experimenta la próxima generación de gestión financiera con Pluto, la billetera con IA que entiende tus necesidades.",
    "hero.primaryButton": "Comenzar",
    "hero.secondaryButton": "Saber Más",
    "hero.stats.users": "10K+",
    "hero.stats.usersLabel": "Usuarios Activos",
    "hero.stats.transactions": "1M+",
    "hero.stats.transactionsLabel": "Transacciones",
    "hero.stats.security": "99.9%",
    "hero.stats.securityLabel": "Puntuación de Seguridad",

    // Info1
    "info1.innovation.title": "Innovación Constante",
    "info1.innovation.description":
      "Nos dedicamos a crear soluciones tecnológicas que marcan la diferencia, combinando creatividad y eficiencia para potenciar tu negocio.",
    "info1.team.title": "Equipo Experto",
    "info1.team.description":
      "Nuestro equipo está formado por profesionales apasionados y altamente capacitados en tecnología y diseño.",
    "info1.solutions.title": "Soluciones a Medida",
    "info1.solutions.description":
      "Adaptamos cada proyecto a las necesidades de nuestros clientes, asegurando resultados únicos y efectivos.",

    // Info2
    "info2.title": "Gestión inteligente de tus finanzas",
    "info2.description":
      "Pluto revoluciona la forma en que manejas tu dinero con tecnología de inteligencia artificial avanzada que aprende de tus hábitos financieros.",
    "info2.feature1":
      "Análisis automático de gastos con categorización inteligente",
    "info2.feature2":
      "Predicciones financieras basadas en tu historial de transacciones",
    "info2.feature3":
      "Asistente virtual disponible 24/7 para consultas financieras",

    // Info3
    "info3.title": "Seguridad y control en tus manos",
    "info3.description":
      "Con Pluto, tu información financiera está protegida con los más altos estándares de seguridad y siempre tienes el control total de tus movimientos.",
    "info3.extra":
      "Nuestra plataforma utiliza tecnología de vanguardia para garantizar que tus datos y transacciones estén siempre seguros. Además, te brindamos herramientas intuitivas para que puedas monitorear y gestionar tu dinero de forma sencilla y personalizada.",

    // Info4
    "info4.title": "Descubre el poder de Pluto",
    "info4.description":
      "Explora todas las funcionalidades que hacen de Pluto tu compañero financiero perfecto.",
    "info4.card1.title": "Transferencias Instantáneas",
    "info4.card1.description":
      "Envía dinero a cualquier parte del mundo en segundos con la tecnología más avanzada.",
    "info4.card1.button": "Enviar dinero",
    "info4.card2.title": "Análisis Inteligente",
    "info4.card2.description":
      "Obtén insights detallados sobre tus gastos y ahorros con IA predictiva.",
    "info4.card2.button": "Ver análisis",
    "info4.card3.title": "Experiencia Completa",
    "info4.card3.description":
      "Todo lo que necesitas para gestionar tus finanzas de manera inteligente y segura.",
    "info4.card3.feature1": "Interfaz intuitiva diseñada para todos",
    "info4.card3.feature2": "Soporte 24/7 con asistente virtual",
    "info4.card3.feature3": "Integración con todos tus servicios favoritos",
    "info4.card3.button": "Comenzar ahora",

    // Footer
    "footer.description":
      "Tu billetera inteligente del futuro. Potenciada por inteligencia artificial para hacer que tus finanzas sean más simples, seguras y eficientes.",
    "footer.quickLinks": "Enlaces rápidos",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Términos de servicio",

    // Common
    "common.pluto": "Pluto",
  },
  EN: {
    // Navbar
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.openAccount": "Log in",

    // Hero
    "hero.badge": "AI-Powered Wallet",
    "hero.title": "The Future of",
    "hero.titleHighlight": "Digital Finance",
    "hero.subtitle":
      "Experience the next generation of financial management with Pluto, the AI-powered wallet that understands your needs.",
    "hero.primaryButton": "Get Started",
    "hero.secondaryButton": "Learn More",
    "hero.stats.users": "10K+",
    "hero.stats.usersLabel": "Active Users",
    "hero.stats.transactions": "1M+",
    "hero.stats.transactionsLabel": "Transactions",
    "hero.stats.security": "99.9%",
    "hero.stats.securityLabel": "Security Score",

    // Info1
    "info1.innovation.title": "Constant Innovation",
    "info1.innovation.description":
      "We are dedicated to creating technological solutions that make a difference, combining creativity and efficiency to boost your business.",
    "info1.team.title": "Expert Team",
    "info1.team.description":
      "Our team consists of passionate and highly skilled professionals in technology and design.",
    "info1.solutions.title": "Custom Solutions",
    "info1.solutions.description":
      "We adapt each project to our clients' needs, ensuring unique and effective results.",

    // Info2
    "info2.title": "Smart financial management",
    "info2.description":
      "Pluto revolutionizes how you manage your money with advanced artificial intelligence technology that learns from your financial habits.",
    "info2.feature1":
      "Automatic expense analysis with intelligent categorization",
    "info2.feature2": "Financial predictions based on your transaction history",
    "info2.feature3": "Virtual assistant available 24/7 for financial queries",

    // Info3
    "info3.title": "Security and control at your fingertips",
    "info3.description":
      "With Pluto, your financial information is protected with the highest security standards and you always have full control over your transactions.",
    "info3.extra":
      "Our platform uses cutting-edge technology to ensure your data and transactions are always safe. Plus, we provide intuitive tools so you can monitor and manage your money easily and in a personalized way.",
    "info3.feature1": "Biometric and two-factor authentication",
    "info3.feature2": "Real-time notifications for any activity",
    "info3.feature3": "Customizable limits and alerts settings",

    // Info4
    "info4.title": "Discover the power of Pluto",
    "info4.description":
      "Explore all the features that make Pluto your perfect financial companion.",
    "info4.card1.title": "Instant Transfers",
    "info4.card1.description":
      "Send money anywhere in the world in seconds with the most advanced technology.",
    "info4.card1.button": "Send money",
    "info4.card2.title": "Smart Analytics",
    "info4.card2.description":
      "Get detailed insights about your expenses and savings with predictive AI.",
    "info4.card2.button": "View analytics",
    "info4.card3.title": "Complete Experience",
    "info4.card3.description":
      "Everything you need to manage your finances intelligently and securely.",
    "info4.card3.feature1": "Intuitive interface designed for everyone",
    "info4.card3.feature2": "24/7 support with virtual assistant",
    "info4.card3.feature3": "Integration with all your favorite services",
    "info4.card3.button": "Get started",

    // Footer
    "footer.description":
      "Your smart wallet of the future. Powered by artificial intelligence to make your finances simpler, safer and more efficient.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Common
    "common.pluto": "Pluto",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
