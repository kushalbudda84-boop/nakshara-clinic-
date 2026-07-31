"use client";

import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { clinic } from "@/data/clinic";
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/utils";

type FormState = {
  name: string;
  mobile: string;
  reason: string;
  preferredDate: string;
  preferredTime: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  mobile: "",
  reason: "",
  preferredDate: "",
  preferredTime: "",
};

export default function Appointment() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const telUrl = buildTelUrl(clinic.phone);
  const waUrl = buildWhatsAppUrl(
    clinic.whatsapp,
    "Hello, I would like to request an appointment at Nakkshatra Clinic."
  );

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO(integration): Replace this block with a real submission, e.g.
    //   await fetch("/api/appointment-request", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   });
    // or wire this form to a service such as Formspree / Google Sheets /
    // a Next.js Route Handler that emails or SMSes the clinic. Until an
    // integration is connected, submissions are not sent anywhere.
    await new Promise((resolve) => setTimeout(resolve, 500));

    setSubmitting(false);
    setSubmitted(true);
    setForm(INITIAL_STATE);
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="content-wrap section-x">
        <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-12 lg:gap-16">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Need to see a doctor?"
              description="Contact Nakkshatra Clinic to check availability and schedule your consultation."
            />

            <div className="mt-8 flex flex-col gap-3 max-w-sm">
              <a
                href={telUrl ?? "#appointment-form"}
                className="inline-flex items-center gap-3 rounded-clinic bg-navy-800 px-5 py-3.5 text-[15px] font-semibold text-white hover:bg-navy-700"
              >
                <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={waUrl ?? "#appointment-form"}
                target={waUrl ? "_blank" : undefined}
                rel={waUrl ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-3 rounded-clinic border border-navy-200 bg-white px-5 py-3.5 text-[15px] font-semibold text-navy-800 hover:bg-navy-50"
              >
                <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href="#appointment-form"
                className="inline-flex items-center gap-3 rounded-clinic border border-navy-200 bg-white px-5 py-3.5 text-[15px] font-semibold text-navy-800 hover:bg-navy-50"
              >
                <CheckCircle2 className="h-[18px] w-[18px]" aria-hidden="true" />
                Request Appointment Below
              </a>
            </div>

            {clinic.timings.length > 0 && (
              <div className="mt-8 rounded-clinic-lg bg-mist-50 border border-navy-50 p-5 max-w-sm">
                <p className="text-[13px] font-semibold uppercase tracking-wide text-navy-500 mb-2">
                  Consultation Timings
                </p>
                <ul className="space-y-1">
                  {clinic.timings.map((t) => (
                    <li key={t.days} className="text-[14px] text-navy-700 flex justify-between">
                      <span>{t.days}</span>
                      <span className="font-medium">{t.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </AnimatedSection>

          <AnimatedSection delay={0.1} id="appointment-form">
            <div className="rounded-clinic-lg bg-white shadow-card border border-navy-50 p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center text-center gap-4 py-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mist-100 text-navy-700">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-navy-900">
                    Thank you. Your appointment request has been received.
                  </h3>
                  <p className="text-[14px] text-navy-500 max-w-xs">
                    The clinic will contact you to confirm availability.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-[14px] font-semibold text-navy-700 underline underline-offset-4"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <p className="text-[13px] text-navy-400 -mt-1">
                    This is an appointment request, not a confirmation.
                  </p>

                  <div>
                    <label htmlFor="name" className="block text-[13px] font-semibold text-navy-700 mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      value={form.name}
                      onChange={handleChange("name")}
                      className="w-full rounded-clinic border border-navy-200 px-4 py-2.5 text-[15px] text-navy-900 focus:border-navy-400 outline-none"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-[13px] font-semibold text-navy-700 mb-1.5">
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      required
                      type="tel"
                      inputMode="tel"
                      value={form.mobile}
                      onChange={handleChange("mobile")}
                      className="w-full rounded-clinic border border-navy-200 px-4 py-2.5 text-[15px] text-navy-900 focus:border-navy-400 outline-none"
                      placeholder="e.g. 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-[13px] font-semibold text-navy-700 mb-1.5">
                      Reason for Visit
                    </label>
                    <textarea
                      id="reason"
                      required
                      rows={3}
                      value={form.reason}
                      onChange={handleChange("reason")}
                      className="w-full rounded-clinic border border-navy-200 px-4 py-2.5 text-[15px] text-navy-900 focus:border-navy-400 outline-none resize-none"
                      placeholder="Briefly describe your concern"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-[13px] font-semibold text-navy-700 mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={form.preferredDate}
                        onChange={handleChange("preferredDate")}
                        className="w-full rounded-clinic border border-navy-200 px-4 py-2.5 text-[15px] text-navy-900 focus:border-navy-400 outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-[13px] font-semibold text-navy-700 mb-1.5">
                        Preferred Time
                      </label>
                      <input
                        id="time"
                        type="time"
                        value={form.preferredTime}
                        onChange={handleChange("preferredTime")}
                        className="w-full rounded-clinic border border-navy-200 px-4 py-2.5 text-[15px] text-navy-900 focus:border-navy-400 outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-1 inline-flex items-center justify-center rounded-clinic bg-navy-800 px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-navy-700 disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Request Appointment"}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
