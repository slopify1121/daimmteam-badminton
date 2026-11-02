import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
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
          
          {/* Logo PNG & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/logo.png"
                alt="Logo Daimmteam Badminton Club"
                className="w-full h-full object-contain filter drop-shadow-md"
              />
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

          {/* Desktop Call to Action (Nomor WA dihapus, tombol lebih bersih) */}
          <div className="hidden lg:flex items-center">
            <a
              href="#daftar"
              className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-brand-gold to-amber-500 text-brand-dark hover:from-amber-400 hover:to-brand-gold transition-all duration-300 shadow-md hover:shadow-brand-gold/20 hover:scale-105 flex items-center gap-1.5 cursor-pointer"
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

          <div className="pt-3 border-t border-slate-800">
            <a
              href="#daftar"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm bg-gradient-to-r from-brand-gold to-amber-500 text-brand-dark shadow-md"
            >
              <span>Daftar Sekarang (Online)</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
