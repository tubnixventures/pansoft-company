import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2,
  Server,
  CloudLightning,
  Database
} from 'lucide-react';
import { PANSOFT_PROFILE } from '../data/company';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Custom Web & Mobile Application');
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
      `Project Brief:\n${message}\n\n` +
      `Sent via Pansoft Technologies Official Portal`
    );

    window.open(`https://wa.me/${PANSOFT_PROFILE.phoneIntl.replace('+', '')}?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/60 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Phone className="w-4 h-4" />
            Connect With Pansoft Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Consult With Movin Juma & Engineering Team
          </h2>
          <p className="text-slate-300 mt-3 text-base">
            Reach out for custom software design, Cloudflare edge solutions, Google Cloud Run & Firestore, 
            Azure Cosmos DB architecture, or Housika platform inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Company Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-cyan-400" />
                Corporate Headquarters
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Direct Telephone Lines</span>
                    <a 
                      href={`tel:${PANSOFT_PROFILE.phoneRaw}`} 
                      className="font-bold text-sm text-white hover:text-cyan-400 transition-colors font-mono"
                    >
                      {PANSOFT_PROFILE.phone} ({PANSOFT_PROFILE.phoneRaw})
                    </a>
                    <span className="text-slate-400 block mt-0.5 font-medium">Direct line to executive office</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 text-emerald-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Executive Email</span>
                    <a 
                      href={`mailto:${PANSOFT_PROFILE.email}`} 
                      className="font-bold text-sm text-white hover:text-emerald-400 transition-colors"
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
                    <span className="text-slate-400 block text-[11px]">Postal & Physical Office</span>
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
                    <span className="text-slate-500 block">Emergency enterprise SLA support: 24/7</span>
                  </div>
                </div>
              </div>

              {/* Direct Communication Action */}
              <div className="pt-4 border-t border-slate-900">
                <a
                  href={`https://wa.me/${PANSOFT_PROFILE.phoneIntl.replace('+', '')}?text=Hello%20Movin%20Juma,%20I%20am%20contacting%20Pansoft%20Technologies%20for%20software%20and%20cloud%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 flex items-center justify-center gap-2 text-sm shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Message Our Team ({PANSOFT_PROFILE.phone})
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-1">
              Send a Project Brief or Service Inquiry
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Specify your project scope or engineering requirement. Our team will review and reply promptly.
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
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Phone Number
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0712 345 678"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
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
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Service Area of Interest
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Custom Web & Mobile Application">Custom Web & Mobile Application</option>
                    <option value="Cloudflare Edge & Serverless Deployment">Cloudflare Edge & Serverless Deployment</option>
                    <option value="Google Cloud Run & Cloud Firestore">Google Cloud Run & Cloud Firestore</option>
                    <option value="Microsoft Azure & Cosmos DB Solutions">Microsoft Azure & Cosmos DB Solutions</option>
                    <option value="Enterprise API & WhatsApp Messaging as a Service">Enterprise API & WhatsApp Messaging as a Service</option>
                    <option value="Housika Property Listing & Landlord Tools">Housika Property Listing & Landlord Tools</option>
                    <option value="Software Maintenance & SLA Support">Software Maintenance & SLA Support</option>
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
                  placeholder="Outline your application requirements, timeline, or cloud infrastructure needs..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 flex items-center justify-center gap-2 text-sm shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Submit Project Inquiry
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-xs text-cyan-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Inquiry prepared! Your communication window has opened to connect with Movin Juma.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
