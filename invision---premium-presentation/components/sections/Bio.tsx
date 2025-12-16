import React from 'react';
import SectionWrapper from '../SectionWrapper';


const Bio: React.FC = () => {
    return (
        <SectionWrapper className="bg-[#050505] relative py-20 lg:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 print:grid-cols-2 gap-12 lg:gap-24 items-center w-full max-w-7xl mx-auto">

                {/* Image Column */}
                <div className="relative order-2 lg:order-1 print:order-1 group">
                    <div className="relative z-10 aspect-[3/4] w-full bg-invision-card border border-white/5 overflow-hidden rounded-sm transition-all duration-700">
                        <img
                            src="/ceo-renato.jpg"
                            alt="Renato Lerner"
                            className="w-full h-full object-cover grayscale-0 scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60"></div>

                        <div className="absolute bottom-10 left-10">
                            <p className="text-white text-4xl font-serif tracking-tight">Renato Lerner</p>
                            <div className="flex items-center gap-3 mt-3">
                                <div className="w-8 h-[1px] bg-invision-orange"></div>
                                <p className="text-invision-orange text-xs font-bold uppercase tracking-[0.2em]">CEO & Fundador</p>
                            </div>
                        </div>
                    </div>

                    {/* Decoration */}
                    <div className="absolute -bottom-6 -left-6 w-full h-full border border-white/5 z-0 hidden md:block"></div>
                </div>

                {/* Text Column */}
                <div className="flex flex-col justify-center h-full order-1 lg:order-2 print:order-2">
                    <div className="inline-flex items-center gap-3 mb-8 print:mb-4">
                        <div className="w-2 h-2 bg-invision-orange rounded-full"></div>
                        <span className="text-white/60 uppercase tracking-[0.3em] text-xs font-medium">Liderança Visionária</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-light font-sans text-white mb-10 print:mb-6 leading-[1.1]">
                        Expertise Global <br />
                        <span className="font-serif italic text-white/40">30+ Anos de Mercado</span>
                    </h2>

                    <div className="space-y-8 print:space-y-4 text-gray-400 font-light leading-relaxed text-lg">
                        <p>
                            <span className="text-white font-medium">Engenheiro Civil (UFPE), MBA (FGV)</span>. Renato liderou empreendimentos de construção em três continentes: Brasil, Angola e Estados Unidos.
                        </p>
                        <div className="pl-6 border-l border-invision-orange/30">
                            <p className="text-white/80 italic font-serif text-xl leading-relaxed">
                                "Em 2016, fundou a <span className="text-invision-orange not-italic font-sans font-bold text-base tracking-wide uppercase">Invision Investments</span>. Alavancando expertise incomparável para entregar projetos de luxo à beira-mar na Flórida."
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 print:mt-6 grid grid-cols-3 gap-8">
                        <div>
                            <span className="block text-4xl font-serif text-white mb-2 print:text-3xl">30+</span>
                            <span className="text-[10px] uppercase text-invision-orange font-bold tracking-[0.2em]">Anos XP</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-serif text-white mb-2 print:text-3xl">03</span>
                            <span className="text-[10px] uppercase text-invision-orange font-bold tracking-[0.2em]">Continentes</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-serif text-white mb-2 print:text-3xl">2016</span>
                            <span className="text-[10px] uppercase text-invision-orange font-bold tracking-[0.2em]">Fundação</span>
                        </div>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Bio;