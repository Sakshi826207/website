import React, { useState, useEffect } from 'react';
import { X, Search, CheckCircle2, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
import { DEMO_TRACKING_ORDERS } from '../data/companyData';

export default function TrackRepairModal({ isOpen, onClose }) {
  const [trackingId, setTrackingId] = useState('');
  const [activeResult, setActiveResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSearch = (idToSearch) => {
    const searchKey = (idToSearch || trackingId).trim().toUpperCase();
    if (!searchKey) {
      setErrorMsg('Job Sheet ID not found. Please check the ID and try again.');
      setActiveResult(null);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (DEMO_TRACKING_ORDERS[searchKey]) {
        setActiveResult(DEMO_TRACKING_ORDERS[searchKey]);
        setErrorMsg('');
      } else {
        setActiveResult(null);
        setErrorMsg(`Job Sheet ID "${searchKey}" not found. Please check the ID and try again.`);
      }
    }, 180);
  };

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 border-emerald-200 text-emerald-700';
      case 'In Progress':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'Pending':
        return 'bg-amber-50 border-amber-200 text-amber-700';
      case 'Cancelled':
        return 'bg-rose-50 border-rose-200 text-rose-700';
      default:
        return 'bg-slate-100 border-slate-200 text-slate-700';
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-[8px] animate-in fade-in duration-200"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      
      <div 
        className="relative w-full max-w-[680px] w-[calc(100vw-24px)] sm:w-[calc(100vw-32px)] rounded-[20px] sm:rounded-[24px] bg-white border border-blue-500/10 p-6 sm:p-8 space-y-6 shadow-[0_20px_60px_rgba(15,23,42,0.14)] max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-250"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 min-w-[40px] min-h-[40px] rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 hover:scale-105 transition-all duration-200 flex items-center justify-center focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Section */}
        <div className="flex items-center space-x-4 pr-10">
          <div className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-[16px] bg-gradient-to-br from-blue-50 to-blue-100/70 border border-blue-200/60 flex items-center justify-center shadow-subtle shrink-0">
            <Search className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
              Track PCB Repair Order
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-0.5 font-medium">
              Enter your <span className="text-blue-600 font-semibold">AG Enterprises</span> Job Sheet ID
            </p>
          </div>
        </div>

        {/* Input Bar + Search Button Section */}
        <div className="space-y-4 pt-1">
          <div className="flex flex-col sm:flex-row gap-2.5">
            {/* Input with Search Icon */}
            <div className="relative flex-grow">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="e.g. AG-2026-8842"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full h-[48px] pl-10 pr-4 rounded-[12px] bg-[#F8FAFC] focus:bg-white border border-[#DCE5F2] focus:border-blue-600 text-slate-900 font-mono text-sm placeholder:text-slate-400 focus:ring-4 focus:ring-blue-600/10 transition-all duration-200 outline-none"
              />
            </div>

            {/* Track Action Button */}
            <button
              onClick={() => handleSearch()}
              disabled={isLoading}
              className="h-[48px] px-6 sm:min-w-[120px] rounded-[12px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 shrink-0 disabled:opacity-75"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin text-white" />
              ) : (
                <>
                  <span>Track</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* User-friendly Demo Job Chips Section */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Try a demo job:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setTrackingId('AG-2026-8842');
                  handleSearch('AG-2026-8842');
                }}
                className="bg-blue-50 hover:bg-blue-100/80 border border-blue-200/80 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-subtle"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>AG-2026-8842 · In Progress</span>
              </button>

              <button
                onClick={() => {
                  setTrackingId('AG-2026-9011');
                  handleSearch('AG-2026-9011');
                }}
                className="bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-subtle"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>AG-2026-9011 · Completed</span>
              </button>
            </div>
          </div>
        </div>

        {/* Soft Error Alert Box */}
        {errorMsg && (
          <div className="p-4 rounded-2xl bg-rose-50/90 border border-rose-200/80 flex items-start gap-3 text-rose-900 animate-in fade-in duration-200">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-rose-950">Job Sheet ID not found</div>
              <div className="text-xs text-rose-700 mt-0.5 font-medium">{errorMsg}</div>
            </div>
          </div>
        )}

        {/* Result Details Display */}
        {activeResult && (
          <div className="space-y-6 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
            
            {/* Status Overview Card */}
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-semibold text-emerald-700">Repair Order Found</span>
                </div>
                <div className="text-lg font-extrabold text-[#0F172A] font-mono mt-1">{activeResult.id}</div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">
                  {activeResult.appliance} • <span className="text-blue-600">{activeResult.issue}</span>
                </div>
              </div>

              <div className="sm:text-right">
                <span className={`px-3 py-1 rounded-full border text-xs font-bold inline-block ${getStatusBadgeStyle(activeResult.status)}`}>
                  ● {activeResult.status}
                </span>
                <div className="text-xs text-slate-500 font-medium mt-1">Est. Delivery: {activeResult.estimatedCompletion}</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-600">
                <span>BENCH REPAIR PROGRESS</span>
                <span className="text-blue-600 font-mono font-bold">{activeResult.progress}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200/60">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-500 rounded-full"
                  style={{ width: `${activeResult.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Stage Timeline */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">WORKSHOP STAGE TIMELINE</h4>
              <div className="space-y-2">
                {activeResult.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                      step.completed
                        ? 'bg-blue-50/60 border-blue-200/80 text-slate-900 font-medium'
                        : 'bg-slate-50/40 border-slate-200/40 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle2 className={`w-4 h-4 ${step.completed ? 'text-blue-600' : 'text-slate-300'}`} />
                      <span className={step.completed ? 'text-slate-900 font-bold' : 'text-slate-400'}>
                        {step.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">{step.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}


