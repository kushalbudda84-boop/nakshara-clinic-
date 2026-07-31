"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { clinic } from "@/data/clinic";
import { buildTelUrl, cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#diagnostics", label: "Diagnostics" },
  { href: "#clinic", label: "Clinic" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const telUrl = buildTelUrl(clinic.phone);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-shadow duration-300",
        scrolled ? "bg-cream/95 backdrop-blur shadow-soft" : "bg-cream/95 backdrop-blur"
      )}
    >
      <div className="content-wrap section-x flex h-[68px] items-center justify-between">
        <a href="#home" className="flex items-center" aria-label="Nakkshatra Clinic — home">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-navy-700 hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {telUrl && (
            <a
              href={telUrl}
              className="inline-flex items-center gap-2 text-[15px] font-medium text-navy-700 hover:text-navy-900"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Clinic
            </a>
          )}
          <a
            href="#contact"
            className="inline-flex items-center rounded-clinic bg-navy-800 px-5 py-2.5 text-[15px] font-semibold text-white shadow-soft hover:bg-navy-700 active:bg-navy-900"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-clinic text-navy-800 hover:bg-navy-50"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-navy-100 bg-cream">
          <nav className="content-wrap section-x flex flex-col py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-[16px] font-medium text-navy-800 border-b border-navy-50 last:border-none"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-clinic bg-navy-800 px-5 py-3 text-[15px] font-semibold text-white"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
