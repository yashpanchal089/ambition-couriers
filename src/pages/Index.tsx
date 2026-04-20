import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Features from "@/components/site/Features";
import Partners from "@/components/site/Partners";
import Branches from "@/components/site/Branches";
import TrackShipment from "@/components/site/TrackShipment";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import CtaBanner from "@/components/site/CtaBanner";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";

const Index = () => {
  useEffect(() => {
    document.title = "Ambition Couriers & Logistics | Smart Shipping for Modern Businesses";
    const desc = "Mumbai-based logistics platform with 41,000+ pin codes, multi-courier integration, real-time tracking & no subscription fees. Ship smarter today.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <TrackShipment />
      <Partners />
      <Branches />
      <Testimonials />
      <FAQ />
      <CtaBanner />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
