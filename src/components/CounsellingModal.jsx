import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, MessageCircle } from 'lucide-react';

export default function CounsellingModal({ isOpen, onClose, selectedProgram = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: selectedProgram || 'Class 12 Commerce Boards'
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProgram) {
      setFormData((prev) => ({ ...prev, program: selectedProgram }));
    }
  }, [selectedProgram]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};

    // Name: required
    if (!formData.name || !formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    // Phone: required and valid 10-digit Indian mobile number
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    // Program: required
    if (!formData.program) {
      newErrors.program = 'Please select a program of interest';
    }

    // Email: optional, but check format if provided
    if (formData.email && formData.email.trim() !== '') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email format';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `Hello Commerce Gyan, I want to book a free counselling session.\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\nProgram Interest: ${formData.program}`
    );
    window.open(`https://wa.me/918271365450?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0F2C4C]/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-lg w-full bg-[#F7F3E8] rounded-[3px] overflow-hidden border border-[#DCD2B8] shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 text-[#F4F1E4] hover:bg-white/40 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close counselling modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#0F2C4C] text-[#F4F1E4] p-6 sm:p-7 space-y-1">
          <div className="font-mono text-[10px] font-bold text-[#D9A441] uppercase tracking-widest">
            FREE 1-ON-1 ACADEMIC SESSION
          </div>
          <h3 className="font-display font-semibold text-2xl text-[#F4F1E4]">Book Free Counselling</h3>
          <p className="font-sans text-xs text-[#AFC0D6] font-normal">
            Speak directly with Tabarak Sir or counseling staff at Katrasgarh center.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 font-sans">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#2F7A5C]/15 text-[#2F7A5C] flex items-center justify-center border border-[#2F7A5C]">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-xl text-[#0F2C4C]">Counselling Requested!</h4>
              <p className="text-xs text-[#5A6376] font-medium max-w-xs mx-auto">
                Thank you <strong className="text-[#0F2C4C]">{formData.name}</strong>. Our Katrasgarh team will call you at <strong className="text-[#0F2C4C]">{formData.phone}</strong> shortly.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-[2px] font-mono text-xs font-bold uppercase shadow-md flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Connect Instantly on WhatsApp (+91 8271365450)</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setErrors({});
                    onClose();
                  }}
                  className="font-mono text-xs font-bold text-[#5A6376] hover:underline cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              {/* Full Name Field */}
              <div>
                <label htmlFor="counselling-name" className="block font-mono text-xs font-bold text-[#0F2C4C] uppercase tracking-wider mb-1">
                  Your Full Name <span className="text-[#A64B3F]">*</span>
                </label>
                <input
                  id="counselling-name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'error-name' : undefined}
                  className={`w-full px-4 py-2.5 text-xs bg-white border rounded-[2px] focus:outline-none transition-colors font-sans ${
                    errors.name ? 'border-[#A64B3F] focus:border-[#A64B3F]' : 'border-[#DCD2B8] focus:border-[#B9832A]'
                  }`}
                />
                {errors.name && (
                  <p id="error-name" className="font-mono text-[10.5px] text-[#A64B3F] mt-1 flex items-center gap-1 font-semibold">
                    <span>⚠️</span> <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="counselling-phone" className="block font-mono text-xs font-bold text-[#0F2C4C] uppercase tracking-wider mb-1">
                  Phone Number <span className="text-[#A64B3F]">*</span>
                </label>
                <input
                  id="counselling-phone"
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'error-phone' : undefined}
                  className={`w-full px-4 py-2.5 text-xs bg-white border rounded-[2px] focus:outline-none transition-colors font-mono ${
                    errors.phone ? 'border-[#A64B3F] focus:border-[#A64B3F]' : 'border-[#DCD2B8] focus:border-[#B9832A]'
                  }`}
                />
                {errors.phone && (
                  <p id="error-phone" className="font-mono text-[10.5px] text-[#A64B3F] mt-1 flex items-center gap-1 font-semibold">
                    <span>⚠️</span> <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Email Address Field (Optional) */}
              <div>
                <label htmlFor="counselling-email" className="block font-mono text-xs font-bold text-[#0F2C4C] uppercase tracking-wider mb-1">
                  Email Address <span className="text-[#5A6376] font-normal text-[10px] uppercase">(Optional)</span>
                </label>
                <input
                  id="counselling-email"
                  type="email"
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                  className={`w-full px-4 py-2.5 text-xs bg-white border rounded-[2px] focus:outline-none transition-colors font-sans ${
                    errors.email ? 'border-[#A64B3F] focus:border-[#A64B3F]' : 'border-[#DCD2B8] focus:border-[#B9832A]'
                  }`}
                />
                {errors.email && (
                  <p id="error-email" className="font-mono text-[10.5px] text-[#A64B3F] mt-1 flex items-center gap-1 font-semibold">
                    <span>⚠️</span> <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Program of Interest Field */}
              <div>
                <label htmlFor="counselling-program" className="block font-mono text-xs font-bold text-[#0F2C4C] uppercase tracking-wider mb-1">
                  Program of Interest <span className="text-[#A64B3F]">*</span>
                </label>
                <select
                  id="counselling-program"
                  value={formData.program}
                  onChange={(e) => handleChange('program', e.target.value)}
                  aria-invalid={!!errors.program}
                  aria-describedby={errors.program ? 'error-program' : undefined}
                  className={`w-full px-4 py-2.5 text-xs bg-white border rounded-[2px] focus:outline-none transition-colors font-sans ${
                    errors.program ? 'border-[#A64B3F] focus:border-[#A64B3F]' : 'border-[#DCD2B8] focus:border-[#B9832A]'
                  }`}
                >
                  <option value="Class 7-10 Academics">Class 7–10 School Academics</option>
                  <option value="Class 11 Commerce Boards">Class 11 Commerce Boards</option>
                  <option value="Class 12 Commerce Boards">Class 12 Commerce Boards</option>
                  <option value="CA Foundation Prep">CA Foundation Prep</option>
                  <option value="CMA Foundation Prep">CMA Foundation Prep</option>
                  <option value="CS Foundation Prep">CS Foundation Prep</option>
                  <option value="B.Com Coaching">B.Com Coaching</option>
                </select>
                {errors.program && (
                  <p id="error-program" className="font-mono text-[10.5px] text-[#A64B3F] mt-1 flex items-center gap-1 font-semibold">
                    <span>⚠️</span> <span>{errors.program}</span>
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#D9A441] hover:bg-[#B9832A] text-[#0F2C4C] font-mono text-xs font-extrabold uppercase tracking-wider rounded-[2px] border border-[#B9832A] shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#B9832A]"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Counselling Request</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <p className="font-mono text-[11px] text-[#5A6376]">
                  📍 Katrasgarh Centre • Behind Rajasthani Dharamshala
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
