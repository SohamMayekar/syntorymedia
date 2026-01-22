import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Why Syntory', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-5xl transition-all duration-300">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg shadow-black/5 rounded-full px-3 py-2 md:px-2 md:py-2 flex items-center justify-between md:gap-2">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer pl-4 md:pl-6 pr-4" onClick={() => window.scrollTo(0,0)}>
            <span className="font-display font-bold text-xl tracking-tighter text-slate-900">
              Syntory<span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center bg-white/50 rounded-full border border-white/20 px-2 py-1 shadow-inner">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium font-sans text-slate-600 hover:text-slate-900 hover:bg-white px-4 py-2 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-2 pl-2 md:pr-1">
            <Button 
                size="sm" 
                className="rounded-full px-6 py-2.5 text-sm hidden md:flex shadow-lg shadow-primary/20" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Build
            </Button>
            
             {/* Mobile Menu Button */}
             <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 text-slate-600 hover:text-slate-900 focus:outline-none md:hidden bg-white rounded-full shadow-sm border border-slate-100"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#fdf6f0]/95 backdrop-blur-3xl flex flex-col items-center justify-center animate-fade-in-up">
           <div className="absolute top-6 right-[5%]">
              {/* Close button is handled by the Navbar which sits on top z-50 */}
           </div>
           
           <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display font-bold text-slate-900 tracking-tight hover:text-primary transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-8">
              <Button size="lg" className="text-lg px-10 py-4" onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};