import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, UserCheck, MessageSquare } from 'lucide-react';
import { CLIENT_REVIEWS } from '../data/companyData';

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const nextSlide = () => {
    setActiveTab((prev) => (prev + 1) % CLIENT_REVIEWS.length);
  };

  const prevSlide = () => {
    setActiveTab((prev) => (prev - 1 + CLIENT_REVIEWS.length) % CLIENT_REVIEWS.length);
  };

  // Auto-advance review selection every 5.5s
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <section id="reviews" className="py-12 sm:py-16 scroll-mt-[88px] bg-slate-50/70 text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-35 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* COMPACT SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5 space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold text-blue-600 tracking-wider uppercase shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>CLIENT REVIEWS & FEEDBACK</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-normal">
            Trusted by homeowners, HVAC technicians, and appliance workshops across Maharashtra.
          </p>
        </div>

        {/* ATTRACTIVE 3-CARD DISPLAY / CAROUSEL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-4">
          {[0, 1, 2].map((offset) => {
            const index = (activeTab + offset) % CLIENT_REVIEWS.length;
            const review = CLIENT_REVIEWS[index];

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: offset * 0.08 }}
                className={`bg-white border rounded-xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 flex-col justify-between relative overflow-hidden group hover:-translate-y-1 ${
                  offset > 0 ? 'hidden md:flex' : 'flex'
                } ${
                  offset === 0 ? 'border-blue-300 ring-2 ring-blue-500/10' : 'border-slate-200/90'
                }`}
              >
                <div>
                  {/* TOP OF THE BOX: Customer Avatar Image + Name + Role */}
                  <div className="flex items-center space-x-3 pb-3 mb-3 border-b border-slate-100 relative z-10">
                    <div className="relative shrink-0">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-11 h-11 rounded-full object-cover border-2 border-blue-500 shadow-xs group-hover:scale-105 transition-transform" 
                      />
                      {review.verified && (
                        <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 text-white rounded-full p-0.5 border-2 border-white shadow-xs" title="Verified Client">
                          <CheckCircle2 className="w-2.5 h-2.5 text-white fill-emerald-500" />
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                        {review.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium leading-snug truncate">
                        {review.role}
                      </p>
                      <span className="text-[10px] font-semibold text-blue-600 block truncate">
                        {review.location}
                      </span>
                    </div>
                  </div>

                  {/* 5-STAR RATING & APPLIANCE BADGE */}
                  <div className="flex items-center justify-between mb-2 relative z-10">
                    <div className="flex items-center space-x-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span className="text-[10px] font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 truncate max-w-[150px]">
                      {review.appliance}
                    </span>
                  </div>

                  {/* REVIEW TEXT BELOW THE AVATAR */}
                  <div className="relative z-10 my-2">
                    <Quote className="w-4 h-4 text-blue-300/40 mb-0.5" />
                    <p className="text-xs text-slate-700 font-medium leading-relaxed italic line-clamp-3">
                      "{review.review}"
                    </p>
                  </div>
                </div>

                {/* BOTTOM FOOTER OF THE BOX: Verification & Date */}
                <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-slate-400 relative z-10">
                  <span className="inline-flex items-center space-x-1 text-emerald-600">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Review</span>
                  </span>
                  <span>{review.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CONTROLS & PAGINATION */}
        <div className="flex items-center justify-between max-w-xl mx-auto pt-3 border-t border-slate-200/80">
          {/* Dots Indicator */}
          <div className="flex items-center space-x-1.5">
            {CLIENT_REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeTab 
                    ? 'w-6 bg-blue-600' 
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-800 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center transition-all shadow-xs active:scale-95"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center transition-all shadow-xs active:scale-95"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Bottom Trust Callout Badges */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
          <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs font-semibold text-slate-800 flex items-center justify-center space-x-2">
            <UserCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="text-[11px]">1,000+ Satisfied Clients</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs font-semibold text-slate-800 flex items-center justify-center space-x-2">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
            <span className="text-[11px]">4.9 / 5 Average Rating</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs font-semibold text-slate-800 flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-[11px]">100% Verified Feedback</span>
          </div>
        </div>

      </div>
    </section>
  );
}
