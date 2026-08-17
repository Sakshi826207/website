import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Zap, ArrowRight, Activity, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenTrackModal, onOpenQuoteForm }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'why-us', 'vision', 'gallery', 'reviews', 'contact'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 110;
          if (window.scrollY >= top) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Vision', href: '#vision' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header 
      className="sticky top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out h-[76px] sm:h-[82px] md:h-[88px] bg-white border-b border-slate-200/90 shadow-xs"
    >
      <div className="max-w-[1440px] mx-auto w-full h-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between relative">
        
        {/* Left: Prominent & Larger AG Enterprises Logo */}
        <a 
          href="#home" 
          className="flex items-center shrink-0 group focus:outline-none py-1 mr-4 lg:mr-8 xl:mr-12" 
          title="AG Enterprises - PCB Repair Engineering"
        >
          <div className="h-[52px] sm:h-[58px] md:h-[64px] lg:h-[68px] w-auto flex items-center justify-center relative">
            <img 
              src="/logo/logo.png" 
              alt="AG Enterprises Logo" 
              className="h-full w-auto object-contain max-w-none transition-transform duration-250 ease-out group-hover:scale-[1.04]" 
            />
          </div>
        </a>

        {/* Center: 8 Navigation Links with clean spacing */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-9">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-2 text-sm xl:text-[15px] font-medium tracking-tight transition-all duration-200 group/link whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {link.name}

                {/* Smooth center-outward underline animation */}
                <span 
                  className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-blue-600 transition-all duration-250 ease-out transform ${
                    isActive 
                      ? 'w-full opacity-100 scale-x-100' 
                      : 'w-full opacity-0 scale-x-0 group-hover/link:opacity-100 group-hover/link:scale-x-100'
                  }`} 
                />
              </a>
            );
          })}
        </nav>

        {/* Right Side: Prominent CTA Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-3.5 xl:gap-4 shrink-0 ml-auto pl-4">
          {/* Secondary CTA: Track Repair Order */}
          <button
            onClick={onOpenTrackModal}
            className="h-[44px] px-4 xl:px-5 rounded-xl border border-slate-200/90 bg-slate-50/90 hover:bg-blue-50/70 hover:border-blue-400 text-slate-800 hover:text-blue-700 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] group"
          >
            <Search className="w-4 h-4 text-blue-600 transition-transform group-hover:scale-110" />
            <span>Track Repair Order</span>
          </button>
          
          {/* Primary CTA: Get Repair Quote (Main Conversion Action) */}
          <button
            onClick={onOpenQuoteForm}
            className="h-[44px] px-5 xl:px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2.5 group"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Get Repair Quote</span>
            <ArrowRight className="w-4 h-4 text-white/90 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile View Header Controls */}
        <div className="flex lg:hidden items-center gap-2.5 shrink-0 ml-auto">
          <button
            onClick={onOpenTrackModal}
            className="h-10 px-3 rounded-xl bg-slate-100 border border-slate-200 text-blue-600 text-xs font-semibold flex items-center gap-1.5 hover:bg-blue-50 transition-colors"
            title="Track Repair Order"
          >
            <Search className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">Track Order</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accent line at bottom of navbar */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none" />

      {/* Mobile Responsive Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[76px] sm:top-[82px] md:top-[88px] inset-x-0 bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-5 sm:px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-300 z-40 max-h-[calc(100vh-88px)] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            
            {/* Mobile Header Badge */}
            <div className="pb-3 border-b border-slate-100 text-xs font-mono text-blue-600 flex items-center justify-between">
              <div className="flex items-center">
                <Activity className="w-4 h-4 mr-2 animate-pulse text-blue-600" />
                <span>AG ENTERPRISES • PCB REPAIR</span>
              </div>
              <span className="text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-sans font-semibold">ISO Certified</span>
            </div>

            {/* Prominent Quick Mobile Action CTAs at Top of Menu */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteForm();
                }}
                className="w-full h-[46px] rounded-xl bg-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:bg-blue-700 transition-all active:scale-[0.99]"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>Get Repair Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrackModal();
                }}
                className="w-full h-[46px] rounded-xl bg-slate-100 border border-slate-200/90 text-slate-800 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 hover:text-blue-600 transition-colors active:scale-[0.99]"
              >
                <Search className="w-4 h-4 text-blue-600" />
                <span>Track Repair Order</span>
              </button>
            </div>

            {/* Vertical List of 8 Menu Items */}
            <div className="pt-2 border-t border-slate-100 grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between cursor-pointer ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 shadow-sm' 
                        : 'text-slate-800 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  </a>
                );
              })}
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
