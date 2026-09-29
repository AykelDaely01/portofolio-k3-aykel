import { Wrench, Cpu, Users } from 'lucide-react';
import { skillCategories } from '@/lib/portfolioData';
import { useInView } from '@/hooks/useInView';

const headerIcons = [Wrench, Cpu, Users];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="keahlian"
      ref={ref}
      className="py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-2xl mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-safety-green/10 rounded-full mb-4">
            <Wrench className="w-4 h-4 text-safety-green" />
            <span className="text-xs font-semibold text-safety-green uppercase tracking-wider">Kompetensi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Keahlian & Spesialisasi K3
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Kompetensi teknis, penguasaan perangkat lunak, dan soft skill yang siap diterapkan di lapangan.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, catIdx) => {
            const HeaderIcon = headerIcons[catIdx] ?? Wrench;
            return (
              <div
                key={category.title}
                className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${catIdx * 150}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-safety-green/10 rounded-xl">
                    <HeaderIcon className="w-5 h-5 text-safety-green" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>{category.emoji}</span>
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5 pl-1">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full hover:border-safety-green hover:shadow-md hover:shadow-safety-green/10 transition-all duration-300 cursor-default hover:scale-[1.03]"
                    >
                      <skill.icon className="w-4 h-4 text-slate-400 group-hover:text-safety-green transition-colors duration-300" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-safety-green dark:group-hover:text-safety-green-light transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
