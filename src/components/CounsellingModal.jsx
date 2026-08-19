import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function CounsellingModal({ isOpen, onClose, selectedProgram = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: selectedProgram || 'Class 12 Commerce Boards',
    preferredTime: 'Morning Batch'
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProgram) {
      setFormData((prev) => ({ ...prev, program: selectedProgram }));
    }
  }, [selectedProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `Hello Commerce Gyan, I want to book a free counselling session.\nName: ${formData.name}\nPhone: ${formData.phone}\nProgram Interest: ${formData.program}`
    );
    window.open(`https://wa.me/918271365450?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#1A3B70] to-[#0A192F] text-white p-6 sm:p-8 space-y-1">
          <div className="inline-block bg-[#00AEEF]/20 text-[#FFCC00] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Free 1-on-1 Academic Session
          </div>
          <h3 className="text-2xl font-extrabold text-white">Book Free Counselling</h3>
          <p className="text-xs text-slate-300 font-normal">
            Speak directly with Tabarak Sir or counseling staff at Katrasgarh center.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-[#1A3B70]">Counselling Requested!</h4>
              <p className="text-xs text-slate-600 font-medium max-w-xs mx-auto">
                Thank you <strong>{formData.name}</strong>. Our Katrasgarh team will call you at <strong>{formData.phone}</strong> shortly.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-xl font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Connect Instantly on WhatsApp (+91 8271365450)</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="text-xs font-bold text-slate-500 hover:underline cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#00AEEF] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#00AEEF] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Program of Interest</label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#00AEEF] focus:bg-white transition-colors"
                >
                  <option value="Class 7-10 Academics">Class 7–10 School Academics</option>
                  <option value="Class 11 Commerce Boards">Class 11 Commerce Boards</option>
                  <option value="Class 12 Commerce Boards">Class 12 Commerce Boards</option>
                  <option value="CA Foundation Prep">CA Foundation Prep</option>
                  <option value="CMA Foundation Prep">CMA Foundation Prep</option>
                  <option value="CS Foundation Prep">CS Foundation Prep</option>
                  <option value="B.Com Coaching">B.Com Coaching</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#FFCC00] hover:bg-[#FFD633] text-[#1A3B70] font-black text-sm rounded-xl shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Counselling Request</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] text-slate-400 font-medium">
                  📍 Desk located behind Rajasthani Dharamshala, Katrasgarh
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
