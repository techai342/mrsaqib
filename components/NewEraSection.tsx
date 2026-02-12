import React from 'react';
import { motion } from 'framer-motion';

const NewEraSection: React.FC = () => {
  const imageUrl = "https://i.ibb.co/7d4TkVzc/Picsart-26-02-03-17-20-49-543.png";

  // Marquee component for the scrolling text
  const MarqueeBar = ({ text, direction = "left", className = "", style = {} }: { text: string, direction?: "left" | "right", className?: string, style?: any }) => {
    return (
      <div className={`absolute left-0 right-0 overflow-hidden py-2 md:py-3 flex items-center shadow-lg border-y-2 border-white/20 z-30 ${className}`} style={style}>
        <motion.div 
          initial={{ x: direction === "left" ? 0 : "-50%" }}
          animate={{ x: direction === "left" ? "-50%" : 0 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-8"
        >
          {[...Array(10)].map((_, i) => (
             <span key={i} className="flex items-center gap-4 text-white font-black italic tracking-wider text-sm md:text-xl uppercase">
                {text} <span className="w-2 h-2 rounded-full bg-white"></span>
             </span>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="relative w-full min-h-[900px] md:h-[1100px] bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative group">
        
        {/* --- LEFT SIDE (White/Grey) --- */}
        <div className="w-full md:w-[40%] bg-gray-100 relative p-8 md:p-12 flex flex-col z-10">
            {/* Top Branding */}
            <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">✶</span>
                <h3 className="text-2xl font-bold tracking-tighter text-black">SAQIB 242</h3>
            </div>

            {/* Main Title Block - Stylish Animation */}
            <div className="mt-4 relative z-20">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.2
                      }
                    }
                  }}
                >
                    <motion.h2 
                        variants={{
                            hidden: { x: -50, opacity: 0 },
                            visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
                        }}
                        className="text-6xl md:text-8xl font-black text-[#FF005C] leading-[0.85] tracking-tighter"
                    >
                        SAQIB
                    </motion.h2>
                    
                    <motion.div 
                        variants={{
                            hidden: { scale: 0.8, opacity: 0, rotate: -5 },
                            visible: { scale: 1, opacity: 1, rotate: 0, transition: { type: "spring", bounce: 0.5 } }
                        }}
                        className="inline-block relative"
                    >
                        <span className="text-6xl md:text-8xl font-black text-black italic leading-[0.85] tracking-tighter relative z-10">
                            PRO
                        </span>
                        {/* Stylish underline decoration */}
                        <motion.span 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute bottom-1 left-0 h-3 bg-[#FF005C]/20 z-0"
                        />
                    </motion.div>
                </motion.div>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-sm font-mono tracking-[0.3em] text-gray-500 mt-4 uppercase"
                >
                    New Era Editor
                </motion.p>
            </div>

            {/* Quote / Description */}
            <div className="mt-12 md:mt-24 max-w-xs relative">
                <span className="text-6xl text-[#FF005C] font-serif absolute -top-8 -left-4">”</span>
                <p className="font-medium text-gray-800 leading-relaxed text-sm md:text-base relative z-10">
                    Seorang editor visual yang mengubah imajinasi menjadi realitas. Terangi harimu dengan karya seni digital yang premium. Halo, aku Saqib!
                </p>
            </div>

            {/* Gen Badge */}
            <div className="mt-auto pt-10">
                <p className="text-4xl font-black text-black">10.25</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-gray-500">GEN</span>
                    <span className="text-8xl font-black text-[#FF005C] leading-none">Z</span>
                </div>
            </div>
        </div>

        {/* --- RIGHT SIDE (Magenta/Pattern) --- */}
        <div className="absolute top-0 right-0 w-full md:w-[65%] h-full bg-[#E91E63] overflow-hidden z-0">
            
            {/* Sunburst Effect (CSS Gradient) */}
            <div className="absolute inset-0 opacity-30" 
                 style={{
                    background: `
                        repeating-conic-gradient(
                            from 0deg,
                            transparent 0deg 10deg,
                            #9C0F48 10deg 20deg
                        )
                    `
                 }}>
            </div>
            
            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#E91E63] via-transparent to-[#E91E63]/50"></div>

            {/* Large Japanese Vertical Text */}
            <div className="absolute top-10 right-6 md:right-12 z-0 writing-vertical-rl text-white font-black text-[15vw] md:text-[8rem] opacity-30 md:opacity-100 leading-none select-none mix-blend-overlay">
                サキブ
            </div>
            <div className="absolute top-10 right-24 md:right-32 z-0 writing-vertical-rl text-white font-black text-[8vw] md:text-[4rem] opacity-30 md:opacity-100 leading-none select-none mix-blend-overlay mt-24">
                ビジュアル
            </div>
        </div>

        {/* --- DIAGONAL TAPE BARS (The "Tap Bars") --- */}

        {/* Bar 2: Higher angled (Black) - BEHIND IMAGE (z-10) */}
        {/* Changed z-index from 30 to 10 to put it behind the image (z-20) but above background (z-0/10) */}
        <div className="absolute bottom-[25%] md:bottom-[35%] -left-10 -right-10 z-10 transform rotate-2 md:rotate-3 hover:rotate-0 transition-transform duration-500">
             <MarqueeBar 
                text="PREMIUM EDITS • HIGH QUALITY • NEXT LEVEL •" 
                direction="right"
                className="bg-black text-white" 
             />
        </div>

        {/* --- CENTRAL IMAGE --- */}
        <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 md:translate-x-[-10%] z-20 h-[60%] md:h-[90%] w-auto flex items-end"
        >
            <img 
                src={imageUrl} 
                alt="Saqib New Era" 
                className="h-full w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
        </motion.div>
        
        {/* Bar 1: Lower angled (Pink) - IN FRONT OF IMAGE (z-30) */}
        <div className="absolute bottom-[15%] md:bottom-[20%] -left-10 -right-10 z-30 transform -rotate-6 md:-rotate-3 hover:rotate-0 transition-transform duration-500">
             <MarqueeBar 
                text="SAQIB PRO • VISUAL MASTER • CREATIVE DIRECTOR •" 
                className="bg-[#FF005C] text-white" 
             />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 left-[42%] w-3 h-3 bg-black rounded-full z-40 hidden md:block"></div>
        <div className="absolute top-4 left-[44%] w-3 h-3 bg-black rounded-full z-40 hidden md:block"></div>

      </div>
    </section>
  );
};

export default NewEraSection;