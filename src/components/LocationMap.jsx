import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Check, Copy, ExternalLink, Calendar } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function LocationMap() {
  const [activeVenueId, setActiveVenueId] = useState('sariwates');
  const [copied, setCopied] = useState(false);

  const activeVenue = siteConfig.venues.find((v) => v.id === activeVenueId) || siteConfig.venues[0];

  const copyAddress = () => {
    navigator.clipboard.writeText(`${activeVenue.name} - ${activeVenue.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lokasi" className="py-20 sm:py-28 bg-brand-surface/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Lokasi GOR & Jadwal Latihan
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Daimmteam Badminton Club menyelenggarakan sesi latihan di dua GOR resmi: <strong>GOR Sariwates</strong> dan <strong>GOR BMW</strong>.
          </p>
        </div>

        {/* Venue Selector Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-brand-dark/90 border border-slate-700/80 shadow-xl max-w-md w-full">
            {siteConfig.venues.map((venue) => {
              const isActive = activeVenueId === venue.id;
              return (
                <button
                  key={venue.id}
                  onClick={() => setActiveVenueId(venue.id)}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex flex-col items-center gap-1 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-gold to-amber-500 text-brand-dark shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-brand-surface/60'
                  }`}
                >
                  <span className="text-sm font-black">{venue.name}</span>
                  <span className={`text-[10px] font-semibold ${isActive ? 'text-brand-dark/80' : 'text-slate-400'}`}>
                    {venue.days.join(', ')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Map & Detail Cards Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-brand-dark relative group">
            <div className="relative h-[380px] sm:h-[450px] w-full">
              <iframe
                title={`Peta Lokasi ${activeVenue.name}`}
                src={activeVenue.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-105"
              />
            </div>

            {/* Quick Map Action floating bar */}
            <div className="p-4 bg-brand-dark/95 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Navigation className="w-4 h-4 text-brand-gold animate-bounce" />
                <span>Navigasi rute langsung ke {activeVenue.name}:</span>
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={activeVenue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-brand-royal/40 hover:bg-brand-royal text-white text-xs font-semibold border border-brand-royal/60 flex items-center gap-1.5 transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={activeVenue.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold border border-amber-500/40 flex items-center gap-1.5 transition-colors"
                >
                  <span>Waze</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Address, Hours, Contact details (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Active Venue Details */}
            <div className="rounded-2xl bg-brand-dark/90 border border-brand-gold/40 p-6 shadow-xl relative overflow-hidden">
              <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full mb-3">
                {activeVenue.highlight}
              </div>

              <h3 className="text-2xl font-black text-white">{activeVenue.name}</h3>

              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">Jadwal Sesi Latihan:</span>
                    <span className="text-sm font-bold text-white">{activeVenue.schedule}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">Alamat Lengkap:</span>
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed block mt-0.5">
                      {activeVenue.address}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={copyAddress}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold hover:text-amber-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Alamat {activeVenue.name} Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Alamat GOR</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Person (Admin 1 & Admin 2) */}
            <div className="rounded-2xl bg-gradient-to-br from-brand-royal/30 via-brand-dark to-brand-surface border border-brand-royal/50 p-6 shadow-lg">
              <h3 className="text-base font-bold text-white mb-2">WhatsApp Admin Resmi</h3>
              <p className="text-xs text-slate-300 mb-4">
                Silakan hubungi WhatsApp admin berikut untuk tanya jadwal latihan perdana atau info pendaftaran:
              </p>

              <div className="space-y-3">
                {/* Admin 1 */}
                <a
                  href={`https://wa.me/${siteConfig.contact.primaryAdmin.whatsapp}?text=${encodeURIComponent(`Halo Admin 1, saya ingin bertanya info pendaftaran latihan di ${activeVenue.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-brand-surface/90 hover:bg-brand-royal/50 text-slate-200 hover:text-white border border-slate-700/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white">Admin 1 (WhatsApp)</span>
                      <span className="block text-[11px] text-slate-400">{siteConfig.contact.primaryAdmin.whatsappFormatted}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                    Chat WA &rarr;
                  </span>
                </a>

                {/* Admin 2 */}
                <a
                  href={`https://wa.me/${siteConfig.contact.secondaryAdmin.whatsapp}?text=${encodeURIComponent(`Halo Admin 2, saya ingin bertanya info pendaftaran latihan di ${activeVenue.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-brand-surface/90 hover:bg-brand-royal/50 text-slate-200 hover:text-white border border-slate-700/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white">Admin 2 (WhatsApp)</span>
                      <span className="block text-[11px] text-slate-400">{siteConfig.contact.secondaryAdmin.whatsappFormatted}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                    Chat WA &rarr;
                  </span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
