import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Copy, Check, ExternalLink, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GithubIcon, TelegramIcon } from './Icons';

const Contact = () => {
  const { t } = useTranslation();
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const contactList = [
    {
      id: 'telegram',
      label: 'Telegram',
      value: personalInfo.contacts.telegram.handle,
      link: personalInfo.contacts.telegram.url,
      copyVal: '@suuun_o',
    },
    {
      id: 'github',
      label: 'GitHub',
      value: personalInfo.contacts.github.handle,
      link: personalInfo.contacts.github.url,
      copyVal: 'https://github.com/sarvina107-ship-it',
    },
    {
      id: 'email',
      label: 'Email',
      value: personalInfo.contacts.email.address,
      link: personalInfo.contacts.email.url,
      copyVal: personalInfo.contacts.email.address,
    },
  ];

  const ctaLinks = [
    {
      id: 'telegram',
      label: 'Telegram',
      desc: personalInfo.contacts.telegram.handle,
      href: personalInfo.contacts.telegram.url,
      icon: TelegramIcon,
      bg: 'bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border-[#229ED9]/20 hover:border-[#229ED9]/40',
      iconColor: 'text-[#229ED9]',
    },
    {
      id: 'github',
      label: 'GitHub',
      desc: personalInfo.contacts.github.handle,
      href: personalInfo.contacts.github.url,
      icon: GithubIcon,
      bg: 'bg-[#2C3327]/8 hover:bg-[#2C3327]/15 border-[#2C3327]/10 hover:border-[#2C3327]/25',
      iconColor: 'text-[#2C3327]',
    },
    {
      id: 'email',
      label: 'Email',
      desc: personalInfo.contacts.email.address,
      href: personalInfo.contacts.email.url,
      icon: Mail,
      bg: 'bg-[#D4A259]/10 hover:bg-[#D4A259]/20 border-[#D4A259]/20 hover:border-[#D4A259]/40',
      iconColor: 'text-[#D4A259]',
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-[#F9F9F7] py-20 md:py-28 px-4 sm:px-8 overflow-hidden border-t border-[#2C3327]/5"
    >
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.03]">
        <h2 className="text-[32vw] lg:text-[24vw] font-black text-[#2C3327] leading-none uppercase tracking-tighter">
          Talk
        </h2>
      </div>

      <div className="container mx-auto max-w-6xl z-10">

        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading & Contact Channels */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4 text-[#6B7F5C] font-bold uppercase tracking-widest text-xs">
                <span className="w-8 md:w-12 h-[2px] bg-[#556B2F]"></span>
                {t('contact.sectionLabel')}
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#2C3327] leading-tight">
                {t('contact.title')} <br />
                <span className="italic text-[#D4A259] font-normal">{t('contact.titleItalic')}</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#4A5043] leading-relaxed max-w-md mx-auto lg:mx-0 font-normal">
              {t('contact.description')}
            </p>

            {/* Location Pill */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-4 p-3.5 pr-8 bg-white border border-[#2C3327]/10 rounded-full shadow-xs">
                <div className="w-10 h-10 bg-[#8FA382]/20 rounded-full flex items-center justify-center">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#556B2F] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#556B2F]"></span>
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-[#6B7F5C] font-bold uppercase tracking-wider">{t('contact.locationLabel')}</p>
                  <p className="text-[#2C3327] font-serif font-bold text-base leading-none">
                    {t('personal.location')} ({personalInfo.timezone})
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Links Card */}
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-[#2C3327]/10 shadow-sm space-y-5">
              {contactList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-[#2C3327]/5 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="text-left">
                    <p className="text-[10px] text-[#6B7F5C] font-bold uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg sm:text-xl font-serif font-bold text-[#2C3327] hover:text-[#556B2F] transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(item.copyVal, item.id)}
                      title={t('contact.copyTitle')}
                      className="p-2 rounded-xl text-[#4A5043] hover:text-[#556B2F] hover:bg-stone-100 transition-colors cursor-pointer"
                    >
                      {copiedKey === item.id ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      title={t('contact.openTitle')}
                      className="p-2 rounded-xl text-[#D4A259] hover:bg-[#D4A259]/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Decorative availability card */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Big Quote / Availability Card */}
            <div className="relative overflow-hidden bg-[#2C3327] rounded-[2.5rem] p-8 sm:p-12 shadow-2xl">
              {/* Decorative rings */}
              <div className="absolute -top-16 -right-16 w-64 h-64 border border-white/5 rounded-full pointer-events-none"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 border border-white/5 rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 w-72 h-72 border border-[#D4A259]/10 rounded-full pointer-events-none"></div>

              {/* Online badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8FA382] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8FA382]"></span>
                </span>
                <span className="text-[11px] font-semibold text-white/70 tracking-wider uppercase">
                  {t('personal.status')}
                </span>
              </div>

              {/* Quote mark */}
              <span className="block text-7xl text-[#D4A259]/25 font-serif font-black leading-none -mb-4 select-none">"</span>

              <p className="text-xl sm:text-2xl text-white font-serif font-medium leading-snug italic mb-8">
                {t('personal.quote')}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#556B2F] flex items-center justify-center font-serif text-white font-bold text-lg shrink-0">
                  С
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{personalInfo.name}</p>
                  <p className="text-white/50 text-xs">{personalInfo.role}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ctaLinks.map(({ id, label, desc, href, icon: Icon, bg, iconColor }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${bg}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/70 group-hover:scale-110 transition-transform ${iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-[#2C3327] uppercase tracking-wider">{label}</p>
                    <p className="text-[10px] text-[#6B7F5C] mt-0.5 truncate max-w-[110px]">{desc}</p>
                  </div>
                </a>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
