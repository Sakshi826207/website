import React from 'react';
import { Cpu, ArrowUp, ShieldCheck, Phone, Mail, MapPin, Search, Sparkles, ChevronRight, Zap, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer({ onOpenTrackModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-400 border-t border-slate-800/90 relative overflow-hidden pt-10 sm:pt-12 pb-6">
      
      {/* Background Tech Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:36px_36px] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-7">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-7 pb-6 sm:pb-7 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info & Legacy (4 Cols) */}
          <div className="lg:col-span-4 space-y-3.5 text-left">
            <div className="flex items-center space-x-3">
              <div className="h-11 w-11 rounded-2xl bg-white/95 p-1 border border-blue-500/40 shadow-lg shadow-blue-500/20 flex items-center justify-center overflow-hidden shrink-0">
                <img src="/logo.png" alt="AG Enterprises Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5 font-sans">
                  <span className="text-xl font-black text-white tracking-tight">AG</span>
                  <span className="text-xl font-extrabold text-blue-400 tracking-tight">ENTERPRISES</span>
                </div>
                <p className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">PCB Repair Specialists</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm italic">
              "Since 2008, built on trust.<br />
              Driven by innovation.<br />
              Focused on India's repair future."
            </p>

            <div className="pt-0.5">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-[10px] font-mono font-bold text-blue-300 shadow-xs">
                <Zap className="w-3 h-3 text-blue-400 shrink-0" />
                <span>REPAIR • RESTORE • REVOLUTIONIZE</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              NAVIGATION
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-[13px] font-medium">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Why Us', href: '#why-us' },
                { name: 'Vision', href: '#vision' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-blue-400 hover:translate-x-0.5 transition-all duration-200 flex items-center gap-1 text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Repair Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              OUR SPECIALIZATIONS
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300 font-medium">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Inverter AC PCB Repair</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Refrigerator PCB Repair</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Washing Machine PCB Repair</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Microwave Oven PCB Repair</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Component-Level Diagnostics</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Workshop Lab & Track Order (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              WORKSHOP LAB
            </h4>
            
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300 text-[11px] sm:text-xs">
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-emerald-400 transition-colors font-mono font-bold text-slate-200 text-xs">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-sky-400 transition-colors text-slate-300 text-xs truncate">
                  {COMPANY_INFO.email}
                </a>
              </div>

              {/* Track Repair Order Action Button */}
              <div className="pt-1.5">
                <button
                  onClick={onOpenTrackModal}
                  className="w-full h-9 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/30 hover:shadow-lg transition-all flex items-center justify-center space-x-2 group cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
                  <span>Track Repair Order Status</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Compact & Perfectly Aligned) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 pt-0">
          <div>
            © 2026 <span className="text-white font-bold">AG Enterprises</span>. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center text-slate-300 font-medium text-[11px] sm:text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1.5 shrink-0" />
              Quality Assured Component-Level PCB Repairs
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700 shadow-md transition-all cursor-pointer group"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
