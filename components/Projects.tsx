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
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up">
            <img src={project.imageUrl} alt={project.title} className="h-48 w-full object-cover" />
            <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-grow">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="inline-block rounded-full bg-cyan-100 dark:bg-cyan-900/50 px-3 py-1 text-xs font-medium text-cyan-800 dark:text-cyan-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center border-t border-slate-200 dark:border-slate-700">
                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300">
                    View Live
                </a>
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white">
                    <GithubIcon className="w-5 h-5"/>
                </a>
            </div>
        </div>
    );
};


const Projects: React.FC = () => {
    return (
        <div id="projects" className="py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl animate-fade-in-up">
                        My Work
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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