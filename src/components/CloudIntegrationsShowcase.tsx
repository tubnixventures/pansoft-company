import React, { useState } from 'react';
import { 
  CloudLightning, 
  Server, 
  Database, 
  Workflow, 
  Check, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Send,
  CheckCheck,
  FileText,
  PhoneCall,
  Activity,
  Layers,
  Lock,
  Globe
} from 'lucide-react';
import { PANSOFT_PROFILE } from '../data/company';

export const CloudIntegrationsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cloudflare' | 'gcp' | 'azure' | 'messaging'>('cloudflare');

  return (
    <section id="cloud-integrations" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Workflow className="w-4 h-4" />
            Multi-Cloud & API Integration Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise Cloud Architecture & API Services
          </h2>
          <p className="text-slate-300 mt-3 text-base">
            We build and operate modern cloud systems across Cloudflare, Google Cloud, and Microsoft Azure, 
            and offer enterprise API integrations &mdash; including automated messaging as a service &mdash; for platforms like Housika and enterprise clients.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('cloudflare')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'cloudflare'
                ? 'bg-amber-500 text-slate-950 shadow-lg font-bold'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <CloudLightning className="w-4 h-4" />
            Cloudflare Specialist
          </button>
          <button
            onClick={() => setActiveTab('gcp')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'gcp'
                ? 'bg-blue-500 text-white shadow-lg font-bold'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Server className="w-4 h-4" />
            Google Cloud Run & Firestore
          </button>
          <button
            onClick={() => setActiveTab('azure')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'azure'
                ? 'bg-indigo-500 text-white shadow-lg font-bold'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Database className="w-4 h-4" />
            Azure & Cosmos DB Expert
          </button>
          <button
            onClick={() => setActiveTab('messaging')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'messaging'
                ? 'bg-emerald-500 text-slate-950 shadow-lg font-bold'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Workflow className="w-4 h-4" />
            Messaging & WhatsApp as a Service
          </button>
        </div>

        {/* Tab 1: Cloudflare */}
        {activeTab === 'cloudflare' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase font-mono font-bold text-amber-400 tracking-wider">
                Edge Computing & Global CDN
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Cloudflare Workers & Serverless Edge Specialists
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We engineer zero-backend static web applications and ultra-fast edge microservices hosted across Cloudflare's global edge network spanning over 300 cities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">Sub-10ms Edge Latency</strong>
                  <span className="text-slate-400 text-xs">Instant page loads for mobile users across Kenya and East Africa.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">DDoS & SSL Protection</strong>
                  <span className="text-slate-400 text-xs">Automated HTTPS and enterprise web application firewall (WAF).</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">Zero Backend Overhead</strong>
                  <span className="text-slate-400 text-xs">No heavy servers to maintain, crash, or reboot. 99.99% availability.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">Single-Command Deployments</strong>
                  <span className="text-slate-400 text-xs">Wrangler CI/CD integration with automated edge branch previewing.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-6 border border-slate-800 font-mono text-xs text-slate-300 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-amber-400">
                <span>cloudflare-worker.ts</span>
                <span className="text-slate-500">Edge Runtime</span>
              </div>
              <pre className="text-amber-300/90 leading-relaxed text-[11px] overflow-x-auto">
{`export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Sub-10ms edge routing
    return new Response(
      "Pansoft Edge: Healthy", 
      { status: 200 }
    );
  }
};`}
              </pre>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Status: Deployed 300+ Cities</span>
                <span className="text-emerald-400">Latency: 8ms</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Google Cloud */}
        {activeTab === 'gcp' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase font-mono font-bold text-blue-400 tracking-wider">
                Google Cloud Platform Solutions
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Google Cloud Run & Cloud Firestore Architecture
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We design and scale containerized applications on Google Cloud Run with scale-to-zero efficiency, paired with real-time, low-latency NoSQL data structures on Google Cloud Firestore.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">Serverless Containers</strong>
                  <span className="text-slate-400 text-xs">Deploy Docker containers seamlessly on Cloud Run with automatic concurrency.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">Cloud Firestore NoSQL</strong>
                  <span className="text-slate-400 text-xs">Real-time live synchronization for rental units, ledgers, and transactions.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">IAM & Security Hardening</strong>
                  <span className="text-slate-400 text-xs">Granular role-based security rules ensuring Kenya DPA compliance.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">Cost-Optimized Scaling</strong>
                  <span className="text-slate-400 text-xs">Zero idle server bills; pay strictly for executed CPU milliseconds.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-6 border border-slate-800 font-mono text-xs text-slate-300 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-blue-400">
                <span>gcp-cloudrun-deploy.sh</span>
                <span className="text-slate-500">Google Cloud</span>
              </div>
              <pre className="text-blue-300/90 leading-relaxed text-[11px] overflow-x-auto">
{`gcloud run deploy pansoft-api \\
  --image gcr.io/pansoft/service:latest \\
  --platform managed \\
  --region europe-west1 \\
  --allow-unauthenticated \\
  --min-instances 0 \\
  --max-instances 50`}
              </pre>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Firestore DB: multi-region</span>
                <span className="text-emerald-400">Status: Active</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Azure & Cosmos DB */}
        {activeTab === 'azure' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase font-mono font-bold text-indigo-400 tracking-wider">
                Microsoft Azure Cloud
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Azure Architecture & Cosmos DB Global Data
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                For corporate clients requiring strict enterprise SLAs and multi-region data replication, we implement Microsoft Azure cloud environments powered by Azure Cosmos DB.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">Global Multi-Model DB</strong>
                  <span className="text-slate-400 text-xs">Azure Cosmos DB with turn-key multi-region data replication.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">Single-Digit MS Latency</strong>
                  <span className="text-slate-400 text-xs">SLA-backed 99.999% high availability and guaranteed read/write speed.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">Azure App Services</strong>
                  <span className="text-slate-400 text-xs">Enterprise web apps with integrated Microsoft Entra ID authentication.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">Disaster Recovery</strong>
                  <span className="text-slate-400 text-xs">Geo-redundant storage and automated point-in-time database restoration.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-6 border border-slate-800 font-mono text-xs text-slate-300 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-indigo-400">
                <span>azure-cosmos.config.json</span>
                <span className="text-slate-500">Azure Resource</span>
              </div>
              <pre className="text-indigo-300/90 leading-relaxed text-[11px] overflow-x-auto">
{`{
  "databaseAccount": "pansoft-cosmos",
  "locations": ["South Africa North", "West Europe"],
  "consistencyPolicy": "Session",
  "enableAutomaticFailover": true,
  "sla": "99.999%"
}`}
              </pre>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>SLA: 99.999% uptime</span>
                <span className="text-emerald-400">Status: Healthy</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Messaging & WhatsApp as a Service */}
        {activeTab === 'messaging' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase font-mono font-bold text-emerald-400 tracking-wider">
                Enterprise Messaging & Integrations
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Business API & WhatsApp Messaging as a Service
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                As part of our digital integration suite, we integrate automated business messaging solutions for transactional billing, digital receipt delivery, rent reminders, and tenant inquiries for platforms like <strong className="text-white">Housika</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">Transactional Receipts</strong>
                  <span className="text-slate-400 text-xs">Automated PDF delivery of rent and booking confirmations to tenants.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">M-Pesa STK Push Linkage</strong>
                  <span className="text-slate-400 text-xs">Instant payment triggers and automated ledger reconciliation.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">Opt-In & STOP Control</strong>
                  <span className="text-slate-400 text-xs">Recipients maintain full control with instant STOP unsubscribe handling.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block text-xs font-semibold mb-1">Kenya DPA 2019 Compliant</strong>
                  <span className="text-slate-400 text-xs">Zero unsolicited bulk spam; end-to-end data privacy respected.</span>
                </div>
              </div>
            </div>

            {/* Mobile Chat Snippet */}
            <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xs text-white">
                    P
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Pansoft Messaging Service</span>
                    <span className="text-[10px] text-slate-400">Automated Receipt Dispatch</span>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">
                  Active Service
                </span>
              </div>

              <div className="bg-[#202c33] p-3 rounded-xl text-xs text-slate-100 space-y-2">
                <p className="text-[11px] leading-relaxed">
                  Jambo Brian! 👋 Your payment of <strong>KES 14,500</strong> for <em>Sunrise Heights Apt 4B</em> has been verified.
                </p>
                <div className="p-2 rounded bg-[#111b21] border border-slate-700 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] text-white">HSK-REC-2026-9281.pdf &bull; Verified</span>
                </div>
              </div>

              <div className="pt-2 text-[10px] text-slate-400 flex items-center justify-between">
                <span>Reply STOP to opt out</span>
                <span className="font-mono text-emerald-400">Delivered</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
