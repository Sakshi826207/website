import React from 'react';
import { motion } from 'framer-motion';
import { Network, Users, Award, MapPin } from 'lucide-react';

export default function VisionSection() {
  const pillars = [
    {
      id: 'empower',
      tag: 'EMPOWER',
      title: 'Skill Development',
      description: 'Develop skilled PCB repair technicians.',
      icon: Users,
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/80',
    },
    {
      id: 'standardize',
      tag: 'STANDARDIZE',
      title: 'Quality Excellence',
      description: 'Improve repair and testing standards.',
      icon: Award,
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
      iconBg: 'bg-sky-50 text-sky-600 border-sky-200/80',
    },
    {
      id: 'expand',
      tag: 'EXPAND',
      title: 'Pan-India Reach',
      description: 'Make advanced PCB repair accessible across India.',
      icon: MapPin,
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
    },
  ];

  return (
    <section id="vision" className="py-10 sm:py-14 scroll-mt-[88px] bg-slate-50/70 text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-600 tracking-wider uppercase shadow-xs">
            <Network className="w-3.5 h-3.5 text-blue-600" />
            <span>OUR VISION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Building India's Trusted PCB Repair Network
          </h2>

          <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Our vision is to build one of India's most trusted PCB repair networks by empowering 1,000+ skilled technicians, setting higher standards in repair quality and making advanced PCB repair services accessible across the nation.
          </p>
        </div>

        {/* Vision Metric Callout */}
        <div className="max-w-md mx-auto mb-8 p-4 rounded-2xl bg-white border border-blue-200 shadow-xs flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-extrabold text-blue-600 font-sans">1,000+</span>
            <div>
              <h4 className="text-xs font-extrabold text-slate-900">Skilled Technician Vision</h4>
              <span className="text-[10px] text-slate-500 font-semibold block">Pan-India Future Goal</span>
            </div>
          </div>
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
        </div>

        {/* 3 PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 p-6 text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${pillar.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${pillar.badgeBg}`}>
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
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
