import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Programs({ onSelectProgram }) {
  return (
    <section id="program" className="py-16 sm:py-28 bg-brand-dark relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-royal/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Kelas Reguler Pelatihan Bulutangkis
          </h2>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base text-slate-300">
            Dua kelas pembinaan utama yang dirancang khusus untuk membentuk kemampuan teknis, daya tahan fisik, dan karakter disiplin atlet muda.
          </p>
        </div>

        {/* Schedule Highlights Bar */}
        <div className="mt-8 sm:mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-brand-surface/80 border border-brand-royal/60 flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-black px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40">SENIN</span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-400">15.00 - 18.00 WIB</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                <span>GOR BMW</span>
              </div>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-brand-surface/80 border border-brand-gold/40 flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/20 text-brand-gold flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-black px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">KAMIS, SABTU, MINGGU</span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-400">16.00 - 19.00 WIB</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                <span>GOR SARIWATES</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Cards Grid: Berdampingan Kanan-Kiri di Android & PC (grid-cols-2) */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 gap-2.5 sm:gap-8 max-w-5xl mx-auto items-stretch">
          {siteConfig.programs.map((program) => (
            <div
              key={program.id}
              className="relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-3 sm:p-9 pt-5 sm:pt-11 bg-gradient-to-b from-brand-surface via-brand-surface to-brand-royal/25 border-2 border-slate-700/80 hover:border-brand-gold shadow-2xl transition-all duration-300 group"
            >
              {/* Category Badge */}
              <div className="absolute -top-2.5 sm:-top-3.5 left-2.5 sm:left-8 bg-gradient-to-r from-brand-gold to-amber-500 text-brand-dark text-[9px] sm:text-xs font-black px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-md">
                {program.badgeText}
              </div>

              <div>
                {/* Title (Pill Usia Dini / Remaja dan Icon sudah dihapus) */}
                <h3 className="text-sm sm:text-2xl md:text-3xl font-black text-white leading-snug sm:leading-tight">
                  {program.title}
                </h3>

                {/* Description Lorem Ipsum (Kotak lokasi & icon kalender sudah dihapus) */}
                <p className="mt-3 sm:mt-5 text-[10px] sm:text-sm text-slate-300 leading-relaxed">
                  {program.description}
                </p>

                {/* Curriculum List (Icon checkmark sudah dihapus, teks nomor bersih seperti spanduk) */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-5 border-t border-slate-700/60 space-y-1.5 sm:space-y-2.5">
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400">
                    Materi Silabus Latihan:
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    {program.curriculum.map((item, idx) => (
                      <div key={idx} className="text-[10px] sm:text-sm text-slate-200 font-medium leading-relaxed">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button (Icon panah sudah dihapus) */}
              <div className="mt-5 sm:mt-8 pt-2 sm:pt-4">
                <a
                  href="#daftar"
                  onClick={() => onSelectProgram && onSelectProgram(program.title)}
                  className="w-full py-2.5 sm:py-3.5 px-2 sm:px-4 rounded-lg sm:rounded-xl text-[10px] sm:text-sm font-bold flex items-center justify-center transition-all bg-brand-gold hover:bg-amber-400 text-brand-dark shadow-md hover:shadow-brand-gold/30 cursor-pointer text-center"
                >
                  Daftar {program.badgeText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
