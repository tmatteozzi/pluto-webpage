import Hero from './landing/Hero';
import Navbar from './components/Navbar';
import { LanguageProvider } from './contexts/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Hero />
      </main>
    </LanguageProvider>
  );
}
