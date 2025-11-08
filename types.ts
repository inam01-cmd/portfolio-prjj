export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

export type Theme = 'light' | 'dark';

export type Page = 'home' | 'projects' | 'education' | 'contact';