import React from 'react';
import { motion } from 'framer-motion';

const CloneRevealSection: React.FC = () => {
  const imageUrl = "https://i.ibb.co/bMZrbYtC/Picsart-26-02-04-14-09-03-788.png";

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="relative w-full h-[800px] md:h-[1000px] bg-[#0a0a0a] rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center border border-white/10 group">
        
        {/* Animated Background Handwriting Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 select-none opacity-20">
             <motion.h1 
                initial={{ scale: 0.8, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.5 }}
                className="font-handwriting text-[12vw] text-white leading-none text-center whitespace-nowrap mix-blend-overlay"
             >
                MrSaqib
             </motion.h1>
             <motion.h1 
                initial={{ scale: 0.8, rotate: 5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.5 }}
                className="font-handwriting text-[12vw] text-white leading-none text-center whitespace-nowrap mix-blend-overlay"
             >
                242
             </motion.h1>
        </div>

        {/* Clones and Main Image Container */}
        <div className="relative w-full h-full flex items-end justify-center z-10">
            
            {/* Left Clone (Grayscale, moves left) */}
            <motion.div
                initial={{ x: 0, opacity: 0, scale: 0.9 }}
                whileInView={{ x: -250, opacity: 0.4, scale: 0.9 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute bottom-0 z-10 hidden md:block origin-bottom"
            >
                 <img 
                    src={imageUrl} 
                    alt="Clone Left" 
                    className="h-[75vh] w-auto object-contain grayscale brightness-50"
                 />
            </motion.div>

             {/* Right Clone (Grayscale, moves right) */}
            <motion.div
                initial={{ x: 0, opacity: 0, scale: 0.9 }}
                whileInView={{ x: 250, opacity: 0.4, scale: 0.9 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute bottom-0 z-10 hidden md:block origin-bottom"
            >
                 <img 
                    src={imageUrl} 
                    alt="Clone Right" 
                    className="h-[75vh] w-auto object-contain grayscale brightness-50"
                 />
            </motion.div>
            
            {/* Mobile Clones (Smaller displacement) */}
             <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: -80, opacity: 0.3 }}
                transition={{ duration: 1.2 }}
                className="absolute bottom-0 z-10 md:hidden"
            >
                 <img src={imageUrl} className="h-[55vh] w-auto object-contain grayscale brightness-50" />
            </motion.div>
             <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: 80, opacity: 0.3 }}
                transition={{ duration: 1.2 }}
                className="absolute bottom-0 z-10 md:hidden"
            >
                 <img src={imageUrl} className="h-[55vh] w-auto object-contain grayscale brightness-50" />
            </motion.div>


            {/* Main Center Image (With White Body Line/Outline) */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-20 flex items-end"
                style={{
                    // Creating the white body line using multiple drop-shadows
                    filter: "drop-shadow(0 0 2px #fff) drop-shadow(0 0 5px #fff)"
                }}
            >
                 <img 
                    src={imageUrl} 
                    alt="Main Saqib" 
                    className="h-[55vh] md:h-[80vh] w-auto object-contain"
                 />
            </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CloneRevealSection;