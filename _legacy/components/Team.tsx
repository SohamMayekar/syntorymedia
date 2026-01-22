import React from 'react';
import { Section } from './Section';

export const Team: React.FC = () => {
  const team = [
    {
      name: "Soham Mayekar",
      role: "Web & Content Head",
      image: "https://picsum.photos/id/177/300/300"
    },
    {
      name: "Devesh Kushe",
      role: "Creative Strategy",
      image: "https://picsum.photos/id/1005/300/300"
    },
    {
      name: "Rudraksha Patil",
      role: "Operations & Client Head",
      image: "https://picsum.photos/id/338/300/300"
    }
  ];

  return (
    <Section id="team">
      <div className="text-center mb-20">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 mb-6">Meet the minds <br/> behind the magic.</h2>
        <p className="text-slate-600 max-w-2xl mx-auto font-light text-lg">
          A lean team obsessed with clarity, aesthetics, and performance. We don't outsource quality.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {team.map((member, index) => (
          <div key={index} className="text-center group">
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
               <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 mb-2">{member.name}</h3>
            <p className="text-xs font-medium text-primary uppercase tracking-widest font-mono">{member.role}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};