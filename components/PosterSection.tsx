import React from 'react';
import { motion } from 'framer-motion';

const PosterSection: React.FC = () => {
  // Updated image URL as requested
  const posterImage = "https://i.ibb.co/6362DBS/Picsart-26-02-03-18-10-00-617.png"; 

  return (
    <section className="py-10 md:py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[900px] md:min-h-[800px] w-full bg-white text-[#333] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
      >
        
        {/* Left Side (White Background) */}
        <div className="w-full md:w-1/2 relative p-6 md:p-12 flex flex-col justify-start z-10 bg-white min-h-[400px] md:min-h-auto">
            
            {/* Top Left: Title/Logo */}
            <motion.div 
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="z-20 relative"
            >
                <h3 className="text-4xl font-black tracking-tighter leading-none">
                    SAQIB<br/>
                    <span className="text-[20px] font-normal tracking-widest">VISUALS</span>
                </h3>
            </motion.div>

            {/* Vertical Date Text (Desktop Only) */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute left-8 top-1/2 -translate-y-1/2 hidden md:block"
            >
                <p className="text-blue-400 font-bold tracking-widest text-sm -rotate-90 origin-left whitespace-nowrap">
                    ESTABLISHED IN 2018
                </p>
            </motion.div>

            {/* Large Name Typography (Behind Image Effect) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 mix-blend-multiply opacity-20 md:opacity-100 mt-10 md:mt-0">
                <motion.h1 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-[22vw] md:text-[12rem] font-black text-blue-300 leading-none md:-rotate-90"
                >
                    SAQIB
                </motion.h1>
            </div>

            {/* Color Palette (Hidden on Mobile for Space) */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="hidden md:flex flex-col gap-2 mt-auto z-20"
            >
                <div className="w-12 h-12 rounded-full bg-blue-300"></div>
                <div className="w-12 h-12 rounded-full bg-blue-500"></div>
                <div className="w-12 h-12 rounded-full bg-blue-700"></div>
                <div className="w-12 h-12 rounded-full bg-[#001E36]"></div>
            </motion.div>
        </div>

        {/* Right Side (Blue Background) */}
        <div className="w-full md:w-1/2 relative bg-[#60A5FA] p-6 md:p-12 flex flex-col items-end text-right overflow-hidden min-h-[500px] md:min-h-auto justify-between md:justify-start">
            
            {/* Top Right: Red Accent Title */}
            <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative z-20"
            >
                <h2 className="text-5xl md:text-7xl font-black text-[#FF4D4D] tracking-tighter drop-shadow-lg">
                    LEGEND
                </h2>
            </motion.div>

            {/* Quote Text */}
            <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 max-w-sm relative z-20 hidden md:block"
            >
                <p className="text-[#001E36] font-medium text-sm md:text-base leading-relaxed">
                    "Visual storyteller crafting digital realities. Illuminating hearts with every pixel, bringing imagination to life."
                </p>
            </motion.div>

             {/* Vertical Large Text Right Side (Desktop) */}
             <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden md:block pointer-events-none">
                 <motion.h2 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-[8rem] font-black text-white leading-none writing-vertical-rl"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    VISUALS
                </motion.h2>
             </div>
             
             {/* Mobile Version of Large Text */}
             <div className="md:hidden relative z-20 mt-auto w-full">
                 <h2 className="text-[18vw] font-black text-white/40 leading-none text-center mix-blend-overlay">
                    VISUALS
                 </h2>
             </div>

             {/* Small Details Bottom Right */}
             <div className="md:absolute md:bottom-12 md:right-12 z-20 mt-4">
                 <p className="font-handwriting text-white text-2xl rotate-[-5deg]">@mr_saqib242</p>
             </div>
        </div>

        {/* Central Image Overlapping Both Sides */}
        <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 100 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            // Added floating animation (y: [0, -15, 0]) to make it feel alive
            animate={{ y: [0, -15, 0] }}
            transition={{ 
                // Entrance transition
                scale: { duration: 0.8, delay: 0.2, type: "spring" },
                opacity: { duration: 0.8, delay: 0.2 },
                // Loop animation for floating
                y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 } 
            }}
            // FIXED: Used bottom-0 for mobile as well to prevent cutting off the feet. Adjusted height.
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[75%] md:h-[85%] z-30 w-auto flex items-end"
        >
            <img 
                src={posterImage} 
                alt="Saqib Poster" 
                // FIXED: object-contain to ensure full image visibility
                className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                // REMOVED: Mask image that was fading the bottom
            />
        </motion.div>

        {/* Decorative Paper Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/crinkled-paper.png")' }}></div>

      </motion.div>
    </section>
  );
};

export default PosterSection;