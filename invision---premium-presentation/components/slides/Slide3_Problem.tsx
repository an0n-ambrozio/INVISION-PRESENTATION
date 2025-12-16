import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { ThemeType, SlideProps } from '../../types';
import { AlertTriangle, XCircle } from 'lucide-react';

const Slide3_Problem: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout theme={ThemeType.DARK} pageNumber="03">
        <div className="flex h-full w-full">
            {/* Left Side: Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center pr-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-4 text-invision-orange">
                        <AlertTriangle size={20} />
                        <span className="uppercase tracking-widest font-bold text-sm">O Desafio do Mercado</span>
                    </div>
                    
                    <h1 className="font-serif text-5xl md:text-6xl text-white mb-8">
                        O Problema
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                        Muitos investidores fazem <span className="text-white font-bold border-b border-invision-orange">escolhas arriscadas</span> ou caem em propostas pouco claras.
                    </p>

                    <p className="text-lg text-invision-grey font-light leading-relaxed">
                        A consequência é devastadora: acabar perdendo anos de trabalho árduo e acumulação de patrimônio em poucos movimentos equivocados.
                    </p>
                </motion.div>
            </div>

            {/* Right Side: Visual Metaphor */}
            <div className="hidden md:flex w-1/2 items-center justify-center relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative w-full h-full"
                >
                     {/* Abstract maze or confusion imagery */}
                     <div className="absolute inset-0 bg-gradient-to-l from-transparent to-invision-dark z-10" />
                     <img 
                        src="https://picsum.photos/seed/foggy_city/800/1000" 
                        alt="Uncertainty" 
                        className="w-full h-full object-cover opacity-40 rounded-sm"
                     />
                     
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-invision-dark/80 backdrop-blur-sm border border-gray-700 p-8 rounded-sm">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 text-gray-400">
                                <XCircle className="text-red-500" size={24} />
                                <span className="font-serif text-lg">Volatilidade Alta</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-400">
                                <XCircle className="text-red-500" size={24} />
                                <span className="font-serif text-lg">Falta de Transparência</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-400">
                                <XCircle className="text-red-500" size={24} />
                                <span className="font-serif text-lg">Ativos Ilíquidos</span>
                            </div>
                        </div>
                     </div>
                </motion.div>
            </div>
        </div>
    </SlideLayout>
  );
};

export default Slide3_Problem;