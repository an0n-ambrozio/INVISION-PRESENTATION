import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';

const Comparable4: React.FC = () => {
  return (
    <SectionWrapper className="relative p-0 overflow-hidden">
      {/* Full Bleed Image Background - Right Focus */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop" 
            alt="Grand Estate Night View" 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 h-full items-center px-6 md:px-16">
         {/* Spacer */}
         <div className="hidden md:block"></div>

        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-right flex flex-col items-end"
        >
            <div className="flex items-center gap-4 mb-6 flex-row-reverse">
                <span className="text-6xl font-serif text-white/10 font-bold">04</span>
                <span className="text-invision-orange text-xs font-bold uppercase tracking-widest">Grandiosidade</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif mb-2">1 Royal Palm Drive</h2>
            <p className="text-gray-400 text-lg mb-8 tracking-wide">Fort Lauderdale, FL 33301</p>

            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="bg-invision-black border border-white/10 p-4 rounded-sm flex flex-col items-center">
                    <span className="text-2xl text-invision-orange font-bold font-serif">5,715</span>
                    <span className="text-[10px] text-gray-500 uppercase">Sq. Ft. Área Útil</span>
                </div>
                 <div className="bg-invision-black border border-white/10 p-4 rounded-sm flex flex-col items-center">
                    <span className="text-2xl text-invision-orange font-bold font-serif">5 / 6</span>
                    <span className="text-[10px] text-gray-500 uppercase">Bed / Bath</span>
                </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 w-full max-w-md">
                <p className="text-white font-medium mb-2">Localização Privilegiada</p>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                    Situado em um enclave prestigiado e altamente cobiçado. A demanda por propriedades deste calibre em Royal Palm Drive valida a estratégia de investimento.
                </p>
            </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Comparable4;