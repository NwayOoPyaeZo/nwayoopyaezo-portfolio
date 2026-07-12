import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import type { HomeServiceTeaser } from '../home.types';

export function HomeServiceCard({ service }: { service: HomeServiceTeaser }) {
  const Icon = service.icon;

  return (
    <Card className="h-full border-white/10 bg-white/5">
      <CardHeader>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-amber-300">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
