import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import PortfolioGenerator from './components/PortfolioGenerator';
import { Theme } from './types';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './components/icons';
import ReactMarkdown from 'react-markdown';

const initialAboutContent = `I'm a passionate and results-driven software developer with a knack for creating elegant solutions to complex problems. With a strong foundation in modern web technologies, I specialize in building dynamic, responsive, and user-friendly applications. My journey in tech is fueled by a constant curiosity and a desire to learn and grow.

Below you can find a selection of my work, my educational background, and ways to get in touch. Feel free to use the AI-powered generator below to see how I can transform simple notes into a compelling narrative!`;

const App: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('light');
    const [aboutContent, setAboutContent] = useState(initialAboutContent);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition-colors duration-300">
            <Header theme={theme} setTheme={setTheme} />
            <main>
                <section id="home" className="relative pt-20 sm:pt-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="animate-fade-in-up">
                                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                                    Full-Stack Developer & Tech Enthusiast
                                </h1>
                                <div className="mt-8 prose prose-lg dark:prose-invert max-w-none text-left">
                                    <ReactMarkdown>{aboutContent}</ReactMarkdown>
                                </div>
                                <div className="mt-8 flex justify-center gap-6">
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                        <GithubIcon className="w-7 h-7" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                        <LinkedInIcon className="w-7 h-7" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                        <TwitterIcon className="w-7 h-7" />
                                    </a>
                                </div>
                            </div>
                            <PortfolioGenerator onContentGenerated={setAboutContent} />
                        </div>
                    </div>
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="education">
                    <Education />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
            <footer className="py-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500 dark:text-slate-400">
                    <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
