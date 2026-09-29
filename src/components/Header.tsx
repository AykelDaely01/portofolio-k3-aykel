import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, BadgeCheck } from 'lucide-react';
import { useTheme } from '@/theme/ThemeContext';
import { personal, navItems } from '@/lib/portfolioData';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((n) => n.href);
      const current = sections.find((href) => {
        const el = document.querySelector(href);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Left: Avatar + Name */}
          <div className="flex items-center gap-2.5">
            <div className="relative shrink-0">
              <img
                src={personal.avatarImage}
                alt={personal.name}
                className="w-9 h-9 lg:w-10 lg:h-10 rounded-full object-cover ring-2 ring-safety-green ring-offset-2 ring-offset-white dark:ring-offset-slate-900"
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-base lg:text-lg text-slate-900 dark:text-white tracking-tight">
                {personal.name}
              </span>
              <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500/20 shrink-0" />
            </div>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.href
                    ? 'text-safety-green bg-safety-green/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-safety-green hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right: Theme toggle + Badge */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-safety-green/10 rounded-full border border-safety-green/20">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-safety-green animate-ping opacity-75" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-safety-green" />
              </span>
              <span className="text-xs font-semibold text-safety-green whitespace-nowrap">
                Open for HSE Roles
              </span>
            </div>

            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1 pt-2 border-t border-slate-200 dark:border-slate-800">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.href
                      ? 'text-safety-green bg-safety-green/10'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="sm:hidden mt-2">
                <div className="flex items-center gap-1.5 px-4 py-2 bg-safety-green/10 rounded-lg border border-safety-green/20 w-fit">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-safety-green animate-ping opacity-75" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-safety-green" />
                  </span>
                  <span className="text-xs font-semibold text-safety-green">Open for HSE Roles</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
