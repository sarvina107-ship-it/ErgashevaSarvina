import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, CheckCircle, Info, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import confetti from 'canvas-confetti';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = [
    { id: 'all', label: t('projects.filterAll') },
    { id: 'fullstack', label: t('projects.filterFullstack') },
    { id: 'next', label: t('projects.filterNext') },
    { id: 'live', label: t('projects.filterLive') },
  ];

  const projectsData = [
    {
      id: 'benkov',
      title: 'Benkov Art School',
      subtitle: t('portfolioData.benkov.subtitle'),
      category: t('portfolioData.catProductionWeb'),
      type: t('portfolioData.typeFullstack'),
      featured: true,
      desc: t('portfolioData.benkov.desc'),
      highlights: t('portfolioData.benkov.highlights', { returnObjects: true }),
      tech: ['React 19', 'Vite', 'Tailwind CSS', 'i18next', 'React Router', 'Railway API', 'Vercel'],
      link: 'https://www.benkovschool.uz/',
      github: 'https://github.com/sarvina107-ship-it',
      statusKey: 'production',
    },
    {
      id: 'cake',
      title: 'Cake — Velvet & Bloom',
      subtitle: t('portfolioData.cake.subtitle'),
      category: t('portfolioData.catNextECommerce'),
      type: t('portfolioData.typeNextApp'),
      featured: true,
      desc: t('portfolioData.cake.desc'),
      highlights: t('portfolioData.cake.highlights', { returnObjects: true }),
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Lucide React', 'Canvas Confetti'],
      link: 'https://github.com/sarvina107-ship-it',
      github: 'https://github.com/sarvina107-ship-it',
      statusKey: 'mvp',
    },
    {
      id: 'avtorent',
      title: 'AvtoRent TAS',
      subtitle: t('portfolioData.avtorent.subtitle'),
      category: t('portfolioData.catNextService'),
      type: t('portfolioData.typeNextPlatform'),
      featured: true,
      desc: t('portfolioData.avtorent.desc'),
      highlights: t('portfolioData.avtorent.highlights', { returnObjects: true }),
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Lucide React'],
      link: 'https://github.com/sarvina107-ship-it',
      github: 'https://github.com/sarvina107-ship-it',
      statusKey: 'mvp',
    },
    {
      id: 'instagram',
      title: 'Instagram Clone',
      subtitle: t('portfolioData.instagram.subtitle'),
      category: t('portfolioData.catFullstack'),
      type: t('portfolioData.typeReactFullstack'),
      featured: true,
      desc: t('portfolioData.instagram.desc'),
      highlights: t('portfolioData.instagram.highlights', { returnObjects: true }),
      tech: ['React 19', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'TanStack Query', 'Vite PWA'],
      link: 'https://github.com/sarvina107-ship-it',
      github: 'https://github.com/sarvina107-ship-it',
      statusKey: 'fullstack',
    },
    {
      id: 'humster',
      title: 'Humster Kombat Clicker',
      subtitle: t('portfolioData.humster.subtitle'),
      category: t('portfolioData.catGames'),
      type: t('portfolioData.typeReactGame'),
      featured: false,
      desc: t('portfolioData.humster.desc'),
      highlights: t('portfolioData.humster.highlights', { returnObjects: true }),
      tech: ['React 19', 'Vite', 'React Router v7', 'Context API', 'CSS3 Animations'],
      link: 'https://github.com/sarvina107-ship-it',
      github: 'https://github.com/sarvina107-ship-it',
      statusKey: 'done',
    },
    {
      id: 'weather',
      title: 'Weather App',
      subtitle: t('portfolioData.weather.subtitle'),
      category: t('portfolioData.catFrontendAPI'),
      type: t('portfolioData.typeJSSPA'),
      featured: false,
      desc: t('portfolioData.weather.desc'),
      highlights: t('portfolioData.weather.highlights', { returnObjects: true }),
      tech: ['JavaScript', 'Tailwind CSS', 'Weather API', 'Vercel'],
      link: 'https://weather-five-phi-17.vercel.app/',
      github: 'https://github.com/sarvina107-ship-it',
      statusKey: 'production',
    },
    {
      id: 'techstore',
      title: 'Tech Store',
      subtitle: t('portfolioData.techstore.subtitle'),
      category: t('portfolioData.catFrontendECommerce'),
      type: t('portfolioData.typeECommerce'),
      featured: false,
      desc: t('portfolioData.techstore.desc'),
      highlights: t('portfolioData.techstore.highlights', { returnObjects: true }),
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      link: 'https://tech-store-rosy.vercel.app/',
      github: 'https://github.com/sarvina107-ship-it',
      statusKey: 'production',
    },
  ];

  const statusLabel = (key) => {
    const map = {
      production: t('projects.statusProduction'),
      mvp: t('projects.statusMVP'),
      fullstack: t('projects.statusFullstack'),
      done: t('projects.statusDone'),
    };
    return map[key] || key;
  };

  const productionStatusKey = 'production';

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'fullstack') return p.type.toLowerCase().includes('fullstack') || p.category.toLowerCase().includes('fullstack');
    if (selectedCategory === 'next') return p.tech.some(t => t.toLowerCase().includes('next'));
    if (selectedCategory === 'live') return p.statusKey === 'production';
    return true;
  });

  const handleOpenLive = (url) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#556B2F', '#D4A259', '#8FA382']
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#F9F9F7] py-20 md:py-28 px-4 sm:px-8 overflow-hidden border-t border-[#2C3327]/5"
    >
      <div className="container mx-auto max-w-6xl z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[#6B7F5C] font-bold uppercase tracking-widest text-xs">
              <span className="w-8 md:w-12 h-[2px] bg-[#556B2F]"></span>
              {t('projects.sectionLabel')}
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#2C3327] leading-tight">
              {t('projects.title')} <span className="italic text-[#D4A259] font-normal">{t('projects.titleItalic')}</span>
            </h2>
          </div>
          <p className="max-w-md text-[#4A5043] text-base sm:text-lg font-normal leading-relaxed">
            {t('projects.description')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#556B2F] text-white shadow-md shadow-[#556B2F]/20 scale-102'
                  : 'bg-white text-[#4A5043] border border-[#2C3327]/10 hover:border-[#D4A259] hover:bg-stone-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-white border border-[#2C3327]/8 rounded-[2rem] p-6 sm:p-7 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle top glow bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8FA382] via-[#D4A259] to-[#556B2F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-bold text-[#D4A259] uppercase tracking-widest bg-[#D4A259]/10 px-2.5 py-1 rounded-full">
                  {project.category}
                </span>
                <span
                  className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                    project.statusKey === productionStatusKey
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}
                >
                  {statusLabel(project.statusKey)}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-serif font-bold text-[#2C3327] mb-1.5 group-hover:text-[#556B2F] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-[#6B7F5C] font-medium mb-4 line-clamp-1">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-[#4A5043] leading-relaxed mb-6 flex-grow line-clamp-3">
                {project.desc}
              </p>

              {/* Key Highlight Preview (1-2 points) */}
              <div className="space-y-2 mb-6 bg-[#F9F9F7] p-3.5 rounded-xl border border-[#2C3327]/5">
                {(Array.isArray(project.highlights) ? project.highlights : []).slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#2C3327]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#556B2F] shrink-0 mt-0.5" />
                    <span className="line-clamp-1 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.slice(0, 4).map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-semibold text-[#4A5043] bg-stone-100 px-2 py-0.5 rounded-md"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-[10px] font-semibold text-[#6B7F5C] bg-stone-100 px-1.5 py-0.5 rounded-md">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#2C3327]/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#556B2F] hover:text-[#3E4E22] transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>{t('projects.details')}</span>
                </button>

                {project.link.startsWith('http') && !project.link.includes('github') ? (
                  <button
                    onClick={() => handleOpenLive(project.link)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#556B2F] text-white text-xs font-bold rounded-full hover:bg-[#3E4E22] transition-all shadow-xs hover:shadow-md cursor-pointer"
                  >
                    <span>{t('projects.viewSite')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-stone-100 text-[#2C3327] hover:bg-stone-200 text-xs font-bold rounded-full transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{t('projects.repository')}</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Modal for In-depth Project Details */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto">
              
              {/* Close button */}
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-[#4A5043] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-[#D4A259] uppercase tracking-wider bg-[#D4A259]/15 px-3 py-1 rounded-full">
                      {activeProjectModal.category}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-[#6B7F5C]">
                      {activeProjectModal.type}
                    </span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-[#2C3327]">
                    {activeProjectModal.title}
                  </h3>
                  <p className="text-sm text-[#6B7F5C] font-medium mt-1">
                    {activeProjectModal.subtitle}
                  </p>
                </div>

                <p className="text-base text-[#4A5043] leading-relaxed">
                  {activeProjectModal.desc}
                </p>

                {/* Highlights list */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-[#6B7F5C] uppercase tracking-wider">
                    {t('projects.highlights')}
                  </h4>
                  <div className="space-y-2 bg-[#F9F9F7] p-4 rounded-2xl border border-[#2C3327]/5">
                    {(Array.isArray(activeProjectModal.highlights) ? activeProjectModal.highlights : []).map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-[#2C3327]">
                        <CheckCircle className="w-4 h-4 text-[#556B2F] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-[#6B7F5C] uppercase tracking-wider">
                    {t('projects.techStack')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProjectModal.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-stone-100 text-[#2C3327] rounded-lg text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTAs */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                  <a
                    href={activeProjectModal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#4A5043] hover:text-[#556B2F]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>{t('projects.githubProfile')}</span>
                  </a>

                  {activeProjectModal.link.startsWith('http') && !activeProjectModal.link.includes('github') && (
                    <button
                      onClick={() => handleOpenLive(activeProjectModal.link)}
                      className="px-6 py-2.5 bg-[#556B2F] text-white rounded-full text-xs font-bold hover:bg-[#3E4E22] transition-all shadow-md cursor-pointer flex items-center gap-2"
                    >
                      <span>{t('projects.openLiveSite')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
