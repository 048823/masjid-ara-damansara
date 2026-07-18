# Masjid Ara Damansara — Website

One-page bilingual (Bahasa Melayu default / English toggle) landing site for
Masjid Ara Damansara, Petaling Jaya, Selangor. Vite + React 18 + TypeScript +
Tailwind v4. See `docs/BLUEPRINT.md` and `docs/COPY.md` for the creative and
copy source of truth — both are frozen; do not deviate without orchestrator
approval.

## Running the project

```bash
npm install      # install dependencies
npm run dev       # start the dev server (Vite, default http://localhost:5173)
npm run build     # type-check (tsc -b) then production build to dist/
npm run preview   # preview the production build locally
```

## Image licensing caveat

Nine reference photos were copied into `public/images/` from raw stock/phone
sources for MVP concept purposes (see the manifest in `docs/BLUEPRINT.md`
§10). Two of them are stock-watermarked reference images and must be
replaced before public launch:

- `public/images/hero-courtyard.webp` — watermarked stock photo (Alamy-style
  watermark visible). Used for hero scene 3.
- `public/images/arch-roof.jpg` — watermarked stock photo (Adobe Stock
  watermark on the left edge; currently cropped with `object-position` in
  layout, not removed from the file).

All nine images are placeholders acceptable for MVP concept per
`docs/BLUEPRINT.md` §2 assumption 5. Plan is licensed photography or the AI
asset list in `docs/BLUEPRINT.md` §12 (Higgsfield/Midjourney prompts
provided) ahead of public launch.

## TODO before public launch

- **JAKIM e-Solat API wiring** — `src/i18n/copy.ts` `prayer.times` currently
  ships sample/static times (visibly labelled as a sample display via
  `prayer.note`). Wire to the official JAKIM e-Solat API for the Petaling
  zone in v2 (see `docs/BLUEPRINT.md` §2 assumption 3, §4 MVP exclusions).
- **WhatsApp number** — the Nikah CTA and footer WhatsApp link need a real
  `wa.me/<number>` destination. Currently unimplemented in the stub
  components; do not ship a fake number.
- **Bank account / QR code** — `infaq.bank` copy is a placeholder
  (`// TODO verify` in `src/i18n/copy.ts`). Real bank account details and a
  QR code image must be added to the Infaq section before launch.
- **Address / JAKIM zone verification** — `visit.address` in
  `src/i18n/copy.ts` is marked `// TODO verify`; confirm the exact postal
  address and JAKIM prayer-zone code.
- **Google Maps link** — `visit.maps` currently has no destination URL wired
  up in the Footer stub.

## Project structure notes

- `src/App.tsx` is frozen after scaffold — composition order and section
  ownership boundaries are locked (see `docs/BLUEPRINT.md` §10).
- `src/components/hero/**` is owned by the hero work package.
- `src/components/Nav.tsx` and `src/components/sections/**` are owned by the
  sections work package.
- All UI copy lives in `src/i18n/copy.ts` (typed `ms`/`en` dictionary); no
  hardcoded strings in components.
