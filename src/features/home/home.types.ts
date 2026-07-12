import type { LucideIcon } from 'lucide-react';

export type HomeHeroStat = {
  label: string;
  value: string;
};

export type HomeServiceTeaser = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HomePortfolioTeaser = {
  title: string;
  category: string;
  description: string;
  image: string;
};
