import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const MarketInsights: React.FC = () => {
  return (
    <SectionWrapper className="bg-[#050505] relative overflow-hidden">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 flex items-end justify-between px-20 opacity-10 pointer-events-none">
          <div className="w-16 h-[40%] bg-white/20"></div>
          <div className="w-16 h-[50%] bg-white/20"></div>
          <div className="w-16 h-[45%] bg-white/20"></div>
          <div className="w-16 h-[60%] bg-white/20"></div>
          <div className="w-16 h-[80%] bg-invision-orange"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-white/20 rounded-full">
                <TrendingUp size={14} className="text-invision-orange" />
                <span className="text-xs uppercase tracking-[0.2em] text-gray-300">Análise de Valor</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                Insights Estratégicos: <br/>
                <span className="text-gray-500 italic">Preço por Metro Quadrado</span>
            </h2>

            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
                Nossa análise abrangente revela dinâmicas de preços convincentes no setor de luxo de Fort Lauderdale. Imóveis consistentemente alcançam <span className="text-white font-bold border-b border-invision-orange">avaliações premium</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="p-6 bg-invision-card border border-white/5">
                    <span className="block text-invision-orange font-bold text-lg mb-2">Localização</span>
                    <p className="text-sm text-gray-500">Cobiçada e escassa, impulsionando o valor base.</p>
                </div>
                <div className="p-6 bg-invision-card border border-white/5">
                    <span className="block text-invision-orange font-bold text-lg mb-2">Acabamentos</span>
                    <p className="text-sm text-gray-500">Personalização de luxo justifica o prêmio no preço final.</p>
                </div>
                <div className="p-6 bg-invision-card border border-white/5">
                    <span className="block text-invision-orange font-bold text-lg mb-2">Acesso à Água</span>
                    <p className="text-sm text-gray-500">O fator multiplicador definitivo para este ativo.</p>
                </div>
            </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default MarketInsights;