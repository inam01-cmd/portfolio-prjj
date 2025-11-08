import React, { useState } from 'react';
import { generateAboutSection } from '../services/geminiService';
import { WandIcon } from './icons';

interface PortfolioGeneratorProps {
    onContentGenerated: (content: string) => void;
}

const PortfolioGenerator: React.FC<PortfolioGeneratorProps> = ({ onContentGenerated }) => {
    const [rawNotes, setRawNotes] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!rawNotes.trim()) {
            setError('Please enter some notes about yourself.');
            return;
        }
        setIsLoading(true);
        setError('');
        try {
            const generatedContent = await generateAboutSection(rawNotes);
            onContentGenerated(generatedContent);
        } catch (err) {
            setError('Failed to generate content. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="my-16 p-8 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-4">
                 <div className="bg-cyan-100 dark:bg-cyan-900/50 p-3 rounded-full">
                    <WandIcon className="w-6 h-6 text-cyan-600 dark:text-cyan-300" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">AI-Powered "About Me"</h2>
            </div>
            <p className="mb-6 text-slate-600 dark:text-slate-400">
                Don't know what to write? Jot down some notes about your skills, experience, and interests below, and let AI craft a professional "About Me" section for you.
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={rawNotes}
                    onChange={(e) => setRawNotes(e.target.value)}
                    placeholder="e.g., 5 years experience in React, love building scalable backends with Node.js, passionate about open-source..."
                    rows={5}
                    className="w-full p-3 rounded-md border-slate-300 dark:border-slate-600 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200"
                    disabled={isLoading}
                />
                <div className="mt-4 flex justify-end items-center gap-4">
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex items-center gap-2 justify-center rounded-md bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <WandIcon className="w-5 h-5" />
                        {isLoading ? 'Generating...' : 'Generate Content'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PortfolioGenerator;
