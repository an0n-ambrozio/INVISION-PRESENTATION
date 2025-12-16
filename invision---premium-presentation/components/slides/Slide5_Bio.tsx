import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { ThemeType, SlideProps } from '../../types';
import { Globe2, Award, Briefcase } from 'lucide-react';

const Slide5_Bio: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout theme={ThemeType.DARK} pageNumber="05">
      <div className="flex flex-col md:flex-row h-full gap-8 md:gap-12">
        
        {/* Left Column: Image & Highlights */}
        <div className="w-full md:w-1/3 flex flex-col h-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 1 }}
                className="relative flex-grow min-h-[300px] md:min-h-0 rounded-sm overflow-hidden mb-6 group"
            >
                {/* Placeholder for Renato's Photo */}
                <img 
                    src="https://picsum.photos/seed/executive_man/600/900" 
                    alt="Renato Lerner" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-invision-dark via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-6 left-6">
                    <h2 className="font-serif text-3xl text-white">Renato Lerner</h2>
                    <p className="text-invision-orange uppercase tracking-wider text-sm font-bold">CEO & Fundador Visionário</p>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex justify-between border-t border-gray-700 pt-6"
            >
                <div className="text-center">
                    <p className="font-serif text-2xl text-white">30+</p>
                    <p className="text-xs text-gray-500 uppercase">Anos de Exp.</p>
                </div>
                <div className="text-center">
                    <p className="font-serif text-2xl text-white">3</p>
                    <p className="text-xs text-gray-500 uppercase">Continentes</p>
                </div>
                <div className="text-center">
                    <p className="font-serif text-2xl text-white">2016</p>
                    <p className="text-xs text-gray-500 uppercase">Fundação INVISION</p>
                </div>
            </motion.div>
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full md:w-2/3 flex flex-col justify-center overflow-y-auto no-scrollbar">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="space-y-6 text-gray-300 font-light text-sm md:text-base leading-relaxed">
                    <p>
                        <span className="text-white font-medium">Renato Lerner</span> é um Engenheiro Civil distinto pela UFPE, com MBA em Gestão Empresarial pela FGV e pós-graduação em Segurança do Trabalho pela UPE. Com uma ilustre carreira de 30 anos, Renato tem liderado e expandido com maestria empreendimentos de construção em três continentes: <span className="text-invision-orange">Brasil, Angola e Estados Unidos</span>.
                    </p>
                    
                    <div className="flex gap-4 items-start pl-4 border-l-2 border-gray-700">
                        <Award className="text-invision-orange flex-shrink-0 mt-1" size={18} />
                        <p className="italic text-gray-400">
                            Sua liderança excepcional foi reconhecida em 2008, quando foi convidado para gerenciar uma proeminente construtora em Angola. Lá, Renato foi pioneiro no desenvolvimento do primeiro Centro de Neurodesenvolvimento do país.
                        </p>
                    </div>

                    <p>
                        Demonstrando seu faro empreendedor, ele também estabeleceu com sucesso duas sólidas empresas de construção que continuam a prosperar em Angola.
                    </p>

                    <p>
                        Após sua estratégica mudança para os EUA, Renato realizou uma análise aprofundada do crescente mercado imobiliário. Em 2016, ele concluiu com sucesso seu projeto inaugural de construção na Florida e fundou a <span className="text-white font-serif">Invision Investments</span>.
                    </p>
                    
                    <div className="bg-gray-800/50 p-4 rounded-sm border border-gray-700 mt-4">
                        <div className="flex items-center gap-3 mb-2 text-invision-orange">
                            <Briefcase size={18} />
                            <span className="uppercase font-bold text-xs tracking-widest">Expertise Atual</span>
                        </div>
                        <p className="text-white">
                            Alavancando sua incomparável experiência internacional, Renato entrega expertise personalizada e de classe mundial para o setor de desenvolvimento imobiliário de luxo à beira-mar.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default Slide5_Bio;