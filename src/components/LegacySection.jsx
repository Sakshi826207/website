import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowDown, 
  History, 
  Cpu
} from 'lucide-react';

export default function LegacySection({ onOpenQuoteForm }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.title = "About AG Enterprises | PCB Repair Experts Since 2008";
    }
  }, []);

  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      className="py-12 sm:py-16 scroll-mt-[88px] bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80"
    >
      {/* Background Visual Depth: Fine Tech Grid & Subtle Soft Glow Blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Grid: Narrative on Left, Timeline on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: OUR STORY Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-600 uppercase tracking-wider shadow-xs">
              <History className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>OUR STORY • SINCE 2008</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.18] text-slate-900">
              PCB Repair Expertise Built on <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Trust Since 2008</span>
            </h1>

            {/* Supporting Narrative Paragraphs */}
            <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              <p>
                Our journey began in 2008, when Mr. Gopal Birajdar founded Anita Electronics with a commitment to honest service and quality repairs.
              </p>
              <p>
                Today, as the second generation, we proudly carry that legacy forward through AG Enterprises. Built on years of practical experience and continuous innovation, we specialize in component-level PCB repair for Inverter ACs, Refrigerators, Washing Machines and Microwave Ovens.
              </p>
              <p>
                By combining advanced PCB diagnostics with expert repair techniques, we provide reliable and cost-effective repair solutions that help customers avoid unnecessary complete PCB replacement where repair is technically feasible.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenQuoteForm || (() => scrollToSection('contact'))}
                className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Get PCB Repair Quote</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="h-12 px-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-300 text-slate-900 font-semibold text-sm tracking-wide transition-all duration-200 shadow-xs flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: REPAIR EXCELLENCE TIMELINE CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative w-full"
          >
            <div className="rounded-2xl sm:rounded-3xl bg-slate-50/90 border border-slate-200/90 p-4 sm:p-6 lg:p-8 shadow-[0_12px_36px_rgba(15,23,42,0.06)] relative overflow-hidden">
              
              {/* Top Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xs font-extrabold text-slate-900 tracking-wider uppercase">REPAIR EXCELLENCE TIMELINE</h3>
                </div>
                <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase">
                  SINCE 2008
                </span>
              </div>

              {/* Timeline Items */}
              <div className="space-y-3 relative">
                
                {/* Step 1: 2008 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs relative flex items-center space-x-4">
                  <div className="w-14 h-12 rounded-xl bg-blue-600 text-white font-mono font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    2008
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900">Anita Electronics Founded</h4>
                    <p className="text-xs text-slate-500 font-normal mt-0.5">Founded by Mr. Gopal Birajdar</p>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center my-0.5">
                  <ArrowDown className="w-4 h-4 text-blue-600" />
                </div>

                {/* Step 2: Years */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs relative flex items-center space-x-4">
                  <div className="w-14 h-12 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-xs text-center px-1">
                    Years
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900">Years of Experience</h4>
                    <p className="text-xs text-slate-500 font-normal mt-0.5">Built on honest service and quality repairs</p>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center my-0.5">
                  <ArrowDown className="w-4 h-4 text-blue-600" />
                </div>

                {/* Step 3: 2nd Gen */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs relative flex items-center space-x-4">
                  <div className="w-14 h-12 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-extrabold text-[10px] flex items-center justify-center shrink-0 shadow-xs text-center px-1 leading-tight">
                    2nd Gen
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900">AG Enterprises</h4>
                    <p className="text-xs text-slate-500 font-normal mt-0.5">Second generation carrying legacy forward</p>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center my-0.5">
                  <ArrowDown className="w-4 h-4 text-blue-600" />
                </div>

                {/* Step 4: Today (Blue/Premium Card) */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md relative flex items-center space-x-4">
                  <div className="w-14 h-12 rounded-xl bg-white text-blue-600 font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    Today
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-white">Advanced Component-Level PCB Repair</h4>
                    <p className="text-xs text-slate-100 font-normal mt-0.5">Accurate diagnosis & quality testing</p>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
