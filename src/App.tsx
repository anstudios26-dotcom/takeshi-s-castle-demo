/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MarqueeStrip } from "./components/MarqueeStrip";
import { AttractionsSection } from "./components/AttractionsSection";
import { SignatureTypoSection } from "./components/SignatureTypoSection";
import { WhyVisitSection } from "./components/WhyVisitSection";
import { GallerySection } from "./components/GallerySection";
import { PlanVisitBanner } from "./components/PlanVisitBanner";
import { BookingSection } from "./components/BookingSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsAppCTA } from "./components/FloatingWhatsAppCTA";

export default function App() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-cream text-ink selection:bg-blue/20 selection:text-ink overflow-x-clip w-full">
      {/* Sticky 3-Zone Navigation */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Content Flow:
          Nav → Hero → Marquee strip → Attractions → Signature (night arcade) → Why visit → Gallery → Plan-your-visit banner → Booking form → Contact → Footer
      */}
      <main className="overflow-x-clip">
        <HeroSection />
        <MarqueeStrip />
        <AttractionsSection />
        <SignatureTypoSection />
        <WhyVisitSection />
        <GallerySection />
        <PlanVisitBanner />
        <BookingSection />
        <ContactSection />
      </main>

      {/* Ink Footer with rising coral sun disc */}
      <Footer />

      {/* Ink Pill WhatsApp Floating CTA */}
      <FloatingWhatsAppCTA />
    </div>
  );
}
