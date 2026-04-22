'use client';

import React from 'react';
import { Section } from './Section';
import { ArrowUpRight } from 'lucide-react';

const answers = [
    {
        question: 'What does Syntory Media do?',
        answer: 'We design, write, and build conversion-focused websites for founder-led brands that need stronger trust, better lead quality, and clearer positioning.'
    },
    {
        question: 'Who is this best for?',
        answer: 'Founder-led service businesses, creator-led brands, and early-stage companies that already have attention but need a better website to convert it.'
    },
    {
        question: 'How long does a website project take?',
        answer: 'Most projects launch in 2 to 3 weeks once scope is approved. Larger builds can take longer depending on pages, copy, and integrations.'
    },
    {
        question: 'Do you offer fixed packages?',
        answer: 'No. We quote each project based on scope, timeline, and goals so you get a custom proposal instead of a package mismatch.'
    },
    {
        question: 'Do you handle copy and SEO?',
        answer: 'Yes. We handle the message, page structure, on-page SEO, schema, and answer-friendly content so the site works for both people and search engines.'
    },
    {
        question: 'What happens after I contact you?',
        answer: 'We review your goals, confirm fit, share a scope recommendation, and send a custom proposal with timeline and pricing.'
    }
];

export const QuickAnswers: React.FC = () => {
    const quickAnswersSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Syntory Media quick answers',
        itemListElement: answers.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.question,
            description: item.answer,
        })),
    };

    return (
        <Section id="answers" className="relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(quickAnswersSchema) }}
            />
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 md:mb-14">
                    <span className="text-slate-500 font-mono font-semibold tracking-wider md:tracking-[0.15em] text-sm md:text-xs uppercase mb-4 block">Quick Answers</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
                        <span className="text-slate-900">Straight answers for</span>{' '}
                        <span className="bg-gradient-to-r from-[#071caf] via-blue-600 to-[#071caf] bg-clip-text text-transparent">people and AI</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mt-5 text-base md:text-lg leading-relaxed">
                        These short answers are written to be easy to quote, easy to scan, and easy for search engines and AI systems to understand.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                    {answers.map((item, index) => (
                        <div key={index} className="group bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 p-5 md:p-6">
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <h3 className="font-display text-lg md:text-xl font-bold tracking-tight text-slate-900 leading-tight">
                                    {item.question}
                                </h3>
                                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-[#071caf] transition-colors shrink-0 mt-1" />
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};