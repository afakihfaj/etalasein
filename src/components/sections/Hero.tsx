import React from 'react';
import { MessageCircle, ArrowDown, Check } from 'lucide-react';
import { createWhatsAppLink, TRUST_POINTS, HERO_BULLETS } from '../../data/landingData';

export const Hero: React.FC = () => {
  const waHeroLink = createWhatsAppLink(
    'Halo Etalase.in, saya mau konsultasi bikin landing page closing'
  );

  return (
    <section className="max-w-[1140px] mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-16 sm:pb-24">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
        {/* Terracotta Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta text-white shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
            JASA LANDING PAGE SPESIALIS CLOSING CEPAT
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-text-primary tracking-tight leading-[1.18] sm:leading-[1.15]">
          Iklan Jalan Terus, Tapi WhatsApp Sepi?
          <span className="block text-terracotta mt-2 sm:mt-3">
            Masalahnya Bukan Iklan, Tapi Halaman Bio Kamu.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-body text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
          Kami ubah traffic boncos jadi banjir orderan langsung ke WhatsApp dengan web katalog 1-layar yang ringan, rapi, dan cepat dibuka. Didesain terima beres di Netlify khusus UMKM &amp; brand lokal.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto">
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-green hover:bg-brand-green-hover text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md shadow-brand-green/30 hover:shadow-lg hover:shadow-brand-green/40 hover:-translate-y-0.5"
            href={waHeroLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Konsultasi Gratis via WhatsApp</span>
          </a>
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-canvas-card hover:bg-canvas-alt text-text-primary font-semibold text-sm sm:text-base border border-border-neutral transition-all shadow-sm"
            href="#portofolio"
          >
            <span>Lihat Portofolio Nyata</span>
            <ArrowDown className="w-4 h-4 text-text-muted" />
          </a>
        </div>

        {/* Micro-Trust Points */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-5 pt-3 text-text-secondary text-xs sm:text-sm font-medium">
          {TRUST_POINTS.map((tp, index) => (
            <React.Fragment key={tp.id}>
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    tp.highlight ? 'bg-terracotta' : 'bg-brand-green'
                  }`}
                ></span>
                <span>{tp.label}</span>
              </div>
              {index < TRUST_POINTS.length - 1 && (
                <span className="text-border-subtle hidden xs:inline">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Hero Minimalist Showcase Graphic */}
        <div className="pt-8 sm:pt-10 w-full max-w-2xl">
          <div className="bg-canvas-card rounded-3xl p-6 sm:p-8 border border-border-neutral shadow-[0_8px_30px_rgba(28,25,23,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] relative overflow-hidden transition-colors">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Phone UI wireframe */}
              <div className="w-48 sm:w-56 bg-canvas rounded-2xl p-3 border-2 border-text-primary shadow-sm flex flex-col items-center shrink-0 transition-colors">
                <div className="w-12 h-1.5 bg-text-primary/20 rounded-full mb-3"></div>
                <div className="grid grid-cols-2 gap-2 w-full mb-3">
                  <div className="aspect-square rounded-lg bg-text-primary/10"></div>
                  <div className="aspect-square rounded-lg bg-terracotta/20"></div>
                  <div className="aspect-square rounded-lg bg-brand-green/20"></div>
                  <div className="aspect-square rounded-lg bg-text-secondary/15"></div>
                </div>
                <div className="w-full py-1.5 bg-brand-green text-white text-[11px] font-bold rounded-lg text-center tracking-wide">
                  ORDER SEKARANG
                </div>
              </div>

              {/* 3 Bullet Floating Pills */}
              <div className="space-y-3 w-full text-left">
                {HERO_BULLETS.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-canvas rounded-2xl border border-border-neutral flex items-center gap-3 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-full bg-brand-green text-white flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-text-primary">
                        {bullet.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-text-secondary">
                        {bullet.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
