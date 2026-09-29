import { ThemeProvider } from '@/theme/ThemeContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Organizations from '@/components/Organizations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Import icon dekorasi background (Plus, Star, Sparkles, X, Wrench, Mail, Linkedin)
import { Wrench, Mail, Linkedin, Plus, Sparkles, Star, X } from 'lucide-react';
import { personal } from '@/lib/portfolioData';

// 💡 UBAH KE 'true' UNTUK MODE PENGEMBANGAN
// 💡 UBAH KE 'false' JIKA WEBSITE SUDAH SIAP DIPUBLIKASIKAN
const IS_UNDER_DEVELOPMENT = true;

function App() {
  if (IS_UNDER_DEVELOPMENT) {
    return (
      <ThemeProvider>
        <div className="relative min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center overflow-hidden select-none">
          
          {/* ================= CSS ANIMASI KHUSUS ================= */}
          <style>{`
            @keyframes floatUp {
  0% { transform: translateY(100vh) scale(0.8); opacity: 0; }
  50% { opacity: 0.6; }
  100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
}
.partikel-1 { animation: floatUp 12s linear infinite; }
.partikel-2 { animation: floatUp 16s linear infinite 3s; }
.partikel-3 { animation: floatUp 20s linear infinite 7s; }
            
            @keyframes moveDiagonal {
              0% { transform: translate(0, 0) rotate(0deg); }
              50% { transform: translate(35px, -35px) rotate(180deg); }
              100% { transform: translate(0, 0) rotate(360deg); }
            }
            @keyframes moveDiagonalReverse {
              0% { transform: translate(0, 0) rotate(0deg); }
              50% { transform: translate(-30px, 30px) rotate(-180deg); }
              100% { transform: translate(0, 0) rotate(-360deg); }
            }
            @keyframes bgGridDiagonal {
              0% { background-position: 0 0; }
              100% { background-position: 60px 60px; }
            }
            .anim-float-1 { animation: moveDiagonal 10s ease-in-out infinite; }
            .anim-float-2 { animation: moveDiagonalReverse 14s ease-in-out infinite; }
            .anim-float-3 { animation: moveDiagonal 8s ease-in-out infinite; }
            .anim-grid { animation: bgGridDiagonal 12s linear infinite; }
          `}</style>

          {/* ================= BACKGROUND MOTIF & POLA ================= */}
          {/* 1. Grid Motif Bergerak Diagonal */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none anim-grid"
            style={{
              backgroundImage: `radial-gradient(circle, #22c55e 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />

          {/* 2. Cahaya Glow Hijau di Tengah */}
          <div className="absolute w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* 3. Bintang & Tanda Silang/Plus Melayang di Latar (Bergerak Diagonal) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Plus className="absolute top-[12%] left-[10%] w-8 h-8 text-emerald-400/20 anim-float-1" />
            <Star className="absolute top-[25%] left-[20%] w-5 h-5 text-slate-500/20 anim-float-2" />
            <Sparkles className="absolute top-[15%] right-[12%] w-9 h-9 text-emerald-400/25 anim-float-2" />
            <X className="absolute top-[35%] right-[22%] w-6 h-6 text-slate-500/20 anim-float-1" />
            <X className="absolute bottom-[20%] left-[15%] w-7 h-7 text-emerald-400/20 anim-float-3" />
            <Plus className="absolute bottom-[35%] left-[28%] w-5 h-5 text-slate-500/25 anim-float-1" />
            <Star className="absolute bottom-[18%] right-[10%] w-8 h-8 text-emerald-400/20 anim-float-1" />
            <Sparkles className="absolute bottom-[30%] right-[25%] w-6 h-6 text-slate-500/20 anim-float-2" />
          </div>

          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
  {/* Partikel Titik Cahaya */}
  <div className="absolute left-[15%] w-3 h-3 bg-emerald-400 rounded-full blur-[2px] partikel-1" />
  <div className="absolute left-[35%] w-2 h-2 bg-slate-400 rounded-full blur-[1px] partikel-2" />
  <div className="absolute left-[55%] w-4 h-4 bg-emerald-300 rounded-full blur-[3px] partikel-3" />
  <div className="absolute left-[75%] w-2 h-2 bg-emerald-400 rounded-full blur-[1px] partikel-1" />
  <div className="absolute left-[90%] w-3 h-3 bg-slate-300 rounded-full blur-[2px] partikel-2" />
</div>

{/* Glowing Background Center */}
<div className="absolute w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none" />

          {/* ================= KONTEN UTAMA ================= */}
          <div className="relative z-10 max-w-md space-y-6">
            {/* Icon Utama Berpijar */}
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto border border-emerald-500/20 shadow-lg shadow-emerald-500/5 animate-pulse">
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

            {/* Alternatif Kontak */}
            <div className="p-5 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl space-y-3 shadow-xl">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Tetap Terhubung / Kontak Langsung:
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                {personal?.linkedin && (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-all shadow-md hover:scale-[1.02]"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
                
                {/* ✉️ TOMBOL EMAIL PINTAR (AUTO DETECT HP vs PC) */}
                {personal?.email && (
                  <a
                    href={`mailto:${personal.email}`}
                    onClick={(e) => {
                      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                      if (!isMobile) {
                        e.preventDefault();
                        window.open(
                          `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`,
                          '_blank'
                        );
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all hover:scale-[1.02]"
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

  // Jika IS_UNDER_DEVELOPMENT = false, tampilan asli websitemu akan muncul kembali
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