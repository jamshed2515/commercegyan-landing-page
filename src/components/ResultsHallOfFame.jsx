import React from 'react';
import { verifiedToppers } from '../data/toppers';
import { Trophy, Quote, Crown, CheckCircle2 } from 'lucide-react';

export default function ResultsHallOfFame() {
  return (
    <section id="results" className="py-20 bg-[#0F2C4C] text-[#F4F1E4] relative overflow-hidden border-b border-[#0A2038]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#D9A441]/10 text-[#D9A441] border border-[#D9A441]/30 rounded-full px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>VERIFIED REGISTER • CLASS OF 2025</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#F4F1E4] tracking-tight">
            Real results & board toppers
          </h2>
          <p className="text-[#AFC0D6] text-base font-normal leading-relaxed">
            Every name, photo, score, and percentage below belongs to a real Commerce Gyan student in Katrasgarh.
          </p>
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 mb-16 items-stretch">
          {verifiedToppers.map((topper, idx) => {
            const isFeatured = topper.isTop;
            return (
              <div
                key={idx}
                className={`rounded-[3px] p-5 text-center transition-all duration-200 relative flex flex-col justify-between group ${
                  isFeatured
                    ? 'bg-[#132F52] border-2 border-[#D9A441] shadow-xl scale-[1.02] z-10'
                    : 'bg-white/5 backdrop-blur-sm border border-white/12 shadow-lg hover:border-[#D9A441]/50 hover:bg-white/8'
                }`}
              >
                {isFeatured ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D9A441] text-[#0F2C4C] font-mono text-[9px] font-extrabold px-3 py-0.5 rounded-[2px] uppercase tracking-wider shadow-sm whitespace-nowrap z-20 flex items-center gap-1">
                    <Crown className="w-3 h-3 fill-[#0F2C4C]" />
                    <span>#1 TOPPER</span>
                  </div>
                ) : (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-white/10 text-[#AFC0D6] font-mono text-[8px] font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-wider border border-white/10 whitespace-nowrap z-10">
                    ACHIEVER
                  </div>
                )}

                <div>
                  {/* Photo / Monogram Circle */}
                  <div className={`w-16 h-16 mx-auto rounded-full overflow-hidden mb-3 relative flex items-center justify-center font-display font-bold text-xl shadow-inner ${
                    isFeatured ? 'bg-[#D9A441] text-[#0F2C4C] border-2 border-[#D9A441]' : 'bg-[#132F52] text-[#F4F1E4] border border-white/20'
                  }`}>
                    {topper.image ? (
                      <img
                        src={topper.image}
                        alt={topper.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          if (e.target.nextSibling) {
                            e.target.nextSibling.style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <span className={`${topper.image ? 'hidden' : 'flex'} w-full h-full items-center justify-center font-display font-bold text-xl`}>
                      {topper.name.charAt(0)}
                    </span>
                  </div>

                  {/* Name & Exam */}
                  <h3 className="font-display font-bold text-[#F4F1E4] text-base group-hover:text-[#D9A441] transition-colors">
                    {topper.name}
                  </h3>
                  <p className="font-mono text-[10.5px] text-[#AFC0D6] uppercase tracking-wider mt-0.5">
                    {topper.exam}
                  </p>
                </div>

                {/* Score Badge */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="font-mono text-3xl font-bold tracking-tight text-[#D9A441]">
                    {topper.score}
                  </div>
                  <div className="font-mono text-[10px] text-[#AFC0D6] font-medium uppercase mt-1 flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#2F7A5C]" />
                    <span>VERIFIED 2025</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Parent & Student Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-8">
            <h3 className="font-display font-bold text-xl text-[#F4F1E4]">Verified Feedback from Parents & Students</h3>
            <p className="font-mono text-xs text-[#AFC0D6] mt-1">Authentic quotes from Commerce Gyan families in Katrasgarh</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {verifiedToppers
              .filter((t) => t.quote)
              .map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-[3px] border border-white/12 flex flex-col justify-between relative"
                >
                  <Quote className="w-6 h-6 text-[#D9A441]/40 mb-3" />
                  <p className="font-display italic text-xs text-[#F4F1E4] leading-relaxed font-medium mb-4">
                    "{t.quote}"
                  </p>
                  <div className="pt-3 border-t border-white/10 text-right">
                    <div className="font-mono text-xs font-bold text-[#D9A441]">{t.author}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}
