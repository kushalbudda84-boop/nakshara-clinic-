"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import ClinicPhoto from "./ClinicPhoto";
import { galleryImages } from "@/data/clinic";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, next, prev]);

  const active = activeIndex !== null ? galleryImages[activeIndex] : null;

  return (
    <section id="clinic" className="py-20 lg:py-28 bg-mist-50">
      <div className="content-wrap section-x">
        <SectionHeading
          eyebrow="Our Clinic"
          title="A look inside Nakkshatra Clinic"
          align="center"
          className="mx-auto"
        />

        {/* Mobile: horizontal swipe */}
        <div className="mt-10 flex sm:hidden gap-4 overflow-x-auto pb-2 -mx-5 px-5 snap-x snap-mandatory">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="relative shrink-0 w-[78%] aspect-[4/3] rounded-clinic overflow-hidden snap-start shadow-soft"
              aria-label={`View photo: ${img.alt}`}
            >
              <ClinicPhoto
                src={img.src}
                alt={img.alt}
                hasImage={img.hasImage}
                label={img.category}
                className="h-full w-full"
              />
            </button>
          ))}
        </div>

        {/* Desktop / tablet: editorial grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mt-14">
          {galleryImages.map((img, i) => (
            <AnimatedSection key={img.src} delay={(i % 3) * 0.06}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group relative aspect-[4/3] w-full rounded-clinic-lg overflow-hidden shadow-soft"
                aria-label={`View photo: ${img.alt}`}
              >
                <ClinicPhoto
                  src={img.src}
                  alt={img.alt}
                  hasImage={img.hasImage}
                  label={img.category}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/10 transition-colors duration-300" />
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="relative w-full max-w-2xl aspect-[4/3] rounded-clinic-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <ClinicPhoto
              src={active.src}
              alt={active.alt}
              hasImage={active.hasImage}
              label={active.category}
              className="h-full w-full"
            />
            <p className="absolute bottom-0 inset-x-0 bg-navy-950/60 text-white text-sm text-center py-2.5">
              {active.category}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
