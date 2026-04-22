'use client';

import React, { useState, useEffect, useActionState } from 'react';
import { Button } from './Button';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail } from '@/app/actions/contact';

interface ContactFormProps {
    initialEngagement?: string;
    initialIntent?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialEngagement = '', initialIntent = '' }) => {
    const [state, formAction, isPending] = useActionState(sendContactEmail, {
        success: false,
        message: '',
        errors: {},
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (state.success) {
            setIsSubmitted(true);
        }
    }, [state.success]);

    return (
        <div className="w-full">
            {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-6 animate-fade-in glass-card rounded-3xl p-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-green-600 w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-ink-900)]">Message Sent!</h3>
                    <p className="text-[var(--color-ink-500)] max-w-md">
                        Thanks for sharing the details. We will reply within 1 business day with fit and next steps.
                    </p>
                    <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="mt-4 border-[var(--color-ink-200)] text-[var(--color-ink-900)] hover:bg-[var(--color-ink-100)]"
                    >
                        Send another message
                    </Button>
                </div>
            ) : (
                <form action={formAction} className="space-y-5 glass-card rounded-3xl p-6 md:p-8 shadow-xl shadow-[var(--color-brand)]/5">
                    <input type="hidden" name="inquiryIntent" value={initialIntent || 'growth-plan'} />
                    <input type="hidden" name="subject" value={`[Syntory Media] ${initialEngagement || 'Inquiry'} - ${initialIntent || 'Strategy'}`} />

                    {state.message && !state.success && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl flex items-center gap-3 text-sm animate-shake">
                            <AlertCircle size={18} />
                            <p>{state.message}</p>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="John Doe"
                                className={`w-full bg-white border ${state.errors?.name ? 'border-red-400' : 'border-[var(--color-ink-100)]'} rounded-xl px-4 py-3 text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all shadow-sm`}
                            />
                            {state.errors?.name && <p className="text-xs text-red-500 ml-1">{state.errors.name[0]}</p>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                className={`w-full bg-white border ${state.errors?.email ? 'border-red-400' : 'border-[var(--color-ink-100)]'} rounded-xl px-4 py-3 text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all shadow-sm`}
                            />
                            {state.errors?.email && <p className="text-xs text-red-500 ml-1">{state.errors.email[0]}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="+91 98765 43210"
                            className="w-full bg-white border border-[var(--color-ink-100)] rounded-xl px-4 py-3 text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all shadow-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="website" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Current website (optional)</label>
                        <input
                            type="url"
                            id="website"
                            name="website"
                            placeholder="https://yourwebsite.com"
                            className="w-full bg-white border border-[var(--color-ink-100)] rounded-xl px-4 py-3 text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all shadow-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="engagementType" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Engagement type</label>
                        <div className="relative">
                            <select
                                id="engagementType"
                                name="engagementType"
                                defaultValue={initialEngagement || 'Not sure yet'}
                                className="w-full bg-white border border-[var(--color-ink-100)] rounded-xl px-4 py-3 text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all appearance-none shadow-sm cursor-pointer"
                            >
                                <option value="Not sure yet">Not sure yet</option>
                                <option value="Authority Sprint">Authority Sprint</option>
                                <option value="Conversion Rebuild">Conversion Rebuild</option>
                                <option value="Growth Partner">Growth Partner</option>
                                <option value="3-point website teardown">3-point website teardown</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-ink-400)]">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label htmlFor="businessType" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Business type</label>
                            <select
                                id="businessType"
                                name="businessType"
                                required
                                defaultValue=""
                                className="w-full bg-white border border-[var(--color-ink-100)] rounded-xl px-4 py-3 text-[var(--color-ink-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all appearance-none shadow-sm cursor-pointer"
                            >
                                <option value="" disabled>Select one</option>
                                <option value="Founder-led service business">Founder-led service business</option>
                                <option value="Creator-led brand">Creator-led brand</option>
                                <option value="SaaS / tech">SaaS / tech</option>
                                <option value="Local / hospitality">Local / hospitality</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="primaryGoal" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Primary goal</label>
                            <select
                                id="primaryGoal"
                                name="primaryGoal"
                                required
                                defaultValue=""
                                className="w-full bg-white border border-[var(--color-ink-100)] rounded-xl px-4 py-3 text-[var(--color-ink-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all appearance-none shadow-sm cursor-pointer"
                            >
                                <option value="" disabled>Select one</option>
                                <option value="Improve trust and positioning">Improve trust and positioning</option>
                                <option value="Increase lead quality">Increase lead quality</option>
                                <option value="Improve conversion rate">Improve conversion rate</option>
                                <option value="Launch a new offer">Launch a new offer</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label htmlFor="monthlyTraffic" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Monthly traffic or lead source</label>
                            <select
                                id="monthlyTraffic"
                                name="monthlyTraffic"
                                defaultValue=""
                                className="w-full bg-white border border-[var(--color-ink-100)] rounded-xl px-4 py-3 text-[var(--color-ink-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all appearance-none shadow-sm cursor-pointer"
                            >
                                <option value="" disabled>Select one</option>
                                <option value="Mostly referrals">Mostly referrals</option>
                                <option value="Social traffic">Social traffic</option>
                                <option value="Outbound / cold outreach">Outbound / cold outreach</option>
                                <option value="Paid ads">Paid ads</option>
                                <option value="Under 1,000 monthly visitors">Under 1,000 monthly visitors</option>
                                <option value="1,000 to 10,000 monthly visitors">1,000 to 10,000 monthly visitors</option>
                                <option value="10,000+ monthly visitors">10,000+ monthly visitors</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="timeline" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Target launch timeline</label>
                            <select
                                id="timeline"
                                name="timeline"
                                required
                                defaultValue=""
                                className="w-full bg-white border border-[var(--color-ink-100)] rounded-xl px-4 py-3 text-[var(--color-ink-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all appearance-none shadow-sm cursor-pointer"
                            >
                                <option value="" disabled>Select one</option>
                                <option value="ASAP (within 2-3 weeks)">ASAP (within 2-3 weeks)</option>
                                <option value="Within 1 month">Within 1 month</option>
                                <option value="Within 2-3 months">Within 2-3 months</option>
                                <option value="Exploring options">Exploring options</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="budgetRange" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Budget range</label>
                        <select
                            id="budgetRange"
                            name="budgetRange"
                            required
                            defaultValue=""
                            className="w-full bg-white border border-[var(--color-ink-100)] rounded-xl px-4 py-3 text-[var(--color-ink-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all appearance-none shadow-sm cursor-pointer"
                        >
                            <option value="" disabled>Select one</option>
                            <option value="Under ₹40,000">Under ₹40,000</option>
                            <option value="₹40,000 - ₹80,000">₹40,000 - ₹80,000</option>
                            <option value="₹80,000 - ₹1,50,000">₹80,000 - ₹1,50,000</option>
                            <option value="₹1,50,000+">₹1,50,000+</option>
                            <option value="Need guidance">Need guidance</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-[var(--color-ink-900)] ml-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Share your offer, current bottleneck, and what success should look like 90 days post-launch."
                            className={`w-full bg-white border ${state.errors?.message ? 'border-red-400' : 'border-[var(--color-ink-100)]'} rounded-xl px-4 py-3 text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] transition-all resize-none shadow-sm`}
                        ></textarea>
                        {state.errors?.message && <p className="text-xs text-red-500 ml-1">{state.errors.message[0]}</p>}
                    </div>

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
                                    Contact Us
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
