import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ImageIcon, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause 
} from 'lucide-react';

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isModalPlaying, setIsModalPlaying] = useState(false);

  const galleryData = [
    {
      id: 1,
      title: "Inverter AC Outdoor PCB Micro-Soldering",
      categoryLabel: "INVERTER AC PCB",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&auto=format&fit=crop&q=80",
      description: "Precision component-level IPM module rework and signal line diode repair."
    },
    {
      id: 2,
      title: "BLDC Refrigerator Compressor Board Reflow",
      categoryLabel: "REFRIGERATOR PCB",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=900&auto=format&fit=crop&q=80",
      description: "Replacing burnt power MOSFETs and high-capacity ESR filter capacitors."
    },
    {
      id: 3,
      title: "Washing Machine Motherboard Resin Resealing",
      categoryLabel: "WASHING MACHINE PCB",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80",
      description: "Repairing door lock triac circuits and applying conformal moisture resin."
    },
    {
      id: 4,
      title: "Oscilloscope Real-Time Signal Diagnostics",
      categoryLabel: "LAB DIAGNOSTICS",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=900&auto=format&fit=crop&q=80",
      description: "Waveform analysis detecting micro-controller pin frequency deviations."
    },
    {
      id: 5,
      title: "Microwave Logic Board Safety Check",
      categoryLabel: "MICROWAVE PCB",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=900&auto=format&fit=crop&q=80",
      description: "Replacing micro-relays and display driver chips for convection logic boards."
    },
    {
      id: 6,
      title: "Infrared Thermal Micro-Short Scanning",
      categoryLabel: "THERMAL SCAN",
      image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=900&auto=format&fit=crop&q=80",
      description: "Infrared thermal imaging identifying short-circuited microchips."
    },
    {
      id: 7,
      title: "Enterprise Software & System Architecture",
      categoryLabel: "SOFTWARE WORK",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80",
      description: "Custom enterprise software development and system architecture design."
    },
    {
      id: 8,
      title: "17+ Years Legacy & Engineering Excellence",
      categoryLabel: "ACHIEVEMENTS",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop&q=80",
      description: "Recognized for pioneering component-level electronics restoration."
    }
  ];

  // Modal Autoplay effect
  useEffect(() => {
    if (lightboxIndex === null || !isModalPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [lightboxIndex, isModalPlaying, galleryData.length]);

  // Keyboard Navigation for Lightbox Modal Slider
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
        setIsModalPlaying(false);
      }
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, galleryData.length]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % galleryData.length);
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 scroll-mt-[88px] bg-slate-50/70 text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CLEAN SECTION HEADER WITHOUT FILTER BUTTONS */}
        <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200/80">
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
              Explore Our Gallery
            </h2>
            <span className="text-xs text-slate-500 font-normal mt-1 block">
              Moments, milestones, and engineering achievements
            </span>
          </div>
        </div>

        {/* CLEAN UNIFORM GRID (4 COLUMNS x 2 ROWS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              onClick={() => setLightboxIndex(idx)}
              className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:-translate-y-0.5"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  loading="lazy"
                />

                {/* Dark Transparent Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                  <span className="text-[9px] font-mono font-bold text-white bg-slate-900/80 backdrop-blur-md border border-white/20 px-2 py-0.5 rounded uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Compact Content Info */}
              <div className="p-3 space-y-0.5">
                <h3 className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-1 font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* FULLSCREEN INTERACTIVE SLIDER MODAL */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/96 backdrop-blur-2xl flex flex-col items-center justify-between p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200">
          
          {/* Lightbox Modal Top Header */}
          <div className="w-full max-w-6xl flex items-center justify-between relative z-50 pb-2 border-b border-slate-800/80">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs sm:text-sm font-bold text-cyan-400">
                {String(lightboxIndex + 1).padStart(2, '0')} <span className="text-slate-500">/ {String(galleryData.length).padStart(2, '0')}</span>
              </span>

              <span className="text-[10px] font-mono font-semibold text-white bg-blue-600/80 border border-blue-400/40 px-2.5 py-0.5 rounded-full uppercase hidden sm:inline">
                {galleryData[lightboxIndex].categoryLabel}
              </span>
            </div>

            {/* Modal Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsModalPlaying(!isModalPlaying)}
                className={`h-9 px-3 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  isModalPlaying 
                    ? 'bg-amber-500/20 border-amber-400/50 text-amber-300' 
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
                }`}
                title="Toggle Auto Slideshow"
              >
                {isModalPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isModalPlaying ? 'Pause' : 'Auto Play'}</span>
              </button>

              <button
                onClick={() => {
                  setLightboxIndex(null);
                  setIsModalPlaying(false);
                }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-rose-600 flex items-center justify-center transition-colors shadow-md"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Center Image Slider */}
          <div className="relative max-w-5xl w-full flex-grow flex items-center justify-center px-2 sm:px-4 my-2">
            <button
              onClick={handlePrev}
              className="absolute left-1 sm:left-4 z-50 w-11 h-11 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white hover:bg-blue-600 flex items-center justify-center transition-all shadow-lg active:scale-95"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <AnimatePresence mode="wait">
              <motion.img 
                key={galleryData[lightboxIndex].id}
                src={galleryData[lightboxIndex].image} 
                alt={galleryData[lightboxIndex].title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="max-h-[62vh] sm:max-h-[68vh] max-w-full rounded-2xl border border-slate-800 object-contain shadow-2xl"
              />
            </AnimatePresence>

            <button
              onClick={handleNext}
              className="absolute right-1 sm:right-4 z-50 w-11 h-11 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white hover:bg-blue-600 flex items-center justify-center transition-all shadow-lg active:scale-95"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Caption */}
          <div className="text-center text-white space-y-1 max-w-2xl mx-auto px-4">
            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white leading-tight">
              {galleryData[lightboxIndex].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
              {galleryData[lightboxIndex].description}
            </p>
          </div>

          {/* MODAL BOTTOM THUMBNAIL STRIP */}
          <div className="mt-3 pt-3 border-t border-slate-800/80 w-full max-w-5xl overflow-x-auto flex items-center justify-center gap-2 sm:gap-3 py-1">
            {galleryData.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setLightboxIndex(idx)}
                className={`relative shrink-0 w-14 sm:w-20 aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all ${
                  idx === lightboxIndex 
                    ? 'border-cyan-400 ring-2 ring-cyan-400/40 scale-105 shadow-md' 
                    : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                }`}
              >
                <img src={img.image} alt={img.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

        </div>
      )}

    </section>
  );
}
