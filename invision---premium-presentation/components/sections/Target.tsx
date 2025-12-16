import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { Shield, Globe, Zap } from 'lucide-react';

const Target: React.FC = () => {
    const profiles = [
        {
            icon: Shield,
            title: "O Preservador",
            desc: "Busca proteção patrimonial acima de tudo. O objetivo é perpetuar o legado familiar através de ativos blindados contra instabilidades locais.",
            color: "from-blue-500/20 to-transparent"
        },
        {
            icon: Globe,
            title: "O Estrategista",
            desc: "Focado em diversificação geográfica e cambial. Entende que ter 100% do patrimônio em uma única jurisdição é um risco inaceitável.",
            color: "from-invision-orange/20 to-transparent"
        },
        {
            icon: Zap,
            title: "O Visionário",
            desc: "Busca rentabilidade agressiva sem abrir mão da segurança. Identifica oportunidades de desenvolvimento antes que se tornem óbvias para o mercado.",
            color: "from-purple-500/20 to-transparent"
        }
    ];

    return (
        <SectionWrapper className="bg-[#050505] relative py-32 overflow-hidden">

            {/* Abstract Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
                <div className="w-[80vw] h-[80vw] border border-white rounded-full"></div>
                <div className="absolute w-[60vw] h-[60vw] border border-white rounded-full"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="block text-invision-orange font-bold tracking-[0.3em] uppercase text-xs mb-6"
                    >
                        Quem Servimos
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif text-white leading-tight"
                    >
                        A Elite do Investimento <br />
                        <span className="italic text-gray-500 text-3xl md:text-5xl">Global</span>
                    </motion.h2>
                </div>

                {/* Profiles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {profiles.map((profile, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-[#0A0A0A] border border-white/5 p-10 rounded-sm overflow-hidden hover:-translate-y-2 transition-transform duration-500"
                        >
                            {/* Spotlight Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${profile.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:border-white/30 transition-all duration-500">
                                    <profile.icon strokeWidth={1} size={32} />
                                </div>

                                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-invision-orange transition-colors duration-300">{profile.title}</h3>
                                <div className="w-12 h-[1px] bg-white/20 mb-6 group-hover:w-full group-hover:bg-invision-orange/50 transition-all duration-500"></div>

                                <p className="text-gray-400 font-light leading-relaxed text-sm">
                                    {profile.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Target;