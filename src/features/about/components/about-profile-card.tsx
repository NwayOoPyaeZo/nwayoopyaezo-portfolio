import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { aboutPoints } from '../data/about.data';

export function AboutProfileCard() {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="space-y-5 pt-6 text-sm leading-7 text-slate-300">
        <p>
          I'm a recent Digital Business Technology graduate in Bangkok (diploma, GPA 3.91/4.00), working toward a junior data analyst role.
        </p>
        <p>
          I started in front-end development, with a React internship at Luna Edge and a volunteer project with Myanmar Developers Community. Data analysis is the career I want to build, so I've been focusing my learning and projects on it.
        </p>
        <p>
          I'm currently completing the DataCamp Data Analyst Career Track, and practising SQL, Excel (Power Query, Power Pivot) and Power BI through my own projects.
        </p>
        <dl className="space-y-3 border-t border-white/10 pt-4">
          <div>
            <dt className="font-medium text-white">Education</dt>
            <dd>Diploma in Digital Business Technology, SIBA College</dd>
          </div>
          <div>
            <dt className="font-medium text-white">Languages</dt>
            <dd>Burmese (native), English (C1), Thai (basic)</dd>
          </div>
          <div>
            <dt className="font-medium text-white">Based in</dt>
            <dd>Bangkok, open to roles in Thailand, ASEAN and Japan</dd>
          </div>
        </dl>
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
