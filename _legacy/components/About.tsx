import React from 'react';
import { Section } from './Section';
import { MousePointer2, MessageSquare, CheckCircle2, Layout, Smartphone, Globe } from 'lucide-react';
import { Button } from './Button';

export const About: React.FC = () => {
  return (
    <Section id="about">
      {/* Header */}
      <div className="text-center mb-16 md:mb-24">
        <span className="text-primary font-mono font-medium tracking-widest text-xs uppercase mb-4 block">Benefits</span>
        <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-tight">
          Why Fast-Moving <br className="hidden md:block" /> Founders Pick Us
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Card 1: Designed to Convert */}
        <div className="group relative bg-white rounded-3xl p-2 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
          {/* Graphic Area */}
          <div className="h-64 bg-slate-50 rounded-2xl mb-8 relative overflow-hidden flex items-center justify-center">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
             
             <div className="relative z-10 flex flex-col items-center gap-3 transform group-hover:scale-105 transition-transform duration-500">
                {/* Pill 1 */}
                <div className="bg-slate-800/80 backdrop-blur text-white px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 translate-y-2 opacity-60 scale-90 border border-slate-600/50">
                    <Layout size={14} className="text-slate-300" />
                    <span className="text-sm font-medium">Clarity first</span>
                </div>
                 {/* Pill 2 (Main) */}
                <div className="bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 z-10 border border-slate-700">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span className="text-base font-bold">Trust-focused</span>
                </div>
                 {/* Pill 3 */}
                <div className="bg-slate-800/80 backdrop-blur text-white px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 -translate-y-2 opacity-60 scale-90 border border-slate-600/50">
                    <MousePointer2 size={14} className="text-slate-300" />
                    <span className="text-sm font-medium">Action-driven</span>
                </div>
             </div>
          </div>
          
          {/* Text Area */}
          <div className="px-6 pb-8">
            <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 mb-3">Designed to convert</h3>
            <p className="text-slate-500 leading-relaxed font-light text-sm md:text-base">
              Fund-ready sites that turn traffic into demos and signups. Clear product story & credible authority.
            </p>
          </div>
        </div>

        {/* Card 2: Built fast, without drama */}
        <div className="group relative bg-white rounded-3xl p-2 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
          {/* Graphic Area */}
          <div className="h-64 bg-slate-50 rounded-2xl mb-8 relative overflow-hidden flex items-center justify-center">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

             <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-500">
                {/* Dark Card */}
                <div className="bg-slate-900 text-white p-5 rounded-xl shadow-2xl w-56 border border-slate-800">
                    <div className="flex gap-1.5 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="space-y-2 mb-2">
                        <div className="h-1.5 bg-slate-700 rounded w-3/4 opacity-50"></div>
                        <div className="h-1.5 bg-slate-700 rounded w-1/2 opacity-50"></div>
                    </div>
                    <div className="mt-2 p-3 bg-slate-800 rounded border border-slate-700 text-center relative overflow-hidden">
                        <span className="text-xs font-medium text-white relative z-10">Your Next Site<br/>Starts Here.</span>
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                    </div>
                    
                    {/* Cursors */}
                    <div className="absolute -right-6 top-6 bg-white text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-lg flex items-center gap-1 animate-pulse border border-slate-100">
                        <MessageSquare size={10} className="text-primary" />
                        <span>LGTM!</span>
                    </div>
                    <div className="absolute -right-8 top-12 drop-shadow-lg">
                      <MousePointer2 className="text-primary fill-primary stroke-white" size={24} />
                    </div>

                     <div className="absolute -left-6 bottom-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg border border-primary-dark">
                        <span>Deploying...</span>
                    </div>
                     <div className="absolute -left-8 bottom-8 drop-shadow-lg">
                        <MousePointer2 className="text-slate-400 fill-slate-400 stroke-white transform rotate-90" size={24} />
                     </div>
                </div>
             </div>
          </div>

          {/* Text Area */}
          <div className="px-6 pb-8">
            <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 mb-3">Built fast, without drama</h3>
            <p className="text-slate-500 leading-relaxed font-light text-sm md:text-base">
              2-3 week sprint from call to live site. No back-and-forth, polished code, and performant.
            </p>
          </div>
        </div>

        {/* Card 3: Progress every single day */}
        <div className="group relative bg-white rounded-3xl p-2 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
          {/* Graphic Area */}
          <div className="h-64 bg-slate-50 rounded-2xl mb-8 relative overflow-hidden flex items-center justify-center">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

             <div className="relative z-10 flex flex-col gap-3 w-48 group-hover:gap-4 transition-all duration-500">
                {/* Notification 1 */}
                <div className="bg-white/90 backdrop-blur border border-slate-200 p-3 rounded-xl shadow-md flex items-center gap-3 transform -rotate-2 opacity-60 scale-95">
                     <div className="bg-slate-100 p-1.5 rounded-lg">
                        <Smartphone size={14} className="text-slate-500" />
                     </div>
                     <div className="w-full">
                        <div className="h-1.5 bg-slate-300 rounded w-16 mb-1"></div>
                        <div className="h-1.5 bg-slate-100 rounded w-10"></div>
                     </div>
                </div>

                {/* Notification 2 */}
                <div className="bg-white/90 backdrop-blur border border-slate-200 p-3 rounded-xl shadow-md flex items-center gap-3 transform rotate-1 opacity-80 translate-x-2 scale-95">
                     <div className="bg-blue-50 p-1.5 rounded-lg">
                        <Layout size={14} className="text-blue-500" />
                     </div>
                     <div className="w-full">
                        <div className="h-1.5 bg-slate-300 rounded w-20 mb-1"></div>
                        <div className="h-1.5 bg-slate-100 rounded w-12"></div>
                     </div>
                </div>

                 {/* Notification 3 (Active) */}
                <div className="bg-slate-900 text-white p-3 rounded-xl shadow-2xl flex items-center gap-3 transform -rotate-1 scale-105 border border-slate-700">
                     <div className="bg-green-500/20 p-1.5 rounded-lg">
                        <Globe size={14} className="text-green-400" />
                     </div>
                     <div>
                        <span className="text-xs font-bold block tracking-tight">New version is live.</span>
                        <span className="text-[10px] text-slate-400 block font-mono">Just now</span>
                     </div>
                </div>
             </div>
          </div>

          {/* Text Area */}
          <div className="px-6 pb-8">
            <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 mb-3">Progress every single day</h3>
            <p className="text-slate-500 leading-relaxed font-light text-sm md:text-base">
              Daily updates and Looms. See what's shipped, what's next, no chasing.
            </p>
          </div>
        </div>

      </div>

      <div className="mt-16 text-center">
         <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Book a Strategy Call
         </Button>
      </div>

    </Section>
  );
};