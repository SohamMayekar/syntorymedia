'use client';

import React from 'react';
import { Section } from './Section';
import { User, FileText, PenTool, Zap, Globe, MousePointer2 } from 'lucide-react';

// Process steps data for carousel
const processSteps = [
    {
        title: "1. Kickoff Call",
        description: "A quick call to understand your product, goals, and what you want the website to do.",
        type: "kickoff"
    },
    {
        title: "2. Design Sprint",
        description: "We design with obsession. We iterate, refine, and polish until we have the \"best of the best\" visual experience.",
        type: "design"
    },
    {
        title: "3. Build & Polish",
        description: "Once design is approved, we handle the build. We engineer a fast, high-performance site that works flawlessly.",
        type: "build"
    },
    {
        title: "4. Launch",
        description: "You get full access to everything. Ship it, rock it, grow it—you're not locked to us.",
        type: "launch"
    }
];

// Step graphics components
const StepGraphic = ({ type }: { type: string }) => {
    switch (type) {
        case "kickoff":
            return (
                <>
                    <div className="absolute inset-0 bg-slate-50/50"></div>
                    <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-slate-200 rounded-xl transform translate-x-4 translate-y-2 rotate-12 flex items-center justify-center shadow-sm opacity-80">
                        <FileText className="text-slate-400 w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl transform -translate-x-2 -translate-y-2 -rotate-6 flex items-center justify-center shadow-xl z-10 border border-slate-100">
                        <User className="text-slate-900 w-6 h-6 md:w-8 md:h-8" />
                    </div>
                </>
            );
        case "design":
            return (
                <>
                    <div className="absolute inset-0 bg-slate-50 opacity-50">
                        <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 h-24 md:h-32 bg-white rounded-lg shadow-sm border border-slate-200"></div>
                    </div>
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-xl flex items-center justify-center shadow-xl z-10 relative border border-slate-700">
                        <PenTool className="text-white w-5 h-5 md:w-7 md:h-7" />
                        <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 bg-white rounded-md shadow-md p-1 animate-bounce" style={{ animationDuration: '2s' }}>
                            <MousePointer2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary fill-primary" />
                        </div>
                    </div>
                </>
            );
        case "build":
            return (
                <>
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white"></div>
                    <div className="w-16 h-24 md:w-28 md:h-44 bg-white border-[3px] md:border-[4px] border-slate-200 rounded-[1rem] md:rounded-[1.5rem] shadow-xl flex flex-col overflow-hidden relative">
                        <div className="h-full w-full bg-slate-50 flex items-center justify-center relative">
                            <div className="w-6 h-6 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center shadow-sm z-10 border border-slate-100">
                                <Zap className="text-slate-900 w-3 h-3 md:w-5 md:h-5" />
                            </div>
                        </div>
                    </div>
                </>
            );
        case "launch":
            return (
                <div className="relative cursor-default">
                    <div className="bg-slate-900 text-white px-4 py-2.5 md:px-5 md:py-3 rounded-full shadow-xl flex items-center gap-2 relative z-10">
                        <Globe size={14} className="text-slate-300 md:w-4 md:h-4" />
                        <span className="font-mono text-[10px] md:text-xs tracking-wide text-slate-100 font-medium">yourwebsite.com</span>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

export const Process: React.FC = () => {
    return (
        <Section id="process" className="">
            <div className="text-center mb-10 md:mb-24">
                <span className="text-slate-400 font-mono font-medium tracking-widest text-xs uppercase mb-4 block">Process</span>
                <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tighter leading-tight">
                    <span className="text-slate-900">How we move from</span>{' '}
                    <span className="bg-gradient-to-r from-[#071caf] via-blue-600 to-[#071caf] bg-clip-text text-transparent">idea to launch</span>
                </h2>
            </div>

            {/* Mobile: Clean 2x2 Grid */}
            <div className="md:hidden">
                <div className="grid grid-cols-2 gap-3">
                    {processSteps.map((step, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                            {/* Graphic */}
                            <div className="h-28 bg-gradient-to-br from-slate-50 to-white relative flex items-center justify-center">
                                <StepGraphic type={step.type} />
                            </div>

                            {/* Content */}
                            <div className="p-3">
                                <h3 className="font-display text-sm font-bold text-slate-900 mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 text-xs leading-relaxed font-sans line-clamp-2">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop: Original 4-column Grid */}
            <div className="hidden md:grid grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                    <div key={index} className="flex flex-col group">
                        {/* Graphic */}
                        <div className="h-56 bg-white border border-slate-100 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-500">
                            <StepGraphic type={step.type} />
                        </div>
                        {/* Content */}
                        <div className="px-2">
                            <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-sans">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
