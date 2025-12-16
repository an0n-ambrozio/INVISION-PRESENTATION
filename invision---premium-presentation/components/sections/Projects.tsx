import React from 'react';
import SectionWrapper from '../SectionWrapper';

import { MapPin, BedDouble, Ruler, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Fort Lauderdale",
      address: "1117 NE 18th Ct.",
      specs: ["5 Bed", "3.5 Bath"],
      area: "5.485 SQFT",
      image: "/projects/1117-ne-18th-ct/image-1.jpg",
      highlight: false
    },
    {
      title: "Fort Lauderdale",
      address: "1719 NE 18th St.",
      specs: ["4 Bed", "3.5 Bath"],
      area: "2.784 SQFT",
      image: "/projects/1719-ne-18th-st/image-16.jpg",
      highlight: false
    },
    {
      title: "Fort Lauderdale",
      address: "1725 NE 18th St.",
      specs: ["4 Bed", "3.5 Bath"],
      area: "3.100 SQFT",
      image: "/projects/1725-ne-18th-st/image-38.jpg",
      highlight: false
    },
    {
      title: "Gulf Coast",
      address: "11042 Carnegie Av",
      specs: ["3 Bed", "2 Bath"],
      area: "2.836 SQFT",
      image: "/projects/11042-carnegie-ave/image-2.jpg",
      highlight: true,
      note: "Development Opportunity"
    }
  ];

  return (
    <SectionWrapper className="bg-[#080808] relative flex flex-col justify-center py-20">

      {/* Header */}
      <div className="max-w-7xl mx-auto w-full px-6 mb-12 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-invision-orange"></div>
            <span className="text-invision-orange font-bold uppercase tracking-[0.2em] text-xs">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-light text-white leading-tight">
            Obras Primas <br /> <span className="font-serif italic text-white/40">Entregues</span>
          </h2>
        </div>

        <div className="hidden md:flex items-center gap-2 group cursor-pointer">
          <span className="text-white text-sm uppercase tracking-widest font-bold">Ver Todos</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-invision-orange group-hover:border-invision-orange transition-all">
            <ArrowRight size={14} className="text-white" />
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 print:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative aspect-[3/5] group overflow-hidden bg-invision-card border border-white/5 rounded-sm"
          >
            <img
              src={project.image}
              alt={project.address}
              className="w-full h-full object-cover grayscale-0 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>

            {/* Top Tag */}
            <div className="absolute top-4 left-4">
              <span className="bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-white/10">
                {project.title}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-0">
              <h3 className="text-2xl font-serif text-white mb-2 leading-none">{project.address}</h3>

              <div className="flex flex-col gap-1 border-t border-white/20 pt-3 mt-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <BedDouble size={14} className="text-invision-orange" />
                  <span className="text-xs font-light">{project.specs.join(" • ")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler size={14} className="text-invision-orange" />
                  <span className="text-xs font-light">{project.area}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </SectionWrapper>
  );
};

export default Projects;