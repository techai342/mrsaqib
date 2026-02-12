import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';

const LaunchpadSection: React.FC = () => {
  // Use a selection of images for the wheel
  const wheelImages = [
    GALLERY_IMAGES[0].url,
    GALLERY_IMAGES[5].url,
    GALLERY_IMAGES[10].url,
    GALLERY_IMAGES[15].url,
    GALLERY_IMAGES[20].url,
    GALLERY_IMAGES[25].url,
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="relative w-full h-[800px] md:h-[1000px] bg-[#EBEBEB] text-[#1a1a1a] rounded-[2rem] overflow-hidden shadow-2xl flex relative">
        
        {/* Subtle Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cardboard.png")' }}></div>

        {/* --- LEFT SIDE: Typography Content --- */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end md:justify-center p-8 md:p-16 pointer-events-none">
            
            <div className="md:w-1/2 mt-auto md:mt-0 relative">
                 <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                 >
                    <p className="text-sm md:text-base font-bold tracking-[0.2em] text-gray-500 mb-4 uppercase">
                        Six Premium Styles
                    </p>
                    <p className="text-sm md:text-lg font-medium text-gray-800 mb-8 uppercase tracking-widest leading-relaxed">
                        From One Unique Perspective:
                    </p>

                    <div className="space-y-3 mb-12">
                        {['VISUAL EDITING', 'GRAPHIC DESIGN', 'MOTION GFX', 'WEB DESIGN', 'TYPOGRAPHY', 'COLOR GRADING'].map((skill, i) => (
                            <motion.p 
                                key={i}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-xl md:text-3xl font-black text-[#1a1a1a] tracking-tight hover:text-blue-600 transition-colors cursor-default"
                            >
                                {skill}
                            </motion.p>
                        ))}
                    </div>

                    <div className="relative inline-block">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-[#1a1a1a]">
                            SAQIB<br/>
                            <span className="text-4xl md:text-6xl font-light">LAUNCHPAD</span>
                        </h1>
                        <div className="h-1 w-1/2 bg-black mt-4"></div>
                        <p className="text-[10px] md:text-xs font-bold mt-2 uppercase tracking-widest">
                            Original Visual Collection
                        </p>
                    </div>
                 </motion.div>
            </div>
            
            {/* Disney+ style logo replacement */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 flex flex-col items-center md:items-start">
                <div className="h-8 md:h-12 w-24 bg-black rounded-full flex items-center justify-center text-white font-bold italic tracking-tighter">
                    Saqib+
                </div>
                <p className="text-[10px] text-gray-500 mt-2 font-medium">Streaming Creativity Daily</p>
            </div>
        </div>


        {/* --- RIGHT SIDE: Rotating Wheel of Images --- */}
        {/* The wheel is positioned mostly off-screen to the top-right to create the arc effect */}
        <div className="absolute -top-[20%] -right-[50%] md:-top-[30%] md:-right-[20%] w-[150%] md:w-[120%] aspect-square z-0">
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="relative w-full h-full rounded-full border-[20px] border-white shadow-2xl bg-white overflow-hidden"
            >
                {/* Central Hub (hides the center of the slices) */}
                <div className="absolute inset-[30%] bg-[#EBEBEB] rounded-full z-20 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] border-[12px] border-white flex items-center justify-center overflow-hidden">
                    
                    {/* Rotating Geometric Turbine Design */}
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="w-[80%] h-[80%] opacity-20"
                    >
                         <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                             {/* Concentric Dashed Circles */}
                             <circle cx="50" cy="50" r="48" fill="none" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
                             <circle cx="50" cy="50" r="40" fill="none" stroke="black" strokeWidth="1" />
                             
                             {/* Turbine Blades */}
                             {[...Array(12)].map((_, i) => (
                                <path 
                                    key={i} 
                                    d="M50 50 L50 10 A40 40 0 0 1 70 15 Z" 
                                    transform={`rotate(${i * 30} 50 50)`} 
                                    opacity="0.8"
                                />
                             ))}

                             {/* Center Decoration */}
                             <circle cx="50" cy="50" r="15" fill="none" stroke="black" strokeWidth="2" />
                             <circle cx="50" cy="50" r="5" fill="black" />
                         </svg>
                    </motion.div>

                    {/* Static Center Indicator */}
                    <div className="absolute w-4 h-4 bg-red-500 rounded-full shadow-lg z-30 ring-4 ring-white"></div>
                </div>

                {/* Image Slices */}
                {wheelImages.map((img, index) => {
                    const angleStep = 360 / wheelImages.length;
                    const rotation = index * angleStep;
                    
                    return (
                        <div 
                            key={index}
                            className="absolute top-0 left-1/2 w-[50%] h-[50%] origin-bottom-left z-10"
                            style={{ 
                                transform: `rotate(${rotation}deg) skewY(-30deg)`, // skew helps fill gaps in a simple CSS circle
                                overflow: 'hidden',
                                transformOrigin: 'bottom left'
                            }}
                        >
                            <div 
                                className="w-[200%] h-[200%] absolute -left-[100%] top-0"
                                style={{ 
                                    transform: `skewY(30deg) rotate(${angleStep / 2}deg)`,
                                    overflow: 'hidden'
                                }}
                            >
                                <img 
                                    src={img} 
                                    alt={`Slice ${index}`} 
                                    className="w-[60%] h-[60%] object-cover absolute top-[25%] left-[25%] rounded-xl shadow-lg"
                                    style={{ transform: `rotate(${-rotation - (angleStep/2)}deg)` }} // Counter-rotate image to keep it upright-ish relative to view
                                />
                            </div>
                        </div>
                    );
                })}

                {/* Decorative Rings */}
                <div className="absolute inset-[28%] border-[2px] border-dashed border-gray-400 rounded-full z-20 animate-spin-slow" style={{ animationDuration: '40s', animationDirection: 'reverse' }}></div>
                
            </motion.div>
        </div>

        {/* --- CURVED DIVIDER (The White Arc Shape) --- */}
        {/* This creates the clean separation curve seen in the poster */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 overflow-hidden">
             <div className="absolute -top-[10%] -right-[40%] md:-right-[10%] w-[120%] h-[120%] rounded-[100%] border-[50px] md:border-[100px] border-white/50 blur-3xl opacity-50"></div>
        </div>

      </div>
    </section>
  );
};

export default LaunchpadSection;