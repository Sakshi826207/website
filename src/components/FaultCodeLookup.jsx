import React, { useState } from 'react';
import { Search, AlertTriangle, Wrench, Cpu } from 'lucide-react';
import { FAULT_CODES_DATABASE } from '../data/companyData';

export default function FaultCodeLookup({ onOpenQuoteForm }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');

  const brandsList = ['All', ...new Set(FAULT_CODES_DATABASE.map(f => f.brand))];

  const filteredCodes = FAULT_CODES_DATABASE.filter(item => {
    const matchesBrand = selectedBrand === 'All' || item.brand === selectedBrand;
    const matchesQuery = 
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.appliance.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesQuery;
  });

  return (
    <section id="fault-codes" className="py-20 relative bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <Search className="w-3.5 h-3.5 text-blue-600" />
            <span>ERROR CODE DIAGNOSTIC DATABASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Appliance PCB Fault Code Finder
          </h2>
          <p className="text-base text-slate-600">
            Is your Inverter AC or Washing Machine displaying an error code? Search below to find out what is failing on your circuit board.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            
            {/* Search Input */}
            <div className="relative flex-grow">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search error code (e.g. E7, CH05, E6, E02)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none font-mono transition-all shadow-subtle"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-slate-700"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Brand Filter */}
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 text-slate-900 text-sm outline-none font-mono cursor-pointer shadow-subtle"
            >
              {brandsList.map(b => (
                <option key={b} value={b}>
                  Brand: {b}
                </option>
              ))}
            </select>

          </div>
        </div>

        {/* Fault Codes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {filteredCodes.length > 0 ? (
            filteredCodes.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle hover:shadow-premium hover:border-blue-400 transition-all space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-700 font-mono font-bold text-sm">
                      {item.code}
                    </span>
                    <span className="text-xs font-mono text-slate-900 font-bold">{item.brand}</span>
                    <span className="text-xs text-slate-500">• {item.appliance}</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                    REPAIRABLE
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase">Meaning:</h4>
                  <p className="text-xs text-slate-800 font-medium mt-0.5">{item.meaning}</p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <h4 className="text-[11px] font-mono text-blue-700 font-bold flex items-center">
                    <Wrench className="w-3 h-3 mr-1 text-blue-600" /> AG Repair Solution:
                  </h4>
                  <p className="text-xs text-slate-600 font-mono mt-0.5">{item.solution}</p>
                </div>

                <button
                  onClick={onOpenQuoteForm}
                  className="w-full mt-2 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-xs font-semibold text-blue-700 transition-colors text-center"
                >
                  Book PCB Repair for Code {item.code} →
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-2 py-12 text-center rounded-xl bg-slate-50 border border-slate-200">
              <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <p className="text-sm text-slate-800 font-mono">No matching error codes found for "{searchQuery}"</p>
              <p className="text-xs text-slate-500 mt-1">Don't worry! We repair all unlisted error codes as well.</p>
              <button
                onClick={onOpenQuoteForm}
                className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold font-mono shadow-subtle hover:bg-blue-700"
              >
                Consult Technician Directly
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

