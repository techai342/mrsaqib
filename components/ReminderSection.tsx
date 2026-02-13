import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Menu, Share2, Heart, Mail, Send, Bookmark, Feather } from 'lucide-react';

const ReminderSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative w-full min-h-[850px] rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center bg-[#121212] border border-white/10">
        
        {/* Background - Using a dark moody nature/abstract blur to fit the theme while keeping the vibe */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2574&auto=format&fit=crop" 
            alt="Nature Background" 
            className="w-full h-full object-cover opacity-60 filter blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50"></div>
        </div>

        {/* Glassmorphism Phone UI Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[400px] h-[750px] bg-white/5 backdrop-blur-xl border border-white/20 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col z-10"
        >
            {/* Top Status Barish Area */}
            <div className="flex justify-between items-center p-8 text-white/90">
                <Menu size={24} className="cursor-pointer hover:text-white" />
                <Share2 size={24} className="cursor-pointer hover:text-white" />
            </div>

            {/* Notification Icon */}
            <div className="flex flex-col items-center mt-2">
                <div className="w-24 h-24 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.15)] relative">
                    <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse"></div>
                    <Bell size={36} className="text-white fill-white/20" />
                </div>
                <h2 className="font-cursive text-6xl text-white mt-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Reminder</h2>
            </div>

            {/* Quote Card */}
            <div className="mx-6 mt-8 mb-6 flex-1 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center text-center relative shadow-inner">
                
                {/* Decorative Icon */}
                <div className="mb-6 opacity-90">
                    <Feather size={28} className="text-white" />
                </div>

                {/* Quote Text */}
                <p className="text-white text-lg font-sans leading-relaxed tracking-wide">
                    "When you deliver the truth, you get three reactions:
                </p>
                
                <div className="mt-6 space-y-4 w-full">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
                        <p className="text-blue-200 font-medium text-sm">Intelligent people contemplate;</p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
                        <p className="text-red-200 font-medium text-sm">Foolish people get offended;</p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
                        <p className="text-gray-300 font-medium text-sm">And those who don't care are confused."</p>
                    </div>
                </div>

                {/* Author */}
                <p className="mt-auto pt-6 text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">
                    - Daily Wisdom
                </p>

                {/* Bottom Icons */}
                <div className="w-full flex justify-between items-center pt-6 text-white/70 border-t border-white/10 mt-4">
                    <div className="flex gap-5">
                        <Heart size={20} className="hover:text-red-500 hover:fill-red-500 cursor-pointer transition-all hover:scale-110" />
                        <Mail size={20} className="hover:text-blue-400 cursor-pointer transition-all hover:scale-110" />
                        <Send size={20} className="hover:text-green-400 cursor-pointer transition-all hover:scale-110" />
                    </div>
                    <Bookmark size={20} className="hover:text-yellow-400 hover:fill-yellow-400 cursor-pointer transition-all hover:scale-110" />
                </div>
            </div>

            {/* Bottom Handle */}
            <div className="w-1/3 h-1.5 bg-white/20 rounded-full mx-auto mb-6"></div>

        </motion.div>
        
        {/* Floating Particles in Background */}
        <div className="absolute inset-0 pointer-events-none">
             {[...Array(10)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute rounded-full bg-white opacity-20 blur-sm"
                    style={{
                        width: Math.random() * 50 + 20 + 'px',
                        height: Math.random() * 50 + 20 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        animation: `pulse ${Math.random() * 3 + 2}s infinite`
                    }}
                ></div>
             ))}
        </div>

      </div>
    </section>
  );
};

export default ReminderSection;