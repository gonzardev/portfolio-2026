import { ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6">
            {t('hero.greeting')} <span className="text-blue-500">Gonzalo Romero</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8">
            {t('hero.role')}
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            {t('hero.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:checkbox-blue-500/20 hover:scale-105"
            >
              {t('hero.viewWork')}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-slate-800 text-slate-200 rounded-lg font-medium hover:bg-slate-700 transition-all hover:shadow-lg border-2 border-slate-700 hover:border-slate-600"
            >
              {t('hero.contact')}
            </a>
          </div>
        </div>
        <a href="#about" className="inline-block mt-20 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </a>
      </div>
    </section>
  );
}
