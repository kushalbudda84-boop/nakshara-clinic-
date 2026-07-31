import { Phone, CalendarClock, Stethoscope } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const STEPS = [
  {
    number: "1",
    icon: Phone,
    title: "Contact Us",
    description: "Call or send an appointment request.",
  },
  {
    number: "2",
    icon: CalendarClock,
    title: "Choose a Convenient Time",
    description: "Confirm an available consultation time with the clinic.",
  },
  {
    number: "3",
    icon: Stethoscope,
    title: "Visit Nakkshatra Clinic",
    description: "Meet the doctor and receive personalised medical care.",
  },
];

export default function VisitSteps() {
  return (
    <section className="py-20 lg:py-28">
      <div className="content-wrap section-x">
        <SectionHeading
          eyebrow="How to Visit"
          title="Getting started is simple."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid sm:grid-cols-3 gap-8 sm:gap-6 relative">
          <div
            className="hidden sm:block absolute top-7 left-[16.5%] right-[16.5%] h-px bg-navy-100"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="relative flex flex-col items-center text-center gap-4">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-white">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gold-400 text-[12px] font-bold text-navy-900">
                    {step.number}
                  </span>
                </span>
                <h3 className="text-[16px] font-bold text-navy-900">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-navy-500 max-w-[240px]">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
