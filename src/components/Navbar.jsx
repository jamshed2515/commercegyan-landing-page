import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, GraduationCap } from 'lucide-react';

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
          ? 'bg-[#F7F3E8]/92 backdrop-blur-md border-b border-[#DCD2B8] py-3'
          : 'bg-[#F7F3E8]/85 backdrop-blur-sm border-b border-[#DCD2B8] py-4'
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Header Logo Lockup */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink-0 py-1">
            {/* Circular Monogram Mark */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0F2C4C] text-[#D9A441] flex items-center justify-center shrink-0">
              <svg className="w-[18px] h-[18px] sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
                <path d="M4 10L12 5L20 10L12 15L4 10Z" stroke="#D9A441" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M7 12.5V17.5C7 17.5 9 19 12 19C15 19 17 17.5 17 17.5V12.5" stroke="#D9A441" strokeWidth="1.6" />
              </svg>
            </div>
            
            {/* Brand Name & Tagline Lockup */}
            <div className="flex flex-col justify-center leading-none">
              <div className="font-display text-[17px] sm:text-[19px] font-bold text-[#0F2C4C] tracking-tight">
                Commerce <span className="text-[#B9832A]">Gyan</span>
              </div>
              <span className="font-mono text-[8.5px] sm:text-[9px] font-semibold text-[#5A6376] tracking-[0.12em] sm:tracking-[0.14em] uppercase mt-1">
                Learn · Practice · Succeed
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-sans font-medium text-[14px] text-[#1C2430]">
            <a href="#why" className="hover:text-[#B9832A] transition-colors relative py-1 group">
              <span>Why Us</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B9832A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a href="#programs" className="hover:text-[#B9832A] transition-colors relative py-1 group">
              <span>Programs</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B9832A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a href="#mentorship" className="hover:text-[#B9832A] transition-colors relative py-1 group">
              <span>Mentorship</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B9832A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a href="#results" className="hover:text-[#B9832A] transition-colors relative py-1 group">
              <span>Results</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B9832A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a href="#faq" className="hover:text-[#B9832A] transition-colors relative py-1 group">
              <span>FAQ</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B9832A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenCounselling}
              className="bg-[#0F2C4C] hover:bg-[#132F52] text-[#F4F1E4] text-[13.5px] font-semibold px-5 py-2.5 rounded-[2px] border border-[#0F2C4C] transition-all cursor-pointer font-sans flex items-center gap-2"
            >
              <span>Book Free Counselling</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F4F1E4]" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 lg:hidden">
            <button
              onClick={onOpenCounselling}
              className="bg-[#0F2C4C] hover:bg-[#132F52] text-[#F4F1E4] text-[10.5px] sm:text-[11px] font-semibold px-2 py-1.5 sm:px-2.5 rounded-[2px] font-sans transition-colors shrink-0 whitespace-nowrap"
            >
              Counselling
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center text-[#0F2C4C] hover:bg-[#F1EBDA] rounded transition-colors shrink-0 -mr-1.5"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F3E8] border-b border-[#DCD2B8] px-4 sm:px-6 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2 font-sans font-medium text-[14px] text-[#1C2430]">
            <a
              href="#why"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 hover:bg-[#F1EBDA] rounded"
            >
              Why Commerce Gyan
            </a>
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 hover:bg-[#F1EBDA] rounded"
            >
              Programs & Courses
            </a>
            <a
              href="#mentorship"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 hover:bg-[#F1EBDA] rounded"
            >
              Lead Mentor (Tabarak Sir)
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 hover:bg-[#F1EBDA] rounded"
            >
              Student Results
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 hover:bg-[#F1EBDA] rounded"
            >
              FAQ
            </a>
          </nav>

          <div className="pt-3 border-t border-[#DCD2B8] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCounselling();
              }}
              className="w-full bg-[#D9A441] text-[#0F2C4C] font-semibold text-[13.5px] py-3 rounded-[2px] shadow-sm flex items-center justify-center gap-2 font-sans"
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
