import { CheckCircle2, Home } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { diagnosticTests } from "@/data/clinic";
import { buildWhatsAppUrl } from "@/lib/utils";
import { clinic } from "@/data/clinic";

export default function Diagnostics() {
  const waUrl = buildWhatsAppUrl(
    clinic.whatsapp,
    "Hello, I would like to enquire about home sample collection at Nakkshatra Clinic."
  );

  return (
    <section id="diagnostics" className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-400/10"
        aria-hidden="true"
      />
      <div className="content-wrap section-x relative">
        <SectionHeading
          eyebrow="Laboratory & Diagnostic Services"
          title="Diagnostics, made more convenient."
          description="Access commonly requested laboratory investigations through Nakkshatra Clinic, with home sample collection available for added convenience."
          light
        />

        <div className="mt-12 grid lg:grid-cols-[1.3fr,1fr] gap-8">
          <AnimatedSection>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4 rounded-clinic-lg bg-white/5 border border-white/10 p-6 sm:p-8">
              {diagnosticTests.map((test) => (
                <li key={test} className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-navy-50">
                  <CheckCircle2 className="h-[18px] w-[18px] text-gold-300 shrink-0" aria-hidden="true" />
                  {test}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="h-full flex flex-col justify-between gap-6 rounded-clinic-lg bg-gold-400 p-7 sm:p-8 text-navy-900">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900/10">
                  <Home className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold">Home Sample Collection</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-navy-800">
                  Need a test but prefer not to visit the clinic? Home sample
                  collection may be available for selected diagnostic tests.
                </p>
              </div>
              <a
                href={waUrl ?? "#contact"}
                target={waUrl ? "_blank" : undefined}
                rel={waUrl ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center rounded-clinic bg-navy-900 px-5 py-3 text-[14px] font-semibold text-white hover:bg-navy-800"
              >
                Enquire About Home Collection
              </a>
            </div>
          </AnimatedSection>
        </div>

        <p className="mt-8 text-[13px] text-navy-300 max-w-2xl">
          Availability of individual tests and home collection may vary.
          Please contact the clinic to confirm before your visit.
        </p>
      </div>
    </section>
  );
}
