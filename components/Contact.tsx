
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
        <div className="py-20 sm:py-32 bg-white dark:bg-dark-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        Get In Touch
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                        Have a question, a project proposal, or just want to say hello? I'd love to hear from you. Send me a message, and I'll get back to you as soon as possible.
                    </p>
                </div>
                <div className="mt-16 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                         <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className="block w-full rounded-md border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card py-3 px-4 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="block w-full rounded-md border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card py-3 px-4 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50" required />
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange} className="block w-full rounded-md border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card py-3 px-4 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50" required></textarea>
                        </div>

                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center gap-2 justify-center rounded-md bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
