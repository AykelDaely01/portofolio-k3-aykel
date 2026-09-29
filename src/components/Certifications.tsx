import { useRef, useState, useCallback, useEffect } from 'react';
import { Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import { certifications } from '@/lib/portfolioData';
import { useInView } from '@/hooks/useInView';

export default function Certifications() {
  const { ref, inView } = useInView();
  
  // Ref & State untuk fitur carousel/geser
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
    <section
      id="sertifikasi"
      ref={ref}
      className="py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-2xl mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-safety-green/10 rounded-full mb-4">
            <Lock className="w-4 h-4 text-safety-green" />
            <span className="text-xs font-semibold text-safety-green uppercase tracking-wider">Terverifikasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Sertifikasi & Kualifikasi Resmi
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Lisensi dan kualifikasi profesional yang terverifikasi dan siap dilampirkan untuk proses rekrutmen.
          </p>
        </div>

        {/* Privacy Notice */}
        <div className="mb-8 flex items-start gap-2.5 p-4 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl max-w-2xl">
          <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
          <p className="text-sm text-amber-700 dark:text-amber-300">
            Demi keamanan data pribadi, nomor lisensi dan salinan penuh disamarkan di halaman publik ini.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const diff = touchStart.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 50) scrollByDir(diff > 0 ? 'right' : 'left');
            }}
            className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
          >
            {certifications.map((cert, idx) => (
              <div
                key={cert.title}
                className={`snap-start shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transition: 'all 0.5s ease', transitionDelay: `${idx * 100}ms` }}
              >
                <div className="group relative flex flex-col justify-between h-full p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-safety-green/40 transition-all duration-500 hover:shadow-lg hover:shadow-safety-green/5 cursor-default">
                  <div>
                    {/* Icon Badge */}
                    <div className={`flex items-center justify-center w-14 h-14 ${cert.iconBg} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className={`w-7 h-7 ${cert.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-xs font-semibold text-safety-green mb-3 uppercase tracking-wider">
                      {cert.issuer}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Verified badge */}
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-safety-green" />
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Terverifikasi</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Panah Kiri */}
          <button
            onClick={() => scrollByDir('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`absolute top-1/2 -left-3 lg:-left-5 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 ${
              canScrollLeft
                ? 'opacity-100 hover:bg-safety-green hover:text-white text-slate-700 dark:text-slate-200'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Tombol Panah Kanan */}
          <button
            onClick={() => scrollByDir('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`absolute top-1/2 -right-3 lg:-right-5 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 ${
              canScrollRight
                ? 'opacity-100 hover:bg-safety-green hover:text-white text-slate-700 dark:text-slate-200'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {certifications.map((_, idx) => (
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