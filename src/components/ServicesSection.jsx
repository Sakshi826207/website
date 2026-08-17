import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Snowflake, RotateCw, Flame, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export default function ServicesSection({ onOpenQuoteForm }) {
  const cards = [
    {
      id: 'inverter-ac',
      title: 'Inverter AC PCB Repair',
      description: 'Professional Inverter AC PCB diagnosis and component-level repair for control, power and communication-related electronic faults.',
      ctaText: 'Explore AC PCB Repair →',
      icon: Wind,
      badge: 'Inverter AC',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/80',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      id: 'refrigerator',
      title: 'Refrigerator PCB Repair',
      description: 'Expert refrigerator PCB diagnosis and repair for control boards, inverter boards, power circuits and electronic faults.',
      ctaText: 'Explore Refrigerator Repair →',
      icon: Snowflake,
      badge: 'Refrigerator',
      iconBg: 'bg-sky-50 text-sky-600 border-sky-200/80',
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
    },
    {
      id: 'washing-machine',
      title: 'Washing Machine PCB Repair',
      description: 'Component-level washing machine PCB repair for control boards, power circuits, motor control and electronic faults.',
      ctaText: 'Explore Washing Machine Repair →',
      icon: RotateCw,
      badge: 'Washing Machine',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'microwave',
      title: 'Microwave Oven PCB Repair',
      description: 'Professional microwave oven PCB diagnosis and component-level repair for electronic control and power-related faults.',
      ctaText: 'Explore Microwave Repair →',
      icon: Flame,
      badge: 'Microwave Oven',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200/80',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    },
  ];

  return (
    <section id="services" className="py-14 sm:py-18 scroll-mt-[88px] bg-slate-50/70 text-slate-900 border-b border-slate-200/80 relative">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-600 tracking-wider uppercase shadow-xs">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>OUR PCB REPAIR SERVICES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Expert PCB Repair for Major Home Appliances
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            We specialize in diagnosing and repairing electronic PCB faults across major home appliances. Our component-level approach focuses on repairing the actual fault wherever technically feasible.
          </p>
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, idx) => {
            const IconComp = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 p-6"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${card.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${card.badgeBg}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                    {card.description}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" /> Tested & Certified
                  </span>

                  <button
                    onClick={onOpenQuoteForm}
                    className="h-9 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs flex items-center space-x-1.5 group/btn cursor-pointer"
                  >
                    <span>{card.ctaText}</span>
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
