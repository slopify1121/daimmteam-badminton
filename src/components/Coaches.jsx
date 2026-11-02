import React from 'react';
import { Award, CheckCircle2, Shield, Users } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Coaches() {
  const { coachingPhilosophy } = siteConfig;

  return (
    <section id="pelatih" className="py-8 sm:py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-brand-royal/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Kompak agar pas 1 layar di Android */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-12">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {coachingPhilosophy.title}
          </h2>
          <p className="mt-1 sm:mt-3 text-[11px] sm:text-base text-slate-400 italic line-clamp-1 sm:line-clamp-none">
            {coachingPhilosophy.subtitle}
          </p>
        </div>

        {/* 2 Kolom Berdampingan di Android (Pas 1 Layar tanpa scroll) & Desktop */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-8 items-stretch">
          
          {/* Kolom 1 (Kiri): Prinsip Bimbingan */}
          <div className="rounded-xl sm:rounded-3xl bg-gradient-to-b from-brand-surface via-brand-surface to-brand-royal/20 border border-slate-700/80 p-3 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-xs sm:text-2xl font-black text-white leading-tight">
                Pendekatan Bimbingan Positif
              </h3>
              <p className="mt-1.5 sm:mt-3 text-[9px] sm:text-sm text-slate-300 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                {coachingPhilosophy.description}
              </p>

              {/* 3 Butir Prinsip */}
              <div className="mt-2.5 sm:mt-6 space-y-1.5 sm:space-y-3.5 border-t border-slate-700/60 pt-2 sm:pt-4">
                {coachingPhilosophy.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 sm:gap-3 p-1 sm:p-3 rounded-lg sm:rounded-xl bg-brand-dark/40 sm:bg-brand-dark/60 sm:border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[10px] sm:text-sm font-bold text-white leading-tight">
                        {pt.title}
                      </h4>
                      <p className="hidden sm:block text-xs text-slate-400 mt-0.5">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom 2 (Kanan): Konsultasi & Aksi */}
          <div className="rounded-xl sm:rounded-3xl bg-brand-surface/90 sm:bg-brand-dark/80 border border-slate-700/80 p-3 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-7 h-7 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-gradient-to-br from-brand-royal to-blue-600 border border-brand-gold/50 flex items-center justify-center text-brand-gold mb-1.5 sm:mb-4 shadow-md">
                <Users className="w-3.5 h-3.5 sm:w-7 sm:h-7" />
              </div>

              <h4 className="text-xs sm:text-xl font-bold text-white leading-tight">
                Konsultasikan Pendaftaran
              </h4>

              <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-sm text-slate-400 leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                Tim pelatih kami siap membantu menempatkan anak pada sesi latihan dan kelas yang paling sesuai.
              </p>

              <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-400 font-semibold mt-4 pt-3 border-t border-slate-800">
                <Shield className="w-4 h-4" />
                <span>Pelatih Berpengalaman & Lingkungan Positif</span>
              </div>
            </div>

            <div className="mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-slate-800/80">
              <a
                href="#daftar"
                className="w-full py-2 sm:py-3.5 px-2 sm:px-4 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-sm bg-gradient-to-r from-brand-gold to-amber-500 hover:from-amber-400 hover:to-brand-gold text-brand-dark flex items-center justify-center transition-all shadow-md hover:shadow-brand-gold/30 cursor-pointer text-center"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
