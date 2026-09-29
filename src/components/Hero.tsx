import { Download, ArrowDown, MessageCircle, Shield, BadgeCheck } from 'lucide-react';
import { personal, headline, stats } from '@/lib/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors"
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern dark:dot-pattern-dark opacity-60" />
      {/* Gradient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-safety-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-safety-amber/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-safety-green/10 border border-safety-green/20 rounded-full w-fit">
              <Shield className="w-4 h-4 text-safety-green" />
              <span className="text-sm font-semibold text-safety-green">{headline.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-[1.15] text-balance">
              Safe Minds.{' '}
              <span className="text-safety-green">Safe Hands.</span> <span className='text-safety-amber dark:text-white leading-[1.15] text-balance'>Safe Plans.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              {headline.subtitle}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center gap-1 p-3 sm:p-4 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-safety-green/30 transition-all duration-300"
                >
                  <stat.icon className="w-5 h-5 text-safety-green mb-1" />
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">        
              <a
                href='...'
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-safety-green hover:bg-safety-green-dark text-white font-semibold rounded-xl shadow-lg shadow-safety-green/20 hover:shadow-safety-green/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <Download className="w-5 h-5" />
                Unduh CV (PDF)
              </a>
            
              {/* { <button className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-safety-green hover:bg-safety-green-dark text-white font-semibold rounded-xl shadow-lg shadow-safety-green/20 hover:shadow-safety-green/30 transition-all duration-300 hover:scale-[1.02]">
                <Download className="w-5 h-5" />
                Unduh CV (PDF)
              </button> } */}
              <button
                onClick={() => document.querySelector('#proyek')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-safety-amber hover:bg-safety-amber-dark text-white font-semibold rounded-xl shadow-lg shadow-safety-amber/20 hover:shadow-safety-amber/30 transition-all duration-300 hover:scale-[1.02]"
              >                
                Lihat Portofolio Proyek
                <ArrowDown className="w-5 h-5" />
              </button>
              <a
                href={`https://wa.me/${personal.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-safety-green hover:text-safety-green dark:hover:text-safety-green-light font-semibold rounded-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="sm:hidden lg:inline">WhatsApp</span>
                <span className="hidden sm:inline lg:hidden">Hubungi via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Profile Photo */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Glowing border frame */}
              <div className="relative rounded-2xl overflow-hidden glow-border animate-glow-pulse max-w-sm lg:max-w-md w-full">
                <img
                  src={personal.profileImage}
                  alt="Aykel Daely - Safety Officer"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating Badge - HSE Certified */}
              <div className="absolute -top-3 -left-3 lg:-top-4 lg:-left-4 animate-float">
                <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-safety-green/20">
                  <div className="flex items-center justify-center w-8 h-8 bg-safety-green/10 rounded-lg">
                    <Shield className="w-5 h-5 text-safety-green" />
                  </div>
                  <span className="text-xs lg:text-sm font-bold text-slate-900 dark:text-white">
                    HSE Certified
                  </span>
                </div>
              </div>

              {/* Floating Badge - Bottom Right */}
              {/* <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 animate-float [animation-delay:2s]">
                <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-safety-amber/20">
                  <div className="flex items-center justify-center w-8 h-8 bg-safety-amber/10 rounded-lg">
                    <BadgeCheck className="w-5 h-5 text-safety-amber" />
                  </div>
                  <span className="text-xs lg:text-sm font-bold text-slate-900 dark:text-white">
                    ISO 45001
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
