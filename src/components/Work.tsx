'use client';

import React from 'react';
import { Section } from './Section';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from './Button';

interface Project {
    title: string;
    category: string;
    bgColor: string;
    image: string;
    link: string;
}

// Static data hoisted outside component (Vercel best practice: avoid re-creation on every render)
const projects: Project[] = [
    {
        title: 'EPF Buddy',
        category: 'Agency, Consultancy',
        bgColor: 'bg-indigo-500', // Matches verified blue brand color
        image: '/work/epf-buddy.png',
        link: 'https://epfbuddy.com',
    },
    {
        title: 'Mrmisu Cafe',
        category: 'Cafe, Restaurant',
        bgColor: 'bg-indigo-500',
        image: '/work/mrmisu.png',
        link: 'https://mrmisu.vercel.app',
    },
    {
        title: 'KitCat Cafe',
        category: 'Cafe, Restaurant',
        bgColor: 'bg-indigo-500',
        image: '/work/kitcatcafe.png',
        link: 'https://kitcatcafe.vercel.app/',
    },
    {
        title: 'Sathes All Day Diner',
        category: 'Diner, Restaurant',
        bgColor: 'bg-indigo-500',
        image: '/work/sathesdiner.png',
        link: 'https://sathesdiner.vercel.app/',
    }
];

export const Work: React.FC = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    // Handle scroll to update active dot indicator
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const cardWidth = scrollContainerRef.current.offsetWidth * 0.85; // 85% card width
            const newIndex = Math.round(scrollLeft / cardWidth);
            setActiveIndex(Math.min(newIndex, projects.length - 1));
        }
    };

    return (
        <Section id="work" className="relative">
            <div className="text-center mb-12 md:mb-24">
                <span className="text-slate-500 font-mono font-semibold tracking-wider md:tracking-[0.15em] text-sm md:text-xs uppercase mb-4 block">Selected Results</span>
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                    <span className="text-slate-900">Some of Our</span> <span className="bg-gradient-to-r from-[#071caf] via-blue-600 to-[#071caf] bg-clip-text text-transparent">Best Work</span>
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto font-sans text-base md:text-lg px-2">
                    Websites we shipped for VCs, SaaS teams, and ambitious startups.
                </p>
            </div>

            {/* Mobile: Horizontal Carousel */}
            <div className="md:hidden">
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 pb-4"
                >
                    {projects.map((project, index) => (
                        <a
                            href={project.link}
                            key={index}
                            className="group block cursor-pointer flex-shrink-0 w-[85%] snap-start"
                        >
                            {/* Card Container */}
                            <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden ${project.bgColor} mb-4`}>
                                {/* Inner Content (The Browser Window) */}
                                <div className="absolute inset-4">
                                    <div className="w-full h-full bg-white rounded-t-2xl shadow-2xl overflow-hidden border border-white/20">
                                        {/* Fake Browser Bar */}
                                        <div className="h-8 bg-slate-900/5 backdrop-blur flex items-center gap-2 px-4 border-b border-black/5">
                                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                        </div>
                                        {/* Image */}
                                        <div className="relative w-full h-[calc(100%-2rem)]">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover object-top"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="pl-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="font-display text-xl font-bold tracking-tight text-slate-900">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight size={18} className="text-slate-400" />
                                </div>
                                <p className="text-slate-500 font-sans text-sm">{project.category}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                    {projects.map((_, index) => (
                        <div
                            key={index}
                            className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop: Original Grid Layout */}
            <div className="hidden md:grid grid-cols-2 gap-x-8 gap-y-20 max-w-7xl mx-auto px-4">
                {projects.map((project, index) => (
                    <a href={project.link} key={index} className="group block cursor-pointer perspective-1000">
                        {/* 3D Card Container */}
                        <div className={`relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden ${project.bgColor} mb-8 transition-transform duration-500 ease-out preserve-3d group-hover:scale-[1.02]`}>

                            {/* Inner Content (The Browser Window) */}
                            <div className="absolute inset-x-8 -bottom-12 top-16 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform rotate-y-[-12deg] rotate-x-[5deg] translate-z-0 group-hover:rotate-y-0 group-hover:rotate-x-0 group-hover:translate-y-[-10px]">
                                <div className="w-full h-full bg-white rounded-t-2xl shadow-2xl overflow-hidden border border-white/20">
                                    {/* Fake Browser Bar */}
                                    <div className="h-8 bg-slate-900/5 backdrop-blur flex items-center gap-2 px-4 border-b border-black/5">
                                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    </div>
                                    {/* Image */}
                                    <div className="relative w-full h-[calc(100%-2rem)]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Reflection/Sheen Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>

                        {/* Text Content (Outside the card, per video) */}
                        <div className="pl-2">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <ArrowUpRight size={20} className="text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                            <p className="text-slate-500 font-sans text-sm">{project.category}</p>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-12 md:mt-24 text-center">
                <Button size="lg" variant="outline" className="rounded-full px-8" onClick={() => window.location.href = '/contact'}>
                    View All Projects
                </Button>
            </div>

        </Section>
    );
};
