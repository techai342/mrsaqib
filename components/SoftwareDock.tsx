import React from 'react';
import { motion } from 'framer-motion';

const icons = {
  ps: (
    <div className="w-full h-full bg-[#001E36] flex items-center justify-center rounded-[10px] border border-[#31A8FF] text-[#31A8FF] font-sans font-bold text-xl tracking-tighter shadow-[0_0_15px_rgba(49,168,255,0.3)]">
      Ps
    </div>
  ),
  lr: (
    <div className="w-full h-full bg-[#001E36] flex items-center justify-center rounded-[10px] border border-[#2CCCE4] text-[#2CCCE4] font-sans font-bold text-xl tracking-tighter shadow-[0_0_15px_rgba(44,204,228,0.3)]">
      Lr
    </div>
  ),
  gemini: (
    <div className="w-full h-full bg-black flex items-center justify-center rounded-[10px] border border-white/20 overflow-hidden relative shadow-[0_0_15px_rgba(100,100,255,0.4)]">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-red-500 opacity-20"></div>
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
        <path d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2Z" fill="url(#gemini-gradient)" />
        <defs>
          <linearGradient id="gemini-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4facfe" />
            <stop offset="1" stopColor="#f093fb" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  ),
  capcut: (
    <div className="w-full h-full bg-black flex items-center justify-center rounded-[10px] border border-white/20 relative shadow-[0_0_15px_rgba(255,255,255,0.2)]">
       <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
          {/* Top Chevron */}
          <path d="M7 6L12 11L17 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Bottom Chevron */}
          <path d="M7 18L12 13L17 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Top Line to simulate the cut box look if needed, but the double chevron is iconic */}
          <path d="M8 5H16" stroke="white" strokeWidth="1" strokeLinecap="round" strokeOpacity="0" /> 
       </svg>
       {/* Small teal dot indicator often seen in app icons */}
       <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
    </div>
  ),
  snapseed: (
    <div className="w-full h-full bg-[#1F1F1F] flex items-center justify-center rounded-[10px] border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-500 fill-current">
        <path d="M20.2 17.6c-1.5 2.8-5.1 4.3-8.2 4.3-5.2 0-9.5-3.8-9.5-9 0-3.3 2.3-7.2 6.4-9.5 0.5-0.3 1.1 0.2 0.9 0.7 -0.5 1.5-0.8 2.8-0.8 3.8 0 4.2 3.8 6.5 7.2 6.5 1.5 0 2.8-0.5 3.5-1 0.5-0.3 1.2 0.3 0.9 0.9C20.5 15.6 20.3 16.6 20.2 17.6Z" />
      </svg>
    </div>
  ),
  picsart: (
    <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center rounded-[10px] shadow-[0_0_15px_rgba(192,38,211,0.4)]">
      <span className="text-white font-display font-bold text-3xl italic">P</span>
    </div>
  )
};

const apps = [
  { id: 'ps', label: 'Photoshop' },
  { id: 'lr', label: 'Lightroom' },
  { id: 'capcut', label: 'CapCut Pro' },
  { id: 'gemini', label: 'Gemini AI' },
  { id: 'snapseed', label: 'Snapseed' },
  { id: 'picsart', label: 'PicsArt' },
];

const SoftwareDock: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-white font-display uppercase tracking-widest text-sm font-bold opacity-70 mb-2 flex items-center gap-2">
        <span className="w-1 h-4 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></span>
        Software Skills
      </h3>
      <div className="flex flex-wrap gap-4">
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.1 }}
            className="group relative"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 cursor-pointer transition-all duration-300">
              {icons[app.id as keyof typeof icons]}
            </div>
            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap border border-white/10 pointer-events-none">
              {app.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareDock;