import React from 'react';
import { motion } from 'framer-motion';

const RevoStyleSection: React.FC = () => {
  const mainImage = "https://i.ibb.co/LXM5DcwF/Picsart-26-02-03-19-14-08-351.png";

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative w-full h-[850px] md:h-[1100px] bg-[#9ca3af] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col items-center border-[8px] border-white/20 group">
        
        {/* Date at Top */}
        <div className="absolute top-10 z-30">
            <h3 className="text-white font-mono font-bold text-xl tracking-[0.5em] drop-shadow-md">06 . 06 . 2026</h3>
        </div>

        {/* Text Layer - Behind */}
        {/* Flex container to distribute 'LEGEND' across the width */}
        <div className="absolute inset-0 z-10 flex items-start justify-between px-4 md:px-24 pt-32 pointer-events-none">
             {['L','E','G','E','N','D'].map((char, i) => (
                 <motion.div 
                    key={i}
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex justify-center flex-1"
                 >
                     <span 
                        className="text-[#FFEA00] font-black text-[17vw] md:text-[15rem] leading-none transform scale-y-[5] md:scale-y-[6] origin-top drop-shadow-xl"
                        style={{ fontFamily: 'Impact, sans-serif, system-ui' }}
                     >
                        {char}
                     </span>
                 </motion.div>
             ))}
        </div>
        
        {/* Main Image Layer */}
        <div className="absolute bottom-0 z-20 h-[80%] md:h-[85%] w-full flex items-end justify-center">
             <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                src={mainImage}
                alt="Saqib Legend"
                className="h-full w-auto object-contain grayscale brightness-110 contrast-125 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
             />
        </div>

        {/* Bottom Text Layer */}
        <div className="absolute bottom-12 z-30 text-center max-w-3xl px-6">
             <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
             >
                 <p className="text-white font-bold text-[10px] md:text-sm tracking-widest uppercase leading-loose drop-shadow-lg">
                    "HAPPY GRADUATION AND CONGRATULATIONS<br/>
                    ON CONTINUING YOUR JOURNEY ELSEWHERE.<br/>
                    WE WILL ALWAYS SUPPORT YOU."
                 </p>
             </motion.div>
        </div>

        {/* Overlay Gradient for depth at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-20"></div>
        
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-40 mix-blend-overlay bg-black"></div>

      </div>
    </section>
  );
};

export default RevoStyleSection;