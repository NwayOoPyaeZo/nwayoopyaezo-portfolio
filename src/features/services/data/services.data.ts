import { BarChart3, Code2, Database, Headphones, Lightbulb, Paintbrush } from 'lucide-react';

import type { ServiceCardData } from '../services.types';

export const services: ServiceCardData[] = [
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
