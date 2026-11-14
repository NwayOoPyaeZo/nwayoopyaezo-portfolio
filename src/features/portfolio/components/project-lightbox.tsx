import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import type { PortfolioCardData } from '../portfolio.types';

type ProjectLightboxProps = {
  project: PortfolioCardData;
  onClose: () => void;
};

export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const images = project.images?.length ? project.images : [project.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (images.length > 1 && event.key === 'ArrowLeft') {
        setActiveImageIndex((current) => (current - 1 + images.length) % images.length);
      } else if (images.length > 1 && event.key === 'ArrowRight') {
        setActiveImageIndex((current) => (current + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
      onClick={onClose}
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-950 p-4 shadow-2xl sm:p-6" onClick={(event) => event.stopPropagation()}>
        <Button ref={closeButtonRef} type="button" variant="outline" size="icon" className="absolute right-4 top-4 z-10" onClick={onClose} aria-label="Close project details">
          <X className="h-5 w-5" />
        </Button>

        <div className="relative flex items-center justify-center rounded-xl bg-black/30 p-2">
          <img src={images[activeImageIndex]} alt={project.title} className="max-h-[70vh] max-w-full rounded-xl object-contain" />
          {images.length > 1 ? (
            <>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="absolute left-3 top-1/2 -translate-y-1/2"
                onClick={() => setActiveImageIndex((current) => (current - 1 + images.length) % images.length)}
                aria-label="Previous project image"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setActiveImageIndex((current) => (current + 1) % images.length)}
                aria-label="Next project image"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                {activeImageIndex + 1} / {images.length}
              </span>
            </>
          ) : null}
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
          <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
          {project.tools?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-amber-200">
                  {tool}
                </span>
              ))}
            </div>
          ) : null}
          {project.link ? (
            <Button asChild className="mt-6">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
