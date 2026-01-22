import React from 'react';
import { Section } from './Section';
import { User, FileText, PenTool, Zap, Globe, Layout, MousePointer2 } from 'lucide-react';

export const Process: React.FC = () => {
    return (
        <Section id="process" className="">
            <div className="text-center mb-16 md:mb-24">
                <span className="text-slate-400 font-mono font-medium tracking-widest text-xs uppercase mb-4 block">Process</span>
                <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tighter text-slate-900 leading-tight">
                    How We Ship Your Site <br className="hidden md:block" /> in 2-3 Weeks
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Step 1: Kickoff Call */}
                <div className="flex flex-col group">
                    {/* Graphic */}
                    <div className="h-56 bg-white border border-slate-100 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-500">
                        <div className="absolute inset-0 bg-slate-50/50"></div>
                        {/* Back Card */}
                        <div className="absolute w-20 h-20 bg-slate-200 rounded-xl transform translate-x-6 translate-y-2 rotate-12 flex items-center justify-center shadow-sm opacity-80 transition-transform duration-500 group-hover:rotate-[15deg] group-hover:translate-x-8">
                            <FileText className="text-slate-400 w-8 h-8" />
                        </div>
                        {/* Front Card */}
                        <div className="absolute w-20 h-20 bg-white rounded-xl transform -translate-x-2 -translate-y-2 -rotate-6 flex items-center justify-center shadow-xl z-10 border border-slate-100 transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:-translate-x-3 group-hover:-translate-y-4">
                            <User className="text-slate-900 w-8 h-8" />
                        </div>
                    </div>
                    {/* Content */}
                    <div className="px-2">
                        <h3 className="font-display text-lg font-bold text-slate-900 mb-2">1. Kickoff Call</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-sans">
                            A quick call to understand your product, goals, and what you want the website to do.
                        </p>
                    </div>
                </div>

                {/* Step 2: Design Sprint */}
                <div className="flex flex-col group">
                    <div className="h-56 bg-white border border-slate-100 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-500">
                        {/* Fake UI Background */}
                        <div className="absolute inset-0 bg-slate-50 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute top-6 left-6 right-6 h-32 bg-white rounded-lg shadow-sm border border-slate-200"></div>
                        </div>

                        {/* Design Icon */}
                        <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center shadow-xl z-10 relative group-hover:scale-110 transition-transform duration-500 border border-slate-700">
                            <PenTool className="text-white w-7 h-7" />
                            {/* Cursor */}
                            <div className="absolute -bottom-3 -right-3 bg-white rounded-md shadow-md p-1 animate-bounce" style={{ animationDuration: '2s' }}>
                                <MousePointer2 className="w-3 h-3 text-primary fill-primary" />
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <h3 className="font-display text-lg font-bold text-slate-900 mb-2">2. Design Sprint</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-sans">
                            We design with obsession. We iterate, refine, and polish until we have the "best of the best" visual experience.
                        </p>
                    </div>
                </div>

                {/* Step 3: Build & Polish */}
                <div className="flex flex-col group">
                    <div className="h-56 bg-white border border-slate-100 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-500">
                        {/* Gradient BG */}
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white"></div>

                        {/* Phone Mockup */}
                        <div className="w-28 h-44 bg-white border-[4px] border-slate-200 rounded-[1.5rem] shadow-xl transform translate-y-10 flex flex-col overflow-hidden relative group-hover:translate-y-6 transition-transform duration-500">
                            <div className="h-full w-full bg-slate-50 flex items-center justify-center relative">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm z-10 border border-slate-100">
                                    <Zap className="text-slate-900 w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <h3 className="font-display text-lg font-bold text-slate-900 mb-2">3. Build & Polish</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-sans">
                            Once design is approved, we handle the build. We engineer a fast, high-performance site that works flawlessly.
                        </p>
                    </div>
                </div>

                {/* Step 4: Launch */}
                <div className="flex flex-col group">
                    <div className="h-56 bg-white border border-slate-100 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-500">

                        {/* 3D Pill Button (Cleaned up) */}
                        <div className="relative group/pill cursor-default">
                            <div className="bg-slate-900 text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                                <Globe size={16} className="text-slate-300" />
                                <span className="font-mono text-xs tracking-wide text-slate-100 font-medium">yourwebsite.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <h3 className="font-display text-lg font-bold text-slate-900 mb-2">4. Launch</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-sans">
                            You get full access to everything. Ship it, rock it, grow it—you’re not locked to us.
                        </p>
                    </div>
                </div>

            </div>
        </Section>
    );
};
