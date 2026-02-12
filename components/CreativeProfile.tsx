import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_IMAGE } from '../constants';

const CreativeProfile: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[700px] w-full bg-[#E5E5E5] text-black rounded-[2rem] overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl"
      >
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#999 1px, transparent 1px), linear-gradient(90deg, #999 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        {/* Large Background Stroke Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[30vw] md:text-[20vw] font-black text-transparent leading-none opacity-20"
                  style={{ WebkitTextStroke: '2px #000' }}>
                COOL
            </span>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            
            {/* Top Left Text */}
            <div className="absolute top-8 left-6 md:top-16 md:left-16 z-30">
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-black leading-[0.9] tracking-tighter">
                        SAQIB<br/>
                        MANUEL
                    </h2>
                    <p className="font-handwriting text-2xl md:text-3xl text-black mt-2 -rotate-3">
                       Selamatku full terus
                    </p>
                    <p className="text-sm font-bold font-mono text-black/60 mt-1 tracking-widest uppercase">
                       gas gas gas saqib
                    </p>
                </motion.div>
            </div>

            {/* Central Sliced Image Composition */}
            <div className="relative w-[300px] md:w-[400px] h-[450px] md:h-[600px] group mx-auto mt-10 md:mt-0">
                
                {/* Decorative Element Behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-500/20 -skew-x-12 rounded-full blur-3xl"></div>

                {/* SLICE 1 (Top) */}
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat drop-shadow-2xl transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"
                    style={{ 
                        backgroundImage: `url(${PROFILE_IMAGE})`,
                        clipPath: 'polygon(0 0, 100% 0, 100% 18%, 0 30%)',
                    }}
                />

                {/* SLICE 2 */}
                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat drop-shadow-2xl transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-1 grayscale hover:grayscale-0"
                    style={{ 
                        backgroundImage: `url(${PROFILE_IMAGE})`,
                        clipPath: 'polygon(0 32%, 100% 20%, 100% 40%, 0 52%)',
                    }}
                />

                {/* SLICE 3 */}
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat drop-shadow-2xl transition-transform duration-500 group-hover:-translate-x-3 group-hover:scale-105"
                    style={{ 
                        backgroundImage: `url(${PROFILE_IMAGE})`,
                        clipPath: 'polygon(0 54%, 100% 42%, 100% 62%, 0 74%)',
                    }}
                />
                
                 {/* SLICE 4 (Bottom) */}
                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat drop-shadow-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1"
                    style={{ 
                        backgroundImage: `url(${PROFILE_IMAGE})`,
                        clipPath: 'polygon(0 76%, 100% 64%, 100% 100%, 0 100%)',
                    }}
                />
            </div>

            {/* Bottom Right Text */}
            <div className="absolute bottom-8 right-6 md:bottom-12 md:right-16 z-30 text-right">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="text-xl md:text-2xl font-bold text-blue-600 font-sans tracking-wide">
                        ランキング
                    </div>
                </motion.div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CreativeProfile;