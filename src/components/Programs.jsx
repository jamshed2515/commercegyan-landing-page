import React, { useState } from 'react';
import { courseCategories, coursesData } from '../data/courses';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

export default function Programs({ onOpenCounselling }) {
  const [activeTab, setActiveTab] = useState('school');

  const currentCourses = coursesData[activeTab] || [];

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-block bg-[#00AEEF]/10 text-[#00AEEF] px-3.5 py-1 rounded-full font-extrabold text-[11px] uppercase tracking-wider">
            ACADEMIC PROGRAMS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3B70]">
            Explore Our Course Offerings
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
            Tailored academic streams designed to guide students from middle school foundation to professional certifications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/60 max-w-full overflow-x-auto">
            {courseCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#1A3B70] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {cat.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Cards Grid - Equal Height & Perfectly Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {currentCourses.map((course) => {
            const isPopular = course.id === 'class-8';

            return (
              <div
                key={course.id}
                className={`relative flex flex-col justify-between h-full rounded-2xl p-5 transition-all duration-200 ${
                  isPopular
                    ? 'bg-white border-2 border-[#00AEEF] shadow-lg'
                    : 'bg-white border border-slate-200/80 hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Popular Featured Badge for Class 8 */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFCC00] text-[#1A3B70] text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1 z-10 whitespace-nowrap">
                    <Star className="w-3 h-3 fill-[#1A3B70] text-[#1A3B70]" />
                    <span>POPULAR</span>
                  </div>
                )}

                {/* Top Content Group */}
                <div className="flex flex-col flex-1">
                  
                  {/* Badge & Price Header Row */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block bg-[#00AEEF]/10 text-[#00AEEF] px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wide">
                      {course.tag}
                    </span>
                    <span className="text-[10px] font-extrabold text-[#F59E0B] uppercase tracking-wide shrink-0">
                      ENQUIRE FOR FEES
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-[#1A3B70] mb-1.5 leading-snug">
                    {course.title}
                  </h3>

                  {/* Description - Standardized Height */}
                  <p className="text-xs text-slate-600 font-normal leading-relaxed mb-3.5 min-h-[38px] sm:min-h-[42px] flex items-start">
                    {course.description}
                  </p>

                  {/* Who It's For Box - Standardized Compact Height */}
                  <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-100 mb-4 min-h-[64px] flex flex-col justify-center">
                    <p className="text-[9.5px] font-extrabold text-slate-400 uppercase tracking-wider mb-0.5">
                      WHO IT'S FOR
                    </p>
                    <p className="text-[11px] text-slate-700 font-semibold leading-snug">
                      {course.whoFor}
                    </p>
                  </div>

                  {/* Key Inclusions - Flex Growing List */}
                  <div className="mb-4 flex-1 space-y-1.5">
                    <p className="text-[9.5px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                      KEY INCLUSIONS
                    </p>
                    {course.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom CTA Button - Exactly Aligned Across All Cards */}
                <div className="pt-3 border-t border-slate-100 shrink-0">
                  <button
                    onClick={() => onOpenCounselling(course.title)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-98 ${
                      isPopular
                        ? 'bg-[#00AEEF] hover:bg-[#0284c7] text-white'
                        : 'bg-[#1A3B70] hover:bg-[#0A192F] text-white'
                    }`}
                  >
                    <span>Enroll & Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFCC00]" />
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
