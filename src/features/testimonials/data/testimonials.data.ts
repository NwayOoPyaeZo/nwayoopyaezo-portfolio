import { site } from '@/lib/site';

import type { TestimonialPreview } from '../testimonials.types';

export const testimonialsPreview: TestimonialPreview[] = [
  {
    name: 'Testimonial preview',
    role: 'Reserved for future feedback',
    image: site.testimonialImages[0],
    quote: 'This section is ready to be filled once live client feedback is available.',
  },
  {
    name: 'Testimonial preview',
    role: 'Reserved for future feedback',
    image: site.testimonialImages[1],
    quote: 'The layout keeps the page honest while still showing where reviews will live.',
  },
  {
    name: 'Testimonial preview',
    role: 'Reserved for future feedback',
    image: site.testimonialImages[2],
    quote: 'A compact placeholder section is better than inventing quotes that do not exist yet.',
  },
];
