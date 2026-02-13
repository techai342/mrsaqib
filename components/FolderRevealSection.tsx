import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import { FolderOpen, Lock } from 'lucide-react';

const FolderRevealSection: React.FC = () => {
  // Increased to 7 images for a fuller effect
  const fileImages = [
    { src: GALLERY_IMAGES[3].url, title: "CONCEPT_01" },
    { src: GALLERY_IMAGES[7].url, title: "RENDER_V2" },
    { src: GALLERY_IMAGES[5].url, title: "WIREFRAME" },
    { src: GALLERY_IMAGES[14].url, title: "FINAL_CUT" },
    { src: GALLERY_IMAGES[9].url, title: "ASSETS" },
    { src: GALLERY_IMAGES[21].url, title: "PROJECT_X" },
    { src: GALLERY_IMAGES[18].url, title: "PROTOTYPE" },
  ];

  const totalFiles = fileImages.length;
  const centerIndex = (totalFiles - 1) / 2;

  return (
    <section className="py-24 px-4 overflow-visible min-h-[800px] flex items-center justify-center bg-[#050505] relative">
      
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-blue-900/10 pointer-events-none"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
             <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: [0, 1, 0], y: -100 }}
                transition={{ 
                    duration: Math.random() * 5 + 5, 
                    repeat: Infinity, 
                    delay: Math.random() * 5 
                }}
                style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
             />
          ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 mb-4">
                <Lock size={12} className="text-blue-400" />
                <span className="text-blue-400 font-mono text-[10px] tracking-[0.2em] uppercase">
                    Restricted Access
                </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter relative">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">VAULT</span>
                <span className="absolute -top-6 -right-6 text-2xl text-gray-700 animate-pulse">✶</span>
            </h2>
            <p className="text-gray-500 font-mono text-xs md:text-sm mt-4 tracking-widest uppercase">
                // Decrypting Hidden Archives...
            </p>
        </motion.div>

        {/* 3D Folder Container */}
        <div className="relative w-[300px] md:w-[400px] h-[250px] perspective-[1200px] group">
            
            {/* --- Folder Back Plate --- */}
            <div className="absolute inset-0 bg-[#1e293b] rounded-xl border border-white/10 shadow-2xl transition-transform duration-500">
                 {/* Folder Tab */}
                 <div className="absolute -top-8 left-0 w-[40%] h-10 bg-[#1e293b] rounded-t-xl border-t border-l border-r border-white/10"></div>
            </div>

            {/* --- The Files (Emerging Animation) --- */}
            {/* Masking Container: clip-path ensures files only appear 'inside' the folder area and not below it */}
            <div 
                className="absolute bottom-4 left-4 right-4 h-full z-10 flex justify-center items-end pointer-events-none"
                style={{ clipPath: 'inset(-250% -50% 0% -50%)' }}
            >
                {fileImages.map((file, i) => {
                    // Revised Calculation for smoother Fan Out with more items
                    const rotate = (i - centerIndex) * 10; // Fanning angle
                    const x = (i - centerIndex) * 55;      // Horizontal spread
                    // Arch formula: items in center are higher up (more negative Y)
                    // We increase negative Y to make them pop out clearly above the folder lip
                    const y = -220 - Math.cos(((i - centerIndex) / centerIndex) * 1.5) * 40; 

                    return (
                        <motion.div
                            key={i}
                            initial={{ y: 300, x: 0, rotate: 0, opacity: 0, scale: 0.5 }}
                            whileInView={{ 
                                y: y,
                                x: x,
                                rotate: rotate, 
                                opacity: 1, 
                                scale: 1 
                            }}
                            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of element is in view
                            transition={{ 
                                delay: i * 0.05, // Fast Stagger
                                duration: 0.6,   // Fast Pop
                                type: "spring", 
                                bounce: 0.4,
                                stiffness: 100
                            }}
                            className="absolute bottom-0 w-36 h-48 md:w-44 md:h-60 bg-white p-2 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-gray-200 origin-bottom hover:z-50 transition-all duration-300 hover:scale-125 group-hover:cursor-pointer"
                            style={{ zIndex: i === Math.floor(totalFiles/2) ? 20 : 10 }}
                        >
                             {/* Image Area */}
                             <div className="w-full h-[80%] bg-gray-100 rounded overflow-hidden mb-2 relative group-hover:brightness-110 transition-all">
                                <img src={file.src} alt="File" className="w-full h-full object-cover" />
                                {/* Glossy Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
                             </div>
                             
                             {/* Metadata Lines */}
                             <div className="w-full h-[20%] flex flex-col justify-center px-1 space-y-1.5">
                                 <div className="flex justify-between items-center">
                                     <div className="w-6 h-1 bg-gray-300 rounded-full"></div>
                                     <div className="text-[8px] font-bold text-gray-400">.{i + 1}</div>
                                 </div>
                                 <div className="w-full h-1 bg-gray-100 rounded-full">
                                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.random() * 40 + 40}%` }}></div>
                                 </div>
                                 <p className="text-[7px] font-mono font-bold text-gray-800 truncate">{file.title}</p>
                             </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* --- Folder Front Plate (Glass) --- */}
            <div className="absolute inset-0 top-auto h-[85%] bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-md rounded-b-xl rounded-tr-xl border-t border-white/30 border-x border-white/10 border-b border-white/10 z-30 shadow-[0_-5px_20px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center overflow-hidden">
                
                {/* Shine/Reflection */}
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 animate-pulse" style={{ animationDuration: '3s' }}></div>
                
                <FolderOpen size={48} className="text-white/80 mb-2 drop-shadow-lg" strokeWidth={1.5} />
                <div className="text-white font-mono text-sm tracking-[0.2em] font-bold border border-white/20 px-4 py-1 rounded-full bg-black/20 backdrop-blur-sm">
                    OPEN VAULT
                </div>
            </div>
            
            {/* --- Glow Effect Behind --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-blue-500/20 blur-[120px] -z-10 rounded-full animate-pulse"></div>

        </div>

      </div>
    </section>
  );
};

export default FolderRevealSection;