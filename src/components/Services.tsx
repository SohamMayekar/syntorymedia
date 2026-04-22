'use client';

import React from 'react';
import { Section } from './Section';
import { PenTool, BarChart3, Globe, Code2 } from 'lucide-react';
import { Button } from './Button';

export const Services: React.FC = () => {
    const services = [
        {
            title: "Positioning-Led Design",
            desc: "Your homepage should clarify value in seconds. We design message-first layouts that make your offer feel easier to trust and buy.",
            icon: <PenTool className="w-5 h-5" />
        },
        {
            title: "Conversion-Focused Build",
            desc: "Fast, clean Next.js builds with clear structure, responsive UX, and performance that keeps warm traffic from bouncing.",
            icon: <Code2 className="w-5 h-5" />
        },
        {
            title: "SEO Foundation",
            desc: "Technical SEO basics, clean architecture, and indexable content structure so your website compounds alongside your distribution channels.",
            icon: <BarChart3 className="w-5 h-5" />
        },
        {
            title: "Funnel Ownership",
            desc: "From CTA hierarchy to lead capture flow, we help you convert attention into qualified conversations on an asset you own.",
            icon: <Globe className="w-5 h-5" />
        }
    ];

    return (
        <Section id="services" className="bg-white/40 border-y border-white/50 backdrop-blur-sm">
            {/* Mobile Layout - Clean vertical flow */}
            <div className="md:hidden">
                {/* Header */}
                <div className="mb-8">
                    <span className="text-slate-500 font-mono font-semibold tracking-wider text-sm uppercase mb-4 block">Engagement Focus</span>
                    <h2 className="font-display text-3xl font-bold tracking-tighter mb-4 leading-[0.95]">
                        <span className="text-slate-900">What working with Syntory</span> <br />
                        <span className="bg-gradient-to-r from-[#071caf] via-blue-600 to-[#071caf] bg-clip-text text-transparent">actually delivers</span>
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed font-sans">
                        We help founder-led brands turn existing attention into trust, qualified leads, and owned distribution.
                    </p>
                </div>

                {/* Service Cards - Compact vertical list on mobile */}
                <div className="space-y-3 mb-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-xl border border-ink-100 flex items-start gap-4"
                        >
                            <div className="p-2.5 w-10 h-10 rounded-lg bg-ink-100/50 text-ink-900 shrink-0 flex items-center justify-center">
                                {service.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-display text-base font-bold tracking-tight text-ink-900 mb-1">{service.title}</h3>
                                <p className="text-ink-500 leading-relaxed font-sans text-sm line-clamp-2">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Card */}
                <div className="bg-white p-5 rounded-2xl border border-ink-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <BarChart3 className="w-16 h-16 text-ink-900" />
                    </div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-ink-900 mb-2 relative z-10">Want clarity before kickoff?</h3>
                    <p className="text-ink-500 mb-4 font-sans text-sm relative z-10">Get a focused plan with scope, timeline, and conversion priorities.</p>
                    <Button className="w-full bg-ink-900 text-white hover:bg-ink-800 shadow-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Contact Us
                    </Button>
                </div>
            </div>

            {/* Desktop Layout - Original side-by-side */}
            <div className="hidden md:flex md:flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                {/* Left Side: Copy */}
                <div className="lg:sticky lg:top-32">
                    <span className="text-slate-500 font-mono font-semibold tracking-[0.15em] text-xs uppercase mb-6 block">Engagement Focus</span>
                    <h2 className="font-display text-5xl font-bold tracking-tighter mb-8 leading-[0.95]">
                        <span className="text-slate-900">What your website</span> <br />
                        <span className="bg-gradient-to-r from-[#071caf] via-blue-600 to-[#071caf] bg-clip-text text-transparent">should deliver</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-md leading-relaxed font-sans">
                        You do not need more pages. You need a trusted asset that improves lead quality and converts warm traffic consistently.
                    </p>

                    <div className="bg-white p-8 rounded-2xl border border-ink-100 max-w-md shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BarChart3 className="w-24 h-24 text-ink-900" />
                        </div>
                        <h3 className="font-display text-xl font-bold tracking-tight text-ink-900 mb-3 relative z-10">Ready to discuss your project?</h3>
                        <p className="text-ink-500 mb-6 font-sans text-sm relative z-10">Clear fit check, clear scope, and clear next steps in one call.</p>
                        <Button className="pl-6 pr-6 bg-ink-900 text-white hover:bg-ink-800 shadow-xl shadow-ink-900/10" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Us
                        </Button>
                    </div>
                </div>

                {/* Right Side: Service Cards (Bento Grid) */}
                <div className="grid grid-cols-2 gap-4 w-full">
                    {services.map((service, index) => (
                        <div key={index} className={`bg-white p-6 rounded-2xl border border-ink-100 hover:border-ink-300 transition-all duration-300 hover:shadow-2xl hover:shadow-ink-200/50 group flex flex-col justify-between ${index === 0 || index === 3 ? 'col-span-2' : ''}`}>
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
                        </div>
                    ))}
                </div>

            </div>
        </Section>
    );
};
