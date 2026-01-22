import React from 'react';
import { Section } from './Section';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export const Testimonials: React.FC = () => {
    return (
        <Section className="bg-white/30">
            <div className="max-w-4xl mx-auto">
                <div className="glass-panel p-12 md:p-16 rounded-3xl relative text-center">
                    <Quote className="text-primary/20 w-16 h-16 mb-8 mx-auto" />
                    <p className="font-display text-2xl md:text-3xl text-slate-800 leading-snug mb-10 font-medium tracking-tight">
                        "Syntory operates less like a vendor and more like a strategic arm of our company. They didn't just build a site; they re-architected how we capture leads for EPF Buddy."
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden ring-4 ring-white shadow-lg relative">
                            <Image
                                src="/clients/nikhil.png"
                                alt="Nikhil Gite"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 font-display text-xl">Nikhil Gite</p>
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Founder, EPF Buddy</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
