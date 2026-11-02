import React from 'react';
import { Award, CheckCircle2, HeartHandshake, Shield, Sparkles, Users } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Coaches() {
  const { coachingPhilosophy } = siteConfig;

  return (
    <section id="pelatih" className="py-20 sm:py-28 bg-brand-dark relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-brand-royal/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {coachingPhilosophy.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 italic">
            {coachingPhilosophy.subtitle}
          </p>
        </div>

        {/* Philosophy Card Showcase */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-brand-surface via-brand-surface to-brand-royal/20 border border-slate-700/80 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Philosophy & Message (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Membina Potensi Anak dengan Pendekatan Positif & Terarah
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {coachingPhilosophy.description}
              </p>

              {/* 3 Pillar Points */}
              <div className="pt-3 space-y-4">
                {coachingPhilosophy.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-brand-dark/60 border border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-brand-royal/80 border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{pt.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Action Box (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-brand-dark/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-royal to-blue-600 border border-brand-gold/50 flex items-center justify-center text-brand-gold mb-4 shadow-lg">
                  <Users className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Konsultasikan Jadwal & Pendaftaran
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <Shield className="w-4 h-4" />
                  <span>Pelatih Berpengalaman & Lingkungan Positif</span>
                </div>

                <a
                  href="#daftar"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-brand-gold to-amber-500 hover:from-amber-400 hover:to-brand-gold text-brand-dark flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-brand-gold/30 cursor-pointer"
                >
                  <span>Daftarkan Anak Sekarang</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
