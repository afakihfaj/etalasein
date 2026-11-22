import React from 'react';
import { Gift, MessageCircle, Lock, Clock } from 'lucide-react';
import { createWhatsAppLink } from '../../data/landingData';

export const FreeAudit: React.FC = () => {
  const auditWaLink = createWhatsAppLink(
    'Halo Etalase.in, saya mau klaim FREE Audit Halaman Penjualan saya'
  );

  return (
    <section className="max-w-[1140px] mx-auto px-4 sm:px-6 py-12" id="audit">
      <div className="bg-gradient-to-br from-terracotta-light via-canvas-card to-canvas-card rounded-3xl p-8 sm:p-14 border border-border-neutral text-center space-y-6 shadow-sm dark:shadow-glow-green relative overflow-hidden transition-colors">
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta text-white font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
          <Gift className="w-4 h-4 shrink-0" />
          <span>SPECIAL OFFER: FREE AUDIT UNTUK 5 BRAND PERTAMA BULAN INI</span>
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
            Jangan Biarkan Calon Pembeli Kabur Karena Link Bio Berantakan.
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Dapatkan <span className="text-text-primary font-bold">FREE Audit Halaman Penjualan Lama Anda</span> senilai{' '}
            <span className="line-through text-text-muted">Rp 500.000</span>. Tim kami akan membedah di mana titik kebocoran closing Anda tanpa komitmen bayar.
          </p>
        </div>

        {/* Emerald CTA Button */}
        <div className="pt-2 flex justify-center">
          <a
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-green hover:bg-brand-green-hover text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-brand-green/30 hover:shadow-xl hover:-translate-y-0.5"
            href={auditWaLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Klaim Free Audit &amp; Diskusi Sekarang</span>
          </a>
        </div>

        {/* Micro guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-5 pt-3 text-xs text-text-muted">
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-brand-green" />
            <span>100% Rahasia &amp; Tanpa Kewajiban Beli</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-green" />
            <span>Balasan Cepat &lt; 15 Menit di Jam Kerja</span>
          </div>
        </div>
      </div>
    </section>
  );
};
