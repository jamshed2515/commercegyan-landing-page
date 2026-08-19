import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function FinalCTA({ onOpenCounselling }) {
  return (
    <section className="py-24 bg-[#0F2C4C] text-[#F4F1E4] relative overflow-hidden text-center border-b border-[#0A2038]">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D9A441]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-[#D9A441]/10 text-[#D9A441] border border-[#D9A441]/30 rounded-full px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider">
          <span>TAKE THE NEXT STEP</span>
        </div>

        <h2 className="font-display font-semibold text-3xl sm:text-5xl text-[#F4F1E4] tracking-tight leading-tight">
          Ready to make your next academic goal clearer?
        </h2>

        <p className="text-[#AFC0D6] text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Get personalised guidance on batch selection, exam strategy, and syllabus — directly from Tabarak Sir at our Katrasgarh centre.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <button
            onClick={onOpenCounselling}
            className="w-full sm:w-auto bg-[#D9A441] hover:bg-[#B9832A] text-[#0F2C4C] font-mono text-xs font-extrabold uppercase tracking-wider px-7 py-4 rounded-[2px] border border-[#B9832A] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
          >
            <span>Book Free Counselling</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#programs"
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-[#F4F1E4] font-mono text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-[2px] border border-white/30 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore Programs</span>
          </a>
        </div>

        {/* Contact Strip */}
        <div className="pt-8 font-mono text-xs text-[#AFC0D6] flex flex-wrap justify-center items-center gap-6">
          <span className="flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4 text-[#D9A441]" />
            <span>Call directly: <strong className="text-[#D9A441]">8271365450</strong></span>
          </span>
          <span>•</span>
          <span>Behind Rajasthani Dharamshala, Katrasgarh</span>
        </div>

      </div>
    </section>
  );
}
