'use client';

import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { useRouter } from 'next/navigation';
import { CheckCircle2, FileText, MessageSquare, Rocket } from 'lucide-react';

export const Pricing: React.FC = () => {
    const router = useRouter();

    // Generate Pricing Schema for SEO
    const pricingSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Custom Website Design and Development',
        provider: {
            '@type': 'Organization',
            name: 'Syntory Media',
        },
        areaServed: 'IN',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            seller: {
                '@type': 'Organization',
                name: 'Syntory Media',
            },
            description: 'Custom pricing shared after project scope and goals review.',
        },
    };

    return (
        <Section id="pricing" className="relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
            />
            {/* Background Glow - HIDDEN on mobile for native app feel */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-blue-500/10 rounded-full blur-[120px] -z-10"></div>

            <div className="text-center mb-10 md:mb-16">
                <span className="text-slate-500 font-mono font-semibold tracking-wider md:tracking-[0.15em] text-sm md:text-xs uppercase mb-6 block">Custom Pricing</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-8 max-w-xl mx-auto">
                    <span className="text-slate-900">Get a clear project</span> <br />
                    <span className="bg-gradient-to-r from-[#071caf] via-blue-600 to-[#071caf] bg-clip-text text-transparent">scope and price.</span>
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto font-sans text-lg">
                    No fixed packages. We price based on your exact requirements, goals, and timeline.
                </p>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="rounded-3xl p-[1px] bg-gradient-to-br from-blue-200/80 via-slate-200 to-blue-100/80">
                    <div className="bg-white rounded-3xl p-6 md:p-10">
                        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-start">
                            <div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">How pricing works</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    We first understand what you need, then send a custom proposal with final scope, timeline, and investment.
                                </p>

                                <div className="space-y-3 mb-8">
                                    {[
                                        'Clear scope before kickoff',
                                        'Clear timeline and deliverables',
                                        'Clear custom pricing without package mismatch'
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-[#071caf] shrink-0 mt-0.5" />
                                            <p className="text-slate-700 text-sm md:text-base">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <Button className="bg-[#071caf] hover:bg-[#0a24c7] border-0 shadow-premium-blue" onClick={() => router.push('/contact')}>
                                    Request Pricing
                                </Button>
                            </div>

                            <div className="space-y-3">
                                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <MessageSquare size={18} className="text-[#071caf]" />
                                        <p className="font-semibold text-slate-900">1. Discovery Call</p>
                                    </div>
                                    <p className="text-sm text-slate-600">We discuss goals, pages, features, and timeline.</p>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <FileText size={18} className="text-[#071caf]" />
                                        <p className="font-semibold text-slate-900">2. Custom Proposal</p>
                                    </div>
                                    <p className="text-sm text-slate-600">You get final scope, timeline, and exact pricing.</p>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Rocket size={18} className="text-[#071caf]" />
                                        <p className="font-semibold text-slate-900">3. Kickoff</p>
                                    </div>
                                    <p className="text-sm text-slate-600">Work starts once you approve the proposal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center text-slate-400 text-sm mt-8 md:mt-10 max-w-2xl mx-auto font-sans leading-relaxed px-4">
                Final price is shared after discovery.
                <br />No fixed package selling.
            </p>
        </Section>
    );
};
