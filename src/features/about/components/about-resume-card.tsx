import { FileDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { site } from '@/lib/site';

export function AboutResumeCard() {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>Resume</CardTitle>
        <CardDescription>Download my latest CV (PDF).</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <a href={site.resume} download>
            Download CV <FileDown className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
