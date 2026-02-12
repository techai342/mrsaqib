import React from 'react';

interface RGBCardProps {
  children: React.ReactNode;
  className?: string;
  rounded?: string;
}

const RGBCard: React.FC<RGBCardProps> = ({ children, className = "", rounded = "rounded-3xl" }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* RGB Gradient Border */}
      <div className={`absolute -inset-[2px] bg-gradient-to-r from-red-600 via-green-600 to-blue-600 ${rounded} blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-rgb-flow`}></div>
      <div className={`absolute -inset-[2px] bg-gradient-to-r from-red-600 via-green-600 to-blue-600 ${rounded} opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-rgb-flow`}></div>
      
      {/* Content Container */}
      <div className={`relative ${rounded} bg-[#0a0a0a] h-full w-full overflow-hidden`}>
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        {children}
      </div>
    </div>
  );
};

export default RGBCard;