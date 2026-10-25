import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';

const Experience = () => {
  const { t } = useTranslation();

  const journeyMilestones = [
    {
      period: '2024',
      title: t('journey_milestones.m1.title'),
      desc: t('journey_milestones.m1.desc'),
    },
    {
      period: '2025',
      title: t('journey_milestones.m2.title'),
      desc: t('journey_milestones.m2.desc'),
    },
    {
      period: '2025 — 2026',
      title: t('journey_milestones.m3.title'),
      desc: t('journey_milestones.m3.desc'),
    },
    {
      period: '2026',
      title: t('journey_milestones.m4.title'),
      desc: t('journey_milestones.m4.desc'),
    },
  ];

  return (
    <section
      id="journey"
      className="relative min-h-screen bg-[#F9F9F7] py-20 md:py-28 px-4 sm:px-8 overflow-hidden border-t border-[#2C3327]/5"
    >
      <div className="container mx-auto max-w-5xl z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-3 text-[#6B7F5C] font-bold uppercase tracking-widest text-xs">
            <span className="w-8 h-[2px] bg-[#D4A259]"></span>
            {t('journey.sectionLabel')}
            <span className="w-8 h-[2px] bg-[#D4A259]"></span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#2C3327]">
            {t('journey.title')} <span className="italic text-[#556B2F]">{t('journey.titleItalic')}</span>
          </h2>
          <p className="text-[#4A5043] text-base leading-relaxed">
            {t('journey.description')}
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative">
          {/* Central / Left Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#8FA382]/40 via-[#D4A259]/60 to-[#556B2F]/40 transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-16">
            {journeyMilestones.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 md:gap-16`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#556B2F] shadow-md flex items-center justify-center z-20">
                    <div className="w-2 h-2 rounded-full bg-[#D4A259]"></div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 flex-1 w-full">
                    <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-[#2C3327]/8 shadow-xs hover:shadow-xl hover:border-[#D4A259]/40 transition-all duration-300">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A259]/15 text-[#B37F2D] text-xs font-bold mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{m.period}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2C3327] mb-2">
                        {m.title}
                      </h3>
                      <p className="text-sm text-[#4A5043] leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for other side on desktop */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
