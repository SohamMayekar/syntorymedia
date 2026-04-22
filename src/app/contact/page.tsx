import { ContactForm } from '@/components/ContactForm';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Syntory Media | Website Strategy and Pricing',
    description: 'Contact Syntory Media for a custom website strategy, project scope, and pricing discussion for founder-led brands.',
    alternates: {
        canonical: '/contact',
    },
};

interface ContactPageProps {
    searchParams: Promise<{
        engagement?: string;
        plan?: string;
        intent?: string;
    }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
    const params = await searchParams;
    const initialEngagement = params.engagement || params.plan || '';
    const initialIntent = params.intent || 'growth-plan';

    return (
        <main className="min-h-screen bg-[var(--color-paper)] relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">

            {/* Ambient Background (Light Mode) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/40 blur-[100px] rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-100/40 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Mobile Layout: Title → Form → Details */}
                <div className="lg:hidden space-y-8">
                    {/* 1. Title */}
                    <div className="animate-fade-in-up">
                        <h1 className="font-display text-4xl font-bold text-[var(--color-ink-900)] tracking-tighter leading-tight mb-4">
                            Contact us <br />
                            <span className="text-[var(--color-brand)]">for your project.</span>
                        </h1>
                        <p className="text-[var(--color-ink-500)] text-base leading-relaxed font-medium">
                            Tell us where leads are leaking and we will map the fastest path to stronger trust and better lead quality.
                        </p>
                    </div>

                    {/* 2. Contact Form */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '50ms' }}>
                        <ContactForm initialEngagement={initialEngagement} initialIntent={initialIntent} />
                    </div>

                    {/* 3. Contact Details */}
                    <div className="space-y-5 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-white border border-[var(--color-ink-100)] flex items-center justify-center shrink-0 shadow-sm">
                                <Mail className="text-[var(--color-ink-900)] w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="text-[var(--color-ink-900)] font-bold text-base mb-0.5">Chat with us</h3>
                                <p className="text-[var(--color-ink-500)] text-xs mb-1">Expect a response within 1 business day.</p>
                                <a href="mailto:hello@syntorymedia.com" className="text-[var(--color-brand)] font-semibold text-sm flex items-center gap-2">
                                    hello@syntorymedia.com <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-white border border-[var(--color-ink-100)] flex items-center justify-center shrink-0 shadow-sm">
                                <Phone className="text-[var(--color-ink-900)] w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="text-[var(--color-ink-900)] font-bold text-base mb-0.5">Call us</h3>
                                <p className="text-[var(--color-ink-500)] text-xs mb-1">Mon-Fri from 9am to 6pm.</p>
                                <a href="tel:+919511687723" className="text-[var(--color-brand)] font-semibold text-sm flex items-center gap-2">
                                    +91 9511687723 <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-white border border-[var(--color-ink-100)] flex items-center justify-center shrink-0 shadow-sm">
                                <MapPin className="text-[var(--color-ink-900)] w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="text-[var(--color-ink-900)] font-bold text-base mb-0.5">Visit us</h3>
                                <p className="text-[var(--color-ink-500)] text-xs mb-1">Come say hello at our office base.</p>
                                <p className="text-[var(--color-ink-800)] font-medium text-sm">
                                    Hiranandani, Powai,<br />
                                    Mumbai – 400076, India
                                </p>
                            </div>
                        </div>

                        <div className="pt-5 border-t border-[var(--color-ink-100)]">
                            <h4 className="text-xs font-bold text-[var(--color-ink-500)] uppercase tracking-widest mb-4">Follow our journey</h4>
                            <div className="flex gap-3">
                                {[
                                    { Icon: Instagram, href: 'https://instagram.com/syntorymedia' },
                                    { Icon: Linkedin, href: 'https://www.linkedin.com/company/syntorymedia' },
                                    { Icon: Twitter, href: 'https://x.com/syntorymedia' },
                                    { Icon: Youtube, href: 'https://youtube.com/@syntorymedia' }
                                ].map(({ Icon, href }, i) => (
                                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-[var(--color-ink-100)] flex items-center justify-center text-[var(--color-ink-500)] hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-all duration-300">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout: Original side-by-side */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Content */}
                    <div className="space-y-12 pt-8 animate-fade-in-up">
                        <div>
                            <h1 className="font-display text-7xl font-bold text-[var(--color-ink-900)] tracking-tighter leading-tight mb-6">
                                Turn attention into <br />
                                <span className="text-[var(--color-brand)]">qualified pipeline.</span>
                            </h1>
                            <p className="text-[var(--color-ink-500)] text-xl max-w-lg leading-relaxed font-medium">
                                We build conversion-focused websites for founder-led brands that need stronger trust and better lead quality.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-white border border-[var(--color-ink-100)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-brand)] transition-colors duration-300 shadow-sm">
                                    <Mail className="text-[var(--color-ink-900)] w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-[var(--color-ink-900)] font-bold text-lg mb-1">Chat with us</h3>
                                    <p className="text-[var(--color-ink-500)] text-sm mb-2">Expect a response within 1 business day.</p>
                                    <a href="mailto:hello@syntorymedia.com" className="text-[var(--color-brand)] hover:text-blue-700 transition-colors font-semibold flex items-center gap-2">
                                        hello@syntorymedia.com <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-white border border-[var(--color-ink-100)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-brand)] transition-colors duration-300 shadow-sm">
                                    <Phone className="text-[var(--color-ink-900)] w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-[var(--color-ink-900)] font-bold text-lg mb-1">Call us</h3>
                                    <p className="text-[var(--color-ink-500)] text-sm mb-2">Mon-Fri from 9am to 6pm.</p>
                                    <a href="tel:+919511687723" className="text-[var(--color-brand)] hover:text-blue-700 transition-colors font-semibold flex items-center gap-2">
                                        +91 9511687723 <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-white border border-[var(--color-ink-100)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-brand)] transition-colors duration-300 shadow-sm">
                                    <MapPin className="text-[var(--color-ink-900)] w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-[var(--color-ink-900)] font-bold text-lg mb-1">Visit us</h3>
                                    <p className="text-[var(--color-ink-500)] text-sm mb-2">Come say hello at our office base.</p>
                                    <p className="text-[var(--color-ink-800)] font-medium">
                                        Hiranandani, Powai,<br />
                                        Mumbai – 400076, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-[var(--color-ink-100)]">
                            <h4 className="text-sm font-bold text-[var(--color-ink-500)] uppercase tracking-widest mb-6">Follow our journey</h4>
                            <div className="flex gap-4">
                                {[
                                    { Icon: Instagram, href: 'https://instagram.com/syntorymedia' },
                                    { Icon: Linkedin, href: 'https://www.linkedin.com/company/syntorymedia' },
                                    { Icon: Twitter, href: 'https://x.com/syntorymedia' },
                                    { Icon: Youtube, href: 'https://youtube.com/@syntorymedia' }
                                ].map(({ Icon, href }, i) => (
                                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-[var(--color-ink-100)] flex items-center justify-center text-[var(--color-ink-500)] hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] hover:shadow-md transition-all duration-300">
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="pl-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <div className="relative">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-sky-200 rounded-full blur-[40px] opacity-60 pointer-events-none"></div>
                            <ContactForm initialEngagement={initialEngagement} initialIntent={initialIntent} />
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
