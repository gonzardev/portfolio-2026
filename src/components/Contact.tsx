import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-100 mb-4 text-center">{t('contact.title')}</h2>
        <p className="text-center text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
          {t('contact.desc')}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <a
            href="mailto:gonza.rdev@gmail.com"
            className="flex flex-col items-center p-6 bg-slate-900/50 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group border border-slate-800 hover:border-slate-700"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2">{t('contact.form.email')}</h3>
            <p className="text-slate-400 text-sm">gonza.rdev@gmail.com</p>
          </a>

          <a
            href="https://github.com/gonzardev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-slate-900/50 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group border border-slate-800 hover:border-slate-700"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Github className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2">GitHub</h3>
            <p className="text-slate-400 text-sm">@gonzardev</p>
          </a>

          <a
            href="https://www.linkedin.com/in/gonzalo-romero-a8a56039b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-slate-900/50 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group border border-slate-800 hover:border-slate-700"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2">LinkedIn</h3>
            <p className="text-slate-400 text-sm">Gonzalo Romero</p>
          </a>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-900/50 p-8 rounded-xl shadow-lg border border-slate-800">
          <h3 className="text-2xl font-semibold text-slate-200 mb-6">{t('contact.form.title')}</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-200 placeholder:text-slate-600"
                placeholder={t('contact.form.name')}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-200 placeholder:text-slate-600"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-slate-200 placeholder:text-slate-600"
                placeholder={t('contact.form.message') + "..."}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center gap-2 group hover:shadow-blue-500/20"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              {t('contact.form.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
