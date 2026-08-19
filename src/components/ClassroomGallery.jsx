import React, { useState } from 'react';
import { classroomGallery } from '../data/gallery';
import { Camera, Sparkles, X } from 'lucide-react';

export default function ClassroomGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#00AEEF]/10 text-[#00AEEF] px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Authentic Environment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3B70]">
            Life & Learning at Commerce Gyan
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Real classroom moments, student celebrations, and academic recognition at our Katrasgarh institute.
          </p>
        </div>

        {/* Editorial Gallery Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {classroomGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    Click to Enlarge 🔍
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-1">
                <h3 className="text-base font-bold text-[#1A3B70] group-hover:text-[#00AEEF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/40 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[75vh] overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white space-y-1">
              <h3 className="text-xl font-bold text-[#FFCC00]">{selectedImage.title}</h3>
              <p className="text-xs text-slate-300 font-normal">{selectedImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
