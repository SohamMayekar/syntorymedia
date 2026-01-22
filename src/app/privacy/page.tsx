import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Syntory Media',
    description: 'Privacy Policy for Syntory Media.',
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[var(--color-paper)] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="mb-16 animate-fade-in-up">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-ink-900)] tracking-tighter mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-[var(--color-ink-500)]">Last updated: January 23, 2026</p>
                </div>

                <div className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-bold prose-headings:text-[var(--color-ink-900)] prose-p:text-[var(--color-ink-800)] prose-strong:text-[var(--color-ink-900)] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <h3>1. Information We Collect</h3>
                    <p>
                        We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us. This may include your name, email address, phone number, and project details.
                    </p>

                    <h3>2. How We Use Your Information</h3>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul>
                        <li>Provide, maintain, and improve our services.</li>
                        <li>Respond to your comments, questions, and requests.</li>
                        <li>Send you technical notices, updates, and administrative messages.</li>
                    </ul>

                    <h3>3. Data Security</h3>
                    <p>
                        We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access.
                    </p>

                    <h3>4. Cookies and Tracking</h3>
                    <p>
                        We may use cookies and similar tracking technologies to analyze trends, administer the website, and track users' movements around the site. You can control the use of cookies at the individual browser level.
                    </p>

                    <h3>5. Third-Party Services</h3>
                    <p>
                        We may use third-party providers for analytics, email marketing, or hosting. These parties have their own privacy policies required to be GDPR compliant.
                    </p>

                    <h3>6. Your Rights</h3>
                    <p>
                        Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete your data.
                    </p>

                    <h3>7. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@syntorymedia.com" className="text-[var(--color-brand)] no-underline hover:underline">hello@syntorymedia.com</a>.
                    </p>
                </div>
            </div>
        </main>
    );
}
