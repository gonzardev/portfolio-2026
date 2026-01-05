import { Code2, Database, GitBranch, Github, Server, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    {
      name: 'Python',
      icon: Code2,
      color: 'from-blue-500 to-blue-600',
      description: t('skills.python.desc')
    },
    {
      name: 'Django',
      icon: Server,
      color: 'from-green-500 to-green-600',
      description: t('skills.django.desc')
    },
    {
      name: 'SQL',
      icon: Database,
      color: 'from-orange-500 to-orange-600',
      description: t('skills.sql.desc')
    },
    {
      name: 'Git',
      icon: GitBranch,
      color: 'from-red-500 to-red-600',
      description: t('skills.git.desc')
    },
    {
      name: 'GitHub',
      icon: Github,
      color: 'from-slate-700 to-slate-800',
      description: t('skills.github.desc')
    },
    {
      name: 'FastAPI',
      icon: Zap,
      color: 'from-cyan-500 to-cyan-600',
      description: t('skills.fastapi.desc')
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-100 mb-4 text-center">{t('skills.title')}</h2>
        <p className="text-center text-slate-400 mb-12 text-lg">
          {t('skills.subtitle')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-900/50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group border border-slate-800 hover:border-slate-700"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-2">{skill.name}</h3>
              <p className="text-slate-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
