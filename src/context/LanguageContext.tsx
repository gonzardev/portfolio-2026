import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        // Nav
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': "Hi, I'm",
        'hero.role': 'Trainee specializing in Python',
        'hero.desc': 'Passionate about building robust server-side applications and working with databases. Currently learning and growing my skills in backend development.',
        'hero.viewWork': 'View My Work',
        'hero.contact': 'Get In Touch',

        // About
        'about.title': 'About Me',
        'about.p1': "I'm a backend developer trainee with a strong foundation in Python and Django. I'm passionate about creating efficient, scalable server-side applications and working with databases to solve real-world problems.",
        'about.p2': "Currently, I'm focused on expanding my knowledge in backend development, learning best practices, and building projects that demonstrate my growing skills in the field.",
        'about.p3': "I'm eager to contribute to meaningful projects and continue learning from experienced developers in the industry.",
        'about.cleanCode': 'Clean Code',
        'about.cleanCodeDesc': 'Writing maintainable and well-documented code following best practices',
        'about.problemSolver': 'Problem Solver',
        'about.problemSolverDesc': 'Analytical mindset focused on finding efficient solutions to complex challenges',
        'about.quickLearner': 'Quick Learner',
        'about.quickLearnerDesc': 'Constantly learning new technologies and adapting to industry standards',

        // Skills
        'skills.title': 'Technical Skills',
        'skills.subtitle': 'Technologies and tools I work with',
        'skills.python.desc': 'Core programming language for backend development',
        'skills.django.desc': 'Python web framework for building robust applications',
        'skills.sql.desc': 'Database querying and management',
        'skills.git.desc': 'Version control and collaboration',
        'skills.github.desc': 'Code hosting and project management',
        'skills.fastapi.desc': 'High-performance web framework for building APIs',

        // Projects
        'projects.title': 'Projects',
        'projects.subtitle': 'Sample projects showcasing my backend development skills',
        'projects.notes.title': 'Sales Management API',
        'projects.notes.desc': 'A high-performance RESTful API built with FastAPI. It features relational modeling in PostgreSQL, data validation using Pydantic, and optimized CRUD operations for real-world inventory and sales management.',
        'projects.movie.title': 'Movie Database Web Application',
        'projects.movie.desc': 'A Django application for managing a movie collection with user authentication. Features include adding, updating, and deleting movies, searching functionality, and a user dashboard to track favorite films.',
        'projects.ecommerce.title': 'E-commerce Database Design',
        'projects.ecommerce.desc': 'Comprehensive SQL database schema for an online store. Includes normalized tables for products, customers, orders, and inventory management with complex queries for reporting and analytics.',
        'projects.weather.title': 'Weather Data Processing Tool',
        'projects.weather.desc': 'Python CLI application that fetches weather data from an API, processes it, and stores results in a database. Demonstrates file handling, data validation, and database integration.',
        'projects.code': 'Code',
        'projects.demo': 'Demo',

        // Contact
        'contact.title': 'Get In Touch',
        'contact.desc': "I'm currently looking for opportunities as a backend developer trainee. Feel free to reach out if you'd like to connect!",
        'contact.form.title': 'Send a Message',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.message': 'Message',
        'contact.form.send': 'Send Message',
        'contact.footer': '© 2024 Backend Developer Portfolio. Built with React & Tailwind CSS',
    },
    es: {
        // Nav
        'nav.about': 'Sobre Mí',
        'nav.skills': 'Skills',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',

        // Hero
        'hero.greeting': 'Hola, soy',
        'hero.role': 'Trainee especializado en Python',
        'hero.desc': 'Apasionado por construir aplicaciones robustas del lado del servidor y trabajar con bases de datos. Actualmente aprendiendo y mejorando mis habilidades en desarrollo backend.',
        'hero.viewWork': 'Ver Proyectos',
        'hero.contact': 'Contáctame',

        // About
        'about.title': 'Sobre Mí',
        'about.p1': 'Soy un desarrollador backend trainee con una base sólida en Python y Django. Me apasiona crear aplicaciones eficientes y escalables, y trabajar con bases de datos para resolver problemas reales.',
        'about.p2': 'Actualmente, me enfoco en expandir mi conocimiento en desarrollo backend, aprender mejores prácticas y construir proyectos que demuestren mis habilidades.',
        'about.p3': 'Estoy ansioso por contribuir en proyectos significativos y continuar aprendiendo de desarrolladores experimentados en la industria.',
        'about.cleanCode': 'Código Limpio',
        'about.cleanCodeDesc': 'Escribir código mantenible y bien documentado siguiendo las mejores prácticas',
        'about.problemSolver': 'Resolución de Problemas',
        'about.problemSolverDesc': 'Mentalidad analítica enfocada en encontrar soluciones eficientes a desafíos complejos',
        'about.quickLearner': 'Aprendizaje Rápido',
        'about.quickLearnerDesc': 'Aprendiendo constantemente nuevas tecnologías y adaptándome a los estándares de la industria',

        // Skills
        'skills.title': 'Habilidades Técnicas',
        'skills.subtitle': 'Tecnologías y herramientas con las que trabajo',
        'skills.python.desc': 'Lenguaje de programación principal para desarrollo backend',
        'skills.django.desc': 'Framework web de Python para construir aplicaciones robustas',
        'skills.sql.desc': 'Consultas y gestión de bases de datos',
        'skills.git.desc': 'Control de versiones y colaboración',
        'skills.github.desc': 'Alojamiento de código y gestión de proyectos',
        'skills.fastapi.desc': 'Framework moderno y rápido para creación de APIs',

        // Projects
        'projects.title': 'Proyectos',
        'projects.subtitle': 'Proyectos de ejemplo mostrando mis habilidades en desarrollo backend',
        'projects.notes.title': 'API de Gestión de Ventas',
        'projects.notes.desc': 'API RESTful construida con FastAPI. Incluye modelos relacionales en PostgreSQL, validación de datos con Pydantic y operaciones CRUD optimizadas para la gestión de stock y ventas de un emprendimiento real.',
        'projects.movie.title': 'Aplicación Web de Base de Datos de Películas',
        'projects.movie.desc': 'Una aplicación Django para gestionar una colección de películas con autenticación de usuarios. Incluye agregar, actualizar y eliminar películas, búsqueda y un panel de usuario.',
        'projects.ecommerce.title': 'Diseño de Base de Datos E-commerce',
        'projects.ecommerce.desc': 'Esquema de base de datos SQL completo para una tienda en línea. Incluye tablas normalizadas para productos, clientes, pedidos e inventario.',
        'projects.weather.title': 'Herramienta de Procesamiento de Clima',
        'projects.weather.desc': 'Aplicación CLI en Python que obtiene datos del clima de una API, los procesa y los almacena. Demuestra manejo de archivos, validación de datos e integración con BD.',
        'projects.code': 'Código',
        'projects.demo': 'Demo',

        // Contact
        'contact.title': 'Contáctame',
        'contact.desc': 'Actualmente busco oportunidades como desarrollador backend trainee. ¡No dudes en contactarme si quieres conectar!',
        'contact.form.title': 'Enviar Mensaje',
        'contact.form.name': 'Nombre',
        'contact.form.email': 'Email',
        'contact.form.message': 'Mensaje',
        'contact.form.send': 'Enviar',
        'contact.footer': '© 2024 Portafolio Backend. Construido con React y Tailwind CSS',
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('es'); // Default to Spanish as requested context implies Spanish speaker

    const t = (key: string) => {
        return translations[language][key as keyof typeof translations['en']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
