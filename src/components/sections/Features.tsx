import React from 'react';
import { Zap, MessageSquare, PiggyBank, CloudCheck, TrendingUp, ShieldCheck } from 'lucide-react';
import { FEATURES } from '../../data/landingData';

export const Features: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6" />;
      case 'PiggyBank':
        return <PiggyBank className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  const getFooterIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CloudCheck className="w-4 h-4" />;
      case 1:
        return <TrendingUp className="w-4 h-4" />;
      case 2:
        return <ShieldCheck className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section className="max-w-[1140px] mx-auto px-4 sm:px-6 py-12 sm:py-16" id="keunggulan">
      <div className="text-center max-w-xl mx-auto space-y-2 mb-10 sm:mb-12">
        <span className="font-mono text-xs font-semibold text-terracotta uppercase tracking-wider block">
          Kenapa Klien Memilih Etalase.in
        </span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
          3 Formula Eksekusi Anti-Boncos
        </h2>
        <p className="font-body text-sm sm:text-base text-text-secondary">
          Bukan sekadar desain estetik, kami fokus pada kemudahan calon pembeli langsung checkout.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURES.map((feature, idx) => {
          const isTerracotta = feature.accent === 'terracotta';
          return (
            <div
              key={feature.id}
              className="bg-canvas-card rounded-3xl p-7 border border-border-neutral shadow-[0_4px_20px_-2px_rgba(28,25,23,0.04)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.3)] flex flex-col justify-between hover:-translate-y-1 transition-all duration-200"
            >
              <div className="space-y-4">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold ${
                    isTerracotta
                      ? 'bg-terracotta-light text-terracotta'
                      : 'bg-brand-green-subtle text-brand-green'
                  }`}
                >
                  {getIcon(feature.iconName)}
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono text-xs font-semibold text-terracotta">
                    {feature.step}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div
                className={`pt-6 mt-6 border-t border-border-neutral flex items-center gap-2 text-xs font-mono font-semibold ${
                  isTerracotta ? 'text-terracotta' : 'text-brand-green'
                }`}
              >
                {getFooterIcon(idx)}
                <span>{feature.badgeText}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
