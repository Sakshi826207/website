import React from 'react';
import { motion } from 'framer-motion';
import { Award, Wrench, Search, DollarSign, ShieldCheck, Heart, CheckCircle2 } from 'lucide-react';

export default function WhyUsSection() {
  const cards = [
    {
      id: 1,
      title: '18+ Years of Experience',
      description: 'Repair knowledge built since 2008.',
      icon: Award,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/80',
    },
    {
      id: 2,
      title: 'Component-Level Expertise',
      description: 'Focus on identifying and repairing the actual PCB fault.',
      icon: Wrench,
      iconBg: 'bg-sky-50 text-sky-600 border-sky-200/80',
    },
    {
      id: 3,
      title: 'Advanced Diagnostics',
      description: 'Systematic testing for accurate fault identification.',
      icon: Search,
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200/80',
    },
    {
      id: 4,
      title: 'Cost-Effective Solutions',
      description: 'Repair-focused solutions can reduce unnecessary replacement.',
      icon: DollarSign,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
    },
    {
      id: 5,
      title: 'Quality Testing',
      description: 'Repaired PCBs are tested before delivery.',
      icon: ShieldCheck,
      iconBg: 'bg-teal-50 text-teal-600 border-teal-200/80',
    },
    {
      id: 6,
      title: 'Built on Trust',
      description: 'Long-term service built on honest work and practical expertise.',
      icon: Heart,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200/80',
    },
  ];

  return (
    <section id="why-us" className="py-10 sm:py-14 scroll-mt-[88px] bg-slate-50/70 text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-600 tracking-wider uppercase shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>WHY CHOOSE AG ENTERPRISES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Experience That Goes Beyond Replacement
          </h2>
        </div>

        {/* 6 COMPACT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 p-5 sm:p-6"
              >
                <div>
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl ${item.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0 mb-4`}>
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
