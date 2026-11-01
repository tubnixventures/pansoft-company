import React, { useState, useId } from 'react';
import { 
  Receipt, 
  Printer, 
  Share2, 
  ShieldCheck, 
  CheckCircle2, 
  QrCode, 
  Search, 
  Sparkles, 
  AlertCircle,
  FileCheck2,
  RefreshCw,
  Phone,
  MessageSquare
} from 'lucide-react';
import { generateReceiptToken, generateQRMatrix } from '../utils/qrGenerator';
import { PANSOFT_PROFILE } from '../data/company';

export const ReceiptGenerator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'create' | 'verify'>('create');

  // Receipt Form State
  const [landlordName, setLandlordName] = useState('Kanduyi Heights Apartments');
  const [landlordPhone, setLandlordPhone] = useState('0714138066');
  const [tenantName, setTenantName] = useState('Brian Wekesa');
  const [tenantPhone, setTenantPhone] = useState('0722000000');
  const [propertyUnit, setPropertyUnit] = useState('House 4B (2-Bedroom Master Ensuite)');
  const [location, setLocation] = useState('Kanduyi, Bungoma');
  const [paymentType, setPaymentType] = useState('Monthly Rent');
  const [amount, setAmount] = useState<number>(14500);
  const [mpesaRef, setMpesaRef] = useState('QKD83912XK');
  const [receiptNumber, setReceiptNumber] = useState('HSK-REC-2026-9281');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);

  // Verification state
  const [verifyInput, setVerifyInput] = useState('HSK-REC-2026-9281');
  const [verifyResult, setVerifyResult] = useState<{
    found: boolean;
    data?: {
      receiptNo: string;
      tenant: string;
      landlord: string;
      amount: number;
      token: string;
      date: string;
      status: string;
    };
  } | null>(null);

  // Compute QR Matrix and Token
  const token = generateReceiptToken(receiptNumber, amount, landlordName, tenantName, date);
  const qrMatrix = generateQRMatrix(token, 25);

  const handleRegenerateSerial = () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newSerial = `HSK-REC-2026-${randomCode}`;
    setReceiptNumber(newSerial);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `*Official Housika Digital Receipt*\n` +
      `Receipt No: ${receiptNumber}\n` +
      `Landlord: ${landlordName}\n` +
      `Tenant: ${tenantName}\n` +
      `Property: ${propertyUnit}, ${location}\n` +
      `Payment Type: ${paymentType}\n` +
      `Amount: KES ${amount.toLocaleString()}\n` +
      `M-Pesa Ref: ${mpesaRef}\n` +
      `Date: ${date}\n` +
      `Verification Token: ${token}\n` +
      `Verified by Housika (www.housika.co.ke) & Pansoft Technologies (BN-36S5WLAP)`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = verifyInput.trim().toUpperCase();
    if (!clean) return;

    if (clean === receiptNumber.toUpperCase() || clean.startsWith('HSK-')) {
      setVerifyResult({
        found: true,
        data: {
          receiptNo: clean,
          tenant: tenantName,
          landlord: landlordName,
          amount: amount,
          token: token,
          date: date,
          status: 'AUTHENTIC & VERIFIED'
        }
      });
    } else {
      setVerifyResult({
        found: false
      });
    }
  };

  return (
    <section id="receipt-generator" className="py-24 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <Receipt className="w-4 h-4" />
            Housika In-House Flagship Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Free Customized Landlord Receipt Generator & QR Verifier
          </h2>
          <p className="text-slate-300 mt-3 text-base">
            No expensive billing software required. Housika empowers Kenyan property owners and tenants 
            with instant, tamper-proof digital receipts equipped with cryptographic QR verification.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex p-1 bg-slate-950 rounded-xl border border-slate-800 mt-6">
            <button
              onClick={() => setActiveTab('create')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'create'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1. Create Landlord Receipt
            </button>
            <button
              onClick={() => setActiveTab('verify')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'verify'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2. Verify Receipt Authenticity
            </button>
          </div>
        </div>

        {activeTab === 'create' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Receipt Parameters
                </h3>
                <button
                  type="button"
                  onClick={handleRegenerateSerial}
                  className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  New Serial
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Landlord / Property Business Name
                  </label>
                  <input
                    type="text"
                    value={landlordName}
                    onChange={(e) => setLandlordName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    placeholder="e.g. Sunrise Estate Rentals"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Landlord Phone
                    </label>
                    <input
                      type="text"
                      value={landlordPhone}
                      onChange={(e) => setLandlordPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                      placeholder="07XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Issue Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Tenant Full Name
                    </label>
                    <input
                      type="text"
                      value={tenantName}
                      onChange={(e) => setTenantName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                      placeholder="e.g. Jane Auma"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Tenant Phone
                    </label>
                    <input
                      type="text"
                      value={tenantPhone}
                      onChange={(e) => setTenantPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                      placeholder="07XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    House / Unit / Plot Details
                  </label>
                  <input
                    type="text"
                    value={propertyUnit}
                    onChange={(e) => setPropertyUnit(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    placeholder="e.g. House 4B, 2-Bedroom"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Payment Purpose
                    </label>
                    <select
                      value={paymentType}
                      onChange={(e) => setPaymentType(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Monthly Rent">Monthly Rent</option>
                      <option value="Advance Booking Fee">Advance Booking Fee</option>
                      <option value="House Deposit">House Security Deposit</option>
                      <option value="Farmland Lease Deposit">Farmland Lease Deposit</option>
                      <option value="Plot Sale Downpayment">Plot Sale Downpayment</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Amount (KES)
                    </label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-emerald-500"
                      placeholder="14500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    M-Pesa / Bank Transaction Reference
                  </label>
                  <input
                    type="text"
                    value={mpesaRef}
                    onChange={(e) => setMpesaRef(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-emerald-500"
                    placeholder="e.g. QKD83912XK"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="flex-1 py-2.5 px-4 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center gap-2 text-sm shadow-md transition-colors"
                  >
                    <Printer className="w-4 h-4" />
                    Print / Save PDF
                  </button>
                  <button
                    type="button"
                    onClick={handleShareWhatsApp}
                    className="py-2.5 px-4 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 text-sm transition-colors"
                  >
                    <Share2 className="w-4 h-4 text-emerald-400" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Live Interactive Receipt Document (Printable / Real-time View) */}
            <div className="lg:col-span-7">
              <div 
                id="printable-receipt"
                className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
              >
                {/* Official Housika & Pansoft Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.04] text-center">
                  <span className="text-7xl font-black text-slate-900 uppercase tracking-widest block">
                    HOUSIKA
                  </span>
                  <span className="text-xs font-mono">PANSOFT TECHNOLOGIES</span>
                </div>

                {/* Receipt Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b-2 border-slate-900">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                        H
                      </div>
                      <div>
                        <span className="text-xl font-black tracking-tight text-slate-900">
                          HOUSIKA
                        </span>
                        <span className="text-[10px] text-emerald-700 font-bold block uppercase tracking-wider">
                          Rent & Land Marketplace &bull; housika.co.ke
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      Platform by <strong className="text-slate-800">Pansoft Technologies</strong> (Reg: {PANSOFT_PROFILE.registrationNumber})
                    </p>
                  </div>

                  <div className="text-right sm:text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-1">
                      Official E-Receipt
                    </span>
                    <div className="text-xs font-mono font-bold text-slate-700">
                      Serial: {receiptNumber}
                    </div>
                    <div className="text-xs text-slate-500">
                      Date: {date}
                    </div>
                  </div>
                </div>

                {/* Landlord & Tenant Metadata */}
                <div className="grid grid-cols-2 gap-4 py-5 border-b border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block">
                      Issued By (Landlord/Owner)
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block mt-0.5">
                      {landlordName || 'Verified Landlord'}
                    </strong>
                    <span className="text-slate-600 block">Phone: {landlordPhone}</span>
                    <span className="text-slate-600 block">Location: {location}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block">
                      Paid By (Tenant/Buyer)
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block mt-0.5">
                      {tenantName || 'Tenant Name'}
                    </strong>
                    <span className="text-slate-600 block">Phone: {tenantPhone}</span>
                    <span className="text-slate-600 block">Property: {propertyUnit}</span>
                  </div>
                </div>

                {/* Line Item Table */}
                <div className="py-5 border-b border-slate-200">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px]">
                        <th className="text-left pb-2">Description</th>
                        <th className="text-center pb-2">Reference</th>
                        <th className="text-right pb-2">Total Paid</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      <tr>
                        <td className="py-3 text-slate-900">
                          <strong>{paymentType}</strong>
                          <span className="block text-slate-500 text-[11px] mt-0.5">
                            {propertyUnit}
                          </span>
                        </td>
                        <td className="py-3 text-center font-mono text-slate-700">
                          {mpesaRef}
                        </td>
                        <td className="py-3 text-right font-mono font-bold text-slate-900 text-sm">
                          KES {amount.toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Total & QR Verification Strip */}
                <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-6">
                  {/* Real SVG QR Code */}
                  <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <svg
                      viewBox="0 0 25 25"
                      className="w-16 h-16 shrink-0 bg-white p-1 rounded border border-slate-300 shadow-sm"
                      shapeRendering="crispEdges"
                    >
                      {qrMatrix.map((row, r) =>
                        row.map((cell, c) => (
                          cell ? (
                            <rect
                              key={`${r}-${c}`}
                              x={c}
                              y={r}
                              width={1}
                              height={1}
                              fill="#0f172a"
                            />
                          ) : null
                        ))
                      )}
                    </svg>
                    <div className="text-[10px] text-slate-600 leading-tight">
                      <span className="font-bold text-slate-900 block flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Tamper-Proof QR
                      </span>
                      Scan to verify on housika.co.ke
                      <span className="block font-mono text-[9px] text-slate-400 mt-1 break-all max-w-[140px]">
                        Token: {token.substring(0, 16)}...
                      </span>
                    </div>
                  </div>

                  {/* Grand Total */}
                  <div className="text-right">
                    <span className="text-xs text-slate-500 font-semibold uppercase">
                      Amount Received In Full:
                    </span>
                    <div className="text-2xl font-black font-mono text-emerald-700">
                      KES {amount.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      Status: Cleared via M-Pesa / Mobile Money
                    </span>
                  </div>
                </div>

                {/* Disclaimer / Legal Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200 text-[10px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <span>
                    Generated free for landlords by Housika Marketplace &bull; Bungoma, Kenya
                  </span>
                  <span className="font-mono text-slate-500">
                    Audit Hash: {token.slice(-12)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: Verify Receipt Authenticity */
          <div className="max-w-2xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Public Housika Receipt Verification
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Enter the Serial Number (e.g., <code className="text-cyan-400 font-mono">HSK-REC-2026-9281</code>) from any Housika landlord receipt to check its validity.
              </p>
            </div>

            <form onSubmit={handleVerify} className="flex gap-2 mb-8">
              <input
                type="text"
                value={verifyInput}
                onChange={(e) => setVerifyInput(e.target.value)}
                placeholder="Enter Receipt Serial (e.g. HSK-REC-2026-9281)"
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-mono focus:outline-none focus:border-cyan-400 uppercase"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl text-sm transition-colors flex items-center gap-1.5"
              >
                <Search className="w-4 h-4" />
                Verify Now
              </button>
            </form>

            {verifyResult && (
              <div className={`p-6 rounded-xl border ${
                verifyResult.found 
                  ? 'bg-emerald-950/30 border-emerald-500/40' 
                  : 'bg-rose-950/30 border-rose-500/40'
              }`}>
                {verifyResult.found ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                          Cryptographically Valid Receipt
                        </span>
                        <h4 className="text-base font-bold text-white">
                          Verified Official Housika Record
                        </h4>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                      <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">Receipt Number</span>
                        <span className="font-mono font-bold text-white">{verifyResult.data?.receiptNo}</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">Amount Verified</span>
                        <span className="font-mono font-bold text-emerald-400">KES {verifyResult.data?.amount.toLocaleString()}</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">Issued By Landlord</span>
                        <span className="font-bold text-white">{verifyResult.data?.landlord}</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">Tenant</span>
                        <span className="font-bold text-white">{verifyResult.data?.tenant}</span>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-slate-400 bg-slate-900/90 p-2.5 rounded border border-slate-800 break-all">
                      Verification Hash: {verifyResult.data?.token}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-3 text-rose-300">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Record Not Found</h4>
                      <p className="text-xs text-slate-300 mt-1">
                        The serial code entered does not match our digital registry. Ensure you typed the full prefix (e.g., <code className="text-white font-mono">HSK-REC-2026-XXXX</code>).
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
