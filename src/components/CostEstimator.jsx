import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Zap, TrendingDown } from 'lucide-react';
import { SERVICES } from '../data/companyData';

export default function CostEstimator({ onOpenQuoteForm }) {
  const [appliance, setAppliance] = useState('inverter-ac');
  const [issueType, setIssueType] = useState('power-smps');
  const [urgency, setUrgency] = useState('standard');

  const issueOptions = {
    'inverter-ac': [
      { id: 'power-smps', label: 'Dead PCB / No Power (SMPS Failure)', basePrice: 850, newBoardPrice: 5500 },
      { id: 'comm-error', label: 'E6 / CH05 Communication Fault', basePrice: 950, newBoardPrice: 6200 },
      { id: 'ipm-short', label: 'IPM Module / Compressor Tripping', basePrice: 1250, newBoardPrice: 7800 },
      { id: 'mcu-issue', label: 'MCU Reprogramming & Micro-soldering', basePrice: 1100, newBoardPrice: 6800 },
    ],
    'refrigerator': [
      { id: 'power-smps', label: 'Dead Power Board (Surge Damage)', basePrice: 750, newBoardPrice: 4200 },
      { id: 'compressor-driver', label: 'BLDC Inverter Compressor Not Running', basePrice: 950, newBoardPrice: 5800 },
      { id: 'defrost-logic', label: 'Defrost Heater / Temp Relay Failure', basePrice: 700, newBoardPrice: 3800 },
    ],
    'washing-machine': [
      { id: 'power-smps', label: 'No Display / Main Board Dead', basePrice: 800, newBoardPrice: 4800 },
      { id: 'triac-burnt', label: 'E02 Door Lock / Drain Valve Triac Burnt', basePrice: 850, newBoardPrice: 5200 },
      { id: 'motor-inverter', label: 'Direct Drive / Motor Inverter Module', basePrice: 1150, newBoardPrice: 6900 },
    ],
    'microwave': [
      { id: 'power-smps', label: 'Display Blank / Dead Transformer Circuit', basePrice: 650, newBoardPrice: 3200 },
      { id: 'relay-touch', label: 'Heating Relay & Touch Keypad Logic', basePrice: 750, newBoardPrice: 3600 },
    ],
    'component-level': [
      { id: 'power-smps', label: 'General Component Micro-Soldering', basePrice: 500, newBoardPrice: 3500 },
    ],
    'advanced-diagnostics': [
      { id: 'power-smps', label: 'Oscilloscope Waveform Trace & Thermal Check', basePrice: 350, newBoardPrice: 3000 },
    ]
  };

  const currentIssues = issueOptions[appliance] || issueOptions['inverter-ac'];
  const selectedIssue = currentIssues.find(i => i.id === issueType) || currentIssues[0];

  const urgencyMultiplier = urgency === 'express' ? 1.25 : 1.0;
  const estimatedCostMin = Math.round(selectedIssue.basePrice * urgencyMultiplier);
  const estimatedCostMax = Math.round(estimatedCostMin * 1.3);
  const moneySavedMin = selectedIssue.newBoardPrice - estimatedCostMax;
  const moneySavedMax = selectedIssue.newBoardPrice - estimatedCostMin;

  return (
    <section id="cost-estimator" className="py-20 relative bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span>TRANSPARENT REPAIR PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Instant Repair Cost Estimator
          </h2>
          <p className="text-base text-slate-600">
            Calculate your estimated component-level repair cost instantly and see how much you save versus buying a brand new factory board.
          </p>
        </div>

        {/* Calculator Widget Container */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-premium">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls Form */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Select Appliance */}
              <div>
                <label className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">
                  1. Select Appliance Category
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICES.map(s => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setAppliance(s.id);
                        const opts = issueOptions[s.id] || issueOptions['inverter-ac'];
                        setIssueType(opts[0].id);
                      }}
                      className={`p-3 rounded-lg border text-left text-xs font-semibold transition-all ${
                        appliance === s.id
                          ? 'bg-blue-600 border-blue-600 text-white shadow-subtle'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Fault Type */}
              <div>
                <label className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">
                  2. Select PCB Fault Symptom
                </label>
                <div className="space-y-2">
                  {currentIssues.map(issue => (
                    <button
                      key={issue.id}
                      onClick={() => setIssueType(issue.id)}
                      className={`w-full p-3 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${
                        issueType === issue.id
                          ? 'bg-blue-50 border-blue-400 text-blue-900 font-bold shadow-subtle'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span>{issue.label}</span>
                      <span className="font-mono text-[11px] text-blue-600 font-bold">From ₹{issue.basePrice}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Turnaround Urgency */}
              <div>
                <label className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">
                  3. Select Turnaround Speed
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setUrgency('standard')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      urgency === 'standard'
                        ? 'bg-blue-600 border-blue-600 text-white shadow-subtle'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">Standard Service</div>
                    <div className="text-[11px] font-mono opacity-80">24 - 48 Hours</div>
                  </button>

                  <button
                    onClick={() => setUrgency('express')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      urgency === 'express'
                        ? 'bg-blue-600 border-blue-600 text-white shadow-subtle'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">Express Priority</div>
                    <div className="text-[11px] font-mono opacity-80">4 - 12 Hours</div>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Side: Price Output Summary Card */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-white border border-slate-200 shadow-premium space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[11px] font-mono font-bold text-blue-600 uppercase">ESTIMATED REPAIR QUOTE</span>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 mt-1">
                  ₹{estimatedCostMin} - ₹{estimatedCostMax}
                </div>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  *Includes component cost, micro-soldering & bench load testing.
                </p>
              </div>

              {/* Money Saving Badge */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <div className="flex items-center space-x-2 text-xs font-mono text-emerald-800 font-bold">
                  <TrendingDown className="w-4 h-4 text-emerald-600" />
                  <span>ESTIMATED SAVINGS:</span>
                </div>
                <div className="text-base font-bold font-mono text-emerald-700 pl-6">
                  Save ₹{moneySavedMin} - ₹{moneySavedMax} vs New Board!
                </div>
                <p className="text-[11px] text-emerald-800 pl-6">
                  Brand new replacement board cost: ~₹{selectedIssue.newBoardPrice}
                </p>
              </div>

              {/* Service Features Included */}
              <div className="space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Free Initial Diagnostics & Multimeter Inspection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Japanese Low-ESR Capacitors & OEM Microchips</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Up to 90 Days AG Enterprises Repair Warranty</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenQuoteForm}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-premium transition-all flex items-center justify-center space-x-2"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>Request Repair Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

