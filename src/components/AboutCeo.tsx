import React from 'react';
import { 
  UserCheck, 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Quote, 
  CheckCircle, 
  Sparkles,
  Award
} from 'lucide-react';
import { PANSOFT_PROFILE } from '../data/company';

export const AboutCeo: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Executive Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                  MJ
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-widest block">
                    Leadership & Governance
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {PANSOFT_PROFILE.founderName}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {PANSOFT_PROFILE.founderRole}
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300 border-y border-slate-800 py-5 my-5">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Company: <strong>Pansoft Technologies</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Registration Ref: <strong className="font-mono">{PANSOFT_PROFILE.registrationNumber}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Location: <strong>Bungoma, Postal 50200, Kenya</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Executive Hotline: <strong className="font-mono text-emerald-400">{PANSOFT_PROFILE.phone} ({PANSOFT_PROFILE.phoneRaw})</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Official Email: <strong className="text-slate-200">{PANSOFT_PROFILE.email}</strong></span>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                <p className="text-xs text-slate-400 italic">
                  "Our core ambition is simple: eradicate rent exploitation, democratize digital receipts for every landlord, and power Kenyan businesses with WhatsApp conversational automation."
                </p>
                <span className="block text-[11px] font-bold text-slate-300 mt-2 text-right">
                  &mdash; Movin Juma, Founder
                </span>
              </div>
            </div>
          </div>

          {/* Company Story & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <UserCheck className="w-4 h-4" />
              About Pansoft Technologies
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Rooted in Bungoma, Engineering Software for Kenya and Beyond
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Founded by <strong className="text-white">Movin Juma</strong>, Pansoft Technologies was established in Bungoma, Western Kenya (P.O. Box 50200), with a sharp mission: to bridge the gap between high-end software engineering and everyday commerce.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              Witnessing how hard-working landlords and tenants struggled with paperwork, fraudulent middleman brokers, and missing receipts, Movin conceptualized and launched <strong className="text-white">Housika</strong> (<a href="https://www.housika.co.ke" className="text-cyan-400 hover:underline font-semibold">www.housika.co.ke</a>). Today, Housika serves as a trusted hub for house rentals, verified farmland, and titled plots, offering 100% free customized digital receipts and QR verification.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-lg font-bold text-white mb-1">
                  100% Zero-Backend First
                </div>
                <p className="text-xs text-slate-400">
                  Leveraging modern Cloudflare Workers and static edge networks for lightning-fast speeds and bulletproof security without expensive server maintenance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-lg font-bold text-white mb-1">
                  Real Estate Equity
                </div>
                <p className="text-xs text-slate-400">
                  Zero commission extraction from tenants or landlords. We charge only transparent listing & booking fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
