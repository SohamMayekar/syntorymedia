'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function sendContactEmail(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please check your entries and try again.',
        };
    }

    const { name, email, subject, message } = validatedFields.data;

    // Check for API key
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
        console.warn('RESEND_API_KEY is not set. Simulating email send.');
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        return {
            success: true,
            message: 'Email sent successfully (Simulated - No API Key)',
            errors: {}
        };
    }

    const resend = new Resend(resendApiKey);

    try {
        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Default sender for testing
            to: 'hello@syntorymedia.com', // Target email
            replyTo: email,
            subject: `[Syntory Media Contact] ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            // React email template can be added here later
        });

        if (data.error) {
            console.error('Resend Error:', data.error);
            return {
                success: false,
                message: 'Failed to send email. Please try again later.',
                errors: {}
            };
        }

        return {
            success: true,
            message: 'Email sent successfully!',
            errors: {}
        };

    } catch (error) {
        console.error('Server Action Error:', error);
        return {
            success: false,
            message: 'An unexpected error occurred. Please try again.',
            errors: {}
        };
    }
}
