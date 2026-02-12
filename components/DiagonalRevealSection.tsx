import React from 'react';
import { motion } from 'framer-motion';

const DiagonalRevealSection: React.FC = () => {
  const mainImage = "https://ik.imagekit.io/shaban/SHABAN-1768575235727_gOIsiMEMW.jpg";

  return (
    <section className="py-20 px-0 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="relative w-full h-[800px] md:h-[1000px] bg-white md:rounded-[2rem] overflow-hidden shadow-2xl flex justify-center items-center">
        
        {/* --- CENTRAL MAIN IMAGE (Always Visible) --- */}
        <div className="absolute inset-0 w-full h-full">
            <img 
                src={mainImage} 
                alt="Main Center" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
            />
        </div>

        {/* --- LEFT SHUTTER PANEL --- */}
        <motion.div 
            initial={{ x: '-100%' }}
            whileInView={{ x: '0%' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} 
            className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none bg-[#F5F5F5]"
            style={{ 
                // Changed direction to \ slope and made narrower to widen the opening
                clipPath: 'polygon(0 0, 35% 0, 55% 100%, 0% 100%)', 
            }}
        >
            {/* Faint Ghost Image Background */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply">
                 <img 
                    src={mainImage} 
                    alt="Ghost BG Left" 
                    className="w-full h-full object-cover"
                 />
            </div>

            {/* Geometric Decoration - Triangle Logo */}
            {/* Moved to left side to be visible */}
            <div className="absolute top-[25%] left-[8%] w-16 h-16 md:w-24 md:h-24 opacity-80">
                 <svg viewBox="0 0 100 100" className="w-full h-full fill-[#333]">
                    <path d="M10,30 L60,30 L35,80 Z" />
                    <rect x="50" y="20" width="30" height="10" />
                    <rect x="65" y="40" width="10" height="10" transform="rotate(45 70 45)" />
                 </svg>
            </div>

            {/* Japanese Text */}
            {/* Moved to left side */}
            <div className="absolute top-[35%] left-[10%] md:left-[12%]">
                <h2 className="text-4xl md:text-6xl font-black text-[#333] tracking-tighter" style={{ writingMode: 'vertical-rl' }}>
                    ジー
                </h2>
                <div className="w-0 h-16 border-l-2 border-[#333] mt-4 mx-auto rotate-45"></div>
            </div>

            {/* Floating Triangles */}
            <div className="absolute bottom-[20%] left-[5%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-[#333] rotate-12 opacity-60"></div>

        </motion.div>

        {/* --- RIGHT SHUTTER PANEL --- */}
        <motion.div 
            initial={{ x: '100%' }}
            whileInView={{ x: '0%' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 right-0 w-full h-full z-10 pointer-events-none bg-[#F5F5F5]"
            style={{ 
                // Changed direction to \ slope and made narrower
                // Starts at 65% top, 85% bottom -> Leaves a large diagonal gap
                clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 85% 100%)', 
            }}
        >
            {/* Faint Ghost Image Background */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply">
                 <img 
                    src={mainImage} 
                    alt="Ghost BG Right" 
                    className="w-full h-full object-cover"
                 />
            </div>

            {/* Text Content */}
            {/* Moved to right side to be visible */}
            <div className="absolute bottom-[30%] right-[5%] md:right-[8%] flex flex-col gap-2 items-end text-right">
                <motion.h2 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-5xl md:text-7xl font-black text-[#333] leading-none tracking-tight"
                >
                    Saqib<br/>
                    <span className="flex items-center justify-end gap-2">
                        Visuals
                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#333] rotate-[-45deg]"><path d="M2 20 L22 2 L22 20 Z" /></svg>
                    </span>
                    <span className="text-6xl text-[#333] leading-none">.</span>
                </motion.h2>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-gray-500 font-sans font-medium text-sm md:text-lg tracking-wide mt-2"
                >
                    7th generation CREATOR
                </motion.p>
            </div>

             {/* Squares Decoration */}
             <div className="absolute bottom-[15%] right-[15%] flex gap-2">
                 <div className="w-4 h-4 bg-[#333]"></div>
                 <div className="w-4 h-4 bg-[#333] opacity-50"></div>
             </div>

             <div className="absolute top-[20%] right-[5%] w-3 h-3 bg-[#333] rotate-45"></div>
             
             {/* Logo Box Bottom Right */}
             <div className="absolute bottom-8 right-8 w-16 h-16 bg-black flex items-center justify-center">
                 <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
                    <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
                 </svg>
             </div>

        </motion.div>

        {/* --- Center "Cut" Overlay to enhance depth --- */}
        <div className="absolute inset-0 pointer-events-none z-20">
        </div>

      </div>
    </section>
  );
};

export default DiagonalRevealSection;