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

- [x] **Step 1: Initialize project files and install dependencies**
- [x] **Step 2: Configure Tailwind CSS with Dual-Theme Tokens and Custom Fonts**
- [x] **Step 3: Setup `index.html` with Google Fonts**
- [x] **Step 4: Verify build works**

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

- [x] **Step 1: Define TypeScript interfaces in `src/types/index.ts`**
- [x] **Step 2: Create `src/data/landingData.ts` with WhatsApp helper (target phone: 6285155165118)**
- [x] **Step 3: Verify TypeScript compilation**

---

### Task 3: Theme Context & Toggle System

**Files:**
- Create: `src/context/ThemeContext.tsx`
- Create: `src/components/ui/ThemeToggle.tsx`

**Interfaces:**
- Consumes: `lucide-react` (`Sun`, `Moon`)
- Produces: `ThemeProvider`, `useTheme()` hook, and `<ThemeToggle />` component

- [x] **Step 1: Implement `ThemeContext.tsx`**
- [x] **Step 2: Create `ThemeToggle.tsx` button**
- [x] **Step 3: Test theme switching**

---

### Task 4: Layout Components (Navbar, Footer, MobileCtaBar)

**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/MobileCtaBar.tsx`

**Interfaces:**
- Consumes: `NAV_ITEMS`, `createWhatsAppLink`, `ThemeToggle`, `useTheme`
- Produces: Full layout navigation and footer wrappers

- [x] **Step 1: Build `Navbar.tsx` with Theme Toggle and WhatsApp CTA**
- [x] **Step 2: Build `Footer.tsx`**
- [x] **Step 3: Build `MobileCtaBar.tsx`**

---

### Task 5: Hero Section

**Files:**
- Create: `src/components/sections/Hero.tsx`

**Interfaces:**
- Consumes: `createWhatsAppLink`, `TRUST_POINTS`, `lucide-react` (`MessageCircle`, `ArrowDown`, `Check`)
- Produces: `<Hero />` section component

- [x] **Step 1: Implement Hero text and CTAs**
- [x] **Step 2: Implement Micro-Trust badges**
- [x] **Step 3: Implement Showcase Mockup Card**

---

### Task 6: Keunggulan Section (Features)

**Files:**
- Create: `src/components/sections/Features.tsx`

**Interfaces:**
- Consumes: `FEATURES`, `lucide-react` (`Zap`, `MessageSquare`, `PiggyBank`, `CloudCheck`, `TrendingUp`, `ShieldCheck`)
- Produces: `<Features />` section component

- [x] **Step 1: Implement Section Header**
- [x] **Step 2: Render 3 Feature Cards**

---

### Task 7: Portofolio & Studi Kasus Section

**Files:**
- Create: `src/components/sections/Portfolio.tsx`

**Interfaces:**
- Consumes: `CASE_STUDIES`, `createWhatsAppLink`, `lucide-react` (`Droplets`, `Cake`, `ExternalLink`, `ArrowRight`, `Quote`, `Cloud`, `MousePointerClick`, `Smartphone`)
- Produces: `<Portfolio />` section component

- [x] **Step 1: Showcase 1 — Sandikala Farm**
- [x] **Step 2: Showcase 2 — Sugarlicious Artisanal Bakehouse**

---

### Task 8: Pilihan Paket Harga (Pricing)

**Files:**
- Create: `src/components/sections/Pricing.tsx`

**Interfaces:**
- Consumes: `PRICING_PLANS`, `createWhatsAppLink`, `lucide-react` (`CheckCircle2`, `Zap`, `ArrowRight`, `Server`, `ShieldCheck`)
- Produces: `<Pricing />` section component

- [x] **Step 1: Render 3 Pricing Cards**
- [x] **Step 2: Render Server Transparency & Risk-Free Guarantee banners**

---

### Task 9: Free Audit & Urgency Section

**Files:**
- Create: `src/components/sections/FreeAudit.tsx`

**Interfaces:**
- Consumes: `createWhatsAppLink`, `lucide-react` (`Gift`, `MessageCircle`, `Lock`, `Clock`)
- Produces: `<FreeAudit />` section component

- [x] **Step 1: Render Free Audit Container**
- [x] **Step 2: Render CTA & Micro-Guarantees**

---

### Task 10: App Assembly & Integration

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

**Interfaces:**
- Consumes: All layout and section components, `ThemeProvider`
- Produces: Complete working application

- [x] **Step 1: Assemble sections in `App.tsx`**
- [x] **Step 2: Verify smooth scrolling and anchor links**

---

### Task 11: Production Build Verification & Visual Polish

**Files:**
- All files

- [x] **Step 1: Run TypeScript compiler check (`npx tsc --noEmit`)**
- [x] **Step 2: Run production build (`npm run build`)**
- [x] **Step 3: Test Dual-Theme in both modes and verify WhatsApp routing to `6285155165118`**
