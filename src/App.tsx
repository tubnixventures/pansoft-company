import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VerificationHub } from './components/VerificationHub';
import { HousikaShowcase } from './components/HousikaShowcase';
import { ReceiptGenerator } from './components/ReceiptGenerator';
import { CloudIntegrationsShowcase } from './components/CloudIntegrationsShowcase';
import { ServicesSection } from './components/ServicesSection';
import { AboutCeo } from './components/AboutCeo';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { CloudflareGuideModal } from './components/CloudflareGuideModal';
import { PhoneCall, Mail } from 'lucide-react';
import { PANSOFT_PROFILE } from './data/company';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [cloudflareOpen, setCloudflareOpen] = useState(false);

  const scrollToReceiptGenerator = () => {
    const el = document.getElementById('receipt-generator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Sticky Navigation */}
      <Navbar
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenCloudflareGuide={() => setCloudflareOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <VerificationHub
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onOpenTerms={() => setTermsOpen(true)}
        />
        <HousikaShowcase
          onScrollToReceiptGenerator={scrollToReceiptGenerator}
        />
        <ReceiptGenerator />
        <CloudIntegrationsShowcase />
        <ServicesSection />
        <AboutCeo />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenCloudflareGuide={() => setCloudflareOpen(true)}
      />

      {/* Legal Modals (Privacy Policy & Terms) */}
      <LegalModals
        privacyOpen={privacyOpen}
        termsOpen={termsOpen}
        onClosePrivacy={() => setPrivacyOpen(false)}
        onCloseTerms={() => setTermsOpen(false)}
      />

      {/* Cloudflare Architecture Modal */}
      <CloudflareGuideModal
        isOpen={cloudflareOpen}
        onClose={() => setCloudflareOpen(false)}
      />

      {/* Floating Sticky Contact Button */}
      <aside aria-label="Quick contact links" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href="#contact"
          aria-label="Contact Pansoft Technologies"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold shadow-xl shadow-cyan-500/25 transition-all transform hover:scale-105"
        >
          <Mail className="w-4 h-4 fill-slate-950 text-slate-950" />
          <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
            Contact Engineers
          </span>
        </a>
      </aside>
    </div>
  );
}
