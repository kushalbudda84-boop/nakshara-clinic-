"use client";

import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { clinic } from "@/data/clinic";
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/utils";

export default function MobileActionBar() {
  const telUrl = buildTelUrl(clinic.phone);
  const waUrl = buildWhatsAppUrl(
    clinic.whatsapp,
    `Hello, I would like to enquire about an appointment at ${clinic.name}.`
  );

  return (
    <nav
      aria-label="Quick actions"
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-navy-100 shadow-lifted"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3">
        <a
          href={telUrl ?? "#contact"}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-navy-800 active:bg-navy-50"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          <span className="text-[12px] font-medium">Call</span>
        </a>
        <a
          href={waUrl ?? "#contact"}
          target={waUrl ? "_blank" : undefined}
          rel={waUrl ? "noopener noreferrer" : undefined}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-navy-800 border-x border-navy-100 active:bg-navy-50"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span className="text-[12px] font-medium">WhatsApp</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center justify-center gap-1 py-2.5 bg-navy-800 text-white active:bg-navy-900"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          <span className="text-[12px] font-semibold">Appointment</span>
        </a>
      </div>
    </nav>
  );
}
