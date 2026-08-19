import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, ArrowUp, GraduationCap } from 'lucide-react';

export default function Footer({ onTriggerEasterEgg }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#1A3B70] text-[#FFCC00] flex items-center justify-center border border-[#FFCC00]/20 shrink-0">
                <GraduationCap className="w-5 h-5 text-[#FFCC00]" />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <div className="flex items-baseline text-lg font-extrabold tracking-tight">
                  <span className="text-white">Commerce</span>
                  <span className="text-[#FFCC00] ml-1">Gyan</span>
                </div>
                <span className="text-[8px] font-bold text-slate-400 tracking-[0.14em] uppercase mt-0.5">
                  LEARN | PRACTICE | SUCCEED
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Commerce Gyan in Katrasgarh is the premier commerce coaching institute offering conceptual preparation for School Academics, Boards, and Professional CA, CMA & CS Foundation certifications.
            </p>
            
            {/* Secret Easter Egg Emblem Trigger */}
            <div
              onClick={onTriggerEasterEgg}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 hover:text-[#FFCC00] cursor-pointer transition-colors"
              title="Click secret emblem"
            >
              <span>🎓 Katrasgarh Academic Excellence</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#" className="hover:text-[#00AEEF] transition-colors">Home</a></li>
              <li><a href="#programs" className="hover:text-[#00AEEF] transition-colors">Programs & Courses</a></li>
              <li><a href="#differentiators" className="hover:text-[#00AEEF] transition-colors">Why Commerce Gyan</a></li>
              <li><a href="#mentorship" className="hover:text-[#00AEEF] transition-colors">Lead Mentor (Tabarak Sir)</a></li>
              <li><a href="#results" className="hover:text-[#00AEEF] transition-colors">Results & Toppers 2025</a></li>
              <li><a href="#faq" className="hover:text-[#00AEEF] transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Col 3: Programs Overview */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#programs" className="hover:text-[#00AEEF] transition-colors">School Academics (Class 7–10)</a></li>
              <li><a href="#programs" className="hover:text-[#00AEEF] transition-colors">Class 11 Commerce Boards</a></li>
              <li><a href="#programs" className="hover:text-[#00AEEF] transition-colors">Class 12 Commerce Boards</a></li>
              <li><a href="#programs" className="hover:text-[#00AEEF] transition-colors">CA Foundation Prep</a></li>
              <li><a href="#programs" className="hover:text-[#00AEEF] transition-colors">CMA Foundation Prep</a></li>
              <li><a href="#programs" className="hover:text-[#00AEEF] transition-colors">CS Foundation Prep</a></li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-xs text-slate-400 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <span>Behind Rajasthani Dharamshala, Katrasgarh, Dhanbad, Jharkhand - 828113</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <a href="tel:8271365450" className="hover:text-white transition-colors">+91 82713 65450</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <a href="mailto:info@commercegyan.com" className="hover:text-white transition-colors">info@commercegyan.com</a>
              </li>
              <li className="pt-2">
                <a
                  href="https://maps.google.com/?q=Commerce+Gyan+Katrasgarh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#00AEEF] hover:underline font-semibold"
                >
                  <span>Open Location on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© 2026 Commerce Gyan. All Rights Reserved. Katrasgarh, Dhanbad.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-900 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#00AEEF]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
