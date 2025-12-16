import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const GlobalLeadership: React.FC = () => {
  const regions = [
    {
      country: "Estados Unidos",
      desc: "Liderando desenvolvimentos de luxo inigualáveis nas mais cobiçadas localizações à beira-mar do Sul da Flórida, estabelecendo novos padrões de design.",
      delay: 0.2
    },
    {
      country: "Brasil",
      desc: "Impulsionando projetos residenciais de alto padrão com um histórico incomparável de excelência em construção e liderança de mercado.",
      delay: 0.4
    },
    {
      country: "Angola",
      desc: "Executando expansão internacional estratégica através de infraestrutura vital e iniciativas impactantes de desenvolvimento comunitário.",
      delay: 0.6
    }
  ];

  return (
    <SectionWrapper className="bg-invision-black border-t border-white/5 relative">
      {/* Background Map Hint */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
         <Globe size={400} strokeWidth={0.5} className="text-gray-500" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-center max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-invision-orange font-bold tracking-[0.2em] uppercase text-xs">Presença Internacional</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">
            Liderança Global em Imóveis: <br/>
            <span className="text-gray-500 italic">Transformando Localidades Icônicas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Vertical Dividers */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            <div className="hidden md:block absolute top-0 bottom-0 right-1/3 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

            {regions.map((region, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: region.delay }}
                    className="p-4 text-center md:text-left"
                >
                    <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-invision-orange pl-4 md:border-none md:pl-0">
                        {region.country}
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                        {region.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GlobalLeadership;