import React from 'react';
import { BookOpen, FileText, Users, HelpCircle, Target, UserCheck } from 'lucide-react';

const differentiators = [
  {
    icon: BookOpen,
    title: 'Concept-Based Teaching',
    description: 'Deep analytical understanding over rote memorization to master core principles.'
  },
  {
    icon: Users,
    title: 'Small Batch Size',
    description: 'Limited to 25–30 students per batch to ensure individual focus and participation.'
  },
  {
    icon: FileText,
    title: 'Weekly Evaluation',
    description: 'Regular chapter-wise test series and full-syllabus mock exams strictly on board patterns.'
  },
  {
    icon: UserCheck,
    title: 'Personal Mentorship',
    description: 'Direct guidance from Tabarak Sir to align academic progress with career goals.'
  },
  {
    icon: FileText,
    title: 'Standard Study Material',
    description: 'Printed topic summaries, formula lists, practice workbooks, and digital PDF notes.'
  },
  {
    icon: HelpCircle,
    title: 'Dedicated Doubt Support',
    description: 'Active doubt clearing desk to resolve queries before moving to advanced topics.'
  }
];

export default function TrustValueStrip() {
  return (
    <section id="differentiators" className="py-16 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-block bg-[#00AEEF]/10 text-[#00AEEF] px-3.5 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
            Why Commerce Gyan
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3B70]">
            Engineered for Academic Mastery & Retention
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Core teaching capabilities that set our students up for consistent board & competitive toppers.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50/70 hover:bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A3B70]/5 group-hover:bg-[#00AEEF]/10 text-[#1A3B70] group-hover:text-[#00AEEF] flex items-center justify-center mb-4 transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#1A3B70] mb-1.5 group-hover:text-[#00AEEF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
