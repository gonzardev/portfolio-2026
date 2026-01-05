import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.movie.title'),
      description: t('projects.movie.desc'),
      technologies: ['Python', 'Django', 'SQLite', 'HTML/CSS'],
      github: 'https://github.com/gonzaloromero',
      demo: '#'
    },
    {
      title: t('projects.notes.title'),
      description: t('projects.notes.desc'),
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/gonzaloromero',
      demo: 'https://fastapi-6azo.onrender.com'
    },
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.desc'),
      technologies: ['SQL', 'PostgreSQL', 'Database Design'],
      github: 'https://github.com/gonzaloromero',
      demo: '#'
    },
    {
      title: t('projects.weather.title'),
      description: t('projects.weather.desc'),
      technologies: ['Python', 'APIs', 'Data Processing', 'CLI'],
      github: 'https://github.com/gonzaloromero',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-100 mb-4 text-center">{t('projects.title')}</h2>
        <p className="text-center text-slate-400 mb-12 text-lg">
          {t('projects.subtitle')}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-800 hover:border-slate-700"
            >
              <h3 className="text-2xl font-semibold text-slate-200 mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium border border-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors font-medium"
                >
                  <Github className="w-5 h-5" />
                  {t('projects.code')}
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t('projects.demo')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
