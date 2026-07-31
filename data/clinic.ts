/**
 * Nakkshatra Clinic — central configuration.
 *
 * Every piece of information here that is still a placeholder (empty string,
 * empty array, or wrapped in square brackets) is intentionally left blank
 * because it was not confirmed. Fill these in and the rest of the site
 * (metadata, structured data, contact links, footer, location section)
 * updates automatically — no component code needs to change.
 */

export type GalleryImage = {
  /** Path under /public once a real photo is added, e.g. "/images/clinic/entrance.jpg" */
  src: string;
  alt: string;
  category: "Exterior" | "Reception" | "Consultation" | "Examination" | "Signage";
};

export const clinic = {
  name: "Nakkshatra Clinic",
  tagline: "Care for every stage of your family.",

  // Confirmed facts only.
  experienceYears: 8,

  // TODO: confirm and fill in. Leave blank to keep placeholder styling in UI.
  doctorName: "", // e.g. "Dr. [Full Name]"
  doctorCredentials: "", // e.g. "MBBS, MD" — do not fill without confirmation

  // Contact — leave blank until confirmed. Components render graceful
  // placeholders and hide tel:/wa.me links when these are empty.
  phone: "", // e.g. "+91XXXXXXXXXX" (used for tel: and display)
  phoneDisplay: "", // e.g. "+91 98765 43210" (formatted for display)
  whatsapp: "", // E.164 without "+", e.g. "9198765XXXXX" (used for wa.me links)
  email: "",

  // Location — leave blank until confirmed.
  address: {
    line1: "", // e.g. "Shop No. X, [Street Name]"
    line2: "", // e.g. "[Locality], [Bengaluru area]"
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "",
  },
  mapsUrl: "", // Google Maps share/directions URL
  mapsEmbedUrl: "", // Google Maps embed src URL

  // Consultation timings — leave empty array until confirmed.
  // Each entry: { days: "Mon – Sat", hours: "10:00 AM – 1:00 PM" }
  timings: [] as { days: string; hours: string }[],

  // Local business geo-coordinates for structured data, if known.
  geo: {
    latitude: "",
    longitude: "",
  },

  social: {
    instagram: "",
    facebook: "",
  },
} as const;

export const services = [
  {
    slug: "general-medicine",
    name: "General Medicine",
    description:
      "Consultation for common illnesses, infections, fever, lifestyle conditions and routine health concerns.",
  },
  {
    slug: "womens-health",
    name: "Women's Health",
    description:
      "Obstetrics and gynaecology consultation and ongoing women's healthcare support.",
  },
  {
    slug: "paediatrics",
    name: "Paediatrics",
    description:
      "Healthcare consultation and medical support for infants, children and adolescents.",
  },
  {
    slug: "ent-care",
    name: "ENT Care",
    description:
      "Consultation for common ear, nose and throat related health concerns.",
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    description:
      "Consultation for common skin, hair and dermatological concerns.",
  },
  {
    slug: "diagnostics",
    name: "Diagnostics",
    description:
      "Convenient access to laboratory investigations and routine health tests.",
  },
] as const;

export const diagnosticTests = [
  "Blood Tests",
  "Urine Tests",
  "Diabetes Tests",
  "Hormone Tests",
  "Haematology",
  "Biochemistry",
  "Microbiology",
  "Serology",
  "Histopathology",
  "Health Check-ups",
  "Special Tests",
] as const;

// TODO: replace `src` with real clinic photographs once added to /public/images/clinic/
// and set hasImage: true. Until then, the Gallery/About/Location sections render a
// tasteful designed placeholder instead of a broken image.
export const galleryImages: (GalleryImage & { hasImage: boolean })[] = [
  {
    src: "/images/clinic/storefront-day.jpg",
    alt: "Nakkshatra Clinic storefront during the day",
    category: "Exterior",
    hasImage: false,
  },
  {
    src: "/images/clinic/storefront-night.jpg",
    alt: "Nakkshatra Clinic illuminated signboard at night",
    category: "Signage",
    hasImage: false,
  },
  {
    src: "/images/clinic/entrance.jpg",
    alt: "Entrance to Nakkshatra Clinic",
    category: "Exterior",
    hasImage: false,
  },
  {
    src: "/images/clinic/reception.jpg",
    alt: "Reception and hallway area inside Nakkshatra Clinic",
    category: "Reception",
    hasImage: false,
  },
  {
    src: "/images/clinic/consultation.jpg",
    alt: "Consultation area at Nakkshatra Clinic",
    category: "Consultation",
    hasImage: false,
  },
  {
    src: "/images/clinic/examination.jpg",
    alt: "Patient examination area at Nakkshatra Clinic",
    category: "Examination",
    hasImage: false,
  },
];
