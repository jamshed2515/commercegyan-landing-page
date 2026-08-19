import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, Trophy, CheckSquare } from 'lucide-react';

export default function EasterEggModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Trigger Confetti Explosion
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti effect triggered');
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-md w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-[#00AEEF]/40 shadow-2xl space-y-5 animate-in fade-in zoom-in duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#FFCC00]/20 text-[#FFCC00] flex items-center justify-center font-bold text-2xl border border-[#FFCC00]/30 animate-bounce">
            🎉
          </div>
          <div className="inline-block bg-[#00AEEF]/20 text-[#00AEEF] px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
            Secret Found!
          </div>
          <h3 className="text-2xl font-extrabold text-white">Commerce Gyan Champion Mode</h3>
          <p className="text-xs text-slate-300 font-normal">
            You unlocked Tabarak Sir’s 5-Step Secret Exam Preparation Formula!
          </p>
        </div>

        <div className="space-y-2.5 bg-white/5 p-4 rounded-2xl border border-white/10 text-xs text-slate-200">
          <div className="flex items-start gap-2.5">
            <CheckSquare className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
            <span>1. Focus on Accountancy Ledger Logic before memorizing format.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckSquare className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
            <span>2. Write 1 complete Chapter Test every Sunday under timed conditions.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckSquare className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
            <span>3. Highlight ICAI / Board key terms in Business Studies answers.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckSquare className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
            <span>4. Maintain a dedicated Doubt Notebook for mistakes made in tests.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckSquare className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
            <span>5. Small batch focus: Ask questions freely without hesitation.</span>
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#FFCC00] hover:bg-[#FFD633] text-[#1A3B70] font-black text-xs rounded-xl shadow-md cursor-pointer"
          >
            Claim Academic Mastery & Close
          </button>
        </div>

      </div>
    </div>
  );
}
