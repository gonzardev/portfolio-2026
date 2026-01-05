import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitch() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 bg-slate-900/50 p-1.5 rounded-lg border border-slate-700">
            <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${language === 'es'
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
            >
                ES
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${language === 'en'
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
            >
                EN
            </button>
        </div>
    );
}
