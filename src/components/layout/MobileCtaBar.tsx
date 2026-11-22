import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '../../data/landingData';

export const MobileCtaBar: React.FC = () => {
  const waMobileLink = createWhatsAppLink(
    'Halo Etalase.in, saya mau konsultasi bikin landing page closing'
  );

  return (
    <div className="sm:hidden fixed bottom-4 left-4 right-4 z-50">
      <a
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-brand-green hover:bg-brand-green-hover text-white font-semibold text-sm shadow-lg shadow-brand-green/40 active:scale-95 transition-all"
        href={waMobileLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span>Konsultasi Gratis via WhatsApp</span>
      </a>
    </div>
  );
};
