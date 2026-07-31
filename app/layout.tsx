import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import MobileActionBar from "@/components/MobileActionBar";
import { siteUrl } from "@/data/clinic";

const heading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nakkshatra Clinic | Family Healthcare & Diagnostic Services",
  description:
    "Nakkshatra Clinic provides general medical care, women's health, paediatric consultations and convenient diagnostic services for individuals and families.",
  openGraph: {
    title: "Nakkshatra Clinic | Family Healthcare & Diagnostic Services",
    description:
      "Nakkshatra Clinic provides general medical care, women's health, paediatric consultations and convenient diagnostic services for individuals and families.",
    siteName: "Nakkshatra Clinic",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakkshatra Clinic | Family Healthcare & Diagnostic Services",
    description:
      "Accessible, personalised healthcare for individuals and families, with convenient diagnostic services.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#132849",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} font-body pb-[64px] lg:pb-0`}
      >
        <StructuredData />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-navy-800 focus:text-white focus:px-4 focus:py-2 focus:rounded-clinic"
        >
          Skip to main content
        </a>
        {children}
        <MobileActionBar />
      </body>
    </html>
  );
}
