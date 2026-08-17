import React from 'react';
import { MapPin, Building2, CheckCircle2 } from 'lucide-react';

export default function LocationSeoSection() {
  return (
    <section className="py-10 sm:py-12 bg-white text-slate-900 border-b border-slate-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          
          <div className="space-y-3 text-left max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600 uppercase">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>LOCAL SERVICE COVERAGE</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Professional PCB Repair Services in Pune & Solapur
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              AG Enterprises provides professional PCB repair services in Pune & Solapur for Inverter ACs, Refrigerators, Washing Machines and Microwave Ovens. Our component-level PCB repair approach focuses on accurate diagnosis, expert repair and quality testing.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-2 shrink-0 w-full md:w-auto">
            <div className="flex items-center space-x-2 font-bold text-slate-900">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>Hub Locations:</span>
            </div>
            <div className="space-y-1 font-medium text-slate-600">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pune Region Rework Lab</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Solapur Regional Service Hub</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
