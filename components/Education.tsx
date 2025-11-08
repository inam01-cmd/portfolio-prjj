import React from 'react';
import { EducationItem, CertificationItem } from '../types';
import { BookOpenIcon, AcademicCapIcon } from './icons';

const educationHistory: EducationItem[] = [
    {
        institution: 'University of Technology',
        degree: 'Master of Science in Computer Science',
        period: '2020 - 2022',
    },
    {
        institution: 'State University',
        degree: 'Bachelor of Science in Software Engineering',
        period: '2016 - 2020',
    },
];

const certifications: CertificationItem[] = [
    {
        name: 'Google Certified Professional Cloud Architect',
        issuer: 'Google Cloud',
        date: 'Issued Jun 2023',
    },
    {
        name: 'Certified Kubernetes Application Developer (CKAD)',
        issuer: 'The Linux Foundation',
        date: 'Issued Dec 2022',
    },
    {
        name: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        date: 'Issued May 2021',
    },
];

const Education: React.FC = () => {
    return (
        <div className="py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        Education & Certifications
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        My academic background and professional certifications, reflecting a commitment to continuous learning and expertise.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-800 dark:text-white">
                            <BookOpenIcon className="w-7 h-7 text-cyan-500" />
                            Education
                        </h2>
                        <div className="mt-8 space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-3">
                            {educationHistory.map((item, index) => (
                                <div key={index} className="relative pl-8">
                                    <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-slate-900"></div>
                                    <p className="font-semibold text-slate-900 dark:text-white">{item.institution}</p>
                                    <p className="text-slate-600 dark:text-slate-400">{item.degree}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{item.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-800 dark:text-white">
                            <AcademicCapIcon className="w-7 h-7 text-cyan-500" />
                            Certifications
                        </h2>
                        <div className="mt-8 space-y-6">
                            {certifications.map((cert, index) => (
                                <div key={index} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
                                    <p className="font-semibold text-slate-900 dark:text-white">{cert.name}</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{cert.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
