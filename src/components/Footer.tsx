import { Shield, Heart, HardHat } from 'lucide-react';
import { personal, navItems } from '@/lib/portfolioData';

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-black border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-10 h-10 bg-safety-green/10 rounded-xl">
              <Shield className="w-5 h-5 text-safety-green" />
            </div>
            <div>
              <p className="font-bold text-white text-base">{personal.name}</p>
              <p className="text-xs text-slate-400">{personal.role}</p>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-slate-400 hover:text-safety-green transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-400">
            Hak Cipta &copy; 2026 {personal.name}. Seluruh hak dilindungi.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-safety-green fill-safety-green" /> untuk Keselamatan Kerja <HardHat className="w-3.5 h-3.5 text-safety-green fill-safety-green"/>
          </p>
        </div>
      </div>
    </footer>
  );
}
