import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle, Shirt } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function RegistrationForm({ selectedProgram }) {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    whatsappNumber: '',
    program: 'Kelas Pra Usia Dini - Anak-Anak',
    venue: 'GOR Sariwates (Kamis, Sabtu, Minggu | 16.00 - 19.00 WIB)',
    jerseySize: 'Size Anak M (Usia 8-10 tahun)',
    targetAdmin: 'hervan', // 'hervan' | 'seva'
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync when prop changes
  useEffect(() => {
    if (selectedProgram) {
      setFormData((prev) => ({ ...prev, program: selectedProgram }));
    }
  }, [selectedProgram]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const getActiveAdmin = () => {
    return formData.targetAdmin === 'seva' 
      ? siteConfig.contact.secondaryAdmin 
      : siteConfig.contact.primaryAdmin;
  };

  const generateWhatsAppMessage = () => {
    const admin = getActiveAdmin();
    return `*PENDAFTARAN DAIMMTEAM BADMINTON CLUB*
Kepada: Kak ${admin.name}
----------------------------------------
*Nama Calon Peserta:* ${formData.fullName || '-'}
*Usia:* ${formData.age ? formData.age + ' Tahun' : '-'}
*No. WhatsApp:* ${formData.whatsappNumber || '-'}
*Pilihan Kelas:* ${formData.program}
*Pilihan Lokasi GOR:* ${formData.venue}
*Ukuran Jersey (Include):* ${formData.jerseySize}
*Biaya Pendaftaran:* ${siteConfig.registrationFee.amount} (${siteConfig.registrationFee.benefit})
*Catatan / Pertanyaan:* ${formData.notes || 'Tidak ada'}
----------------------------------------
_Halo Kak ${admin.name}, saya mengisi form pendaftaran di website resmi Daimmteam Badminton Club. Mohon info ketersediaan slot latihan dan info pembayaran pendaftaran._`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Mohon isi nama lengkap calon peserta.');
      return;
    }
    if (!formData.whatsappNumber.trim()) {
      setErrorMsg('Mohon isi nomor WhatsApp aktif untuk konfirmasi jadwal.');
      return;
    }
    if (!formData.age.trim()) {
      setErrorMsg('Mohon cantumkan usia calon peserta.');
      return;
    }

    const admin = getActiveAdmin();
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${admin.whatsapp}?text=${encodedMessage}`;

    // Open WhatsApp in new tab/app
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="daftar" className="py-20 sm:py-28 bg-brand-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-royal/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Formulir Pendaftaran Online
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300">
            Daftar sekarang dengan biaya <strong className="text-amber-400">{siteConfig.registrationFee.amount}</strong> dan langsung dapatkan <strong>Jersey Resmi Daimmteam</strong>.
          </p>
        </div>

        {/* Kaos / Jersey & Pendaftaran Showcase Card (Pindahan dari Hero - Opsi A) */}
        <div className="mt-8 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-brand-gold/15 to-yellow-500/20 border-2 border-brand-gold/70 shadow-xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-brand-gold text-brand-dark flex items-center justify-center shrink-0 shadow-md">
              <Shirt className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-white">
                PENDAFTARAN <span className="text-brand-gold">{siteConfig.registrationFee.amount}</span>
              </div>
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                ★ {siteConfig.registrationFee.benefit.toUpperCase()} ★
              </div>
            </div>
          </div>
          <div className="text-[11px] sm:text-xs text-slate-300 font-medium sm:text-right border-t sm:border-t-0 sm:border-l border-slate-700/60 pt-2 sm:pt-0 sm:pl-4">
            Pilih ukuran jersey pada form di bawah untuk persiapan latihan.
          </div>
        </div>

        {/* Form Container */}
        <div className="mt-8 bg-brand-surface/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Pendaftaran Berhasil Dikirim ke WhatsApp!
              </h3>
              <p className="text-slate-300 max-w-md mx-auto text-sm">
                Chat WhatsApp telah terbuka ke admin pilihan Anda ({getActiveAdmin().name}). Admin akan segera membalas detail sesi latihan perdana dan fitting jersey.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-brand-royal text-white text-xs font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  Daftarkan Peserta Lain
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Alert error message if validation fails */}
              {errorMsg && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs sm:text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Grid 1: Pilih Admin Tujuan */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-2">
                  Pilih Admin WhatsApp Tujuan:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.targetAdmin === 'hervan'
                        ? 'bg-brand-royal/40 border-brand-gold text-white shadow-md'
                        : 'bg-brand-dark/70 border-slate-700/80 text-slate-300 hover:bg-brand-dark'
                    }`}
                  >
                    <input
                      type="radio"
                      name="targetAdmin"
                      value="hervan"
                      checked={formData.targetAdmin === 'hervan'}
                      onChange={handleChange}
                      className="text-brand-gold focus:ring-brand-gold"
                    />
                    <div>
                      <span className="block text-sm font-bold">Kak Hervan</span>
                      <span className="block text-[11px] text-slate-400">{siteConfig.contact.primaryAdmin.whatsappFormatted}</span>
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.targetAdmin === 'seva'
                        ? 'bg-brand-royal/40 border-brand-gold text-white shadow-md'
                        : 'bg-brand-dark/70 border-slate-700/80 text-slate-300 hover:bg-brand-dark'
                    }`}
                  >
                    <input
                      type="radio"
                      name="targetAdmin"
                      value="seva"
                      checked={formData.targetAdmin === 'seva'}
                      onChange={handleChange}
                      className="text-brand-gold focus:ring-brand-gold"
                    />
                    <div>
                      <span className="block text-sm font-bold">Kak Seva</span>
                      <span className="block text-[11px] text-slate-400">{siteConfig.contact.secondaryAdmin.whatsappFormatted}</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Grid 2: Nama, Usia, No WA */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-2">
                    Nama Lengkap Calon Peserta <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Contoh: Ryan Pratama"
                    className="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-2">
                    Usia Peserta <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Contoh: 10"
                    min="4"
                    max="65"
                    className="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-2">
                    Nomor WhatsApp Aktif <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    required
                  />
                </div>
              </div>

              {/* Grid 3: Kategori Program (Hanya 2 Program Resmi) & Venue GOR */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-2">
                    Pilihan Kelas Latihan
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                  >
                    <option value="Kelas Pra Usia Dini - Anak-Anak">Kelas Pra Usia Dini - Anak-Anak (Belajar Sambil Bermain)</option>
                    <option value="Kelas Pemula - Remaja">Kelas Pemula - Remaja (Teknik, Taktik & Fisik)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-2">
                    Pilihan Lokasi GOR & Jadwal
                  </label>
                  <select
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                  >
                    <option value="GOR Sariwates (Kamis, Sabtu, Minggu | 16.00 - 19.00 WIB)">GOR Sariwates (Kamis, Sabtu, Minggu | 16.00 - 19.00 WIB)</option>
                    <option value="GOR BMW (Senin | 15.00 - 18.00 WIB)">GOR BMW (Senin | 15.00 - 18.00 WIB)</option>
                    <option value="Kedua GOR (Sariwates & BMW)">Kedua GOR (Sariwates & BMW)</option>
                  </select>
                </div>
              </div>

              {/* Ukuran Jersey (Include) */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-2">
                  Pilihan Ukuran Jersey Resmi Daimmteam (Include):
                </label>
                <select
                  name="jerseySize"
                  value={formData.jerseySize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                >
                  <option value="Size Anak S (Usia 5-7 th)">Size Anak S (Usia 5-7 tahun)</option>
                  <option value="Size Anak M (Usia 8-10 th)">Size Anak M (Usia 8-10 tahun)</option>
                  <option value="Size Anak L (Usia 11-13 th)">Size Anak L (Usia 11-13 tahun)</option>
                  <option value="Size Remaja/Dewasa S">Size Dewasa S</option>
                  <option value="Size Remaja/Dewasa M">Size Dewasa M</option>
                  <option value="Size Remaja/Dewasa L">Size Dewasa L</option>
                  <option value="Size Remaja/Dewasa XL">Size Dewasa XL</option>
                </select>
              </div>

              {/* Catatan Khusus */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-2">
                  Catatan Tambahan / Pertanyaan (Opsional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Contoh: Belum pernah ikut kursus bulutangkis, ingin menanyakan jadwal pertemuan perdana..."
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                />
              </div>

              {/* Live Preview Box */}
              <div className="rounded-2xl bg-brand-dark/70 border border-slate-800 p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold">
                  <MessageSquare className="w-4 h-4" />
                  <span>Pratinjau Pesan yang Akan Terkirim ke WhatsApp Kak {getActiveAdmin().name}:</span>
                </div>
                <pre className="text-[11px] sm:text-xs text-slate-300 font-mono whitespace-pre-wrap bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                  {generateWhatsAppMessage()}
                </pre>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl font-black text-base sm:text-lg bg-gradient-to-r from-brand-gold via-amber-500 to-yellow-500 hover:from-yellow-400 hover:to-brand-gold text-brand-dark shadow-xl shadow-brand-gold/25 hover:shadow-brand-gold/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Send className="w-5 h-5 text-brand-dark" />
                  <span>Kirim Pendaftaran ke WA Kak {getActiveAdmin().name}</span>
                </button>
                <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Biaya Pendaftaran {siteConfig.registrationFee.amount} • Include Jersey Resmi • Konfirmasi Instan</span>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
