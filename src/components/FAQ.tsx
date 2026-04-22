'use client';

import React, { useState, useCallback } from 'react';
import { Section } from './Section';
import { Plus, Minus } from 'lucide-react';

// Static data hoisted outside component (Vercel best practice: avoid re-creation on every render)
const faqs = [
    {
        q: "What is a conversion-focused website?",
        a: "It is a site designed to explain your offer quickly, build trust, and guide visitors to the next step instead of just looking attractive."
    },
    {
        q: "Can we start with a template and upgrade later?",
        a: "Yes, but most brands come to us when that approach starts leaking trust and lead quality. We build a conversion-focused asset you fully own so growth compounds long term."
    },
    {
        q: "Who is this best for?",
        a: "Founder-led service businesses and creator-led brands that already have some attention and want a website that improves trust, positioning, and lead quality."
    },
    {
        q: "Do you write the website copy?",
        a: "Yes. We shape conversion copy with your offer and audience so the site is clear, persuasive, and easier to buy from."
    },
    {
        q: "Do you handle SEO and schema?",
        a: "Yes. We build the page structure, metadata, headings, and schema so the site is easier for search engines and answer engines to understand."
    },
    {
        q: "Can you redesign my existing website?",
        a: "Yes. We can rebuild an existing site, refine the messaging, and improve the user flow without starting from scratch if that is the right move."
    },
    {
        q: "How fast can we launch?",
        a: "Most projects launch in 2-3 weeks once scope is aligned. You get a clear timeline before kickoff, plus daily progress updates while we build."
    },
    {
        q: "How much does a custom website cost?",
        a: "Pricing depends on scope, pages, copy needs, and integrations. We review the project first, then send a custom proposal instead of forcing a fixed package."
    },
    {
        q: "How does payment work?",
        a: "We work on clear milestone payments with scope confirmed before kickoff. You always know what is included and when it will be delivered."
    },
    {
        q: "What if we are not a fit?",
        a: "We say that early. If goals, timeline, or budget are misaligned, we tell you quickly instead of forcing a poor engagement."
    },
    {
        q: "Are there hidden monthly fees?",
        a: "No hidden fees. Build costs are scoped upfront. Ongoing costs are your own tools like hosting, domain, or optional growth support."
    },
    {
        q: "Why choose Syntory over a larger agency?",
        a: "You work directly with the people doing the strategy, copy, design, and build. That keeps communication tight and execution focused."
    },
    {
        q: "What do I get after kickoff?",
        a: "You get a clear scope, timeline, copy direction, design progress, and a site that is built to be trusted and acted on."
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
        <Section id="faq" className="max-w-3xl mx-auto !py-12 md:!py-16 px-4 md:px-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h2 className="font-display text-4xl font-extrabold tracking-tighter text-ink-900 mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
                Each answer is written in plain language so visitors, search engines, and AI systems can quickly understand what we do and who we help.
            </p>
            <div className="space-y-3 md:space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`bg-white border border-ink-100 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-ink-200/50 hover:border-ink-200 ${openIndex === index ? 'ring-1 ring-blue-100 bg-blue-50/30' : ''}`}
                    >
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none cursor-pointer min-h-[48px]"
                        >
                            <span className="font-display font-bold text-base md:text-lg text-ink-900 tracking-tight pr-4">{faq.q}</span>
                            {openIndex === index ? <Minus className="text-brand w-5 h-5 shrink-0" /> : <Plus className="text-ink-400 w-5 h-5 shrink-0" />}
                        </button>
                        <div
                            className={`px-4 md:px-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 font-light text-sm md:text-base ${openIndex === index ? 'max-h-48 pb-4 md:pb-6 opacity-100' : 'max-h-0 opacity-0'
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
