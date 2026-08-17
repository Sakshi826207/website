import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Search, Cpu, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function PcbDiagnosticsSection() {
  const capabilities = [
    { title: "PCB Fault Analysis", desc: "Detailed inspection and thermal analysis to locate exact board faults.", icon: Search, color: "text-blue-600 bg-blue-50 border-blue-200" },
    { title: "Component Testing", desc: "Individual test checks on IPMs, ICs, relays, triacs, and capacitors.", icon: Cpu, color: "text-sky-600 bg-sky-50 border-sky-200" },
    { title: "Circuit Testing", desc: "Signal trace testing for power supplies, communication & microcontrollers.", icon: Activity, color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
    { title: "Precision Repair", desc: "Surgical micro-soldering and part replacement with original OEM components.", icon: Wrench, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { title: "Functional Testing", desc: "Full simulator load testing to guarantee 100% operational stability.", icon: ShieldCheck, color: "text-teal-600 bg-teal-50 border-teal-200" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-600 tracking-wider uppercase shadow-xs">
            <Activity className="w-3.5 h-3.5 text-blue-600" />
            <span>ACCURATE PCB DIAGNOSTICS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Precision Diagnosis. Expert PCB Repair.
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Accurate PCB repair starts with accurate diagnosis. Our repair approach focuses on identifying the actual electronic fault before deciding on the appropriate repair.
          </p>
        </div>

        {/* 5 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {capabilities.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${item.color} border flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shrink-0`}>
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-blue-600">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Verified
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
