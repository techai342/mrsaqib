import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';

const LegendSection: React.FC = () => {
  // Using a different image from the gallery for this section
  const legendImage = GALLERY_IMAGES[3].url; 
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="relative min-h-[900px] w-full bg-[#0a0a0a] text-white rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-center items-center">
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-pulse"></div>
        
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

        {/* Massive Background Typography - Sliding In */}
        <div className="absolute top-10 left-0 right-0 z-0 overflow-hidden">
             <motion.h1 
                style={{ x: y2, WebkitTextStroke: '2px #fff' }}
                className="text-[20vw] font-black text-transparent leading-none whitespace-nowrap opacity-10 font-display select-none"
             >
                LARGEST
             </motion.h1>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-0 overflow-hidden flex justify-end">
             <motion.h1 
                style={{ x: y1 }}
                className="text-[20vw] font-black text-white/5 leading-none whitespace-nowrap font-display select-none"
             >
                LEGEND
             </motion.h1>
        </div>

        {/* Central Content */}
        <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-20">
            
            {/* Left Text Block */}
            <div className="w-full md:w-1/3 flex flex-col gap-6 order-2 md:order-1 mt-10 md:mt-0">
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="border-l-4 border-purple-500 pl-6"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">
                        ICONIC<br/>
                        <span className="text-purple-500">STYLE</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
                        Redefining the boundaries of digital art. A vision that transcends the ordinary and embraces the extraordinary.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <button className="group relative px-8 py-3 bg-white text-black font-bold text-xl rounded-full overflow-hidden">
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">SEE MORE</span>
                        <div className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                </motion.div>
            </div>

            {/* Center Image */}
            <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2 relative">
                {/* Glowing Ring Behind */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full blur-[80px] opacity-30"></div>
                
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="relative z-20"
                >
                    <div className="relative w-[300px] h-[450px] md:w-[350px] md:h-[550px] rounded-[100px] overflow-hidden border-4 border-white/20 shadow-[0_0_50px_rgba(168,85,247,0.4)]">
                        <img 
                            src={legendImage} 
                            alt="Legendary Saqib" 
                            className="w-full h-full object-cover filter contrast-110 hover:scale-110 transition-transform duration-700"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        
                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <p className="font-handwriting text-3xl text-white rotate-[-5deg]">Masterpiece</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Right Text Block */}
            <div className="w-full md:w-1/3 flex flex-col items-end text-right gap-6 order-3 mt-10 md:mt-0">
                 <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                        THE<br/>REALEST
                    </h2>
                </motion.div>

                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-xs"
                >
                    <p className="text-sm font-mono text-blue-300 mb-2">/// SPECIFICATIONS</p>
                    <ul className="text-gray-300 text-sm space-y-2">
                        <li className="flex justify-between border-b border-white/10 pb-1"><span>Creativity</span> <span>100%</span></li>
                        <li className="flex justify-between border-b border-white/10 pb-1"><span>Style</span> <span>MAX</span></li>
                        <li className="flex justify-between"><span>Legacy</span> <span>FOREVER</span></li>
                    </ul>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LegendSection;