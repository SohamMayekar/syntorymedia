import React from 'react';
import { Section } from './Section';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <Section className="bg-white/30">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Testimonial 1 */}
        <div className="glass-panel p-12 rounded-3xl relative">
          <Quote className="text-primary/20 w-16 h-16 mb-8" />
          <p className="font-display text-2xl md:text-3xl text-slate-800 leading-snug mb-10 font-medium tracking-tight">
            "Syntory operates less like a vendor and more like a strategic arm of our company. They didn't just build a site; they re-architected how we capture leads."
          </p>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white">
                <img src="https://picsum.photos/id/64/100/100" alt="Betely Agency" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-bold text-slate-900 font-display text-lg">Betely Agency</p>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Brand Strategy</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="glass-panel p-12 rounded-3xl relative">
          <Quote className="text-primary/20 w-16 h-16 mb-8" />
          <p className="font-display text-2xl md:text-3xl text-slate-800 leading-snug mb-10 font-medium tracking-tight">
            "The difference in caliber was immediate. While other agencies discussed 'colors', Syntory discussed 'positioning'. The outcome has been transformative."
          </p>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white">
                <img src="https://picsum.photos/id/65/100/100" alt="Sarah Thampaer" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-bold text-slate-900 font-display text-lg">Sarah Thampaer</p>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Founder</p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};