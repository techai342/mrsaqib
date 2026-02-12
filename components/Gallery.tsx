import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import { X, Download, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  onLightboxToggle?: (isOpen: boolean) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onLightboxToggle }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    if (onLightboxToggle) onLightboxToggle(true);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    if (onLightboxToggle) onLightboxToggle(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : 0));
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0));
    }
  };

  const downloadImage = async () => {
    if (selectedImageIndex === null) return;
    const url = GALLERY_IMAGES[selectedImageIndex].url;
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `Saqib_Visuals_${selectedImageIndex + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      window.open(url, '_blank');
    }
  };

  const shareImage = async () => {
    if (selectedImageIndex === null) return;
    const url = GALLERY_IMAGES[selectedImageIndex].url;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Saqib Visuals',
          text: 'Check out this amazing shot by Saqib Visuals!',
          url: url,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div id="gallery" className="pt-40 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <div>
           <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Masterpieces</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full"></div>
        </div>
        <p className="text-gray-400 mt-4 md:mt-0 font-display uppercase tracking-widest text-sm">
          Explore the visual journey
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GALLERY_IMAGES.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index % 4 * 0.1 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-gray-900"
            onClick={() => openLightbox(index)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
              <span className="text-white text-sm font-bold tracking-wide">View Image</span>
            </div>
            <img
              src={img.url}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close / Cut Button */}
            <button 
              onClick={closeLightbox} 
              className="absolute top-6 right-6 p-4 bg-red-600/80 hover:bg-red-600 text-white rounded-full transition-transform hover:scale-110 z-50 shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-red-400"
              title="Close (Cut)"
            >
              <X size={28} />
            </button>
            
            <button onClick={prevImage} className="absolute left-4 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition z-20 backdrop-blur-md border border-white/10 hidden md:block">
              <ChevronLeft size={32} />
            </button>
            
            <button onClick={nextImage} className="absolute right-4 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition z-20 backdrop-blur-md border border-white/10 hidden md:block">
              <ChevronRight size={32} />
            </button>

            {/* Main Image Container */}
            <motion.div 
              key={selectedImageIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* RGB Border for Image */}
              <div className="relative p-1 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-rgb-flow">
                  <img 
                    src={GALLERY_IMAGES[selectedImageIndex].url} 
                    className="max-h-[70vh] w-auto rounded-xl shadow-2xl bg-black"
                    alt="Full view"
                  />
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <button 
                  onClick={downloadImage}
                  className="flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <Download size={20} /> <span className="hidden sm:inline">Download</span>
                </button>
                <button 
                  onClick={shareImage}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:brightness-110 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20"
                >
                  <Share2 size={20} /> <span className="hidden sm:inline">Share</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;