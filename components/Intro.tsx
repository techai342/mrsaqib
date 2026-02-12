import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

// Particle/Firework Component
const Firework = ({ delay, x, y, color }: { delay: number; x: string; y: string; color: string }) => {
  const particles = Array.from({ length: 12 });
  
  return (
    <div className="absolute z-10 pointer-events-none" style={{ left: x, top: y }}>
      {particles.map((_, i) => {
        const angle = (i / particles.length) * 360;
        const distance = Math.random() * 100 + 50;
        
        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
            animate={{
              x: Math.cos((angle * Math.PI) / 180) * distance,
              y: Math.sin((angle * Math.PI) / 180) * distance,
              scale: [0, 1, 0],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: delay,
            }}
            className={`absolute w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] ${color}`}
          />
        );
      })}
    </div>
  );
};

// Rising Spark Particle for Text
const Spark = ({ delay, x }: { delay: number; x: string }) => (
    <motion.div
        className="absolute bottom-0 w-1 h-1 bg-yellow-300 rounded-full blur-[1px] z-20"
        style={{ left: x }}
        initial={{ y: 0, opacity: 1, scale: 1 }}
        animate={{ y: -100, opacity: 0, scale: 0 }}
        transition={{ duration: 1.5, delay: delay, repeat: Infinity, ease: "easeOut" }}
    />
);

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0: Start, 1: Presents, 2: Explosion/Title, 3: Exit

  useEffect(() => {
    const sequence = async () => {
        setTimeout(() => setPhase(1), 500);
        setTimeout(() => setPhase(2), 2500);
        setTimeout(() => {
            setPhase(3);
            setTimeout(onComplete, 1000);
        }, 6000);
    };
    sequence();
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black text-white flex flex-col items-center justify-center overflow-hidden font-sans"
      exit={{ opacity: 0 }}
    >
        {/* --- Phase 3: Curtain Reveal (Exit) --- */}
        <AnimatePresence>
            {phase < 3 && (
                <motion.div 
                    className="absolute inset-0 bg-black z-0"
                    exit={{ scaleY: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    style={{ originY: 0 }}
                >
                     {/* Tech Grid Background (Visible in Phase 2) */}
                     <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: phase === 2 ? 0.2 : 0 }}
                        className="absolute inset-0"
                        style={{ 
                            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}
                     />
                </motion.div>
            )}
        </AnimatePresence>


        <div className="relative z-10 w-full h-full flex items-center justify-center">
            
            {/* Phase 1: Presents Text */}
            <AnimatePresence>
                {phase === 1 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8 }}
                        className="absolute text-center"
                    >
                        <motion.p 
                            initial={{ width: 0, overflow: 'hidden', whiteSpace: 'nowrap' }}
                            animate={{ width: 'auto' }}
                            className="text-cyan-400 font-mono tracking-[0.2em] text-xs md:text-sm uppercase mb-2 border-r-2 border-cyan-400 pr-2"
                        >
                            System Initialized...
                        </motion.p>
                        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 mt-2">
                            SAQIB VISUALS
                        </h2>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Phase 2: Fire & Tech Title */}
            {phase >= 2 && phase < 3 && (
                <>
                    {/* Firework Explosions for Impact */}
                    <Firework delay={0} x="20%" y="30%" color="bg-red-500" />
                    <Firework delay={0.2} x="80%" y="25%" color="bg-orange-500" />
                    <Firework delay={0.4} x="50%" y="20%" color="bg-yellow-400" />
                    <Firework delay={0.1} x="50%" y="50%" color="bg-white" />

                    {/* Main Title Container */}
                    <motion.div
                        initial={{ scale: 2, opacity: 0, filter: 'blur(10px)' }}
                        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                        className="relative z-20 text-center"
                    >
                        <div className="relative inline-block">
                             {/* Burning Text Effect */}
                            <motion.h1 
                                className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-red-600 via-orange-500 to-yellow-200"
                                animate={{
                                    backgroundSize: "100% 300%",
                                    backgroundPosition: ["0% 100%", "0% 0%"], // Rising fire effect
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    filter: "drop-shadow(0 0 30px rgba(255, 69, 0, 0.8))",
                                    WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)"
                                }}
                            >
                                SAQIB
                            </motion.h1>

                            {/* Tech Scanner Line */}
                            <motion.div
                                className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 z-30 shadow-[0_0_15px_rgba(0,255,255,1)] mix-blend-screen"
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
                            />
                            
                            {/* Rising Sparks */}
                            <div className="absolute inset-0 w-full h-full pointer-events-none">
                                <Spark delay={0} x="10%" />
                                <Spark delay={0.5} x="30%" />
                                <Spark delay={0.2} x="50%" />
                                <Spark delay={0.8} x="70%" />
                                <Spark delay={0.4} x="90%" />
                            </div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex justify-center items-center gap-3 mt-4"
                        >
                            <div className="h-[1px] w-12 bg-cyan-500"></div>
                            <p className="text-cyan-400 font-mono tracking-[0.5em] text-xs md:text-base uppercase shadow-cyan-500/50 drop-shadow-md">
                                Production
                            </p>
                            <div className="h-[1px] w-12 bg-cyan-500"></div>
                        </motion.div>
                    </motion.div>
                </>
            )}

        </div>

        {/* Cinematic Letterbox Bars */}
        <motion.div 
            initial={{ height: "50vh" }}
            animate={{ height: phase >= 1 ? "10vh" : "50vh" }}
            exit={{ height: "0vh" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 bg-black z-20"
        />
        <motion.div 
            initial={{ height: "50vh" }}
            animate={{ height: phase >= 1 ? "10vh" : "50vh" }}
            exit={{ height: "0vh" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 bg-black z-20"
        />

    </motion.div>
  );
};

export default Intro;