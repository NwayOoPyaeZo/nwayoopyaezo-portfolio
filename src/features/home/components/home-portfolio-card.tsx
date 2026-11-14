import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

import type { HomePortfolioTeaser } from '../home.types';

export function HomePortfolioCard({ item }: { item: HomePortfolioTeaser }) {
  return (
    <Card className="group overflow-hidden border-white/10 bg-white/5 p-0">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/10 opacity-95" />
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
            <a href={item.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-amber-200">
              View project <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
