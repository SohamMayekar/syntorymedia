import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/Button';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[var(--color-paper)] flex items-center justify-center relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-100/40 blur-[150px] rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-100/40 blur-[150px] rounded-full"></div>

            <div className="relative z-10 text-center px-6 max-w-2xl mx-auto space-y-8 animate-fade-in-up">
                <h1 className="font-display text-9xl font-bold text-[var(--color-ink-900)] tracking-tighter opacity-10">
                    404
                </h1>

                <div className="-mt-12 space-y-6">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-ink-900)] tracking-tight">
                        Lost in the digital void?
                    </h2>
                    <p className="text-[var(--color-ink-500)] text-xl font-light">
                        The page you're looking for seems to have drifted off into deep space. Let's get you back to solid ground.
                    </p>
                </div>

                <div className="pt-4 flex justify-center">
                    <Link href="/">
                        <Button size="lg" className="bg-[var(--color-brand)] hover:bg-blue-700 text-white rounded-full px-8 gap-2 group">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
