import { Stethoscope, HeartPulse, Baby, Ear, Sparkles, FlaskConical } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { services } from "@/data/clinic";

const ICONS: Record<string, typeof Stethoscope> = {
  "general-medicine": Stethoscope,
  "womens-health": HeartPulse,
  paediatrics: Baby,
  "ent-care": Ear,
  dermatology: Sparkles,
  diagnostics: FlaskConical,
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-mist-50">
      <div className="content-wrap section-x">
        <SectionHeading
          eyebrow="Consultation & Diagnostic Services"
          title="Care for everyday health needs."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => {
            const Icon = ICONS[service.slug] ?? Stethoscope;
            return (
              <AnimatedSection key={service.slug} delay={(i % 3) * 0.08}>
                <div className="h-full flex flex-col gap-4 rounded-clinic-lg bg-white p-6 sm:p-7 border border-navy-50 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800 text-gold-300">
                    <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-navy-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <p className="mt-10 text-center text-[13px] text-navy-400 max-w-xl mx-auto">
          Services available at Nakkshatra Clinic. Specific consultations are
          scheduled based on doctor availability.
        </p>
      </div>
    </section>
  );
}
