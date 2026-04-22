'use client';

import React from 'react';
import { Section } from './Section';
import { Quote, Star, BadgeCheck } from 'lucide-react';
import Image from 'next/image';

export const Testimonials: React.FC = () => {
    return (
        <Section className="relative overflow-hidden">
            {/* Background Glow - HIDDEN on mobile for native app feel */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#071caf]/5 via-blue-500/10 to-[#071caf]/5 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-4xl mx-auto">
                {/* Section Label */}
                <div className="text-center mb-8 md:mb-12">
                    <span className="text-slate-500 font-mono font-semibold tracking-wider md:tracking-[0.15em] text-sm md:text-xs uppercase mb-4 block">Trust Signals</span>
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight">
                        <span className="text-slate-900">What founders say</span>{' '}
                        <span className="bg-gradient-to-r from-[#071caf] via-blue-600 to-[#071caf] bg-clip-text text-transparent">after launch</span>
                    </h2>
                </div>

                {/* Featured Testimonial Card */}
                <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden group">
                    {/* Decorative Quote */}
                    <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <Quote className="w-32 h-32 text-[#071caf]" />
                    </div>

                    {/* 5 Star Rating */}
                    <div className="flex items-center gap-1 mb-6 md:mb-8">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} className="fill-[#071caf] text-[#071caf]" />
                        ))}
                        <span className="ml-2 text-sm font-medium text-slate-500">5.0</span>
                    </div>

                    {/* Quote */}
                    <blockquote className="font-display text-lg md:text-2xl lg:text-3xl text-slate-800 leading-relaxed mb-6 md:mb-10 font-medium tracking-tight relative z-10">
                        &ldquo;Syntory operates less like a vendor and more like a strategic arm of our company. They did not just build a site; they <span className="text-[#071caf] font-bold">re-architected how we capture leads</span> for EPF Buddy.&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4 md:gap-5">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden ring-4 ring-white shadow-xl">
                                <Image
                                    src="/clients/nikhil.png"
                                    alt="Nikhil Gite"
                                    fill
                                    className="object-cover rounded-full"
                                />
                            </div>
                            {/* Verified Badge */}
                            <div className="absolute -bottom-1 -right-1 bg-[#071caf] rounded-full p-1 shadow-lg">
                                <BadgeCheck size={14} className="text-white" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="font-bold text-slate-900 font-display text-lg">Nikhil Gite</p>
                            </div>
                            <p className="text-sm text-slate-500 font-sans">Founder & CEO</p>
                            <p className="text-xs font-semibold text-[#071caf] mt-0.5">EPF Buddy • epfbuddy.com</p>
                        </div>
                    </div>

                    {/* Subtle Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-slate-900/5 pointer-events-none"></div>
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 md:p-8">
                    <p className="text-xs uppercase tracking-[0.18em] font-mono text-slate-500 mb-3">Founder Note</p>
                    <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                        We keep this intentionally simple: if we are not the right fit for your goals, we will tell you fast. If we are a fit, you get a clear scope, a clear timeline, and a website that is built to be trusted and acted on.
                    </p>
                </div>
            </div>
        </Section>
    );
};
