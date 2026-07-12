import { PageHeader } from '@/layouts/section-shell';

import { PortfolioCard } from '../components/portfolio-card';
import { portfolioItems } from '../data/portfolio.data';

export function PortfolioPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work and visual studies."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
