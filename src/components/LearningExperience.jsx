import React, { useState } from 'react';
import { Target, BookOpenCheck, BarChart3, Award, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    phase: 'CHOOSE YOUR GOAL',
    icon: Target,
    title: 'Choose Your Academic Goal',
    description: 'Select your target milestone—whether it is Class 7–10 foundations, Class 11–12 Board toppers track, or CA/CMA/CS Foundation prep.'
  },
  {
    number: '02',
    phase: 'LEARN WITH STRUCTURE',
    icon: BookOpenCheck,
    title: 'Learn with Structured Guidance',
    description: 'Attend small-batch conceptual lectures led by Tabarak Sir with printed summaries and step-by-step topic breakdowns.'
  },
  {
    number: '03',
    phase: 'PRACTICE & EVALUATE',
    icon: BarChart3,
    title: 'Practice & Evaluate Weekly',
    description: 'Gauge your exam readiness through weekly chapter-wise tests and board-pattern mock examinations.'
  },
  {
    number: '04',
    phase: 'REFINE & ACHIEVE',
    icon: Award,
    title: 'Refine & Achieve Excellence',
    description: 'Resolve lingering doubts at the dedicated doubt desk and refine exam writing technique with 1-on-1 mentor feedback.'
  }
];

export default function LearningExperience() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-[#0F2C4C] text-[#F4F1E4] relative overflow-hidden border-b border-[#0A2038]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Two-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Section Storytelling */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="font-mono text-xs font-bold text-[#D9A441] uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-px bg-[#D9A441]" />
              <span>THE STUDENT JOURNEY</span>
            </div>

            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#F4F1E4] leading-tight">
              A Structured Pathway to <em className="italic font-medium text-[#D9A441]">Academic Excellence</em>
            </h2>

            <p className="text-[#AFC0D6] text-base leading-relaxed font-normal">
              A structured, repeatable methodology — four steps, in order, every batch, to turn complex commerce topics into confident exam performance.
            </p>

            {/* Active Step Feature Box */}
            <div className="bg-white/5 backdrop-blur-md p-5 rounded-[3px] border border-white/10 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs font-bold text-[#D9A441] uppercase tracking-wider">
                <span>Phase {steps[activeStep].number} — {steps[activeStep].phase}</span>
                <CheckCircle2 className="w-4 h-4 text-[#2F7A5C]" />
              </div>
              <h4 className="font-display text-base font-bold text-[#F4F1E4]">
                {steps[activeStep].title}
              </h4>
              <p className="text-xs text-[#AFC0D6] leading-relaxed font-normal">
                {steps[activeStep].description}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Vertical Interactive 4-Step Timeline */}
          <div className="lg:col-span-7 relative pl-2 sm:pl-6">
            
            {/* Connecting Vertical Line */}
            <div className="absolute left-6 sm:left-10 top-6 bottom-6 w-px bg-white/15 pointer-events-none" />

            <div className="space-y-4">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveStep(idx)}
                    onClick={() => setActiveStep(idx)}
                    className={`relative flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-[3px] border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-white/10 border-[#D9A441] shadow-lg translate-x-1'
                        : 'bg-white/4 border-white/10 hover:bg-white/8 hover:border-white/20'
                    }`}
                  >
                    {/* Step Number Badge */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded flex items-center justify-center font-mono font-bold text-xs sm:text-sm shrink-0 z-10 transition-colors ${
                        isActive
                          ? 'bg-[#D9A441] text-[#0F2C4C]'
                          : 'bg-white/10 text-[#AFC0D6]'
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-display text-base sm:text-lg font-bold transition-colors ${
                          isActive ? 'text-[#D9A441]' : 'text-[#F4F1E4]'
                        }`}>
                          {step.title}
                        </h3>
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-[#AFC0D6] uppercase tracking-wider">
                          STEP {step.number} / 04
                        </span>
                      </div>
                      
                      <p className="text-xs text-[#AFC0D6] font-normal leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
