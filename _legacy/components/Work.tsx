import React from 'react';
import { Section } from './Section';
import { ArrowUpRight } from 'lucide-react';

export const Work: React.FC = () => {
  const projects = [
    {
      client: "Devesh Kushe",
      category: "Personal Brand",
      description: "We make personal branding as easy as flipping a switch.",
      image: "https://picsum.photos/id/1027/1200/800",
      bg: "bg-[#0f172a]", // Dark slate
      text: "text-white",
      accent: "text-emerald-400"
    },
    {
      client: "EPF Buddy",
      category: "SaaS Website",
      description: "Viable Companies. Together.",
      image: "https://picsum.photos/id/1060/1200/800",
      bg: "bg-[#fbbf24]", // Amber
      text: "text-slate-900",
      accent: "text-slate-800"
    },
    {
      client: "Chatpati Chaukdi",
      category: "Social Growth",
      description: "Scaling content that actually converts.",
      image: "https://picsum.photos/id/225/1200/800",
      bg: "bg-[#581c87]", // Purple
      text: "text-white",
      accent: "text-purple-300"
    },
    {
      client: "Cherry & Chocolate",
      category: "Brand Identity",
      description: "Visual systems that taste as good as they look.",
      image: "https://picsum.photos/id/431/1200/800",
      bg: "bg-[#fecdd3]", // Rose
      text: "text-rose-900",
      accent: "text-rose-700"
    }
  ];

  return (
    <Section id="work" className="">
      <div className="text-center mb-20">
        <span className="text-slate-400 font-mono font-medium tracking-widest text-xs uppercase mb-4 block">WORKS</span>
        <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-6">Some of Our Best Works</h2>
        <p className="text-slate-600 max-w-2xl mx-auto font-light text-lg">
           Websites that we shipped for VCs, SaaS teams, cybersecurity products, and ambitious startups.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`group relative rounded-[2.5rem] overflow-hidden ${project.bg} transition-all duration-500 hover:shadow-2xl cursor-pointer min-h-[500px] flex flex-col`}
          >
            {/* Header Content */}
            <div className="absolute top-0 left-0 w-full p-8 md:p-10 flex justify-between items-start z-30">
               <div>
                 <h3 className={`font-display text-2xl font-bold tracking-tight ${project.text}`}>{project.client}</h3>
                 <div className="mt-2 flex gap-2">
                    <span className={`text-xs font-mono uppercase tracking-wider opacity-70 ${project.text}`}>{project.category}</span>
                 </div>
               </div>
               
               <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${project.text === 'text-white' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/5 hover:bg-black/10 text-slate-900'}`}>
                  <ArrowUpRight size={20} />
               </div>
            </div>

            {/* Mockup Container */}
            <div className="flex-1 flex items-end justify-center px-8 md:px-12 pt-32 pb-0 relative overflow-hidden">
                {/* The Mockup */}
                <div className={`relative w-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform group-hover:-translate-y-4 group-hover:scale-[1.02] shadow-2xl rounded-t-xl overflow-hidden border border-white/10 ${index % 2 === 0 ? 'origin-bottom' : ''}`}>
                    
                    {/* Fake Browser Header */}
                    <div className="h-6 md:h-8 bg-slate-900/90 backdrop-blur flex items-center px-4 gap-1.5 border-b border-white/10 w-full z-20 relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    
                    <img 
                      src={project.image} 
                      alt={project.client} 
                      className="w-full h-auto object-cover aspect-[16/10] bg-slate-800"
                    />
                    
                    {/* Shadow overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
            </div>

            {/* Hover Reveal Text (Bottom) */}
            <div className="absolute bottom-8 left-8 right-8 z-30 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 pointer-events-none">
               <p className={`font-display text-2xl md:text-3xl font-bold leading-tight ${project.text}`}>
                  {project.description}
               </p>
            </div>
            
          </div>
        ))}
      </div>
    </Section>
  );
};