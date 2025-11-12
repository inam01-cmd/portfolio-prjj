
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, DownloadIcon } from './icons';
import { Theme, Page } from '../types';

interface HeaderProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    activePage: Page;
    setPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme, activePage, setPage }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const navLinks: { name: string, page: Page }[] = [
        { name: 'Home', page: 'home' },
        { name: 'Projects', page: 'projects' },
        { name: 'Education', page: 'education' },
        { name: 'Contact', page: 'contact' },
    ];

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-gray-200 dark:border-dark-border' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" onClick={() => setPage('home')} className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                            InamKhan.dev
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                             <a
                                key={link.name}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage(link.page);
                                }}
                                className={`relative px-2 py-1 text-sm font-medium transition-colors ${activePage === link.page ? 'text-indigo-500 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400'}`}
                            >
                                {link.name}
                                {activePage === link.page && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full"></span>}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-card focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                        </button>
                         <a href="/path-to-your-resume.pdf" download="JohnDoe-Resume.pdf" className="inline-flex items-center gap-2 justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
                            <DownloadIcon className="w-4 h-4" />
                            Resume
                        </a>
                    </div>
                    {/* Mobile menu button could be added here */}
                </div>
            </nav>
        </header>
    );
};

export default Header;
