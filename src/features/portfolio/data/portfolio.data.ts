import { site } from '@/lib/site';

import type { PortfolioCardData } from '../portfolio.types';

export const portfolioItems: PortfolioCardData[] = [
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
  {
    title: 'Operations Snapshot',
    category: 'Analytics',
    description: 'A concise visual summary for tracking recurring workflow metrics.',
    image: site.galleryImages[3],
  },
  {
    title: 'Brand Landing Page',
    category: 'UI design',
    description: 'A clean landing page layout with strong hierarchy and contrast.',
    image: site.galleryImages[4],
  },
  {
    title: 'Insight Board',
    category: 'Visualization',
    description: 'A concept board for turning raw data into readable, actionable stories.',
    image: site.galleryImages[5],
  },
];
