export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/** Builds a wa.me deep link with an optional prefilled message. Returns null if no number configured. */
export function buildWhatsAppUrl(whatsapp: string, message?: string) {
  if (!whatsapp) return null;
  const base = `https://wa.me/${whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Builds a tel: link. Returns null if no phone configured. */
export function buildTelUrl(phone: string) {
  if (!phone) return null;
  return `tel:${phone}`;
}
