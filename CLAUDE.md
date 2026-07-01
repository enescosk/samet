# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check with tsc, then build to dist/
npm run lint      # Run ESLint
npm run preview   # Serve the production build locally
```

## Architecture

This is a single-page marketing site for **PCD (Prestige Creative Displays)** — a Turkish company selling magnetic levitation display stands. The site is in Turkish.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS v3, Framer Motion, Lucide React.

**Data layer:** All copy, product info, and structured content lives in [`src/data/content.ts`](src/data/content.ts). This is the single source of truth — edit here to change text, product specs, FAQ answers, sector cards, etc. Components import named exports (`brand`, `benefits`, `products`, `features`, `steps`, `sectors`, `faqs`, `projects`, `taglines`).

**Component structure:**
- `src/App.tsx` — root; renders the full page as a vertical stack of section components with a Framer Motion scroll-progress bar at the top
- `src/components/sections/` — one file per page section (Hero, Problem, HowItWorks, Features, Pricing, Showcase, Testimonials, FAQ, CTA)
- `src/components/layout/` — Navbar and Footer
- `src/components/ui/` — reusable primitives: `AnimatedSection` (scroll-triggered fade-in via `useInView`), `Button` (primary/secondary variants), `PlaceholderImage`

**Design system:**
- Custom Tailwind colors: `brand-*` (gold/amber scale) and `ink-*` (near-black backgrounds)
- Custom Tailwind animations: `float`, `float-slow`, `spin-slow`, `pulse-slow`
- Utility classes defined in `src/index.css`: `.glass`, `.glass-light` (frosted glass cards), `.text-gradient`, `.text-gold`, `.glow-gold`, `.ring-gold`, `.spotlight`, `.levitation-shadow`
- Fonts: Inter (body) and Playfair Display (headings via `.font-display`)

**Standalone HTML files:** `levitation.html` and `levitation-widget.html` are self-contained pages (no build step) — likely used for embedding or demos.

**No routing, no state management, no backend, no tests.** CTAs link to `#contact` and `#models` anchors within the page.

**TypeScript strictness:** `tsconfig.app.json` enforces `noUnusedLocals` and `noUnusedParameters` — unused imports/variables will fail `npm run build`.
