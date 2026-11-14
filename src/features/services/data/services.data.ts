import { Code2, Database, Eraser, LayoutDashboard, Lightbulb, Search } from 'lucide-react';

import type { ServiceCardData } from '../services.types';

export const services: ServiceCardData[] = [
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
