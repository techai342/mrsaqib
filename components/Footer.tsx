import React from 'react';
import { QR_IMAGE } from '../constants';
import RGBCard from './RGBCard';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <RGBCard className="p-8 md:p-12 text-center" rounded="rounded-[3rem]">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-6">Scan to Connect</h3>
            
            <div className="relative p-2 bg-gradient-to-tr from-pink-500 via-yellow-500 to-cyan-500 rounded-2xl animate-rgb-flow bg-[length:200%_200%]">
               <div className="bg-white p-2 rounded-xl">
                   <img src={QR_IMAGE} alt="QR Code" className="w-48 h-48 object-cover rounded-lg" />
               </div>
            </div>

            <p className="text-gray-400 mt-8 text-sm max-w-md mx-auto">
               Save my contact details directly to your phone. Let's build something amazing together.
            </p>
            
            <div className="mt-12 pt-8 border-t border-white/10 w-full">
                <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-bold">
                    © 2026 SAQIB VISUALS • INNOVATING DAILY
                </p>
            </div>
          </div>
        </RGBCard>
      </div>
    </footer>
  );
};

export default Footer;