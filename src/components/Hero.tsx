'use client';

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-24 md:pt-36 pb-12 md:pb-20 overflow-hidden">

            {/* DESKTOP ONLY: Animated Gradient Orbs Background */}
            <div className="hidden md:block absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/15 via-indigo-500/10 to-blue-700/15 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-sky-500/10 via-blue-500/15 to-indigo-500/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '-4s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-slate-400/5 via-blue-400/5 to-slate-300/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-2s' }}></div>
            </div>

            {/* MOBILE ONLY: Radial Glow Background */}
            <div className="md:hidden absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/70 via-slate-50 to-indigo-50/50"></div>
            <div className="md:hidden absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-blue-400/20 via-indigo-300/15 to-transparent rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col items-center md:text-center text-left">
                    
                    {/* Authority Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/50 mb-6 lg:mb-8 animate-fade-in-up shadow-lg shadow-slate-200/50 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <span className="w-2 h-2 rounded-full bg-[#071caf] animate-pulse"></span>
                        <span className="text-[10px] md:text-[11px] font-mono font-medium tracking-widest text-slate-600 uppercase relative z-10">Built For Founder-Led Brands</span>
                    </div>

                    {/* Headline - Unified H1 for SEO */}
                    <div className="mb-6 lg:mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <h1 className="font-display text-[33px] md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.08] md:leading-[0.98]">
                            <span className="text-slate-900">We build high-converting</span>
                            <br className="hidden md:block" />
                            <span className="bg-gradient-to-r from-[#071caf] via-blue-600 to-[#071caf] bg-clip-text text-transparent block md:inline mt-1.5 md:mt-0"> websites for founder-led brands.</span>
                        </h1>
                    </div>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up font-medium md:font-light" style={{ animationDelay: '0.2s' }}>
                        We design, write, and develop websites that make your business look credible and convert visitors into qualified leads.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <Button 
                            size="lg" 
                            className="w-full md:w-auto h-14 md:h-16 px-8 md:px-10 text-base md:text-lg shadow-premium-blue hover:shadow-2xl hover:shadow-blue-600/25 bg-[#071caf] hover:bg-[#0a24c7] text-white border-0 transition-all duration-300 rounded-2xl md:rounded-full" 
                            onClick={() => window.location.href = '/contact'}
                        >
                            Contact Us
                            <ArrowRight size={20} className="ml-2 hidden md:block" />
                        </Button>
                        <Button 
                            variant="outline" 
                            size="lg" 
                            className="w-full md:w-auto h-14 md:h-16 px-8 md:px-10 text-base md:text-lg group border-slate-300 text-slate-900 hover:bg-slate-100 hover:border-slate-400 rounded-2xl md:rounded-full" 
                            onClick={() => window.location.href = 'tel:+919511687723'}
                        >
                            Call Us Now
                            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
