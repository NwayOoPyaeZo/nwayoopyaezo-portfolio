import { site } from '@/lib/site';

import type { PortfolioCardData } from '../portfolio.types';

export const portfolioItems: PortfolioCardData[] = [
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
  {
    title: 'Volunteer Frontend Developer',
    category: 'Front-End',
    description: 'Built responsive React interfaces for community work, including a donor-records search experience.',
    image: site.frontEndProjectImage,
    tools: ['React', 'Tailwind'],
  },
];
