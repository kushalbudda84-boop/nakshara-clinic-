"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, CalendarCheck, Users, FlaskConical, Home } from "lucide-react";
import { clinic } from "@/data/clinic";
import { buildTelUrl } from "@/lib/utils";
import { StarMark } from "./Logo";
import ClinicPhoto from "./ClinicPhoto";

const TRUST_ROW = [
  { icon: StarMark, label: "8 Years", sub: "Clinical Experience", isStar: true },
  { icon: Users, label: "Family Care", sub: "Adults & Children" },
  { icon: FlaskConical, label: "Diagnostics", sub: "Lab Testing Available" },
  { icon: Home, label: "Home Collection", sub: "For Lab Samples" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const telUrl = buildTelUrl(clinic.phone);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-mist-100 via-cream to-cream"
    >
      <div className="content-wrap section-x pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-12 lg:gap-10 items-center">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="star-bullet flex items-center text-sm font-semibold tracking-wide uppercase text-gold-600 mb-5">
              {clinic.tagline}
            </p>
            <h1 className="text-[40px] leading-[1.08] sm:text-5xl lg:text-[60px] lg:leading-[1.06] font-bold tracking-tight text-navy-900">
              Trusted healthcare for you and your family.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-600 max-w-xl">
              Nakkshatra Clinic provides accessible, personalised healthcare
              for individuals and families, supported by around 8 years of
              clinical experience and convenient diagnostic services.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-clinic bg-navy-800 px-6 py-3.5 text-[15px] font-semibold text-white shadow-card hover:bg-navy-700 active:bg-navy-900"
              >
                <CalendarCheck className="h-[18px] w-[18px]" aria-hidden="true" />
                Book an Appointment
              </a>
              <a
                href={telUrl ?? "#contact"}
                className="inline-flex items-center justify-center gap-2 rounded-clinic border border-navy-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-navy-800 hover:border-navy-300 hover:bg-navy-50"
              >
                <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                Call the Clinic
              </a>
            </div>

            <dl className="mt-11 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 max-w-xl">
              {TRUST_ROW.map((item) => (
                <div key={item.label} className="flex flex-col gap-2">
                  {item.isStar ? (
                    <StarMark className="h-8 w-8" />
                  ) : (
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                      <item.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                  )}
                  <dt className="text-[15px] font-bold text-navy-900 leading-tight">
                    {item.label}
                  </dt>
                  <dd className="text-[13px] text-navy-500 leading-snug">
                    {item.sub}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/5.5] rounded-clinic-lg overflow-hidden shadow-lifted">
              <ClinicPhoto
                src="/images/clinic/consultation.jpg"
                alt="Consultation area at Nakkshatra Clinic"
                hasImage={false}
                label="Clinic photo"
                className="h-full w-full"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-white rounded-clinic-lg shadow-lifted p-4 sm:p-5 w-[220px] border border-navy-50">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-50">
                  <StarMark className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[15px] font-bold text-navy-900 leading-tight">
                    8 Years
                  </p>
                  <p className="text-[12px] text-navy-500">
                    Clinical Experience
                  </p>
                </div>
              </div>
            </div>

            <div
              className="hidden sm:block absolute -top-5 -right-5 h-24 w-24 rounded-full bg-gold-100/60"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
