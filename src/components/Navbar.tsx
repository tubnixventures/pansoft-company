import React, { useState } from 'react';
import { 
  Building2, 
  PhoneCall, 
  ShieldCheck, 
  FileText, 
  Receipt, 
  Menu, 
  X, 
  ExternalLink,
  CheckCircle2,
  CloudLightning,
  Mail
} from 'lucide-react';
import { PANSOFT_PROFILE } from '../data/company';

interface NavbarProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenCloudflareGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenCloudflareGuide
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Housika PropTech', href: '#housika' },
    { label: 'Services & Cloud', href: '#services' },
    { label: 'Receipt Generator', href: '#receipt-generator' },
    { label: 'Cloud & Integrations', href: '#cloud-integrations' },
    { label: 'Company Registry', href: '#verification' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800">
      {/* Top micro-bar for verification & corporate credentials */}
      <div className="bg-slate-900/90 text-xs text-slate-300 py-1.5 px-4 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
              <CheckCircle2 className="w-3 h-3 text-cyan-400" />
              Registered in Kenya: {PANSOFT_PROFILE.registrationNumber}
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-400">
              {PANSOFT_PROFILE.postalAddress}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCloudflareGuide}
              className="text-xs text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <CloudLightning className="w-3 h-3 text-amber-400" />
              Cloudflare Edge Architecture
            </button>
            <span className="text-slate-600">|</span>
            <a 
              href={`tel:${PANSOFT_PROFILE.phoneRaw}`}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-cyan-400 font-medium font-mono"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              {PANSOFT_PROFILE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Corporate Tagline */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-teal-600 to-emerald-600 p-0.5 shadow-lg shadow-cyan-500/10">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  P
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  PANSOFT
                </span>
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-1.5 py-0.5 bg-cyan-950/60 border border-cyan-800/50 rounded">
                  TECH
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wide">
                Technologies &bull; Bungoma 50200
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#verification"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Reg: {PANSOFT_PROFILE.registrationNumber}
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-lg shadow-md shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 fill-slate-950 text-slate-950" />
              Contact Our Engineers
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="pb-2 border-b border-slate-800 text-xs text-slate-400">
            Pansoft Technologies &bull; Reg: {PANSOFT_PROFILE.registrationNumber}
          </div>
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-400 rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrivacy();
              }}
              className="text-left px-3 py-2 text-sm text-slate-300 hover:text-white"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerms();
              }}
              className="text-left px-3 py-2 text-sm text-slate-300 hover:text-white"
            >
              Terms of Service
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 font-bold text-slate-950 bg-cyan-400 rounded-lg flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Contact Us ({PANSOFT_PROFILE.phone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
