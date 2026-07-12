import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { site } from '@/lib/site';

import { aboutPoints } from '../data/about.data';

export function AboutProfileCard() {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>About me</CardTitle>
        <CardDescription>
          Hello, my name is {site.alternateName} (aka {site.name}). I am a front-end developer and data analyst who enjoys building responsive websites and turning data into practical insight.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm leading-7 text-slate-300">
        <p>
          I work across HTML, CSS, JavaScript, TypeScript, React, SQL, Power BI, Excel, Bootstrap, and basic Python, with Git and GitHub supporting the workflow.
        </p>
        <p>
          I have worked on portfolio sites and dashboard-style projects, and I like the challenge of making complex information feel straightforward and usable.
        </p>
        <p>
          My strengths include problem-solving, attention to detail, adaptability, and teamwork. I want to keep growing into a more versatile developer and analyst.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          {aboutPoints.map((item) => (
            <Badge key={item} variant="secondary" className="bg-white/10 text-white">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
