import React from 'react';
import { Target, BookOpenCheck, BarChart3, Award } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Choose Your Academic Goal',
    description: 'Select your target milestone—whether it is Class 7–10 foundations, Class 11–12 Board toppers track, or CA/CMA Foundation prep.'
  },
  {
    number: '02',
    icon: BookOpenCheck,
    title: 'Learn with Structured Guidance',
    description: 'Attend small-batch conceptual lectures led by Tabarak Sir with printed summaries and step-by-step topic breakdowns.'
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Practice & Evaluate Weekly',
    description: 'Gauge your exam readiness through weekly chapter-wise tests and board-pattern mock examinations.'
  },
  {
    number: '04',
    icon: Award,
    title: 'Refine & Achieve Excellence',
    description: 'Resolve lingering doubts at the dedicated doubt desk and refine exam writing technique with 1-on-1 mentor feedback.'
  }
];

export default function LearningExperience() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1A3B70]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-block bg-white/10 text-[#FFCC00] border border-white/10 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
            The Student Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            How The Commerce Gyan Experience Works
          </h2>
          <p className="text-slate-400 text-sm font-medium">
            A structured, repeatable methodology that turns complex commerce topics into confident exam performance.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#00AEEF]/40 hover:bg-white/10 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#00AEEF] tracking-tight">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-[#FFCC00] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00AEEF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center text-[10px] font-bold text-slate-400 group-hover:text-white transition-colors">
                  <span>STEP {step.number} OF 04</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
