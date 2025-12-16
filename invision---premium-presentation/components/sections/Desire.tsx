import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Anchor } from 'lucide-react';

const Desire: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Segurança",
      description: "Proteção patrimonial absoluta em uma economia forte e dolarizada."
    },
    {
      icon: TrendingUp,
      title: "Lucratividade",
      description: "Retornos consistentes e previsíveis acima da média de mercado."
    },
    {
      icon: Anchor,
      title: "Zero Risco",
      description: "Estratégias conservadoras que blindam o capital principal."
    }
  ];

  return (
    <SectionWrapper id="desire" className="bg-[#080808]">
      <div className="flex flex-col h-full justify-center">
        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-invision-orange"></div>
            <span className="text-invision-orange font-medium tracking-[0.3em] uppercase text-xs">
              O Desejo do Investidor
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-sans font-light text-white leading-[1.1]"
          >
            Investir de forma <span className="font-serif italic text-invision-orange">segura</span> e <span className="font-serif italic text-invision-orange">lucrativa</span>, sem arriscar seu capital.
          </motion.h2>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 w-full relative">
          {/* Horizontal Line Top (Desktop only) */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-white/10" />

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.2), duration: 0.8 }}
              className={`group flex flex-col pt-10 md:pt-16 relative md:px-10 first:pl-0 last:pr-0`}
            >
              {/* Vertical Divider (Except first one) */}
              {index !== 0 && (
                <div className="hidden md:block absolute left-0 top-0 h-32 w-[1px] bg-white/10 group-hover:h-full group-hover:bg-invision-orange/30 transition-all duration-700" />
              )}

              {/* Icon */}
              <div className="mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                <feature.icon size={42} strokeWidth={1} className="text-white group-hover:text-invision-orange transition-colors duration-500" />
              </div>

              <h3 className="text-3xl font-serif text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-xs text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Desire;