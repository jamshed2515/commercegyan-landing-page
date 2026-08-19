import React, { useState } from 'react';
import { courseCategories, coursesData } from '../data/courses';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';

export default function Programs({ onOpenCounselling }) {
  const [activeTab, setActiveTab] = useState('school');

  const currentCourses = coursesData[activeTab] || [];

  return (
    <section id="programs" className="py-20 bg-[#F1EBDA] border-b border-[#DCD2B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-12 space-y-3">
          <div className="font-mono text-xs font-bold text-[#B9832A] uppercase tracking-widest flex items-center gap-2">
            <span className="w-6 h-px bg-[#B9832A]" />
            <span>ACADEMIC PROGRAMS</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#0F2C4C] tracking-tight">
            Explore our course offerings
          </h2>
          <p className="text-[#5A6376] text-base font-normal leading-relaxed">
            Tailored academic streams designed to guide students from middle school foundation to professional certifications.
          </p>
        </div>

        {/* Category Tabs (Ledger Tab Row) */}
        <div className="flex border-b border-[#DCD2B8] mb-10 overflow-x-auto no-scrollbar">
          {courseCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`font-mono text-xs sm:text-sm font-semibold tracking-wider px-5 py-3.5 border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2.5 ${
                  isActive
                    ? 'border-[#B9832A] text-[#0F2C4C] bg-white/40'
                    : 'border-transparent text-[#5A6376] hover:text-[#0F2C4C]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                  isActive ? 'bg-[#0F2C4C] text-[#F4F1E4]' : 'bg-[#DCD2B8]/50 text-[#5A6376]'
                }`}>
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid - Ledger Styled */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {currentCourses.map((course) => {
            const isPopular = course.id === 'class-8';

            return (
              <div
                key={course.id}
                className={`relative flex flex-col justify-between h-full rounded-[3px] p-5 bg-white border transition-all duration-200 ${
                  isPopular
                    ? 'border-[#B9832A] shadow-xl ring-1 ring-[#B9832A]'
                    : 'border-[#DCD2B8] hover:border-[#B9832A]/60 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Popular Featured Tag */}
                {isPopular && (
                  <div className="absolute -top-3 left-4 bg-[#D9A441] text-[#0F2C4C] font-mono text-[9.5px] font-extrabold px-2.5 py-0.5 rounded-[2px] uppercase tracking-wider shadow-xs flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#0F2C4C]" />
                    <span>★ POPULAR</span>
                  </div>
                )}

                {/* Top Content Group */}
                <div className="flex flex-col flex-1">
                  
                  {/* Badge & Price Header Row */}
                  <div className="flex items-center justify-between gap-2 mb-3 mt-1">
                    <span className="font-mono text-[10px] font-bold text-[#5A6376] uppercase tracking-wider bg-[#F7F3E8] px-2 py-0.5 rounded border border-[#E7E0CC]">
                      {course.tag}
                    </span>
                    <span className="font-mono text-[10px] font-extrabold text-[#B9832A] uppercase tracking-wider">
                      ENQUIRE FOR FEES
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="font-display font-bold text-lg text-[#0F2C4C] mb-1.5 leading-snug">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#5A6376] font-normal leading-relaxed mb-3.5 min-h-[40px] flex items-start">
                    {course.description}
                  </p>

                  {/* Who It's For Box */}
                  <div className="bg-[#F7F3E8] p-3 rounded-[2px] border border-[#E7E0CC] mb-4 min-h-[64px] flex flex-col justify-center">
                    <p className="font-mono text-[9px] font-extrabold text-[#5A6376] uppercase tracking-wider mb-0.5">
                      WHO IT'S FOR
                    </p>
                    <p className="text-[11px] text-[#1C2430] font-semibold leading-snug">
                      {course.whoFor}
                    </p>
                  </div>

                  {/* Key Inclusions List */}
                  <div className="mb-4 flex-1 space-y-1.5">
                    <p className="font-mono text-[9px] font-extrabold text-[#5A6376] uppercase tracking-wider mb-2">
                      KEY INCLUSIONS
                    </p>
                    {course.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#1C2430] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2F7A5C] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom CTA Button */}
                <div className="pt-3 border-t border-[#E7E0CC] shrink-0">
                  <button
                    onClick={() => onOpenCounselling(course.title)}
                    className={`w-full py-2.5 rounded-[2px] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs active:scale-98 ${
                      isPopular
                        ? 'bg-[#0F2C4C] hover:bg-[#132F52] text-[#F4F1E4]'
                        : 'bg-transparent hover:bg-[#0F2C4C] text-[#0F2C4C] hover:text-[#F4F1E4] border border-[#0F2C4C]'
                    }`}
                  >
                    <span>Enroll & Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9A441]" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
