import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';

const BontonaSpecs: React.FC = () => {
  const specs = [
    { value: "5", label: "Quartos Luxuosos" },
    { value: "8.5", label: "Banheiros Elegantes" },
    { value: "7,577", label: "Pés Quadrados (SQFT)" },
    { value: "100+", label: "Frente para a Água" },
  ];

  return (
    <SectionWrapper className="bg-invision-black border-t border-white/5">
      <div className="w-full flex flex-col justify-center">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
            <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
            >
                <span className="text-invision-orange text-xs font-bold uppercase tracking-widest block mb-2">Ficha Técnica</span>
                <h2 className="text-3xl md:text-5xl font-serif text-white">455 Bontona Avenue</h2>
            </motion.div>
            
            <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="text-right mt-4 md:mt-0"
            >
                <p className="text-gray-400 text-sm uppercase tracking-wider">Fort Lauderdale, FL 33301</p>
            </motion.div>
        </div>

        {/* Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specs.map((spec, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="group p-6 bg-invision-card border border-white/5 hover:border-invision-orange/40 transition-all duration-500"
                >
                    <p className="text-5xl md:text-6xl font-serif text-white mb-4 group-hover:text-invision-orange transition-colors duration-300">
                        {spec.value}
                    </p>
                    <div className="w-8 h-[2px] bg-white/20 mb-4 group-hover:w-full group-hover:bg-invision-orange transition-all duration-500"></div>
                    <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">
                        {spec.label}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default BontonaSpecs;