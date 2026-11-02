import React from 'react';
import { ShieldCheck, ShoppingBag, SunMedium, Coffee, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  ShoppingBag: ShoppingBag,
  SunMedium: SunMedium,
  Coffee: Coffee,
};

export default function Facilities() {
  return (
    <section id="fasilitas" className="py-20 sm:py-28 bg-brand-surface/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Fasilitas Latihan Daimmteam
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Dukungan fasilitas dan perlengkapan latihan yang memadai untuk menjamin kenyamanan anak saat berlatih bulutangkis.
          </p>
        </div>

        {/* 4 Real Facilities Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.facilities.map((facility) => {
            const IconComponent = iconMap[facility.icon] || ShieldCheck;
            return (
              <div
                key={facility.id}
                className="group rounded-2xl overflow-hidden bg-brand-dark/80 border border-slate-800 hover:border-brand-gold/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                    
                    {/* Top Badge */}
                    <div className="absolute top-3 right-3 bg-brand-dark/90 backdrop-blur-md border border-brand-gold/40 text-brand-goldLight text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                      {facility.badge}
                    </div>

                    {/* Icon floating */}
                    <div className="absolute bottom-3 left-4 w-9 h-9 rounded-xl bg-brand-royal/90 border border-brand-gold/50 flex items-center justify-center text-brand-gold shadow-lg backdrop-blur-sm">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white group-hover:text-brand-gold transition-colors">
                      {facility.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-brand-lightBlue font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span>Tersedia untuk semua murid</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Summary Bar */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-brand-royal/40 via-brand-surface to-brand-royal/30 border border-brand-royal/50 p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Ingin Menanyakan Informasi Pendaftaran & Ukuran Jersey?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Admin kami siap menjawab pertanyaan seputar jadwal latihan perdana dan fitting jersey klub.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.primaryAdmin.whatsapp}?text=${encodeURIComponent('Halo Kak Hervan, saya ingin bertanya seputar pendaftaran latihan di Daimmteam Badminton Club.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-brand-gold hover:bg-amber-400 text-brand-dark font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-brand-gold/30 hover:scale-105"
          >
            Chat WhatsApp Admin &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
