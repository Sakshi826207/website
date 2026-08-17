import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, BatteryCharging, ToggleRight, Radio, Search, CheckCircle2, AlertTriangle, ShieldAlert, Image as ImageIcon, Wrench, Layers, Sparkles } from 'lucide-react';
import { PCB_COMPONENTS_SIMULATOR } from '../data/companyData';

export default function PcbInspectionTool() {
  const [selectedCompId, setSelectedCompId] = useState(PCB_COMPONENTS_SIMULATOR[0].id);
  const [activeFilter, setActiveFilter] = useState('all');

  const selectedComponent = PCB_COMPONENTS_SIMULATOR.find(c => c.id === selectedCompId) || PCB_COMPONENTS_SIMULATOR[0];

  const galleryItems = [
    {
      id: 1,
      category: 'ac',
      categoryLabel: 'INVERTER AC PCB',
      title: 'Inverter AC Outdoor Unit IPM Driver Repair',
      description: 'Component-level IPM module replacement and signal line diode repair for CH05/E7 communication errors.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
      badge: 'Component Level',
      turnaround: '24 Hours'
    },
    {
      id: 2,
      category: 'fridge',
      categoryLabel: 'REFRIGERATOR PCB',
      title: 'BLDC Inverter Compressor Board Servicing',
      description: 'Replacing burnt power MOSFETs and high-capacity ESR filter capacitors on double-door refrigerator PCBs.',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop&q=80',
      badge: 'High Precision',
      turnaround: '12-24 Hours'
    },
    {
      id: 3,
      category: 'washer',
      categoryLabel: 'WASHING MACHINE PCB',
      title: 'Front-Load Motherboard Door Lock Triac Fix',
      description: 'Repairing burnt door lock triac circuits and applying conformal moisture resin coating for long-term protection.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
      badge: 'Resin Resealed',
      turnaround: '24 Hours'
    },
    {
      id: 4,
      category: 'diagnostics',
      categoryLabel: 'BENCH DIAGNOSTICS',
      title: 'Digital Storage Oscilloscope Signal Mapping',
      description: 'Real-time signal line waveform analysis to isolate micro-shorts and microcontroller pin frequency issues.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80',
      badge: 'Oscilloscope Trace',
      turnaround: 'Same Day'
    },
    {
      id: 5,
      category: 'microwave',
      categoryLabel: 'MICROWAVE PCB',
      title: 'Convection Oven Touch Keypad & Relay Repair',
      description: 'Replacing micro-relays and display driver microcontrollers for high-voltage microwave logic boards.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop&q=80',
      badge: 'High-Voltage Safety',
      turnaround: '12 Hours'
    },
    {
      id: 6,
      category: 'diagnostics',
      categoryLabel: 'THERMAL IMAGING',
      title: 'Infrared Thermal Micro-Short Detection',
      description: 'Thermal camera micro-imaging detecting hot-spot chip failures before complete board failure.',
      image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=800&auto=format&fit=crop&q=80',
      badge: 'Thermal Scan',
      turnaround: 'Same Day'
    }
  ];

  const filteredGallery = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const getComponentIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-blue-600" />;
      case 'BatteryCharging': return <BatteryCharging className="w-5 h-5 text-blue-600" />;
      case 'ToggleRight': return <ToggleRight className="w-5 h-5 text-blue-600" />;
      case 'Radio': return <Radio className="w-5 h-5 text-blue-600" />;
      default: return <Cpu className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="pcb-inspector" className="py-12 sm:py-16 relative bg-slate-50/70 text-slate-900 border-b border-slate-200/80">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* PART 1: INTERACTIVE BENCH DIAGNOSTIC SIMULATOR */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <Search className="w-3.5 h-3.5 text-blue-600" />
              <span>INTERACTIVE BENCH DIAGNOSTIC SIMULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Component-Level PCB Inspector
            </h2>
            <p className="text-base text-slate-600">
              Click on any micro-component below to inspect how AG Enterprises diagnoses and repairs damaged circuit elements without replacing the entire board.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Simulated Circuit Board Graphic */}
            <div className="lg:col-span-6 rounded-2xl bg-white p-6 border border-slate-200 shadow-sm relative">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-bold text-blue-600">PCB_BOARD_LAYOUT_VIEWER</span>
                <span className="text-[11px] font-mono text-emerald-600 font-semibold">CLICK HARDWARE CHIPS TO INSPECT</span>
              </div>

              {/* Virtual PCB Board Canvas */}
              <div className="relative aspect-[4/3] rounded-xl bg-slate-900 border-2 border-slate-800 p-4 overflow-hidden tech-blue-grid-light flex flex-col justify-between">
                
                {/* Decorative PCB Bus Traces */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <svg className="w-full h-full text-blue-400" viewBox="0 0 400 300">
                    <path d="M 50 50 L 150 50 L 180 90 L 320 90" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                    <path d="M 80 120 L 80 220 L 220 220 L 350 180" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M 250 40 L 250 160 L 120 250" stroke="#38BDF8" strokeWidth="2" fill="none" />
                  </svg>
                </div>

                {/* Top Row: Main Power Entry & SMPS */}
                <div className="flex justify-between items-start relative z-10">
                  <button
                    onClick={() => setSelectedCompId('smps')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      selectedCompId === 'smps'
                        ? 'bg-blue-600 border-blue-400 text-white shadow-md scale-105'
                        : 'bg-slate-800/90 border-slate-700 hover:border-blue-400 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <BatteryCharging className="w-4 h-4 text-sky-400" />
                      <span className="text-xs font-mono font-bold">SMPS Power IC</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 block mt-1">230V AC → 12V/5V DC</span>
                  </button>

                  <button
                    onClick={() => setSelectedCompId('relays')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      selectedCompId === 'relays'
                        ? 'bg-blue-600 border-blue-400 text-white shadow-md scale-105'
                        : 'bg-slate-800/90 border-slate-700 hover:border-blue-400 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <ToggleRight className="w-4 h-4 text-sky-400" />
                      <span className="text-xs font-mono font-bold">Relay Bank</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 block mt-1">Heavy Load Switches</span>
                  </button>
                </div>

                {/* Center Row: Microcontroller Unit (MCU Brain) */}
                <div className="flex justify-center relative z-10 my-4">
                  <button
                    onClick={() => setSelectedCompId('mcu')}
                    className={`p-4 rounded-xl border text-center transition-all ${
                      selectedCompId === 'mcu'
                        ? 'bg-blue-600 border-blue-400 ring-4 ring-blue-500/40 shadow-md scale-110 text-white'
                        : 'bg-slate-800/95 border-blue-500/40 hover:border-blue-400 text-slate-200'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <Cpu className="w-8 h-8 text-sky-400 animate-pulse mb-1" />
                      <span className="text-xs font-mono font-bold tracking-widest">MAIN MCU CHIP</span>
                      <span className="text-[9px] font-mono text-emerald-400">32-BIT MICROCONTROLLER</span>
                    </div>
                  </button>
                </div>

                {/* Bottom Row: IPM Module & DC Bus Capacitors */}
                <div className="flex justify-between items-end relative z-10">
                  <button
                    onClick={() => setSelectedCompId('ipm')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      selectedCompId === 'ipm'
                        ? 'bg-blue-600 border-blue-400 text-white shadow-md scale-105'
                        : 'bg-slate-800/90 border-slate-700 hover:border-blue-400 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-mono font-bold">IPM IGBT Module</span>
                    </div>
                    <span className="text-[9px] font-mono text-amber-300 block mt-1">Compressor Driver</span>
                  </button>

                  <button
                    onClick={() => setSelectedCompId('capacitors')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      selectedCompId === 'capacitors'
                        ? 'bg-blue-600 border-blue-400 text-white shadow-md scale-105'
                        : 'bg-slate-800/90 border-slate-700 hover:border-blue-400 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Radio className="w-4 h-4 text-sky-400" />
                      <span className="text-xs font-mono font-bold">DC Bus Caps</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 block mt-1">450V Filter Caps</span>
                  </button>
                </div>

              </div>

              <p className="text-[11px] font-mono text-center text-slate-500 mt-3">
                💡 Select any hardware block above to inspect real-time diagnosis & repair specs.
              </p>
            </div>

            {/* Right Column: Selected Component Diagnostic Inspector Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm relative space-y-6">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
                      {getComponentIcon(selectedComponent.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{selectedComponent.name}</h3>
                      <p className="text-xs font-mono text-blue-600">{selectedComponent.role}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-blue-50 border border-blue-100 text-[11px] font-mono text-blue-700 font-semibold">
                    {selectedComponent.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase mb-1">Functional Description</h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {selectedComponent.details}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-amber-800">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>COMMON SYMPTOM / FAILURE MODE:</span>
                  </div>
                  <p className="text-xs text-amber-900 font-mono pl-6">
                    {selectedComponent.commonFailure}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-blue-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>AG ENTERPRISES REPAIR PROCEDURE:</span>
                  </div>
                  <p className="text-xs text-blue-950 font-mono pl-6">
                    {selectedComponent.repairAction}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="flex items-center text-blue-600 font-medium">
                    <ShieldAlert className="w-3.5 h-3.5 mr-1.5" />
                    100% ESD Protected Handling
                  </span>
                  <span>Original OEM Components Only</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* PART 2: REAL PCB REPAIR WORK GALLERY SHOWCASE */}
        <div className="pt-10 border-t border-slate-200/80">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-600 tracking-wider uppercase shadow-sm">
              <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>PCB REPAIR WORK GALLERY & LAB PROJECTS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Electronics Repair Projects
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Real component-level PCB repair work executed at our specialized diagnostics bench.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ac', label: 'Inverter AC PCBs' },
              { id: 'fridge', label: 'Refrigerator PCBs' },
              { id: 'washer', label: 'Washing Machine PCBs' },
              { id: 'microwave', label: 'Microwave PCBs' },
              { id: 'diagnostics', label: 'Lab Diagnostics' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white border border-slate-200/90 rounded-[22px] overflow-hidden shadow-[0_4px_25px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_35px_rgba(37,99,235,0.12)] hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container with Zoom Effect */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-95 group-hover:opacity-100" 
                      />
                      
                      {/* Top Overlay Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-white bg-slate-900/80 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                          {item.categoryLabel}
                        </span>

                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 backdrop-blur-md border border-emerald-800/80 px-2.5 py-1 rounded-lg">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 sm:p-6 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="flex items-center text-blue-600">
                      <Wrench className="w-3.5 h-3.5 mr-1" />
                      Turnaround: {item.turnaround}
                    </span>
                    <span className="inline-flex items-center space-x-1 text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>QC Passed</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
