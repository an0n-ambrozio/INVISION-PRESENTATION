import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black snap-start">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/projects/1117-ne-18th-ct/image-1.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-16 max-w-[1920px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Confidential Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-none mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-invision-orange animate-pulse" />
            <span className="text-white/80 text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">
              Material Confidencial
            </span>
          </div>

          {/* Main Title - Big Text Effect */}
          <h1 className="flex flex-col text-white mb-8">
            <span className="text-4xl md:text-6xl font-light text-white/90 mb-2 tracking-tight">
              Investimentos de
            </span>
            <span className="text-6xl md:text-[120px] leading-[0.9] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
              ALTO PADRÃO
            </span>
            <span className="text-3xl md:text-5xl font-serif italic text-invision-orange mt-4 ml-2">
              Sul da Flórida
            </span>
          </h1>

          {/* Separator */}
          <div className="w-32 h-[1px] bg-gradient-to-r from-invision-orange to-transparent mb-10 opacity-80" />

          {/* Description & Founder */}
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-end">
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-lg">
              Retornos garantidos, zero impostos e a segurança de investir no mercado mais sólido do mundo.
            </p>

            <div className="flex flex-col border-l border-white/20 pl-6 space-y-1">
              <span className="text-[10px] text-invision-orange uppercase tracking-widest">Apresentado por</span>
              <span className="text-2xl font-bold text-white tracking-tight">Renato Lerner</span>
              <span className="text-sm text-gray-400 font-light">Founder & CEO</span>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-invision-orange to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;