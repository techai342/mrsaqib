import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';

const SplitCreativeSection: React.FC = () => {
  // Using the requested image
  const displayImage = GALLERY_IMAGES[18].url; 

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
       <div className="relative w-full min-h-[800px] md:h-[1000px] flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-2xl group border border-white/10">
          
          {/* Left Side: Image (50% Width) */}
          <div className="w-full md:w-1/2 h-[500px] md:h-full relative overflow-hidden bg-black">
              <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={displayImage} 
                alt="Creative Portrait" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>

          {/* Right Side: Solid White Background (50% Width) */}
          <div className="w-full md:w-1/2 h-auto md:h-full bg-white relative hidden md:block">
              {/* Decorative vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200"></div>
          </div>

          {/* --- LAYER 1: OUTLINE Text (Visible ONLY over Left/Image Side) --- */}
          {/* Changes: Added text-transparent and WebkitTextStroke to make image visible through text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-none hidden md:flex"
               style={{ clipPath: 'polygon(0 0, 50.1% 0, 50.1% 100%, 0 100%)' }}>
              <div className="flex flex-col font-black tracking-tighter leading-[0.8] select-none text-transparent w-full px-4 md:px-0 md:pl-[10%]"
                   style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>
                  <motion.h2 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-[18vw] md:text-[10rem] lg:text-[12rem] uppercase"
                  >
                    BE
                  </motion.h2>
                  
                  <div className="flex flex-col">
                      <motion.h2 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[18vw] md:text-[10rem] lg:text-[12rem] uppercase ml-8 md:ml-24"
                      >
                        AWE
                      </motion.h2>
                      <motion.h2 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-[18vw] md:text-[10rem] lg:text-[12rem] uppercase"
                      >
                        SOME
                      </motion.h2>
                  </div>

                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="h-2 md:h-4 bg-white/50 my-4 md:my-8"
                  ></motion.div>

                  <div className="flex flex-col">
                     <motion.h2 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-[18vw] md:text-[10rem] lg:text-[12rem] uppercase ml-12 md:ml-32"
                     >
                        CO
                     </motion.h2>
                     <motion.h2 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-[18vw] md:text-[10rem] lg:text-[12rem] uppercase"
                     >
                        OL
                     </motion.h2>
                  </div>
              </div>
          </div>

          {/* --- LAYER 2: Background Text (Visible ONLY over Right/White Side) --- */}
          {/* This remains solid gray to serve as a backdrop for the bio */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none hidden md:flex"
               style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}>
              <div className="flex flex-col font-black tracking-tighter leading-[0.8] select-none text-[#f0f0f0] w-full px-4 md:px-0 md:pl-[10%]">
                  <motion.h2 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-[18vw] md:text-[10rem] lg:text-[12rem] uppercase"
                  >
                    BE
                  </motion.h2>
                  
                  <div className="flex flex-col">
                      <motion.h2 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[18vw] md:text-[10rem] lg:text-[12rem] uppercase ml-8 md:ml-24"
                      >
                        AWE
                      </motion.h2>
                      <motion.h2 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-[18vw] md:text-[10rem] lg:text-[12rem] uppercase"
                      >
                        SOME
                      </motion.h2>
                  </div>

                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="h-2 md:h-4 bg-[#f0f0f0] my-4 md:my-8"
                  ></motion.div>

                  <div className="flex flex-col">
                     <motion.h2 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-[18vw] md:text-[10rem] lg:text-[12rem] uppercase ml-12 md:ml-32"
                     >
                        CO
                     </motion.h2>
                     <motion.h2 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-[18vw] md:text-[10rem] lg:text-[12rem] uppercase"
                     >
                        OL
                     </motion.h2>
                  </div>
              </div>
          </div>
          
          {/* --- Right Side Paragraph (Overlays the gray text) --- */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:flex flex-col justify-end p-16 z-30">
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-white/90 backdrop-blur-md p-8 shadow-2xl rounded-2xl border-l-4 border-black max-w-lg mb-12 ml-auto"
              >
                  <h3 className="text-xl font-bold text-black uppercase tracking-widest mb-4 flex items-center gap-2">
                     <span className="w-2 h-2 bg-black rounded-full"></span>
                     About Saqib
                  </h3>
                  <p className="text-gray-800 text-base leading-relaxed font-medium mb-4">
                     "I am a visual storyteller passionate about crafting digital experiences that resonate. My journey is defined by a relentless pursuit of aesthetic perfection."
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     Blending modern design trends with timeless artistic principles. From intricate photo manipulations to high-energy video edits, every project is a new canvas for innovation. I don't just create content; I engineer emotions.
                  </p>
                  <div className="mt-6 flex justify-between items-end">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Est. 2018</div>
                      <div className="font-handwriting text-2xl text-black rotate-[-5deg]">Saqib V.</div>
                  </div>
              </motion.div>
          </div>

          {/* Mobile View Layout */}
          <div className="md:hidden p-8 bg-white text-black relative z-20">
             <div className="mb-8 relative">
                 <h1 className="text-[18vw] font-black leading-none text-black/5 absolute top-0 left-0 -translate-y-1/2">SAQIB</h1>
                 <h2 className="text-4xl font-bold relative z-10">BE AWESOME.</h2>
                 <p className="text-gray-600 mt-4 leading-relaxed">
                    I am Saqib, a visual storyteller passionate about crafting digital experiences that resonate. My journey is defined by a relentless pursuit of aesthetic perfection.
                 </p>
                 <button className="mt-6 px-6 py-2 bg-black text-white text-sm font-bold uppercase tracking-widest">
                    Read More
                 </button>
             </div>
             
             <div className="flex justify-end">
                <h2 className="text-4xl font-bold text-right">BE COOL.</h2>
             </div>
          </div>

       </div>
    </section>
  );
};

export default SplitCreativeSection;