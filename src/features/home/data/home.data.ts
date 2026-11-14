import { Code2, Database, Eraser, LayoutDashboard, Lightbulb, Search } from 'lucide-react';

import { site } from '@/lib/site';

import type { HomeHeroStat, HomePortfolioTeaser, HomeServiceTeaser } from '../home.types';

export const specialties = ['Excel & Power Query', 'SQL', 'Power BI', 'React Front-End'];

export const stats: HomeHeroStat[] = [
  { label: 'Core focus', value: 'Data analysis' },
  { label: 'Tools', value: 'Excel, SQL, Power BI' },
  { label: 'Background', value: 'React front-end' },
];

export const aboutHighlights = [
  'Excel: PivotTables, Power Query, Power Pivot, DAX measures',
  'SQL: SQL Server and PostgreSQL, JOINs, window functions',
  'Power BI (basic): KPI dashboards with slicers',
  'HTML, CSS, JavaScript, TypeScript, React, Tailwind and Git',
  'Attention to detail, problem-solving, teamwork',
];

export const featuredServices: HomeServiceTeaser[] = [
  {
    title: 'Clean messy data',
    description: 'Fix errors, combine files, and check the numbers before any analysis.',
    icon: Eraser,
  },
  {
    title: 'Understand the business problem',
    description: 'Turn a vague request into a clear question before touching the data.',
    icon: Lightbulb,
  },
  {
    title: 'Pull answers from datasets',
    description: 'Use Excel, SQL and Power BI to sort, filter and summarise data into clear answers.',
    icon: Search,
  },
  {
    title: 'Tell the story with data',
    description: 'Turn results into dashboards and short summaries that non-technical people can act on.',
    icon: LayoutDashboard,
  },
  {
    title: 'Organise data properly',
    description: 'Design database tables with ERDs and normalization so data stays clean and connected.',
    icon: Database,
  },
  {
    title: 'Make it easy to use',
    description: 'Build simple, responsive React interfaces, from my front-end background.',
    icon: Code2,
  },
];

export const featuredPortfolioItems: HomePortfolioTeaser[] = [
  {
    title: 'Databel Customer Churn Analysis',
    category: 'Data Analysis',
    description: 'Analyzed customer churn patterns in Excel and translated the findings into practical retention insights.',
    image: site.databelDashboardImage,
    tools: ['Excel'],
    link: 'https://github.com/NwayOoPyaeZo/DataAnalysisProjects',
  },
  {
    title: 'Budget vs Actual P&L Dashboard',
    category: 'Data Analysis',
    description: 'Compared budget and actual performance in an interactive dashboard to highlight variances and business trends.',
    image: site.pnlDashboardImage,
    tools: ['Excel', 'Power BI'],
    link: 'https://github.com/NwayOoPyaeZo/DataAnalysisProjects',
  },
];
