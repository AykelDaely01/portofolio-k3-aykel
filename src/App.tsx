import { ThemeProvider } from '@/theme/ThemeContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Organizations from '@/components/Organizations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Import icon dari lucide-react untuk tampilan Under Development
import { Wrench, Mail, Linkedin } from 'lucide-react';
import { personal } from '@/lib/portfolioData';

// 💡 UBAH KE 'true' UNTUK MENAMPILKAN "MODE PENGEMBANGAN"
// 💡 UBAH KE 'false' JIKA WEBSITE SUDAH SIAP DIPUBLIKASIKAN SANGAT RAPI
const IS_UNDER_DEVELOPMENT = true;

function App() {
  // Jika mode pengembangan AKTIF, tampilkan halaman ini saja:
  if (IS_UNDER_DEVELOPMENT) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md space-y-6">
            {/* Icon Dekorasi */}
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto border border-emerald-500/20 animate-pulse">
              <Wrench className="w-8 h-8" />
            </div>

            {/* Judul & Deskripsi */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Website Dalam Pembaruan
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Portofolio ini sedang dalam proses penyempurnaan tampilan. Silakan berkunjung kembali dalam waktu dekat!
              </p>
            </div>

            {/* Alternatif Kontak untuk Recruiter */}
            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Tetap Terhubung / Kontak Langsung:
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                {personal?.linkedin && (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
                {personal?.email && (
                  <a
                    href={`mailto:${personal.email}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  // Jika IS_UNDER_DEVELOPMENT = false, tampilan asli websitemu akan muncul kembali:
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Certifications />
          <Projects />
          <Skills />
          <Organizations />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;