import { Ear, MapPinned, RefreshCcw } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import ClinicPhoto from "./ClinicPhoto";
import { clinic } from "@/data/clinic";

const VALUES = [
  {
    icon: Ear,
    title: "Personal Attention",
    description: "Care that starts by listening.",
  },
  {
    icon: MapPinned,
    title: "Convenient Access",
    description: "Healthcare closer to where you live.",
  },
  {
    icon: RefreshCcw,
    title: "Continuity of Care",
    description: "Support from consultation through follow-up.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="content-wrap section-x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="relative rounded-clinic-lg overflow-hidden shadow-card aspect-[4/3] lg:aspect-[5/4]">
              <ClinicPhoto
                src="/images/clinic/reception.jpg"
                alt="Interior hallway and reception space at Nakkshatra Clinic"
                hasImage={false}
                label="Clinic interior"
                className="h-full w-full"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <SectionHeading
              eyebrow="About Nakkshatra Clinic"
              title="Healthcare you can feel comfortable with."
            />
            <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-navy-600">
              Nakkshatra Clinic is a neighbourhood healthcare clinic focused
              on providing accessible, attentive and practical medical care
              for individuals and families.
            </p>
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-navy-600">
              With around {clinic.experienceYears} years of clinical
              experience, the clinic aims to make everyday healthcare simple
              — from medical consultations to diagnostic testing and
              follow-up care.
            </p>

            <ul className="mt-9 grid sm:grid-cols-3 gap-6">
              {VALUES.map((value) => (
                <li key={value.title} className="flex flex-col gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-mist-100 text-navy-700">
                    <value.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <p className="text-[14px] font-bold text-navy-900 leading-snug">
                    {value.title}
                  </p>
                  <p className="text-[13px] text-navy-500 leading-snug">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
