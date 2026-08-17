import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Search, ArrowRight, Cpu, ShieldCheck, Layers, Package } from 'lucide-react';

export default function RepairProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'PCB Received',
      description: 'The PCB or appliance issue is received for assessment.',
      icon: Package,
      gradient: 'from-blue-600 to-indigo-600',
      badgeBg: 'bg-blue-50 text-blue-600 border-blue-200',
      stepNumBg: 'bg-blue-600 text-white'
    },
    {
      step: '02',
      title: 'Diagnosis',
      description: 'The PCB is inspected and tested to identify the fault.',
      icon: Search,
      gradient: 'from-sky-500 to-cyan-600',
      badgeBg: 'bg-sky-50 text-sky-600 border-sky-200',
      stepNumBg: 'bg-sky-600 text-white'
    },
    {
      step: '03',
      title: 'Fault Identification',
      description: 'The affected component or circuit is isolated.',
      icon: Cpu,
      gradient: 'from-indigo-600 to-violet-600',
      badgeBg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      stepNumBg: 'bg-indigo-600 text-white'
    },
    {
      step: '04',
      title: 'Component-Level Repair',
      description: 'The faulty component or circuit is repaired where technically feasible.',
      icon: Wrench,
      gradient: 'from-emerald-500 to-teal-600',
      badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      stepNumBg: 'bg-emerald-600 text-white'
    },
    {
      step: '05',
      title: 'Testing & Verification',
      description: 'The repaired PCB is tested before being returned to service.',
      icon: ShieldCheck,
      gradient: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-50 text-amber-600 border-amber-200',
      stepNumBg: 'bg-amber-600 text-white'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-600 tracking-wider uppercase shadow-xs">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            From PCB Diagnosis to Tested Repair
          </h2>
        </div>

        {/* 5-STEP WORKFLOW CARDS GRID (Horizontal timeline on desktop, vertical on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 relative"
              >
                {/* Top Colorful Gradient Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${step.gradient}`} />

                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    {/* Top Row: Step Badge + Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-9 h-9 rounded-full ${step.stepNumBg} font-mono font-extrabold text-xs flex items-center justify-center shadow-xs`}>
                        {step.step}
                      </div>

                      <div className={`w-9 h-9 rounded-xl ${step.badgeBg} border flex items-center justify-center shrink-0`}>
                        <IconComp className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-extrabold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile Connector Arrow */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center pb-2">
                    <ArrowRight className="w-4 h-4 text-slate-300 rotate-90" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
