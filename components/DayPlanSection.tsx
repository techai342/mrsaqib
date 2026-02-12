import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle, Phone, ArrowRight, Cloud, Wind } from 'lucide-react';
import { GALLERY_IMAGES, SOCIALS } from '../constants';

const DayPlanSection: React.FC = () => {
  // Using specific images for the honeycomb grid
  const hexImages = [
    GALLERY_IMAGES[5].url, 
    GALLERY_IMAGES[8].url,
    GALLERY_IMAGES[10].url,
  ];

  // State for dynamic date
  const [currentDate, setCurrentDate] = useState({
    dayName: 'MONDAY',
    dayNum: '28TH',
    month: 'oct'
  });

  useEffect(() => {
    const date = new Date();
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

    const getOrdinal = (n: number) => {
        const s = ["TH", "ST", "ND", "RD"];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    setCurrentDate({
        dayName: days[date.getDay()],
        dayNum: getOrdinal(date.getDate()),
        month: months[date.getMonth()]
    });
  }, []);

  // Helper to get link from constants
  const getLink = (name: string) => SOCIALS.find(s => s.name === name)?.url || '#';

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative w-full min-h-[900px] bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* --- LEFT SIDEBAR: VERTICAL TEXT --- */}
        <div className="w-full md:w-[15%] relative bg-gray-100/50 flex items-center justify-center overflow-hidden py-10 md:py-0 border-b md:border-b-0 md:border-r border-gray-200">
             {/* Vertical Text Container */}
             <div className="md:absolute md:inset-0 flex items-center justify-center">
                 <h1 className="text-6xl md:text-[6rem] lg:text-[8rem] font-black text-gray-200 tracking-[0.2em] uppercase leading-none select-none md:-rotate-90 whitespace-nowrap drop-shadow-sm">
                    {currentDate.dayName}
                 </h1>
             </div>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="w-full md:w-[85%] relative p-6 md:p-12 flex flex-col">
            
            {/* Top Right: Hexagon Grid */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-8">
                {/* Hexagon 1 */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 right-0 md:right-[10%] w-[180px] h-[200px] md:w-[260px] md:h-[280px]"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                    <img src={hexImages[0]} alt="Hex 1" className="w-full h-full object-cover" />
                </motion.div>

                {/* Hexagon 2 */}
                <motion.div 
                     initial={{ opacity: 0, scale: 0 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                     className="absolute top-[150px] md:top-[210px] right-[90px] md:right-[calc(10%+130px)] w-[180px] h-[200px] md:w-[260px] md:h-[280px] bg-white"
                     style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                     <div className="w-full h-full p-2 bg-white">
                         <div className="w-full h-full relative" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                            <img src={hexImages[1]} alt="Hex 2" className="w-full h-full object-cover" />
                         </div>
                     </div>
                </motion.div>

                 {/* Hexagon 3 */}
                 <motion.div 
                     initial={{ opacity: 0, scale: 0 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                     className="absolute top-[150px] md:top-[210px] -right-[90px] md:right-[calc(10%-130px)] w-[180px] h-[200px] md:w-[260px] md:h-[280px] bg-white"
                     style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                     <div className="w-full h-full p-2 bg-white">
                         <div className="w-full h-full relative" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                            <img src={hexImages[2]} alt="Hex 3" className="w-full h-full object-cover" />
                         </div>
                     </div>
                </motion.div>
            </div>

            {/* Middle: Date & Info */}
            <div className="mt-auto relative z-10">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-widest">{currentDate.dayNum}</span>
                        <div className="h-1 w-12 bg-gray-400"></div>
                    </div>
                    
                    <h2 className="text-7xl md:text-9xl font-black text-black leading-[0.8] mb-6 tracking-tighter uppercase">
                        {currentDate.month}<span className="text-teal-600">..</span>
                    </h2>

                    <div className="max-w-md text-gray-500 font-medium text-sm md:text-base leading-relaxed mb-8">
                        <p className="flex items-center gap-2 mb-2">
                           <Cloud size={16} className="text-teal-600" /> 
                           Clouds today, 21°
                        </p>
                        <p className="flex items-center gap-2 mb-4">
                           <Wind size={16} className="text-teal-600" />
                           Humidity 49%, Wind Speed 11km/h
                        </p>
                        <p className="uppercase tracking-widest text-xs font-bold text-black">
                            Naucalpan de Juárez, México
                        </p>
                    </div>

                    <p className="font-bold text-black tracking-[0.4em] text-xs uppercase mb-12">
                        Cinco Cuarenta y Siete
                    </p>
                </motion.div>

                {/* Bottom: Icons & Actions */}
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-8 gap-6 md:gap-0">
                    
                    {/* Social Icons */}
                    <div className="flex items-center gap-8">
                        <a href={getLink('Facebook')} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook className="text-black hover:text-blue-600 cursor-pointer transition-colors" size={24} strokeWidth={1.5} />
                        </a>
                        <a href={getLink('Instagram')} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram className="text-black hover:text-pink-600 cursor-pointer transition-colors" size={24} strokeWidth={1.5} />
                        </a>
                        <a href={getLink('WhatsApp')} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <MessageCircle className="text-black hover:text-green-600 cursor-pointer transition-colors" size={24} strokeWidth={1.5} />
                        </a>
                    </div>

                    {/* Decorative Line (Desktop) */}
                    <div className="hidden md:block w-32 h-[1px] bg-black"></div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        <a 
                            href={getLink('WhatsApp')} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-16 h-16 rounded-[20px] bg-gray-300 hover:bg-gray-400 text-teal-800 flex items-center justify-center transition-colors"
                        >
                            <Phone size={28} fill="currentColor" className="text-teal-700" />
                        </a>
                        <a 
                            href="#gallery"
                            className="w-16 h-16 rounded-[20px] bg-teal-700 hover:bg-teal-800 text-white flex items-center justify-center transition-colors shadow-lg shadow-teal-700/30"
                        >
                            <ArrowRight size={28} />
                        </a>
                    </div>

                </div>
            </div>

      </div>
     </div>
    </section>
  );
};

export default DayPlanSection;