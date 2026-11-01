import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  MessageSquare, 
  ExternalLink, 
  Heart, 
  CheckCircle2,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { PANSOFT_PROFILE } from '../data/company';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenCloudflareGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenCloudflareGuide
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Registration Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-xl text-emerald-400">
                  P
                </div>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  PANSOFT TECHNOLOGIES
                </span>
                <span className="text-[11px] text-emerald-400 font-mono">
                  Reg No: {PANSOFT_PROFILE.registrationNumber} &bull; Bungoma 50200
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Registered Kenyan software design, development, and maintenance company. Proud creators of{' '}
              <a href="https://www.housika.co.ke" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                Housika
              </a>, Kenya’s fair-price rental and land marketplace with free landlord receipt verification.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Govt Registered: {PANSOFT_PROFILE.registrationNumber}
              </span>
            </div>
          </div>

          {/* In-House Apps & Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Flagship Ecosystem
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.housika.co.ke" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-slate-300 font-medium"
                >
                  Housika (housika.co.ke)
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </a>
              </li>
              <li>
                <a href="#housika" className="hover:text-white transition-colors">
                  House Rental Marketplace
                </a>
              </li>
              <li>
                <a href="#housika" className="hover:text-white transition-colors">
                  Farming Land & Plots for Sale
                </a>
              </li>
              <li>
                <a href="#receipt-generator" className="hover:text-white transition-colors">
                  Free Landlord Receipt Generator
                </a>
              </li>
              <li>
                <a href="#receipt-generator" className="hover:text-white transition-colors">
                  Receipt QR Verifier
                </a>
              </li>
            </ul>
          </div>

          {/* Services & Edge */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Services & Tech
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#whatsapp-solutions" className="hover:text-white transition-colors">
                  WhatsApp Business Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  UI/UX Systems & Prototyping
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenCloudflareGuide}
                  className="text-left hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Cloudflare Edge (Zero Backend)
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Software Maintenance & SLA
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Legal & Compliance
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#verification" className="hover:text-emerald-400 transition-colors">
                  Company Registration ({PANSOFT_PROFILE.registrationNumber})
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms of Service & SLAs
                </button>
              </li>
              <li>
                <span className="block text-slate-500 text-[11px]">
                  Registered: {PANSOFT_PROFILE.registrationNumber}
                </span>
              </li>
              <li>
                <span className="block text-slate-500 text-[11px]">
                  Kenya DPA 2019 Compliant
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-slate-300">Pansoft Technologies</strong>. Founded & Led by <strong className="text-slate-300">Movin Juma (CEO)</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Bungoma 50200, Kenya</span>
            <span>&bull;</span>
            <a 
              href={`tel:${PANSOFT_PROFILE.phoneRaw}`}
              className="text-slate-400 hover:text-emerald-400 font-mono"
            >
              {PANSOFT_PROFILE.phone}
            </a>
            <span>&bull;</span>
            <a
              href={`mailto:${PANSOFT_PROFILE.email}`}
              className="text-slate-400 hover:text-cyan-400"
            >
              {PANSOFT_PROFILE.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
