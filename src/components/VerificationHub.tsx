import React, { useState } from 'react';
import { 
  Building2, 
  BadgeCheck, 
  FileText, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Scale, 
  ShieldCheck, 
  Calendar,
  Briefcase
} from 'lucide-react';
import { PANSOFT_PROFILE } from '../data/company';

interface VerificationHubProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const VerificationHub: React.FC<VerificationHubProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const [activeTab, setActiveTab] = useState<'certificate' | 'overview'>('certificate');

  return (
    <section id="verification" className="py-20 bg-slate-900/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <ShieldCheck className="w-4 h-4" />
            Official Corporate Standing & Registration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Registered Kenyan Technology Enterprise
          </h2>
          <p className="text-slate-300 mt-3 text-base">
            <strong className="text-white">Pansoft Technologies</strong> operates as a legally registered software design, 
            development, and maintenance company under the Business Names Act of Kenya.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-950 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'certificate'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Certificate of Business Name Registration
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'overview'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Corporate Profile & Governance
            </button>
          </div>
        </div>

        {activeTab === 'certificate' ? (
          <div className="max-w-3xl mx-auto bg-slate-950 border-2 border-emerald-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Subtle Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
              <span className="text-8xl font-black text-white rotate-[-20deg]">
                PANSOFT
              </span>
            </div>

            {/* Certificate Header */}
            <div className="text-center border-b border-slate-800 pb-6 mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-3">
                <BadgeCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif tracking-wider font-bold text-white">
                REPUBLIC OF KENYA
              </h3>
              <p className="text-xs tracking-widest text-emerald-400 uppercase font-semibold mt-1">
                The Registration of Business Names Act (Cap. 499, Section 14)
              </p>
              <div className="inline-block mt-3 px-3 py-1 bg-slate-900 border border-slate-800 rounded text-xs font-mono text-slate-300">
                OFFICIAL REGISTRATION NUMBER: <span className="font-bold text-emerald-400">{PANSOFT_PROFILE.registrationNumber}</span>
              </div>
            </div>

            {/* Certificate Body */}
            <div className="space-y-6 text-sm text-slate-300">
              <p className="text-center leading-relaxed text-base">
                This is to officially certify that the business enterprise operating under the registered legal name of
              </p>

              <div className="text-center py-4 bg-slate-900/90 rounded-xl border border-emerald-500/20">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide block">
                  PANSOFT TECHNOLOGIES
                </span>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  Registration Ref: {PANSOFT_PROFILE.registrationNumber} &bull; Postal Code: {PANSOFT_PROFILE.postalCode} Bungoma
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 block font-medium">Principal Nature of Business</span>
                  <span className="text-white font-semibold text-sm">
                    Software Design, Development, IT Solutions & Systems Maintenance
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 block font-medium">Founder & Chief Executive Officer</span>
                  <span className="text-white font-semibold text-sm">
                    {PANSOFT_PROFILE.founderName} ({PANSOFT_PROFILE.founderRole})
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 block font-medium">Official Postal Address</span>
                  <span className="text-white font-semibold text-sm">
                    {PANSOFT_PROFILE.postalAddress}
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 block font-medium">Official Contact Lines</span>
                  <span className="text-emerald-400 font-mono font-semibold text-sm">
                    {PANSOFT_PROFILE.phone} ({PANSOFT_PROFILE.phoneRaw})
                  </span>
                </div>
              </div>

              {/* Signoff & Regulatory Stamp */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      Business Registration Service (BRS)
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Verified Active Enterprise in Good Standing &bull; Bungoma County
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={onOpenPrivacy}
                    className="px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded border border-slate-700 transition-colors"
                  >
                    Privacy Policy
                  </button>
                  <button
                    onClick={onOpenTerms}
                    className="px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded border border-slate-700 transition-colors"
                  >
                    Terms of Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: Corporate Overview & Governance */
          <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Corporate Governance & Enterprise Information
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Official structure, registered branches, and leadership details
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                Active & Certified
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 block font-medium">Full Legal Entity</span>
                  <strong className="text-base text-white block mt-0.5">{PANSOFT_PROFILE.legalName}</strong>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Registered under the laws of the Republic of Kenya
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 block font-medium">Registration Number</span>
                  <strong className="text-base font-mono text-emerald-400 block mt-0.5">{PANSOFT_PROFILE.registrationNumber}</strong>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Registrar of Companies, Business Registration Service
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 block font-medium">Headquarters & Postal Base</span>
                  <strong className="text-sm text-white block mt-0.5">{PANSOFT_PROFILE.postalAddress}</strong>
                  <span className="text-xs text-slate-400 mt-1 block">
                    {PANSOFT_PROFILE.physicalAddress}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 block font-medium">Founder & Chief Executive Officer</span>
                  <strong className="text-base text-white block mt-0.5">{PANSOFT_PROFILE.founderName}</strong>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Executive leadership, software architect, and company direction
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 block font-medium">Direct Telephone & WhatsApp</span>
                  <strong className="text-base font-mono text-emerald-400 block mt-0.5">{PANSOFT_PROFILE.phone} ({PANSOFT_PROFILE.phoneRaw})</strong>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Operational line for clients, developers, and partners
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 block font-medium">Official Executive Email</span>
                  <strong className="text-sm text-white block mt-0.5">{PANSOFT_PROFILE.email}</strong>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Direct communications & official correspondence
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
