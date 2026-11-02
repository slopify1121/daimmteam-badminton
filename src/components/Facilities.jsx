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
    <section id="fasilitas" className="py-8 sm:py-24 bg-brand-surface/40 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header - Dibuat kompak agar pas 1 layar di Android */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-12">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Fasilitas Latihan Daimmteam
          </h2>
          <p className="mt-1 sm:mt-3 text-[11px] sm:text-base text-slate-300 line-clamp-1 sm:line-clamp-none">
            Dukungan fasilitas dan perlengkapan latihan yang memadai untuk kenyamanan anak berlatih bulutangkis.
          </p>
        </div>

        {/* 4 Kartu Fasilitas: 2 Kolom di Android (Pas 1 Layar tanpa scroll) & 4 Kolom di PC */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {siteConfig.facilities.map((facility) => {
            const IconComponent = iconMap[facility.icon] || ShieldCheck;
            return (
              <div
                key={facility.id}
                className="group rounded-xl sm:rounded-2xl overflow-hidden bg-brand-dark/90 border border-slate-800 hover:border-brand-gold/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-20 sm:h-44 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                    
                    {/* Top Badge */}
                    <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 bg-brand-dark/90 backdrop-blur-md border border-brand-gold/40 text-brand-goldLight text-[8px] sm:text-[11px] font-bold px-1.5 sm:px-3 py-0.5 rounded-full shadow-md">
                      {facility.badge}
                    </div>

                    {/* Icon floating (Desktop only) */}
                    <div className="hidden sm:flex absolute bottom-3 left-4 w-9 h-9 rounded-xl bg-brand-royal/90 border border-brand-gold/50 items-center justify-center text-brand-gold shadow-lg backdrop-blur-sm">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-2 sm:p-5">
                    <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-brand-gold transition-colors leading-tight">
                      {facility.title}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-[9px] sm:text-xs text-slate-400 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {facility.description}
                    </p>
                  </div>
                </div>

                {/* Footer status inside card (Desktop only to keep mobile 1-screen height) */}
                <div className="hidden sm:flex px-5 pb-5 pt-3 border-t border-slate-800/80 items-center gap-1.5 text-xs text-brand-lightBlue font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span>Tersedia untuk semua murid</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Summary Bar (Tampil elegan di layar sedang & lebar) */}
        <div className="hidden sm:flex mt-10 rounded-2xl bg-gradient-to-r from-brand-royal/40 via-brand-surface to-brand-royal/30 border border-brand-royal/50 p-6 sm:p-7 flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Ingin Menanyakan Informasi Pendaftaran & Ukuran Jersey?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Admin kami siap menjawab pertanyaan seputar jadwal latihan perdana dan fitting jersey klub.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.primaryAdmin.whatsapp}?text=${encodeURIComponent('Halo Admin, saya ingin bertanya seputar pendaftaran latihan di Daimmteam Badminton Club.')}`}
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
