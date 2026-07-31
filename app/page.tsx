import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickAccess from "@/components/QuickAccess";
import About from "@/components/About";
import Services from "@/components/Services";
import Diagnostics from "@/components/Diagnostics";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import VisitSteps from "@/components/VisitSteps";
import Location from "@/components/Location";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <QuickAccess />
        <About />
        <Services />
        <Diagnostics />
        <WhyChooseUs />
        <Gallery />
        <VisitSteps />
        <Location />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
