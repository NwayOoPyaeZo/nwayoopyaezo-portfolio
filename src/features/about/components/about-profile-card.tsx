import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { aboutPoints } from '../data/about.data';

export function AboutProfileCard() {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>About me</CardTitle>
        <CardDescription>
          I’m a recent graduate (GPA 3.91/4.00) working toward a junior data analyst role.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm leading-7 text-slate-300">
        <p>
          I’m currently completing the DataCamp Data Analyst Career Track. Because I started in front-end development, I care about making data easy to read.
        </p>
        <p>
          My skills include Excel, SQL, Power BI, HTML, CSS, JavaScript, React and Tailwind.
        </p>
        <p>
          My strengths include attention to detail, problem-solving, and teamwork.
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
