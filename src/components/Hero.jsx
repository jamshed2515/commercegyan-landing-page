import React from 'react';
import { ArrowRight, BookOpen, Award, CheckCircle2, MessageSquare, Sparkles, Zap, Trophy } from 'lucide-react';

export default function Hero({ onOpenCounselling }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-12 right-0 w-[500px] h-[500px] rounded-full bg-[#00AEEF]/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1A3B70]/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold text-[#1A3B70]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
              <span>Admissions Open for Session 2026-27 • Katrasgarh</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A3B70] tracking-tight leading-[1.1]">
              Master Commerce with{' '}
              <span className="bg-gradient-to-r from-[#00AEEF] to-[#1A3B70] bg-clip-text text-transparent">
                Conceptual Depth
              </span>{' '}
              & Personal Mentorship
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              Commerce Gyan provides structured, concept-driven preparation for School Academics (Class 7–10), Commerce Boards (Class 11 & 12), and CA, CMA & CS Professional Foundations in Katrasgarh.
            </p>

            {/* Verified Differentiator Badges */}
            <div className="grid grid-cols-2 gap-3 max-w-lg pt-1">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center font-bold">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">98.2% Board Pass Rate</div>
                  <div className="text-[11px] text-slate-500 font-medium">Consistent Toppers</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">150+ CA & Board Toppers</div>
                  <div className="text-[11px] text-slate-500 font-medium">Mentored by Faculty</div>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="#programs"
                className="bg-[#FFCC00] hover:bg-[#FFD633] text-[#1A3B70] font-extrabold text-base px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={onOpenCounselling}
                className="bg-white hover:bg-slate-50 text-slate-700 font-bold text-base px-7 py-4 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <MessageSquare className="w-5 h-5 text-[#00AEEF]" />
                <span>Book Free Counselling</span>
              </button>
            </div>

          </div>

          {/* Right Hero Composition (Integrated Hero Media Block) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Image with Integrated Badges */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/4.5] group">
                <img
                  src="/teacher.png"
                  alt="Tabarak Sir - Commerce Gyan Lead Mentor"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/95 via-[#0A192F]/20 to-transparent pointer-events-none" />

                {/* Integrated Navy Badge 1: Small Batch Learning (TOP-RIGHT inside image) */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 flex items-center gap-2 bg-[#0D1B3D] text-white px-3 py-2 rounded-[14px] shadow-md border border-white/10 text-xs sm:text-[13px] font-semibold tracking-tight">
                  <Zap className="w-3.5 h-3.5 text-[#FFC107] shrink-0" />
                  <span>Small Batch Learning</span>
                </div>

                {/* Integrated Navy Badge 2: Academic Excellence (BOTTOM-LEFT inside image) */}
                <div className="absolute bottom-24 left-3.5 sm:bottom-28 sm:left-4 z-20 flex items-center gap-2 bg-[#0D1B3D] text-white px-3 py-2 rounded-[14px] shadow-md border border-white/10 text-xs sm:text-[13px] font-semibold tracking-tight">
                  <Trophy className="w-3.5 h-3.5 text-[#FFC107] shrink-0" />
                  <span>Academic Excellence</span>
                </div>

                {/* Content Overlay (Name & Credentials) */}
                <div className="absolute bottom-5 left-4 right-4 sm:left-5 sm:right-5 text-white space-y-1 z-10">
                  <div className="inline-block bg-[#FFCC00] text-[#1A3B70] text-[11px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    Tabarak Sir
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                    Lead Mentor & Founder
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight">
                    NET Qualified • M.Com • B.Ed • CMA Inter Cleared
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
