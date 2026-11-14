import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

import type { PortfolioCardData } from '../portfolio.types';

export function PortfolioCard({ item, onSelect }: { item: PortfolioCardData; onSelect: () => void }) {
  return (
    <Card
      className="group cursor-pointer overflow-hidden border-white/10 bg-white/5 p-0"
      role="button"
      tabIndex={0}
      aria-label={`Open ${item.title}`}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect();
        }
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <Badge variant="secondary" className="mb-3 bg-white/10 text-white">
            {item.category}
          </Badge>
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
          {item.tools?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <span key={tool} className="text-xs text-amber-200">
                  {tool}
                </span>
              ))}
            </div>
          ) : null}
          {item.link ? (
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-amber-200">
              View project <ExternalLink className="h-4 w-4" />
            </span>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
