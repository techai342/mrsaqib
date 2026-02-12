import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';

const CollageSection: React.FC = () => {
  // Using 3 distinct images as requested
  const topImage = GALLERY_IMAGES[4].url;      // Grayscale Top
  const middleImage = GALLERY_IMAGES[2].url;   // Color Middle
  const bottomImage = GALLERY_IMAGES[6].url;   // Grayscale Bottom

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Container min-height adjusted slightly */}
      <div className="relative w-full min-h-[900px] md:h-[1300px] bg-[#1a1a1a] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col">
        
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/concrete-wall.png")' }}></div>

        {/* --- TOP SECTION (Grayscale) --- */}
        {/* HIDDEN on Mobile (md:block) */}
        <div className="relative h-[40%] w-full overflow-hidden bg-black hidden md:block">
             <img 
                src={topImage} 
                alt="Top Layer" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
                style={{ objectPosition: 'center top' }}
             />
             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
             
             {/* Text Overlay Top */}
             <div className="absolute top-12 w-full text-center z-10 flex flex-col items-center">
                 <h3 className="text-white/90 font-serif text-sm md:text-lg tracking-[0.3em] uppercase mb-2 drop-shadow-md font-bold">Editor Member</h3>
                 <motion.h2 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="text-white font-serif text-4xl md:text-6xl font-bold uppercase tracking-wider relative inline-block drop-shadow-xl"
                 >
                    SAQIB VISUALS
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white/70"></span>
                 </motion.h2>
             </div>
        </div>

        {/* --- MIDDLE SECTION (Color with Rips) --- */}
        {/* On Mobile: Top 0, Height 55%. On Desktop: Top 33%, Height 45% */}
        <div className="absolute top-0 md:top-[33%] left-0 right-0 h-[55%] md:h-[45%] z-20 pointer-events-none flex justify-center">
             <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full md:w-[85%] h-full"
             >
                {/* Upper Torn Paper Edge */}
                <div className="absolute -top-1 left-0 right-0 h-8 md:h-12 z-30" 
                     style={{ 
                        backgroundColor: '#e5e5e5', 
                        clipPath: "polygon(0 40%, 5% 55%, 10% 45%, 15% 55%, 20% 40%, 25% 60%, 30% 45%, 35% 55%, 40% 40%, 45% 60%, 50% 45%, 55% 55%, 60% 40%, 65% 60%, 70% 45%, 75% 55%, 80% 40%, 85% 60%, 90% 45%, 95% 55%, 100% 40%, 100% 0, 0 0)",
                        transform: "scaleY(-1)"
                     }}>
                </div>

                {/* Main Image Container */}
                <div className="w-full h-full relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#222]">
                    <img 
                        src={middleImage} 
                        alt="Middle Layer" 
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center 20%' }}
                    />
                    
                    {/* Inner Shadow/Vignette for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>

                    {/* Sticker/Graphic */}
                     <div className="absolute top-[20%] right-6 md:right-12 transform rotate-12 bg-white/10 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded-lg shadow-lg">
                        <p className="text-[10px] md:text-xs font-mono text-white font-bold tracking-widest">#CREATIVE</p>
                    </div>
                </div>

                 {/* Lower Torn Paper Edge */}
                <div className="absolute -bottom-1 left-0 right-0 h-8 md:h-12 z-30" 
                     style={{ 
                        backgroundColor: '#e5e5e5', 
                        clipPath: "polygon(0 40%, 5% 55%, 10% 45%, 15% 55%, 20% 40%, 25% 60%, 30% 45%, 35% 55%, 40% 40%, 45% 60%, 50% 45%, 55% 55%, 60% 40%, 65% 60%, 70% 45%, 75% 55%, 80% 40%, 85% 60%, 90% 45%, 95% 55%, 100% 40%, 100% 100%, 0% 100%)",
                     }}>
                </div>
             </motion.div>
        </div>

        {/* --- BOTTOM SECTION (Grayscale) --- */}
        {/* On Mobile: Height 45%. On Desktop: Height 35% */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] md:h-[35%] overflow-hidden bg-[#111]">
            <img 
                src={bottomImage} 
                alt="Bottom Layer" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 blur-[1px]"
                style={{ objectPosition: 'top center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

            {/* Content Bottom */}
            <div className="relative h-full flex flex-col items-center justify-end pb-12 px-4 text-center z-30">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex flex-col items-center">
                         <div className="w-8 h-8 text-white mb-2">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H11.983C10.8784 16 9.983 16.8954 9.983 18L9.983 21H14.017ZM12 14C14.2091 14 16 12.2091 16 10V4C16 1.79086 14.2091 0 12 0C9.79086 0 8 1.79086 8 4V10C8 12.2091 9.79086 14 12 14Z" /></svg>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-1 font-display tracking-wide">Jikoushokai</h4>
                        <p className="text-white/80 font-handwriting text-lg md:text-xl max-w-xl mx-auto leading-relaxed transform -rotate-1">
                            "Si editor kreatif yang semangatnya meletup-letup. Halo aku Saqib."
                        </p>
                        
                        <div className="mt-6 flex flex-col items-center">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-2 h-2 rounded-full bg-white"></span>
                                <span className="w-2 h-2 rounded-full bg-white/50"></span>
                                <span className="w-2 h-2 rounded-full bg-white/20"></span>
                            </div>
                            <p className="text-white font-bold font-mono tracking-widest text-sm">26 FEB 2004</p>
                            <p className="text-[10px] text-white/50 font-mono mt-1">EDIT BY: SAQIB PROJECT</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default CollageSection;