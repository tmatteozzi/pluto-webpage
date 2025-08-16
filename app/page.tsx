"use client";

import Hero from "./landing/Hero";
import Navbar from "./components/Navbar";

import { LanguageProvider } from "./contexts/LanguageContext";
import Info1 from "./landing/Info1";
import Info2 from "./landing/Info2";
import Info3 from "./landing/Info3";
import Info4 from "./landing/Info4";
import Footer from "./components/Footer";
import Features from "./components/Features";
import { ArrowUpIcon } from "lucide-react";

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <div className="rounded-full bg-card/80 backdrop-blur-sm pl-4 pr-1  fixed bottom-4 left-4 right-4 z-50">
          <div className="flex items-center gap-3 relative  h-full py-4">
            <textarea
              placeholder="Pregunta lo que quieras"
              className="  placeholder:text-neutral-500 text-base md:text-base focus:outline-none resize-none h-4.5 overflow-y-auto table-scroll   inline-flex self-center leading-[1] m-0 p-0"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white/90 text-sm md:text-base px-3 py-3 transition-colors">
              <ArrowUpIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
        <Navbar />
        <Hero />

        <Info1 />
        {/* <Bento /> */}
        <Features />
        <Info2 />

        <Info3 />
        <Info4 />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
