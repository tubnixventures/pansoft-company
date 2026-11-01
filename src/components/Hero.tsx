import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  Building2, 
  Code2, 
  Zap, 
  MapPin, 
  PhoneCall, 
  ExternalLink,
  Receipt,
  FileCheck2,
  Layers
} from 'lucide-react';
import { PANSOFT_PROFILE } from '../data/company';

interface HeroProps {
  onOpenVerificationModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Official Verification Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-xs text-slate-200 mb-6 shadow-sm hover:border-emerald-500/60 transition-all">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-emerald-400">OFFICIAL REGISTRATION:</span>
            <span className="font-mono text-slate-100">{PANSOFT_PROFILE.registrationNumber}</span>
            <span className="text-slate-500">&bull;</span>
            <span className="text-slate-300">Bungoma 50200, Kenya</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Software Engineering, Design & Intelligent{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              WhatsApp API Infrastructure
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            <strong className="text-white">{PANSOFT_PROFILE.name}</strong> is a licensed Kenyan technology enterprise 
            founded and led by <strong className="text-emerald-400">Movin Juma (CEO)</strong>. We architect high-performance 
            web and mobile applications, provide zero-backend serverless deployments, and operate proprietary digital platforms including{' '}
            <a href="https://www.housika.co.ke" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline decoration-cyan-500/50 hover:decoration-cyan-400 font-semibold">
              Housika (housika.co.ke)
            </a>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href={`https://wa.me/${PANSOFT_PROFILE.phoneIntl.replace('+', '')}?text=Hello%20Movin%20Juma,%20I%20am%20inquiring%20about%20Pansoft%20Technologies%20services%20and%20WhatsApp%20API.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 text-base"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              Chat on WhatsApp ({PANSOFT_PROFILE.phone})
            </a>

            <a
              href="#housika"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all text-base"
            >
              <Building2 className="w-5 h-5 text-cyan-400" />
              Explore Housika Marketplace
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 bg-slate-950 hover:bg-slate-900 border border-slate-800 transition-all text-sm"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              Our Services
            </a>

            <a
              href="#verification"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 bg-slate-950 hover:bg-slate-900 border border-slate-800 transition-all text-sm"
            >
              <FileCheck2 className="w-4 h-4 text-emerald-400" />
              Company Registry (BN-36S5WLAP)
            </a>
          </div>

          {/* Quick Stats Grid with Real Verification Parameters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs uppercase font-bold tracking-wider">Business Reg.</span>
              </div>
              <div className="text-lg font-mono font-bold text-white tracking-wide">
                {PANSOFT_PROFILE.registrationNumber}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Registrar of Companies Kenya</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-xs uppercase font-bold tracking-wider">Headquarters</span>
              </div>
              <div className="text-lg font-bold text-white">
                Bungoma 50200
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Western Kenya Regional Hub</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/30 transition-all">
              <div className="flex items-center gap-2 text-teal-400 mb-1">
                <Building2 className="w-4 h-4" />
                <span className="text-xs uppercase font-bold tracking-wider">In-House PropTech</span>
              </div>
              <div className="text-lg font-bold text-white">
                Housika.co.ke
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Rentals, Farms & Plots</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <PhoneCall className="w-4 h-4" />
                <span className="text-xs uppercase font-bold tracking-wider">Executive Contact</span>
              </div>
              <div className="text-lg font-mono font-bold text-emerald-400">
                {PANSOFT_PROFILE.phoneRaw}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Movin Juma, Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
