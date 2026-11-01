import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  CheckCheck, 
  ShieldCheck, 
  PhoneCall, 
  FileText, 
  Sparkles, 
  Check, 
  BellRing,
  ArrowRight
} from 'lucide-react';
import { PANSOFT_PROFILE } from '../data/company';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  buttons?: string[];
  receiptPreview?: {
    receiptNo: string;
    amount: string;
    property: string;
  };
}

export const WhatsAppApiShowcase: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<'receipt' | 'rental-alert' | 'property-inquiry'>('receipt');

  const scenarioConversations: Record<'receipt' | 'rental-alert' | 'property-inquiry', ChatMessage[]> = {
    'receipt': [
      {
        id: '1',
        sender: 'bot',
        text: `Jambo Brian! 👋 Your payment of KES 14,500 for *Sunrise Heights Apt 4B* (Bungoma) has been recorded by your Landlord via Housika.`,
        time: '10:14 AM'
      },
      {
        id: '2',
        sender: 'bot',
        text: `Here is your official verified digital e-receipt:`,
        time: '10:14 AM',
        receiptPreview: {
          receiptNo: 'HSK-REC-2026-9281',
          amount: 'KES 14,500',
          property: 'Apt 4B, Sunrise Heights'
        },
        buttons: ['Download PDF Receipt', 'Contact Landlord', 'View Tenant Ledger']
      },
      {
        id: '3',
        sender: 'user',
        text: 'Asante sana! Receipt saved to my phone.',
        time: '10:16 AM'
      }
    ],
    'rental-alert': [
      {
        id: '4',
        sender: 'bot',
        text: `*Housika Rent Reminder Notice* 🏠\nHello Mercy, rent for Unit 2C at Hillview Court is due on the 5th of this month (KES 12,000).`,
        time: '09:00 AM',
        buttons: ['Pay via M-Pesa STK Push', 'Request 3-Day Grace Period', 'Talk to Landlord']
      },
      {
        id: '5',
        sender: 'user',
        text: 'Pay via M-Pesa STK Push',
        time: '09:02 AM'
      },
      {
        id: '6',
        sender: 'bot',
        text: `Prompt sent to your Safaricom number 07XX***666. Please enter your M-Pesa PIN on your phone to complete payment.`,
        time: '09:02 AM'
      }
    ],
    'property-inquiry': [
      {
        id: '7',
        sender: 'user',
        text: 'Hi Housika, looking for a 2-bedroom rental apartment in Bungoma near Kanduyi.',
        time: '02:30 PM'
      },
      {
        id: '8',
        sender: 'bot',
        text: `Habari! Here are 3 verified properties matching your budget in Kanduyi, Bungoma:\n\n1. *Sunrise Court 4B* - KES 14,500/mo (Borehole & Parking)\n2. *Kanduyi Green View* - KES 12,000/mo\n3. *Hillcrest Haven* - KES 15,000/mo`,
        time: '02:30 PM',
        buttons: ['Book Viewing for 4B', 'View Photos & Map', 'Chat with Landlord']
      }
    ]
  };

  return (
    <section id="whatsapp-solutions" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <MessageSquare className="w-4 h-4" />
            Conversational Commerce & Workflow Automation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            WhatsApp Business Solutions & Automation
          </h2>
          <p className="text-slate-300 mt-3 text-base">
            Pansoft Technologies develops high-reliability automated WhatsApp messaging systems for 
            real estate marketplaces, rental invoice dispatches, and enterprise Kenyan businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Commercial Features & Standards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedScenario('receipt')}
                className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                  selectedScenario === 'receipt'
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                1. Automated Receipt Dispatch
              </button>
              <button
                onClick={() => setSelectedScenario('rental-alert')}
                className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                  selectedScenario === 'rental-alert'
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                2. Rent Invoicing & STK Push
              </button>
              <button
                onClick={() => setSelectedScenario('property-inquiry')}
                className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                  selectedScenario === 'property-inquiry'
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                3. Tenant Lead Discovery
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Why WhatsApp Automation Powers Housika & Kenyan Commerce
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Over 95% of active smartphone users in Kenya prefer conducting daily commerce through WhatsApp. 
                Pansoft Technologies builds dedicated systems that allow landlords on <strong className="text-white">Housika</strong> to dispatch instant payment receipts, send timely reminders, and respond to tenant inquiries seamlessly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-white block font-semibold">Utility & Transactional Messages</strong>
                    <span className="text-slate-400">Strictly relevant transaction receipts and lease notices.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-white block font-semibold">Immediate Opt-Out ("STOP")</strong>
                    <span className="text-slate-400">Recipients maintain full control over message delivery.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-white block font-semibold">Kenya Data Protection Act 2019</strong>
                    <span className="text-slate-400">Zero customer phone harvesting; rigorous data privacy.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-white block font-semibold">Instant Webhook Sync</strong>
                    <span className="text-slate-400">Real-time delivery status, PDF attachments, and M-Pesa linkage.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={`https://wa.me/${PANSOFT_PROFILE.phoneIntl.replace('+', '')}?text=Hello%20Movin%20Juma,%20I%20would%20like%20to%20inquire%20about%20Pansoft%20Technologies%20software%20and%20messaging%20solutions.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 text-xs transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                Inquire About WhatsApp Integration
              </a>
              <span className="text-xs text-slate-400">
                Pansoft Business Line: <strong className="text-white">{PANSOFT_PROFILE.phone}</strong>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] bg-slate-950 rounded-[40px] p-3 border-4 border-slate-700 shadow-2xl relative">
              {/* Speaker / Camera Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-800 rounded-full z-20" />

              {/* Screen container */}
              <div className="bg-[#0b141a] rounded-[32px] overflow-hidden flex flex-col h-[520px] text-xs">
                {/* WhatsApp Chat Header */}
                <div className="bg-[#202c33] text-white px-4 py-3 pt-6 flex items-center gap-2.5 border-b border-[#2a3942]">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-sm">
                    P
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-xs truncate">Pansoft &bull; Housika</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </div>
                    <span className="text-[10px] text-emerald-400 block truncate">Official Business Account</span>
                  </div>
                  <PhoneCall className="w-4 h-4 text-[#aebac1]" />
                </div>

                {/* Chat Feed */}
                <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-[#0b141a] bg-opacity-95">
                  <div className="text-center my-1">
                    <span className="text-[9px] bg-[#182229] text-[#8696a0] px-2.5 py-0.5 rounded-md inline-block">
                      🔒 End-to-end encrypted messaging
                    </span>
                  </div>

                  {scenarioConversations[selectedScenario].map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.sender === 'user' ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-xl p-2.5 shadow-sm text-slate-100 ${
                          msg.sender === 'user'
                            ? 'bg-[#005c4b] rounded-tr-none'
                            : 'bg-[#202c33] rounded-tl-none'
                        }`}
                      >
                        <p className="whitespace-pre-line text-[11px] leading-relaxed">
                          {msg.text}
                        </p>

                        {/* Embedded PDF Receipt card if present */}
                        {msg.receiptPreview && (
                          <div className="mt-2 p-2 rounded-lg bg-[#111b21] border border-[#2a3942] flex items-center gap-2">
                            <div className="p-1.5 rounded bg-emerald-950 text-emerald-400">
                              <FileText className="w-4 h-4" />
                            </div>
                            <div className="text-[10px] flex-1">
                              <span className="font-bold block text-white">{msg.receiptPreview.receiptNo}.pdf</span>
                              <span className="text-slate-400">{msg.receiptPreview.amount} &bull; Verified</span>
                            </div>
                          </div>
                        )}

                        {/* Interactive Buttons */}
                        {msg.buttons && (
                          <div className="mt-2 space-y-1 pt-1 border-t border-[#2a3942]">
                            {msg.buttons.map((btn, bIdx) => (
                              <div
                                key={bIdx}
                                className="w-full text-center py-1 px-2 rounded bg-[#111b21] text-[10px] text-cyan-400 font-semibold border border-[#2a3942] cursor-pointer hover:bg-[#182229]"
                              >
                                {btn}
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-[#8696a0]">
                          <span>{msg.time}</span>
                          {msg.sender === 'user' && (
                            <CheckCheck className="w-3 h-3 text-cyan-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Input Field */}
                <div className="bg-[#202c33] p-2 flex items-center gap-2 border-t border-[#2a3942]">
                  <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5 text-[11px] text-[#8696a0]">
                    Type a message...
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#00a884] text-slate-950 flex items-center justify-center">
                    <Send className="w-3.5 h-3.5 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
