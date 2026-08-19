import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenCounselling }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Commerce Gyan Logo"
              className="h-10 lg:h-12 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-700">
            <a href="#programs" className="hover:text-[#00AEEF] transition-colors">
              Programs
            </a>
            <a href="#differentiators" className="hover:text-[#00AEEF] transition-colors">
              Why Us
            </a>
            <a href="#mentorship" className="hover:text-[#00AEEF] transition-colors">
              Mentorship
            </a>
            <a href="#results" className="hover:text-[#00AEEF] transition-colors">
              Results <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-[#00AEEF]/10 text-[#00AEEF] rounded-full">2025</span>
            </a>
            <a href="#gallery" className="hover:text-[#00AEEF] transition-colors">
              Classroom
            </a>
            <a href="#faq" className="hover:text-[#00AEEF] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:8271365450"
              className="flex items-center gap-2 text-slate-700 hover:text-[#1A3B70] text-sm font-semibold transition-colors bg-slate-100/80 hover:bg-slate-100 px-3.5 py-2 rounded-full border border-slate-200/60"
            >
              <div className="w-6 h-6 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>8271365450</span>
            </a>

            <button
              onClick={onOpenCounselling}
              className="bg-[#1A3B70] hover:bg-[#0A192F] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-98 flex items-center gap-2 cursor-pointer"
            >
              <span>Book Free Counselling</span>
              <ArrowRight className="w-4 h-4 text-[#FFCC00]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCounselling}
              className="bg-[#1A3B70] text-white text-xs font-bold px-3 py-2 rounded-lg"
            >
              Counselling
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-3 font-medium text-slate-700 text-sm">
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 hover:bg-slate-50 rounded-lg"
            >
              Programs & Courses
            </a>
            <a
              href="#differentiators"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 hover:bg-slate-50 rounded-lg"
            >
              Why Commerce Gyan
            </a>
            <a
              href="#mentorship"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 hover:bg-slate-50 rounded-lg"
            >
              Lead Mentor
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 hover:bg-slate-50 rounded-lg"
            >
              Student Results 2025
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 hover:bg-slate-50 rounded-lg"
            >
              Classroom Moments
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 hover:bg-slate-50 rounded-lg"
            >
              FAQ
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="tel:8271365450"
              className="flex items-center justify-center gap-2 bg-slate-100 text-slate-800 text-sm font-semibold py-2.5 rounded-xl"
            >
              <Phone className="w-4 h-4 text-[#00AEEF]" />
              <span>Call 8271365450</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCounselling();
              }}
              className="w-full bg-[#FFCC00] text-[#1A3B70] font-bold text-sm py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>Book Free Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
