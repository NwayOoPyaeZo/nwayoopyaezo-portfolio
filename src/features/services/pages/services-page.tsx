import { PageHeader } from '@/layouts/section-shell';

import { ServiceCard } from '../components/service-card';
import { services } from '../data/services.data';

export function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
      <PageHeader
        eyebrow="Services"
        title="From data analysis to front-end delivery."
        description="A focused list of the work I can support, rebuilt as a modular React component set."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
