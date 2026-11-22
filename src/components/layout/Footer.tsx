import React from 'react';
import { NAV_ITEMS, WHATSAPP_PHONE } from '../../data/landingData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-canvas-card border-t border-border-neutral py-12 transition-colors">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border-neutral">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5">
              <span className="font-display font-bold text-xl text-text-primary tracking-tight">
                Etalase
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-green ml-0.5"></span>
                in
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary">
              Sahabat Digital UMKM Indonesia — Solusi Landing Page &amp; Web Katalog Cepat Closing.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-text-secondary">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} className="hover:text-text-primary transition-colors" href={item.href}>
                {item.label}
              </a>
            ))}
            <a
              className="hover:text-brand-green transition-colors"
              href={`https://wa.me/${WHATSAPP_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Direct
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>© 2025 Etalase.in. Hak Cipta Dilindungi. Engineered for Maximum Conversion.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-text-primary transition-colors" href="#">
              Instagram
            </a>
            <a className="hover:text-text-primary transition-colors" href="#">
              TikTok
            </a>
            <a className="hover:text-text-primary transition-colors" href="#">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
