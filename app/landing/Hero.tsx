"use client";

import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="h-screen w-full bg-black text-white flex flex-col relative">
        {/* <div className="w-[1300px] h-[1300px] bg-gradient-to-b from-black to-white rounded-full z-[0] blur-3xl opacity-10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> */}

        {/* Contenido principal centrado */}
        <div className="flex-1 w-full flex items-center justify-center z-1">
          <div className="w-full mx-auto flex flex-col items-center bg-gradient-to-b from-black/50 via-black to-black/50 py- rounded-3xl p-10">
            <h1 className="text-[44px] md:text-[56px] lg:text-[4vw] leading-[1] font-semibold tracking-tight text-center mb-6">
              The AI Wallet
            </h1>

            {/* Caja de entrada estilo ChatGPT */}
            <div className="w-full flex flex-col items-center">
              <p className="text-center text-neutral-300 w-full text-lg">
                The AI Wallet is a wallet that allows you to send and receive
                money using the power of AI.
              </p>
              {/* <div className="w-md h-12 bg-foreground mt-10 rounded-full flex p-1">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full relative h-full rounded-full bg-transparent border-none outline-none text-black placeholder:text-neutral-500 text-sm md:text-base px-6 py-2"
              />
              <button className="relative whitespace-nowrap rounded-full bg-black hover:bg-neutral-800 text-white/90 text-sm flex items-center justify-center px-4 transition-colors">
                Join waitlist
              </button>
            </div> */}
            </div>
          </div>
        </div>

        {/* Aviso legal inferior */}
        {/* <div className="w-full flex items-center justify-center pb-6">
          <p className="text-[11px] text-neutral-400 text-center max-w-2xl px-4">
            Al enviar un mensaje a ChatGPT, aceptas nuestros Términos y
            reconoces que leíste nuestra Política de privacidad.
          </p>
        </div> */}
      </section>
      <section className="h-screen w-full text-white flex flex-col relative"></section>
    </>
  );
}
