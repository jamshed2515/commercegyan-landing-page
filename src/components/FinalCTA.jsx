import React from 'react';
import { ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';

export default function FinalCTA({ onOpenCounselling }) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1A3B70] via-[#0A192F] to-[#0F172A] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFCC00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-block bg-white/10 text-[#FFCC00] border border-white/10 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
          Take the Next Step
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Make Your Next Academic Goal Clearer?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Get personalized guidance on batch selection, exam preparation strategies, and course syllabus directly from Tabarak Sir at our Katrasgarh center.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenCounselling}
            className="w-full sm:w-auto bg-[#FFCC00] hover:bg-[#FFD633] text-[#1A3B70] font-black text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Book Free Counselling</span>
          </button>

          <a
            href="#programs"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-4 rounded-xl border border-white/20 transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-5 h-5 text-[#00AEEF]" />
          </a>
        </div>

        {/* Contact Strip */}
        <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4 text-[#00AEEF]" />
            <span>Call us directly: <strong className="text-white">8271365450</strong></span>
          </span>
          <span>•</span>
          <span>Behind Rajasthani Dharamshala, Katrasgarh</span>
        </div>

      </div>
    </section>
  );
}
