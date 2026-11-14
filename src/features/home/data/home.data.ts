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
    title: 'Databel Customer Churn Analysis',
    category: 'Data analysis',
    description: 'Analyzed customer churn patterns in Excel and translated the findings into practical retention insights.',
    image: site.databelDashboardImage,
    tools: ['Excel'],
    link: 'https://github.com/NwayOoPyaeZo/DataAnalysisProjects',
  },
  {
    title: 'Budget vs Actual P&L Dashboard',
    category: 'Financial dashboard',
    description: 'Compared budget and actual performance in an interactive dashboard to highlight variances and business trends.',
    image: site.pnlDashboardImage,
    tools: ['Excel', 'Power BI'],
    link: 'https://github.com/NwayOoPyaeZo/DataAnalysisProjects',
  },
];
