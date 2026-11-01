import React, { useState } from 'react';
import { 
  Building2, 
  ExternalLink, 
  Receipt, 
  ShieldCheck, 
  MapPin, 
  Sprout, 
  Home, 
  CheckCircle, 
  Sparkles, 
  BadgePercent, 
  Tag, 
  ArrowRight,
  TrendingUp,
  Landmark
} from 'lucide-react';
import { SAMPLE_PROPERTIES, HOUSIKA_FEATURES, PANSOFT_PROFILE } from '../data/company';

interface HousikaShowcaseProps {
  onScrollToReceiptGenerator: () => void;
}

export const HousikaShowcase: React.FC<HousikaShowcaseProps> = ({ onScrollToReceiptGenerator }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'rentals' | 'farming' | 'plots'>('all');

  const filteredProperties = SAMPLE_PROPERTIES.filter(p => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'rentals') return p.type.toLowerCase().includes('rental');
    if (selectedCategory === 'farming') return p.type.toLowerCase().includes('farming');
    if (selectedCategory === 'plots') return p.type.toLowerCase().includes('plot');
    return true;
  });

  return (
    <section id="housika" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
              <Building2 className="w-4 h-4" />
              Pansoft Technologies In-House Flagship Platform
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Housika &mdash; Real Estate, Farmland & Plots
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
              Engineered by Pansoft Technologies, <strong className="text-white">Housika</strong> (<a href="https://www.housika.co.ke" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">www.housika.co.ke</a>) 
              is Kenya’s revolutionary rental and land marketplace designed to help landlords and tenants flourish without predatory agent fees.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.housika.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all text-sm shadow-lg shadow-cyan-500/20"
            >
              Visit Housika.co.ke
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onScrollToReceiptGenerator}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all text-sm"
            >
              <Receipt className="w-4 h-4 text-emerald-400" />
              Test Landlord Receipt Generator
            </button>
          </div>
        </div>

        {/* The 4 Core Pillars of Housika */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {HOUSIKA_FEATURES.map((feat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 inline-block mb-4">
                  {feat.badge}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs text-slate-500 group-hover:text-cyan-400 transition-colors">
                <CheckCircle className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                Active on Housika.co.ke
              </div>
            </div>
          ))}
        </div>

        {/* Pricing / Revenue Model Breakdown (Why Landlords & Tenants Love It) */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-8 sm:p-12 mb-16 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-semibold">
              Transparent Business Model
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Zero Hidden Agent Commissions. Pure Value.
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Unlike traditional brokers in Kenya who charge full first-month rent from landlords and extortionate viewing fees from tenants, Housika charges only two simple, flat fees:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Tag className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">1. Listing Fee Only</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Landlords and land sellers pay a tiny flat listing fee to publish apartments, agricultural land, or plots with high-res photos and direct inquiries.
              </p>
              <div className="mt-4 text-xs font-semibold text-emerald-400">
                100% Retained Rent & Land Value
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">2. Secure Booking Fee</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tenants pay a nominal booking deposit held safely while physical house viewing and keys handover is executed, filtering out time-wasters.
              </p>
              <div className="mt-4 text-xs font-semibold text-cyan-400">
                Buyer & Tenant Protection
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
                <Receipt className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">3. Free Landlord Receipts</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complimentary digital receipt generation with unique QR verification. No extra subscriptions or bookkeeping software needed for property owners.
              </p>
              <div className="mt-4 text-xs font-semibold text-teal-400">
                Always Free for Landlords
              </div>
            </div>
          </div>
        </div>

        {/* Live Marketplace Preview */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Featured Listings from Housika Ecosystem
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Real properties verified across Bungoma, Western Kenya and national corridors
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory('rentals')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  selectedCategory === 'rentals'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                House Rentals
              </button>
              <button
                onClick={() => setSelectedCategory('farming')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  selectedCategory === 'farming'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                Farming Land
              </button>
              <button
                onClick={() => setSelectedCategory('plots')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  selectedCategory === 'plots'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                Plots for Sale
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-1 shadow-lg"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                      {prop.type}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      {prop.status}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1">
                    {prop.title}
                  </h4>

                  <p className="text-xs text-slate-400 flex items-center gap-1.5 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    {prop.location}
                  </p>

                  <div className="text-xl font-extrabold text-cyan-400 font-mono mb-4">
                    {prop.price}
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-slate-800">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Key Amenities & Highlights:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {prop.features.map((f, i) => (
                        <span key={i} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Via <strong className="text-white">housika.co.ke</strong>
                  </span>
                  <a
                    href="https://www.housika.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    View on Housika
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
