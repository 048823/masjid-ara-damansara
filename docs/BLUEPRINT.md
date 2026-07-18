# Masjid Ara Damansara — MVP One-Page Website · Creative Blueprint (Source of Truth)

Approved by the Principal Creative Orchestrator. Execution agents follow this document exactly.
Any deviation requires orchestrator approval. Frozen decisions are marked [LOCKED].

---

## 1. Design Read

Reading this as: a one-page cultural/community landing for a modern architectural landmark mosque,
for two audiences (local congregation and donors; couples seeking an akad nikah venue), with a
serene premium-architectural language (white, lattice, light, turquoise), leaning toward
Tailwind v4 + GSAP scroll-scrubbed cinematic hero + Motion reveals.

Dials [LOCKED]: `DESIGN_VARIANCE: 7` · `MOTION_INTENSITY: 7` · `VISUAL_DENSITY: 3`

## 2. Brief Interpretation

- Business purpose: give Masjid Ara Damansara a digital presence worthy of its architecture.
- Primary conversion: **Infaq (donation)**. Secondary conversion: **Nikah venue enquiry (WhatsApp)**.
- Language: **Bahasa Melayu primary, English toggle** (`ms` default; `<html lang>` switches).
- Signature moment: scroll-driven "drone flyover" hero, outside → inside → wedding.
- Mobile-first, fast, simple to build. One page only.

### Assumptions (recorded, proceed without blocking)
1. Location copy stays at "Ara Damansara, Petaling Jaya, Selangor" (exact address/JAKIM zone marked as placeholder to verify).
2. WhatsApp number, bank account, and QR are placeholders, clearly marked in code comments (not visibly fake).
3. Prayer times shown are sample data, visibly labelled, to be wired to JAKIM e-Solat API in v2.
4. No claimed capacity numbers, award names, architect names, or dates — nothing we cannot verify.
5. Stock-watermarked reference images acceptable for MVP concept; flagged for licensed/AI replacement.

## 3. Inspiration Analysis (from the 11 supplied references)

| Reference | Learn | Do NOT copy |
|---|---|---|
| Aerial drone shot (hi-res) | The floating pyramidal roof reads as a white island in green; use as hero scene 1 | Cluttered construction foreground |
| Roof-corner portrait | The knife-edge cantilever = the brand's geometry; echo in sharp layout lines | Adobe watermark edge (crop with object-position) |
| Lattice façade / courtyard | White kerawang (perforated screen) = signature texture; echo as subtle SVG pattern | Literal heavy pattern overlays everywhere |
| Entrance signage (Khat-style wordmark) | The mosque already has a lettermark personality; nod with elegant type, don't imitate khat | Fake Arabic-style display fonts (kitsch) |
| Interior (TikTok frame) | Turquoise carpet = the accent colour, straight from the building | The frame itself (platform overlays) |
| Wedding corridor + akad + garden shots | Light, tulle, florals, gold chairs = emotional payoff of the story | Gold as a second UI accent (palette stays single-accent) |

Emotional effect to reproduce: **sunlight through white lattice; calm, generous, airy.**

## 4. MVP Scope

One page, 8 sections, two conversion paths, bilingual. Nothing else.
Excluded from MVP: CMS, live prayer-time API, online payment gateway, photo lightbox, multi-page routing, blog.

## 5. Creative Direction

- **Brand personality:** serene, dignified, open, contemporary. A mosque that welcomes.
- **Mood:** morning light through white lattice. Air. Stillness with warmth.
- **Tone of voice:** warm and plain-spoken Bahasa Melayu (hormat tanpa formal berlebihan); English mirror is graceful, not literal.
- **Visual style:** architectural editorial. Large photography, generous whitespace, hairline restraint, one turquoise accent drawn from the prayer-hall carpet.
- **Design inspiration:** the building itself; Apple-adjacent premium calm; editorial photography sites. No AI-purple, no gradient slop, no kitsch Islamic clip-art (no cheesy crescent/lantern icon sets).

## 6. Design System [LOCKED]

### Colour (single accent, locked page-wide)
| Token | Light | Dark | Use |
|---|---|---|---|
| `kapur` (base) | `#F6F5F1` | `#0F1514` | page background |
| `surface` | `#FFFFFF` | `#161E1C` | cards, nav scrim |
| `arang` (ink) | `#17221F` | `#ECEFEC` | headings/body |
| `arang-2` (muted) | `#4A5553` | `#A3ADAA` | secondary text |
| `firus` (accent) | `#0F857E` | `#3AB5AC` | CTAs, links, highlights |
| `firus-deep` | `#0A625D` | `#5ECFC6` | hover states |
| `firus-wash` | `#E7F2F0` | `#132320` | tinted bands |

Theme: light/dark **auto** via `prefers-color-scheme` (Tailwind media strategy). One theme per render; no section inversion.
No pure #000/#fff. Shadows tinted toward `arang` at low opacity.

### Typography
- **Family:** `Outfit Variable` (self-hosted via `@fontsource-variable/outfit`). One family site-wide; geometric warmth matches the architecture. Numerals `tabular-nums` in prayer times.
- Display: `font-medium tracking-tight`, hero `text-4xl md:text-6xl leading-[1.05]`.
- Body: `text-base leading-relaxed max-w-[65ch] text-arang-2`.
- No serif anywhere. No italic-descender risks planned. Emphasis = weight, never mixed family.

### Shape & space [LOCKED]
- Radius rule: **interactive elements 10px; containers/images 18px.** Applied everywhere, no exceptions.
- Section rhythm: `py-24 md:py-32` (density 3, airy). Max width `max-w-7xl mx-auto px-4 md:px-8`.
- Buttons: solid `firus` + white text (AA ✓); secondary = 1px `arang/15` border, ink text. `:active` scale-[0.98]. Labels ≤3 words, never wrap.

### Iconography
`@phosphor-icons/react`, weight="light", one family only. No hand-rolled SVGs except the kerawang background pattern (a single geometric tile, defined once — it is architecture, not decoration).

### Motion
- Hero: GSAP ScrollTrigger pinned scrub (Section 8). Everything else: Motion `whileInView` reveals (opacity/translate only), spring or `[0.16,1,0.3,1]`.
- All motion behind `useReducedMotion` / `prefers-reduced-motion`. Transforms + opacity only.
- Motivation ledger: hero scrub = storytelling; section reveals = hierarchy; CTA press = feedback. Nothing else animates.

## 7. Sitemap & Section Order [LOCKED]

Single route `/`. Nav anchors: Tentang · Majlis Nikah · Waktu Solat · Program · Hubungi + CTA `Salurkan Infaq` + language toggle `BM/EN`.

1. **Hero** — pinned flyover (scenes: aerial → approach → lattice courtyard → wedding corridor)
2. **Seni Bina (About)** — split: manifesto text + 3-photo strip
3. **Majlis Nikah (Weddings)** — gallery (portrait trio) + copy + WhatsApp CTA
4. **Waktu Solat** — 6 time tiles (sample data, labelled), date header
5. **Program** — asymmetric bento (1 tall + 2 stacked; ≥1 image cell)
6. **Infaq** — full-width `firus-wash` band, QR/bank placeholder, primary CTA
7. **Soalan Lazim (FAQ)** — 4-item accordion
8. **Kunjungi / Footer** — address, maps link, contact, credits

Eyebrow budget: max 3 total (hero, Nikah, Infaq). Layout families all distinct. Zero em-dashes anywhere.

## 8. The Hero — "Terbang Masuk" (Fly In) [LOCKED spec]

Signature moment. Pinned full-viewport (`min-h-[100dvh]`, never `h-screen`) section, `~300vh` scroll length, GSAP ScrollTrigger `start: "top top"`, `pin: true`, `scrub: 1`.

- 4 stacked full-bleed scenes crossfade + slow scale (1.08 → 1.0) as scroll progresses, simulating the drone flight: `aerial-day` → `approach` → `courtyard-lattice` → `wedding-corridor`.
- Idle state (before scroll): scene 1 runs a very slow Ken Burns loop (scale 1.0→1.06, 20s alternate) — this is the requested "nice loop".
- Text: eyebrow `MASJID ARA DAMANSARA`, headline "Rumah ibadah. Rumah komuniti." (EN: "A house of worship. A home for its community."), sub ≤20 words, CTAs `Salurkan Infaq` (primary) + `Tempah Majlis Nikah` (ghost w/ scrim-safe border). Hero copy fades out over scenes 2-4; each scene shows one short caption (bottom-left, small):
  1. "Ara Damansara, Selangor"
  2. "Bumbung terapung, tanpa dinding" / "A floating roof, no walls"
  3. "Kerawang putih, cahaya semula jadi" / "White lattice, natural light"
  4. "Tempat kisah bermula" / "Where stories begin"
- Scrim: bottom gradient `arang/55 → transparent` for AA text contrast on photos.
- Reduced motion / mobile fallback: no pin; static scene 1 with text; scenes 2-4 render as a simple swipeable/stacked sequence. No scroll-cue label of any kind.

## 9. Copy Deck (full, bilingual) [LOCKED — implement verbatim]

See `docs/COPY.md`. `ms` is default. All UI strings come from `src/i18n/copy.ts`; no hardcoded strings in components.

## 10. Technical Plan [LOCKED]

- Stack: **Vite + React 18 + TypeScript + Tailwind v4 (`@tailwindcss/vite`) + gsap + motion + @phosphor-icons/react + @fontsource-variable/outfit**.
- Tokens in `src/index.css` via `@theme` variables (names above).
- i18n: `src/i18n/copy.ts` (typed dictionary `ms`/`en`) + `src/i18n/LanguageContext.tsx` (`useLang()` → `{ lang, setLang, t }`), updates `document.documentElement.lang`.
- Images in `public/images/` (renamed, see manifest below). `loading="lazy"` below the fold; hero scene 1 eager.
- Component architecture:
  - `src/App.tsx` composes: `Nav`, `FlyoverHero`, `Architecture`, `Nikah`, `PrayerTimes`, `Programs`, `Infaq`, `Faq`, `Footer` inside `LanguageProvider`. **App.tsx frozen after scaffold.**
  - `src/components/hero/**` — owned by WP-B only.
  - `src/components/Nav.tsx`, `src/components/sections/**` — owned by WP-C only.
- A11y: semantic landmarks, skip-link, focus-visible rings (`firus`), alt text from copy deck, accordion with `aria-expanded`, WCAG AA everywhere.
- SEO: title/description/OG tags (BM), `lang` switching.
- z-index scale documented in `src/lib/z.ts`: nav 40, hero-overlay 10, modal 50. Nothing else.

### Image manifest (rename on copy from `../Masjid Ara Damansara/`)
| Source | Dest `public/images/` | Role |
|---|---|---|
| `51_050218153346.jpg` | `hero-aerial.jpg` | Hero scene 1 (hi-res) |
| `images-1.jpeg` | `hero-approach.jpg` | Hero scene 2 |
| `ara-damansara-mosque-…160798176.jpg.webp` | `hero-courtyard.webp` | Hero scene 3 (watermarked; MVP-ok) |
| `images-5.jpeg` | `hero-wedding.jpg` | Hero scene 4 + Nikah gallery |
| `1000_F_92764381_….jpg` | `arch-roof.jpg` | About strip (crop left edge, `object-position`) |
| `IMG_0296aa.JPG` | `arch-sign.jpg` | About strip |
| `images-2.jpeg` | `nikah-arch.jpg` | Nikah gallery (portrait) |
| `images-3.jpeg` | `nikah-garden.jpg` | Nikah gallery (portrait) |
| `images-4.jpeg` | `nikah-akad.jpg` | Nikah gallery (landscape) |
| `tiktok_thumbnail…` | (not shipped) | Colour reference only |
| `images.jpeg` | (not shipped) | Duplicate/overlay text |

## 11. Conversion Strategy

- One primary intent per CTA label, page-wide: `Salurkan Infaq` (nav + hero + Infaq band, identical label) and `Tempah Majlis Nikah` (hero secondary + Nikah section, identical label → `wa.me` placeholder link).
- Infaq band sits after emotional peak (weddings) and utility (prayer times/programs): give after being moved and served.
- FAQ removes booking/visiting friction just before footer contact.

## 12. AI Asset List (v2 upgrades; concise prompts for Higgsfield/Midjourney)

1. **Hero flyover video loop (replaces stills):** "Cinematic drone shot descending toward a modern white Malaysian mosque with a floating pyramidal roof and white geometric lattice walls, gliding through the entrance canopy into a bright corridor with white floral wedding arch, soft morning light, seamless loop, photoreal, 24fps" (image-to-video from `hero-aerial.jpg`).
2. **Interior prayer hall still:** "Interior of a modern white mosque, vast hall with vivid turquoise patterned carpet, white perforated lattice walls glowing with daylight, minimal, serene, wide angle, photoreal"
3. **Lattice texture tile:** "Seamless white perforated geometric Islamic lattice screen pattern, square motif, subtle shadow depth, flat front view, tileable"
4. **Golden-hour exterior:** "Modern white mosque with floating pyramid roof at golden hour, warm light through lattice facade, reflection pool foreground, photoreal"
5. **Upscales:** run Higgsfield `upscale_image` on `hero-approach`, `hero-wedding`, all `nikah-*` (small thumbnails today); replace both watermarked stock frames with licensed or generated equivalents before public launch.

## 13. Review Standard

Every deliverable scored 1-10 on Creative, UX, Visual Polish, Content, Technical, Mobile, Brand, Conversion. <8 = revision. Hero/nav/mobile/conversion target ≥9. Full Pre-Flight Check (taste-skill §14) must pass before approval.
