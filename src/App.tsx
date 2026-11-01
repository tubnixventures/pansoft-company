import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VerificationHub } from './components/VerificationHub';
import { HousikaShowcase } from './components/HousikaShowcase';
import { ReceiptGenerator } from './components/ReceiptGenerator';
import { WhatsAppApiShowcase } from './components/WhatsAppApiShowcase';
import { ServicesSection } from './components/ServicesSection';
import { AboutCeo } from './components/AboutCeo';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { CloudflareGuideModal } from './components/CloudflareGuideModal';
import { MessageSquare, ArrowUp } from 'lucide-react';
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
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
        <WhatsAppApiShowcase />
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

      {/* Legal Modals (Privacy Policy & Terms for Meta Audit) */}
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

      {/* Floating Sticky WhatsApp Button */}
      <aside aria-label="Quick contact links" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={`https://wa.me/${PANSOFT_PROFILE.phoneIntl.replace('+', '')}?text=Hello%20Movin%20Juma,%20I%20am%20contacting%20Pansoft%20Technologies%20for%20software%20and%20Housika%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Chat with Movin Juma"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold shadow-xl shadow-[#25D366]/25 transition-all transform hover:scale-105"
        >
          <MessageSquare className="w-5 h-5 fill-slate-950" />
          <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
