'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
            {/* Animated Gradient Orbs - Blue tones */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/15 via-indigo-500/10 to-blue-700/15 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-sky-500/10 via-blue-500/15 to-indigo-500/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '-4s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-slate-400/5 via-blue-400/5 to-slate-300/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Badge with Shimmer */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/50 mb-8 animate-fade-in-up shadow-lg shadow-slate-200/50 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <span className="w-2 h-2 rounded-full bg-[#071caf] animate-pulse"></span>
                        <span className="text-[11px] font-mono font-medium tracking-widest text-slate-600 uppercase relative z-10">Premium Web Design & Development</span>
                    </div>

                    {/* Headline with Gradient */}
                    <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
                            <span className="text-slate-900">Stop building on</span>
                            <br />
                            <span className="bg-gradient-to-r from-[#071caf] via-blue-600 to-[#071caf] bg-clip-text text-transparent">rented land.</span>
                        </h1>
                    </div>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
                        Social media algorithms change. Your website is the only asset you truly own. <strong className="font-semibold text-slate-900">We build authority-generating digital homes</strong> that turn traffic into high-ticket clients.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <Button size="lg" className="h-14 px-8 text-base shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 bg-[#071caf] hover:bg-[#0a24c7] text-white border-0" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                            Start Your Project
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-base group border-slate-300 text-slate-900 hover:bg-slate-100 hover:border-slate-400" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Portfolio
                            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};
