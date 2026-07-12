import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

import type { PortfolioCardData } from '../portfolio.types';

export function PortfolioCard({ item }: { item: PortfolioCardData }) {
  return (
    <Card className="group overflow-hidden border-white/10 bg-white/5 p-0">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <Badge variant="secondary" className="mb-3 bg-white/10 text-white">
            {item.category}
          </Badge>
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
        </div>
      </div>
    </Card>
  );
}
