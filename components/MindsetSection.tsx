import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Pin } from 'lucide-react';
import { QR_IMAGE } from '../constants';

const MindsetSection: React.FC = () => {
  const mainImage = "https://i.ibb.co/SwyfqKgQ/Picsart-26-02-04-17-04-25-116.png";

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl flex flex-col font-sans">
        
        {/* --- TOP DARK SECTION --- */}
        <div className="relative w-full h-[800px] md:h-[1000px] bg-[#1a1a1a] overflow-hidden flex flex-col items-center pt-16">
            
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-0" 
                 style={{ 
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")',
                    backgroundSize: '100px 100px'
                 }}>
            </div>

            {/* Top Label */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative z-10 mb-2"
            >
                <p className="text-gray-400 font-bold tracking-[0.3em] text-xs md:text-sm uppercase">
                    MINDSET IS
                </p>
            </motion.div>

            {/* "EVERY" Text - Behind Image */}
            <div className="absolute top-[8%] md:top-[12%] w-full text-center z-0">
                <motion.h1 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-[28vw] md:text-[22rem] font-black text-[#e0e0e0] leading-none tracking-tighter scale-y-110"
                >
                    EVERY
                </motion.h1>
            </div>

            {/* Main Image */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 z-10 w-full flex justify-center h-[75%] md:h-[85%]"
            >
                 <img 
                    src={mainImage} 
                    alt="Saqib Mindset" 
                    className="h-full w-auto object-contain"
                 />
            </motion.div>

            {/* "THING" Text - In Front of Image */}
            <div className="absolute bottom-[25%] md:bottom-[15%] w-full text-center z-20">
                <motion.h1 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-[28vw] md:text-[22rem] font-black text-white leading-none tracking-tighter drop-shadow-2xl scale-y-110"
                >
                    THING
                </motion.h1>
            </div>
            
            {/* Script Text Overlay */}
            <div className="absolute top-[45%] md:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full text-center">
                 <motion.h2 
                    initial={{ opacity: 0, rotate: -15 }}
                    whileInView={{ opacity: 1, rotate: -6 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="font-handwriting text-7xl md:text-9xl text-[#C5A065] opacity-90 mix-blend-normal"
                 >
                    Thinking
                 </motion.h2>
            </div>

            {/* Torn Paper Effect at Bottom */}
             <div className="absolute bottom-[-1px] left-0 w-full h-16 md:h-24 bg-[#e5e5e5] z-30"
                style={{
                     clipPath: "polygon(0% 40%, 2% 20%, 4% 40%, 6% 20%, 8% 40%, 10% 20%, 12% 40%, 14% 20%, 16% 40%, 18% 20%, 20% 40%, 22% 20%, 24% 40%, 26% 20%, 28% 40%, 30% 20%, 32% 40%, 34% 20%, 36% 40%, 38% 20%, 40% 40%, 42% 20%, 44% 40%, 46% 20%, 48% 40%, 50% 20%, 52% 40%, 54% 20%, 56% 40%, 58% 20%, 60% 40%, 62% 20%, 64% 40%, 66% 20%, 68% 40%, 70% 20%, 72% 40%, 74% 20%, 76% 40%, 78% 20%, 80% 40%, 82% 20%, 84% 40%, 86% 20%, 88% 40%, 90% 20%, 92% 40%, 94% 20%, 96% 40%, 98% 20%, 100% 40%, 100% 100%, 0% 100%)"
                }}
             ></div>

        </div>

        {/* --- BOTTOM WHITE INFO SECTION --- */}
        <div className="w-full bg-[#e5e5e5] text-black pt-8 pb-12 px-6 md:px-16 flex flex-col items-center text-center relative z-20">
            
            <h3 className="text-xl md:text-3xl font-black uppercase tracking-wider mb-6 text-gray-800">
                A TYPOGRAPHY STORIES
            </h3>

            <p className="max-w-4xl text-sm md:text-lg text-gray-600 leading-relaxed font-medium mb-16 px-4">
                "Indeed, it seems relaxed and not serious, but everything is not as imagined. There are many thoughts and ideas drained in every movement to see every point of view. Perfection is a mindset."
            </p>

            <div className="w-full flex flex-col md:flex-row justify-between items-end border-t-2 border-gray-300 pt-8 gap-8 md:gap-0">
                
                {/* Left: QR */}
                <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-auto">
                    <p className="font-bold text-lg">Scan Me</p>
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                        <img src={QR_IMAGE} alt="QR" className="w-24 h-24 object-cover" />
                    </div>
                    <p className="text-[10px] text-gray-500 mt-1">Instastory by: @mr_saqib242</p>
                </div>

                {/* Center: Style Text */}
                <div className="mb-2 md:mb-4 text-center w-full md:w-auto">
                    <p className="text-xl md:text-3xl font-bold tracking-[0.2em] text-gray-800">
                        CREATIVE <span className="font-light mx-2 text-gray-400">{`{`}</span> STYLE
                    </p>
                    {/* Reflection effect text */}
                     <p className="text-xl md:text-3xl font-bold tracking-[0.2em] text-gray-300 transform scale-y-[-1] opacity-40 select-none mt-1">
                        CREATIVE <span className="font-light mx-2">{`{`}</span> STYLE
                    </p>
                </div>

                {/* Right: Socials */}
                <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
                    <div className="flex gap-4 text-gray-800">
                        <Instagram size={28} />
                        <Pin size={28} />
                    </div>
                    <p className="text-xs text-gray-500 font-bold tracking-wider">inspired by : Pinterest</p>
                </div>

            </div>

        </div>

      </div>
    </section>
  );
};

export default MindsetSection;