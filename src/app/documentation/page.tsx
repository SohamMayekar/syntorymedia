import { Metadata } from 'next';
import { Book, FileText, Settings, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Documentation | Syntory Media',
    description: 'Client resources and documentation for Syntory Media projects.',
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: '/documentation',
    },
};

const docs = [
    {
        icon: FileText,
        title: 'Client Onboarding',
        description: 'Everything you need to know about starting your project with us.',
        href: '/contact'
    },
    {
        icon: Settings,
        title: 'Technical Guides',
        description: 'How to manage your CMS, handle updates, and interpret analytics.',
        href: '/contact'
    },
    {
        icon: Shield,
        title: 'Security & Compliance',
        description: 'Best practices for keeping your digital asset secure and compliant.',
        href: '/contact'
    },
    {
        icon: Book,
        title: 'Brand Guidelines',
        description: 'Resources for maintaining your brand consistency across platforms.',
        href: '/contact'
    }
];

export default function DocumentationPage() {
    return (
        <main className="min-h-screen bg-[var(--color-paper)] pt-32 pb-24">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-ink-900)] tracking-tighter mb-6">
                        Documentation
                    </h1>
                    <p className="text-[var(--color-ink-500)] text-xl max-w-2xl mx-auto">
                        Resources, guides, and documentation for our clients to get the most out of their digital assets.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {docs.map((doc, i) => (
                        <a
                            key={i}
                            href={doc.href}
                            className="group bg-white border border-[var(--color-ink-100)] rounded-3xl p-8 hover:border-[var(--color-brand)] hover:shadow-xl hover:shadow-[var(--color-brand)]/5 transition-all duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[var(--color-paper)] border border-[var(--color-ink-100)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <doc.icon className="text-[var(--color-ink-900)] w-7 h-7" />
                            </div>
                            <h3 className="font-display font-bold text-2xl text-[var(--color-ink-900)] mb-3 group-hover:text-[var(--color-brand)] transition-colors">
                                {doc.title}
                            </h3>
                            <p className="text-[var(--color-ink-500)] leading-relaxed">
                                {doc.description}
                            </p>
                        </a>
                    ))}
                </div>

                <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <p className="text-[var(--color-ink-400)] text-sm">
                        Can't find what you're looking for? <a href="/contact" className="text-[var(--color-brand)] font-semibold hover:underline">Contact Support</a>
                    </p>
                </div>
            </div>
        </main>
    );
}
