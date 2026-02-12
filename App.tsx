import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Intro from './components/Intro';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import CreativeProfile from './components/CreativeProfile';
import PosterSection from './components/PosterSection';
import LegendSection from './components/LegendSection';
import CollageSection from './components/CollageSection';
import NewEraSection from './components/NewEraSection';
import GitaStyleSection from './components/GitaStyleSection';
import SplitVexxSection from './components/SplitVexxSection';
import RevoStyleSection from './components/RevoStyleSection';
import NeonPartySection from './components/NeonPartySection';
import CloneRevealSection from './components/CloneRevealSection';
import WalkAloneSection from './components/WalkAloneSection';
import LaunchpadSection from './components/LaunchpadSection';
import SplitCreativeSection from './components/SplitCreativeSection';
import DayPlanSection from './components/DayPlanSection';
import MindsetSection from './components/MindsetSection';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu if open
    if (id === 'home') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
       const element = document.getElementById(id);
       if (element) {
         // Calculate offset to ensure nav doesn't cover content
         const navHeight = 0; 
         const elementPosition = element.getBoundingClientRect().top + window.scrollY;
         const offsetPosition = elementPosition - navHeight;
         
         window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
         });
       }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-purple-500/30 text-white overflow-hidden font-sans">
      
      <AnimatePresence mode="wait">
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 origin-left z-[100]"
            style={{ scaleX }}
          />

          {/* Dynamic Background Effects */}
          <div className="fixed inset-0 z-0 pointer-events-none">
             {/* Animated Orbs */}
             <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px] animate-pulse"></div>
             <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse delay-1000"></div>
             <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-red-600/05 blur-[100px] animate-pulse delay-700"></div>

             {/* Mouse Follower Light */}
             <div 
                className="fixed w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/05 to-purple-500/05 rounded-full blur-3xl pointer-events-none transition-transform duration-1000 ease-out translate-x-[-50%] translate-y-[-50%]"
                style={{ 
                    left: mousePosition.x,
                    top: mousePosition.y,
                }}
             ></div>
          </div>

          {/* Floating Island Navigation (Responsive) - Hidden when Lightbox is open */}
          <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-50 transition-all duration-500 ease-in-out ${isLightboxOpen ? '-translate-y-[200%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
            <div className={`absolute -inset-[1px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 blur opacity-75 animate-rgb-flow bg-[length:200%_auto] transition-all duration-300 ${isMobileMenuOpen ? 'rounded-[2rem]' : 'rounded-full'}`}></div>
            
            <div className={`relative bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'rounded-[2rem] p-6' : 'rounded-full px-6 py-3 flex justify-between items-center'}`}>
                
                <div className="flex justify-between items-center w-full">
                    <span className="text-lg font-display font-bold text-white tracking-widest flex items-center gap-1 cursor-pointer" onClick={(e) => scrollToSection(e as any, 'home')}>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        SAQIB
                    </span>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-xs font-bold text-gray-300 uppercase tracking-widest items-center">
                        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white transition-colors relative group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="hover:text-white transition-colors relative group">
                            Portfolio
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                        </a>
                        <a href="https://techai.zone.id/" target="_blank" className="hover:text-white transition-colors relative group">
                            Services
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                        </a>
                        <a href="https://wa.me/923478936242" className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold transition transform hover:scale-105 hover:bg-gray-200">
                            Contact Me
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-white hover:text-gray-300 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Content */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden flex flex-col gap-6 mt-6 text-center"
                        >
                            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-sm font-bold text-gray-300 hover:text-white uppercase tracking-widest">Home</a>
                            <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="text-sm font-bold text-gray-300 hover:text-white uppercase tracking-widest">Portfolio</a>
                            <a href="https://techai.zone.id/" target="_blank" className="text-sm font-bold text-gray-300 hover:text-white uppercase tracking-widest">Services</a>
                            <a href="https://wa.me/923478936242" className="bg-white text-black px-5 py-3 rounded-xl text-sm font-bold mx-auto w-full max-w-[200px]">
                                Contact Me
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
          </nav>

          <main className="relative z-10" id="home">
            <Hero />
            <CreativeProfile />
            <NewEraSection />
            <PosterSection />
            <LegendSection />
            <NeonPartySection />
            <CloneRevealSection />
            <WalkAloneSection />
            <LaunchpadSection />
            <SplitCreativeSection />
            <CollageSection />
            <GitaStyleSection />
            <RevoStyleSection />
            <SplitVexxSection />
            <DayPlanSection />
            <MindsetSection />
            <Gallery onLightboxToggle={setIsLightboxOpen} />
            <Footer />
          </main>

          <WhatsAppChat />
        </motion.div>
      )}
    </div>
  );
}

export default App;