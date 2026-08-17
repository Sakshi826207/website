import React from 'react';
import { motion } from 'framer-motion';
import { Target, ArrowRight } from 'lucide-react';

export default function MissionSection({ onOpenQuoteForm }) {
  const handleCta = () => {
    if (onOpenQuoteForm) {
      onOpenQuoteForm();
    } else {
      const elem = document.getElementById('contact');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BRAND STATEMENT BANNER */}
        <div className="bg-gradient-to-r from-blue-50/90 via-sky-50/80 to-indigo-50/90 border border-blue-200/90 rounded-3xl p-8 sm:p-14 shadow-sm relative overflow-hidden text-center space-y-6">
          
          {/* Ambient Soft Glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

          {/* Eyebrow Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-xs font-bold text-blue-600 uppercase tracking-wider shadow-xs"
          >
            <Target className="w-3.5 h-3.5 text-blue-600" />
            <span>BRAND STATEMENT</span>
          </motion.div>

          {/* Large Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-1 max-w-3xl mx-auto text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-900 uppercase"
          >
            <div>WE <span className="text-blue-600">REPAIR</span></div>
            <div>WHAT OTHERS</div>
            <div className="text-blue-600">REPLACE.</div>
          </motion.div>

          {/* Supporting Text */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-base sm:text-xl text-slate-800 max-w-2xl mx-auto font-semibold leading-relaxed"
          >
            Why replace an expensive PCB when the actual fault may be repairable?
          </motion.p>

          {/* Additional Text */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            At AG Enterprises, we diagnose the PCB first and determine whether component-level repair is technically feasible. This repair-first approach can help reduce unnecessary PCB replacement and associated costs.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="pt-2 flex justify-center"
          >
            <button
              onClick={handleCta}
              className="h-[52px] px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2.5 group cursor-pointer"
            >
              <span>Get Your PCB Diagnosed →</span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
