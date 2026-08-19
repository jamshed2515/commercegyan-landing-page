import React from 'react';
import { CheckCircle2, GraduationCap, Quote, ArrowRight } from 'lucide-react';

export default function Mentorship({ onOpenCounselling }) {
  return (
    <section id="mentorship" className="py-20 bg-[#F7F3E8] border-b border-[#DCD2B8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mentor Photo & Editorial Ledger Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md bg-white border border-[#DCD2B8] p-3 rounded-[3px] shadow-xl">
              
              {/* Photo Frame */}
              <div className="relative rounded-[2px] overflow-hidden bg-[#0F2C4C] aspect-[4/4.8] border border-[#DCD2B8]">
                <img
                  src="/teacher.png"
                  alt="Tabarak Sir - Lead Mentor Commerce Gyan Katrasgarh"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C4C]/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white text-left space-y-1 z-10">
                  <div className="inline-block bg-[#D9A441] text-[#0F2C4C] font-mono text-xs font-black px-3 py-1 rounded-[2px] uppercase tracking-wider shadow-sm">
                    TABARAK SIR
                  </div>
                  <p className="font-mono text-xs text-[#F4F1E4] font-semibold">
                    Founder & Lead Mentor
                  </p>
                </div>
              </div>

              {/* Verified Experience Badge */}
              <div className="absolute -top-4 -left-4 bg-[#0F2C4C] text-[#F4F1E4] p-3.5 rounded-[3px] shadow-lg flex items-center gap-3 border border-[#D9A441]/40">
                <GraduationCap className="w-5 h-5 text-[#D9A441]" />
                <div>
                  <div className="font-mono text-xs font-bold text-[#F4F1E4]">7+ Years Excellence</div>
                  <div className="text-[10px] text-[#AFC0D6] font-medium font-mono">Katrasgarh Commerce Coaching</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Verified Credentials */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-3">
              <div className="font-mono text-xs font-bold text-[#B9832A] uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-px bg-[#B9832A]" />
                <span>VISIONARY MENTORSHIP</span>
              </div>
              
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#0F2C4C] leading-tight">
                Learn directly from Katrasgarh's premier commerce faculty
              </h2>
              
              <p className="text-[#5A6376] text-base leading-relaxed font-normal">
                We believe that commerce education requires deep conceptual clarity, not rote memorization. Tabarak Sir and our support mentors provide personalized guidance to unlock every student's academic potential.
              </p>
            </div>

            {/* Verified Credentials Grid (Ledger Styled) */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1 font-mono text-xs">
              
              <div className="bg-white p-3.5 rounded-[2px] border border-[#DCD2B8] shadow-2xs flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#0F2C4C]">NET Qualified</h4>
                  <p className="text-[10.5px] text-[#5A6376] font-medium">National Eligibility Test</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#2F7A5C] shrink-0" />
              </div>

              <div className="bg-white p-3.5 rounded-[2px] border border-[#DCD2B8] shadow-2xs flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#0F2C4C]">M.Com Degree</h4>
                  <p className="text-[10.5px] text-[#5A6376] font-medium">Master of Commerce</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#2F7A5C] shrink-0" />
              </div>

              <div className="bg-white p-3.5 rounded-[2px] border border-[#DCD2B8] shadow-2xs flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#0F2C4C]">B.Ed Certified</h4>
                  <p className="text-[10.5px] text-[#5A6376] font-medium">Trained pedagogy</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#2F7A5C] shrink-0" />
              </div>

              <div className="bg-white p-3.5 rounded-[2px] border border-[#DCD2B8] shadow-2xs flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#0F2C4C]">CMA Inter Cleared</h4>
                  <p className="text-[10.5px] text-[#5A6376] font-medium">Professional corporate standard</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#2F7A5C] shrink-0" />
              </div>

            </div>

            {/* Verified Lead Mentor Quote */}
            <div className="border-l-3 border-[#B9832A] p-5 bg-[#F1EBDA] rounded-r-[3px] relative">
              <Quote className="w-6 h-6 text-[#B9832A]/30 absolute top-4 right-4" />
              <p className="font-display italic text-sm text-[#1C2430] leading-relaxed font-medium">
                “Our small batch sizes and weekly test series ensure that no student gets left behind. We prepare you not just to clear boards, but to lead CA and CMA certifications globally.”
              </p>
              <div className="mt-3 font-mono text-xs font-bold text-[#B9832A]">
                — Tabarak Sir, Founder & Lead Mentor
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-1">
              <button
                onClick={onOpenCounselling}
                className="bg-[#0F2C4C] hover:bg-[#132F52] text-[#F4F1E4] font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-[2px] border border-[#0F2C4C] shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer flex items-center gap-2"
              >
                <span>Schedule Mentorship Counselling</span>
                <ArrowRight className="w-4 h-4 text-[#D9A441]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
