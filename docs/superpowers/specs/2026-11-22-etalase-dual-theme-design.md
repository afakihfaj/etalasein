# Etalase.in Dual-Theme Landing Page — Design Specification

## Overview

Etalase.in adalah platform penyedia jasa landing page spesialis closing cepat untuk UMKM dan brand lokal Indonesia. Dokumen ini menspesifikasikan arsitektur, desain sistem, dan implementasi aplikasi landing page menggunakan **React (v18/v19)**, **Vite**, **Tailwind CSS**, dan **TypeScript**, dengan dukungan **Dual-Theme** (Light Warm Minimalist & Dark Precision Growth), integrasi **Lucide React**, serta direct WhatsApp routing terpusat.

---

## 1. Arsitektur & Teknologi

*   **Framework / Library:** React 18 / 19 dengan TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS (Class-based dark mode)
*   **Icon Library:** `lucide-react`
*   **Fonts:** 
    *   Display: `Space Grotesk` (Google Fonts)
    *   Body: `Plus Jakarta Sans` (Google Fonts)
    *   Mono / Metrics: `JetBrains Mono` (Google Fonts)
*   **Target WhatsApp:** `+62 851-5516-5118` (Format URL: `https://wa.me/6285155165118?text=...`)

---

## 2. Sistem Desain & Dual-Theme Tokens

Aplikasi mendukung perpindahan tema tanpa reload melalui React `ThemeContext`, tersinkronisasi dengan class `dark` pada elemen `<html>` dan disimpan di `localStorage` (key: `etalase_theme`).

### 2.1. Light Warm Minimalist (Default / Sesuai `screen.png`)
*   `canvas` (Background): `#F7F5F0` (krem hangat)
*   `canvas-alt` (Secondary Surface): `#EFECE4`
*   `canvas-card` (Card Surface): `#FFFFFF`
*   `border-neutral`: `#E8E4DA`
*   `border-subtle`: `#DDD8CC`
*   `brand-green`: `#0F9F6E` (hover: `#0B845A`, subtle: `#EAF7F1`)
*   `terracotta`: `#8C4F3B` (dark: `#753F2D`, light: `#F7EFEA`)
*   `text-primary`: `#1C1917` (warm stone)
*   `text-secondary`: `#57534E`
*   `text-muted`: `#8A857D`

### 2.2. Dark Precision Growth (Sesuai `DESIGN.md`)
*   `canvas` (Background): `#090D12` / `#101419` (deep obsidian)
*   `canvas-alt`: `#161F2B`
*   `canvas-card`: `#0F151D`
*   `border-neutral`: `rgba(255, 255, 255, 0.08)`
*   `border-subtle`: `rgba(255, 255, 255, 0.05)`
*   `brand-green`: `#10B981` (hover: `#059669`, subtle: `rgba(16, 185, 129, 0.12)`)
*   `terracotta`: `#34D399` (mint highlight) atau `#E0E2EA`
*   `text-primary`: `#F8FAFC`
*   `text-secondary`: `#94A3B8`
*   `text-muted`: `#64748B`
*   `ambient-glow`: `box-shadow: 0 0 30px -5px rgba(16, 185, 129, 0.25)`

---

## 3. Komponen & Struktur Halaman

Halaman terdiri dari 7 seksi utama dan 2 floating elements:

1.  **Floating Pill Header (`Navbar.tsx`):**
    *   Wadah pill melayang di bagian atas dengan `backdrop-blur-md` dan rounded-full.
    *   Logo: `Etalase.in` dengan dot hijau beranimasi saat hover.
    *   Navigasi: Keunggulan (`#keunggulan`), Studi Kasus (`#portofolio`), Paket Harga (`#paket`), Free Audit (`#audit`).
    *   Theme Switcher Button: Toggle ikon `Sun` / `Moon` dari Lucide.
    *   CTA Button: Konsultasi WhatsApp.
2.  **Hero Section (`Hero.tsx`):**
    *   Pill badge terakota: `JASA WEB KATALOG & LANDING PAGE 1-LAYAR`.
    *   Headline: `Iklan Jalan Terus, Tapi WhatsApp Sepi? Masalahnya Bukan Iklan, Tapi Halaman Bio Kamu.`
    *   Subheadline penjelasan nilai tambah terima beres di Netlify.
    *   Dua tombol aksi: WhatsApp Direct & Scroll to Portfolio.
    *   3 Micro-trust bullets: Pengerjaan 2-4 Hari Kerja, Nol Biaya Sewa Server Bulanan, 100% Mobile Optimized.
    *   Interactive phone wireframe card mockup dengan 3 checklist pills.
3.  **Keunggulan / Formula Anti-Boncos (`Features.tsx`):**
    *   Header seksi *"3 Formula Eksekusi Anti-Boncos"*.
    *   3 kartu interaktif:
        *   01. Ringan & Enteng (Dibuka Lancar di HP Pembeli — Netlify Cloud)
        *   02. High Conversion (Alur Order WA Otomatis — Konversi Naik 2.3x)
        *   03. Ramah Budget (Bebas Biaya Server Bulanan — Rp 0 Maintenance)
4.  **Studi Kasus & Portofolio (`Portfolio.tsx`):**
    *   Studi Kasus 1: Sandikala Farm (Katalog Lele Bersih & Pre-Order WhatsApp) di Situbondo. Dilengkapi testimoni Reza Andika dan kartu spesifikasi teknis.
    *   Studi Kasus 2: Sugarlicious Artisanal Bakehouse (Bali). Dilengkapi mockup window browser `sugarlicious.netlify.app`, metrik order (+240% Hampers), dan tombol visit.
5.  **Pilihan Paket Harga (`Pricing.tsx`):**
    *   Starter Netlify (Rp 199.000 / normal Rp 350.000)
    *   Katalog Lengkap WA / Best Seller (Rp 399.000 / normal Rp 650.000) dengan glowing border, tag "🔥 BEST SELLER UMKM (HEMAT Rp 250RB)", dan solid emerald CTA.
    *   Custom Domain (Rp 799.000 / normal Rp 1.200.000)
    *   Banner Transparansi Server Netlify Cloud & Opsi Domain Sendiri.
    *   Banner Jaminan Garansi Bebas Risiko.
6.  **Free Audit & Urgency CTA (`FreeAudit.tsx`):**
    *   Special offer badge: `FREE AUDIT UNTUK 5 BRAND PERTAMA BULAN INI`.
    *   Headline persuasif & penawaran audit senilai Rp 500.000.
    *   Tombol utama klaim free audit via WhatsApp.
    *   Micro-guarantees: 100% Rahasia & Balasan < 15 menit.
7.  **Footer (`Footer.tsx`):**
    *   Branding tagline, link navigasi cepat, copyright 2025, dan link media sosial.
8.  **Floating Mobile WhatsApp Pill (`MobileCtaBar.tsx`):**
    *   Pill bar fixed di bagian bawah layar smartphone (tersembunyi di breakpoint `sm` ke atas).

---

## 4. Pemetaan Ikon Lucide React

Semua ikon Google Material Symbols digantikan dengan padanan Lucide React:
*   `chat` / `chat_bubble` $\rightarrow$ `MessageCircle` / `MessageSquare`
*   `bolt` $\rightarrow$ `Zap`
*   `savings` $\rightarrow$ `PiggyBank`
*   `water_drop` $\rightarrow$ `Droplets`
*   `bakery_dining` $\rightarrow$ `Cake`
*   `cloud_done` $\rightarrow$ `CloudCheck` / `Cloud`
*   `touch_app` $\rightarrow$ `MousePointerClick`
*   `smartphone` $\rightarrow$ `Smartphone`
*   `open_in_new` $\rightarrow$ `ExternalLink`
*   `arrow_forward` $\rightarrow$ `ArrowRight`
*   `check` / `check_circle` $\rightarrow$ `Check` / `CheckCircle2`
*   `verified_user` / `lock` $\rightarrow$ `ShieldCheck` / `Lock`
*   `schedule` $\rightarrow$ `Clock`
*   `dns` $\rightarrow$ `Server`
*   `trending_up` $\rightarrow$ `TrendingUp`
*   `Sun` & `Moon` untuk Theme Toggle

---

## 5. Manajemen Data & Konfigurasi (`src/data/landingData.ts`)

Seluruh teks dan nomor WhatsApp dikelola secara modular.
Fungsi helper `createWhatsAppLink(message: string): string` menyusun URL dengan nomor `6285155165118` secara konsisten.
Dukungan TypeScript yang ketat via `src/types/index.ts` untuk memastikan keandalan komponen.
