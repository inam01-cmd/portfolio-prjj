import React, { useState } from 'react';
import { generateContactReply } from '../services/geminiService';
import { SendIcon } from './icons';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill out all fields.');
            return;
        }
        setIsSubmitting(true);
        setError('');
        setResponseMessage('');

        try {
            const result = await generateContactReply(formData);
            setResponseMessage(result);
            setFormData({ name: '', email: '', message: '' });
        } catch (e) {
            setError('An error occurred while sending the message.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className="py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        Get In Touch
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Have a question, a project proposal, or just want to say hello? I'd love to hear from you. Send me a message, and I'll get back to you as soon as possible.
                    </p>
                </div>
                <div className="mt-16 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                            <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200" required></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center gap-2 justify-center rounded-md bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <SendIcon className="w-5 h-5" />
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                    {error && <p className="mt-4 text-center text-sm text-red-500">{error}</p>}
                    {responseMessage && (
                        <div className="mt-8 p-4 rounded-md bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-700">
                            <p className="text-sm text-green-800 dark:text-green-200">{responseMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;