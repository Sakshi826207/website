import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Wrench, Search, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function StatsSection() {
  const items = [
    {
      id: 1,
      mainText: "Since 2008",
      subLabel: "Repair Legacy",
      microLabel: "ESTABLISHED",
      icon: Calendar,
      gradient: "from-blue-50/90 via-white to-white",
      topBarGradient: "from-blue-600 via-indigo-600 to-blue-700",
      borderColor: "border-blue-200/80 hover:border-blue-400",
      glowColor: "hover:shadow-[0_12px_32px_rgba(37,99,235,0.14)]",
      iconBg: "bg-blue-600 text-white shadow-md shadow-blue-600/30",
      badgeStyle: "bg-blue-100/80 text-blue-700 border-blue-200",
      accentTextColor: "group-hover:text-blue-600",
    },
    {
      id: 2,
      mainText: "Component-Level",
      subLabel: "PCB Repair Expertise",
      microLabel: "EXPERTISE",
      icon: Wrench,
      gradient: "from-sky-50/90 via-white to-white",
      topBarGradient: "from-sky-500 via-cyan-600 to-blue-600",
      borderColor: "border-sky-200/80 hover:border-sky-400",
      glowColor: "hover:shadow-[0_12px_32px_rgba(2,132,199,0.14)]",
      iconBg: "bg-sky-600 text-white shadow-md shadow-sky-600/30",
      badgeStyle: "bg-sky-100/80 text-sky-700 border-sky-200",
      accentTextColor: "group-hover:text-sky-600",
    },
    {
      id: 3,
      mainText: "Advanced",
      subLabel: "PCB Diagnostics",
      microLabel: "DIAGNOSTICS",
      icon: Search,
      gradient: "from-indigo-50/90 via-white to-white",
      topBarGradient: "from-indigo-600 via-violet-600 to-blue-600",
      borderColor: "border-indigo-200/80 hover:border-indigo-400",
      glowColor: "hover:shadow-[0_12px_32px_rgba(79,70,229,0.14)]",
      iconBg: "bg-indigo-600 text-white shadow-md shadow-indigo-600/30",
      badgeStyle: "bg-indigo-100/80 text-indigo-700 border-indigo-200",
      accentTextColor: "group-hover:text-indigo-600",
    },
    {
      id: 4,
      mainText: "Quality",
      subLabel: "Testing & Verification",
      microLabel: "TESTED",
      icon: ShieldCheck,
      gradient: "from-emerald-50/90 via-white to-white",
      topBarGradient: "from-emerald-500 via-teal-600 to-emerald-700",
      borderColor: "border-emerald-200/80 hover:border-emerald-400",
      glowColor: "hover:shadow-[0_12px_32px_rgba(16,185,129,0.14)]",
      iconBg: "bg-emerald-600 text-white shadow-md shadow-emerald-600/30",
      badgeStyle: "bg-emerald-100/80 text-emerald-800 border-emerald-200",
      accentTextColor: "group-hover:text-emerald-600",
    },
  ];

  return (
    <section className="py-12 sm:py-14 bg-gradient-to-b from-white via-slate-50/80 to-slate-100/50 text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-9 sm:mb-11 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-xs font-bold text-blue-600 tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>PROVEN PCB REPAIR EXCELLENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built on Experience. Driven by Expertise.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((stat, idx) => {
            const IconComponent = stat.icon;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-white border ${stat.borderColor} rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out group hover:-translate-y-1.5 shadow-[0_6px_24px_rgba(15,23,42,0.06)] ${stat.glowColor} flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Top Colorful Accent Line */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${stat.topBarGradient}`} />

                {/* Background Soft Tint */}
                <div className={`absolute inset-0 bg-gradient-to-b ${stat.gradient} opacity-90 pointer-events-none`} />

                <div className="p-6 sm:p-7 relative z-10 space-y-5 flex-1 flex flex-col justify-between">
                  {/* Icon & Micro Label */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl ${stat.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className={`text-[10px] font-mono font-extrabold tracking-wider uppercase border px-2.5 py-1 rounded-full shadow-xs ${stat.badgeStyle}`}>
                      {stat.microLabel}
                    </span>
                  </div>

                  {/* Main Text & Sub Label */}
                  <div className="space-y-1">
                    <div className={`text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight transition-colors duration-200 ${stat.accentTextColor}`}>
                      {stat.mainText}
                    </div>

                    <p className="text-xs sm:text-sm font-bold text-slate-600 flex items-center gap-1.5 pt-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{stat.subLabel}</span>
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
