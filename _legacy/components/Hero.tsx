import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-orange-100/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[11px] font-mono font-medium tracking-widest text-slate-600 uppercase">Premium Web Design & Development</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[0.9] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Stop building on <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">rented land.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
            Social media algorithms change. Your website is the only asset you truly own. <strong className="font-medium text-slate-900">We build authority-generating digital homes</strong> that turn traffic into high-ticket clients.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Your Project
            </Button>
            <Button variant="secondary" size="lg" className="group" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
              View Portfolio
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

        </div>
      </div>

      {/* Floating Card Element (Decorative) */}
      <div className="absolute hidden lg:block right-10 top-1/3 transform rotate-[-6deg] animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="glass-card p-6 rounded-2xl w-64">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-green-100 rounded-lg text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            </div>
            <div>
              <p className="text-base font-bold font-display tracking-tight text-slate-900">Conversion Rate</p>
              <p className="text-xs font-mono text-slate-500">+142% Increase</p>
            </div>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-3/4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};