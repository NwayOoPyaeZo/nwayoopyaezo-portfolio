import { ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { site } from '@/lib/site';

export function SocialLinksCard() {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>Follow me</CardTitle>
        <CardDescription>Social links kept from the original portfolio.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {site.socials.map((social) => (
          <Button key={social.label} asChild variant="outline">
            <a href={social.href} target="_blank" rel="noreferrer">
              {social.label} <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
