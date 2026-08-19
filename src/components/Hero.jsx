import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, BookOpen, Target, Users } from 'lucide-react';

const studentRecords = [
  { name: 'Sheikh Aamir', date: '19.08.2026', track: 'Class 12 Boards' },
  { name: 'Prabhat Mandal', date: '18.08.2026', track: 'CA Foundation' },
  { name: 'Yash Raj', date: '15.08.2026', track: 'Class 11 Commerce' },
  { name: 'Satyam Sharma', date: '17.08.2026', track: 'Class 12 Boards' },
  { name: 'Prince Raj', date: '18.08.2026', track: 'CA Foundation' }
];

export default function Hero({ onOpenCounselling }) {
  const [cycle, setCycle] = useState(0);
  const [nameText, setNameText] = useState('');
  const [trackText, setTrackText] = useState('');
  const [showStamp, setShowStamp] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const current = studentRecords[cycle];
    setShowStamp(false);
    setNameText('');
    setTrackText('');

    let nameIdx = 0;
    const nameInterval = setInterval(() => {
      if (!isMounted) return;
      nameIdx++;
      setNameText(current.name.slice(0, nameIdx));
      if (nameIdx >= current.name.length) {
        clearInterval(nameInterval);

        let trackIdx = 0;
        const trackInterval = setInterval(() => {
          if (!isMounted) return;
          trackIdx++;
          setTrackText(current.track.slice(0, trackIdx));
          if (trackIdx >= current.track.length) {
            clearInterval(trackInterval);
            setTimeout(() => {
              if (isMounted) setShowStamp(true);
            }, 300);
          }
        }, 55);
      }
    }, 70);

    const nextCycleTimer = setTimeout(() => {
      if (isMounted) {
        setCycle((prev) => (prev + 1) % studentRecords.length);
      }
    }, 5500);

    return () => {
      isMounted = false;
      clearInterval(nameInterval);
      clearTimeout(nextCycleTimer);
    };
  }, [cycle]);

  const currentRecord = studentRecords[cycle];

  return (
    <section className="relative pt-[108px] sm:pt-[116px] pb-[88px] overflow-hidden bg-[#F7F3E8] ledger-lines">
      
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-[56px] items-center">
          
          {/* LEFT COLUMN: Editorial Value Prop & Headline */}
          <div className="text-left">
            
            {/* Monospace Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E7F1EC] border border-[#C8E0D3] rounded-full px-3 py-1.5 font-mono text-[11.5px] font-medium text-[#2F7A5C] uppercase tracking-[0.08em] mb-[26px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F7A5C] animate-pulse" />
              <span>Admissions Open · Session 2026–27 · Katrasgarh</span>
            </div>

            {/* Headline with Fraunces Display Font */}
            <h1 className="font-display font-semibold text-[38px] sm:text-[48px] lg:text-[58px] leading-[1.04] text-[#0F2C4C] tracking-[-0.02em] mb-[22px]">
              Commerce, taught the way a ledger balances —{' '}
              <em className="italic font-medium text-[#B9832A]">
                every entry earns its place.
              </em>
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-[#5A6376] text-[17px] leading-[1.65] max-w-[490px] mb-[32px] font-sans font-normal">
              No rote memorisation, no overcrowded batches. <b className="text-[#1C2430] font-semibold">Structured, concept-first coaching</b> for School Academics (7–10), Commerce Boards (11–12), and CA / CMA / CS Foundations — led personally by Tabarak Sir.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-[14px] mb-[22px]">
              <button
                onClick={onOpenCounselling}
                className="bg-[#D9A441] hover:bg-[#B9832A] text-[#0F2C4C] px-[26px] py-[15px] text-[14.5px] font-bold rounded-[2px] border border-[#B9832A] transition-all flex items-center gap-2.5 cursor-pointer font-sans shadow-xs hover:shadow-md"
              >
                <span>Book Free Counselling</span>
                <ArrowRight className="w-4 h-4 text-[#0F2C4C]" />
              </button>

              <a
                href="#programs"
                className="bg-transparent hover:bg-[#0F2C4C] text-[#0F2C4C] hover:text-[#F4F1E4] px-[25px] py-[14px] text-[14.5px] font-semibold rounded-[2px] border border-[#0F2C4C] transition-all flex items-center gap-2.5 cursor-pointer font-sans"
              >
                <span>Explore Programs</span>
              </a>
            </div>

            {/* Hero Note Below CTAs */}
            <div className="font-mono text-[12px] text-[#5A6376] flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2F7A5C] shrink-0" />
              <span>Every result below is a real, verified student — see the register ↓</span>
            </div>

          </div>

          {/* RIGHT COLUMN: Signature Admission Register Ledger Card */}
          <div className="relative">
            
            <div className="bg-white border border-[#DCD2B8] rounded-[4px] shadow-[0_30px_60px_-30px_rgba(15,44,76,0.35),0_2px_0_#D9A441] overflow-hidden relative">
              
              {/* Ledger Card Header */}
              <div className="bg-[#0F2C4C] text-[#F4F1E4] px-[22px] py-[16px] flex items-center justify-between">
                <span className="font-mono text-[11.5px] tracking-[0.1em] text-[#AFC0D6] uppercase font-semibold">Admission Register</span>
                <span className="font-mono text-[12px] text-[#D9A441] font-semibold uppercase tracking-[0.08em]">SESSION 2026–27</span>
              </div>

              {/* Ledger Card Body */}
              <div className="px-[26px] pt-[26px] pb-[22px]">
                <div className="grid grid-cols-[110px_1fr] gap-[14px] py-[13px] border-b border-dashed border-[#DCD2B8] items-baseline">
                  <span className="font-mono text-[11px] tracking-[0.06em] text-[#5A6376] uppercase">Date</span>
                  <span className="font-display text-[17px] font-medium text-[#0F2C4C]">{currentRecord.date}</span>
                </div>

                <div className="grid grid-cols-[110px_1fr] gap-[14px] py-[13px] border-b border-dashed border-[#DCD2B8] items-baseline min-h-[48px]">
                  <span className="font-mono text-[11px] tracking-[0.06em] text-[#5A6376] uppercase">Applicant</span>
                  <span className="font-display text-[17px] font-medium text-[#0F2C4C] flex items-center">
                    {nameText}
                    <span className="inline-block w-[2px] h-[16px] bg-[#B9832A] ml-0.5 animate-pulse" />
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] gap-[14px] py-[13px] border-b border-dashed border-[#DCD2B8] items-baseline min-h-[48px]">
                  <span className="font-mono text-[11px] tracking-[0.06em] text-[#5A6376] uppercase">Track</span>
                  <span className="font-display text-[17px] font-medium text-[#0F2C4C] flex items-center">
                    {trackText}
                    <span className="inline-block w-[2px] h-[16px] bg-[#B9832A] ml-0.5 animate-pulse" />
                  </span>
                </div>

                {/* Stamp Wrap */}
                <div className="flex justify-end mt-[6px] h-[64px] items-center">
                  <div
                    className={`font-mono text-[14px] font-bold tracking-[0.08em] text-[#2F7A5C] border-[2.5px] border-[#2F7A5C] px-[16px] py-[8px] rounded-[4px] uppercase transition-all duration-500 ${
                      showStamp ? 'scale-100 opacity-100 rotate-[-7deg]' : 'scale-0 opacity-0 rotate-0'
                    }`}
                  >
                    CONFIRMED ✓
                  </div>
                </div>
              </div>

              {/* Ledger Card Footer (3-column feature icons matching user image) */}
              <div className="bg-[#F1EBDA] border-t border-[#DCD2B8] px-5 py-3.5 grid grid-cols-3 gap-2 items-center">
                
                {/* Column 1: FOCUS */}
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-[#0F2C4C] shrink-0" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-mono text-[9px] font-bold text-[#5A6376] uppercase tracking-wider">FOCUS</span>
                    <span className="font-sans text-[11px] font-semibold text-[#1C2430]">Concept-First Learning</span>
                  </div>
                </div>

                {/* Column 2: APPROACH */}
                <div className="flex items-center gap-2.5 pl-2 border-l border-[#DCD2B8]">
                  <Target className="w-4 h-4 text-[#0F2C4C] shrink-0" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-mono text-[9px] font-bold text-[#5A6376] uppercase tracking-wider">APPROACH</span>
                    <span className="font-sans text-[11px] font-semibold text-[#1C2430]">Structured Coaching</span>
                  </div>
                </div>

                {/* Column 3: BATCH TYPE */}
                <div className="flex items-center gap-2.5 pl-2 border-l border-[#DCD2B8]">
                  <Users className="w-4 h-4 text-[#0F2C4C] shrink-0" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-mono text-[9px] font-bold text-[#5A6376] uppercase tracking-wider">BATCH TYPE</span>
                    <span className="font-sans text-[11px] font-semibold text-[#1C2430]">Small Batch</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
