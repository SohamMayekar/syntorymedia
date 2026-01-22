import React from 'react';
import { Section } from './Section';
import { User, FileText, PenTool, Zap, Globe, Layout, MousePointer2 } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <Section id="process" className="">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-slate-400 font-mono font-medium tracking-widest text-xs uppercase mb-4 block">Process</span>
        <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-tight">
          How We Ship Your Site <br className="hidden md:block"/> in 2-3 Weeks
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Step 1: Kickoff Call */}
        <div className="flex flex-col group">
           {/* Graphic */}
           <div className="h-64 bg-white border border-slate-100 rounded-3xl mb-6 relative overflow-hidden flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-500">
              <div className="absolute inset-0 bg-slate-50/50"></div>
              {/* Back Card */}
              <div className="absolute w-24 h-24 bg-slate-800 rounded-2xl transform translate-x-6 translate-y-2 rotate-12 flex items-center justify-center shadow-lg opacity-80 transition-transform duration-500 group-hover:rotate-[15deg] group-hover:translate-x-8">
                  <FileText className="text-slate-300 w-10 h-10" />
              </div>
              {/* Front Card */}
              <div className="absolute w-24 h-24 bg-slate-900 rounded-2xl transform -translate-x-2 -translate-y-2 -rotate-6 flex items-center justify-center shadow-2xl z-10 border border-slate-700 transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:-translate-x-3 group-hover:-translate-y-4">
                  <User className="text-white w-10 h-10" />
              </div>
           </div>
           {/* Content */}
           <div className="px-2">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Kickoff Call</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                A quick call to understand your product, goals, and what you want the website to do.
              </p>
           </div>
        </div>

        {/* Step 2: Design Sprint */}
        <div className="flex flex-col group">
           <div className="h-64 bg-white border border-slate-100 rounded-3xl mb-6 relative overflow-hidden flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-500">
              {/* Fake UI Background */}
              <div className="absolute inset-0 bg-slate-50 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="absolute top-6 left-6 right-6 h-32 bg-white rounded-xl shadow-sm border border-slate-200"></div>
                 <div className="absolute bottom-6 left-6 w-1/2 h-20 bg-blue-50/50 rounded-xl border border-blue-100"></div>
                 <div className="absolute bottom-6 right-6 w-1/3 h-20 bg-purple-50/50 rounded-xl border border-purple-100"></div>
              </div>
              
              {/* Design Icon */}
              <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center shadow-2xl z-10 relative group-hover:scale-110 transition-transform duration-500 border border-slate-700">
                 <PenTool className="text-white w-9 h-9" />
                 {/* Cursor */}
                 <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-1.5 animate-bounce" style={{ animationDuration: '2s' }}>
                    <MousePointer2 className="w-4 h-4 text-primary fill-primary" />
                 </div>
              </div>
           </div>
           <div className="px-2">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Design Sprint</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                We design with obsession. We iterate, refine, and polish until we have the "best of the best" visual experience for you.
              </p>
           </div>
        </div>

        {/* Step 3: Build & Polish */}
        <div className="flex flex-col group">
           <div className="h-64 bg-white border border-slate-100 rounded-3xl mb-6 relative overflow-hidden flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-500">
              {/* Gradient BG */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white"></div>
              
              {/* Phone Mockup */}
              <div className="w-36 h-56 bg-white border-[6px] border-slate-200 rounded-[2rem] shadow-xl transform translate-y-12 flex flex-col overflow-hidden relative group-hover:translate-y-8 transition-transform duration-500">
                 <div className="h-full w-full bg-slate-50 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10"></div>
                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg z-10">
                        <Zap className="text-white w-7 h-7" />
                    </div>
                 </div>
                 {/* Notch/Island */}
                 <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-slate-200 rounded-full z-20"></div>
              </div>
           </div>
           <div className="px-2">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Build & Polish</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Once design is approved, we handle the build. We engineer a fast, high-performance site that works flawlessly.
              </p>
           </div>
        </div>

        {/* Step 4: Launch */}
        <div className="flex flex-col group">
           <div className="h-64 bg-white border border-slate-100 rounded-3xl mb-6 relative overflow-hidden flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-500">
              {/* Radial Gradient for Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-50 via-white to-white opacity-60"></div>

              {/* 3D Pill Button (Cleaned up) */}
              <div className="relative group/pill cursor-default">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="bg-gradient-to-b from-slate-700 to-slate-900 text-white px-6 py-3.5 rounded-full shadow-xl flex items-center gap-3 border-t border-slate-600 relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                    <Globe size={18} className="text-slate-300" />
                    <span className="font-mono text-sm tracking-wide text-slate-100 font-medium">yourwebsite.com</span>
                </div>
              </div>
           </div>
           <div className="px-2">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Launch</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                You get full access to everything. Ship it, rock it, grow it—you’re not locked to us.
              </p>
           </div>
        </div>

      </div>
    </Section>
  );
};