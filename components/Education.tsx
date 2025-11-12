
import React from 'react';
import { EducationItem, CertificationItem } from '../types';
import { BookOpenIcon, AcademicCapIcon } from './icons';

const educationHistory: EducationItem[] = [
    {
        institution: 'The Islamia University of Bahawalpur',
        degree: 'Assocaite in Computer Science',
        period: '2021 - 2023',
    },
    {
        institution: 'AL Nafi International College',
        degree: 'Cloud Cyber Security',
        period: '2023 - 2024',
    },
];

const certifications: CertificationItem[] = [
    {
        name: 'Cloud Cyber Security',
        issuer: 'Al Nafi International College',
        date: 'Issued Jun 2024',
    },

];

const CertificationCard: React.FC<{ cert: CertificationItem }> = ({ cert }) => {
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
            className="spotlight-card relative p-4 rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card transition-all duration-300 hover:shadow-lg hover:border-indigo-500/30 overflow-hidden">
            <div className="relative z-10">
                <p className="font-semibold text-gray-900 dark:text-white">{cert.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{cert.date}</p>
            </div>
        </div>
    );
}

const Education: React.FC = () => {
    return (
        <div className="py-20 sm:py-32 bg-white dark:bg-dark-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        Education & Certifications
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                        My academic background and professional certifications, reflecting a commitment to continuous learning and expertise.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 dark:text-white mb-8">
                            <BookOpenIcon className="w-7 h-7 text-indigo-500" />
                            Education
                        </h2>
                        <div className="relative border-l-2 border-gray-200 dark:border-gray-700">
                            {educationHistory.map((item, index) => (
                                <div key={index} className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white dark:ring-dark-bg dark:bg-indigo-900">
                                        <BookOpenIcon className="w-3 h-3 text-indigo-800 dark:text-indigo-300" />
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{item.institution}</h3>
                                    <p className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{item.degree}</p>
                                     <p className="text-sm text-gray-500 dark:text-gray-500">{item.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 dark:text-white mb-8">
                            <AcademicCapIcon className="w-7 h-7 text-indigo-500" />
                            Certifications
                        </h2>
                        <div className="space-y-4">
                            {certifications.map((cert) => (
                                <CertificationCard key={cert.name} cert={cert} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
