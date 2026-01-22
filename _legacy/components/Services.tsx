import React from 'react';
import { Section } from './Section';
import { PenTool, BarChart3, Globe, Code2 } from 'lucide-react';
import { Button } from './Button';

export const Services: React.FC = () => {
  const services = [
    {
      title: "High-End Design",
      desc: "Visuals that signal authority. People pay more for things that look expensive. We build the brand assets that separate market leaders from commodities.",
      icon: <PenTool className="w-5 h-5" />
    },
    {
      title: "Strategic Development",
      desc: "Clean code, fast load times. We build on modern stacks that Google loves and hackers hate. No bloated builders, just pure performance.",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      title: "Technical SEO",
      desc: "Stop paying Zuckerberg for every click. We deploy technical SEO infrastructure that builds digital real estate value and brings qualified leads on autopilot.",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Conversion Engineering",
      desc: "A pretty website is vanity. A converting website is sanity. We engineer fast, aesthetic platforms designed with one goal: getting you paid.",
      icon: <Globe className="w-5 h-5" />
    }
  ];

  return (
    <Section id="services" className="bg-white/40 backdrop-blur-sm">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Copy */}
        <div className="lg:sticky lg:top-32">
          <span className="text-primary font-mono font-medium tracking-widest text-xs uppercase mb-4 block">Our Solution</span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[0.95]">
            We don't sell deliverables. <br/> We sell <span className="text-primary">Authority.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-md leading-relaxed font-light">
            You don't need another "web designer." You need a technical partner who understands the economics of attention.
          </p>
          
          <div className="glass-card p-10 rounded-2xl border-l-4 border-l-primary max-w-md shadow-lg">
            <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 mb-3">Ready to scale?</h3>
            <p className="text-slate-600 mb-8 font-light">Let's build something extraordinary together.</p>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start a Project
            </Button>
          </div>
        </div>

        {/* Right Side: Service Cards */}
        <div className="grid gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass-panel p-8 rounded-3xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};