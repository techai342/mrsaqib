import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';

const SplitVexxSection: React.FC = () => {
  // Using an image that likely hasn't been used. 
  // Using index 22 from the gallery.
  const selectedImage = GALLERY_IMAGES[22].url;

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative w-full h-[800px] md:h-[900px] bg-[#0a0a0a] rounded-[2rem] overflow-hidden shadow-2xl group border border-white/10">
        
        {/* Background Layer: Grayscale, Blurred, Darker */}
        <div className="absolute inset-0 z-0">
          <img 
            src={selectedImage} 
            alt="Background Ghost" 
            className="w-full h-full object-cover grayscale blur-[4px] opacity-40 scale-105 transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

        {/* Foreground Layer: Color, Sharp, Clipped */}
        {/* Desktop Clip: Right side focus */}
        <div 
            className="absolute inset-0 z-10 hidden md:block"
            style={{ clipPath: 'inset(10% 20% 10% 45%)' }}
        >
            <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={selectedImage} 
                alt="Focus Layer" 
                className="w-full h-full object-cover contrast-110 saturate-120"
            />
        </div>

        {/* Mobile Clip: Top/Center focus */}
        <div 
            className="absolute inset-0 z-10 md:hidden"
            style={{ clipPath: 'inset(10% 10% 45% 10%)' }}
        >
            <img 
                src={selectedImage} 
                alt="Focus Layer" 
                className="w-full h-full object-cover contrast-110 saturate-120"
            />
        </div>

        {/* White Border Frame - must match clip-path */}
        {/* Desktop Frame */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-20 pointer-events-none border-[3px] border-white hidden md:block shadow-[0_0_50px_rgba(255,255,255,0.3)]"
            style={{ top: '10%', right: '20%', bottom: '10%', left: '45%' }}
        />
        
        {/* Mobile Frame */}
        <div 
            className="absolute z-20 pointer-events-none border-[3px] border-white md:hidden shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            style={{ top: '10%', right: '10%', bottom: '45%', left: '10%' }}
        />

        {/* Text Content */}
        <div className="absolute top-0 left-0 w-full h-full z-30 flex flex-col justify-end md:justify-center px-6 md:px-16 pb-12 md:pb-0">
             <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="md:w-[40%]"
             >
                 <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-[2px] bg-red-500"></div>
                     <h4 className="text-gray-400 font-mono tracking-[0.2em] text-xs uppercase">
                        Featured Art
                     </h4>
                 </div>

                 <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                    AURA<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">VEXX</span>
                 </h2>

                 <div className="bg-black/60 backdrop-blur-md p-6 border-l-2 border-red-500 rounded-r-xl">
                     <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
                        <strong className="text-white">Saqib Visuals</strong> blends moody melodies with ethereal visuals, creating designs that feel like a dream you don't want to wake from. A rising star in the digital manipulation scene.
                     </p>
                 </div>
                 
                 <div className="mt-8 flex gap-4">
                     <button className="px-6 py-2 bg-white text-black font-bold text-sm tracking-widest hover:bg-red-500 hover:text-white transition-colors uppercase">
                        View Project
                     </button>
                 </div>
             </motion.div>
        </div>

        {/* Decorative Watermark */}
        <div className="absolute top-8 right-8 z-20 mix-blend-overlay opacity-50 hidden md:block">
            <h3 className="text-xl font-bold text-white border-2 border-white px-4 py-1 rotate-90 origin-top-right">
                GFX STYLE
            </h3>
        </div>

      </div>
    </section>
  );
};

export default SplitVexxSection;