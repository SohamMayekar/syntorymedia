'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export const Footer: React.FC = () => {
    return (
        <>
            {/* Gradient Spacer to fix hard transition - kept dark for footer contrast or can be updated if footer goes light */}
            <div className="w-full h-32 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none -mb-32 relative z-0"></div>

            <footer id="contact" className="bg-slate-900 text-white pt-32 pb-12 relative z-10">

                {/* Final CTA */}
                <div className="max-w-4xl mx-auto px-6 text-center mb-24">
                    <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[0.9]">
                        <span className="text-white">Your next client is</span> <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">judging your website.</span>
                    </h2>
                    <p className="text-slate-400 text-xl mb-12 font-light max-w-2xl mx-auto">
                        Don't let a generic template lose you the deal. Let's build a digital home that commands respect.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
                        <Button
                            size="lg"
                            className="w-full bg-[#071caf] hover:bg-[#0a24c7] text-white border-0 px-8 h-14 text-base font-semibold shadow-xl shadow-blue-600/30"
                            onClick={() => window.location.href = 'tel:+919511687723'}
                        >
                            Book an intro call
                        </Button>
                        <Button
                            size="lg"
                            className="w-full bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white px-8 h-14 text-base"
                            onClick={() => window.location.href = '/contact'}
                        >
                            Send us a message
                        </Button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 border-t border-slate-800/50 pt-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

                        {/* Brand Column */}
                        <div className="lg:col-span-2">
                            <Image
                                src="/logo-dark.svg"
                                alt="Syntory Media"
                                width={120}
                                height={40}
                                className="mb-6"
                            />
                            <p className="text-slate-400 max-w-xs mb-8 font-light leading-relaxed">
                                We help creators and brands escape the algorithm trap and build owned web assets.
                            </p>
                            <div className="flex space-x-4">
                                {[
                                    { Icon: Instagram, href: 'https://instagram.com/syntorymedia' },
                                    { Icon: Linkedin, href: 'https://www.linkedin.com/company/syntorymedia' },
                                    { Icon: Twitter, href: 'https://x.com/syntorymedia' },
                                    { Icon: Youtube, href: 'https://youtube.com/@syntorymedia' }
                                ].map(({ Icon, href }, i) => (
                                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 hover:text-white transition-all text-slate-400 border border-slate-700/50">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="font-display font-bold text-lg text-white mb-6 tracking-tight">Company</h4>
                            <ul className="space-y-4 text-slate-400 text-sm font-sans">
                                <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
                                <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
                                <li><Link href="/#work" className="hover:text-white transition-colors">Work</Link></li>
                                <li><Link href="/#team" className="hover:text-white transition-colors">Team</Link></li>
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h4 className="font-display font-bold text-lg text-white mb-6 tracking-tight">Support</h4>
                            <ul className="space-y-4 text-slate-400 text-sm font-sans">
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                                <li><Link href="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                                <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div>
                            <h4 className="font-display font-bold text-lg text-white mb-6 tracking-tight">Legal</h4>
                            <ul className="space-y-4 text-slate-400 text-sm font-sans">
                                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs font-mono tracking-wider">
                        <p>© {new Date().getFullYear()} SYNTORY MEDIA. ALL RIGHTS RESERVED.</p>
                        <p>Designed with ❤️ in Mumbai</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
