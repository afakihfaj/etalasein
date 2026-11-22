import React from 'react';
import {
  Droplets,
  Quote,
  ArrowRight,
  Cloud,
  MousePointerClick,
  Smartphone,
  Cake,
  Lock,
  ExternalLink,
} from 'lucide-react';
import {
  CASE_STUDY_SANDIKALA,
  CASE_STUDY_SUGARLICIOUS,
  createWhatsAppLink,
} from '../../data/landingData';

export const Portfolio: React.FC = () => {
  const sandikalaCtaLink = createWhatsAppLink(CASE_STUDY_SANDIKALA.ctaMessage);
  const sugarliciousCtaLink = createWhatsAppLink(CASE_STUDY_SUGARLICIOUS.ctaMessage);

  return (
    <section className="max-w-[1140px] mx-auto px-4 sm:px-6 py-12 sm:py-16" id="portofolio">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="font-mono text-xs font-semibold text-terracotta uppercase tracking-wider block">
            Portofolio &amp; Studi Kasus
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-primary mt-1">
            Dua Contoh Nyata Hasil Eksekusi
          </h2>
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-card border border-border-neutral text-xs font-semibold text-text-secondary">
          <span className="w-2 h-2 rounded-full bg-brand-green"></span>
          <span>100% Live di Pasar UMKM Indonesia</span>
        </div>
      </div>

      {/* SHOWCASE 1: Sandikala Farm (Situbondo) */}
      <div className="bg-canvas-card rounded-3xl p-6 sm:p-10 border border-border-neutral shadow-[0_4px_24px_rgba(28,25,23,0.05)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] mb-8 transition-colors">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-light text-terracotta text-xs font-semibold">
              <Droplets className="w-4 h-4" />
              <span>
                {CASE_STUDY_SANDIKALA.category} • {CASE_STUDY_SANDIKALA.location}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
              {CASE_STUDY_SANDIKALA.title}
            </h3>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {CASE_STUDY_SANDIKALA.description}
            </p>

            {/* Testimoni Quote Box */}
            {CASE_STUDY_SANDIKALA.quote && (
              <div className="p-5 rounded-2xl bg-canvas border border-border-neutral space-y-2 transition-colors">
                <div className="flex items-center gap-1.5 text-terracotta">
                  <Quote className="w-4 h-4" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    Testimoni Klien
                  </span>
                </div>
                <p className="text-sm text-text-primary italic font-medium">
                  "{CASE_STUDY_SANDIKALA.quote.text}"
                </p>
                <p className="font-mono text-xs text-text-muted">
                  — {CASE_STUDY_SANDIKALA.quote.author}
                </p>
              </div>
            )}

            {/* Mini CTA */}
            <div className="pt-2">
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-green hover:bg-brand-green-hover text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-brand-green/20"
                href={sandikalaCtaLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{CASE_STUDY_SANDIKALA.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Feature Specs Column */}
          <div className="lg:col-span-5 space-y-3.5">
            {CASE_STUDY_SANDIKALA.specs?.map((spec, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-2xl bg-canvas border border-border-neutral flex items-center justify-between transition-colors"
              >
                <div>
                  <h4 className="font-bold text-sm text-text-primary">{spec.title}</h4>
                  <p className="text-xs text-text-secondary">{spec.subtitle}</p>
                </div>
                {spec.icon === 'Cloud' && (
                  <Cloud className="w-6 h-6 text-brand-green shrink-0" />
                )}
                {spec.icon === 'MousePointerClick' && (
                  <MousePointerClick className="w-6 h-6 text-terracotta shrink-0" />
                )}
                {spec.icon === 'Smartphone' && (
                  <Smartphone className="w-6 h-6 text-brand-green shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SHOWCASE 2: Sugarlicious Artisanal Bakehouse (Bali) */}
      <div className="bg-canvas-card rounded-3xl p-6 sm:p-10 border border-border-neutral shadow-[0_4px_24px_rgba(28,25,23,0.05)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-colors">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Preview Box */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-border-neutral bg-canvas relative group shadow-sm transition-colors">
              <div className="px-4 py-2.5 bg-canvas-alt/80 border-b border-border-neutral flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E57373]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFD54F]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#81C784]"></div>
                </div>
                <div className="mx-auto px-3 py-0.5 rounded-full bg-canvas-card text-text-secondary font-mono text-[11px] flex items-center gap-1.5">
                  <Lock className="w-3 h-3" />
                  <span>sugarlicious.netlify.app</span>
                </div>
              </div>
              <div className="aspect-[16/10] overflow-hidden bg-canvas-alt">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Artisanal French bakery pastries and croissant hampers by Sugarlicious Bakehouse Bali"
                  src={CASE_STUDY_SUGARLICIOUS.previewImageUrl}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Description & Metrics */}
          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-subtle text-brand-green text-xs font-semibold">
              <Cake className="w-4 h-4" />
              <span>
                {CASE_STUDY_SUGARLICIOUS.category} • {CASE_STUDY_SUGARLICIOUS.location}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
              {CASE_STUDY_SUGARLICIOUS.title}
            </h3>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {CASE_STUDY_SUGARLICIOUS.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {CASE_STUDY_SUGARLICIOUS.metrics?.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="p-3.5 bg-canvas rounded-xl border border-border-neutral transition-colors"
                >
                  <span className="font-mono text-[11px] text-text-muted block">
                    {m.label}
                  </span>
                  <span
                    className={`font-display font-bold text-lg sm:text-xl ${
                      m.color === 'green' ? 'text-brand-green' : 'text-terracotta'
                    }`}
                  >
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-canvas-card border border-border-neutral text-text-primary hover:bg-canvas-alt text-xs sm:text-sm font-semibold transition-colors"
                href={CASE_STUDY_SUGARLICIOUS.previewUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Kunjungi Sugarlicious</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-brand-green hover:bg-brand-green-hover text-white text-xs sm:text-sm font-semibold transition-colors"
                href={sugarliciousCtaLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{CASE_STUDY_SUGARLICIOUS.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
