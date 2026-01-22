import React from 'react';
import { Button } from './Button';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12 rounded-t-[3rem] mt-24">
      
      {/* Final CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
        <h2 className="font-display text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[0.9]">
          Your next client is <br className="hidden md:block"/> judging your website.
        </h2>
        <p className="text-slate-400 text-xl mb-12 font-light max-w-2xl mx-auto">
          Don't let a generic template lose you the deal. Let's build a digital home that commands respect.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
          <Button 
            size="lg" 
            className="w-full bg-white text-slate-900 hover:bg-gray-100 border-2 border-white px-8 h-16 text-lg"
            onClick={() => console.log('Book call')}
          >
            Book an intro call
          </Button>
          <Button 
            size="lg" 
            className="w-full bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 h-16 text-lg"
            onClick={() => window.location.href = 'mailto:hello@syntorymedia.com'}
          >
            Send us an email
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800 pt-20">
        <div className="grid md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <span className="font-display font-bold text-3xl tracking-tighter text-white mb-6 block">
              Syntory<span className="text-blue-500">.</span>
            </span>
            <p className="text-slate-400 max-w-xs mb-8 font-light leading-relaxed">
              We help creators and brands escape the algorithm trap and build owned web assets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl text-white mb-6 tracking-tight">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-light">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <a href="mailto:hello@syntorymedia.com" className="hover:text-white transition-colors">hello@syntorymedia.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <a href="tel:+919511687723" className="hover:text-white transition-colors">+91 9511687723</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="shrink-0 mt-1" />
                <span>Hiranandani, Mumbai, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl text-white mb-6 tracking-tight">Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-light">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Plans</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-600 text-xs font-mono tracking-wider">
          © {new Date().getFullYear()} SYNTORY MEDIA. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};