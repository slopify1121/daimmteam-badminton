import React from 'react';
import { ArrowRight, Award, TrendingUp, Trophy, HeartHandshake } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const pillarIcons = [Award, TrendingUp, Trophy, HeartHandshake];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background with Dark Vignette & Royal Blue Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop"
          alt="Daimmteam Badminton Club"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-brand-royal/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-dark/70 to-brand-dark" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12">
        
        {/* Main Headline from Banner */}
        <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400 mb-3">
          Kelas Reguler Pelatihan Bulutangkis
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12] max-w-5xl mx-auto">
          DAIMMTEAM{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-brand-gold to-yellow-300">
            BADMINTON CLUB
          </span>
        </h1>

        {/* Sub-headline Lorem Ipsum */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {siteConfig.subTagline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#daftar"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-black text-sm sm:text-base bg-gradient-to-r from-brand-gold via-amber-500 to-yellow-500 text-brand-dark hover:from-yellow-400 hover:to-brand-gold transition-all duration-300 shadow-xl shadow-brand-gold/25 hover:shadow-brand-gold/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Daftar Latihan Sekarang</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#lokasi"
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-brand-surface/80 hover:bg-brand-surface hover:text-white border border-slate-700/80 hover:border-slate-500 transition-all duration-200 backdrop-blur-sm flex items-center justify-center cursor-pointer"
          >
            <span>Lihat Jadwal dan Lokasi</span>
          </a>
        </div>

        {/* 4 Pilar Keunggulan Utama (Langsung dari Spanduk) */}
        <div id="keunggulan" className="mt-16 sm:mt-20 pt-10 border-t border-slate-800/80 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {siteConfig.pillars.map((pillar, idx) => {
              const IconComp = pillarIcons[idx] || Award;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-brand-surface/70 border border-slate-800/80 hover:border-brand-gold/60 transition-all text-center flex flex-col items-center group shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h2 className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-gold transition-colors uppercase tracking-wide">
                    {pillar.title}
                  </h2>
                  <p className="mt-2 text-[11px] sm:text-xs text-slate-400 leading-relaxed hidden sm:block">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
