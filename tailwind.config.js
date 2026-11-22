/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "canvas": "var(--color-canvas)",
        "canvas-alt": "var(--color-canvas-alt)",
        "canvas-card": "var(--color-canvas-card)",
        "border-neutral": "var(--color-border-neutral)",
        "border-subtle": "var(--color-border-subtle)",
        "brand-green": "var(--color-brand-green)",
        "brand-green-hover": "var(--color-brand-green-hover)",
        "brand-green-subtle": "var(--color-brand-green-subtle)",
        "terracotta": "var(--color-terracotta)",
        "terracotta-dark": "var(--color-terracotta-dark)",
        "terracotta-light": "var(--color-terracotta-light)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'glow-green': '0 0 35px -8px rgba(16, 185, 129, 0.25)',
        'glow-green-sm': '0 0 20px -4px rgba(16, 185, 129, 0.35)',
      }
    },
  },
  plugins: [],
}
