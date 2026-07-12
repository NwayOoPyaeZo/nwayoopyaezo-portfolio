import { PageHeader } from '@/layouts/section-shell';

import { TestimonialCard } from '../components/testimonial-card';
import { testimonialsPreview } from '../data/testimonials.data';

export function TestimonialsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
      <PageHeader
        eyebrow="Testimonials"
        title="This section is being prepared."
        description="The original page was a placeholder, so this React version keeps it honest while giving the layout a proper home."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonialsPreview.map((item) => (
          <TestimonialCard key={item.quote} testimonial={item} />
        ))}
      </div>
    </section>
  );
}
