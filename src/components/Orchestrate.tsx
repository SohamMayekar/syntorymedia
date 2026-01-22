'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface OrchestrateProps {
    children: React.ReactNode;
    staggerDelay?: number;
    delay?: number;
    className?: string; // Allow passing standard CSS classes
}

const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: (custom = {}) => ({
        opacity: 1,
        transition: {
            staggerChildren: custom.staggerDelay || 0.1,
            delayChildren: custom.delay || 0,
        },
    }),
};

const itemVars: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // "Out Cubic"ish
        },
    },
};

/**
 * Orchestrate
 * Wraps children and animates them in sequence when they enter the viewport.
 * 
 * Usage:
 * <Orchestrate>
 *   <div className="motion-item">Item 1</div>
 *   <div className="motion-item">Item 2</div>
 * </Orchestrate>
 * 
 * Note: Direct children must be motion components OR use the `motion-item` 
 * pattern if we were strictly cloning, but here `motion.div` handles context propagation.
 * Actually, distinct `motion.div` children inherit variants. 
 * So we will expose `Orchestrate.Item` for cleaner usage.
 */
export const Orchestrate = ({ children, staggerDelay = 0.1, delay = 0, className }: OrchestrateProps) => {
    return (
        <motion.div
            variants={containerVars}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={{ staggerDelay, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const OrchestrateItem = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <motion.div variants={itemVars} className={className}>
            {children}
        </motion.div>
    );
};
