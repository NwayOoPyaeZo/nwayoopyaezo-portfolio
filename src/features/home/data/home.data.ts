import { BarChart3, Code2, Database, Headphones, Lightbulb, Paintbrush } from 'lucide-react';

import { site } from '@/lib/site';

import type { HomeHeroStat, HomePortfolioTeaser, HomeServiceTeaser } from '../home.types';

export const specialties = ['Data Analysis', 'Front-End Development', 'SQL & Power BI', 'Responsive Web Design'];

export const stats: HomeHeroStat[] = [
  { label: 'Core focus', value: 'Data + Design' },
  { label: 'Tools', value: 'SQL, Power BI, React' },
  { label: 'Approach', value: 'Clear, modular, responsive' },
];

export const aboutHighlights = [
  'HTML, CSS, JavaScript, TypeScript, React, and Bootstrap',
  'SQL, Power BI, Excel, and basic Python for data workflows',
  'Git and GitHub for version control and collaboration',
  'Problem-solving, adaptability, attention to detail, and teamwork',
];

export const featuredServices: HomeServiceTeaser[] = [
  {
    title: 'Data Analysis',
    description: 'Analyze datasets to uncover trends and patterns, then translate them into actionable decisions.',
    icon: BarChart3,
  },
  {
    title: 'Data Visualization',
    description: 'Transform complex information into intuitive visuals that help teams move faster.',
    icon: Paintbrush,
  },
  {
    title: 'Database Administration',
    description: 'Maintain reliable data operations with performance, security, and organization in mind.',
    icon: Database,
  },
  {
    title: 'Web Ideas',
    description: 'Shape concept work into practical layouts and product ideas that are easy to navigate.',
    icon: Lightbulb,
  },
  {
    title: 'Front-End Development',
    description: 'Build responsive interfaces with modern tooling and a strong visual hierarchy.',
    icon: Code2,
  },
  {
    title: 'Support',
    description: 'Provide troubleshooting and practical guidance for web and data workflows.',
    icon: Headphones,
  },
];

export const featuredPortfolioItems: HomePortfolioTeaser[] = [
  {
    title: 'Mini Shop Inventory System',
    category: 'Data workflow',
    description: 'Streamlined inventory operations with a modular, easy-to-extend structure.',
    image: site.galleryImages[0],
  },
  {
    title: 'Power BI Sales Dashboard',
    category: 'Dashboard design',
    description: 'A clear reporting layout that helps surface sales patterns quickly.',
    image: site.galleryImages[1],
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Web development',
    description: 'A responsive portfolio built with Bootstrap and custom styling.',
    image: site.galleryImages[2],
  },
];
