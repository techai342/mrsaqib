import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectShowcaseSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-4"
        >
            Deployments
        </motion.span>
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-center text-white tracking-tight"
        >
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">PROJECTS</span>
        </motion.h2>
        <p className="text-gray-400 mt-4 text-center text-sm">
            Live previews embedded below. Click "Live Preview" to visit full site.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project: any, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col h-[500px]"
          >
            {/* Browser Header Bar */}
            <div className="h-8 bg-black/50 border-b border-white/10 flex items-center px-4 gap-2 shrink-0 z-20">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-auto text-[10px] text-gray-500 font-mono truncate max-w-[150px]">
                    {project.url.replace('https://', '')}
                </div>
            </div>

            {/* Live Website Embed (Iframe) OR Image Fallback */}
            <div className="relative h-[250px] w-full overflow-hidden bg-white group-hover:h-[280px] transition-all duration-500">
                
                {/* Check if embed is disabled (for PHP sites that block iframes) */}
                {project.disableEmbed ? (
                   <>
                      <img 
                          src={project.image} 
                          alt={project.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                   </>
                ) : (
                    <>
                        <iframe 
                            src={project.url} 
                            title={project.name}
                            className="w-[200%] h-[200%] border-0 transform scale-50 origin-top-left pointer-events-none select-none bg-white"
                            loading="lazy"
                            scrolling="no"
                        />
                        {/* Interaction Overlay (Prevents clicking inside iframe) */}
                        <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-10 bg-transparent hover:bg-black/10 transition-colors"
                            aria-label={`Visit ${project.name}`}
                        ></a>
                    </>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 relative z-20 bg-[#0a0a0a]">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.desc}
                </p>
                
                <div className="mt-auto flex gap-4">
                    <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-bold text-sm hover:bg-blue-500 hover:text-white transition-all group/btn"
                    >
                        Live Preview <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Glowing Accent */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-purple-600/20 transition-colors z-0"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;