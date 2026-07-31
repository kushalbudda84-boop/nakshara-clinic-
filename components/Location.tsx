import { MapPin, Navigation, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import ClinicPhoto from "./ClinicPhoto";
import { clinic } from "@/data/clinic";
import { buildTelUrl } from "@/lib/utils";

export default function Location() {
  const telUrl = buildTelUrl(clinic.phone);
  const hasFullAddress = Boolean(clinic.address.line1);
  const addressLines = [clinic.address.line1, clinic.address.line2].filter(
    Boolean
  );

  return (
    <section className="py-20 lg:py-28 bg-mist-50">
      <div className="content-wrap section-x">
        <SectionHeading
          eyebrow="Find Us"
          title="Your neighbourhood clinic."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <AnimatedSection>
            <div className="relative rounded-clinic-lg overflow-hidden shadow-card aspect-[4/3] lg:aspect-auto lg:h-full">
              <ClinicPhoto
                src="/images/clinic/storefront-day.jpg"
                alt="Nakkshatra Clinic storefront"
                hasImage={false}
                label="Clinic storefront"
                className="h-full w-full"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="h-full flex flex-col rounded-clinic-lg bg-white shadow-card border border-navy-50 overflow-hidden">
              <div className="relative aspect-[16/9] bg-navy-50">
                {clinic.mapsEmbedUrl ? (
                  <iframe
                    src={clinic.mapsEmbedUrl}
                    title="Nakkshatra Clinic location map"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-mist-100">
                    <MapPin className="h-6 w-6 text-navy-400" aria-hidden="true" />
                    <p className="text-[13px] text-navy-400">
                      Map available on request
                    </p>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-navy-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    {hasFullAddress ? (
                      addressLines.map((line) => (
                        <p key={line} className="text-[15px] text-navy-700 leading-relaxed">
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="text-[15px] text-navy-700 leading-relaxed">
                        Please contact the clinic for directions.
                      </p>
                    )}
                    <p className="text-[15px] text-navy-700 leading-relaxed">
                      {clinic.address.city}, {clinic.address.state}
                      {clinic.address.postalCode
                        ? ` – ${clinic.address.postalCode}`
                        : ""}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 mt-auto pt-6">
                  <a
                    href={clinic.mapsUrl || "#contact"}
                    target={clinic.mapsUrl ? "_blank" : undefined}
                    rel={clinic.mapsUrl ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center gap-2 rounded-clinic bg-navy-800 px-5 py-3 text-[14px] font-semibold text-white hover:bg-navy-700"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    Get Directions
                  </a>
                  <a
                    href={telUrl ?? "#contact"}
                    className="inline-flex items-center justify-center gap-2 rounded-clinic border border-navy-200 px-5 py-3 text-[14px] font-semibold text-navy-800 hover:bg-navy-50"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Clinic
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
