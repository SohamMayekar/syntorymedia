import React from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, containerClassName = '' }) => {
    return (
        <section id={id} className={`py-12 md:py-32 relative ${className}`}>
            <div className={`max-w-7xl mx-auto px-6 md:px-8 ${containerClassName}`}>
                {children}
            </div>
        </section>
    );
};
