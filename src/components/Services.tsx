'use client';

import React from 'react';
import { Section } from './Section';
import { PenTool, BarChart3, Globe, Code2 } from 'lucide-react';
import { Button } from './Button';
import { Orchestrate, OrchestrateItem } from './Orchestrate';

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
        <Section id="services" className="bg-white/40 border-y border-white/50 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

                {/* Left Side: Copy */}
                <div className="lg:sticky lg:top-32">
                    <span className="text-slate-500 font-mono font-medium tracking-widest text-xs uppercase mb-6 block">Our Solution</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-[0.95]">
                        <span className="text-slate-900">We don't sell deliverables.</span> <br />
                        <span className="bg-gradient-to-r from-[#071caf] via-blue-600 to-[#071caf] bg-clip-text text-transparent">We sell Authority.</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-md leading-relaxed font-sans">
                        You don't need another "web designer." You need a technical partner who understands the economics of attention.
                    </p>

                    <div className="bg-white p-8 rounded-2xl border border-ink-100 max-w-md shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BarChart3 className="w-24 h-24 text-ink-900" />
                        </div>
                        <h3 className="font-display text-xl font-bold tracking-tight text-ink-900 mb-3 relative z-10">Ready to scale?</h3>
                        <p className="text-ink-500 mb-6 font-sans text-sm relative z-10">Let's build something extraordinary together.</p>
                        <Button className="pl-6 pr-6 bg-ink-900 text-white hover:bg-ink-800 shadow-xl shadow-ink-900/10" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Start a Project
                        </Button>
                    </div>
                </div>

                {/* Right Side: Service Cards (Bento) */}
                <Orchestrate className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <OrchestrateItem key={index} className={`bg-white p-6 rounded-2xl border border-ink-100 hover:border-ink-300 transition-all duration-300 hover:shadow-2xl hover:shadow-ink-200/50 group flex flex-col justify-between ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}>
                            <div className="mb-6">
                                <div className="p-3 w-12 h-12 rounded-xl bg-ink-100/50 text-ink-900 shrink-0 group-hover:bg-ink-900 group-hover:text-white transition-colors mb-4 flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="font-display text-xl font-bold tracking-tight text-ink-900 mb-2">{service.title}</h3>
                                <p className="text-ink-500 leading-relaxed font-sans text-sm">{service.desc}</p>
                            </div>
                            <div className="w-full h-1 bg-ink-50 rounded-full overflow-hidden">
                                <div className="h-full bg-ink-900 w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
                            </div>
                        </OrchestrateItem>
                    ))}
                </Orchestrate>

            </div>
        </Section>
    );
};
