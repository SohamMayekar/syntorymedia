'use client';

import React from 'react';
import { Section } from './Section';
import { MousePointer2, CheckCircle2, Layout, Smartphone, Globe } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <Section id="about">
            {/* Header */}
            <div className="text-center mb-12 md:mb-20 lg:mb-32">
                <span className="text-slate-500 font-mono font-semibold tracking-wider md:tracking-[0.15em] text-sm md:text-xs uppercase mb-6 block">Outcomes</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-tight max-w-2xl mx-auto">
                    <span className="text-slate-900">What your website</span> <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-[#071caf] via-blue-600 to-[#071caf] bg-clip-text text-transparent">should actually do</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                {/* Card 1: Look credible */}
                <div className="group relative bg-white rounded-2xl p-2 border border-ink-100 ring-1 ring-ink-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col hover:-translate-y-1">
                    {/* Graphic Area */}
                    <div className="h-48 md:h-64 bg-ink-100/50 rounded-xl mb-6 md:mb-8 relative overflow-hidden flex items-center justify-center">
                        {/* Background Grid */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

                        <div className="relative z-10 flex flex-col items-center gap-3 transform group-hover:scale-105 transition-transform duration-500">
                            {/* Pill 1 */}
                            <div className="bg-white text-ink-500 px-4 py-2 rounded-full shadow-sm border border-ink-200 flex items-center gap-2 translate-y-2 opacity-60 scale-90">
                                <Layout size={14} className="text-ink-300" />
                                <span className="text-xs font-medium">Clarity first</span>
                            </div>
                            {/* Pill 2 (Main) */}
                            <div className="bg-white text-ink-900 px-5 py-2.5 rounded-full shadow-lg border border-ink-100 flex items-center gap-2 z-10 ring-1 ring-ink-100/50">
                                <CheckCircle2 size={16} className="text-brand" />
                                <span className="text-sm font-bold">Trust-focused</span>
                            </div>
                            {/* Pill 3 */}
                            <div className="bg-white text-ink-500 px-4 py-2 rounded-full shadow-sm border border-ink-200 flex items-center gap-2 -translate-y-2 opacity-60 scale-90">
                                <MousePointer2 size={14} className="text-ink-300" />
                                <span className="text-xs font-medium">Action-driven</span>
                            </div>
                        </div>
                    </div>

                    {/* Text Area */}
                    <div className="px-6 pb-8">
                        <h3 className="font-display text-xl font-bold tracking-tight text-ink-900 mb-3">Look credible in minutes</h3>
                        <p className="text-ink-500 leading-relaxed font-sans text-sm">
                            Positioning-first pages that explain your offer quickly and make premium buyers trust you faster.
                        </p>
                    </div>
                </div>

                {/* Card 2: Convert warm traffic */}
                <div className="group relative bg-white rounded-2xl p-2 border border-ink-100 ring-1 ring-ink-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col hover:-translate-y-1">
                    {/* Graphic Area */}
                    <div className="h-48 md:h-64 bg-ink-100/50 rounded-xl mb-6 md:mb-8 relative overflow-hidden flex items-center justify-center">
                        <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-500">
                            {/* Dark Card */}
                            <div className="bg-ink-900 text-white p-5 rounded-xl shadow-2xl w-48 border border-ink-800">
                                <div className="flex gap-1.5 mb-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-ink-800"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-ink-800"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-ink-800"></div>
                                </div>
                                <div className="space-y-2 mb-2">
                                    <div className="h-1 bg-ink-800 rounded w-3/4 opacity-50"></div>
                                    <div className="h-1 bg-ink-800 rounded w-1/2 opacity-50"></div>
                                </div>

                                {/* Cursors */}
                                <div className="absolute -right-4 top-8 bg-white text-ink-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-lg flex items-center gap-1 border border-ink-100">
                                    <span>LGTM!</span>
                                </div>
                                <div className="absolute -left-4 bottom-6 bg-brand text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg">
                                    <span>Deploying</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Area */}
                    <div className="px-6 pb-8">
                        <h3 className="font-display text-xl font-bold tracking-tight text-ink-900 mb-3">Convert warm traffic better</h3>
                        <p className="text-ink-500 leading-relaxed font-sans text-sm">
                            Clear offer hierarchy, proof placement, and CTA flow designed to lift lead quality, not just clicks.
                        </p>
                    </div>
                </div>

                {/* Card 3: Own your funnel */}
                <div className="group relative bg-white rounded-2xl p-2 border border-ink-100 ring-1 ring-ink-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col hover:-translate-y-1">
                    {/* Graphic Area */}
                    <div className="h-48 md:h-64 bg-ink-100/50 rounded-xl mb-6 md:mb-8 relative overflow-hidden flex items-center justify-center">
                        <div className="relative z-10 flex flex-col gap-2 w-40 group-hover:gap-3 transition-all duration-500">
                            {/* Notification 1 */}
                            <div className="bg-white border border-ink-100 p-2.5 rounded-lg shadow-sm flex items-center gap-3 transform -rotate-2 opacity-60 scale-95">
                                <div className="bg-ink-100 p-1.5 rounded-md">
                                    <Smartphone size={12} className="text-ink-300" />
                                </div>
                                <div className="w-full">
                                    <div className="h-1 bg-ink-100 rounded w-12 mb-1"></div>
                                </div>
                            </div>

                            {/* Notification 2 */}
                            <div className="bg-white border border-ink-100 p-2.5 rounded-lg shadow-sm flex items-center gap-3 transform rotate-1 opacity-80 translate-x-1 scale-95">
                                <div className="bg-blue-50 p-1.5 rounded-md">
                                    <Layout size={12} className="text-blue-500" />
                                </div>
                                <div className="w-full">
                                    <div className="h-1 bg-ink-100 rounded w-16 mb-1"></div>
                                </div>
                            </div>

                            {/* Notification 3 (Active) */}
                            <div className="bg-white p-2.5 rounded-lg shadow-lg flex items-center gap-3 transform -rotate-1 scale-105 border border-ink-100 ring-1 ring-green-200/50 ring-2">
                                <div className="bg-green-50 p-1.5 rounded-md relative">
                                    <div className="absolute inset-0 bg-green-400 rounded-md blur-sm opacity-40 animate-pulse"></div>
                                    <Globe size={12} className="text-green-600 relative z-10" />
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-[10px] font-bold block tracking-tight text-ink-800">Live now</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Area */}
                    <div className="px-6 pb-8">
                        <h3 className="font-display text-xl font-bold tracking-tight text-ink-900 mb-3">Own your funnel</h3>
                        <p className="text-ink-500 leading-relaxed font-sans text-sm">
                            You keep the domain, code, and data so growth compounds on your asset, not on rented platforms.
                        </p>
                    </div>
                </div>

            </div>

        </Section>
    );
};
