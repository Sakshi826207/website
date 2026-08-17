import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Scale, Info } from 'lucide-react';

export default function PcbVsReplacementSection() {
  return (
    <section className="py-12 sm:py-16 bg-white text-slate-900 border-b border-slate-200/80 relative">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-600 tracking-wider uppercase shadow-xs">
            <Scale className="w-3.5 h-3.5 text-blue-600" />
            <span>REPAIR VS REPLACEMENT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Repair First. Replace Only When Necessary.
          </h2>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* LEFT: Complete PCB Replacement */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-rose-50/40 border border-rose-200/80 p-6 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-rose-200/60 mb-6">
                <h3 className="text-lg sm:text-xl font-extrabold text-rose-900">
                  Complete PCB Replacement
                </h3>
                <span className="text-xs font-mono font-bold text-rose-700 bg-rose-100 border border-rose-200 px-3 py-1 rounded-full">
                  HIGH COST
                </span>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <span>Replace the entire board</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <span>Higher replacement expense</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <span>Waiting for board availability</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <span>Functional components may be discarded</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT: Component-Level Repair */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-blue-50/60 border border-blue-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs relative"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-blue-200/80 mb-6">
                <h3 className="text-lg sm:text-xl font-extrabold text-blue-950">
                  Component-Level Repair
                </h3>
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full">
                  RECOMMENDED
                </span>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-800 font-medium">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span>Diagnose the actual fault</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span>Repair affected components</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span>Reduce unnecessary replacement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span>Test the repaired PCB</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Small Note */}
        <div className="mt-6 text-center text-xs text-slate-500 font-normal flex items-center justify-center space-x-1.5">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>Repair feasibility depends on the PCB condition, fault type and technical assessment.</span>
        </div>

      </div>
    </section>
  );
}
