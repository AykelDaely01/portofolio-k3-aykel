import { ThemeProvider } from '@/theme/ThemeContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Organizations from '@/components/Organizations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
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
