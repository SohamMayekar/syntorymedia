'use client';

import React, { useState, useCallback } from 'react';
import { Section } from './Section';
import { Plus, Minus } from 'lucide-react';

// Static data hoisted outside component (Vercel best practice: avoid re-creation on every render)
const faqs = [
    {
        q: "Can't I just use Linktree or Squarespace?",
        a: "You can, but you'll look like everyone else. Templates are rented land. We build custom assets that signal authority, capture leads, and separate you from the 'amateur' crowd."
    },
    {
        q: "I'm a small creator. Is this overkill?",
        a: "If you plan to stay small, yes. If you plan to work with brands, sell products, or charge premium rates, you need a premium presence. We built the 'Signal' plan specifically for you."
    },
    {
        q: "Do you write the website copy?",
        a: "Yes. Design without copy is just decoration. We provide a structural framework and professional copywriting to ensure your message converts."
    },
    {
        q: "How fast can we launch?",
        a: "Speed is a feature. We launch Single-page sites in ~7 days and Full Authority sites in ~14 days. We don't believe in 6-month projects that drain your momentum."
    },
    {
        q: "How does payment work?",
        a: "Full payment upfront preferred (or 50/50 before handover). Everything scoped clearly upfront, no surprises."
    },
    {
        q: "Do you offer refunds?",
        a: "No refunds after kickoff (we start work immediately). But unlimited minor revisions ensure you're happy."
    },
    {
        q: "Are there hidden monthly fees?",
        a: "Zero hidden fees. You pay for the build. The only ongoing costs are your domain/hosting (which you own) or ad spend if you choose to run ads."
    },
    {
        q: "Why Syntory over a big agency?",
        a: "Agencies have overhead. You pay for their fancy office and ping pong tables. With us, you pay for senior-level design and strategy, deployed directly by the people doing the work."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Stable callback using functional setState (Vercel best practice: prevents stale closures)
    const toggleFaq = useCallback((index: number) => {
        setOpenIndex(prev => prev === index ? null : index);
    }, []);

    // Generate FAQ Schema for SEO rich snippets
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
            },
        })),
    };

    return (
        <Section className="max-w-3xl mx-auto !py-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h2 className="font-display text-4xl font-extrabold tracking-tighter text-ink-900 mb-12 text-center">Doubts? <br /> Let's clear them up.</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white border border-ink-100 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-ink-200/50 hover:border-ink-200"
                    >
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                            <span className="font-display font-bold text-lg text-ink-900 tracking-tight">{faq.q}</span>
                            {openIndex === index ? <Minus className="text-brand w-5 h-5 shrink-0" /> : <Plus className="text-ink-400 w-5 h-5 shrink-0" />}
                        </button>
                        <div
                            className={`px-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 font-light ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            {faq.a}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
