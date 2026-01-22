'use client';

import React, { useActionState } from 'react';
import { Button } from './Button';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail } from '@/app/actions/contact';

// Define the initial state type
const initialState = {
    message: '',
    success: false,
    errors: {} as Record<string, string[]>,
};

export const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

    return (
        <div className="w-full">
            {state.success ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-6 animate-fade-in glass-card rounded-3xl p-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-green-600 w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-ink-900)]">Message Sent!</h3>
                    <p className="text-[var(--color-ink-500)] max-w-md">
                        Thanks for reaching out. We've received your message and will be in touch shortly.
                    </p>
                    <Button
                        onClick={() => window.location.reload()}
                        variant="outline"
                        className="mt-4 border-[var(--color-ink-200)] text-[var(--color-ink-900)] hover:bg-[var(--color-ink-100)]"
                    >
                        Send another message
                    </Button>
                </div>
            ) : (
                <form action={formAction} className="space-y-5 glass-card rounded-3xl p-6 md:p-8 shadow-xl shadow-[var(--color-brand)]/5">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full bg-white border border-[var(--color-ink-100)] rounded-xl px-4 py-3 text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all shadow-sm"
                            />
                            {state.errors?.name && (
                                <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                    <AlertCircle size={12} /> {state.errors.name[0]}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                className="w-full bg-white border border-[var(--color-ink-100)] rounded-xl px-4 py-3 text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all shadow-sm"
                            />
                            {state.errors?.email && (
                                <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                    <AlertCircle size={12} /> {state.errors.email[0]}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Subject</label>
                        <div className="relative">
                            <select
                                id="subject"
                                name="subject"
                                className="w-full bg-white border border-[var(--color-ink-100)] rounded-xl px-4 py-3 text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all appearance-none shadow-sm cursor-pointer"
                            >
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Project Proposal">Project Proposal</option>
                                <option value="Consultation">Consultation</option>
                                <option value="Support">Support</option>
                            </select>
                            {/* Simple custom arrow to ensure it looks consistent */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-ink-400)]">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            placeholder="Tell us about your project..."
                            className="w-full bg-white border border-[var(--color-ink-100)] rounded-xl px-4 py-3 text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all resize-none shadow-sm"
                        ></textarea>
                        {state.errors?.message && (
                            <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                <AlertCircle size={12} /> {state.errors.message[0]}
                            </p>
                        )}
                    </div>

                    {state.message && !state.success && (
                        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm text-center">
                            {state.message}
                        </div>
                    )}

                    <div className="pt-2">
                        <Button
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-[var(--color-brand)] hover:bg-blue-700 text-white h-12 text-base font-bold shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed group transition-all"
                        >
                            {isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
};
