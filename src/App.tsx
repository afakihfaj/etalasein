import React from 'react';
import { Agentation } from 'agentation';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Portfolio } from './components/sections/Portfolio';
import { Pricing } from './components/sections/Pricing';
import { FreeAudit } from './components/sections/FreeAudit';
import { Footer } from './components/layout/Footer';
import { MobileCtaBar } from './components/layout/MobileCtaBar';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-canvas font-body text-text-primary antialiased selection:bg-brand-green/20 selection:text-brand-green transition-colors duration-200">
        <Navbar />
        <main className="w-full pt-28 sm:pt-32 pb-16">
          <Hero />
          <Features />
          <Portfolio />
          <Pricing />
          <FreeAudit />
        </main>
        <Footer />
        <MobileCtaBar />
        {import.meta.env.DEV && <Agentation />}
      </div>
    </ThemeProvider>
  );
};

export default App;
