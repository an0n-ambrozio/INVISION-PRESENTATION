import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { History, ShieldCheck, TrendingUp, DollarSign } from 'lucide-react';

const ValuePropFinal: React.FC = () => {
  const props = [
    {
        icon: History,
        title: "Décadas de Experiência",
        desc: "30 anos de histórico em 3 continentes, entregando luxo consistentemente."
    },
    {
        icon: ShieldCheck,
        title: "Desenvolvimento Sem Riscos",
        desc: "Licenças garantidas, status pronto para construir, obstáculos mitigados."
    },
    {
        icon: TrendingUp,
        title: "Crescimento Dinâmico",
        desc: "Capitalize sobre a demanda crescente no mercado de Fort Lauderdale."
    },
    {
        icon: DollarSign,
        title: "Retornos Excepcionais",
        desc: "ROI conservador de ~40% com potencial de valorização adicional."
    }
  ];

  return (
    <SectionWrapper className="bg-invision-black border-t border-white/5">
      <div className="w-full h-full flex flex-col justify-center">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
                Desbloqueie Seu Potencial <br/> <span className="text-invision-orange">com a Invision</span>
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {props.map((prop, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-invision-card border border-white/5 p-8 hover:border-invision-orange/40 transition-all duration-300 group"
                >
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-invision-orange group-hover:bg-invision-orange group-hover:text-black transition-colors">
                        <prop.icon size={24} />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-4 leading-tight">{prop.title}</h3>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                        {prop.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ValuePropFinal;