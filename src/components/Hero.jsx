import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Search, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Wrench,
  Award
} from 'lucide-react';

export default function Hero({ onOpenQuoteForm, onOpenTrackModal }) {
  return (
    <section 
      id="home" 
      className="relative pt-5 sm:pt-7 lg:pt-8 pb-10 sm:pb-12 scroll-mt-[88px] bg-gradient-to-b from-white via-slate-50/70 to-[#F1F5F9] text-slate-900 overflow-hidden border-b border-slate-200/80"
    >
      {/* Background Visual Depth: Fine Tech Grid & Subtle Soft Glow Blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-5 w-[450px] h-[450px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-5 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT SIDE CONTENT (7 Columns on desktop) */}
          <div className="lg:col-span-7 space-y-5 text-left relative">
            
            {/* 1. EYEBROW */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] sm:text-xs font-bold text-blue-600 shadow-xs max-w-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse shrink-0" />
              <span className="tracking-wide uppercase">EST. 2008 • PCB REPAIR SPECIALISTS</span>
            </motion.div>

            {/* 2. H1 HEADING */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold tracking-tight text-slate-900 leading-[1.15]"
            >
              Professional <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">PCB Repair Services</span> for Home Appliances
            </motion.h1>

            {/* 3. BELOW H1 DESCRIPTION */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 max-w-xl font-normal leading-relaxed"
            >
              AG Enterprises provides expert component-level PCB repair for Inverter ACs, Refrigerators, Washing Machines and Microwave Ovens. We diagnose the actual fault, repair the affected components and test the PCB before it goes back into service.
            </motion.p>

            {/* 4. BUTTONS */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              {/* Primary CTA */}
              <button
                onClick={onOpenQuoteForm}
                className="h-[48px] px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>Get PCB Repair Quote</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onOpenTrackModal}
                className="h-[48px] px-6 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 font-semibold text-sm tracking-wide shadow-xs transition-all duration-200 flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <Search className="w-4 h-4 text-blue-600 transition-transform group-hover:scale-110" />
                <span>Track Repair Order</span>
              </button>
            </motion.div>

            {/* 5. TRUST BADGES BELOW */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap gap-2.5 pt-2"
            >
              <div className="px-3 py-1.5 rounded-lg bg-blue-50/80 border border-blue-200/80 text-xs font-semibold text-blue-700 flex items-center gap-1.5 shadow-xs">
                <span>✓ Component-Level Repair</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-blue-50/80 border border-blue-200/80 text-xs font-semibold text-blue-700 flex items-center gap-1.5 shadow-xs">
                <span>✓ Advanced PCB Diagnostics</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-blue-50/80 border border-blue-200/80 text-xs font-semibold text-blue-700 flex items-center gap-1.5 shadow-xs">
                <span>✓ Tested Before Delivery</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE: HERO RIGHT CARD (5 Columns on desktop) */}
          <div className="lg:col-span-5 relative w-full p-1 sm:p-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {/* Technical PCB Diagnostic Card */}
              <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_12px_36px_rgba(15,23,42,0.08)] relative overflow-hidden group w-full">
                
                {/* Circuit Background Visual Overlay */}
                <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Card Top Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 relative z-10">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
                      <Cpu className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-extrabold text-slate-900 tracking-wider">PCB DIAGNOSTIC SYSTEM</h3>
                      <p className="text-[10px] text-slate-500 font-mono">BENCH TESTING ACTIVE</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>● DIAGNOSIS ACTIVE</span>
                  </span>
                </div>

                {/* PCB Diagnostic Circuit Visual Pattern & Pipeline */}
                <div className="relative z-10 space-y-2 my-3">
                  
                  {/* Subtle Electronic Circuit Graphic Box */}
                  <div className="p-3 rounded-xl bg-slate-900 text-white relative overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between text-[11px] text-slate-300 mb-2 font-mono">
                      <span className="text-blue-400 font-bold flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                        CIRCUIT TRACE MONITOR
                      </span>
                      <span className="text-emerald-400 font-bold">SIGNAL STABLE</span>
                    </div>

                    {/* Circuit Lines Graphic (SVG Pattern) */}
                    <div className="h-12 relative flex items-center justify-between px-2 bg-slate-950/80 rounded-lg border border-slate-800">
                      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="24" x2="100%" y2="24" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 4" />
                        <circle cx="20%" cy="24" r="4" fill="#3b82f6" />
                        <circle cx="50%" cy="24" r="4" fill="#10b981" />
                        <circle cx="80%" cy="24" r="4" fill="#06b6d4" />
                      </svg>

                      {/* 5 Pipeline Stages */}
                      {[
                        { step: "01", name: "PCB Received", done: true },
                        { step: "02", name: "Fault Detected", done: true },
                        { step: "03", name: "Component Repair", done: true },
                        { step: "04", name: "Testing", active: true },
                        { step: "05", name: "Ready", pending: true },
                      ].map((item, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                          <div className={`w-5.5 h-5.5 rounded-full flex items-center justify-center text-[9px] font-bold font-mono ${
                            item.done 
                              ? 'bg-blue-600 text-white' 
                              : item.active 
                              ? 'bg-emerald-500 text-white ring-2 ring-emerald-300 animate-pulse' 
                              : 'bg-slate-800 text-slate-400'
                          }`}>
                            {item.step}
                          </div>
                          <span className="text-[9px] font-semibold text-slate-300 mt-0.5 hidden sm:block max-w-[55px] truncate">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Progress List */}
                  <div className="grid grid-cols-1 gap-1.5 pt-1">
                    {[
                      { name: "PCB RECEIVED", desc: "Inspection & Registration", icon: CheckCircle2, color: "text-blue-600 bg-blue-50 border-blue-100" },
                      { name: "FAULT DETECTED", desc: "Oscilloscope & Thermal Trace", icon: Search, color: "text-blue-600 bg-blue-50 border-blue-100" },
                      { name: "COMPONENT REPAIR", desc: "Micro-soldering & Part Replace", icon: Wrench, color: "text-blue-600 bg-blue-50 border-blue-100" },
                      { name: "TESTING", desc: "Full Bench Load Simulator", icon: Activity, color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
                      { name: "READY", desc: "Conformal Coating & Final QC", icon: ShieldCheck, color: "text-slate-400 bg-slate-50 border-slate-100" },
                    ].map((st, i) => {
                      const IconComponent = st.icon;
                      return (
                        <div key={i} className="p-2 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                          <div className="flex items-center space-x-2.5">
                            <div className={`w-6.5 h-6.5 rounded-lg border flex items-center justify-center shrink-0 ${st.color}`}>
                              <IconComponent className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-slate-900">{st.name}</h4>
                              <p className="text-[10px] text-slate-500 font-normal">{st.desc}</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-blue-600">✓</span>
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Small Floating Status Cards Overlay */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 relative z-10">
                  <div className="p-2 rounded-xl bg-blue-50/80 border border-blue-200/90 text-left">
                    <span className="text-[10px] text-slate-500 font-medium block">Diagnostics</span>
                    <span className="text-xs font-extrabold text-blue-700 block mt-0.5 flex items-center gap-1">
                      Complete ✓
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-emerald-50/80 border border-emerald-200/90 text-left">
                    <span className="text-[10px] text-slate-500 font-medium block">Quality Check</span>
                    <span className="text-xs font-extrabold text-emerald-700 block mt-0.5 flex items-center gap-1">
                      Passed ✓
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
