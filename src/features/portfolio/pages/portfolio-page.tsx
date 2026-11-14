import { useState } from 'react';

import { PageHeader } from '@/layouts/section-shell';

import { PortfolioCard } from '../components/portfolio-card';
import { ProjectLightbox } from '../components/project-lightbox';
import { portfolioItems } from '../data/portfolio.data';
import type { PortfolioCardData } from '../portfolio.types';

const tabs = ['Data Analysis', 'Front-End'] as const;

export function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Data Analysis');
  const [selectedProject, setSelectedProject] = useState<PortfolioCardData | null>(null);
  const visibleItems = portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work and visual studies."
      />
      <div className="mb-8 mt-12 flex gap-3" role="tablist" aria-label="Portfolio categories">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              activeTab === tab ? 'bg-amber-400 text-slate-900' : 'bg-white/5 text-white hover:bg-white/10'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item) => (
          <PortfolioCard key={item.title} item={item} onSelect={() => setSelectedProject(item)} />
        ))}
      </div>
      {selectedProject ? <ProjectLightbox project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  );
}
