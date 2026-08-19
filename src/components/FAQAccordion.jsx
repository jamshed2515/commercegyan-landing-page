import React, { useState } from 'react';
import { verifiedFaqs } from '../data/faqs';
import { Plus, Minus } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F1EBDA] border-b border-[#DCD2B8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="font-mono text-xs font-bold text-[#B9832A] uppercase tracking-widest flex items-center gap-2">
            <span className="w-6 h-px bg-[#B9832A]" />
            <span>QUERIES RESOLVED</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#0F2C4C] tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-[#5A6376] text-base font-normal leading-relaxed">
            Verified answers on admissions, batch sizes, test series, and course coverage.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {verifiedFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[3px] border border-[#DCD2B8] overflow-hidden shadow-2xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-[#0F2C4C] hover:text-[#B9832A] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#F7F3E8] text-[#B9832A] border border-[#E7E0CC] shrink-0">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-[#B9832A] shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#5A6376] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#5A6376] font-normal leading-relaxed border-t border-[#E7E0CC] pt-4 bg-[#F7F3E8]/40 font-sans">
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
