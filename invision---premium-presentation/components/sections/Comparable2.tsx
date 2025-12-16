import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';

const Comparable2: React.FC = () => {
  return (
    <SectionWrapper className="relative p-0 overflow-hidden">
      {/* Full Bleed Image Background - Right Side focus */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" 
            alt="Modern Architecture Details" 
            className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Text Readability - Reversed */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 h-full items-center px-6 md:px-16">
        {/* Spacer for Right Aligned Text */}
        <div className="hidden md:block"></div>

        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-right flex flex-col items-end"
        >
            <div className="flex items-center gap-4 mb-6 flex-row-reverse">
                <span className="text-6xl font-serif text-white/10 font-bold">02</span>
                <span className="text-invision-orange text-xs font-bold uppercase tracking-widest">Revelando a Excelência</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif mb-2">430 Royal Plaza Dr.</h2>
            <p className="text-gray-400 text-lg mb-8 tracking-wide">Fort Lauderdale, FL 33301</p>

            <div className="space-y-4 mb-8 w-full md:w-2/3">
                <div className="flex items-center justify-end gap-4 border-b border-white/10 pb-2">
                    <span className="text-gray-300 font-light">Quartos Suntuosos</span>
                    <span className="text-invision-orange font-bold">5</span>
                </div>
                <div className="flex items-center justify-end gap-4 border-b border-white/10 pb-2">
                    <span className="text-gray-300 font-light">Banheiros Requintados</span>
                    <span className="text-invision-orange font-bold">5.5</span>
                </div>
                <div className="flex items-center justify-end gap-4 border-b border-white/10 pb-2">
                    <span className="text-gray-300 font-light">Acabamentos</span>
                    <span className="text-invision-orange font-bold">Premium</span>
                </div>
            </div>

            <p className="text-gray-400 font-light leading-relaxed max-w-md border-r-2 border-invision-orange pr-4">
                Apresentando a meticulosa artesania, os acabamentos sob medida e o design arquitetônico sofisticado que elevam esta propriedade.
            </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Comparable2;