import React from 'react';
import { X, ShieldCheck, Scale, Building2, Lock, CheckCircle2 } from 'lucide-react';
import { PANSOFT_PROFILE } from '../data/company';

interface LegalModalsProps {
  privacyOpen: boolean;
  termsOpen: boolean;
  onClosePrivacy: () => void;
  onCloseTerms: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  privacyOpen,
  termsOpen,
  onClosePrivacy,
  onCloseTerms
}) => {
  if (!privacyOpen && !termsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative shadow-2xl overflow-y-auto max-h-[88vh] text-slate-300 text-xs sm:text-sm leading-relaxed">
        {/* Close Button */}
        <button
          onClick={privacyOpen ? onClosePrivacy : onCloseTerms}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close legal modal"
        >
          <X className="w-5 h-5" />
        </button>

        {privacyOpen && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Privacy Policy & Data Protection
                </h3>
                <p className="text-xs text-slate-400">
                  Compliant with the Kenya Data Protection Act (KDPA 2019) & International Privacy Principles
                </p>
              </div>
            </div>

            <section className="space-y-3">
              <h4 className="text-base font-bold text-white">
                1. Data Controller Identification
              </h4>
              <p>
                This Privacy Policy is issued by <strong className="text-white">Pansoft Technologies</strong> (Registration Number: <strong className="text-emerald-400 font-mono">{PANSOFT_PROFILE.registrationNumber}</strong>), located at {PANSOFT_PROFILE.postalAddress}, Bungoma, Kenya, under the executive leadership of <strong className="text-white">{PANSOFT_PROFILE.founderName}</strong> (Founder & CEO).
              </p>
              <p>
                This policy governs all software applications, digital platforms, and commercial services operated by Pansoft Technologies, including <strong className="text-white">Housika</strong> (<a href="https://www.housika.co.ke" className="text-cyan-400 underline">www.housika.co.ke</a>).
              </p>
            </section>

            <section className="space-y-3">
              <h4 className="text-base font-bold text-white">
                2. Business Messaging & Customer Communications
              </h4>
              <p>
                Pansoft Technologies utilizes electronic messaging channels (including email, SMS, and verified WhatsApp Business channels) strictly to deliver transactional, utility, and requested customer notifications.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li>
                  <strong className="text-white">Explicit Prior Consent:</strong> We only send notifications (such as Housika digital rent receipts, booking confirmations, and lease updates) to users who have provided explicit consent during registration, transaction submission, or through inbound inquiry.
                </li>
                <li>
                  <strong className="text-white">Opt-Out & Unsubscribe ("STOP"):</strong> Any recipient can opt out of automated messaging at any time by replying with <code className="text-emerald-300 font-mono">STOP</code> or contacting our official customer care line at <strong className="text-white">{PANSOFT_PROFILE.phone}</strong>.
                </li>
                <li>
                  <strong className="text-white">Zero Marketing Spam:</strong> We enforce a strict anti-spam policy. Unsolicited commercial broadcasts and unauthorized third-party marketing lists are strictly prohibited.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h4 className="text-base font-bold text-white">
                3. Information We Collect & Use
              </h4>
              <p>We process only data required to render software and property marketplace services:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li><strong className="text-white">Identity & Contact Data:</strong> Name, telephone number, email, and postal address.</li>
                <li><strong className="text-white">Transaction Records:</strong> Digital receipt numbers, transaction reference codes, dates, and amounts.</li>
                <li><strong className="text-white">Security Metadata:</strong> IP address, browser telemetry, and cryptographic verification hashes for tamper-proof receipts.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h4 className="text-base font-bold text-white">
                4. Data Security & Storage
              </h4>
              <p>
                In alignment with the Kenya Data Protection Act 2019, all data in transit is protected using modern TLS encryption. We do not store raw mobile money PINs or sensitive banking credentials.
              </p>
            </section>

            <section className="space-y-3">
              <h4 className="text-base font-bold text-white">
                5. Contact the Data Protection Officer
              </h4>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                <div>Pansoft Technologies &bull; Privacy Office</div>
                <div>Attention: {PANSOFT_PROFILE.founderName} (CEO)</div>
                <div>Email: {PANSOFT_PROFILE.email}</div>
                <div>Phone: {PANSOFT_PROFILE.phone} ({PANSOFT_PROFILE.phoneRaw})</div>
                <div>Postal: {PANSOFT_PROFILE.postalAddress}</div>
              </div>
            </section>
          </div>
        )}

        {termsOpen && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Terms of Service & Platform Guidelines
                </h3>
                <p className="text-xs text-slate-400">
                  Pansoft Technologies &bull; Business Registration No: {PANSOFT_PROFILE.registrationNumber}
                </p>
              </div>
            </div>

            <section className="space-y-3">
              <h4 className="text-base font-bold text-white">
                1. Acceptance of Terms
              </h4>
              <p>
                By accessing Pansoft Technologies software systems, web properties, or the Housika marketplace, you agree to comply with these Terms of Service in accordance with the laws of Kenya.
              </p>
            </section>

            <section className="space-y-3">
              <h4 className="text-base font-bold text-white">
                2. Software Engineering Services
              </h4>
              <p>
                Pansoft Technologies provides software design, custom web and mobile development, edge architecture, and technical maintenance. Detailed deliverables, acceptance milestones, and warranties are governed by individual client service agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h4 className="text-base font-bold text-white">
                3. Housika Marketplace & Receipts
              </h4>
              <p>
                Housika provides an honest real estate platform connecting tenants, buyers, and landlords:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li>
                  <strong className="text-white">Listing Fees:</strong> Property owners pay transparent listing fees to publish rentals, farmland, or plots. Property details must be accurate and legally authorized.
                </li>
                <li>
                  <strong className="text-white">Booking Fees:</strong> Tenants pay a nominal reservation deposit to secure viewings or priority applications.
                </li>
                <li>
                  <strong className="text-white">Digital Receipts:</strong> Receipt generation is provided free of charge to registered property owners. Landlords are solely responsible for ensuring the accuracy of financial figures on issued receipts.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h4 className="text-base font-bold text-white">
                4. Governing Law & Dispute Resolution
              </h4>
              <p>
                These Terms are governed by and construed in accordance with the laws of the Republic of Kenya.
              </p>
            </section>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={privacyOpen ? onClosePrivacy : onCloseTerms}
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors"
          >
            I Acknowledge & Agree
          </button>
        </div>
      </div>
    </div>
  );
};
