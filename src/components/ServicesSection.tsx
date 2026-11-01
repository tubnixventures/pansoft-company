import React from 'react';
import { 
  Code2, 
  CloudLightning, 
  Server, 
  Database, 
  Workflow, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  Cpu
} from 'lucide-react';
import { CORE_SERVICES, PANSOFT_PROFILE } from '../data/company';

const iconMap: Record<string, React.ReactNode> = {
  'Code2': <Code2 className="w-6 h-6 text-cyan-400" />,
  'CloudLightning': <CloudLightning className="w-6 h-6 text-amber-400" />,
  'Server': <Server className="w-6 h-6 text-blue-400" />,
  'Database': <Database className="w-6 h-6 text-indigo-400" />,
  'Workflow': <Workflow className="w-6 h-6 text-emerald-400" />,
  'ShieldCheck': <ShieldCheck className="w-6 h-6 text-teal-400" />
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Layers className="w-4 h-4" />
            Engineering & Multi-Cloud Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Software Design, Multi-Cloud Architecture & Integrations
          </h2>
          <p className="text-slate-300 mt-3 text-base">
            From intuitive user interfaces to global edge networks and enterprise container clouds, 
            Pansoft Technologies engineers mission-critical systems for African and global enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-7 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {iconMap[srv.icon] || <Cpu className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800/40">
                    {srv.highlight}
                  </span>
                </div>

                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  {srv.subtitle}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2.5">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {srv.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-900">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Core Specializations:
                  </p>
                  {srv.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Pansoft Technologies
                </span>
                <a
                  href="#contact"
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group"
                >
                  Consult on this Service
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
