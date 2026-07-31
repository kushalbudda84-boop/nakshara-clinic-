import { Award, Users, ClipboardList, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { clinic } from "@/data/clinic";

const REASONS = [
  {
    icon: Award,
    title: `${clinic.experienceYears} Years of Experience`,
    description:
      "Clinical experience you can rely on for everyday healthcare needs.",
  },
  {
    icon: Users,
    title: "Family-Focused Care",
    description: "Medical support for adults, women and children.",
  },
  {
    icon: ClipboardList,
    title: "Consultation + Diagnostics",
    description:
      "Access consultations and commonly requested tests in one convenient location.",
  },
  {
    icon: MapPin,
    title: "Neighbourhood Convenience",
    description:
      "Accessible healthcare without the complexity of a large hospital visit.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="content-wrap section-x">
        <SectionHeading
          eyebrow="Why Nakkshatra Clinic"
          title="Healthcare that stays simple."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {REASONS.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.07}>
              <div className="flex flex-col items-center text-center gap-3.5">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mist-100 text-navy-800">
                  <reason.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-[15px] font-bold text-navy-900">
                  {reason.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-navy-500 max-w-[220px]">
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
