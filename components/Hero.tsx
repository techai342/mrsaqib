import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ExternalLink, MessageCircle, ArrowRight } from 'lucide-react';
import RGBCard from './RGBCard';
import SoftwareDock from './SoftwareDock';
import { PROFILE_IMAGE, SOCIALS } from '../constants';

import * as LucideIcons from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-12 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        
        {/* Left Column: Profile Card (Circular Design) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <RGBCard className="w-full">
            <div className="p-8 flex flex-col items-center text-center relative z-10">
              
              {/* Circular Avatar with Animated Borders */}
              <div className="relative w-40 h-40 md:w-56 md:h-56 mb-8 group">
                {/* Rotating Borders */}
                <div className="absolute inset-0 rounded-full border-t-4 border-red-500 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full border-b-4 border-blue-500 animate-spin-slow animation-delay-1000" style={{ animationDirection: 'reverse' }}></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl bg-black">
                  <img src={PROFILE_IMAGE} alt="Saqib" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute bottom-6 right-6 w-5 h-5 bg-green-500 rounded-full border-4 border-gray-900 z-20 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-2 relative">
                <span className="relative inline-block">
                    <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur opacity-30 animate-pulse"></span>
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">SAQIB</span>
                </span>
              </h1>
              <p className="rgb-text font-display font-bold tracking-[0.25em] text-sm md:text-base uppercase mb-8 border border-white/10 rounded-full px-4 py-1 bg-black/50 backdrop-blur-md">
                UX UI Web Designer
              </p>

              {/* Social Media Icons Grid */}
              <div className="flex flex-wrap justify-center gap-3 w-full mb-6">
                {SOCIALS.map((social) => {
                  let IconComponent;
                  
                  // Custom rendering for specific brand icons not available or generic in Lucide
                  if (social.name === 'TikTok') {
                    IconComponent = () => (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                      </svg>
                    );
                  } else {
                    // Fallback to Lucide icons
                    const Icon = (LucideIcons as any)[social.icon.replace(/-([a-z])/g, (g: any) => g[1].toUpperCase()).replace(/^[a-z]/, (g: any) => g.toUpperCase())] || LucideIcons.Link;
                    IconComponent = () => <Icon size={24} />;
                  }

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                      title={social.name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>

              {/* Email Contact Block */}
              <div className="w-full">
                 <a href="mailto:mrsaqib242242@gmail.com" className="group w-full block">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-white/10 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                        <div className="bg-red-500/20 p-2 rounded-full text-red-500 group-hover:scale-110 transition">
                            <Mail size={18} />
                        </div>
                        <div className="text-left overflow-hidden">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Email</p>
                            <p className="text-sm font-bold text-white truncate w-full">mrsaqib242242@gmail.com</p>
                        </div>
                    </div>
                 </a>
              </div>

            </div>
          </RGBCard>
        </div>

        {/* Right Column: About, Skills, Stats */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <RGBCard className="h-full">
            <div className="p-8 md:p-12 flex flex-col h-full">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-8 border-b border-white/5">
                     <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-blue-400 mb-3">
                             PROFILE 2026
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">ME</span>
                        </h2>
                     </div>
                </div>

                {/* About Text */}
                <div className="mb-10">
                    <p className="text-gray-300 leading-7 text-lg max-w-2xl">
                        Hi, I'm <strong className="text-white">Saqib</strong>. I'm back making a portfolio at the end of the year. 
                        I learned a lot of things from editing, graphic design, video, typography and others. 
                        I started my autodidact journey in 2018, refining my skills year after year to deliver 
                        premium visual experiences.
                    </p>
                </div>

                {/* Software Skills Dock */}
                <div className="mb-12">
                    <SoftwareDock />
                </div>

                {/* Stats / Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-auto">
                    {/* Education */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                             <LucideIcons.GraduationCap size={40} />
                        </div>
                        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Education</h3>
                        <p className="text-white font-bold">Autodidact & Professional</p>
                        <p className="text-sm text-gray-500 mt-1">2018 - Present</p>
                        <p className="text-xs text-blue-400 mt-2">Continuous Learning</p>
                    </div>

                    {/* Experience */}
                     <div className="bg-white/5 rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                             <LucideIcons.Briefcase size={40} />
                        </div>
                        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Experience</h3>
                        <p className="text-white font-bold">Content Creator</p>
                        <p className="text-sm text-gray-500 mt-1">TikTok & Social Media</p>
                        <p className="text-xs text-green-400 mt-2">Premium Quality Edits</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-6 border-t border-white/5 flex gap-4">
                     <a href="#gallery" className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
                        View Projects <ArrowRight size={18} className="text-blue-500" />
                     </a>
                </div>

            </div>
          </RGBCard>
        </div>

      </div>
    </section>
  );
};

export default Hero;