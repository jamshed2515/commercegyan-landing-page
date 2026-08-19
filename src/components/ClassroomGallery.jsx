import React, { useState } from 'react';
import { classroomGallery } from '../data/gallery';
import { Camera, X } from 'lucide-react';

export default function ClassroomGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-[#F7F3E8] border-b border-[#DCD2B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-14 space-y-3">
          <div className="font-mono text-xs font-bold text-[#B9832A] uppercase tracking-widest flex items-center gap-2">
            <span className="w-6 h-px bg-[#B9832A]" />
            <span>AUTHENTIC ENVIRONMENT</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#0F2C4C] tracking-tight">
            Life & learning at Commerce Gyan
          </h2>
          <p className="text-[#5A6376] text-base font-normal leading-relaxed">
            Real classroom moments, student celebrations, and academic recognition at our Katrasgarh institute.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {classroomGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group bg-white rounded-[3px] overflow-hidden border border-[#DCD2B8] shadow-2xs hover:shadow-md hover:border-[#B9832A]/60 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F1EBDA]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0F2C4C]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="font-mono text-[10.5px] font-bold text-[#F4F1E4] bg-[#0F2C4C] px-3 py-1 rounded-[2px] uppercase border border-[#D9A441]/40">
                    Click to Enlarge 🔍
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-1">
                <h3 className="font-display font-bold text-base text-[#0F2C4C] group-hover:text-[#B9832A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5A6376] font-normal leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-[#0F2C4C]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#0F2C4C] rounded-[3px] overflow-hidden border border-[#D9A441]/40 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden bg-black/40">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>

            <div className="p-6 bg-[#0F2C4C] text-[#F4F1E4] space-y-1">
              <h3 className="font-display font-bold text-xl text-[#D9A441]">{selectedImage.title}</h3>
              <p className="font-mono text-xs text-[#AFC0D6] font-normal">{selectedImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
