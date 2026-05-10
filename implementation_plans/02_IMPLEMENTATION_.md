# 02 — Expert Remodeling Team Section Clone

## Goal

Clone the **"Expert Remodeling Team"** section from the provided screenshot into the existing `clone-construction-business` React/Tailwind project. This is a new full-width marketing section to be added below the existing Hero.

---

## Visual Analysis (Screenshot Breakdown)

### Layout
- Two-column layout on desktop (left: photo collage, right: text + CTA)
- Section background: light warm off-white / cream (`#f5f2ee` or similar)
- Max-width container, horizontally centered

### Left Column — Photo Collage
- **Large image** (tall, left-most, rounded corners): kitchen with white cabinets and pendant lighting
- **Top-right image** (shorter, squarish, rounded corners): bathroom with patterned floor tile and white vanity
- **Bottom-right image** (shorter, squarish, rounded corners): modern outdoor covered patio/room
- Images are arranged in a 2-col sub-grid: col 1 = 1 tall image spanning full height, col 2 = 2 stacked shorter images
- Rounded corners on all images (~`rounded-2xl`)
- Subtle shadow or no shadow

### Right Column — Text Content
- **Heading:** `Expert Remodeling Team` — large, bold, dark (near black), sans-serif (Inter or similar)
- **Paragraph 1:** "Our team at Experts Remodel consists of skilled **home remodeling contractors**, making us a premier **home design expert** in Maryland."
  - Bold inline spans on key phrases
- **Paragraph 2:** "As renowned **home renovation contractors**, we specialize in **luxury home remodels**, providing a touch of elegance to every project."
- **Paragraph 3:** "We offer **complimentary design consultations** for **home remodeling projects** throughout Maryland. Get in touch for the most reliable and cost-effective designers' service: **(877)-965-3854**"
  - Phone number is bold and slightly larger
- **CTA Button:** `Get In Touch` — warm tan/gold color (`bg-gold-500` / `#a8945a` range), white text, rounded, medium padding
- Text color: dark gray/near-black for body, standard weight for non-bold text

### Spacing
- Section has generous vertical padding (~`py-16` or `py-20`)
- Gap between columns: ~`gap-12` or `gap-16`
- Paragraphs spaced with `mb-4` or `space-y-4`

---

## Proposed Changes

### [NEW] `src/components/ExpertTeam.tsx`

New React component replicating the screenshot section:
- TypeScript `.tsx` file
- Uses Tailwind classes + project's existing `gold` color palette
- Two columns: `grid grid-cols-1 lg:grid-cols-2`
- Left col: nested grid `grid grid-cols-2` with 3 Unsplash images
  - Image 1 (kitchen): `https://images.unsplash.com/photo-1556909114-f6e7ad7d3136` (or similar white kitchen)
  - Image 2 (bathroom): `https://images.unsplash.com/photo-1552321554-5fefe8c9ef14` (or similar patterned bathroom)
  - Image 3 (outdoor room): `https://images.unsplash.com/photo-1600607687920-4e2a09cf159d` (or similar modern outdoor patio)
- Right col: heading, 3 paragraphs with `<strong>` inline tags, phone number, CTA button
- `<section>` with `id="expert-team"` for accessibility / anchor linking
- CTA button links to `#quote` (scrolls to the Hero quote form)

### [MODIFY] `src/App.tsx`

Import and render `<ExpertTeam />` below `<Hero />`.

---

## Phase Scope (Phase 1 Only)

> Per the instructions, **only build the `ExpertTeam` section** in this phase. Do not build any other sections.

---

## Implementation Checklist

- [x] Create `src/components/ExpertTeam.tsx`
  - [x] Section wrapper with cream/off-white background, vertical padding
  - [x] Responsive 2-column layout (`grid-cols-1 lg:grid-cols-2`)
  - [x] Left: photo collage (1 tall + 2 stacked) using 3 Unsplash images
  - [x] All images: `rounded-2xl`, `object-cover`, proper `alt` text
  - [x] Right: `<h2>` heading — "Expert Remodeling Team"
  - [x] Right: 3 body paragraphs with `<strong>` for bold inline phrases
  - [x] Right: Bold phone number `(877)-965-3854` displayed inline in paragraph 3
  - [x] Right: `Get In Touch` CTA button (`bg-gold-500` hover `bg-gold-600`)
  - [x] TypeScript types/interfaces where applicable
  - [x] ARIA label on section, `alt` text on all images
  - [x] Mobile-first responsive (single column → two column at `lg`)
- [x] Update `src/App.tsx` to import and render `<ExpertTeam />`
- [x] Verify dev server renders section correctly at `http://localhost:5173`
- [x] Visual QA against screenshot (spacing, typography, image sizes, button color)

---

## Verification Plan

1. `npm run dev` is already running — reload browser at `http://localhost:5173`
2. Visually compare against provided screenshot
3. Check responsive layout at mobile width (< 1024px → single column)
4. Confirm `Get In Touch` button scrolls to `#quote`
5. Run `npm run lint` — no new lint errors

---

## Notes & Constraints

- **No backend / form logic** — `Get In Touch` is a scroll anchor, not a form submit
- **Color palette:** Use `bg-gold-500` / `hover:bg-gold-600` for button (already defined in `tailwind.config.js`)
- **Section background:** Use a warm neutral — `bg-stone-50` or `bg-[#f5f2ee]` (verify visually)
- **Font:** Inherits Inter from global styles; heading uses `font-bold text-3xl` or `text-4xl`
- **No Lorem Ipsum** — all copy taken directly from the screenshot
- **Lucide React only** for any icons — no additional icon libraries
