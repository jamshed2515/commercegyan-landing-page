import React, { useState } from 'react';
import { verifiedFaqs } from '../data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#00AEEF]/10 text-[#00AEEF] px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Queries Resolved</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3B70]">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Verified answers regarding admissions, batch sizes, test series, and course coverage.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {verifiedFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#1A3B70] hover:text-[#00AEEF] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-500 font-bold">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#00AEEF]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
