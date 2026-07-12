import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { SectionLabel } from '@/layouts/section-shell';
import { site } from '@/lib/site';

import { HomePortfolioCard } from '../components/home-portfolio-card';
import { HomeServiceCard } from '../components/home-service-card';
import { aboutHighlights, featuredPortfolioItems, featuredServices, specialties, stats } from '../data/home.data';

export function HomePage() {
  return (
    <div className="bg-radial-aurora">
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:px-12 lg:py-20">
        <div className="flex flex-col justify-center">
          <SectionLabel>Portfolio</SectionLabel>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hello, I am <span className="text-amber-300">{site.name}</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {site.description} I build clean interfaces, useful dashboards, and grounded digital experiences that make complex work easier to read.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="/contact">Contact me</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.resume} download>Download CV</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {specialties.map((item) => (
              <Badge key={item} variant="secondary" className="bg-white/8 text-slate-100">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="relative lg:justify-self-end">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -bottom-8 right-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
          <Card className="relative mx-auto w-full max-w-[380px] overflow-hidden border-white/10 bg-slate-950/70 p-0 shadow-2xl shadow-black/30 lg:mx-0">
            <div className="aspect-[16/10] max-h-[260px] overflow-hidden bg-slate-900 lg:max-h-[280px]">
              <img src={site.heroImage} alt={site.name} className="h-full w-full object-cover object-center" />
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
                  <p className="mt-1.5 text-xs font-medium leading-5 text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-16">
        <Card className="grid gap-8 border-white/10 bg-white/5 p-6 lg:grid-cols-[1fr_0.9fr] lg:p-8">
          <div>
            <SectionLabel>About</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">A portfolio built around clarity.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              I like projects where design and data support each other. The goal is not just to show work, but to make it easier for people to understand the work and act on it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {aboutHighlights.map((item) => (
                <Badge key={item} variant="outline" className="bg-white/5 text-slate-100">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Quick profile</p>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                Front-end development, data analysis, and dashboard building with a focus on practical, readable output.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <a href="/about">View about page</a>
              </Button>
              <Button asChild>
                <a href="/portfolio">See projects</a>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">What I help with</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service) => (
            <HomeServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Selected projects</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredPortfolioItems.map((item) => (
            <HomePortfolioCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-16">
        <Card className="border-white/10 bg-gradient-to-r from-amber-500/15 via-white/5 to-cyan-400/10 p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Need a portfolio, dashboard, or website?</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                I am available for focused build work and visual data projects. If you need a clear, responsive result, reach out and we can scope it.
              </p>
            </div>
            <Button asChild size="lg">
              <a href="/contact">Contact me</a>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
