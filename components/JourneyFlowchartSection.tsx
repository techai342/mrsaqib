import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Rocket, Sparkles, Zap, Database } from 'lucide-react';

const steps = [
  {
    year: '2018',
    title: 'The Spark',
    description: 'Wrote my first line of HTML/CSS. The curiosity for the web was ignited.',
    icon: <Code size={20} />,
    color: '#3B82F6' // Blue
  },
  {
    year: '2020',
    title: 'Logic Core',
    description: 'Deep dive into JavaScript. Making the static web dynamic and interactive.',
    icon: <Zap size={20} />,
    color: '#F59E0B' // Yellow
  },
  {
    year: '2022',
    title: 'React Revolution',
    description: 'Shifted to component-based architecture. React & Tailwind become the standard.',
    icon: <Globe size={20} />,
    color: '#10B981' // Green
  },
  {
    year: '2023',
    title: 'Full Stack Expansion',
    description: 'Connecting the dots with Node.js and Databases. Building complete systems.',
    icon: <Database size={20} />,
    color: '#8B5CF6' // Purple
  },
  {
    year: '2024',
    title: 'Visual Mastery',
    description: 'Merging Code with Art. Mastering GSAP, Framer Motion & 3D Web.',
    icon: <Sparkles size={20} />,
    color: '#EC4899' // Pink
  },
  {
    year: '2025',
    title: 'AI Architect',
    description: 'Integrating LLMs & Smart Agents. Defining the future of web dev.',
    icon: <Cpu size={20} />,
    color: '#EF4444' // Red
  },
  {
    year: 'FUTURE',
    title: 'Limitless',
    description: 'Architecting unknown next-gen experiences. Ready for what comes next.',
    icon: <Rocket size={20} />,
    color: '#06B6D4' // Cyan
  }
];

const JourneyFlowchartSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center mb-16">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
         >
            <span className="px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 inline-block">
                Timeline
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                DEV <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">JOURNEY</span>
            </h2>
         </motion.div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Central Line Background */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full"></div>
        
        {/* Animated Line Overlay */}
        <motion.div 
            className="absolute left-[28px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 md:-translate-x-1/2 rounded-full z-0 origin-top shadow-[0_0_15px_rgba(139,92,246,0.5)]"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
        ></motion.div>

        <div className="flex flex-col gap-12 relative z-10 pb-12">
            {steps.map((step, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`flex flex-col md:flex-row items-start md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                    {/* Content Box */}
                    <div className="w-full md:w-[45%] pl-20 md:pl-0">
                        <div 
                            className="bg-[#0f0f0f] border border-white/10 p-6 rounded-2xl relative transition-all duration-300 group hover:bg-white/5 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ 
                                boxShadow: `0 0 0 1px transparent` // default state
                            }}
                        >
                             {/* Connector Line (Desktop) */}
                             <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-white/10 ${index % 2 === 0 ? '-left-8' : '-right-8'}`}>
                                <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20 ${index % 2 === 0 ? 'left-0' : 'right-0'}`}></div>
                             </div>
                             
                             {/* Header */}
                             <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/5">
                                 <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-white/5 text-gray-300">
                                    {step.year}
                                 </span>
                                 <div className="flex items-center gap-2">
                                     <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Milestone {index + 1}</span>
                                     <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: step.color }}></div>
                                 </div>
                             </div>

                             <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                {step.title}
                             </h3>
                             
                             <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                             </p>
                        </div>
                    </div>

                    {/* Central Node */}
                    <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 md:w-14 md:h-14 rounded-full bg-[#050505] border-4 border-[#050505] z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                         <motion.div 
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full rounded-full flex items-center justify-center text-white scale-90 md:scale-100 shadow-inner"
                            style={{ backgroundColor: step.color }}
                         >
                            {step.icon}
                         </motion.div>
                    </div>

                    {/* Empty Space for Grid Layout */}
                    <div className="hidden md:block w-[45%]"></div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyFlowchartSection;