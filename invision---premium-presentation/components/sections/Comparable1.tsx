import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';

const Comparable1: React.FC = () => {
  return (
    <SectionWrapper className="relative p-0 overflow-hidden">
      {/* Full Bleed Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 h-full items-center px-6 md:px-16">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
        >
            <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl font-serif text-white/10 font-bold">01</span>
                <span className="text-invision-orange text-xs font-bold uppercase tracking-widest">Comparável Distinto</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif mb-2">408 Coral Way</h2>
            <p className="text-gray-400 text-lg mb-8 tracking-wide">Fort Lauderdale, FL 33301</p>

            <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 border-b border-white/10 pb-2">
                    <span className="text-invision-orange font-bold">5</span>
                    <span className="text-gray-300 font-light">Quartos Luxuosos</span>
                </div>
                <div className="flex items-center gap-4 border-b border-white/10 pb-2">
                    <span className="text-invision-orange font-bold">7.5</span>
                    <span className="text-gray-300 font-light">Banheiros Opulentos</span>
                </div>
                <div className="flex items-center gap-4 border-b border-white/10 pb-2">
                    <span className="text-invision-orange font-bold">8,000</span>
                    <span className="text-gray-300 font-light">Pés Quadrados (Sq. Ft.)</span>
                </div>
            </div>

            <p className="text-gray-400 font-light leading-relaxed max-w-md border-l-2 border-invision-orange pl-4">
                Interiores primorosamente projetados exemplificam a vida de luxo, exibindo acabamentos incomparáveis e definindo a elegância moderna.
            </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Comparable1;