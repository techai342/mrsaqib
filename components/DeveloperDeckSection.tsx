import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Code2 } from 'lucide-react';

// Using Devicon classes for authentic logos
const skills = [
  { name: 'HTML5', icon: 'devicon-html5-plain', color: '#E34F26', level: 95 },
  { name: 'CSS3', icon: 'devicon-css3-plain', color: '#1572B6', level: 90 },
  { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F7DF1E', level: 85 },
  { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6', level: 80 },
  { name: 'React', icon: 'devicon-react-original', color: '#61DAFB', level: 85 },
  { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB', level: 75 },
  { name: 'Java', icon: 'devicon-java-plain', color: '#007396', level: 70 },
  { name: 'PHP', icon: 'devicon-php-plain', color: '#777BB4', level: 75 },
  { name: 'MySQL', icon: 'devicon-mysql-plain', color: '#4479A1', level: 80 },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#47A248', level: 70 },
];

const DeveloperDeckSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Matrix Rain Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01SAQIBVISUALS10';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Hacker Green
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
        clearInterval(interval);
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="relative w-full min-h-[900px] bg-[#050505] rounded-[2rem] overflow-hidden shadow-2xl border border-green-500/20 group">
        
        {/* Matrix Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 opacity-20 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 p-6 md:p-16 flex flex-col items-center">
            
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/50 rounded-full px-4 py-1 mb-4">
                    <Terminal size={14} className="text-green-500 animate-pulse" />
                    <span className="text-green-500 text-xs font-mono font-bold tracking-widest">SYSTEM.DEV_MODE = TRUE</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter">
                    CODE <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">ARSENAL</span>
                </h2>
                <p className="text-gray-400 font-mono text-sm md:text-base max-w-lg mx-auto">
                    // Architecting digital solutions with precision.
                    <br/>
                    // Full-stack capabilities initialized.
                </p>
            </motion.div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 w-full">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center gap-4 group/card hover:bg-white/10 transition-all duration-300 overflow-hidden"
                    >
                        {/* Hover Glow Effect */}
                        <div 
                            className="absolute inset-0 opacity-0 group-hover/card:opacity-20 transition-opacity duration-300"
                            style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)` }}
                        ></div>

                        {/* Border Glow on Hover */}
                        <div 
                            className="absolute inset-0 rounded-xl border border-transparent group-hover/card:border-[${skill.color}] transition-colors duration-300 opacity-50"
                            style={{ borderColor: skill.color }}
                        ></div>

                        {/* Icon */}
                        <div className="relative z-10 text-5xl md:text-6xl filter drop-shadow-lg transition-transform duration-300 group-hover/card:scale-110">
                            <i className={`${skill.icon} colored`}></i>
                        </div>

                        {/* Name */}
                        <div className="relative z-10 text-center">
                            <h3 className="text-white font-bold tracking-wide text-sm md:text-base">{skill.name}</h3>
                        </div>

                        {/* Progress Bar (Decorative) */}
                        <div className="w-full h-1 bg-white/10 rounded-full mt-2 relative overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.5, delay: 0.5 + (index * 0.1) }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: skill.color }}
                            ></motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Info Bar */}
            <div className="w-full mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
                <div className="flex gap-4">
                    <span className="flex items-center gap-2">
                        <Cpu size={14} /> CPU: OPTIMAL
                    </span>
                    <span className="flex items-center gap-2">
                        <Code2 size={14} /> BUILD: STABLE
                    </span>
                </div>
                <div className="uppercase tracking-widest">
                    SAQIB.VISUALS // DEV_V.2.0
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default DeveloperDeckSection;