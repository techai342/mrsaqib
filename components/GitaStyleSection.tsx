import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';

const GitaStyleSection: React.FC = () => {
  const mainImage = "https://i.ibb.co/9mF3X7DC/Picsart-26-02-03-18-25-58-953.png";

  // Configuration for the background images to mimic the reference collage
  // The reference has images framing the central figure.
  const polaroids = [
    // Top Left (Face close up vibe)
    { 
      src: GALLERY_IMAGES[10].url, 
      className: "top-[12%] left-[-5%] md:left-[15%] rotate-[-12deg] z-10 w-[42%] md:w-[25%]",
      delay: 0.1 
    },
    // Top Right
    { 
      src: GALLERY_IMAGES[1].url, 
      className: "top-[15%] right-[-5%] md:right-[15%] rotate-[8deg] z-10 w-[42%] md:w-[25%]",
      delay: 0.2 
    },
    // Middle Left
    { 
      src: GALLERY_IMAGES[15].url, 
      className: "top-[38%] left-[-8%] md:left-[10%] rotate-[5deg] z-20 w-[45%] md:w-[28%]",
      delay: 0.3 
    },
    // Middle Right
    { 
      src: GALLERY_IMAGES[3].url, 
      className: "top-[40%] right-[-8%] md:right-[10%] rotate-[-6deg] z-20 w-[45%] md:w-[28%]",
      delay: 0.4 
    },
    // Bottom Left
    { 
      src: GALLERY_IMAGES[20].url, 
      className: "bottom-[10%] left-[-2%] md:left-[18%] rotate-[-10deg] z-10 w-[40%] md:w-[24%]",
      delay: 0.5 
    },
    // Bottom Right
    { 
      src: GALLERY_IMAGES[25].url, 
      className: "bottom-[12%] right-[-2%] md:right-[18%] rotate-[12deg] z-10 w-[40%] md:w-[24%]",
      delay: 0.6 
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="relative w-full h-[850px] md:h-[1300px] bg-[#E3E3E3] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col items-center border-[8px] border-white">
        
        {/* Paper Texture Overlay */}
        <div 
            className="absolute inset-0 opacity-40 pointer-events-none z-0 mix-blend-multiply" 
            style={{ 
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/crinkled-paper.png")',
                filter: 'contrast(120%)'
            }}
        ></div>

        {/* --- Header --- */}
        <div className="absolute top-8 md:top-16 z-40 text-center w-full">
            <motion.div 
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="relative inline-block"
            >
                <div className="bg-[#5c7c9e] text-white text-[10px] md:text-xs px-2 py-0.5 absolute -top-3 left-1/2 -translate-x-1/2 tracking-widest uppercase font-sans shadow-sm">
                    New Collection
                </div>
                <h2 className="text-6xl md:text-9xl font-serif font-black tracking-tighter text-[#1a1a1a] relative z-10 drop-shadow-sm">
                    SAQIB
                </h2>
                <h3 className="font-handwriting text-5xl md:text-7xl text-[#e8a87c] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] z-20 whitespace-nowrap drop-shadow-md opacity-90">
                    Visuals
                </h3>
            </motion.div>
        </div>

        {/* --- Background Collage Images --- */}
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            {polaroids.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: item.delay, duration: 0.8 }}
                    className={`absolute aspect-[3/4] p-1 bg-white shadow-lg transform origin-center border-[4px] md:border-[6px] border-white ${item.className}`}
                >
                    <div className="w-full h-full overflow-hidden bg-gray-200">
                        <img src={item.src} alt="Collage Item" className="w-full h-full object-cover sepia-[0.2] contrast-110" />
                    </div>
                </motion.div>
            ))}
        </div>

        {/* --- White "Cut" Lines (Reference Aesthetic) --- */}
        {/* These simulate the white grid/cuts seen in the reference poster */}
        <div className="absolute top-[35%] left-0 w-full h-[4px] bg-white/80 z-20 transform -rotate-6 blur-[1px]"></div>
        <div className="absolute top-[60%] left-0 w-full h-[4px] bg-white/80 z-20 transform rotate-12 blur-[1px]"></div>
        <div className="absolute top-0 left-[35%] w-[4px] h-full bg-white/80 z-20 transform rotate-6 blur-[1px]"></div>
        <div className="absolute top-0 right-[35%] w-[4px] h-full bg-white/80 z-20 transform -rotate-3 blur-[1px]"></div>


        {/* --- Main Character (Center) --- */}
        <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // FIX FOR MOBILE: Centered vertically and horizontally. Desktop: Anchored to bottom.
            // INCREASED SIZE ON MOBILE from h-[70%] to h-[95%] as requested.
            className="absolute left-1/2 -translate-x-1/2 z-30 w-auto flex justify-center pointer-events-none
                       top-[55%] -translate-y-1/2 h-[95%] items-center
                       md:top-auto md:bottom-0 md:translate-y-0 md:h-[85%] md:items-end"
        >
            <img 
                src={mainImage} 
                alt="Main Character" 
                className="h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            />
        </motion.div>

        {/* --- Footer Elements (Matching Reference) --- */}
        <div className="absolute bottom-4 md:bottom-8 w-[92%] border-t-[3px] border-b-[1px] border-[#1a1a1a] py-3 px-4 flex justify-between items-center z-40 bg-[#E3E3E3]/80 backdrop-blur-sm">
            
            {/* Left: Text */}
            <div className="flex flex-col">
                <span className="font-serif font-bold text-[#1a1a1a] text-xs md:text-lg tracking-widest uppercase">
                    SAQIB
                </span>
            </div>

            {/* Center: Generation Text */}
            <span className="font-serif font-light text-[#1a1a1a] text-[10px] md:text-base tracking-[0.2em] uppercase absolute left-1/2 -translate-x-1/2">
                GENERATION 242
            </span>
            
            {/* Right: Brand / Palette */}
            <div className="flex flex-col items-end gap-1">
                <span className="font-serif font-bold text-[#1a1a1a] text-xs md:text-lg tracking-widest uppercase">
                    SYAHER SAL
                </span>
                {/* Color Palette */}
                <div className="flex gap-1">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-[#5c7c9e]"></div>
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-[#e8a87c]"></div>
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-[#1a1a1a]"></div>
                </div>
            </div>
        </div>

        {/* Japanese Text (Decoration) */}
        <div className="absolute top-[25%] left-4 z-0 hidden md:block opacity-30 mix-blend-multiply">
             <div className="bg-[#1a1a1a] text-white p-2 font-black text-2xl writing-vertical-rl">
                キタ
             </div>
        </div>

      </div>
    </section>
  );
};

export default GitaStyleSection;