import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { ThemeType, SlideProps } from '../../types';
import { ArrowRight, Building2 } from 'lucide-react';

const Slide1_Cover: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout theme={ThemeType.DARK} pageNumber="01">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/miami_luxury/1600/900" 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-invision-dark via-invision-dark/90 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="text-invision-orange w-8 h-8" />
            <span className="text-invision-orange tracking-[0.3em] font-sans text-sm font-bold uppercase">Invision Investments</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl leading-tight font-medium mb-8"
        >
          Investimentos Imobiliários <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            de Alto Padrão
          </span> <br/>
          <span className="italic font-light text-invision-orange">no Sul da Flórida</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col gap-1 pl-6 border-l-2 border-invision-orange"
        >
          <p className="text-xl md:text-2xl font-light text-gray-200">Retornos garantidos.</p>
          <p className="text-xl md:text-2xl font-bold text-white">Zero impostos nos EUA.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center gap-4"
        >
          <div>
            <p className="text-sm text-invision-grey uppercase tracking-widest mb-1">Fundador</p>
            <p className="text-lg font-serif">Renato Lerner, <span className="text-invision-grey font-sans text-sm">Engenheiro Civil (30+ anos)</span></p>
          </div>
          <ArrowRight className="text-invision-orange w-6 h-6 ml-4 animate-pulse" />
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide1_Cover;