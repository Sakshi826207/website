import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles, CheckCircle2, MessageSquare, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function FaqSection({ onOpenQuoteForm }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqsList = [
    {
      id: "01",
      category: "OVERVIEW",
      question: "What is component-level PCB repair?",
      answer: "Component-level PCB repair involves diagnosing the exact damaged micro-components (such as IPM driver ICs, relays, triacs, capacitors, or diodes) on an electronic circuit board and replacing only those faulty components instead of replacing the entire expensive PCB."
    },
    {
      id: "02",
      category: "APPLIANCES",
      question: "Which appliances do you repair?",
      answer: "We specialize in component-level PCB repair for major home appliances including Inverter Air Conditioners, Refrigerators, Washing Machines (Front Load & Top Load), and Microwave Ovens."
    },
    {
      id: "03",
      category: "INVERTER AC",
      question: "Do you provide Inverter AC PCB repair?",
      answer: "Yes, we specialize in Inverter AC PCB repair for both indoor and outdoor units across all major brands. We diagnose communication errors (like E6, CH05, E7), IPM short circuits, and SMPS power failures."
    },
    {
      id: "04",
      category: "FEASIBILITY",
      question: "Can a faulty PCB be repaired instead of replaced?",
      answer: "In most cases, yes! Many PCB failures are caused by specific faulty electronic components. Diagnosing and repairing those components is much more cost-effective than complete PCB replacement."
    },
    {
      id: "05",
      category: "REFRIGERATOR",
      question: "Do you repair refrigerator PCBs?",
      answer: "Yes, we provide expert refrigerator PCB diagnosis and repair for control boards, inverter compressor drive boards, power supplies, and defrost logic circuits."
    },
    {
      id: "06",
      category: "WASHING MACHINE",
      question: "Do you repair washing machine PCBs?",
      answer: "Yes, we repair washing machine control PCBs for front-load and top-load units, fixing door lock triac failures, drain pump drive circuits, motor controls, and power issues."
    },
    {
      id: "07",
      category: "MICROWAVE",
      question: "Do you repair microwave oven PCBs?",
      answer: "Yes, we provide professional diagnosis and component-level repair for microwave oven electronic control boards, touch keypad controllers, and power relays."
    },
    {
      id: "08",
      category: "TESTING",
      question: "Is the PCB tested after repair?",
      answer: "Yes, every repaired PCB undergoes thorough diagnostic testing and functional bench simulator verification under operating voltage before being returned to service."
    },
    {
      id: "09",
      category: "QUOTE",
      question: "How can I request a PCB repair?",
      answer: "You can request a repair quote directly through our website by clicking 'Get PCB Repair Quote' or by contacting AG Enterprises with your appliance details and fault symptoms."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/80 to-slate-100/70 text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Visual Depth: Technical Grid & Glowing Radial Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600 uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Frequently Asked Questions About <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">PCB Repair</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            Clear, honest answers about component-level troubleshooting, repair feasibility, turnaround, and testing standards.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqsList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`rounded-2xl bg-white border transition-all duration-250 overflow-hidden ${
                  isOpen 
                    ? 'border-blue-400 shadow-[0_8px_30px_rgba(37,99,235,0.12)] ring-1 ring-blue-400/30' 
                    : 'border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3.5 min-w-0">
                    <span className={`w-8 h-8 rounded-xl font-mono font-extrabold text-xs flex items-center justify-center shrink-0 transition-colors ${
                      isOpen 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                    }`}>
                      {faq.id}
                    </span>

                    <span className={`text-sm sm:text-base font-extrabold transition-colors leading-snug ${
                      isOpen ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-600'
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-250 ${
                    isOpen 
                      ? 'bg-blue-50 text-blue-600 rotate-180' 
                      : 'bg-slate-50 text-slate-400 group-hover:text-slate-700 group-hover:bg-slate-100'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-blue-100/70 bg-gradient-to-b from-blue-50/30 to-white">
                        <div className="flex items-start gap-2 pt-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Interactive Help Callout */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-extrabold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
              <MessageSquare className="w-4.5 h-4.5 text-blue-600" />
              <span>Still have questions about your PCB fault?</span>
            </h4>
            <p className="text-xs text-slate-500 font-normal">
              Speak directly with our repair technicians for immediate fault assistance.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="h-10 px-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call Lab: {COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenQuoteForm || (() => {
                const elem = document.getElementById('contact');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              })}
              className="h-10 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Get Free Diagnosis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
