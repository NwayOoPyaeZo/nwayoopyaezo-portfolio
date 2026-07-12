import { Card } from '@/components/ui/card';
import { PageHeader } from '@/layouts/section-shell';
import { site } from '@/lib/site';

import { AboutProfileCard } from '../components/about-profile-card';
import { AboutResumeCard } from '../components/about-resume-card';

export function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
      <PageHeader
        eyebrow="About"
        title="A practical builder with a data-first mindset."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <AboutProfileCard />

        <div className="space-y-6">
          <Card className="overflow-hidden border-white/10 bg-slate-950/70 p-0">
            <div className="aspect-[4/3] max-h-[420px] w-full">
              <img src={site.aboutImage} alt={site.name} className="h-full w-full object-cover" />
            </div>
          </Card>
          <AboutResumeCard />
        </div>
      </div>
    </section>
  );
}
