import React from 'react';
import { Trophy, Phone, MapPin, Instagram } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center shrink-0">
                <img
                  src="/logo.png"
                  alt="Logo Daimmteam Badminton Club"
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>
              <div>
                <span className="block text-xl font-black text-white">
                  {siteConfig.brandName}
                </span>
                <span className="block text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                  GOR SARIWATES & GOR BMW
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.contact.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-surface border border-slate-700/80 text-slate-300 hover:text-brand-gold hover:border-brand-gold transition-colors text-xs font-semibold"
                aria-label="Instagram Daimmteam"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>{siteConfig.contact.socialMedia.instagramHandle}</span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.primaryAdmin.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-surface border border-slate-700/80 text-slate-300 hover:text-emerald-400 hover:border-emerald-400 transition-colors text-xs font-semibold"
                aria-label="WhatsApp Admin Daimmteam"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Admin</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigasi Website</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#keunggulan" className="hover:text-brand-gold transition-colors">4 Keunggulan Utama</a></li>
              <li><a href="#program" className="hover:text-brand-gold transition-colors">Program & Silabus</a></li>
              <li><a href="#lokasi" className="hover:text-brand-gold transition-colors">Jadwal & Lokasi GOR</a></li>
              <li><a href="#fasilitas" className="hover:text-brand-gold transition-colors">Fasilitas Latihan</a></li>
              <li><a href="#pelatih" className="hover:text-brand-gold transition-colors">Tim Kepelatihan</a></li>
              <li><a href="#galeri" className="hover:text-brand-gold transition-colors">Galeri Latihan</a></li>
              <li><a href="#daftar" className="hover:text-brand-gold transition-colors">Pendaftaran 150rb + Jersey</a></li>
            </ul>
          </div>

          {/* Training Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Kelas Latihan</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#program" className="hover:text-brand-gold transition-colors">Pra Usia Dini - Anak-Anak</a></li>
              <li><a href="#program" className="hover:text-brand-gold transition-colors">Pemula - Remaja</a></li>
              <li><a href="#daftar" className="hover:text-brand-gold transition-colors">Daftar Online + Jersey</a></li>
              <li><a href="#faq" className="hover:text-brand-gold transition-colors">Tanya Jawab (FAQ)</a></li>
            </ul>
          </div>

          {/* Contact Admin & Locations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Kontak & Lokasi</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>GOR Sariwates & GOR BMW, Bandung</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Admin 1: {siteConfig.contact.primaryAdmin.whatsappFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Admin 2: {siteConfig.contact.secondaryAdmin.whatsappFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Instagram: {siteConfig.contact.socialMedia.instagramHandle}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Daimmteam Badminton Club • Official Training Center</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
