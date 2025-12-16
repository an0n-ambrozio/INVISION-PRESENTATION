import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';

const ReadyToBuild: React.FC = () => {
  const steps = [
    {
        id: "01",
        title: "Preparação do Terreno Concluída",
        desc: "O terreno foi meticulosamente limpo e preparado, garantindo um início de construção imediato e eficiente."
    },
    {
        id: "02",
        title: "Licenciamento Abrangente",
        desc: "Todas as licenças mestras de construção estão totalmente asseguradas, eliminando atrasos regulatórios."
    },
    {
        id: "03",
        title: "Infraestrutura Premium",
        desc: "O robusto paredão e o amplo cais estão concluídos com as mais altas especificações de luxo."
    },
    {
        id: "04",
        title: "Customização Irrestrita",
        desc: "Flexibilidade incomparável para adaptar cada aspecto do layout e acabamentos, maximizando o luxo sob medida."
    }
  ];

  return (
    <SectionWrapper className="bg-invision-black border-t border-white/5">
      <div className="w-full flex flex-col justify-center max-w-6xl mx-auto">
        
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
        >
            <span className="text-invision-orange font-bold tracking-[0.2em] uppercase text-xs">Status do Projeto</span>
            <h2 className="text-3xl md:text-5xl font-sans text-white mt-4">
                Liberte Sua Visão: <br/>
                <span className="font-serif italic text-gray-500">Pronto para Construir Hoje</span>
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                >
                    <div className="flex-shrink-0">
                        <span className="text-4xl font-serif text-white/20 font-bold">{step.id}</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            {step.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default ReadyToBuild;