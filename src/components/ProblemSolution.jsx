import React from 'react';
import { Minus, Plus } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-[#F7F3E8] border-b border-[#DCD2B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="font-mono text-xs font-bold text-[#B9832A] uppercase tracking-widest inline-flex items-center gap-2">
            <span className="w-6 h-px bg-[#B9832A]" />
            <span>THE COMMERCE GYAN METHOD</span>
            <span className="w-6 h-px bg-[#B9832A]" />
          </div>
          
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#0F2C4C] leading-tight">
            “Commerce shouldn’t be about memorising more. It should be about{' '}
            <em className="italic font-medium text-[#B9832A]">understanding better.</em>”
          </h2>
          
          <p className="text-[#5A6376] text-base font-normal max-w-xl mx-auto leading-relaxed">
            Traditional coaching forces students to memorise entries and formulas. We rebuild learning around conceptual clarity — read like a balance sheet, debit against credit.
          </p>
        </div>

        {/* Ledger Comparison Table (Debit vs Credit) */}
        <div className="max-w-5xl mx-auto bg-white border border-[#DCD2B8] rounded-[3px] shadow-lg overflow-hidden">
          
          {/* Header Row */}
          <div className="grid md:grid-cols-2 font-mono text-xs font-bold uppercase tracking-wider">
            <div className="bg-[#F6E9E6] text-[#A64B3F] p-4 md:border-r border-b md:border-b-0 border-[#DCD2B8] flex items-center justify-between">
              <span>Debit — The cost of rote learning</span>
              <span className="text-sm font-extrabold">−</span>
            </div>
            <div className="bg-[#E7F1EC] text-[#2F7A5C] p-4 border-b md:border-b-0 border-[#DCD2B8] flex items-center justify-between">
              <span>Credit — What Commerce Gyan builds</span>
              <span className="text-sm font-extrabold">+</span>
            </div>
          </div>

          {/* Body Rows */}
          <div className="grid md:grid-cols-2 text-xs sm:text-sm font-sans text-[#1C2430]">
            
            {/* Left Column (Debit) */}
            <div className="p-6 space-y-5 md:border-r border-b md:border-b-0 border-[#DCD2B8] bg-[#F7F3E8]/30">
              <div className="flex items-start gap-3 border-b border-dashed border-[#DCD2B8] pb-4">
                <span className="font-mono font-black text-[#A64B3F] shrink-0 text-base">−</span>
                <p className="leading-relaxed">Overcrowded classrooms where quiet students get left behind in the back row.</p>
              </div>

              <div className="flex items-start gap-3 border-b border-dashed border-[#DCD2B8] pb-4">
                <span className="font-mono font-black text-[#A64B3F] shrink-0 text-base">−</span>
                <p className="leading-relaxed">Memorising debit/credit rules without understanding the economic logic behind them.</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono font-black text-[#A64B3F] shrink-0 text-base">−</span>
                <p className="leading-relaxed">Infrequent exams that build anxiety right before official board finals.</p>
              </div>
            </div>

            {/* Right Column (Credit) */}
            <div className="p-6 space-y-5 bg-white">
              <div className="flex items-start gap-3 border-b border-dashed border-[#DCD2B8] pb-4">
                <span className="font-mono font-black text-[#2F7A5C] shrink-0 text-base">+</span>
                <p className="leading-relaxed font-medium">Strict batch limits of 25–30 students for personal mentor attention.</p>
              </div>

              <div className="flex items-start gap-3 border-b border-dashed border-[#DCD2B8] pb-4">
                <span className="font-mono font-black text-[#2F7A5C] shrink-0 text-base">+</span>
                <p className="leading-relaxed font-medium">First-principles conceptual teaching for long-term clarity in CA/CMA prep.</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono font-black text-[#2F7A5C] shrink-0 text-base">+</span>
                <p className="leading-relaxed font-medium">Weekly evaluations and doubt desks to build confidence week after week.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
