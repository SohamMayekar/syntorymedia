'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    size = 'md',
    children,
    icon = false,
    ...props
}) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };

        const x = (clientX - (left + width / 2)) * 0.35; // Magnetic strength
        const y = (clientY - (top + height / 2)) * 0.35;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const variants = {
        primary: "bg-slate-900 text-white border border-slate-900",
        outline: "bg-transparent text-slate-900 border border-slate-200 hover:bg-slate-50",
        ghost: "bg-transparent text-slate-600 hover:text-slate-900 border-transparent hover:bg-slate-50",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={cn(
                "relative rounded-full font-medium transition-colors duration-300 flex items-center gap-2 group overflow-hidden",
                variants[variant],
                sizes[size],
                className
            )}
        >
            <span className={cn(
                "relative z-10 flex items-center gap-2 transition-colors duration-300",
                variant === 'primary' && "group-hover:text-white"
            )}>
                {children}
                {icon && <ArrowRight size={16} className={cn("transition-transform group-hover:translate-x-1", variant === 'primary' && "group-hover:text-white")} />}
            </span>

            {/* Fill Effect for Primary */}
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-slate-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.23,1,0.32,1)]" />
            )}
        </motion.button>
    );
};
