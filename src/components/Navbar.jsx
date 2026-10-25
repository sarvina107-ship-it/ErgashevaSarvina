import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Menu, X, Sparkles, Send, Globe } from 'lucide-react';
import { GithubIcon, TelegramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'ru', label: 'RU', full: 'Русский' },
  { code: 'uz', label: 'UZ', full: 'O\'zbekcha' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close lang menu on outside click
  useEffect(() => {
    if (!langMenuOpen) return;
    const handler = (e) => {
      if (!e.target.closest('#lang-switcher')) setLangMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [langMenuOpen]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.2 },
      colors: ['#556B2F', '#D4A259', '#8FA382', '#EAD8B1']
    });
  };

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLangMenuOpen(false);
  };

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.journey'), href: '#journey' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F9F9F7]/85 backdrop-blur-md shadow-sm border-b border-[#2C3327]/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-8 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-[#556B2F] text-white flex items-center justify-center font-serif text-xl font-bold group-hover:scale-105 group-hover:bg-[#3E4E22] transition-all duration-300 shadow-md shadow-[#556B2F]/20">
            С
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2C3327]">
              Сарвина <span className="text-[#D4A259] italic font-normal">Э.</span>
            </span>
            <p className="text-[10px] text-[#6B7F5C] font-semibold tracking-widest uppercase -mt-1 hidden sm:block">
              Fullstack Developer
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 bg-white/70 backdrop-blur-sm border border-black/5 px-6 py-2.5 rounded-full shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#4A5043] hover:text-[#556B2F] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#D4A259] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <div id="lang-switcher" className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/80 border border-[#2C3327]/10 text-[#4A5043] hover:border-[#D4A259] hover:text-[#556B2F] transition-all text-xs font-bold"
              title="Change language"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4A259]" />
              <span>{currentLang.label}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 bg-white border border-[#2C3327]/10 rounded-2xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left flex items-center gap-2.5 px-4 py-2 text-xs font-semibold transition-colors ${
                      i18n.language === lang.code
                        ? 'text-[#556B2F] bg-[#8FA382]/10'
                        : 'text-[#4A5043] hover:text-[#556B2F] hover:bg-stone-50'
                    }`}
                  >
                    <span className="w-6 text-center font-bold text-[#D4A259]">{lang.label}</span>
                    <span>{lang.full}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={triggerConfetti}
            title={t('nav.confettiTitle')}
            className="p-2.5 rounded-full bg-[#D4A259]/15 text-[#D4A259] hover:bg-[#D4A259]/25 hover:rotate-12 transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[#B37F2D]" />
          </button>

          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#556B2F] text-white text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#3E4E22] transition-all shadow-md shadow-[#556B2F]/20 hover:shadow-lg active:scale-95 flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{t('nav.connect')}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <div id="lang-switcher" className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/80 border border-[#2C3327]/10 text-[#4A5043] text-xs font-bold"
            >
              <Globe className="w-3 h-3 text-[#D4A259]" />
              <span>{currentLang.label}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 bg-white border border-[#2C3327]/10 rounded-2xl shadow-xl py-1.5 z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left flex items-center gap-2 px-3 py-2 text-xs font-semibold transition-colors ${
                      i18n.language === lang.code
                        ? 'text-[#556B2F] bg-[#8FA382]/10'
                        : 'text-[#4A5043] hover:text-[#556B2F] hover:bg-stone-50'
                    }`}
                  >
                    <span className="font-bold text-[#D4A259]">{lang.label}</span>
                    <span>{lang.full}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={triggerConfetti}
            aria-label={t('nav.confettiTitle')}
            className="p-2 rounded-full bg-[#D4A259]/15 text-[#B37F2D]"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2C3327] rounded-lg hover:bg-black/5"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F9F9F7]/95 backdrop-blur-xl border-b border-[#2C3327]/10 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-[#2C3327] hover:text-[#556B2F] py-2 border-b border-black/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#556B2F] text-white rounded-full font-bold text-sm shadow-md"
              >
                {t('nav.connectMe')}
              </a>
              <div className="flex justify-center gap-4 pt-2 text-[#6B7F5C]">
                <a href={personalInfo.contacts.telegram.url} target="_blank" rel="noreferrer" className="p-2 hover:text-[#556B2F]">
                  <TelegramIcon className="w-5 h-5" />
                </a>
                <a href={personalInfo.contacts.github.url} target="_blank" rel="noreferrer" className="p-2 hover:text-[#556B2F]">
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
