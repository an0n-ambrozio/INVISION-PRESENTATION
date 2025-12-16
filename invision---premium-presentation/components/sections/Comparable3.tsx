import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';

const Comparable3: React.FC = () => {
  return (
    <SectionWrapper className="relative p-0 overflow-hidden">
      {/* Full Bleed Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2673&auto=format&fit=crop" 
            alt="Waterfront Lifestyle" 
            className="w-full h-full object-cover"
        />
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
                <span className="text-6xl font-serif text-white/10 font-bold">03</span>
                <span className="text-invision-orange text-xs font-bold uppercase tracking-widest">Vida Exquisita</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif mb-2">621 Riviera Isle Dr.</h2>
            <p className="text-gray-400 text-lg mb-8 tracking-wide">Fort Lauderdale, FL 33301</p>

            <div className="bg-white/5 backdrop-blur-md p-8 border border-white/10 rounded-sm max-w-lg">
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Quartos</p>
                        <p className="text-2xl text-white font-serif">5 Luxuosos</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Banheiros</p>
                        <p className="text-2xl text-white font-serif">6.5</p>
                    </div>
                </div>
                
                <h3 className="text-invision-orange font-bold text-sm uppercase mb-2">Destaques</h3>
                <ul className="text-gray-300 font-light text-sm space-y-2 list-disc list-inside">
                    <li>Endereço Cobiçado em Riviera Isle</li>
                    <li>Acesso Direto e Contínuo à Beira-Mar</li>
                    <li>Arquitetura Contemporânea Marcante</li>
                </ul>
            </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Comparable3;