import React from 'react';
import { verifiedToppers } from '../data/toppers';
import { Trophy, Star, Quote, Award } from 'lucide-react';

export default function ResultsHallOfFame() {
  return (
    <section id="results" className="py-20 bg-gradient-to-b from-[#1A3B70] to-[#0A192F] text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFCC00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white/10 text-[#FFCC00] border border-white/10 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Hall of Fame • Class of 2025</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Real Results & Board Toppers
          </h2>
          <p className="text-slate-300 text-sm font-medium">
            Celebrating the verified academic excellence of Commerce Gyan students in Katrasgarh.
          </p>
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
          {verifiedToppers.map((topper, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-5 text-center shadow-lg hover:border-[#00AEEF]/50 hover:bg-white/10 transition-all duration-300 relative flex flex-col justify-between group"
            >
              {topper.isTop && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFCC00] text-[#1A3B70] text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap z-10 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#1A3B70]" />
                  <span>TOPPER</span>
                </div>
              )}

              <div>
                {/* Photo */}
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-white/20 overflow-hidden mb-4 relative shadow-inner bg-slate-800">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="w-full h-full bg-[#1A3B70] text-[#00AEEF] flex items-center justify-center font-extrabold text-xl">
                    {topper.name.charAt(0)}
                  </div>
                </div>

                {/* Name & Exam */}
                <h3 className="font-bold text-white text-base group-hover:text-[#00AEEF] transition-colors">
                  {topper.name}
                </h3>
                <p className="text-[#00AEEF] text-[11px] font-semibold uppercase tracking-wide mt-0.5">
                  {topper.exam}
                </p>
              </div>

              {/* Score Badge */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="text-2xl font-black text-[#FFCC00] tracking-tight">
                  {topper.score}
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">
                  {topper.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Parent & Student Testimonials (ONLY VERIFIED) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white">Verified Feedback from Parents & Students</h3>
            <p className="text-xs text-slate-400 font-medium mt-1">Authentic quotes from Commerce Gyan families</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {verifiedToppers
              .filter((t) => t.quote)
              .map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col justify-between relative"
                >
                  <Quote className="w-6 h-6 text-[#00AEEF]/30 mb-3" />
                  <p className="text-xs text-slate-200 leading-relaxed font-medium italic mb-4">
                    "{t.quote}"
                  </p>
                  <div className="pt-3 border-t border-white/10 text-right">
                    <div className="text-xs font-bold text-[#FFCC00]">{t.author}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}
