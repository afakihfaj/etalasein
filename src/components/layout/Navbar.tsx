import React from 'react';
import { MessageCircle } from 'lucide-react';
import { NAV_ITEMS, createWhatsAppLink } from '../../data/landingData';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar: React.FC = () => {
  const waConsultationLink = createWhatsAppLink(
    'Halo Etalase.in, saya mau konsultasi bikin landing page closing'
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-4 px-4 sm:px-6">
      <div className="max-w-[1140px] mx-auto bg-canvas-card/90 dark:bg-canvas-card/95 backdrop-blur-md rounded-full px-5 sm:px-7 py-3 border border-border-neutral shadow-[0_4px_20px_-4px_rgba(28,25,23,0.06)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] flex items-center justify-between transition-colors">
        {/* Brand Logo */}
        <a className="flex items-center gap-1.5 group" href="#">
          <span className="font-display font-bold text-xl text-text-primary tracking-tight">
            Etalase
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-green ml-0.5 group-hover:scale-125 transition-transform"></span>
            in
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-canvas px-2.5 py-1 rounded-full border border-border-neutral/60">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-text-secondary hover:text-text-primary hover:bg-canvas-card transition-all"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />
          <a
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-brand-green hover:bg-brand-green-hover text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-brand-green/25 hover:shadow-lg hover:shadow-brand-green/35 hover:-translate-y-0.5 active:translate-y-0"
            href={waConsultationLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span className="hidden xs:inline">Konsultasi WhatsApp</span>
            <span className="xs:hidden">Konsultasi</span>
          </a>
        </div>
      </div>
    </header>
  );
};
