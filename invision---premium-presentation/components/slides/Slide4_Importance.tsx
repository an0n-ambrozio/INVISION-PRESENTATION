import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { ThemeType, SlideProps } from '../../types';
import { BarChart3, Lock, Target } from 'lucide-react';

const Slide4_Importance: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout theme={ThemeType.LIGHT} pageNumber="04">
       <div className="flex flex-col h-full justify-center max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="mb-10 text-center"
            >
                <h2 className="text-invision-orange uppercase tracking-[0.2em] font-bold text-sm mb-4">Contexto Global</h2>
                <h1 className="font-serif text-5xl md:text-6xl text-invision-graphite">Por Que Isso Importa</h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-lg md:text-xl text-invision-graphite font-light leading-relaxed mb-6 text-justify">
                        A complexidade e a volatilidade inerente de muitos mercados de investimento tradicionais podem levar a uma <span className="font-bold">incerteza significativa</span> e a um risco considerável.
                    </p>
                    <p className="text-lg md:text-xl text-invision-graphite font-light leading-relaxed text-justify">
                        Em um ambiente onde as flutuações de mercado são comuns e os resultados muitas vezes imprevisíveis, garantir uma oportunidade de investimento confiável e estável não é apenas vantajoso, mas <span className="text-invision-orange font-bold font-serif italic">crucial</span>.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white p-8 shadow-2xl border-l-4 border-invision-orange relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-invision-light rounded-full z-0 opacity-50"></div>
                    
                    <div className="relative z-10 flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-invision-dark text-white rounded-sm mt-1">
                                <Lock size={20} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl font-bold text-invision-dark mb-1">Proteção</h3>
                                <p className="text-sm text-gray-500">Proteger seu capital suado contra erosão inflacionária e crises.</p>
                            </div>
                        </div>

                         <div className="flex items-start gap-4">
                            <div className="p-2 bg-invision-dark text-white rounded-sm mt-1">
                                <BarChart3 size={20} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl font-bold text-invision-dark mb-1">Crescimento Responsável</h3>
                                <p className="text-sm text-gray-500">Estratégias que priorizam a consistência sobre a especulação.</p>
                            </div>
                        </div>

                         <div className="flex items-start gap-4">
                            <div className="p-2 bg-invision-orange text-white rounded-sm mt-1">
                                <Target size={20} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl font-bold text-invision-orange mb-1">O Objetivo Final</h3>
                                <p className="text-sm text-gray-500">Construir um legado duradouro e estável.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
       </div>
    </SlideLayout>
  );
};

export default Slide4_Importance;