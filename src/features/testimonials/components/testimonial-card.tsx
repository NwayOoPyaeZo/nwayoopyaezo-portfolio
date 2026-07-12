import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import type { TestimonialPreview } from '../testimonials.types';

export function TestimonialCard({ testimonial }: { testimonial: TestimonialPreview }) {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <div className="flex items-center gap-4">
          <img src={testimonial.image} alt={testimonial.name} className="h-16 w-16 rounded-2xl object-cover" />
          <div>
            <CardTitle className="text-base">{testimonial.name}</CardTitle>
            <CardDescription>{testimonial.role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-sm leading-7 text-slate-300">{testimonial.quote}</CardContent>
    </Card>
  );
}
