import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Syntory Media',
    description: 'Terms and Conditions for Syntory Media services.',
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[var(--color-paper)] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="mb-16 animate-fade-in-up">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-ink-900)] tracking-tighter mb-4">
                        Terms & Conditions
                    </h1>
                    <p className="text-[var(--color-ink-500)]">Last updated: January 23, 2026</p>
                </div>

                <div className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-bold prose-headings:text-[var(--color-ink-900)] prose-p:text-[var(--color-ink-800)] prose-strong:text-[var(--color-ink-900)] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <h3>1. Introduction</h3>
                    <p>
                        Welcome to Syntory Media ("we," "our," or "us"). By accessing or using our website and services, you agree to be bound by these Terms and Conditions.
                    </p>

                    <h3>2. Services</h3>
                    <p>
                        Syntory Media provides web design, development, and digital strategy services. The specific deliverables and scope of work for each project will be defined in a separate agreement or Statement of Work (SOW).
                    </p>

                    <h3>3. Intellectual Property</h3>
                    <p>
                        Upon full payment, the client is granted rights to the final deliverables as specified in the project agreement. Syntory Media retains the right to display the work in our portfolio and marketing materials.
                    </p>

                    <h3>4. Client Obligations</h3>
                    <p>
                        You agree to provide necessary materials, feedback, and approvals in a timely manner to adhere to project timelines.
                    </p>

                    <h3>5. Payment Terms</h3>
                    <p>
                        Payment schedules are outlined in your specific project proposal. We reserve the right to suspend services for overdue accounts.
                    </p>

                    <h3>6. Limitation of Liability</h3>
                    <p>
                        Syntory Media shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.
                    </p>

                    <h3>7. Changes to Terms</h3>
                    <p>
                        We adhere to the right to modify these terms at any time. Continued use of our services constitutes acceptance of the new terms.
                    </p>

                    <h3>8. Contact Us</h3>
                    <p>
                        If you have any questions about these Terms, please contact us at <a href="mailto:hello@syntorymedia.com" className="text-[var(--color-brand)] no-underline hover:underline">hello@syntorymedia.com</a>.
                    </p>
                </div>
            </div>
        </main>
    );
}
