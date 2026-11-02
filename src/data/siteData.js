// Data Pusat Resmi Daimmteam Badminton Club
// Data judul, venue, jadwal, dan kurikulum 100% asli dari spanduk.
// Deskripsi naratif tambahan menggunakan Lorem Ipsum sebagai placeholder.

export const siteConfig = {
  brandName: "Daimmteam Badminton Club",
  shortName: "Daimmteam",
  tagline: "Pusat Pembinaan & Pelatihan Bulutangkis Berprestasi",
  subTagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  
  // Kontak Resmi Admin (Tanpa Nama Pribadi agar Lebih Profesional)
  contact: {
    primaryAdmin: {
      name: "Admin 1",
      whatsapp: "6285722370950",
      whatsappFormatted: "0857-2237-0950"
    },
    secondaryAdmin: {
      name: "Admin 2",
      whatsapp: "6289662235994",
      whatsappFormatted: "0896-6223-5994"
    },
    socialMedia: {
      instagram: "https://instagram.com/daimmteam",
      instagramHandle: "@Daimmteam",
    }
  },

  // Biaya Pendaftaran Resmi (Sesuai Spanduk)
  registrationFee: {
    amount: "Rp 150.000",
    benefit: "Include Jersey Resmi Daimmteam",
    note: "Biaya pendaftaran resmi Rp 150.000 sudah include jersey klub."
  },

  // 4 Pilar Keunggulan Utama (Judul Asli dari Spanduk, Deskripsi Lorem Ipsum)
  pillars: [
    {
      title: "Dilatih Oleh Pelatih Berpengalaman",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
      icon: "Award"
    },
    {
      title: "Program Terstruktur",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
      icon: "TrendingUp"
    },
    {
      title: "Mendukung Prestasi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
      icon: "Trophy"
    },
    {
      title: "Kegiatan Positif & Sehat",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
      icon: "HeartHandshake"
    }
  ],

  // Dua Lokasi GOR Latihan Resmi (Sesuai Spanduk)
  venues: [
    {
      id: "sariwates",
      name: "GOR Sariwates",
      schedule: "Kamis, Sabtu, Minggu (16.00 – 19.00 WIB)",
      days: ["Kamis", "Sabtu", "Minggu"],
      time: "16.00 - 19.00 WIB",
      address: "Komplek Sariwates Residence, Antapani Kidul, Kec. Antapani, Kota Bandung",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7516843075253!2d107.66580977499659!3d-6.919062393080517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd26f1c4df27%3A0x7d01ebca5b86b595!2sGOR%20Sariwates!5e0!3m2!1sid!2sid!4v1700000000001!5m2!1sid!2sid",
      googleMapsUrl: "https://maps.google.com/?q=GOR+Sariwates+Bandung",
      wazeUrl: "https://waze.com/ul?q=GOR+Sariwates+Bandung",
      highlight: "Sesi Sore & Akhir Pekan"
    },
    {
      id: "bmw",
      name: "GOR BMW",
      schedule: "Senin (15.00 – 18.00 WIB)",
      days: ["Senin"],
      time: "15.00 - 18.00 WIB",
      address: "Kawasan Olahraga GOR BMW, Bandung",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.835472851493!2d107.654876!3d-6.910245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd2333c14d9b%3A0x889c02da30d072f9!2sGOR%20Bulutangkis%20Bandung!5e0!3m2!1sid!2sid!4v1700000000002!5m2!1sid!2sid",
      googleMapsUrl: "https://maps.google.com/?q=GOR+BMW+Bandung",
      wazeUrl: "https://waze.com/ul?q=GOR+BMW+Bandung",
      highlight: "Sesi Awal Pekan"
    }
  ],

  // Fasilitas (Judul & Badge Template, Deskripsi Lorem Ipsum)
  facilities: [
    {
      id: "facility-01",
      title: "Fasilitas 01",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      icon: "ShieldCheck",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop",
      badge: "Kategori 01"
    },
    {
      id: "facility-02",
      title: "Fasilitas 02",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      icon: "ShoppingBag",
      image: "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?q=80&w=1200&auto=format&fit=crop",
      badge: "Kategori 02"
    },
    {
      id: "facility-03",
      title: "Fasilitas 03",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      icon: "SunMedium",
      image: "https://images.unsplash.com/photo-1613918431703-aa503e47a956?q=80&w=1200&auto=format&fit=crop",
      badge: "Kategori 03"
    },
    {
      id: "facility-04",
      title: "Fasilitas 04",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      icon: "Coffee",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
      badge: "Kategori 04"
    }
  ],

  // Tim Kepelatihan (Judul Asli, Paragraf Lorem Ipsum)
  coachingPhilosophy: {
    title: "Tim Kepelatihan Berpengalaman",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      {
        title: "Pendekatan Ramah Anak",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum fermentum nunc."
      },
      {
        title: "Koreksi Teknik Bertahap",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum fermentum nunc."
      },
      {
        title: "Disiplin & Mental Juara",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum fermentum nunc."
      }
    ]
  },

  // 2 Program Pelatihan Resmi (Judul & 4 Butir Silabus ASLI dari Spanduk, Pengantar Lorem Ipsum)
  programs: [
    {
      id: "pra-usia-dini",
      title: "Kelas Pra Usia Dini - Anak-Anak",
      badgeText: "Kelas Anak",
      target: "Usia Dini & Anak-Anak",
      venuesText: "GOR Sariwates & GOR BMW",
      schedule: "Senin (BMW) & Kamis, Sabtu, Minggu (Sariwates)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      curriculum: [
        "1. Latihan dasar",
        "2. Teknik dan kelincahan",
        "3. Membangun percaya diri",
        "4. Belajar sambil bermain"
      ],
      highlight: true
    },
    {
      id: "pemula-remaja",
      title: "Kelas Pemula - Remaja",
      badgeText: "Kelas Remaja",
      target: "Remaja & Pemula",
      venuesText: "GOR Sariwates & GOR BMW",
      schedule: "Senin (BMW) & Kamis, Sabtu, Minggu (Sariwates)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      curriculum: [
        "1. Peningkatan Teknik & footwork",
        "2. Taktik bermain",
        "3. Peningkatan stamina dan fisik",
        "4. Membangun mental juara"
      ],
      highlight: true
    }
  ],

  // Galeri Kegiatan & Dokumentasi Latihan
  gallery: [
    {
      id: "gal-1",
      title: "Sesi Latihan Footwork & Kelincahan",
      category: "Latihan Rutin",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "gal-2",
      title: "Bimbingan Teknik Dasar Anak",
      category: "Pra Usia Dini",
      image: "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "gal-3",
      title: "Suasana Lapangan & Latihan Terarah",
      category: "GOR Resmi",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "gal-4",
      title: "Drill Pukulan & Taktik Remaja",
      category: "Pemula - Remaja",
      image: "https://images.unsplash.com/photo-1613918431703-aa503e47a956?q=80&w=800&auto=format&fit=crop"
    }
  ],

  // FAQ Berdasarkan Fakta Pasti
  faqs: [
    {
      question: "Berapa biaya pendaftaran dan apa saja yang didapatkan?",
      answer: "Biaya pendaftaran resmi adalah Rp 150.000 dan sudah include (termasuk) Jersey Resmi Daimmteam Badminton Club sebagai seragam latihan."
    },
    {
      question: "Dimana saja lokasi dan jadwal latihan Daimmteam?",
      answer: "Latihan diadakan di 2 venue resmi: GOR BMW setiap hari Senin (15.00 – 18.00 WIB) dan GOR Sariwates setiap hari Kamis, Sabtu, dan Minggu (16.00 – 19.00 WIB)."
    },
    {
      question: "Kategori kelas apa saja yang tersedia?",
      answer: "Tersedia 2 kelas reguler: (1) Kelas Pra Usia Dini - Anak-Anak dengan metode belajar sambil bermain, dan (2) Kelas Pemula - Remaja dengan fokus teknik, fisik, dan taktik bermain."
    },
    {
      question: "Bagaimana cara mendaftar dan menanyakan iuran bulanan?",
      answer: "Anda cukup mengisi formulir online di website ini, lalu klik tombol kirim. Pesan pendaftaran akan langsung terhubung ke WhatsApp Admin resmi untuk konfirmasi jadwal latihan dan informasi iuran bulanan."
    },
    {
      question: "Siapa nomor kontak admin yang dapat dihubungi?",
      answer: "Anda dapat menghubungi WhatsApp Admin 1 di 0857-2237-0950 atau Admin 2 di 0896-6223-5994, serta mengikuti akun Instagram resmi di @Daimmteam."
    }
  ]
};
