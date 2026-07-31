import { clinic, services } from "@/data/clinic";

/**
 * MedicalClinic / LocalBusiness structured data.
 * Only factual, confirmed fields are populated — empty config values are
 * simply omitted from the output rather than emitted as blank strings.
 */
export default function StructuredData() {
  const addressParts = [
    clinic.address.line1,
    clinic.address.line2,
    clinic.address.city,
  ].filter(Boolean);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    description:
      "Neighbourhood healthcare clinic offering general medicine, women's health, paediatric consultation, ENT, dermatology and diagnostic services.",
    medicalSpecialty: services.map((s) => s.name),
  };

  if (clinic.phone) data.telephone = clinic.phone;
  if (clinic.email) data.email = clinic.email;

  if (addressParts.length > 0 || clinic.address.postalCode) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: clinic.address.line1 || undefined,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.postalCode || undefined,
      addressCountry: "IN",
    };
  }

  if (clinic.geo.latitude && clinic.geo.longitude) {
    data.geo = {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    };
  }

  if (clinic.timings.length > 0) {
    data.openingHours = clinic.timings.map((t) => `${t.days} ${t.hours}`);
  }

  if (clinic.mapsUrl) data.hasMap = clinic.mapsUrl;

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
