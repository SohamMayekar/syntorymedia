'use client';

import React, { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';

// Static data hoisted outside component (Vercel best practice: avoid re-creation on every render)
const navLinks = [
    { name: 'Why Syntory', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#work' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Stable callbacks using functional setState (Vercel best practice: prevents stale closures)
    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    return (
        <>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-5xl transition-all duration-300">
                <div className="glass-premium rounded-full px-4 py-[7px] flex items-center justify-between gap-6">

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 pl-2">
                        <div className="relative w-28 md:w-32 h-8">
                            <Image
                                src="/logo.svg"
                                alt="Syntory"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium font-sans text-ink-500 hover:text-ink-900 hover:bg-ink-100/50 px-4 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Action */}
                    <div className="flex items-center gap-2 pl-1">
                        <Button
                            size="sm"
                            className="rounded-full px-6 py-1.5 text-xs font-semibold hidden md:flex shadow-none hover:shadow-lg hover:shadow-brand/10 transition-all border border-transparent hover:border-brand/10 h-auto whitespace-nowrap bg-ink-900 text-white"
                            onClick={() => window.location.href = 'tel:+919511687723'}
                        >
                            Call Us Now
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="min-w-[44px] min-h-[44px] p-3 text-ink-500 hover:text-ink-900 focus:outline-none md:hidden bg-transparent hover:bg-ink-100 rounded-full transition-colors flex items-center justify-center"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                </div>
            </nav>

            {/* Mobile Menu Overlay - Using ternary instead of && (Vercel best practice: explicit conditional rendering) */}
            {isMobileMenuOpen ? (
                <div className="fixed inset-0 z-40 bg-[#fdf6f0]/98 backdrop-blur-3xl flex flex-col items-center justify-center pt-20 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] animate-fade-in-up">
                    <div className="absolute top-6 right-[5%]">
                        {/* Close button is handled by the Navbar which sits on top z-50 */}
                    </div>

                    <div className="flex flex-col items-center space-y-6">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={closeMobileMenu}
                                className="text-3xl font-display font-bold text-slate-900 tracking-tight hover:text-primary transition-colors"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-8">
                            <Button size="lg" className="text-lg px-10 py-4" onClick={() => {
                                closeMobileMenu();
                                window.location.href = 'tel:+919511687723';
                            }}>
                                Call Us Now
                            </Button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};
