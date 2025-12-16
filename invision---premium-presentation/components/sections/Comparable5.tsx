import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';

const Comparable5: React.FC = () => {
  return (
    <SectionWrapper className="relative p-0 overflow-hidden">
      {/* Split Layout: Image Left, Text Right */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
         <div className="relative h-full w-full">
            <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" 
                alt="144 Fiesta Way Pool" 
                className="w-full h-full object-cover grayscale md:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>
         </div>
         <div className="bg-invision-black h-full w-full"></div>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 h-full items-center px-6 md:px-16">
        {/* Left Side Spacer */}
        <div className="hidden md:block"></div>

        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center h-full pl-0 md:pl-16"
        >
            <div className="flex items-center gap-3 mb-6 text-invision-orange">
                <Gem size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Comparável #5</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">144 Fiesta Way</h2>
            <p className="text-xl text-gray-500 font-light mb-8 italic">Uma Joia à Beira-Mar</p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10 border-t border-b border-white/10 py-8">
                <div>
                    <span className="block text-3xl font-bold text-white font-serif">5</span>
                    <span className="text-xs uppercase text-gray-500 tracking-wider">Quartos</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-white font-serif">6</span>
                    <span className="text-xs uppercase text-gray-500 tracking-wider">Banheiros</span>
                </div>
                <div className="col-span-2">
                    <span className="block text-3xl font-bold text-white font-serif">6,200</span>
                    <span className="text-xs uppercase text-gray-500 tracking-wider">Pés Quadrados (Sq. Ft)</span>
                </div>
            </div>

            <div className="bg-white/5 p-6 border-l-2 border-invision-orange">
                <p className="text-gray-300 font-light leading-relaxed text-sm">
                    Grandeza à Beira-Mar: Vistas Incomparáveis e Acesso Direto. Este imóvel exemplifica o potencial máximo de valorização da região.
                </p>
            </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Comparable5;