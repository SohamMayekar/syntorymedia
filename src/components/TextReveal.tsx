'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export const TextReveal = ({ children, className, delay = 0, as = 'h1' }: { children: string, className?: string, delay?: number, as?: React.ElementType }) => {
    // Split words
    const words = children.split(' ');

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: {
                type: 'spring',
                damping: 40,
                stiffness: 100,
                mass: 2,
            } as any, // Cast to any to avoid strict union mismatch in this specific setup
        },
        hidden: {
            opacity: 0,
            y: 40,
            rotate: 4,
            transition: {
                type: 'spring',
                damping: 40,
                stiffness: 100,
                mass: 2,
            } as any,
        },
    };

    const Wrapper = as as any; // Cast to any for Framer Motion component usage

    return (
        <Wrapper
            className={className}
            style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        >
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="flex flex-wrap justify-center"
            >
                {words.map((word, index) => (
                    <span key={index} style={{ overflow: 'hidden', display: 'inline-block', marginRight: '0.25em', paddingBottom: '0.1em' }}>
                        <motion.span variants={child} style={{ display: 'inline-block' }}>
                            {word}
                        </motion.span>
                    </span>
                ))}
            </motion.div>
        </Wrapper>
    );
};
