
import React from 'react';
import { Project } from '../types';
import { GithubIcon } from './icons';

const projects: Project[] = [
    {
        title: 'Project Alpha',
        description: 'A full-stack web application built with React, Node.js, and PostgreSQL for managing complex data streams.',
        imageUrl: 'https://picsum.photos/seed/alpha/600/400',
        tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
        liveUrl: '#',
        sourceUrl: '#',
    },
    {
        title: 'Project Beta',
        description: 'An interactive data visualization dashboard using D3.js and React to display real-time analytics.',
        imageUrl: 'https://picsum.photos/seed/beta/600/400',
        tags: ['React', 'D3.js', 'Data Viz'],
        liveUrl: '#',
        sourceUrl: '#',
    },
    {
        title: 'Project Gamma',
        description: 'A mobile-first progressive web app for task management, featuring offline capabilities and push notifications.',
        imageUrl: 'https://picsum.photos/seed/gamma/600/400',
        tags: ['PWA', 'Vue.js', 'Firebase'],
        liveUrl: '#',
        sourceUrl: '#',
    },
    {
        title: 'Project Delta',
        description: 'An e-commerce platform with a custom CMS, built using Next.js for server-side rendering and performance.',
        imageUrl: 'https://picsum.photos/seed/delta/600/400',
        tags: ['Next.js', 'React', 'GraphQL'],
        liveUrl: '#',
        sourceUrl: '#',
    },
    {
        title: 'Project Epsilon',
        description: 'A cloud-native application deployment pipeline using Docker, Kubernetes, and GitHub Actions.',
        imageUrl: 'https://picsum.photos/seed/epsilon/600/400',
        tags: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD'],
        liveUrl: '#',
        sourceUrl: '#',
    },
    {
        title: 'Project Zeta',
        description: 'A real-time chat application leveraging WebSockets and a Redis back-end for scalability.',
        imageUrl: 'https://picsum.photos/seed/zeta/600/400',
        tags: ['WebSockets', 'Node.js', 'Redis'],
        liveUrl: '#',
        sourceUrl: '#',
    }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const cardRef = React.useRef<HTMLDivElement>(null);

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--x', `${x}px`);
        cardRef.current.style.setProperty('--y', `${y}px`);
    };

    return (
        <div 
            ref={cardRef}
            onMouseMove={onMouseMove}
            className="spotlight-card group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-indigo-500/30 hover:-translate-y-1 animate-fade-in-up">
            <div className="relative h-48 w-full overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="flex flex-1 flex-col p-4 mt-[-40px] z-10">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-300 flex-grow">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="inline-block rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-500/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
             <div className="border-t border-gray-200 dark:border-dark-border p-4 flex items-center justify-between bg-white/5 dark:bg-dark-card/30">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
                    View Live
                </a>
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    <GithubIcon className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
};


const Projects: React.FC = () => {
    return (
        <div className="py-20 sm:py-32 bg-white dark:bg-dark-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl animate-fade-in-up">
                        My Work
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Here is a selection of projects that showcase my skills in web development, from front-end design to back-end architecture.
                    </p>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
