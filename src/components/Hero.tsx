import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  Code2, 
  CloudLightning, 
  MapPin, 
  PhoneCall, 
  ExternalLink,
  FileCheck2,
  Server,
  Database,
  Layers
} from 'lucide-react';
import { PANSOFT_PROFILE } from '../data/company';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Official Registration Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs text-slate-200 mb-6 shadow-sm hover:border-cyan-500/60 transition-all">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold text-cyan-400">OFFICIAL REGISTRATION:</span>
            <span className="font-mono text-slate-100">{PANSOFT_PROFILE.registrationNumber}</span>
            <span className="text-slate-500">&bull;</span>
            <span className="text-slate-300">Bungoma 50200, Kenya</span>
          </div>

          {/* Main Title - Multi-Cloud and Engineering */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Software Engineering, UI/UX Design &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Multi-Cloud Infrastructure
            </span>
          </h1>

          {/* Subtitle highlighting Cloudflare, GCP, Azure, and WhatsApp as an integration service */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            <strong className="text-white">{PANSOFT_PROFILE.name}</strong> is a licensed Kenyan technology enterprise 
            founded and led by <strong className="text-cyan-400">Movin Juma (CEO)</strong>. We architect scalable web and mobile software, 
            deliver multi-cloud deployments across <strong className="text-white">Cloudflare Edge</strong>, <strong className="text-white">Google Cloud Run & Firestore</strong>, and <strong className="text-white">Azure Cosmos DB</strong>, provide enterprise API & WhatsApp integrations as a service, and operate{' '}
            <a href="https://www.housika.co.ke" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline decoration-cyan-500/50 hover:decoration-cyan-400 font-semibold">
              Housika (housika.co.ke)
            </a>.
          </p>

          {/* Cloud Specialty Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs">
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium flex items-center gap-1.5">
              <CloudLightning className="w-3.5 h-3.5 text-amber-400" />
              Cloudflare Edge Specialists
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-blue-400" />
              Google Cloud Run & Firestore
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-cyan-400" />
              Azure Cosmos DB Solutions
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              API & Messaging as a Service
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 text-base"
            >
              <Code2 className="w-5 h-5" />
              Explore Software & Cloud Services
            </a>

            <a
              href="#housika"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all text-base"
            >
              <Building2 className="w-5 h-5 text-cyan-400" />
              Explore Housika Marketplace
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 bg-slate-950 hover:bg-slate-900 border border-slate-800 transition-all text-sm"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              Contact Our Engineers
            </a>
          </div>

          {/* Quick Stats Grid with Real Verification Parameters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs uppercase font-bold tracking-wider">Business Reg.</span>
              </div>
              <div className="text-lg font-mono font-bold text-white tracking-wide">
                {PANSOFT_PROFILE.registrationNumber}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Registrar of Companies Kenya</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-xs uppercase font-bold tracking-wider">Headquarters</span>
              </div>
              <div className="text-lg font-bold text-white">
                Bungoma 50200
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Western Kenya Regional Base</p>
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

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-all">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <PhoneCall className="w-4 h-4" />
                <span className="text-xs uppercase font-bold tracking-wider">Executive Contact</span>
              </div>
              <div className="text-lg font-mono font-bold text-slate-100">
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
