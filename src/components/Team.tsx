import React from 'react';
import { Section } from './Section';
import Image from 'next/image';

export const Team: React.FC = () => {
    const team = [
        {
            name: "Soham Mayekar",
            role: "Team Leader",
            image: "/teams/1.png"
        },
        {
            name: "Devesh Kushe",
            role: "Creative Strategy",
            image: "/teams/2.png"
        },
        {
            name: "Rudraksha Patil",
            role: "Operations Manager",
            image: "/teams/3.png"
        },
        {
            name: "Chaitali Raikar",
            role: "Client Manager",
            image: "/teams/4.png"
        }
    ];

    return (
        <Section id="team">
            <div className="text-center mb-20">
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 leading-tight">
                    <span className="text-slate-900">The team behind</span> <br />
                    <span className="bg-gradient-to-r from-[#071caf] via-blue-600 to-[#071caf] bg-clip-text text-transparent">your growth website</span>
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto font-light text-lg">
                    A lean team obsessed with clarity, aesthetics, and performance. We don't outsource quality.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
                {team.map((member, index) => (
                    <div key={index} className="text-center group">
                        <div className="relative w-24 h-24 md:w-40 md:h-40 mx-auto mb-3 md:mb-6 rounded-full overflow-hidden border-2 md:border-4 border-white shadow-lg md:shadow-xl group-hover:scale-105 transition-transform duration-300 bg-slate-200">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover md:grayscale group-hover:grayscale-0 transition-all duration-500"
                                sizes="(max-width: 768px) 96px, 160px"
                            />
                        </div>
                        <h3 className="font-display text-base md:text-xl font-bold tracking-tight text-slate-900 mb-1">{member.name}</h3>
                        <p className="text-[10px] font-medium text-primary uppercase tracking-widest font-mono">{member.role}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
