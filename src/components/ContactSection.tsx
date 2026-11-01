import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Building2,
  ShieldCheck
} from 'lucide-react';
import { PANSOFT_PROFILE } from '../data/company';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('WhatsApp Cloud API Integration');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    // Build prefilled WhatsApp message
    const waText = encodeURIComponent(
      `Hello Movin Juma (Pansoft Technologies),\n\n` +
      `My name is ${name}.\n` +
      `Contact Phone: ${phone || 'Not provided'}\n` +
      `Email: ${email || 'Not provided'}\n` +
      `Service of Interest: ${service}\n\n` +
      `Message:\n${message}\n\n` +
      `Sent via Pansoft Technologies Official Portal`
    );

    window.open(`https://wa.me/${PANSOFT_PROFILE.phoneIntl.replace('+', '')}?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/60 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <Phone className="w-4 h-4" />
            Connect With Pansoft Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch With Movin Juma & Engineering Team
          </h2>
          <p className="text-slate-300 mt-3 text-base">
            Reach out for software design contracts, WhatsApp Business Cloud API implementations, 
            or Housika marketplace partnership inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Company Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-400" />
                Official Corporate Office
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Direct Phone & WhatsApp</span>
                    <a 
                      href={`tel:${PANSOFT_PROFILE.phoneRaw}`} 
                      className="font-bold text-sm text-white hover:text-emerald-400 transition-colors font-mono"
                    >
                      {PANSOFT_PROFILE.phone} ({PANSOFT_PROFILE.phoneRaw})
                    </a>
                    <span className="text-emerald-400 block mt-0.5 font-medium">WhatsApp Active & Available</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Executive Email</span>
                    <a 
                      href={`mailto:${PANSOFT_PROFILE.email}`} 
                      className="font-bold text-sm text-white hover:text-cyan-400 transition-colors"
                    >
                      {PANSOFT_PROFILE.email}
                    </a>
                    <span className="text-slate-500 block mt-0.5">Prompt executive response within 24 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 text-slate-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Postal & Physical Base</span>
                    <strong className="text-white block">{PANSOFT_PROFILE.postalAddress}</strong>
                    <span className="text-slate-400 block">{PANSOFT_PROFILE.physicalAddress}</span>
                    <span className="text-slate-400 block">Bungoma Town, Western Kenya</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Operational Hours</span>
                    <span className="text-white font-medium block">Monday – Saturday: 8:00 AM – 6:00 PM (EAT)</span>
                    <span className="text-slate-500 block">WhatsApp emergency dev hotline: 24/7</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-slate-900">
                <a
                  href={`https://wa.me/${PANSOFT_PROFILE.phoneIntl.replace('+', '')}?text=Hello%20Movin%20Juma,%20I%20am%20contacting%20you%20directly%20from%20pansoft.co.ke`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 flex items-center justify-center gap-2 text-sm shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Instant WhatsApp to Movin Juma
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-1">
              Send a Direct Project Inquiry
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your requirement below. You will be instantly connected with our WhatsApp dispatch or email desk.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Samuel Wasike"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0712 345 678"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. samuel@example.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Service of Interest
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="WhatsApp Cloud API Integration">WhatsApp Cloud API Integration</option>
                    <option value="Housika Property Listing or Rental">Housika Property Listing or Rental</option>
                    <option value="Housika Landlord Receipt Tool">Housika Landlord Receipt Tool</option>
                    <option value="Custom Web / Mobile Application">Custom Web / Mobile Application</option>
                    <option value="Cloudflare Workers Edge Architecture">Cloudflare Workers Edge Architecture</option>
                    <option value="Software Maintenance & SLA">Software Maintenance & SLA</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Project Brief or Inquiry Details *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your requirements, timeline, or property details..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center gap-2 text-sm shadow-lg shadow-emerald-500/20 transition-all"
              >
                <Send className="w-4 h-4" />
                Submit via WhatsApp Hotline
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Your message was drafted! WhatsApp has opened in a new tab to send directly to Movin Juma.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
