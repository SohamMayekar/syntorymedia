import React from 'react';
import { Section } from './Section';
import { Check } from 'lucide-react';
import { Button } from './Button';

interface PricingPlan {
    name: string;
    price: string;
    description: string;
    highlight?: boolean;
    features: string[];
}

// Static data hoisted outside component (Vercel best practice: avoid re-creation on every render)
const plans: PricingPlan[] = [
    {
        name: "The Signal",
        price: "₹12,990",
        description: "Stop using Linktree. Look like a pro immediately with a high-converting one-pager.",
        features: [
            "Single-page high-conversion design",
            "Lead capture architecture",
            "Blazing fast performance",
            "Essential SEO foundation",
            "Launch in ~7 days"
        ]
    },
    {
        name: "The Authority",
        price: "₹24,990",
        description: "For creators & businesses ready to turn traffic into revenue. Our most popular build.",
        highlight: true,
        features: [
            "5-7 page storytelling structure",
            "Mobile-first experience",
            "Deep SEO optimization",
            "Blog/Content CMS setup",
            "Launch in ~14 days"
        ]
    },
    {
        name: "The Empire",
        price: "₹49,990",
        description: "Full scale infrastructure. E-commerce, custom functionality, and no compromise.",
        features: [
            "10+ custom engineered pages",
            "Full E-commerce integration",
            "Advanced analytics & tracking",
            "Email automation systems",
            "Priority support & maintenance"
        ]
    }
];

export const Pricing: React.FC = () => {
    // Generate Pricing Schema for SEO
    const pricingSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: plans.map((plan, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Product',
                name: plan.name,
                description: plan.description,
                offers: {
                    '@type': 'Offer',
                    price: plan.price.replace(/[₹,]/g, ''),
                    priceCurrency: 'INR',
                    availability: 'https://schema.org/InStock',
                    seller: {
                        '@type': 'Organization',
                        name: 'Syntory Media',
                    },
                },
            },
        })),
    };

    return (
        <Section id="pricing" className="relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
            />
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-blue-500/10 rounded-full blur-[120px] -z-10"></div>

            <div className="text-center mb-16">
                <span className="text-slate-500 font-mono font-medium tracking-widest text-xs uppercase mb-6 block">Investment</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-8 max-w-xl mx-auto">
                    <span className="text-slate-900">Buy an asset.</span> <br />
                    <span className="bg-gradient-to-r from-[#071caf] via-blue-600 to-[#071caf] bg-clip-text text-transparent">Not an expense.</span>
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto font-sans text-lg">
                    Clear, transparent pricing. No retainer traps. You own the code, you own the domain, you own the equity.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col h-full group ${plan.highlight
                            ? 'bg-gradient-to-b from-white to-blue-50/50 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-200/50 scale-105 z-10'
                            : 'bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5'
                            }`}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#071caf] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest font-mono shadow-lg shadow-blue-600/30">
                                Best Value
                            </div>
                        )}

                        <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 mb-2">{plan.name}</h3>
                        <div className="flex items-baseline mb-4">
                            <span className={`font-display text-4xl font-bold tracking-tighter ${plan.highlight ? 'text-[#071caf]' : 'text-slate-900'}`}>{plan.price}</span>
                        </div>
                        <p className="text-slate-500 text-sm mb-8 h-12 leading-relaxed font-sans">{plan.description}</p>

                        <ul className="space-y-4 mb-10 flex-grow">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-sm text-slate-600 font-sans">
                                    <Check className={`w-4 h-4 mr-3 mt-0.5 shrink-0 ${plan.highlight ? 'text-[#071caf]' : 'text-emerald-500'}`} />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant={plan.highlight ? 'primary' : 'outline'}
                            className={`w-full mt-auto ${plan.highlight ? 'bg-[#071caf] hover:bg-[#0a24c7] border-0 shadow-lg shadow-blue-600/20' : ''}`}
                        >
                            Start Building
                        </Button>
                    </div>
                ))}
            </div>

            <p className="text-center text-slate-400 text-sm mt-16 max-w-2xl mx-auto font-sans leading-relaxed">
                No hidden fees. No "gotchas".
                <br />Pricing includes design, development, and standard deployment.
            </p>
        </Section>
    );
};
