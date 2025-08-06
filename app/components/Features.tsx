"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { useState, useEffect } from "react";
import {
  MoreIcon,
  UserGroupIcon,
  LockIcon,
  TextIcon,
  CalendarIcon,
  MailIcon,
  LinkIcon,
  FileIcon,
  ImageIcon,
  CheckmarkCircleIcon,
  CalculatorIcon,
  SquareArrowDataTransferDiagonalIcon,
  EnergyRectangleIcon,
  AnalyticsUpIcon,
  EnergyIcon,
} from "@hugeicons/core-free-icons";

// Hook personalizado para la animación de texto
function useAnimatedText(texts: string[], interval: number = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTransitioning(false);
      }, 300); // Tiempo del blur out
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return { currentText: texts[currentIndex], isTransitioning };
}

// Hook para la animación de Pluto
function usePlutoAnimation() {
  const [showWaves, setShowWaves] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [currentWave, setCurrentWave] = useState(0);

  useEffect(() => {
    const startAnimation = () => {
      // Iniciar ondas
      setShowWaves(true);
      setCurrentWave(0);

      // Secuencia de ondas
      [0, 200, 400, 600].map((delay, index) =>
        setTimeout(() => setCurrentWave(index + 1), delay)
      );

      // Mostrar notificación después de las ondas
      setTimeout(() => {
        setShowWaves(false);
        setShowNotification(true);
      }, 1200);

      // Ocultar notificación
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      // Reiniciar animación
      setTimeout(() => {
        startAnimation();
      }, 4000);
    };

    startAnimation();

    return () => {
      // Cleanup timers si es necesario
    };
  }, []);

  return { showWaves, showNotification, currentWave };
}

// Hook para la animación del chat
function useChatAnimation() {
  const [messages, setMessages] = useState<
    Array<{
      id: number;
      text: string;
      isUser: boolean;
      visible: boolean;
      hasBalance?: boolean;
    }>
  >([]);

  useEffect(() => {
    const chatMessages = [
      { text: "Analiza mis gastos del mes", isUser: true },
      {
        text: "Este es tu balance de diciembre",
        isUser: false,
        hasBalance: true,
      },
    ];

    const startChat = () => {
      setMessages([]);

      // Mostrar mensajes uno por uno
      chatMessages.forEach((msg, index) => {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { ...msg, id: index, visible: false },
          ]);

          // Hacer visible el mensaje después de un pequeño delay
          setTimeout(() => {
            setMessages((prev) =>
              prev.map((m) => (m.id === index ? { ...m, visible: true } : m))
            );
          }, 100);
        }, index * 1500);
      });

      // Ocultar todos los mensajes después de mostrarlos
      setTimeout(
        () => {
          setMessages((prev) => prev.map((m) => ({ ...m, visible: false })));
        },
        chatMessages.length * 1500 + 2000
      );

      // Reiniciar después de que se oculten los mensajes
      setTimeout(
        () => {
          startChat();
        },
        chatMessages.length * 1500 + 3000
      );
    };

    startChat();
  }, []);

  return { messages };
}

// Componente para mostrar texto animado de transacciones
function AnimatedTransactionText() {
  const transactionTexts = [
    "Pay my rent",
    "Transfer to savings",
    "Pay electricity bill",
    "Send money to mom",
    "Invest in stocks",
    "Pay credit card",
    "Donate to charity",
    "Buy groceries",
  ];

  const { currentText, isTransitioning } = useAnimatedText(
    transactionTexts,
    2500
  );

  return (
    <span
      className={`text-base text-foreground transition-all duration-700 ${
        isTransitioning ? "blur-md opacity-10" : "blur-none opacity-100"
      }`}
    >
      {currentText}
    </span>
  );
}

// Componente de animación para Pluto Send Money
function PlutoSendMoneyAnimation() {
  const { showWaves, showNotification, currentWave } = usePlutoAnimation();

  return (
    <div className="relative flex items-center justify-center">
      {/* Círculo principal */}
      <div className="w-32 h-32 bg-foreground rounded-full relative z-10"></div>

      {/* Ondas circulares */}
      {showWaves && (
        <>
          {[1, 2, 3, 4].map((waveIndex) => (
            <div
              key={waveIndex}
              className={`absolute w-32 h-32 border-2 border-primary rounded-full wave-animation ${
                currentWave >= waveIndex ? "wave-expand" : "wave-initial"
              }`}
              style={{
                animationDelay: `${(waveIndex - 1) * 200}ms`,
              }}
            />
          ))}
        </>
      )}

      {/* Notificación */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 ${
          showNotification
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-card rounded-xl p-3 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span className="text-sm font-medium text-foreground whitespace-nowrap">
              Pluto AI
            </span>
          </div>
          <div className="text-sm text-muted-foreground mt-1 whitespace-nowrap">
            He transferido $5000 a Tomás Matteozzi
          </div>
        </div>
      </div>

      <style jsx>{`
        .wave-animation {
          transition: all 1s ease-out;
        }

        .wave-initial {
          transform: scale(1);
          opacity: 0.6;
        }

        .wave-expand {
          transform: scale(2.5);
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

// Componente de animación para Pluto Chat
function PlutoChatAnimation() {
  const { messages } = useChatAnimation();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col">
        {/* Chat messages */}
        <div className="flex-1 overflow-hidden">
          <div className="space-y-3 h-full">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl text-sm transition-all duration-700 text-foreground ${
                    message.visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-0"
                  }`}
                >
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-3 h-3 bg-foreground rounded-full -mt-[1px]"></div>
                    <span>{message.isUser ? "User" : "Pluto AI"}</span>
                  </div>
                  <div>{message.text}</div>
                  {message.hasBalance && (
                    <div className="mt-3 p-3 bg-muted rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-muted-foreground">
                          Ingresos
                        </span>
                        <span className="text-sm font-medium text-green-600">
                          $8,500
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-muted-foreground">
                          Gastos
                        </span>
                        <span className="text-sm font-medium text-red-600">
                          $6,200
                        </span>
                      </div>
                      <div className="border-t border-border pt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium">Balance</span>
                          <span className="text-sm font-bold text-foreground">
                            $2,300
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface Feature {
  icon: any;
  title: string;
  description: string;
  design?: React.ReactNode;
}

const features: Feature[] = [
  {
    icon: SquareArrowDataTransferDiagonalIcon,
    title: "Ask Pluto to send money",
    description:
      "Transfiere datos de una aplicación a otra de forma sencilla y segura. Solo debes pedirselo a Pluto y listo.",
    design: (
      <div className="w-full h-full relative flex items-center justify-center p-4">
        {/* Top Card */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background to-background/0 z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-background/0 z-10 pointer-events-none"></div>
        <PlutoSendMoneyAnimation />
      </div>
    ),
  },
  {
    icon: EnergyRectangleIcon,
    title: "Automate your transactions",
    description:
      "Organize multiple tables in customizable layouts. Add tables to the right or below with a click.",
    design: (
      <div className="w-full h-full relative flex items-center justify-center p-4">
        {/* Top Card */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background to-background/0 z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-background/0 z-10 pointer-events-none"></div>
        <div className="self-center p-4 border border-border rounded-2xl relative">
          <HugeiconsIcon icon={EnergyIcon} className="h-12 w-12 text-primary" />
        </div>
        <div className="bg-gradient-to-r bg-background via-white to-background/10 w-full relative h-[1px]"></div>
        <div className="py-3 px-5 flex justify-center items-center border border-border rounded-full tracking-tight relative w-[80%]">
          <AnimatedTransactionText />
        </div>
      </div>
    ),
  },
  {
    icon: AnalyticsUpIcon,
    title: "Ask Pluto to analyze your finance",
    description:
      "Convierte tus datos en gráficos y visualizaciones interactivas para mejores insights.",
    design: (
      <div className="w-full h-full relative flex items-center justify-center p-4">
        {/* Top Card */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background to-background/0 z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-background/0 z-10 pointer-events-none"></div>
        <PlutoChatAnimation />
      </div>
    ),
  },

  {
    icon: MoreIcon,
    title: "Bunch of column types",
    description:
      "Text, numbers, dates, emails, URLs, files, images, selections and more specialized data types.",
    design: (
      <div className="w-full h-full relative overflow-hidden bg-background">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background to-background/0 z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-background/0 z-10 pointer-events-none"></div>

        <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden p-0 m-0 relative">
          <div className="vertical-marquee-wrapper">
            <div className="vertical-marquee">
              {/* Primer conjunto de items */}
              {[
                { text: "Text", icon: TextIcon },
                { text: "Numbers", icon: CalculatorIcon },
                { text: "Dates", icon: CalendarIcon },
                { text: "Emails", icon: MailIcon },
                { text: "URLs", icon: LinkIcon },
                { text: "Files", icon: FileIcon },
                { text: "Images", icon: ImageIcon },
                { text: "Selections", icon: CheckmarkCircleIcon },
              ].map((item, index) => (
                <div
                  key={`first-${index}`}
                  className="marquee-item text-2xl font-medium text-center flex items-center justify-center gap-2 border border-border rounded-3xl px-4 py-2 my-2"
                >
                  <HugeiconsIcon
                    icon={item.icon}
                    className="h-7 w-7 text-primary -mt-0.5"
                  />
                  {item.text}
                </div>
              ))}
              {/* Segundo conjunto de items (duplicado para el loop) */}
              {[
                { text: "Text", icon: TextIcon },
                { text: "Numbers", icon: CalculatorIcon },
                { text: "Dates", icon: CalendarIcon },
                { text: "Emails", icon: MailIcon },
                { text: "URLs", icon: LinkIcon },
                { text: "Files", icon: FileIcon },
                { text: "Images", icon: ImageIcon },
                { text: "Selections", icon: CheckmarkCircleIcon },
              ].map((item, index) => (
                <div
                  key={`second-${index}`}
                  className="marquee-item text-2xl font-medium text-center flex items-center justify-center gap-2 border border-border rounded-3xl px-4 py-2 my-2"
                >
                  <HugeiconsIcon
                    icon={item.icon}
                    className="h-7 w-7 text-primary -mt-0.5"
                  />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          .vertical-marquee-wrapper {
            position: relative;
            height: 100%;
            width: 100%;
            overflow: hidden;
          }

          .vertical-marquee {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            animation: verticalScroll 30s linear infinite;
          }

          .marquee-item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: auto;
            flex-shrink: 0;
          }

          @keyframes verticalScroll {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
        `}</style>
      </div>
    ),
  },
  {
    icon: UserGroupIcon,
    title: "Real-time collaboration",
    description:
      "Work with your team. Changes are synchronized instantly for all users.",
  },
  {
    icon: LockIcon,
    title: "Seguridad empresarial",
    description:
      "Autenticación robusta, permisos granulares y encriptación de datos para proteger tu información.",
  },
];

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  className?: string;
}

export default function Features({
  title = "Do Everything",
  subtitle = "Rotating proxies, orchestration, rate limits, js-blocked content and more",
  features: customFeatures,
  className = "",
}: FeaturesProps) {
  const featuresToRender = customFeatures || features;

  return (
    <section className={`flex justify-center ${className}`}>
      <div className="mx-auto w-6xl">
        <div className="text-center py-10">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          {featuresToRender.map((feature, index) => {
            return (
              <div
                key={index}
                className={`group p-6 transition-all flex flex-col justify-start items-start border rounded-2xl`}
              >
                <div className="flex items-center justify-center mb-4">
                  <HugeiconsIcon
                    icon={feature.icon}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                <span className="text-left text-sm text-muted-foreground">
                  {feature.description}
                </span>
                <div className="flex items-center justify-center w-full h-[250px] overflow-hidden">
                  {feature.design}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
