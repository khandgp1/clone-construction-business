# CONTEXT.md — Project Onboarding Reference

> **Purpose:** This file is the single source of truth for any AI session working on this project. Read it fully before making any changes.

---

## 1. Project Overview

**Experts Remodel** is a marketing/lead-generation website for a Maryland-based home remodeling company. It is a **clone** of a real construction business site, built to replicate a professional contractor web presence.

- **Business name:** Experts Remodel
- **Service area:** Maryland
- **Phone:** (301) 565-5854
- **Email:** expertsremodel@gmail.com
- **Hours:** Mon–Fri: 8am–5pm | Sat: 9am–2pm | Closed Sun
- **Goal:** Capture leads via a "Get A Quote" form embedded in the hero section, offering a 20% discount hook.

---

## 2. Tech Stack & Architecture

| Layer | Technology |
|---|---|
| Framework | React 18 (with TypeScript) |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS v3 + custom utilities in `src/index.css` |
| Icons | `lucide-react` |
| Backend/DB | `@supabase/supabase-js` (installed but not yet wired up) |
| Fonts | Google Fonts — Inter (sans-serif) + Merriweather (serif) |
| Language | TypeScript (strict-ish via `tsconfig.app.json`) |

### How It Fits Together

```
index.html          ← HTML shell, loads fonts, sets page title
  └── src/main.tsx  ← React entry point, renders <App />
        └── src/App.tsx     ← Root layout (Navbar + Hero)
              ├── src/components/Navbar.tsx
              └── src/components/Hero.tsx
src/index.css       ← Tailwind directives + custom color utilities
tailwind.config.js  ← Custom color palette (gold, olive)
vite.config.ts      ← Vite + React plugin config
```

---

## 3. Key Files & Their Roles

| File | Role |
|---|---|
| `index.html` | HTML shell — sets title ("Experts Remodel \| Maryland's Home Remodeling Experts"), loads Google Fonts (Inter + Merriweather), sets OG/Twitter meta tags |
| `src/main.tsx` | React entry point — mounts `<App />` into `#root` |
| `src/App.tsx` | Root component — wraps `<Navbar />` and `<Hero />` in a white `min-h-screen` div |
| `src/components/Navbar.tsx` | Full navigation header with top info bar, sticky scroll behavior, Services dropdown, mobile hamburger menu |
| `src/components/Hero.tsx` | Full-bleed hero section with background image, headline, trust badges, stats, and a quote capture form |
| `src/index.css` | Tailwind base/components/utilities directives + custom CSS utilities for `bg-dark-800`, `bg-olive-800`, `text-olive-800` |
| `tailwind.config.js` | Extends Tailwind with custom `gold` (50–900) and `olive` (700–900) color scales |
| `vite.config.ts` | Vite config — uses `@vitejs/plugin-react`, excludes `lucide-react` from dep optimization |
| `package.json` | Dependencies and npm scripts |
| `.bolt/prompt` | Bolt.new system prompt — states JSX + Tailwind + React hooks + Lucide React is the default stack; no extra UI packages |

---

## 4. Data Schema

There are **no JSON data files** in this project. All data is hardcoded inline within the component files.

### Services list (used in both Navbar and Hero)
```ts
[
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Basement Finishing',
  'Home Addition' | 'Home Additions',  // slight inconsistency between Navbar/Hero
  'Flooring',
  'Painting',
  // Hero adds: 'Other'
]
```

### Quote Form State (`Hero.tsx`)
```ts
{
  name: string;    // Full Name (required)
  phone: string;   // Phone Number (required)
  email: string;   // Email Address (optional)
  service: string; // Selected service from dropdown
}
```

---

## 5. UI Structure & Components

### `Navbar.tsx`
- **Top info bar** (desktop only, `hidden md:block`): dark `#1f1f1f` background, shows phone, email, hours
- **Main nav bar**: sticky on scroll (`fixed` when `window.scrollY > 10`), white background with shadow
  - Logo: two-line text badge (`bg-olive-800` + gold accent line) + brand name
  - Desktop links (≥ `lg`): Home, About, Services (hover dropdown), Projects, Gallery, Blog, Contact Us
  - Services dropdown: hover-triggered, shows 6 services in a white card
  - CTA area: phone icon + "Get A Quote" button (`bg-gold-500`)
  - Mobile (< `lg`): hamburger menu toggle, full vertical nav drawer
- **State:** `isMenuOpen`, `isScrolled`, `servicesOpen`

### `Hero.tsx`
- **Background:** Unsplash house image (`photo-1570129477492-45c003edd2be`) with a `from-black/75` gradient overlay
- **Left column (text):**
  - 5-star rating badge
  - `<h1>` with "Maryland's Home Remodeling **Experts**" (gold accent on "Experts")
  - Value proposition paragraph
  - 4-item checklist (Licensed & Insured, Free Consultations, No-Surprise Pricing, Serving Maryland)
  - Two CTAs: "Get Free Consultation" (gold button, anchor to `#quote`) + "Call Us" (outlined border button)
  - Trust stats: 500+ Projects | 15+ Years Experience | 100% Satisfaction
- **Right column (form, `id="quote"`):**
  - `bg-olive-800/90` card with glassmorphism-lite backdrop-blur
  - "20% Discount" headline hook
  - Form fields: Full Name, Phone, Email, Service dropdown
  - Submit button: "Book My Free Consultation"
  - Bottom phone CTA: links to `tel:3015655854` (note: display shows `1-833-221-0133` — inconsistency, likely needs fixing)
- **State:** `formData` (controlled form inputs), `handleChange`, `handleSubmit` (no-op currently)

---

## 6. Custom Color Palette

Defined in `tailwind.config.js`:

| Scale | Key Values |
|---|---|
| `gold-400` | `#e5a820` — primary accent, star icons, form focus borders |
| `gold-500` | `#c8860d` — primary CTA button background |
| `gold-600` | `#a86a08` — CTA hover state |
| `olive-700` | `#4a4a2a` |
| `olive-800` | `#3a3a1f` — form card background, logo badge |
| `olive-900` | `#2d2d18` |

Custom utilities in `src/index.css`:
- `.bg-dark-800` → `#1f1f1f` (top info bar)
- `.bg-olive-800` / `.text-olive-800` → `#3a3a1f` (logo badge, form card)

---

## 7. Conventions & Patterns

- **TypeScript** — all components are `.tsx`. Props typed inline (e.g., `{ href: string; children: React.ReactNode }`).
- **Tailwind-first** — all styling via Tailwind classes directly on JSX elements. Custom colors handled via `tailwind.config.js` extensions.
- **No router** — this is a single-page app; nav links (`href="/about"`, etc.) are static hrefs, not React Router routes. Pages beyond home do not exist yet.
- **No state management library** — plain `useState` / `useEffect`.
- **Inline data** — services arrays are declared inline inside components (not imported from a shared file).
- **Lucide React** for all icons — `Phone`, `Mail`, `Clock`, `Menu`, `X`, `ChevronDown`, `Star`, `CheckCircle`.
- **Responsive breakpoints:** `md` (768px), `lg` (1024px), `xl` (1280px) — standard Tailwind breakpoints.
- **Font classes:** `.font-serif` overrides to Merriweather (used on `<h1>` in Hero).

---

## 8. Current State & Known Issues

### What's Built
- ✅ Full `Navbar` with top bar, sticky scroll, hover dropdown, mobile menu
- ✅ Full `Hero` section with background, headline, checklist, trust stats, quote form
- ✅ Custom Tailwind color palette (gold + olive)
- ✅ Google Fonts loaded (Inter + Merriweather)
- ✅ Responsive layout (mobile + desktop)

### Not Yet Built
- ❌ About page
- ❌ Services pages (individual service detail pages)
- ❌ Projects / Gallery pages
- ❌ Blog page
- ❌ Contact page
- ❌ Supabase integration (package installed, nothing wired up)
- ❌ Form submission handling (currently a no-op `e.preventDefault()`)

### Known Issues / Inconsistencies
- **Phone number mismatch in Hero:** The `tel:` href uses `3015655854` but the visible display text in the form's bottom CTA shows `1-833-221-0133`. These should be reconciled.
- **Services list inconsistency:** Navbar says "Home Additions" (plural), Hero says "Home Addition" (singular).
- **Nav links are static hrefs** — clicking About, Projects, etc. will 404; pages not yet created.
- **No OG/Twitter description meta tag** — `index.html` has image tags but no `og:description` or `og:title`.

---

## 9. How to Run

```bash
# Install dependencies (first time only)
npm install

# Start local dev server (default: http://localhost:5173)
npm run dev

# Type-check without building
npm run typecheck

# Lint
npm run lint

# Build for production
npm run build
```

No environment variables are required for the current state (Supabase is not yet configured).

---

## 10. Adding New Pages / Components

When adding new pages/sections, follow these rules:
1. Create new components in `src/components/` as `.tsx` files.
2. Use **Tailwind classes** only — no inline `style` attributes unless dynamic values require it.
3. Extend the **gold/olive color palette** for brand consistency — avoid raw hex or generic Tailwind colors like `bg-yellow-500`.
4. Use **Lucide React** icons — do not install other icon libraries.
5. If adding pages, install and configure **React Router** (`react-router-dom`) and update `App.tsx`.
6. If wiring up the form, configure **Supabase** in a `src/lib/supabase.ts` file and import it in `Hero.tsx`.
