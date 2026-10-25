import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Award, Heart, Compass } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '7+', label: t('about.stat1Label') },
    { number: '3', label: t('about.stat2Label') },
    { number: '100%', label: t('about.stat3Label') },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-[#F9F9F7] py-20 md:py-28 px-4 sm:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl z-10">
        
        {/* Main Grid: Left heading / Right story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Sub-badge */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="relative inline-block">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#2C3327] leading-[1.1] relative z-10">
                {t('about.title')} <br />
                <span className="italic text-[#D4A259] font-light">{t('about.titleItalic')}</span>
              </h2>
              <div className="absolute -bottom-3 -left-4 w-full h-1/2 bg-[#8FA382]/15 -z-10 rounded-full blur-2xl"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4 text-[#6B7F5C] font-bold uppercase tracking-widest text-xs">
                <span className="w-8 h-[2px] bg-[#D4A259]"></span>
                {t('about.sectionLabel')}
              </div>
              <p className="text-[#4A5043] font-medium leading-relaxed max-w-md mx-auto lg:mx-0 text-base md:text-lg">
                {t('about.subtitle')}
              </p>
            </div>

            {/* Quick Principles / Tags */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#2C3327]/10 text-xs font-semibold text-[#556B2F]">
                <Heart className="w-3.5 h-3.5 text-[#D4A259]" /> {t('about.tag1')}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#2C3327]/10 text-xs font-semibold text-[#556B2F]">
                <Award className="w-3.5 h-3.5 text-[#D4A259]" /> {t('about.tag2')}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#2C3327]/10 text-xs font-semibold text-[#556B2F]">
                <Compass className="w-3.5 h-3.5 text-[#D4A259]" /> {t('about.tag3')}
              </span>
            </div>
          </div>

          {/* Right Column: Quote, paragraphs, and statistics */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            
            {/* Elegant Quote Card */}
            <div className="relative p-6 sm:p-10 bg-white/70 backdrop-blur-sm border border-[#2C3327]/10 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm">
              <span className="absolute -left-2 -top-4 sm:-left-3 sm:-top-6 text-6xl sm:text-7xl text-[#D4A259]/30 font-serif font-black select-none">
                "
              </span>
              <p className="text-lg sm:text-2xl text-[#556B2F] font-medium leading-snug italic">
                {t('personal.quote')}
              </p>
            </div>

            {/* Narrative text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-[#4A5043] text-base leading-relaxed">
              <div className="space-y-4">
                <p>
                  {t('about.story1')}
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  {t('about.story2')}
                </p>
                {/* Decorative wave */}
                <div className="pt-2 flex justify-center md:justify-start">
                  <svg width="110" height="30" viewBox="0 0 120 30" className="text-[#D4A259]">
                    <path
                      d="M5,15 Q30,5 55,15 T105,15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Stats Counter Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-[#2C3327]/8 shadow-xs text-center hover:border-[#D4A259]/50 transition-all duration-300 group"
                >
                  <p className="text-3xl sm:text-4xl font-serif font-bold text-[#556B2F] group-hover:text-[#D4A259] transition-colors">
                    {stat.number}
                  </p>
                  <p className="text-xs text-[#6B7F5C] font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Decorative Rotating Ring */}
      <div className="absolute -top-12 -right-12 sm:-top-20 sm:-right-20 w-64 h-64 sm:w-96 sm:h-96 border border-[#556B2F]/10 rounded-full animate-spin [animation-duration:35s] pointer-events-none"></div>
      <div className="absolute -top-12 -right-12 sm:-top-20 sm:-right-20 w-72 h-72 sm:w-[420px] sm:h-[420px] border border-[#D4A259]/10 rounded-full animate-spin [animation-duration:25s] [animation-direction:reverse] pointer-events-none"></div>
    </section>
  );
};

export default About;
