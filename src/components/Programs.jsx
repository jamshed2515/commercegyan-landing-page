import React, { useState } from 'react';
import { courseCategories, coursesData } from '../data/courses';
import { BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export default function Programs({ onOpenCounselling }) {
  const [activeTab, setActiveTab] = useState('school');

  const currentCourses = coursesData[activeTab] || [];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block bg-[#00AEEF]/10 text-[#00AEEF] px-4 py-1.5 rounded-full font-extrabold text-xs uppercase tracking-wider">
            Academic Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3B70]">
            Explore Our Course Offerings
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Tailored academic streams designed to guide students from middle school foundation to professional certifications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/60 max-w-full overflow-x-auto">
            {courseCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#1A3B70] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-2 text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {cat.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCourses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-50/50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#00AEEF]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-[#00AEEF]/10 text-[#00AEEF] px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wide">
                    {course.tag}
                  </span>
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wide">
                    Enquire for Fees
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-[#1A3B70] mb-2 group-hover:text-[#00AEEF] transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 font-normal leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Who it is for */}
                <div className="bg-white p-3 rounded-xl border border-slate-100 mb-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Who it's for
                  </p>
                  <p className="text-[11px] text-slate-700 font-medium leading-snug">
                    {course.whoFor}
                  </p>
                </div>

                {/* Inclusions */}
                <div className="mb-6 space-y-1.5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Inclusions
                  </p>
                  {course.inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => onOpenCounselling(course.title)}
                  className="w-full py-2.5 bg-[#1A3B70] hover:bg-[#0A192F] text-white rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Enroll & Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFCC00]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
