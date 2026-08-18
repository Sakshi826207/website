import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, User, Wrench, ShieldCheck, PackageCheck, ArrowRight, Loader2, AlertCircle, HelpCircle, Lightbulb, Edit3, RotateCcw, Search, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function ContactSection({ onOpenTrackModal }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    applianceType: 'Inverter AC',
    problemIssue: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const applianceOptions = [
    { id: 'Inverter AC', name: 'Inverter AC', desc: 'PCB / control board repair', icon: '❄️' },
    { id: 'Refrigerator', name: 'Refrigerator', desc: 'PCB / control board repair', icon: '🧊' },
    { id: 'Washing Machine', name: 'Washing Machine', desc: 'PCB / control board repair', icon: '🧺' },
    { id: 'Microwave Oven', name: 'Microwave Oven', desc: 'PCB / control board repair', icon: '🍽️' },
    { id: 'Other', name: 'Other PCB', desc: 'Other electronic PCB', icon: '⚙️' }
  ];

  // Validation per step
  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }
    const cleanMobile = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.problemIssue.trim()) {
      newErrors.problemIssue = 'Please describe the problem.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep1 = (e) => {
    e.preventDefault();
    setTouched({ ...touched, fullName: true, mobileNumber: true });
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleNextStep2 = (e) => {
    e.preventDefault();
    if (formData.applianceType) {
      setCurrentStep(3);
    }
  };

  const handleNextStep3 = (e) => {
    e.preventDefault();
    setTouched({ ...touched, problemIssue: true });
    if (validateStep3()) {
      setCurrentStep(4);
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(5); // Success confirmation step
    }, 400);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      mobileNumber: '',
      applianceType: 'Inverter AC',
      problemIssue: '',
      message: ''
    });
    setErrors({});
    setTouched({});
    setCurrentStep(1);
  };

  const getProgressPercentage = () => {
    switch (currentStep) {
      case 1: return 25;
      case 2: return 50;
      case 3: return 75;
      case 4: return 100;
      default: return 100;
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 scroll-mt-[88px] bg-slate-50/70 text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-35 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* COMPACT SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5 space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold text-blue-600 tracking-wider uppercase shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>PCB REPAIR ENQUIRY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tell Us About Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Repair</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-normal">
            Share a few simple details about your appliance and the problem. Our repair team will review your request and contact you.
          </p>
        </div>

        {/* MAIN TWO-COLUMN WIZARD LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* LEFT COLUMN: Real Multi-Step Form Wizard Card (7/12 cols ~ 60% width) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xs relative">
            
            {/* Form Wizard Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Let's Start Your Repair Request</h3>
                  <p className="text-[11px] text-slate-500 font-medium">It only takes 1 minute to submit.</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                  {getProgressPercentage()}% Complete
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-4">
              <div 
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 h-full transition-all duration-300 ease-out" 
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>

            {/* Step Indicators Bar */}
            {currentStep <= 4 && (
              <div className="grid grid-cols-4 gap-1.5 mb-4">
                {[
                  { step: 1, label: '01 YOUR DETAILS' },
                  { step: 2, label: '02 APPLIANCE' },
                  { step: 3, label: '03 PROBLEM' },
                  { step: 4, label: '04 REVIEW' }
                ].map((s) => {
                  const isActive = currentStep === s.step;
                  const isDone = currentStep > s.step;
                  return (
                    <div 
                      key={s.step}
                      className={`p-1.5 sm:p-2 rounded-lg text-center transition-all border ${
                        isActive 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-bold' 
                          : isDone 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200 font-bold' 
                            : 'bg-slate-50 text-slate-400 border-slate-200 font-medium'
                      }`}
                    >
                      <div className="text-[10px] font-mono leading-none tracking-tight flex items-center justify-center gap-1">
                        {isDone ? (
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 inline shrink-0" />
                        ) : (
                          <span className={`w-3.5 h-3.5 rounded-full inline-flex items-center justify-center text-[9px] font-extrabold ${
                            isActive ? 'bg-white text-blue-600' : 'bg-slate-200 text-slate-600'
                          }`}>{s.step}</span>
                        )}
                        <span className="hidden sm:inline truncate">{s.label.split(' ')[1]}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* STEP 1: YOUR DETAILS */}
            {currentStep === 1 && (
              <form onSubmit={handleNextStep1} className="space-y-3">
                <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider block">STEP 1</span>
                  <h4 className="text-xs font-extrabold text-slate-900">Who should we contact?</h4>
                  <p className="text-[11px] text-slate-600">Enter your basic details so our repair team can contact you.</p>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-800 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full h-9 px-3 rounded-lg border text-xs text-slate-900 transition-all focus:outline-none ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-800 mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    className={`w-full h-9 px-3 rounded-lg border text-xs text-slate-900 transition-all focus:outline-none ${
                      errors.mobileNumber ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p className="text-[11px] text-rose-500 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.mobileNumber}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-10 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs transition-all shadow-xs flex items-center justify-center space-x-1.5"
                  >
                    <span>Continue to Appliance Selection</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: APPLIANCE SELECTION */}
            {currentStep === 2 && (
              <form onSubmit={handleNextStep2} className="space-y-3">
                <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider block">STEP 2</span>
                  <h4 className="text-xs font-extrabold text-slate-900">Which PCB requires repair?</h4>
                  <p className="text-[11px] text-slate-600">Select the appliance PCB category.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {applianceOptions.map((item) => {
                    const isSelected = formData.applianceType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, applianceType: item.id })}
                        className={`p-2.5 rounded-xl border text-left transition-all flex items-center space-x-2.5 ${
                          isSelected 
                            ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-500/20 shadow-xs' 
                            : 'bg-white border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <h5 className="text-xs font-bold text-slate-900">{item.name}</h5>
                          <span className="text-[10px] text-slate-500 block">{item.desc}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="h-9 px-3 rounded-lg border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 h-9 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs transition-all shadow-xs flex items-center justify-center space-x-1.5"
                  >
                    <span>Continue to Problem Details</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: PROBLEM DESCRIPTION */}
            {currentStep === 3 && (
              <form onSubmit={handleNextStep3} className="space-y-3">
                <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider block">STEP 3</span>
                  <h4 className="text-xs font-extrabold text-slate-900">Describe the PCB issue</h4>
                  <p className="text-[11px] text-slate-600">Tell us what error code or fault is occurring.</p>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-800 mb-1">
                    Problem / Error Code <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows="3"
                    placeholder="e.g. Display shows E6 error code, compressor not starting, dead power board..."
                    value={formData.problemIssue}
                    onChange={(e) => setFormData({ ...formData, problemIssue: e.target.value })}
                    className={`w-full p-2.5 rounded-lg border text-xs text-slate-900 transition-all focus:outline-none ${
                      errors.problemIssue ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                  />
                  {errors.problemIssue && (
                    <p className="text-[11px] text-rose-500 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.problemIssue}</span>
                    </p>
                  )}
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="h-9 px-3 rounded-lg border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 h-9 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs transition-all shadow-xs flex items-center justify-center space-x-1.5"
                  >
                    <span>Review & Submit Request</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 4: REVIEW & SUBMIT */}
            {currentStep === 4 && (
              <form onSubmit={handleFinalSubmit} className="space-y-3">
                <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider block">STEP 4</span>
                  <h4 className="text-xs font-extrabold text-slate-900">Confirm Your Repair Request</h4>
                  <p className="text-[11px] text-slate-600">Review your details before submitting to our repair team.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span className="text-slate-500 font-medium">Name:</span>
                    <span className="font-bold text-slate-900">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span className="text-slate-500 font-medium">Mobile:</span>
                    <span className="font-bold text-slate-900">{formData.mobileNumber}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span className="text-slate-500 font-medium">Appliance PCB:</span>
                    <span className="font-bold text-blue-600">{formData.applianceType}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-slate-500 font-medium block">Problem Description:</span>
                    <p className="font-semibold text-slate-800 bg-white p-2 rounded border border-slate-200">
                      {formData.problemIssue}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="h-9 px-3 rounded-lg border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 h-9 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs transition-all shadow-xs flex items-center justify-center space-x-1.5"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                        <span>Submit Repair Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 5: SUCCESS CONFIRMATION */}
            {currentStep === 5 && (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>

                <h3 className="text-lg font-extrabold text-slate-900">Repair Request Received!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto font-normal">
                  Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Our senior repair technician will contact you on <span className="font-bold text-blue-600">{formData.mobileNumber}</span> shortly.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleResetForm}
                    className="h-9 px-4 rounded-lg bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs transition-colors shadow-xs"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: Contact Info & Support Cards (5/12 cols ~ 40% width) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Phone Support Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs space-y-2">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-cyan-300" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Need Immediate Support?</h4>
              </div>
              <p className="text-xs text-blue-100">Talk directly to our PCB repair team for urgent advice.</p>
              
              <a 
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="w-full h-9 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-extrabold text-xs transition-all shadow-xs flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Repair Team: {COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>

            {/* Workshop Information Card */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="pb-2 border-b border-slate-100">
                <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider block">WORKSHOP INFORMATION</span>
                <h4 className="text-sm font-extrabold text-slate-900">AG Enterprises</h4>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700 font-medium">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Main Lab Address</span>
                    <span className="text-[11px] text-slate-500 leading-tight block">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Email Inquiry</span>
                    <span className="text-[11px] text-slate-500 leading-tight block">{COMPANY_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Working Hours</span>
                    <span className="text-[11px] text-slate-500 leading-tight block">{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
