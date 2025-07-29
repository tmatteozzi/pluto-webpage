import Hero from './landing/Hero';
import Navbar from './components/Navbar';
import { LanguageProvider } from './contexts/LanguageContext';
import Info1 from './landing/Info1';
import Info2 from './landing/Info2';
import Info3 from './landing/Info3';

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Hero />
        <Info1 />
        <Info2 />
        <Info3 />
      </main>
    </LanguageProvider>
  );
}
