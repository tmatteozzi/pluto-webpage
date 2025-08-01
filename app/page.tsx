"use client";

import Hero from "./landing/Hero";
import Navbar from "./components/Navbar";

import { LanguageProvider } from "./contexts/LanguageContext";
import Info1 from "./landing/Info1";
import Info2 from "./landing/Info2";
import Info3 from "./landing/Info3";
import Info4 from "./landing/Info4";
import Footer from "./components/Footer";
import Bento from "./components/Bento";

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Hero />

        <Info1 />
        <Bento />
        <Info2 />

        <Info3 />
        <Info4 />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
