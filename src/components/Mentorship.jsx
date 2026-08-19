import React from 'react';
import { Award, CheckCircle, GraduationCap, Quote, Sparkles } from 'lucide-react';

export default function Mentorship({ onOpenCounselling }) {
  return (
    <section id="mentorship" className="py-20 bg-slate-50 border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mentor Photo & Editorial Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/5]">
                <img
                  src="/teacher.png"
                  alt="Tabarak Sir - Lead Mentor Commerce Gyan Katrasgarh"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <div className="inline-block bg-[#FFCC00] text-[#1A3B70] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    ⭐ TABARAK SIR
                  </div>
                  <p className="text-xs text-slate-300 font-bold mt-2 uppercase tracking-wide">
                    Founder & Lead Mentor
                  </p>
                </div>
              </div>

              {/* Verified Experience Badge */}
              <div className="absolute -top-4 -left-4 bg-[#1A3B70] text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 border border-white/20">
                <GraduationCap className="w-5 h-5 text-[#FFCC00]" />
                <div>
                  <div className="text-xs font-extrabold">7+ Years Excellence</div>
                  <div className="text-[10px] text-slate-300 font-medium">Commerce Coaching</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Verified Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#00AEEF]/10 text-[#00AEEF] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visionary Mentorship</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3B70] leading-tight">
                Learn Directly from Katrasgarh's Premier Commerce Faculty
              </h2>
              
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                We believe that commerce education requires deep conceptual clarity, not rote memorization. Tabarak Sir and our support mentors provide personalized guidance to unlock every student's academic potential.
              </p>
            </div>

            {/* Verified Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">NET Qualified</h4>
                  <p className="text-[11px] text-slate-500 font-medium">National Eligibility Test certified</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">M.Com (Master of Commerce)</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Core commerce domain expertise</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">B.Ed (Bachelor of Education)</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Trained educational pedagogy</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">CMA (Inter Level) Cleared</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Professional corporate standard</p>
                </div>
              </div>

            </div>

            {/* Verified Lead Mentor Quote */}
            <div className="bg-white p-5 rounded-2xl border-l-4 border-[#00AEEF] shadow-sm relative">
              <Quote className="w-8 h-8 text-[#00AEEF]/20 absolute top-4 right-4" />
              <p className="text-slate-700 text-sm italic leading-relaxed font-medium">
                “Our small batch sizes and weekly test series ensure that no student gets left behind. We prepare you not just to clear boards, but to lead CA and CMA certifications globally.”
              </p>
              <div className="mt-3 text-xs font-bold text-[#1A3B70]">
                — Tabarak Sir, Founder & Lead Mentor
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenCounselling}
                className="bg-[#1A3B70] hover:bg-[#0A192F] text-white font-extrabold text-xs px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-98 cursor-pointer"
              >
                Schedule Mentorship Counselling →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
