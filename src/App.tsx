import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { PortfolioLayout } from '@/layouts/portfolio-layout';
import { aboutRoutes } from '@/features/about/about.routes';
import { contactRoutes } from '@/features/contact/contact.routes';
import { homeRoutes } from '@/features/home/home.routes';
import { portfolioRoutes } from '@/features/portfolio/portfolio.routes';
import { servicesRoutes } from '@/features/services/services.routes';
import { testimonialsRoutes } from '@/features/testimonials/testimonials.routes';

const appRoutes = [...homeRoutes, ...aboutRoutes, ...servicesRoutes, ...portfolioRoutes, ...testimonialsRoutes, ...contactRoutes];

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PortfolioLayout />}>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
