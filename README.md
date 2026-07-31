# Nakkshatra Clinic — website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Updating clinic information

Everything editable lives in **[data/clinic.ts](data/clinic.ts)** — no
component code needs to change:

- `clinic.doctorName`, `doctorCredentials` — leave blank until confirmed.
- `clinic.phone` / `phoneDisplay` / `whatsapp` / `email` — once filled in,
  the header, mobile action bar, hero, diagnostics, location and contact
  sections automatically enable their `tel:` / `wa.me` links. Until then
  those buttons point at the on-page contact form instead of a dead link.
- `clinic.address`, `mapsUrl`, `mapsEmbedUrl`, `geo` — powers the Location
  section and the `MedicalClinic` structured data in
  [components/StructuredData.tsx](components/StructuredData.tsx).
- `clinic.timings` — an array of `{ days, hours }`; shown in the contact
  section once populated.
- `services`, `diagnosticTests` — edit copy/lists directly.
- `galleryImages` — one entry per real photo. Add the file to
  `public/images/clinic/`, keep the `src` path matching, and flip
  `hasImage: true`. Until then, [components/ClinicPhoto.tsx](components/ClinicPhoto.tsx)
  renders a designed placeholder (not a broken image) in the Hero, About,
  Gallery and Location sections.

## Adding real clinic photographs

1. Export/compress the photo (WebP or JPEG, ~1600px on the long edge).
2. Save it into `public/images/clinic/` using the filename already
   referenced in `data/clinic.ts` (e.g. `storefront-day.jpg`).
3. Set `hasImage: true` for that entry in `galleryImages`.
4. Rebuild — `next/image` will automatically serve responsive, lazy-loaded,
   optimized variants (AVIF/WebP) with no further code changes.

## Appointment form

[components/Appointment.tsx](components/Appointment.tsx) currently
simulates a submission client-side and shows a "request received"
confirmation. It does **not** send data anywhere yet — see the `TODO`
comment in `handleSubmit` for wiring it to a real backend (a Next.js Route
Handler, Formspree, a Google Sheet, etc.).

## Language toggle (future)

The site ships English-only by design (see project brief). Copy is kept in
component files rather than hardcoded inline strings where practical, so an
English | ಕನ್ನಡ toggle can be added later (e.g. via `next-intl`) without a
structural rewrite.

## SEO / structured data

- Metadata: [app/layout.tsx](app/layout.tsx)
- `MedicalClinic` JSON-LD: [components/StructuredData.tsx](components/StructuredData.tsx)
  — fields are only emitted once the corresponding value in `data/clinic.ts`
  is filled in.
- `app/sitemap.ts` and `app/robots.ts` use a placeholder domain
  (`nakkshatraclinic.example`) — replace with the real production domain
  once known.
