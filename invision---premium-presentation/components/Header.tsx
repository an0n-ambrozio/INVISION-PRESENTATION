import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    // Changed to absolute to stay at the top of the content flow (Hero only)
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute top-0 left-0 w-full z-50 px-6 md:px-16 py-8"
    >
      <div className="w-full max-w-[1920px] mx-auto flex justify-between items-center">
        {/* Logo Construction: Official Icon (Orange) + White Text */}
        <div className="flex items-center gap-2 cursor-pointer">

          {/* 
                Attempting to crop the official icon from the PNG. 
                We assume the icon is on the left. 
                We hide the original text (which is dark) by constraining the width.
            */}
          <div className="h-10 md:h-12 w-10 md:w-12 overflow-hidden relative">
            <img
              src="/logo-invision.png"
              alt="Logo Icon"
              className="h-full w-auto max-w-none object-left object-contain"
            />
          </div>

          <div className="flex flex-col justify-center -space-y-1">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-none">
              INVISION
            </span>
            <span className="text-[10px] md:text-xs font-light tracking-[0.3em] text-gray-400 uppercase leading-none pl-1">
              Investments
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <span className="text-xs font-bold tracking-[0.2em] text-invision-orange uppercase">
            Investimentos Imobiliários
          </span>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;