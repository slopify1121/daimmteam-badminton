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
    targetAdmin: 'admin1', // 'admin1' | 'admin2'
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
    return formData.targetAdmin === 'admin2' 
      ? siteConfig.contact.secondaryAdmin 
      : siteConfig.contact.primaryAdmin;
  };

  const generateWhatsAppMessage = () => {
    const admin = getActiveAdmin();
    return `*PENDAFTARAN DAIMMTEAM BADMINTON CLUB*
Kepada: ${admin.name} (Official Admin)
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
_Halo ${admin.name}, saya mengisi form pendaftaran di website resmi Daimmteam Badminton Club. Mohon info ketersediaan slot latihan dan info pembayaran pendaftaran._`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Mohon isi nama lengkap calon peserta.');
      return;
    }
    if (!formData.whatsappNumber.trim()) {
      setErrorMsg('Mohon isi nomor WhatsApp aktif.');
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
    <section id="daftar" className="py-8 sm:py-20 bg-brand-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-royal/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-3 sm:px-6 relative z-10">
        
        {/* Section Header (Ringkas & Padat) */}
        <div className="text-center max-w-xl mx-auto mb-3 sm:mb-6">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Formulir Pendaftaran Online
          </h2>
          <p className="mt-1 text-[11px] sm:text-sm text-slate-300">
            Daftar latihan resmi dengan biaya <strong className="text-amber-400">{siteConfig.registrationFee.amount}</strong> (Include Jersey).
          </p>
        </div>

        {/* Compact Jersey Badge */}
        <div className="mb-3 p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-amber-500/15 via-brand-surface to-brand-royal/30 border border-brand-gold/50 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-brand-gold text-brand-dark flex items-center justify-center shrink-0 shadow">
              <Shirt className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-xs block">PENDAFTARAN {siteConfig.registrationFee.amount}</span>
              <span className="text-[10px] text-amber-300 font-semibold block uppercase">★ {siteConfig.registrationFee.benefit} ★</span>
            </div>
          </div>
          <div className="hidden sm:block text-[11px] text-slate-300">
            Pilih ukuran jersey pada formulir di bawah.
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-brand-surface/95 border border-slate-800 rounded-2xl p-3.5 sm:p-7 shadow-2xl backdrop-blur-xl">
          
          {submitted ? (
            <div className="text-center py-6 sm:py-10 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-white">
                Pendaftaran Berhasil Dikirim!
              </h3>
              <p className="text-slate-300 max-w-md mx-auto text-xs sm:text-sm">
                WhatsApp telah terbuka ke <strong>{getActiveAdmin().name}</strong>. Admin akan segera merespons jadwal pertemuan perdana.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-xl bg-brand-royal text-white text-xs font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  Daftarkan Peserta Lain
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              
              {/* Alert error */}
              {errorMsg && (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Grid 1: Pilih Admin Tujuan (2 Kolom di Mobile) */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-200 mb-1">
                  Pilih WhatsApp Admin:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label
                    className={`flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border cursor-pointer transition-all ${
                      formData.targetAdmin === 'admin1'
                        ? 'bg-brand-royal/40 border-brand-gold text-white shadow-sm'
                        : 'bg-brand-dark/70 border-slate-700/80 text-slate-300 hover:bg-brand-dark'
                    }`}
                  >
                    <input
                      type="radio"
                      name="targetAdmin"
                      value="admin1"
                      checked={formData.targetAdmin === 'admin1'}
                      onChange={handleChange}
                      className="text-brand-gold focus:ring-brand-gold w-3.5 h-3.5"
                    />
                    <div className="truncate">
                      <span className="block text-xs font-bold text-white truncate">Admin 1</span>
                      <span className="block text-[10px] text-slate-400 truncate">{siteConfig.contact.primaryAdmin.whatsappFormatted}</span>
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border cursor-pointer transition-all ${
                      formData.targetAdmin === 'admin2'
                        ? 'bg-brand-royal/40 border-brand-gold text-white shadow-sm'
                        : 'bg-brand-dark/70 border-slate-700/80 text-slate-300 hover:bg-brand-dark'
                    }`}
                  >
                    <input
                      type="radio"
                      name="targetAdmin"
                      value="admin2"
                      checked={formData.targetAdmin === 'admin2'}
                      onChange={handleChange}
                      className="text-brand-gold focus:ring-brand-gold w-3.5 h-3.5"
                    />
                    <div className="truncate">
                      <span className="block text-xs font-bold text-white truncate">Admin 2</span>
                      <span className="block text-[10px] text-slate-400 truncate">{siteConfig.contact.secondaryAdmin.whatsappFormatted}</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Grid 2: Nama Calon Peserta (2 Kolom) + Usia (1 Kolom) */}
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-200 mb-1">
                    Nama Calon Peserta <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Nama lengkap"
                    className="w-full px-2.5 py-1.5 sm:py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                    required
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-200 mb-1">
                    Usia <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Tahun"
                    min="4"
                    max="65"
                    className="w-full px-2.5 py-1.5 sm:py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                    required
                  />
                </div>
              </div>

              {/* Grid 3: No. WhatsApp & Ukuran Jersey (2 Kolom di Mobile) */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-200 mb-1">
                    No. WhatsApp <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="08xxxxxxxxxx"
                    className="w-full px-2.5 py-1.5 sm:py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-200 mb-1">
                    Ukuran Jersey (Include)
                  </label>
                  <select
                    name="jerseySize"
                    value={formData.jerseySize}
                    onChange={handleChange}
                    className="w-full px-2 py-1.5 sm:py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                  >
                    <option value="Size Anak S (Usia 5-7 tahun)">Anak S (5-7 th)</option>
                    <option value="Size Anak M (Usia 8-10 tahun)">Anak M (8-10 th)</option>
                    <option value="Size Anak L (Usia 11-13 tahun)">Anak L (11-13 th)</option>
                    <option value="Size Remaja/Dewasa S">Dewasa S</option>
                    <option value="Size Remaja/Dewasa M">Dewasa M</option>
                    <option value="Size Remaja/Dewasa L">Dewasa L</option>
                    <option value="Size Remaja/Dewasa XL">Dewasa XL</option>
                  </select>
                </div>
              </div>

              {/* Grid 4: Pilihan Kelas & Lokasi GOR (2 Kolom di Mobile) */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-200 mb-1">
                    Pilihan Kelas
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-2 py-1.5 sm:py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                  >
                    <option value="Kelas Pra Usia Dini - Anak-Anak">Pra Usia Dini (Anak)</option>
                    <option value="Kelas Pemula - Remaja">Pemula (Remaja)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-200 mb-1">
                    Lokasi GOR
                  </label>
                  <select
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full px-2 py-1.5 sm:py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                  >
                    <option value="GOR Sariwates (Kamis, Sabtu, Minggu)">GOR Sariwates (Kam, Sab, Min)</option>
                    <option value="GOR BMW (Senin)">GOR BMW (Senin)</option>
                    <option value="Kedua GOR (Sariwates & BMW)">Kedua GOR</option>
                  </select>
                </div>
              </div>

              {/* Catatan Tambahan (Compact Input) */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-200 mb-1">
                  Catatan / Pertanyaan (Opsional)
                </label>
                <input
                  type="text"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Catatan bila ada..."
                  className="w-full px-2.5 py-1.5 sm:py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                />
              </div>

              {/* Collapsible Format Pesan WhatsApp (Agar tidak memakan ruang 1 layar) */}
              <details className="text-[11px] text-slate-400 group">
                <summary className="cursor-pointer text-[10px] sm:text-xs text-brand-gold font-medium flex items-center gap-1.5 hover:underline select-none">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Lihat pratinjau format pesan WhatsApp</span>
                </summary>
                <pre className="mt-2 text-[10px] text-slate-300 font-mono whitespace-pre-wrap bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                  {generateWhatsAppMessage()}
                </pre>
              </details>

              {/* Submit CTA */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3.5 px-4 rounded-xl font-black text-xs sm:text-base bg-gradient-to-r from-brand-gold via-amber-500 to-yellow-500 hover:from-yellow-400 hover:to-brand-gold text-brand-dark shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4 text-brand-dark" />
                  <span>Kirim Pendaftaran ke {getActiveAdmin().name}</span>
                </button>
                <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-slate-400 text-center">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Pendaftaran {siteConfig.registrationFee.amount} • Include Jersey Resmi</span>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
