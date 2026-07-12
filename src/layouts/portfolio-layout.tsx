import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { navigation, site } from '@/lib/site';
import { cn } from '@/lib/utils';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn('rounded-full px-4 py-2 text-sm transition-colors', isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white');

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={site.logo} alt={site.name} className="h-11 w-auto" />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-wide text-white">{site.name}</p>
            <p className="text-xs text-slate-400">{site.title}</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <NavLink key={item.href} to={item.href} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <Button asChild className="ml-3">
            <NavLink to="/contact">Hire me</NavLink>
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen ? 'true' : 'false'}
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => (
              <NavLink key={item.href} to={item.href} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2 w-full">
              <NavLink to="/contact">Hire me</NavLink>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Portfolio</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
            {site.name} combines data analysis and front-end development into practical, polished web experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          {navigation.slice(0, 4).map((item) => (
            <NavLink key={item.href} to={item.href} className="rounded-full px-3 py-2 hover:bg-white/5 hover:text-white">
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © {year} {site.name}. Built with React, TypeScript, Tailwind, and shadcn-style components.
      </div>
    </footer>
  );
}

export function PortfolioLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}