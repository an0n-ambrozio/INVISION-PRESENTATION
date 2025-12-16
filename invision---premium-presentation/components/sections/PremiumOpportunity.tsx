import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';

const PremiumOpportunity: React.FC = () => {
  return (
    <SectionWrapper className="bg-[#080808] relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full h-full">
        
        {/* Left: Image/Card */}
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[50vh] md:h-[60vh] w-full"
        >
            <div className="absolute inset-0 bg-invision-card border border-white/10 rotate-3 z-0"></div>
            <div className="absolute inset-0 bg-black border border-white/20 -rotate-2 z-10 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop" 
                    alt="Luxury Modern Home Rendering" 
                    className="w-full h-full object-cover opacity-80"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 text-white z-20">
                    <p className="text-invision-orange font-bold text-xs uppercase tracking-widest mb-1">Localização Prime</p>
                    <p className="font-serif text-2xl">455 Bontona Avenue</p>
                 </div>
            </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
        >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                Aproveite Este <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-invision-orange to-white">Investimento Premium</span>
            </h2>

            <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                Esta oportunidade excepcional permite aos investidores capitalizar <span className="text-white font-medium">imediatamente</span> no próspero mercado de imóveis de luxo à beira-mar de Fort Lauderdale.
            </p>

            <div className="bg-white/5 p-6 border-l-2 border-invision-orange backdrop-blur-sm">
                <p className="text-sm text-gray-400">
                    Com todas as licenças garantidas e a construção pronta para começar, desbloqueie valor inigualável e retornos acelerados em uma localização privilegiada.
                </p>
            </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default PremiumOpportunity;