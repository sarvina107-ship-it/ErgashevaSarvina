import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, TelegramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2C3327] text-white py-12 px-4 sm:px-8 relative overflow-hidden">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8FA382] via-[#D4A259] to-[#556B2F]"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Brand */}
          <div className="text-center md:text-left space-y-1.5">
            <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
              {personalInfo.name}
            </h3>
            <p className="text-xs text-[#8FA382] font-medium">
              {personalInfo.role} • {t('personal.location').split(',')[0]}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href={personalInfo.contacts.telegram.url}
              target="_blank"
              rel="noreferrer"
              className="text-stone-300 hover:text-[#D4A259] transition-colors flex items-center gap-1.5"
            >
              <TelegramIcon className="w-4 h-4 text-[#D4A259]" />
              <span>Telegram</span>
            </a>
            <a
              href={personalInfo.contacts.github.url}
              target="_blank"
              rel="noreferrer"
              className="text-stone-300 hover:text-[#D4A259] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4 text-[#D4A259]" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.contacts.email.url}
              className="text-stone-300 hover:text-[#D4A259] transition-colors"
            >
              <span>{personalInfo.contacts.email.address}</span>
            </a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/10 hover:bg-[#D4A259] hover:text-[#2C3327] transition-all cursor-pointer group"
            title={t('footer.scrollTop')}
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} {personalInfo.name}. {t('footer.rights')}</p>
          <p className="flex items-center gap-1.5">
            {t('footer.builtWith')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
