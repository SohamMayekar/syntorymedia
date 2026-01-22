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
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 mb-6">Meet the minds <br /> behind the magic.</h2>
                <p className="text-slate-600 max-w-2xl mx-auto font-light text-lg">
                    A lean team obsessed with clarity, aesthetics, and performance. We don't outsource quality.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {team.map((member, index) => (
                    <div key={index} className="text-center group">
                        <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300 bg-slate-200">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                sizes="(max-width: 768px) 160px, 160px"
                            />
                        </div>
                        <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 mb-1">{member.name}</h3>
                        <p className="text-[10px] font-medium text-primary uppercase tracking-widest font-mono">{member.role}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
