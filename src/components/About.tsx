import { Code2, Lightbulb, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-100 mb-12 text-center">{t('about.title')}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              {t('about.p2')}
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              {t('about.p3')}
            </p>
          </div>
          <div className="grid gap-6">
            <div className="bg-slate-900/50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-slate-800 hover:border-slate-700">
              <Code2 className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-slate-200 mb-2">{t('about.cleanCode')}</h3>
              <p className="text-slate-400">
                {t('about.cleanCodeDesc')}
              </p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-slate-800 hover:border-slate-700">
              <Lightbulb className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-slate-200 mb-2">{t('about.problemSolver')}</h3>
              <p className="text-slate-400">
                {t('about.problemSolverDesc')}
              </p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-slate-800 hover:border-slate-700">
              <Rocket className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-slate-200 mb-2">{t('about.quickLearner')}</h3>
              <p className="text-slate-400">
                {t('about.quickLearnerDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
