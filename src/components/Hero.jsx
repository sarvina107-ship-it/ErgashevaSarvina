import React from 'react';
import { ArrowRight, Send, Code2, Database } from 'lucide-react';
import { GithubIcon } from './Icons';
import Myself from '../assets/image.png';
import { personalInfo } from '../data/portfolioData';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#F9F9F7] overflow-hidden px-4 sm:px-8 pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-30">
        <h2 className="text-[16vw] font-black text-gray-200/60 leading-none uppercase tracking-tighter">
          Fullstack
        </h2>
      </div>

      {/* Ambient Decorative Blurs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 md:w-[500px] md:h-[500px] bg-[#8FA382]/20 rounded-full blur-[90px] md:blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-64 h-64 md:w-[420px] md:h-[420px] bg-[#D4A259]/15 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 z-10">
        
        {/* Left Column: Text & Content */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#2C3327]/10 shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#556B2F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#556B2F]"></span>
            </span>
            <span className="text-xs font-semibold text-[#4A5043]">
              {t('personal.status')}
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <p className="text-[#6B7F5C] font-bold tracking-[0.15em] uppercase text-xs md:text-sm flex items-center justify-center lg:justify-start gap-3">
              <span className="w-8 md:w-12 h-[2px] bg-[#D4A259]"></span>
              {t('personal.tagline')}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#2C3327] leading-[1.08]">
              {t('hero.greeting')} <br className="hidden sm:block" />
              <span className="italic font-normal text-[#556B2F]">
                {personalInfo.name}
              </span>
            </h1>
          </div>

          {/* Bio text */}
          <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-[#4A5043] leading-relaxed font-normal">
            {t('personal.bio')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#556B2F] text-white rounded-full hover:bg-[#3E4E22] transition-all duration-300 shadow-lg shadow-[#556B2F]/25 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 font-semibold text-sm flex items-center justify-center gap-2.5"
            >
              <span>{t('hero.viewProjects')}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3.5 bg-white text-[#2C3327] border border-[#2C3327]/15 rounded-full hover:border-[#D4A259] hover:bg-[#F9F9F7] transition-all duration-300 shadow-xs font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>{t('hero.contactMe')}</span>
            </a>
          </div>

          {/* Social Links & Quick info */}
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm text-[#6B7F5C]">
            <a
              href={personalInfo.contacts.telegram.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#556B2F] transition-colors"
            >
              <Send className="w-4 h-4 text-[#D4A259]" />
              <span className="font-medium">{personalInfo.contacts.telegram.handle}</span>
            </a>
            <span className="text-gray-300">•</span>
            <a
              href={personalInfo.contacts.github.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#556B2F] transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-[#D4A259]" />
              <span className="font-medium">GitHub</span>
            </a>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <span className="hidden sm:inline font-medium text-[#4A5043]">
              {t('personal.location')}
            </span>
          </div>

        </div>

        {/* Right Column: Photo with Arch Frame & Badges */}
        <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[390px]">
          
          {/* Main Photo Frame */}
          <div className="relative z-10 w-full aspect-[3/4] overflow-hidden rounded-t-[140px] sm:rounded-t-[180px] rounded-b-3xl shadow-2xl transition-all duration-700 hover:shadow-3xl group">
            <img
              src={Myself}
              alt="Ergasheva Sarvena"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle gradient overlay at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C3327]/30 via-transparent to-transparent"></div>
          </div>

          {/* Offset Decorative Frame */}
          <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 w-full h-full border-2 border-[#D4A259]/50 rounded-t-[140px] sm:rounded-t-[180px] rounded-b-3xl -z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"></div>

          {/* Floating Badge: React & Next.js */}
          <div className="absolute -top-4 -left-6 sm:-left-8 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-black/5 flex items-center gap-2.5 animate-bounce-slow">
            <div className="w-8 h-8 rounded-xl bg-[#8FA382]/20 flex items-center justify-center text-[#556B2F]">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-[#6B7F5C] font-bold uppercase tracking-wider">Frontend</p>
              <p className="text-xs font-bold text-[#2C3327]">React 19 & Next.js 16</p>
            </div>
          </div>

          {/* Floating Badge: Backend & MongoDB */}
          <div className="absolute -bottom-6 -left-4 sm:-left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-black/5 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#D4A259]/20 flex items-center justify-center text-[#B37F2D]">
              <Database className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-[#6B7F5C] font-bold uppercase tracking-wider">Backend</p>
              <p className="text-xs font-bold text-[#2C3327]">Node.js & MongoDB</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
