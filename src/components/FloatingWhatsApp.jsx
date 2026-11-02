import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-brand-surface border border-brand-gold/40 text-white text-xs py-2 px-3.5 rounded-2xl shadow-2xl animate-fade-in relative">
          <span className="font-semibold text-amber-300">Tanya Info Latihan & Jersey?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 ml-1"
            aria-label="Tutup pesan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow pointing to button */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-[6px] border-l-brand-surface" />
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${siteConfig.contact.primaryAdmin.whatsapp}?text=${encodeURIComponent('Halo Admin Daimmteam Badminton Club, saya ingin bertanya info jadwal dan pendaftaran.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white flex items-center justify-center shadow-2xl hover:shadow-emerald-500/40 hover:scale-110 transition-all duration-300"
        aria-label="Hubungi WhatsApp Admin Daimmteam"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
}
