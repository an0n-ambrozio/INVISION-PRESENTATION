import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { Zap, Timer, BarChart2 } from 'lucide-react';

const MarketPerformance: React.FC = () => {
  return (
    <SectionWrapper className="bg-invision-black border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left Content */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
            <h2 className="text-invision-orange font-bold tracking-[0.2em] uppercase text-xs mb-6">Velocidade de Liquidez</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
                Desempenho Acelerado <br/>
                <span className="text-gray-500 text-2xl md:text-3xl font-sans font-light mt-2 block">Vendas Rápidas no Setor de Luxo</span>
            </h3>

            <p className="text-gray-400 font-light leading-relaxed mb-8">
                Análise de mercado detalhada confirma demanda robusta por propriedades de luxo à beira-mar, com imóveis estrategicamente posicionados alcançando <span className="text-white font-medium">transações rápidas</span>.
            </p>

            <div className="bg-white/5 p-6 rounded-sm border-l-4 border-green-500">
                <p className="text-sm text-gray-300">
                    Ativos com licenças pré-aprovadas e status de “pronto para construir” atraem consistentemente maior interesse e garantem ofertas vantajosas.
                </p>
            </div>
        </motion.div>

        {/* Right Visuals */}
        <div className="flex flex-col gap-6">
             <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-6 p-6 bg-invision-card border border-white/10"
             >
                <div className="p-3 bg-invision-orange/10 rounded-full text-invision-orange">
                    <Zap size={24} />
                </div>
                <div>
                    <h4 className="text-white font-bold">Alta Demanda</h4>
                    <p className="text-gray-500 text-sm">Oferta escassa cria urgência.</p>
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-6 p-6 bg-invision-card border border-white/10"
             >
                <div className="p-3 bg-invision-orange/10 rounded-full text-invision-orange">
                    <Timer size={24} />
                </div>
                <div>
                    <h4 className="text-white font-bold">Ciclo Reduzido</h4>
                    <p className="text-gray-500 text-sm">Projetos aprovados vendem mais rápido.</p>
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 p-6 bg-invision-card border border-white/10"
             >
                <div className="p-3 bg-invision-orange/10 rounded-full text-invision-orange">
                    <BarChart2 size={24} />
                </div>
                <div>
                    <h4 className="text-white font-bold">Valorização</h4>
                    <p className="text-gray-500 text-sm">Crescimento contínuo do preço/sqft.</p>
                </div>
             </motion.div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default MarketPerformance;