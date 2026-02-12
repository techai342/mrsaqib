import React from 'react';
import { motion } from 'framer-motion';

const WalkAloneSection: React.FC = () => {
  const bgImage = "https://i.ibb.co/6RC0wcmY/1770197681628.png";

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
       <div className="relative w-full h-[800px] md:h-[1000px] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-900 border border-white/10 group">
          
          {/* Background Image with Overlay to darken/blur original text */}
          <div className="absolute inset-0">
              <img 
                src={bgImage} 
                alt="Walk Alone Background" 
                className="w-full h-full object-cover grayscale opacity-60" 
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              
              {/* Main Text Block */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 bg-white/5 backdrop-blur-md p-8 md:p-16 rounded-3xl border border-white/10 shadow-2xl max-w-3xl transform transition-transform hover:scale-105 duration-700"
              >
                  {/* Decorative corner markers */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/50"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/50"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/50"></div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-widest uppercase opacity-80">Learn to</h3>
                  <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-8 drop-shadow-lg">
                    WALK<br/>ALONE
                  </h1>
                  
                  <div className="w-20 h-1 bg-white mx-auto mb-8 rounded-full"></div>

                  <p className="text-xl md:text-2xl text-gray-200 font-medium tracking-wide leading-relaxed font-display">
                    Everyone may not be<br/>Always with you.
                  </p>
              </motion.div>

              {/* Animated Circular Text - Left Side (Simulating Shoe Position) */}
              <div className="absolute bottom-[10%] left-[5%] md:left-[20%] pointer-events-none opacity-60 mix-blend-overlay">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-40 h-40 md:w-56 md:h-56"
                  >
                     <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        <path id="curveLeft" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text className="text-[10px] font-bold fill-white uppercase tracking-widest">
                            <textPath xlinkHref="#curveLeft" startOffset="0%">
                                walk alone • walk alone • walk alone • 
                            </textPath>
                        </text>
                     </svg>
                  </motion.div>
              </div>

              {/* Animated Circular Text - Right Side */}
               <div className="absolute bottom-[15%] right-[5%] md:right-[20%] pointer-events-none opacity-60 mix-blend-overlay">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-40 h-40 md:w-56 md:h-56"
                  >
                     <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        <path id="curveRight" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text className="text-[10px] font-bold fill-white uppercase tracking-widest">
                            <textPath xlinkHref="#curveRight" startOffset="0%">
                                walk alone • walk alone • walk alone • 
                            </textPath>
                        </text>
                     </svg>
                  </motion.div>
              </div>

          </div>
       </div>
    </section>
  );
};

export default WalkAloneSection;