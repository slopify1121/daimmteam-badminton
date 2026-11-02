import React from 'react';
import { Camera, Instagram, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 sm:py-28 bg-brand-surface/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Galeri Suasana & Kegiatan Latihan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Dokumentasi aktivitas, pembinaan teknik, dan antusiasme para atlet muda Daimmteam Badminton Club saat berlatih di lapangan.
          </p>
        </div>

        {/* Gallery Grid (2 Kolom di Mobile, 4 Kolom di Desktop) */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {siteConfig.gallery.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-brand-dark/90 border border-slate-800 hover:border-brand-gold/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Badge Category */}
                <div className="absolute top-2.5 left-2.5 bg-brand-dark/85 backdrop-blur-md border border-brand-gold/40 text-brand-gold text-[9px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
                  {item.category}
                </div>

                {/* Title Overlay on Bottom */}
                <div className="absolute bottom-2.5 left-3 right-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-gold transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Bar */}
        <div className="mt-10 max-w-xl mx-auto rounded-2xl bg-brand-dark/80 border border-slate-800 p-4 sm:p-5 flex items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs sm:text-sm font-bold text-white">
                Lihat Lebih Banyak Dokumentasi
              </span>
              <span className="block text-[11px] text-slate-400">
                Instagram resmi {siteConfig.contact.socialMedia.instagramHandle}
              </span>
            </div>
          </div>
          <a
            href={siteConfig.contact.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-brand-royal/40 hover:bg-brand-royal text-white text-xs font-semibold border border-brand-royal/60 flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Buka IG</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

