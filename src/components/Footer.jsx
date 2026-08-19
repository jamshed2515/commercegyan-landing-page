import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, ArrowUp, GraduationCap } from 'lucide-react';

export default function Footer({ onTriggerEasterEgg }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A2038] text-[#AFC0D6] border-t border-white/10 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#0F2C4C] text-[#D9A441] flex items-center justify-center border border-[#D9A441]/30 shrink-0">
                <GraduationCap className="w-5 h-5 text-[#D9A441]" />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <div className="font-display flex items-baseline text-lg font-bold tracking-tight">
                  <span className="text-white">Commerce</span>
                  <span className="text-[#D9A441] ml-1">Gyan</span>
                </div>
                <span className="font-mono text-[8px] font-bold text-[#AFC0D6] tracking-[0.14em] uppercase mt-0.5">
                  LEARN • PRACTICE • SUCCEED
                </span>
              </div>
            </div>

            <p className="text-xs text-[#AFC0D6] leading-relaxed font-normal">
              The premier commerce coaching institute in Katrasgarh — conceptual preparation for School Academics, Boards, and CA/CMA/CS Foundations.
            </p>
            
            {/* Secret Easter Egg Emblem Trigger */}
            <div
              onClick={onTriggerEasterEgg}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-white/5 border border-white/10 text-[11px] font-mono text-[#AFC0D6] hover:text-[#D9A441] cursor-pointer transition-colors"
              title="Click secret emblem"
            >
              <span>🎓 Katrasgarh Academic Register</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#D9A441] uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-[#AFC0D6] font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#why" className="hover:text-white transition-colors">Why Commerce Gyan</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs & Courses</a></li>
              <li><a href="#mentorship" className="hover:text-white transition-colors">Lead Mentor (Tabarak Sir)</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Results & Toppers 2025</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Programs Overview */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#D9A441] uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2 text-xs text-[#AFC0D6] font-medium">
              <li><a href="#programs" className="hover:text-white transition-colors">School Academics (Class 7–10)</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Class 11 Commerce Boards</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Class 12 Commerce Boards</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">CA Foundation Prep</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">CMA Foundation Prep</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">CS Foundation Prep</a></li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Information */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#D9A441] uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-xs text-[#AFC0D6] font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <span>Behind Rajasthani Dharamshala, Katrasgarh, Dhanbad, Jharkhand – 828113</span>
              </li>
              <li className="flex items-center gap-2.5 font-mono">
                <Phone className="w-4 h-4 text-[#D9A441] shrink-0" />
                <a href="tel:8271365450" className="hover:text-white transition-colors">+91 82713 65450</a>
              </li>
              <li className="flex items-center gap-2.5 font-mono">
                <Mail className="w-4 h-4 text-[#D9A441] shrink-0" />
                <a href="mailto:info@commercegyan.com" className="hover:text-white transition-colors">info@commercegyan.com</a>
              </li>
              <li className="pt-2">
                <a
                  href="https://maps.google.com/?q=Commerce+Gyan+Katrasgarh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#D9A441] hover:underline font-semibold"
                >
                  <span>Open Location on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/50">
          <p>© 2026 Commerce Gyan. All Rights Reserved. Katrasgarh, Dhanbad.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors p-2 rounded hover:bg-white/5 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#D9A441]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
