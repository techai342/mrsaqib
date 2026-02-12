import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';

const NeonPartySection: React.FC = () => {
  // Updated image as requested
  const image = "https://i.ibb.co/ZqjXCqM/Picsart-26-02-03-20-04-14-762.png"; 

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="relative w-full min-h-[900px] bg-[#120524] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col relative group">

            {/* --- Animated Background Gradient (Subtle) --- */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#120524] via-[#2a0a4a] to-black opacity-80"></div>

            {/* --- Top Left Presents Text --- */}
            <div className="absolute top-10 left-8 z-30">
                 <p className="font-handwriting text-white/80 text-xl md:text-2xl -rotate-2">
                    Saqib Visuals Presents
                 </p>
            </div>

            {/* --- Background Repeated Text --- */}
            <div className="absolute top-24 left-4 md:left-20 z-10 flex flex-col leading-[0.8] select-none opacity-20 pointer-events-none mix-blend-overlay">
                {["SAQIB", "SAQIB", "SAQIB"].map((text, i) => (
                    <motion.h1 
                        key={i} 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-[25vw] md:text-[14rem] font-black text-transparent italic"
                        style={{ WebkitTextStroke: '2px #fff' }}
                    >
                        {text}
                    </motion.h1>
                ))}
            </div>

            {/* --- Central Image with RGB Bodyline Glow --- */}
            <div className="absolute top-[10%] md:top-0 left-1/2 -translate-x-1/2 z-20 h-[70%] md:h-[90%] w-full flex justify-center items-end">
                {/* Back RGB Glow blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-gradient-to-r from-red-600 via-green-600 to-blue-600 blur-[100px] opacity-60 animate-pulse"></div>
                
                {/* Image with RGB Drop Shadow Animation */}
                <motion.img
                    src={image}
                    alt="Saqib Party Style"
                    initial={{ opacity: 0 }} // Removed scale: 0.9 to stop zoom animation
                    whileInView={{ opacity: 1 }} // Removed scale: 1
                    animate={{
                        filter: [
                            "drop-shadow(0 0 10px rgba(255, 0, 0, 0.8)) brightness(1.1)",
                            "drop-shadow(0 0 10px rgba(0, 255, 0, 0.8)) brightness(1.1)",
                            "drop-shadow(0 0 10px rgba(0, 0, 255, 0.8)) brightness(1.1)",
                            "drop-shadow(0 0 10px rgba(255, 0, 0, 0.8)) brightness(1.1)"
                        ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="h-full w-auto object-contain z-20"
                />
            </div>

            {/* --- Cursive Neon Text Overlay --- */}
            <div className="absolute top-[55%] md:top-[60%] left-1/2 -translate-x-1/2 z-30 w-full text-center pointer-events-none">
                 <motion.h2 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="font-handwriting text-7xl md:text-9xl text-white -rotate-[10deg] drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]"
                 >
                    Visual Artist
                 </motion.h2>
            </div>

            {/* --- Date (Left Side) --- */}
            <div className="absolute bottom-[28%] left-6 md:left-12 z-30">
                 <div className="flex flex-col leading-none">
                    <span className="text-6xl md:text-8xl font-black text-[#bc13fe] drop-shadow-lg">26</span>
                    <span className="text-4xl md:text-5xl font-bold text-white uppercase bg-black/20 backdrop-blur-sm px-2">FEB</span>
                 </div>
            </div>

            {/* --- Torn Paper Divider --- */}
            <div className="absolute bottom-0 left-0 w-full h-[25%] bg-[#6a0dad] z-20 flex items-center overflow-hidden">
                {/* Torn Edge Top */}
                <div className="absolute top-[-20px] left-0 w-full h-[40px] bg-[#6a0dad]"
                     style={{ 
                        clipPath: 'polygon(0% 50%, 5% 100%, 10% 50%, 15% 100%, 20% 50%, 25% 100%, 30% 50%, 35% 100%, 40% 50%, 45% 100%, 50% 50%, 55% 100%, 60% 50%, 65% 100%, 70% 50%, 75% 100%, 80% 50%, 85% 100%, 90% 50%, 95% 100%, 100% 50%, 100% 100%, 0% 100%)',
                        transform: 'scaleY(-1)'
                     }}>
                     <div className="absolute top-[-5px] left-0 w-full h-[5px] bg-white opacity-50"></div>
                </div>

                {/* Content Inside Purple Area */}
                <div className="w-full h-full bg-gradient-to-r from-[#4a0072] to-[#120524] px-8 flex justify-between items-center relative">
                    
                    {/* Abstract Lines */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }}></div>

                    {/* Services List (Right Side) */}
                    <div className="ml-auto flex flex-col items-end z-10">
                        <div className="flex items-center gap-2 mb-2">
                             <span className="h-[2px] w-12 bg-white"></span>
                             <h3 className="text-2xl font-black text-white italic uppercase">The Skills</h3>
                        </div>
                        <ul className="text-right space-y-1">
                            <li className="text-white font-bold text-lg md:text-xl tracking-wider hover:text-[#00ff00] transition-colors cursor-default">VIDEO EDITING</li>
                            <li className="text-white font-bold text-lg md:text-xl tracking-wider hover:text-[#00ff00] transition-colors cursor-default">GRAPHIC DESIGN</li>
                            <li className="text-white/70 font-bold text-base md:text-lg tracking-wider">CREATIVE DIRECTION</li>
                            <li className="text-white/70 font-bold text-base md:text-lg tracking-wider">WEB DEVELOPMENT</li>
                        </ul>
                         <div className="mt-4 bg-white text-black px-6 py-2 font-black italic transform -skew-x-12 hover:scale-110 transition-transform cursor-pointer">
                            ORDER NOW
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Floating Particles --- */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 2 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>

        </div>
    </section>
  );
};

export default NeonPartySection;