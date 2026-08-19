import React from 'react';
import { XCircle, CheckCircle, Lightbulb, Zap } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Quote Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-amber-200">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>The Commerce Gyan Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3B70] leading-tight">
            “Commerce education shouldn’t be about memorising more. It should be about{' '}
            <span className="text-[#00AEEF]">understanding better.</span>”
          </h2>
          <p className="text-slate-600 text-base font-medium max-w-xl mx-auto">
            Traditional coaching often forces students to memorize entries and formulas. We rebuild learning around conceptual clarity and practical application.
          </p>
        </div>

        {/* Side-by-Side Visual Comparison Story */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Traditional Coaching Problem */}
          <div className="bg-white p-8 rounded-3xl border border-rose-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full blur-2xl -z-10" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center font-bold">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Traditional Rote Learning</h3>
                <p className="text-xs text-slate-400 font-medium">The standard coaching trap</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-600 font-normal">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                <span>Overcrowded classrooms where quiet students get left behind.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                <span>Memorizing debit/credit rules without understanding the economic logic behind them.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                <span>Infrequent exams that build anxiety right before official board finals.</span>
              </li>
            </ul>
          </div>

          {/* The Commerce Gyan Method */}
          <div className="bg-gradient-to-br from-[#1A3B70] to-[#0A192F] text-white p-8 rounded-3xl border border-blue-900 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00AEEF]/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center font-bold">
                <CheckCircle className="w-6 h-6 text-[#FFCC00]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">The Commerce Gyan Method</h3>
                <p className="text-xs text-[#00AEEF] font-semibold">Structured conceptual mastery</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-200 font-normal">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] mt-2 shrink-0" />
                <span>Strict batch limits of 25–30 students for personal mentor attention.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] mt-2 shrink-0" />
                <span>First-principles conceptual teaching for long-term clarity in CA/CMA prep.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] mt-2 shrink-0" />
                <span>Weekly evaluations and doubt desks to build confidence week after week.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
