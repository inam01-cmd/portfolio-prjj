import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from './icons';
import { Theme, Page } from '../types';

interface HeaderProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
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

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
        e.preventDefault();
        const element = document.getElementById(page);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-xl font-bold text-slate-900 dark:text-white">
                            MyPortfolio
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        {navLinks.map((link) => (
                             <a
                                key={link.name}
                                href={`#${link.page}`}
                                onClick={(e) => handleNavClick(e, link.page)}
                                className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-md transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                        </button>
                    </div>
                    {/* Mobile menu button could be added here */}
                </div>
            </nav>
        </header>
    );
};

export default Header;
