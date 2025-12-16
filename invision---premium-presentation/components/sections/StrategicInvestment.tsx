import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart, Target } from 'lucide-react';

const StrategicInvestment: React.FC = () => {
  return (
    <SectionWrapper className="bg-[#080808] relative overflow-hidden">
      {/* Abstract Chart Background */}
      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-5 pointer-events-none">
         <svg viewBox="0 0 400 200" className="w-full h-full text-invision-orange fill-current">
            <path d="M0 150 Q 50 100 100 120 T 200 80 T 300 40 T 400 10 V 200 H 0 Z" />
         </svg>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="inline-flex items-center gap-2 px-4 py-1 border border-invision-orange/30 rounded-full bg-invision-orange/5 mb-8">
                <Target size={14} className="text-invision-orange" />
                <span className="text-invision-orange text-[10px] font-bold uppercase tracking-widest">Análise de Mercado</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">
                Investimento Estratégico <br/>
                <span className="text-gray-500 text-2xl md:text-4xl block mt-2 font-light">Oportunidade Premier à Beira-Mar</span>
            </h2>

            <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
                O dinâmico mercado imobiliário de luxo à beira-mar de Fort Lauderdale consistentemente apresenta uma <span className="text-white font-bold border-b border-invision-orange">demanda robusta</span> e uma <span className="text-white font-bold border-b border-invision-orange">valorização excepcional</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-invision-card p-6 border-l-4 border-invision-orange">
                    <TrendingUp className="text-white mb-4" size={24} />
                    <p className="text-gray-400 text-sm">
                        Nossa análise meticulosa de vendas comparáveis afirma inequivocamente o excelente potencial de investimento na 455 Bontona Avenue.
                    </p>
                </div>
                <div className="bg-invision-card p-6 border-l-4 border-white/20">
                    <BarChart className="text-white mb-4" size={24} />
                    <p className="text-gray-400 text-sm">
                        A seguir, apresentamos propriedades comparáveis que validam o preço e o potencial de retorno deste ativo exclusivo.
                    </p>
                </div>
            </div>

        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default StrategicInvestment;