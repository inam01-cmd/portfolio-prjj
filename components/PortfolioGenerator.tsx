
import React, { useState } from 'react';
import { generateAboutSection } from '../services/geminiService';
import { WandIcon } from './icons';

interface PortfolioGeneratorProps {
    onContentGenerated: (content: string) => void;
}

const PortfolioGenerator: React.FC<PortfolioGeneratorProps> = ({ onContentGenerated }) => {
    // FIX: Replaced aistudio.useState with useState from React.
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
        } catch (err)
        {
            setError('Failed to generate content. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative my-16 p-8 rounded-2xl bg-gray-100/50 dark:bg-dark-card/50 border border-gray-200 dark:border-dark-border shadow-2xl animate-fade-in-up overflow-hidden" style={{ animationDelay: '0.4s' }}>
             <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full border border-indigo-200 dark:border-indigo-800">
                        <WandIcon className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Refine with AI</h2>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Jot down some notes about your skills and experience, and let AI polish your "About Me" section into a professional narrative.
                </p>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={rawNotes}
                        onChange={(e) => setRawNotes(e.target.value)}
                        placeholder="e.g., 5 years experience in React, love building scalable backends with Node.js, passionate about open-source..."
                        rows={5}
                        className="w-full p-3 rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 sm:text-sm bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-200"
                        disabled={isLoading}
                    />
                    <div className="mt-4 flex justify-end items-center gap-4">
                        {error && <p className="text-sm text-red-500">{error}</p>}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="inline-flex items-center gap-2 justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <WandIcon className="w-5 h-5" />
                            {isLoading ? 'Generating...' : 'Generate'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PortfolioGenerator;
