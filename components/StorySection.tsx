import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RGBCard from './RGBCard';

const textToType = "I don't just edit videos; I craft visual experiences. From concept to final cut, I pour my passion into every pixel. My journey is defined by a relentless pursuit of perfection and creativity. I am Saqib Visuals.";

const StorySection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
        if (index < textToType.length) {
            setDisplayedText(textToType.slice(0, index + 1));
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 50); // Speed of typing

    const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
    }, 500);

    return () => {
        clearInterval(intervalId);
        clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <RGBCard className="p-8 md:p-16 text-center relative overflow-hidden" rounded="rounded-3xl">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black opacity-60 pointer-events-none"></div>

            <h2 className="text-xl md:text-2xl font-display font-bold text-blue-500 uppercase tracking-[0.3em] mb-8 relative z-10 opacity-80">
                My Story
            </h2>
            
            <div className="min-h-[160px] md:min-h-[140px] max-w-5xl mx-auto relative z-10 flex items-center justify-center">
                <p className="text-2xl md:text-4xl text-white font-sans font-light leading-relaxed">
                    "{displayedText}"
                    <span className={`inline-block w-1 h-6 md:h-10 bg-purple-500 ml-2 align-middle transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                </p>
            </div>
        </RGBCard>
    </section>
  );
};

export default StorySection;