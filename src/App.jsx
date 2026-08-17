import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import LegacySection from './components/LegacySection';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/WhyUsSection';
import RepairProcessSection from './components/RepairProcessSection';
import VisionSection from './components/VisionSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TrackRepairModal from './components/TrackRepairModal';

export default function App() {
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative selection:bg-blue-600 selection:text-white">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenTrackModal={() => setIsTrackModalOpen(true)}
        onOpenQuoteForm={scrollToContact}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1 & 2. Hero Section & Diagnostic Visual */}
        <Hero
          onOpenQuoteForm={scrollToContact}
          onOpenTrackModal={() => setIsTrackModalOpen(true)}
        />

        {/* 3. Trust / Experience Strip */}
        <StatsSection />

        {/* 4. Our Story Section (About) */}
        <LegacySection onOpenQuoteForm={scrollToContact} />

        {/* 5. What We Repair (Services Grid) */}
        <ServicesSection onOpenQuoteForm={scrollToContact} />

        {/* 6. Why AG Enterprises */}
        <WhyUsSection />

        {/* 7. Systematic PCB Repair Process */}
        <RepairProcessSection />

        {/* 8. Vision Section (India Repair Network) */}
        <VisionSection />

        {/* Dedicated Gallery Showcase Slider (Preserved) */}
        <GallerySection />

        {/* Client Reviews & Testimonials Slider (Preserved) */}
        <TestimonialsSection />

        {/* 13. FAQ Section */}
        <FaqSection onOpenQuoteForm={scrollToContact} />

        {/* Contact & Enquiry Quote Form (Preserved) */}
        <ContactSection onOpenTrackModal={() => setIsTrackModalOpen(true)} />
      </main>

      {/* Footer (Preserved) */}
      <Footer onOpenTrackModal={() => setIsTrackModalOpen(true)} />

      {/* Track Repair Status Modal (Preserved) */}
      <TrackRepairModal
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
      />

    </div>
  );
}
