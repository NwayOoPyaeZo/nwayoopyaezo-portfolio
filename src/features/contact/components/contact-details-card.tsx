import { Mail, MapPin, Phone } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { site } from '@/lib/site';

export function ContactDetailsCard() {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>Contact details</CardTitle>
        <CardDescription>Direct links and details from the original site.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-slate-300">
        <div className="flex gap-3">
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
          <a href={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}`} target="_blank" rel="noreferrer" className="leading-6 hover:text-white">
            {site.address}
          </a>
        </div>
        <div className="flex gap-3">
          <Mail className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
          <div className="space-y-1 leading-6">
            <p>{site.email}</p>
            <p>{site.alternateEmail}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Phone className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
          <p className="leading-6">{site.phone}</p>
        </div>
      </CardContent>
    </Card>
  );
}
