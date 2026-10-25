import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Code2,
  Layers,
  FileCode,
  FileJson,
  Palette,
  RefreshCw,
  Layout,
  Server,
  Database,
  Wifi,
  ShieldCheck,
  BookOpen,
  Image,
  GitBranch,
  Cloud,
  Zap,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { FigmaIcon } from './Icons';

const iconMap = {
  Code2,
  Layers,
  FileCode,
  FileJson,
  Palette,
  RefreshCw,
  Layout,
  Server,
  Database,
  Wifi,
  ShieldCheck,
  BookOpen,
  Image,
  GitBranch,
  Cloud,
  Zap,
  Figma: FigmaIcon,
  Cpu
};

const Skills = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const skillsData = [
    {
      category: t('skillsData.cat1.category'),
      description: t('skillsData.cat1.description'),
      skills: [
        { name: 'React 19', level: t('skillsData.cat1.skills.react.level'), icon: 'Code2', desc: t('skillsData.cat1.skills.react.desc') },
        { name: 'Next.js 16', level: t('skillsData.cat1.skills.nextjs.level'), icon: 'Layers', desc: t('skillsData.cat1.skills.nextjs.desc') },
        { name: 'TypeScript', level: t('skillsData.cat1.skills.ts.level'), icon: 'FileCode', desc: t('skillsData.cat1.skills.ts.desc') },
        { name: 'JavaScript (ES6+)', level: t('skillsData.cat1.skills.js.level'), icon: 'FileJson', desc: t('skillsData.cat1.skills.js.desc') },
        { name: 'Tailwind CSS (v3/v4)', level: t('skillsData.cat1.skills.tailwind.level'), icon: 'Palette', desc: t('skillsData.cat1.skills.tailwind.desc') },
        { name: 'TanStack Query v5', level: t('skillsData.cat1.skills.tanstack.level'), icon: 'RefreshCw', desc: t('skillsData.cat1.skills.tanstack.desc') },
        { name: 'HTML5 / CSS3', level: t('skillsData.cat1.skills.html.level'), icon: 'Layout', desc: t('skillsData.cat1.skills.html.desc') },
      ],
    },
    {
      category: t('skillsData.cat2.category'),
      description: t('skillsData.cat2.description'),
      skills: [
        { name: 'Node.js & Express', level: t('skillsData.cat2.skills.node.level'), icon: 'Server', desc: t('skillsData.cat2.skills.node.desc') },
        { name: 'MongoDB & Mongoose', level: t('skillsData.cat2.skills.mongo.level'), icon: 'Database', desc: t('skillsData.cat2.skills.mongo.desc') },
        { name: 'Socket.io', level: t('skillsData.cat2.skills.socket.level'), icon: 'Wifi', desc: t('skillsData.cat2.skills.socket.desc') },
        { name: 'JWT & Security', level: t('skillsData.cat2.skills.jwt.level'), icon: 'ShieldCheck', desc: t('skillsData.cat2.skills.jwt.desc') },
        { name: 'Swagger UI', level: t('skillsData.cat2.skills.swagger.level'), icon: 'BookOpen', desc: t('skillsData.cat2.skills.swagger.desc') },
        { name: 'Multer & Media', level: t('skillsData.cat2.skills.multer.level'), icon: 'Image', desc: t('skillsData.cat2.skills.multer.desc') },
      ],
    },
    {
      category: t('skillsData.cat3.category'),
      description: t('skillsData.cat3.description'),
      skills: [
        { name: 'Git & GitHub', level: t('skillsData.cat3.skills.git.level'), icon: 'GitBranch', desc: t('skillsData.cat3.skills.git.desc') },
        { name: 'Vercel & Railway', level: t('skillsData.cat3.skills.vercel.level'), icon: 'Cloud', desc: t('skillsData.cat3.skills.vercel.desc') },
        { name: 'Vite & PWA', level: t('skillsData.cat3.skills.vite.level'), icon: 'Zap', desc: t('skillsData.cat3.skills.vite.desc') },
        { name: 'UI/UX Design & Figma', level: t('skillsData.cat3.skills.figma.level'), icon: 'Figma', desc: t('skillsData.cat3.skills.figma.desc') },
        { name: 'VS Code & AI Tools', level: t('skillsData.cat3.skills.vscode.level'), icon: 'Cpu', desc: t('skillsData.cat3.skills.vscode.desc') },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center bg-[#F9F9F7] py-20 md:py-28 px-4 sm:px-8 overflow-hidden border-t border-[#2C3327]/5"
    >
      <div className="container mx-auto max-w-6xl z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[#6B7F5C] font-bold uppercase tracking-widest text-xs">
              <span className="w-8 md:w-12 h-[2px] bg-[#D4A259]"></span>
              {t('skills.sectionLabel')}
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#2C3327] leading-tight">
              {t('skills.title')} <br className="hidden sm:block" />
              <span className="italic text-[#556B2F] font-normal">{t('skills.titleItalic')}</span>
            </h2>
          </div>
          <p className="max-w-md text-[#4A5043] text-base sm:text-lg font-normal leading-relaxed">
            {t('skills.description')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
          {skillsData.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-[#556B2F] text-white shadow-md shadow-[#556B2F]/20 scale-102'
                  : 'bg-white text-[#4A5043] border border-[#2C3327]/10 hover:border-[#D4A259] hover:bg-stone-50'
              }`}
            >
              <span>{cat.category}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  activeTab === idx ? 'bg-white/20 text-white' : 'bg-stone-100 text-[#6B7F5C]'
                }`}
              >
                {cat.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 animate-in fade-in duration-500">
          {skillsData[activeTab].skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="group p-6 sm:p-7 bg-white border border-[#2C3327]/8 rounded-[2rem] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Subtle Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8FA382]/30 via-[#D4A259]/50 to-[#556B2F]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#8FA382]/15 text-[#556B2F] group-hover:bg-[#556B2F] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-[#B37F2D] bg-[#D4A259]/15 px-3 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#2C3327] mb-2 group-hover:text-[#556B2F] transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-sm text-[#4A5043] leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#2C3327]/5 flex items-center gap-1.5 text-xs text-[#6B7F5C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#556B2F]" />
                  <span>{t('skills.verifiedInProjects')}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative Wave at the bottom */}
        <div className="mt-16 text-center text-xs text-[#6B7F5C] flex items-center justify-center gap-3">
          <span className="w-10 h-[1px] bg-[#D4A259]/50"></span>
          <span>{t('skills.githubNote')}</span>
          <span className="w-10 h-[1px] bg-[#D4A259]/50"></span>
        </div>

      </div>
    </section>
  );
};

export default Skills;
