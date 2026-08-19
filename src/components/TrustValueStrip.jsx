import React from 'react';
import { BookOpen, FileText, Users, HelpCircle, UserCheck, ShieldCheck } from 'lucide-react';

const differentiators = [
  {
    code: '§ 01',
    icon: BookOpen,
    title: 'Concept-Based Teaching',
    description: 'Deep analytical understanding over rote memorization, so principles stay long after the exam.'
  },
  {
    code: '§ 02',
    icon: Users,
    title: 'Small Batch Size',
    description: 'Capped at 25–30 students per batch so nobody gets left behind in a crowded room.'
  },
  {
    code: '§ 03',
    icon: FileText,
    title: 'Weekly Evaluation',
    description: 'Regular chapter-wise tests and full-syllabus mock exams strictly on board patterns.'
  },
  {
    code: '§ 04',
    icon: UserCheck,
    title: 'Personal Mentorship',
    description: 'Direct guidance from Tabarak Sir, aligning academic progress with individual career goals.'
  },
  {
    code: '§ 05',
    icon: ShieldCheck,
    title: 'Standard Study Material',
    description: 'Printed topic summaries, formula lists, practice workbooks, and digital PDF notes.'
  },
  {
    code: '§ 06',
    icon: HelpCircle,
    title: 'Dedicated Doubt Support',
    description: 'An active doubt-clearing desk, ensuring queries get resolved before the next topic starts.'
  }
];

export default function TrustValueStrip() {
  return (
    <section id="why" className="py-20 bg-[#F1EBDA] border-b border-[#DCD2B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-14 space-y-3">
          <div className="font-mono text-xs font-bold text-[#B9832A] uppercase tracking-widest flex items-center gap-2">
            <span className="w-6 h-px bg-[#B9832A]" />
            <span>LEDGER OF CAPABILITIES</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#0F2C4C] tracking-tight">
            Engineered for academic mastery & retention
          </h2>
          <p className="text-[#5A6376] text-base font-normal leading-relaxed">
            Six commitments that show up in every batch, every week — not just in the prospectus.
          </p>
        </div>

        {/* 6 Ledger Entry Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DCD2B8] border border-[#DCD2B8]">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F7F3E8] hover:bg-white p-7 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#B9832A] tracking-wider block mb-4">
                    {item.code}
                  </span>
                  
                  <div className="w-10 h-10 rounded bg-[#0F2C4C]/5 text-[#0F2C4C] group-hover:text-[#B9832A] flex items-center justify-center mb-4 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#0F2C4C] mb-2 group-hover:text-[#B9832A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5A6376] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
