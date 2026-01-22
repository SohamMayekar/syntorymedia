import React from 'react';
import { Section } from './Section';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { PricingPlan } from '../types';

export const Pricing: React.FC = () => {
  
  const plans: PricingPlan[] = [
    {
      name: "The Signal",
      price: "₹14,990",
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
      price: "₹39,990",
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
      price: "₹79,990",
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

  return (
    <Section id="pricing">
      <div className="text-center mb-16">
        <span className="text-primary font-mono font-medium tracking-widest text-xs uppercase mb-4 block">Investment</span>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 mb-8">Buy an asset. <br/> Not an expense.</h2>
        <p className="text-slate-600 max-w-xl mx-auto font-light text-lg">
          Clear, transparent pricing. No retainer traps. You own the code, you own the domain, you own the equity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`relative p-8 rounded-3xl transition-all duration-300 ${
              plan.highlight 
                ? 'bg-white shadow-xl ring-1 ring-slate-200 scale-105 z-10' 
                : 'glass-panel hover:bg-white/60'
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest font-mono">
                Best Value
              </div>
            )}
            
            <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-4">
              <span className="font-display text-4xl font-extrabold tracking-tighter text-slate-900">{plan.price}</span>
            </div>
            <p className="text-slate-500 text-sm mb-8 h-12 leading-snug font-light">{plan.description}</p>
            
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-slate-700">
                  <Check className="w-4 h-4 text-green-500 mr-3 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button 
              variant={plan.highlight ? 'primary' : 'outline'} 
              className="w-full"
            >
              Start Building
            </Button>
          </div>
        ))}
      </div>
      
      <p className="text-center text-slate-500 text-sm mt-16 max-w-2xl mx-auto font-light leading-relaxed">
        No hidden fees. No "gotchas". 
        <br/>Pricing includes design, development, and standard deployment.
      </p>
    </Section>
  );
};