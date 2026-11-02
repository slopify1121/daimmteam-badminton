import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy, Phone, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Program Kelas', href: '#program' },
    { name: 'Jadwal & GOR', href: '#lokasi' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Tim Pelatih', href: '#pelatih' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-brand-royal/30 py-3' 
          : 'bg-gradient-to-b from-brand-dark/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-royal to-blue-600 flex items-center justify-center border border-brand-gold/40 shadow-md group-hover:scale-105 transition-transform">
              <Trophy className="w-6 h-6 text-brand-gold animate-pulse" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-brand-gold transition-colors">
                {siteConfig.brandName}
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold tracking-wider text-amber-400 uppercase">
                GOR Sariwates & GOR BMW
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action & Hotline */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.primaryAdmin.whatsapp}?text=${encodeURIComponent('Halo Kak Hervan, saya ingin bertanya info pendaftaran Daimmteam Badminton Club.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-brand-surface/80 border border-slate-700/60 px-3.5 py-2 rounded-lg transition-all"
              title="Hubungi Admin Hervan"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hervan: {siteConfig.contact.primaryAdmin.whatsappFormatted}</span>
            </a>

            <a
              href="#daftar"
              className="px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm bg-gradient-to-r from-brand-gold to-amber-500 text-brand-dark hover:from-amber-400 hover:to-brand-gold transition-all duration-300 shadow-md hover:shadow-brand-gold/20 hover:scale-105 flex items-center gap-1.5"
            >
              <span>Daftar Sekarang</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-brand-surface border border-slate-700 text-slate-200 hover:text-brand-gold focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-brand-dark/98 backdrop-blur-xl border-b border-brand-royal/40 px-4 pt-3 pb-6 space-y-3 transition-all animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-base font-semibold text-slate-200 hover:text-brand-gold hover:bg-brand-surface/60 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2.5">
            <a
              href="#daftar"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm bg-gradient-to-r from-brand-gold to-amber-500 text-brand-dark shadow-md"
            >
              <span>Daftar Sekarang (Online)</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`https://wa.me/${siteConfig.contact.primaryAdmin.whatsapp}?text=${encodeURIComponent('Halo Kak Hervan, saya ingin bertanya info pendaftaran Daimmteam Badminton Club.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-2 text-slate-300 bg-brand-surface border border-slate-700 rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WA Hervan</span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.secondaryAdmin.whatsapp}?text=${encodeURIComponent('Halo Kak Seva, saya ingin bertanya info pendaftaran Daimmteam Badminton Club.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-2 text-slate-300 bg-brand-surface border border-slate-700 rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WA Seva</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
