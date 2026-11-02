import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Coaches from './components/Coaches';
import RegistrationForm from './components/RegistrationForm';
import LocationMap from './components/LocationMap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleSelectProgram = (programTitle) => {
    setSelectedProgram(programTitle);
    const el = document.getElementById('daftar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Programs onSelectProgram={handleSelectProgram} />
        <Facilities />
        <Coaches />
        <RegistrationForm selectedProgram={selectedProgram} />
        <LocationMap />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
