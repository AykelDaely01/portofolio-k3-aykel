import { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, FileText, ClipboardCheck, Wrench, Scale } from 'lucide-react';
import { projects, projectFilters, type Project } from '@/lib/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>('Semua');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeDot, setActiveDot] = useState(0);

  const filtered =
    activeFilter === 'Semua' ? projects : projects.filter((p) => p.category === activeFilter);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    const cardWidth = el.clientWidth / Math.min(filtered.length, getVisibleCount());
    const dotIdx = Math.round(el.scrollLeft / cardWidth);
    setActiveDot(Math.min(dotIdx, filtered.length - 1));
  }, [filtered.length]);

  function getVisibleCount() {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  useEffect(() => {
    updateScrollState();
  }, [activeFilter, updateScrollState]);

  const scrollByDir = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const scrollToIndex = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth / Math.min(filtered.length, getVisibleCount());
    el.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
  };

  // Touch swipe state
  const touchStart = useRef(0);

  return (
    <section id="proyek" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-safety-green/10 rounded-full mb-4">
            <ClipboardCheck className="w-4 h-4 text-safety-green" />
            <span className="text-xs font-semibold text-safety-green uppercase tracking-wider">Portofolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Studi Kasus & Dokumentasi Proyek K3
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Kumpulan proyek dan pengalaman praktik di lapangan dengan dokumentasi lengkap.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-safety-green text-white shadow-lg shadow-safety-green/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-safety-green/40 hover:text-safety-green'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Scroll container */}
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
            {filtered.map((project) => (
              <div
                key={project.id}
                className="snap-start shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] group"
              >
                <div className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:border-safety-green/30 transition-all duration-500">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-safety-green text-white text-xs font-semibold rounded-md shadow-md">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow line-clamp-3">
                      {project.summary}
                    </p>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="mt-4 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-safety-green hover:text-white font-semibold text-sm rounded-lg transition-all duration-300"
                    >
                      Baca Detail Studi Kasus
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Buttons */}
          {filtered.length > getVisibleCount() && (
            <>
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
            </>
          )}

          {/* Dot Indicators */}
          {filtered.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {filtered.map((_, idx) => (
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
          )}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-white/80 dark:bg-slate-700/80 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-2xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          <div className="absolute bottom-4 left-5">
            <span className="px-3 py-1.5 bg-safety-green text-white text-xs font-semibold rounded-md shadow-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
            {project.title}
          </h3>

          <ModalSection icon={<FileText className="w-4 h-4 text-safety-green" />} title="Latar Belakang">
            {project.background}
          </ModalSection>

          <ModalSection icon={<Wrench className="w-4 h-4 text-safety-amber" />} title="Metodologi">
            {project.methodology}
          </ModalSection>

          <ModalSection icon={<ClipboardCheck className="w-4 h-4 text-safety-green" />} title="Hasil CAPA">
            {project.capaResult}
          </ModalSection>

          <ModalSection icon={<Scale className="w-4 h-4 text-slate-500 dark:text-slate-400" />} title="Regulasi Terkait">
            {project.regulation}
          </ModalSection>
        </div>
      </div>
    </div>
  );
}

function ModalSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1.5">
        {icon}
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{title}</h4>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6">{children}</p>
    </div>
  );
}
