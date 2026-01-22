import { ContactForm } from '@/components/ContactForm';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | Syntory Media',
    description: 'Get in touch with Syntory Media. Let\'s build your premium digital home.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[var(--color-paper)] relative overflow-hidden pt-36 pb-24">

            {/* Ambient Background (Light Mode) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/40 blur-[100px] rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/40 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Content */}
                    <div className="space-y-12 lg:pt-8 animate-fade-in-up">
                        <div>
                            <h1 className="font-display text-5xl md:text-7xl font-bold text-[var(--color-ink-900)] tracking-tighter leading-tight mb-6">
                                Let's build <br />
                                <span className="text-[var(--color-brand)]">something iconic.</span>
                            </h1>
                            <p className="text-[var(--color-ink-500)] text-xl max-w-lg leading-relaxed font-medium">
                                Ready to stop renting and start owning? We help creators and brands build digital assets that command authority.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-white border border-[var(--color-ink-100)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-brand)] transition-colors duration-300 shadow-sm">
                                    <Mail className="text-[var(--color-ink-900)] w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-[var(--color-ink-900)] font-bold text-lg mb-1">Chat with us</h3>
                                    <p className="text-[var(--color-ink-500)] text-sm mb-2">Our friendly team is here to help.</p>
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
                    <div className="lg:pl-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-[40px] opacity-60 pointer-events-none"></div>

                            <ContactForm />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
