import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Search, ShieldCheck } from 'lucide-react';

export default function FinalCtaSection({ onOpenQuoteForm, onOpenTrackModal }) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-25 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-mono font-semibold text-blue-300">
          <Zap className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
          <span>ADVANCED COMPONENT DIAGNOSTICS</span>
        </div>

        {/* H2 Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
          Before You Replace Your PCB, Let Us Diagnose It.
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Your PCB may not need complete replacement. Get professional PCB diagnosis and repair assistance from AG Enterprises.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Primary CTA */}
          <button
            onClick={onOpenQuoteForm}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-600/30 hover:shadow-lg transition-all flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <span>Get PCB Repair Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onOpenTrackModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Search className="w-4 h-4 text-blue-400" />
            <span>Track Repair Order</span>
          </button>
        </div>

        {/* Small Text Footer */}
        <div className="pt-4 flex items-center justify-center text-xs text-slate-400 font-mono tracking-wide">
          <span>Since 2008 • Built on Trust • Driven by Innovation</span>
        </div>

      </div>
    </section>
  );
}
