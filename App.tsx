
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import PortfolioGenerator from './components/PortfolioGenerator';
import { Theme, Page } from './types';
import { GithubIcon, LinkedInIcon, TwitterIcon, BriefcaseIcon, SendIcon } from './components/icons';
import ReactMarkdown from 'react-markdown';

const initialAboutContent = `I'm a passionate and results-driven software developer with a knack for creating elegant solutions to complex problems. With a strong foundation in modern web technologies, I specialize in building dynamic, responsive, and user-friendly applications. My journey in tech is fueled by a constant curiosity and a desire to learn and grow.

Use the AI generator below to see how I can transform simple notes into a compelling narrative!`;

const Home: React.FC<{ aboutContent: string; setAboutContent: (content: string) => void, setPage: (page: Page) => void }> = ({ aboutContent, setAboutContent, setPage }) => {
    const roles = ["Full-Stack Developer", "Cloud Enthusiast", "UI/UX Designer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
        }, 4000); // Change role every 4 seconds (2s typing, 2s pause)
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <>
            <section className="relative min-h-screen flex items-center bg-white dark:bg-dark-bg overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 animate-aurora" style={{backgroundSize: '200% 200%'}}></div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up text-center md:text-left">
                             <span className="text-indigo-500 dark:text-indigo-400 font-semibold">Hello, I'm</span>
                             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">
                                John Doe
                            </h1>
                            <div className="h-12 mt-4">
                               <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600 dark:text-gray-300">
                                    <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-r-current animate-typing align-top">
                                        {roles[currentRoleIndex]}
                                    </span>
                                </h2>
                            </div>
                            <div className="mt-8 prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                <ReactMarkdown>{aboutContent.split('\n\n')[0]}</ReactMarkdown>
                            </div>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button onClick={() => setPage('projects')} className="inline-flex items-center gap-2 justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
                                    <BriefcaseIcon className="w-5 h-5" />
                                    My Work
                                </button>
                                <button onClick={() => setPage('contact')} className="inline-flex items-center gap-2 justify-center rounded-md border border-gray-300 dark:border-dark-border bg-gray-100/50 dark:bg-dark-card/50 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-card transition-colors">
                                    <SendIcon className="w-5 h-5" />
                                    Contact Me
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                           <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                               <div className="absolute inset-0.5 border-2 border-indigo-500/20 rounded-full animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
                               <div className="absolute inset-2 border-2 border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                                <div className="absolute inset-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-30"></div>
                                <div className="absolute inset-0 bg-gray-200 dark:bg-dark-card/80 rounded-full flex items-center justify-center border border-gray-300 dark:border-dark-border">
                                    <span className="text-6xl text-gray-400 dark:text-gray-600 font-bold">JD</span>
                                    {/* Placeholder for an image: <img className="rounded-full w-full h-full object-cover" src="/path-to-image.jpg" alt="Profile Picture" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 sm:py-24 bg-gray-50 dark:bg-dark-bg">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                         <PortfolioGenerator onContentGenerated={setAboutContent} />
                    </div>
                </div>
            </section>
        </>
    );
};

const App: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('dark'); // Default to dark for a modern feel
    const [page, setPage] = useState<Page>('home');
    const [aboutContent, setAboutContent] = useState(initialAboutContent);

    useEffect(() => {
        // Set theme on initial load
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);
    
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const renderPage = () => {
        switch (page) {
            case 'home':
                return <Home aboutContent={aboutContent} setAboutContent={setAboutContent} setPage={setPage} />;
            case 'projects':
                return <Projects />;
            case 'education':
                return <Education />;
            case 'contact':
                return <Contact />;
            default:
                return <Home aboutContent={aboutContent} setAboutContent={setAboutContent} setPage={setPage} />;
        }
    };

    return (
        <div className="bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <Header theme={theme} setTheme={setTheme} activePage={page} setPage={setPage} />
            <main>
                {renderPage()}
            </main>
            <footer className="py-8 bg-gray-50 dark:bg-black/50 border-t border-gray-200 dark:border-dark-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
                     <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
                    <div className="flex justify-center gap-6">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition-colors">
                            <GithubIcon className="w-5 h-5" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition-colors">
                            <LinkedInIcon className="w-5 h-5" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition-colors">
                            <TwitterIcon className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
