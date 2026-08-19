import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustValueStrip from './components/TrustValueStrip';
import ProblemSolution from './components/ProblemSolution';
import Programs from './components/Programs';
import LearningExperience from './components/LearningExperience';
import Mentorship from './components/Mentorship';
import ResultsHallOfFame from './components/ResultsHallOfFame';
import ClassroomGallery from './components/ClassroomGallery';
import FAQAccordion from './components/FAQAccordion';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CounsellingModal from './components/CounsellingModal';
import EasterEggModal from './components/EasterEggModal';

export default function App() {
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [easterEggOpen, setEasterEggOpen] = useState(false);

  // Easter Egg keyboard shortcut: Typing "GYAN"
  useEffect(() => {
    let typedKeys = '';
    const handleKeyDown = (e) => {
      typedKeys += e.key.toUpperCase();
      if (typedKeys.length > 4) {
        typedKeys = typedKeys.slice(-4);
      }
      if (typedKeys === 'GYAN') {
        setEasterEggOpen(true);
        typedKeys = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenCounselling = (programName = '') => {
    setSelectedProgram(programName);
    setCounsellingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 font-sans selection:bg-[#00AEEF] selection:text-white">
      
      {/* 1. Sticky Navigation */}
      <Navbar onOpenCounselling={() => handleOpenCounselling()} />

      {/* 2. Hero Section */}
      <Hero onOpenCounselling={() => handleOpenCounselling()} />

      {/* 3. Trust & Capability Strip */}
      <TrustValueStrip />

      {/* 4. The Problem & Value Proposition */}
      <ProblemSolution />

      {/* 5. Course & Academic Programs */}
      <Programs onOpenCounselling={handleOpenCounselling} />

      {/* 6. Productized Learning Experience (4-Step Journey) */}
      <LearningExperience />

      {/* 7. Lead Mentorship Feature (Tabarak Sir) */}
      <Mentorship onOpenCounselling={() => handleOpenCounselling()} />

      {/* 8. Verified Student Results & Parent Feedback */}
      <ResultsHallOfFame />

      {/* 9. Authentic Classroom Gallery */}
      <ClassroomGallery />

      {/* 10. Frequently Asked Questions Accordion */}
      <FAQAccordion />

      {/* 11. Closing Call to Action */}
      <FinalCTA onOpenCounselling={() => handleOpenCounselling()} />

      {/* 12. Verified Footer */}
      <Footer onTriggerEasterEgg={() => setEasterEggOpen(true)} />

      {/* Interactive Modals */}
      <CounsellingModal
        isOpen={counsellingModalOpen}
        onClose={() => setCounsellingModalOpen(false)}
        selectedProgram={selectedProgram}
      />

      <EasterEggModal
        isOpen={easterEggOpen}
        onClose={() => setEasterEggOpen(false)}
      />

    </div>
  );
}
