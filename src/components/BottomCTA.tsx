'use client';

import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

/**
 * BottomCTA - iOS-style floating action button (FAB)
 * Small persistent button in lower left, appears after scrolling past hero
 */
export const BottomCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const heroHeight = window.innerHeight * 0.5; // After 50% of viewport
            const footerBuffer = 300; // Hide before footer
            const docHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;
            const distanceFromBottom = docHeight - (scrollY + viewportHeight);

            // Show after hero, hide near footer
            setIsVisible(scrollY > heroHeight && distanceFromBottom > footerBuffer);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Only render on mobile (CSS handles visibility)
    return (
        <button
            onClick={() => window.location.href = 'tel:+919511687723'}
            className={`
                fixed bottom-6 right-4 z-50
                md:hidden
                h-12 px-5
                bg-[#071caf] hover:bg-[#0a24c7] active:bg-[#050e6b]
                text-white font-semibold text-sm
                rounded-full
                flex items-center justify-center gap-2
                transition-all duration-300 ease-out
                shadow-xl shadow-blue-600/30
                ${isVisible
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-4 opacity-0 scale-90 pointer-events-none'}
            `}
            aria-label="Call Us Now"
        >
            <Phone size={18} />
            Call Us Now
        </button>
    );
};
