# Etalase.in Dual-Theme Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready, high-converting React + Vite + Tailwind CSS + TypeScript landing page for Etalase.in featuring Dual-Theme (Light Warm Minimalist & Dark Precision Growth), Lucide React icons, and automated WhatsApp routing.

**Architecture:** A modular React single-page architecture with centralized content data (`src/data/landingData.ts`), type safety (`src/types/index.ts`), context-based theme switching (`ThemeContext`), and reusable section components styled via Tailwind dark-mode classes.

**Tech Stack:** React 18/19, Vite, TypeScript, Tailwind CSS, Lucide React, Space Grotesk / Plus Jakarta Sans / JetBrains Mono fonts.

**Spec:** [docs/superpowers/specs/2026-11-22-etalase-dual-theme-design.md](file:///c:/Users/ASUS/Downloads/Website/Etalase.in/docs/superpowers/specs/2026-11-22-etalase-dual-theme-design.md)

## Global Constraints

- WhatsApp destination: `+62 851-5516-5118` (link generation format: `https://wa.me/6285155165118?text=...`)
- Dual-theme support: Light Mode default (`#F7F5F0`, `#8C4F3B`, `#0F9F6E`), Dark Mode (`#090D12`, `#10B981`, `#34D399`, `#F8FAFC`)
- Icons strictly from `lucide-react`
- Typography: Display in `Space Grotesk`, Body in `Plus Jakarta Sans`, Metrics/Pills in `JetBrains Mono`
- Mobile responsiveness: Tested across mobile (320px+), tablet (768px), and desktop (1200px+) with sticky mobile bottom CTA

---

### Task 1: Scaffolding Vite + React + TypeScript + Tailwind CSS

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`, `index.html`, `src/index.css`

**Interfaces:**
- Consumes: None
- Produces: Working development build setup with Tailwind CSS and font links loaded in `index.html`

- [ ] **Step 1: Initialize project files and install dependencies**
Run Vite React TS scaffolding or create package configuration with:
`react`, `react-dom`, `lucide-react`, and devDependencies: `vite`, `@vitejs/plugin-react`, `tailwindcss`, `postcss`, `autoprefixer`, `typescript`, `@types/react`, `@types/react-dom`.

- [ ] **Step 2: Configure Tailwind CSS with Dual-Theme Tokens and Custom Fonts**
Set `darkMode: 'class'`, and extend color palette:
- `canvas`: light `#F7F5F0`, dark `#090D12`
- `canvas-alt`: light `#EFECE4`, dark `#161F2B`
- `canvas-card`: light `#FFFFFF`, dark `#0F151D`
- `border-neutral`: light `#E8E4DA`, dark `rgba(255, 255, 255, 0.08)`
- `brand-green`: light `#0F9F6E`, dark `#10B981`
- `terracotta`: light `#8C4F3B`, dark `#34D399`

- [ ] **Step 3: Setup `index.html` with Google Fonts**
Embed fonts: `Space Grotesk`, `Plus Jakarta Sans`, and `JetBrains Mono`.

- [ ] **Step 4: Verify build works**
Run `npm run build` or Vite check to verify zero compile errors.

---

### Task 2: Data Models & Centralized Content Configuration

**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/landingData.ts`

**Interfaces:**
- Consumes: None
- Produces: 
  - Interfaces: `PricingPlan`, `CaseStudy`, `FeatureItem`, `NavItem`
  - Helpers: `createWhatsAppLink(message: string): string`
  - Constants: `NAV_ITEMS`, `TRUST_POINTS`, `FEATURES`, `CASE_STUDIES`, `PRICING_PLANS`, `AUDIT_INFO`

- [ ] **Step 1: Define TypeScript interfaces in `src/types/index.ts`**
Define strict contracts for navigation links, testimonials, pricing plans, and case studies.

- [ ] **Step 2: Create `src/data/landingData.ts` with WhatsApp helper**
Add `createWhatsAppLink` with target phone `6285155165118` and encode URL parameters properly. Populate content from `code.html`.

- [ ] **Step 3: Verify TypeScript compilation**
Run `npx tsc --noEmit` to confirm no type errors.

---

### Task 3: Theme Context & Toggle System

**Files:**
- Create: `src/context/ThemeContext.tsx`
- Create: `src/components/ui/ThemeToggle.tsx`

**Interfaces:**
- Consumes: `lucide-react` (`Sun`, `Moon`)
- Produces: `ThemeProvider`, `useTheme()` hook, and `<ThemeToggle />` component

- [ ] **Step 1: Implement `ThemeContext.tsx`**
Manage `theme` state (`'light' | 'dark'`), load from `localStorage` (default `'light'`), toggle `dark` class on `document.documentElement`, and persist changes.

- [ ] **Step 2: Create `ThemeToggle.tsx` button**
Render accessible button with smooth transition between `Sun` and `Moon` icons.

- [ ] **Step 3: Test theme switching**
Verify that toggling applies/removes `dark` class from document root and updates local storage.

---

### Task 4: Layout Components (Navbar, Footer, MobileCtaBar)

**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/MobileCtaBar.tsx`

**Interfaces:**
- Consumes: `NAV_ITEMS`, `createWhatsAppLink`, `ThemeToggle`, `useTheme`
- Produces: Full layout navigation and footer wrappers

- [ ] **Step 1: Build `Navbar.tsx`**
Floating pill design with backdrop blur, brand logo with animated green dot, anchor navigation links, theme toggle, and WhatsApp CTA button.

- [ ] **Step 2: Build `Footer.tsx`**
Footer with company description, anchor links, copyright 2025, and social media handles.

- [ ] **Step 3: Build `MobileCtaBar.tsx`**
Fixed bottom floating WhatsApp button for mobile screens (`sm:hidden`).

---

### Task 5: Hero Section

**Files:**
- Create: `src/components/sections/Hero.tsx`

**Interfaces:**
- Consumes: `createWhatsAppLink`, `TRUST_POINTS`, `lucide-react` (`MessageCircle`, `ArrowDown`, `Check`)
- Produces: `<Hero />` section component

- [ ] **Step 1: Implement Hero text and CTAs**
Terracotta pill badge, display headline with terracotta highlight, subheadline, primary WhatsApp CTA, and secondary portfolio scroll button.

- [ ] **Step 2: Implement Micro-Trust badges**
Row with bullets: 2-4 Hari Kerja, Rp 0 Biaya Server, 100% Mobile Optimized.

- [ ] **Step 3: Implement Showcase Mockup Card**
Phone wireframe preview with 3 benefit pill cards (1 Layar HP, Otomatis WA, Bebas Biaya Bulanan).

---

### Task 6: Keunggulan Section (Features)

**Files:**
- Create: `src/components/sections/Features.tsx`

**Interfaces:**
- Consumes: `FEATURES`, `lucide-react` (`Zap`, `MessageSquare`, `PiggyBank`, `Cloud`, `TrendingUp`, `ShieldCheck`)
- Produces: `<Features />` section component

- [ ] **Step 1: Implement Section Header**
Eyebrow tag *"Kenapa Klien Memilih Etalase.in"*, title *"3 Formula Eksekusi Anti-Boncos"*, and descriptive text.

- [ ] **Step 2: Render 3 Feature Cards**
1. Ringan & Enteng (Netlify cloud tag)
2. High Conversion (Konversi naik 2.3x)
3. Ramah Budget (Rp 0 maintenance)
With hover lift animations and dark-mode surface styling.

---

### Task 7: Portofolio & Studi Kasus Section

**Files:**
- Create: `src/components/sections/Portfolio.tsx`

**Interfaces:**
- Consumes: `CASE_STUDIES`, `createWhatsAppLink`, `lucide-react` (`Droplets`, `Cake`, `ExternalLink`, `ArrowRight`, `Quote`, `Cloud`, `MousePointerClick`, `Smartphone`)
- Produces: `<Portfolio />` section component

- [ ] **Step 1: Showcase 1 — Sandikala Farm**
Category badge, title, detailed copy, quote box (Reza Andika), WA CTA button, and 3 feature spec cards.

- [ ] **Step 2: Showcase 2 — Sugarlicious Artisanal Bakehouse**
Browser window frame with URL bar `sugarlicious.netlify.app`, image showcase, metrics cards (+240% Hampers, Enteng & Tanpa Lemot), and external preview links.

---

### Task 8: Pilihan Paket Harga (Pricing)

**Files:**
- Create: `src/components/sections/Pricing.tsx`

**Interfaces:**
- Consumes: `PRICING_PLANS`, `createWhatsAppLink`, `lucide-react` (`CheckCircle2`, `Zap`, `ArrowRight`, `Server`, `ShieldCheck`)
- Produces: `<Pricing />` section component

- [ ] **Step 1: Render 3 Pricing Cards**
- Starter Netlify (Rp 199.000)
- Best Seller UMKM (Rp 399.000) with highlight badge, glowing emerald border, and primary CTA
- Custom Domain (Rp 799.000)

- [ ] **Step 2: Render Server Transparency & Risk-Free Guarantee banners**
Server explanation card (Netlify vs VPS/cPanel) and "Jaminan Bebas Risiko" callout.

---

### Task 9: Free Audit & Urgency Section

**Files:**
- Create: `src/components/sections/FreeAudit.tsx`

**Interfaces:**
- Consumes: `createWhatsAppLink`, `lucide-react` (`Gift`, `MessageCircle`, `Lock`, `Clock`)
- Produces: `<FreeAudit />` section component

- [ ] **Step 1: Render Free Audit Container**
Card with subtle gradient, "FREE AUDIT UNTUK 5 BRAND PERTAMA" pill, headline, and value proposition Rp 500.000.

- [ ] **Step 2: Render CTA & Micro-Guarantees**
Direct WhatsApp button with pre-filled text and trust points (100% Rahasia & Balasan < 15 Menit).

---

### Task 10: App Assembly & Integration

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

**Interfaces:**
- Consumes: All layout and section components, `ThemeProvider`
- Produces: Complete working application

- [ ] **Step 1: Assemble sections in `App.tsx`**
Wrap with `ThemeProvider`, embed `Navbar`, `Hero`, `Features`, `Portfolio`, `Pricing`, `FreeAudit`, `Footer`, and `MobileCtaBar`.

- [ ] **Step 2: Verify smooth scrolling and anchor links**
Ensure `#keunggulan`, `#portofolio`, `#paket`, `#audit` smoothly scroll to respective sections.

---

### Task 11: Production Build Verification & Visual Polish

**Files:**
- All files

- [ ] **Step 1: Run TypeScript compiler check**
`npx tsc --noEmit`

- [ ] **Step 2: Run production build**
`npm run build`

- [ ] **Step 3: Test Dual-Theme in both modes**
Verify light mode matches `screen.png` and dark mode matches `DESIGN.md`. Verify all WhatsApp links target `6285155165118`.
