import { PageHeader } from '@/layouts/section-shell';

import { ContactDetailsCard } from '../components/contact-details-card';
import { ContactForm } from '../components/contact-form';
import { SocialLinksCard } from '../components/social-links-card';

export function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
      <PageHeader
        eyebrow="Contact"
        title="Let’s build something clear and useful."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <ContactForm />

        <div className="space-y-6">
          <ContactDetailsCard />
          <SocialLinksCard />
        </div>
      </div>
    </section>
  );
}
