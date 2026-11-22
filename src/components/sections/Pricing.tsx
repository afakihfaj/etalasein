import React from 'react';
import { CheckCircle2, ArrowRight, Zap, Server, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS, createWhatsAppLink } from '../../data/landingData';

export const Pricing: React.FC = () => {
  return (
    <section className="max-w-[1140px] mx-auto px-4 sm:px-6 py-12 sm:py-16" id="paket">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
        <span className="font-mono text-xs font-semibold text-terracotta uppercase tracking-wider block">
          INVESTASI SEKALI, BEBAS BIAYA BULANAN
        </span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
          Pilihan Paket Terima Beres (Tanpa Biaya Tersembunyi)
        </h2>
        <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
          Sekali bayar aktif permanen. Gak ada biaya sewa server tahunan atau potongan komisi tiap ada order masuk.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const isPopular = plan.isPopular;
          const waPlanLink = createWhatsAppLink(plan.ctaMessage);

          return (
            <div
              key={plan.id}
              className={`bg-canvas-card rounded-3xl p-7 flex flex-col justify-between transition-all duration-200 ${
                isPopular
                  ? 'border-2 border-brand-green shadow-lg dark:shadow-glow-green relative -mt-2 md:-mt-3 mb-2 md:mb-0'
                  : 'border border-border-neutral shadow-sm'
              }`}
            >
              {isPopular && plan.popularBadge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-green text-white font-mono text-[11px] font-bold tracking-wider uppercase shadow-sm whitespace-nowrap">
                  {plan.popularBadge}
                </div>
              )}

              <div className={`space-y-5 ${isPopular ? 'pt-2' : ''}`}>
                <div>
                  <span className="font-mono text-[11px] font-semibold text-terracotta uppercase tracking-wider block mb-1">
                    {plan.eyebrow}
                  </span>
                  <h3 className="font-display font-bold text-xl text-text-primary flex items-center gap-1.5">
                    <span>{plan.title}</span>
                    {isPopular && <span className="w-2 h-2 rounded-full bg-brand-green"></span>}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">{plan.description}</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`font-display font-bold ${
                        isPopular
                          ? 'text-3xl sm:text-4xl text-brand-green'
                          : 'text-3xl text-text-primary'
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-xs text-text-muted line-through">
                      {plan.originalPrice}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-mono font-medium block mt-0.5 ${
                      isPopular || plan.variant === 'standard'
                        ? 'text-brand-green'
                        : 'text-text-secondary'
                    }`}
                  >
                    {plan.periodText}
                  </span>
                </div>

                <ul className="space-y-3 pt-2 text-xs sm:text-sm">
                  {plan.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className={`flex items-start gap-2 ${
                        isPopular
                          ? 'text-text-primary font-medium'
                          : 'text-text-secondary'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-7 mt-6 border-t border-border-neutral">
                <a
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all ${
                    isPopular
                      ? 'bg-brand-green hover:bg-brand-green-hover text-white shadow-md shadow-brand-green/30 hover:shadow-lg'
                      : 'bg-canvas hover:bg-canvas-alt text-text-primary border border-border-neutral'
                  }`}
                  href={waPlanLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{plan.ctaText}</span>
                  {isPopular ? (
                    <Zap className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Server Transparency Banner */}
      <div className="mt-8 max-w-3xl mx-auto p-5 rounded-2xl bg-canvas border border-border-neutral flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm transition-colors">
        <div className="w-11 h-11 rounded-2xl bg-terracotta-light text-terracotta flex items-center justify-center shrink-0">
          <Server className="w-6 h-6" />
        </div>
        <div className="space-y-1 text-xs sm:text-sm">
          <h4 className="font-bold text-text-primary text-sm sm:text-base">
            Transparansi Server &amp; Opsi Domain Pribadi
          </h4>
          <p className="text-text-secondary leading-relaxed">
            Paket terjangkau kami menggunakan infrastruktur{' '}
            <span className="font-medium text-text-primary">Netlify Cloud</span> (cepat, stabil, dan Rp 0 sewa server bulanan). Mau pakai domain sendiri (.com / .id) atau hosting pribadi (cPanel/VPS)?{' '}
            <span className="text-brand-green font-semibold">Bisa banget!</span> Anda bisa beli domain sendiri atau kami bantu siapkan tanpa biaya tersembunyi.
          </p>
        </div>
      </div>

      {/* Guarantee Banner */}
      <div className="mt-8 max-w-2xl mx-auto p-4 rounded-2xl bg-canvas-card border border-border-neutral shadow-sm flex items-center justify-center gap-3 text-center sm:text-left transition-colors">
        <div className="w-9 h-9 rounded-full bg-brand-green-subtle text-brand-green flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          <strong className="text-text-primary font-semibold">Jaminan Bebas Risiko:</strong> Kalau web terasa berat atau format order WA gak jalan, kami perbaiki sampai tuntas tanpa tambahan biaya!
        </p>
      </div>
    </section>
  );
};
