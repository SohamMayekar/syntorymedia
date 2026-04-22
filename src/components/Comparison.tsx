'use client';

import React, { useState, useRef, startTransition } from 'react';
import { Section } from './Section';
import { CheckCircle2, XCircle } from 'lucide-react';
import { TextReveal } from './TextReveal';

// Static data hoisted outside component (Vercel best practice: avoid re-creation on every render)
const others = [
    "We'll update you tomorrow",
    "Meetings full, progress empty",
    "Weeks pass, nothing ships",
    "Surprise charges for basics",
    "Quality drops halfway",
    "Delays blamed on \"alignment\""
];

const us = [
    "Daily updates, no chasing",
    "Progress every single day",
    "Ship first, talk second",
    "Clear pricing, no surprises",
    "Consistent quality always",
    "We execute, you grow"
];

export const Comparison: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Mark mouse position updates as non-urgent (Vercel best practice: maintains UI responsiveness)
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            startTransition(() => {
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            });
        }
    };

    return (
        <Section className="relative overflow-hidden">
            <div className="text-center mb-12 md:mb-20">
                <span className="text-slate-500 font-mono font-semibold tracking-wider md:tracking-[0.15em] text-sm md:text-xs uppercase mb-4 block">The Difference</span>
                <TextReveal className="font-display text-4xl md:text-6xl font-medium tracking-tighter text-slate-900 mb-6 justify-center">Not All Agencies Are Equal</TextReveal>
            </div>

            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                className="relative max-w-5xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden group"
            >
                {/* Spotlight Effect */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(234, 179, 8, 0.06), transparent 40%)`
                    }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
                    {/* Left Column: Others */}
                    <div className="p-6 md:p-8 lg:p-12 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-100/50">
                        <h3 className="font-display text-xl md:text-2xl font-bold text-slate-400 mb-6 md:mb-8 flex items-center gap-3">
                            <span className="opacity-50">Other Agencies</span>
                        </h3>
                        <div className="space-y-6">
                            {others.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-slate-500 group/item transition-colors">
                                    <XCircle size={18} className="shrink-0 text-slate-400 group-hover/item:text-red-400 transition-colors md:w-5 md:h-5" />
                                    <span className="font-sans text-base md:text-lg line-through decoration-slate-400/50 group-hover/item:decoration-red-200 transition-all">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Us (Syntory) */}
                    <div className="relative p-6 md:p-8 lg:p-12 bg-white/50">
                        <div
                            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                background: `radial-gradient(400px circle at ${mousePosition.x - (containerRef.current?.getBoundingClientRect().width || 0) / 2}px ${mousePosition.y}px, rgba(234, 179, 8, 0.03), transparent 40%)`
                                // Simplified math for demo, usually needs distinct calc for right col
                            }}
                        />
                        {/* Enhanced Spotlight specifically for the "Us" side to make it glow when near */}
                        <div
                            className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255, 0.8), transparent 40%)`
                            }}
                        />

                        <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8 flex items-center gap-3">
                            <span>With Syntory</span>
                            <div className="px-2 py-0.5 rounded-full bg-[#071caf]/15 text-[#071caf] text-xs font-bold tracking-wide uppercase">Proven</div>
                        </h3>
                        <div className="space-y-6">
                            {us.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group/item">
                                    <div className="relative shrink-0">
                                        <div className="absolute inset-0 bg-[#071caf] rounded-full blur opacity-20 group-hover/item:opacity-60 transition-opacity"></div>
                                        <CheckCircle2 size={24} className="relative text-white fill-[#071caf]" />
                                    </div>
                                    <span className="font-sans text-base md:text-lg font-medium text-slate-800 group-hover/item:text-black group-hover/item:translate-x-1 transition-all duration-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
