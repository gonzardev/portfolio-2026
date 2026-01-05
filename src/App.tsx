import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CursorSpotlight from './components/CursorSpotlight';
import LanguageSwitch from './components/LanguageSwitch';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function PortfolioContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 relative selection:bg-blue-500/30">
      <CursorSpotlight />

      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md shadow-sm z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-100">Portfolio</h1>
            <div className="flex items-center gap-8">
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">{t('nav.about')}</a>
                <a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors">{t('nav.skills')}</a>
                <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors">{t('nav.projects')}</a>
                <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">{t('nav.contact')}</a>
              </div>
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="bg-slate-950 text-white py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">{t('contact.footer')}</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}

export default App;
