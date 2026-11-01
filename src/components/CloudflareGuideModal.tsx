import React, { useState } from 'react';
import { 
  X, 
  CloudLightning, 
  Copy, 
  Check, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  ExternalLink,
  Cpu,
  Globe
} from 'lucide-react';

interface CloudflareGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CloudflareGuideModal: React.FC<CloudflareGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedWrangler, setCopiedWrangler] = useState(false);
  const [copiedCommands, setCopiedCommands] = useState(false);

  if (!isOpen) return null;

  const wranglerConfig = `name = "pansoft-technologies"
compatibility_date = "2024-01-01"
pages_build_output_dir = "dist"

[site]
bucket = "./dist"

# Cloudflare Edge Security & Production Headers
[[headers]]
for = "/*"
[headers.values]
X-Frame-Options = "SAMEORIGIN"
X-Content-Type-Options = "nosniff"
Referrer-Policy = "strict-origin-when-cross-origin"
Permissions-Policy = "geolocation=(), microphone=()"
`;

  const commands = `# 1. Build the static client bundle (Vite + TypeScript + Tailwind CSS)
npm run build

# 2. Deploy directly to Cloudflare Pages / Workers Edge (Zero Backend required)
npx wrangler pages deploy dist --project-name=pansoft-technologies

# 3. Cloudflare assigns your live URL instantly with free automated SSL & global CDN`;

  const copyText = (text: string, type: 'wrangler' | 'commands') => {
    navigator.clipboard.writeText(text);
    if (type === 'wrangler') {
      setCopiedWrangler(true);
      setTimeout(() => setCopiedWrangler(false), 2000);
    } else {
      setCopiedCommands(true);
      setTimeout(() => setCopiedCommands(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
            <CloudLightning className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Cloudflare Edge & Zero Backend Architecture
            </h3>
            <p className="text-xs text-slate-400">
              High-performance static bundle deployment for Pansoft Technologies
            </p>
          </div>
        </div>

        <div className="space-y-6 text-xs text-slate-300">
          <p className="leading-relaxed text-sm">
            As requested by <strong className="text-white">Movin Juma</strong>, this entire web application is built with 
            <strong className="text-emerald-400"> absolutely zero backend server overhead</strong>. It runs 100% client-side with 
            TypeScript, modern reactive UI, and Tailwind CSS, deployable on Cloudflare Workers / Cloudflare Pages in seconds.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <Globe className="w-4 h-4 text-cyan-400 mb-1" />
              <strong className="text-white block">300+ Edge Locations</strong>
              <span className="text-[11px] text-slate-400">Sub-10ms response time for Kenyan visitors in Bungoma and Nairobi.</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
              <strong className="text-white block">DDoS & SSL Included</strong>
              <span className="text-[11px] text-slate-400">Automated SSL certificate generation ensures secure HTTPS encryption.</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <Cpu className="w-4 h-4 text-amber-400 mb-1" />
              <strong className="text-white block">Zero Server Maintenance</strong>
              <span className="text-[11px] text-slate-400">No database vulnerabilities, no server crashes, 99.99% uptime.</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-400" />
                Single-Command Cloudflare Deployment
              </span>
              <button
                onClick={() => copyText(commands, 'commands')}
                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
              >
                {copiedCommands ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedCommands ? 'Copied' : 'Copy Commands'}
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 font-mono text-[11px] text-cyan-300 border border-slate-800 overflow-x-auto">
              {commands}
            </pre>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-400" />
                wrangler.toml (Cloudflare Pages Configuration)
              </span>
              <button
                onClick={() => copyText(wranglerConfig, 'wrangler')}
                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
              >
                {copiedWrangler ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedWrangler ? 'Copied' : 'Copy wrangler.toml'}
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 font-mono text-[11px] text-emerald-300 border border-slate-800 overflow-x-auto">
              {wranglerConfig}
            </pre>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
