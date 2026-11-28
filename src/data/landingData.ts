import { NavItem, TrustPoint, FeatureItem, CaseStudy, PricingPlan } from '../types';

export const WHATSAPP_PHONE = '6285155165118';

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Studi Kasus Lele & Kue', href: '#portofolio' },
  { label: 'Paket Harga', href: '#paket' },
  { label: 'Free Audit', href: '#audit' },
];

export const TRUST_POINTS: TrustPoint[] = [
  { id: '1', label: 'Pengerjaan 2-4 Hari Kerja' },
  { id: '2', label: 'Nol Biaya Sewa Server Bulanan', highlight: true },
  { id: '3', label: '100% Mobile Optimized' },
];

export const HERO_BULLETS = [
  {
    title: 'Info & Harga Jelas dalam 1 Layar HP',
    desc: 'Pelanggan langsung paham tanpa geser jauh.',
  },
  {
    title: 'Tombol Order Otomatis ke WhatsApp',
    desc: 'Format pesanan & jam antar langsung rapi.',
  },
  {
    title: 'Terima Beres & Bebas Biaya Bulanan',
    desc: 'Sekali bikin aktif permanen tanpa sewa hosting.',
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'feature-1',
    step: '01. RINGAN & ENTENG',
    title: 'Dibuka Lancar di HP Pembeli',
    description:
      'Format web statis bersih tanpa plugin berat yang membebani kuota pelanggan. Di-deploy praktis via Netlify sehingga loading terasa mulus di jaringan internet apa pun.',
    badgeText: 'Deploy Cepat di Netlify Cloud',
    iconName: 'Zap',
    accent: 'green',
  },
  {
    id: 'feature-2',
    step: '02. HIGH CONVERSION',
    title: 'Alur Order WA Otomatis',
    description:
      'Format pesanan, varian menu, dan jadwal pengiriman sudah langsung tersusun saat pembeli klik pesan. CS Anda tak perlu lagi capek menanyakan data dari nol.',
    badgeText: 'Konversi Order Naik 2.3x',
    iconName: 'MessageSquare',
    accent: 'terracotta',
  },
  {
    id: 'feature-3',
    step: '03. RAMAH BUDGET',
    title: 'Bebas Biaya Server Bulanan',
    description:
      'Cukup sekali bayar terima beres. Tidak ada tagihan sewa hosting Rp 150rb/bulan atau biaya domain tahunan yang bikin pusing UMKM lokal.',
    badgeText: 'Rp 0 Biaya Maintenance Server',
    iconName: 'PiggyBank',
    accent: 'green',
  },
];

export const CASE_STUDY_SANDIKALA: CaseStudy = {
  id: 'sandikala-farm',
  category: 'Agrikultur & Pangan',
  location: 'Mangaran, Situbondo',
  title: 'Sandikala Farm — Katalog Lele Bersih & Pre-Order WhatsApp',
  description:
    'UMKM budidaya lele segar hidup & bersih siap goreng (9–12 ekor/kg). Sebelumnya order via chat manual sering berantakan karena pelanggan bolak-balik tanya harga dan jadwal pengiriman. Kini pembeli tinggal klik varian, jadwal antar pagi/sore, dan pesan terkirim otomatis ke WhatsApp.',
  quote: {
    text: 'Praktis terima beres, orderan harian lele bersih & pre-order langsung rapi masuk ke WhatsApp tanpa harus jelasin harga berkali-kali.',
    author: 'Reza Andika, Owner Sandikala Farm',
  },
  ctaText: 'Mau Web Katalog Seperti Sandikala?',
  ctaMessage: 'Halo Etalase.in, saya mau bikin landing page seperti Sandikala Farm',
  previewUrl: 'https://sandikala-farm.netlify.app/',
  specs: [
    {
      title: '0 Biaya Server',
      subtitle: 'Web statis ringan tanpa sewa bulanan',
      icon: 'Cloud',
    },
    {
      title: '1-Klik Order WhatsApp',
      subtitle: 'Pilihan kloter jam 09.00 / 16.00 otomatis',
      icon: 'MousePointerClick',
    },
    {
      title: 'Ringan di Segala Smartphone',
      subtitle: 'Buka enteng tanpa lag di smartphone ibu rumah tangga & pelanggan',
      icon: 'Smartphone',
    },
  ],
};

export const CASE_STUDY_SUGARLICIOUS: CaseStudy = {
  id: 'sugarlicious',
  category: 'F&B Artisanal',
  location: 'Situbondo, Indonesia',
  title: 'Sugarlicious Artisanal Bakehouse',
  description:
    'Brand bakery premium di Situbondo yang membutuhkan etalase online cepat untuk mengonversi lead Instagram Ads langsung ke pesanan hampers via WhatsApp tanpa hambatan menu yang rumit.',
  ctaText: 'Mau Desain Seperti Ini?',
  ctaMessage: 'Halo Etalase.in, saya mau bikin landing page seperti Sugarlicious',
  previewUrl: 'https://sugarlicious.netlify.app',
  previewImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC0bUah5_ud8m6TYkIp0stKuH4xDOU5MgoGmavqtTlJ2C9kRN2toeSJv3ghPcXhpTyO22zHHWjq9Se1F2ZPuAQrmAV0Va3yZwA7Fu8cHSQrz9HSBMfRdq-sSE5hHLMQW0DSyJ_E8FwNNYUKtXdJvzko5nXmByz0MSzvdAWppCEGlQrrsxqul4jAWFPQoETdcMNAhN1zuhykltv2sEDyZrfP0_aM8lfp92blbDbgpjo',
  metrics: [
    {
      label: 'PENGALAMAN AKSES',
      value: 'Enteng & Tanpa Lemot',
      color: 'terracotta',
    },
  ],
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    title: 'Starter Netlify',
    eyebrow: 'Paling Pas Buat Pemula / 1-3 Menu Andalan',
    description: 'Cocok buat tes respon pasar tanpa beban biaya bulanan.',
    price: 'Rp 199.000',
    originalPrice: 'Rp 350.000',
    periodText: 'Investasi 1x • Tanpa Iuran Server',
    features: [
      '1 Halaman Katalog Ringan (Fokus 1-3 Varian Menu/Produk)',
      'Subdomain Praktis Aktif Selamanya (namatoko.netlify.app)',
      'Tombol Order Otomatis Terhubung Langsung ke WhatsApp',
      'Gratis Hosting Netlify Rp 0 (Bebas Biaya Server Bulanan)',
      'Pengerjaan Terstruktur 2-3 Hari Kerja Siap Pakai',
    ],
    ctaText: 'Pilih Paket Starter',
    ctaMessage: 'Halo Etalase.in, saya ambil paket Starter Netlify Rp199rb',
    variant: 'standard',
  },
  {
    id: 'pro',
    title: 'Katalog Lengkap WA',
    eyebrow: 'Usaha Tumbuh - Paling Diminati',
    description: 'Solusi praktis toko kuliner, hampers, & UMKM lokal agar cepat closing.',
    price: 'Rp 399.000',
    originalPrice: 'Rp 650.000',
    periodText: 'Bayar Sekali Terima Beres di Netlify',
    isPopular: true,
    popularBadge: '🔥 BEST SELLER UMKM (HEMAT Rp 250RB)',
    features: [
      'Katalog Lengkap 5-10 Menu/Varian dengan Foto Menggoda',
      'Fitur Pilihan Kloter Pengantaran / Jam Kirim (Model Sandikala)',
      'Format Pesanan WhatsApp Otomatis (Tinggal Balas No Rekening)',
      'Banner Promo Khusus & Desain Rapi Mobile-First',
      'Pengerjaan Terstruktur 2-4 Hari Kerja Sampai Tayang',
      'Garansi Revisi Tampilan & Penyesuaian Menu',
    ],
    ctaText: 'Ambil Promo Paket Komplit',
    ctaMessage: 'Halo Etalase.in, saya ambil Paket Usaha Tumbuh Rp399rb',
    variant: 'popular',
  },
  {
    id: 'custom',
    title: 'Custom Domain',
    eyebrow: 'Brand Profesional & Custom',
    description: 'Untuk brand yang mau pakai domain sendiri (.com / .id) tanpa label netlify.',
    price: 'Rp 799.000',
    originalPrice: 'Rp 1.200.000',
    periodText: 'Setup Domain & Hosting Pribadi',
    features: [
      'Koneksi Nama Domain Sendiri (.com / .id / .co.id)',
      'Bebas Pakai Hosting Mandiri (cPanel/VPS) atau Netlify Custom',
      'Katalog Banyak Menu/Kategori Tanpa Batas',
      'Setup Meta Pixel & TikTok Ads Tracker Terpasang',
      'Pendampingan Setting DNS & Bimbingan Transparan',
    ],
    ctaText: 'Konsultasi Domain Sendiri',
    ctaMessage: 'Halo Etalase.in, saya butuh Paket Custom Domain Rp799rb',
    variant: 'custom',
  },
];
