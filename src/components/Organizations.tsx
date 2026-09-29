import { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { organizations, type Organization } from '@/lib/portfolioData';

export default function Organizations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeDot, setActiveDot] = useState(0);
  const touchStart = useRef(0);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    const cardWidth = el.clientWidth;
    setActiveDot(Math.round(el.scrollLeft / cardWidth));
  }, []);

  useEffect(() => {
    updateScrollState();
  }, [updateScrollState]);

  const scrollByDir = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -el.clientWidth : el.clientWidth, behavior: 'smooth' });
  };

  const scrollToIndex = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <section id="organisasi" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-safety-green/10 rounded-full mb-4">
            <Users className="w-4 h-4 text-safety-green" />
            <span className="text-xs font-semibold text-safety-green uppercase tracking-wider">Organisasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Kegiatan Kampus & Pengalaman Organisasi
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Peran aktif dalam organisasi kemahasiswaan dan program pengabdian masyarakat.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const diff = touchStart.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 50) scrollByDir(diff > 0 ? 'right' : 'left');
            }}
            className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-2"
          >
            {organizations.map((org) => (
              <div key={org.id} className="snap-start shrink-0 w-full lg:w-[calc(50%-10px)]">
                <OrgCard org={org} />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => scrollByDir('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`absolute top-1/2 -left-3 lg:-left-5 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 ${
              canScrollLeft
                ? 'opacity-100 hover:bg-safety-green hover:text-white text-slate-700 dark:text-slate-200'
                : 'opacity-40 cursor-not-allowed text-slate-400'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollByDir('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`absolute top-1/2 -right-3 lg:-right-5 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 ${
              canScrollRight
                ? 'opacity-100 hover:bg-safety-green hover:text-white text-slate-700 dark:text-slate-200'
                : 'opacity-40 cursor-not-allowed text-slate-400'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {organizations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeDot === idx
                    ? 'w-6 bg-safety-green'
                    : 'w-2 bg-slate-300 dark:bg-slate-600 hover:bg-safety-green/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OrgCard({ org }: { org: Organization }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:border-safety-green/30 transition-all duration-500 h-full">
      {/* Icon Header */}
      <div className="flex items-center gap-3 p-5 bg-gradient-to-r from-safety-green/10 to-safety-amber/5 border-b border-slate-100 dark:border-slate-700">
        <div className="flex items-center justify-center w-11 h-11 bg-safety-green/10 rounded-xl">
          <org.icon className="w-6 h-6 text-safety-green" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">{org.title}</h3>
          <p className="text-xs font-semibold text-safety-green mt-0.5">{org.role}</p>
        </div>
      </div>

      {/* Description */}
      <div className="p-5">
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{org.description}</p>

        {/* Mini Gallery */}
        <div className="grid grid-cols-3 gap-2">
          {org.gallery.map((img, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-lg aspect-square group">
              <img
                src={img}
                alt={`${org.title} ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
