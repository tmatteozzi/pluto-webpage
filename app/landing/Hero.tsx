"use client";

import { ArrowUpIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-[100svh] w-full bg-black text-white flex flex-col">
      {/* Contenido principal centrado */}
      <div className="flex-1 w-full flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
          <h1 className="text-[44px] md:text-[56px] lg:text-5xl font-semibold tracking-tight text-center mb-6">
            Ask Pluto for your money
          </h1>

          {/* Caja de entrada estilo ChatGPT */}
          <div className="w-full">
            <div className="rounded-3xl bg-card pt-4 pl-5 pr-1.5 pb-1.5">
              <div className="flex items-center gap-3 relative">
                <textarea
                  placeholder="Pregunta lo que quieras"
                  className="flex-1 bg-transparent placeholder:text-neutral-500 text-base md:text-base focus:outline-none resize-none min-h-[100px] max-h-[200px] overflow-y-auto table-scroll"
                  rows={2}
                />
                <button className="absolute right-0 bottom-0 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white/90 text-sm md:text-base px-3 py-3 transition-colors">
                  <ArrowUpIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Acciones rápidas */}
          {/* <div className="flex flex-wrap justify-center gap-3 mt-10">
            <button className="rounded-full bg-neutral-900 border border-white/10 hover:bg-neutral-800 transition-colors text-white/90 text-sm md:text-base px-4 py-2">
              Resume un texto
            </button>
            <button className="rounded-full bg-neutral-900 border border-white/10 hover:bg-neutral-800 transition-colors text-white/90 text-sm md:text-base px-4 py-2">
              Ayúdame a escribir
            </button>
            <button className="rounded-full bg-neutral-900 border border-white/10 hover:bg-neutral-800 transition-colors text-white/90 text-sm md:text-base px-4 py-2">
              Ofrece consejos
            </button>
            <button className="rounded-full bg-neutral-900 border border-white/10 hover:bg-neutral-800 transition-colors text-white/90 text-sm md:text-base px-4 py-2">
              Propone ideas
            </button>
            <button className="rounded-full bg-neutral-900 border border-white/10 hover:bg-neutral-800 transition-colors text-white/90 text-sm md:text-base px-4 py-2">
              Más
            </button>
          </div> */}
        </div>
      </div>

      {/* Aviso legal inferior */}
      <div className="w-full flex items-center justify-center pb-6">
        <p className="text-[11px] text-neutral-400 text-center max-w-2xl px-4">
          Al enviar un mensaje a ChatGPT, aceptas nuestros Términos y reconoces
          que leíste nuestra Política de privacidad.
        </p>
      </div>
    </section>
  );
}
