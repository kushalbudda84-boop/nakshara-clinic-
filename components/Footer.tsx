import { Phone, MapPin, Mail } from "lucide-react";
import Logo from "./Logo";
import { clinic } from "@/data/clinic";
import { buildTelUrl } from "@/lib/utils";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#diagnostics", label: "Diagnostics" },
  { href: "#clinic", label: "Clinic" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const telUrl = buildTelUrl(clinic.phone);
  const hasAddress = Boolean(clinic.address.line1);

  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="content-wrap section-x py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <Logo variant="dark" />
          <p className="mt-4 text-[14px] leading-relaxed text-navy-300 max-w-xs">
            Accessible healthcare for individuals and families.
          </p>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-wide text-navy-400 mb-4">
            Quick Links
          </p>
          <ul className="space-y-2.5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[14px] text-navy-200 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-wide text-navy-400 mb-4">
            Contact
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-navy-400" aria-hidden="true" />
              {telUrl ? (
                <a href={telUrl} className="text-[14px] text-navy-200 hover:text-white">
                  {clinic.phoneDisplay || clinic.phone}
                </a>
              ) : (
                <span className="text-[14px] text-navy-400">
                  Phone available on request
                </span>
              )}
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-navy-400" aria-hidden="true" />
              <span className="text-[14px] text-navy-200">
                {hasAddress ? (
                  <>
                    {clinic.address.line1}
                    {clinic.address.line2 ? `, ${clinic.address.line2}` : ""}
                    {`, ${clinic.address.city}, ${clinic.address.state}`}
                  </>
                ) : (
                  `${clinic.address.city}, ${clinic.address.state}`
                )}
              </span>
            </li>
            {clinic.email && (
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-navy-400" aria-hidden="true" />
                <a href={`mailto:${clinic.email}`} className="text-[14px] text-navy-200 hover:text-white">
                  {clinic.email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="content-wrap section-x py-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-[12px] text-navy-400 max-w-2xl leading-relaxed">
            Information on this website is for general informational purposes
            and is not a substitute for professional medical advice,
            diagnosis or treatment.
          </p>
          <p className="text-[12px] text-navy-500 whitespace-nowrap">
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
