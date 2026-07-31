import { Stethoscope, Baby, HeartPulse, FlaskConical } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CARDS = [
  {
    icon: Stethoscope,
    title: "Consult a Doctor",
    description: "Routine and general health consultation.",
    href: "#services",
  },
  {
    icon: Baby,
    title: "Child Healthcare",
    description: "Care and consultation for children.",
    href: "#services",
  },
  {
    icon: HeartPulse,
    title: "Women's Health",
    description: "Obstetrics & gynaecology services.",
    href: "#services",
  },
  {
    icon: FlaskConical,
    title: "Diagnostic Tests",
    description: "Convenient lab testing and sample collection.",
    href: "#diagnostics",
  },
];

export default function QuickAccess() {
  return (
    <section aria-label="Quick access" className="relative -mt-2 lg:-mt-6 z-10">
      <div className="content-wrap section-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CARDS.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.06}>
              <a
                href={card.href}
                className="group flex h-full flex-col gap-3.5 rounded-clinic-lg bg-white p-5 sm:p-6 shadow-card border border-navy-50 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-mist-100 text-navy-700 group-hover:bg-navy-800 group-hover:text-white transition-colors duration-300">
                  <card.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[15px] sm:text-base font-bold text-navy-900 leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[13px] sm:text-sm text-navy-500 leading-snug">
                    {card.description}
                  </p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
