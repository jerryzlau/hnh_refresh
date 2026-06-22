import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { imgFb } from '../utils';

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { key: 'nav.home', to: '/' },
    { key: 'nav.services', to: '/services' },
    { key: 'nav.doctors', to: '/doctors' },
    { key: 'nav.healthEd', to: '/health-education' },
    { key: 'nav.contact', to: '/contact' },
    { key: 'nav.clinicalResearch', to: '/clinical-research' },
  ];

  function isActive(to) {
    if (to === '/') return pathname === '/';
    return pathname === to || pathname.startsWith(to + '/');
  }

  function toggleLang() {
    const next = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(next);
    localStorage.setItem('hnhmgl-lang', next);
  }

  return (
    <header className="nav">
      <div className="wrap">
        <Link className="brand" to="/">
          <img
            className="logo"
            src="/assets/logo.jpg"
            data-cdn="https://static.wixstatic.com/media/379045_d4be82487adb4fc999888823137efd2f~mv2.jpg/v1/fill/w_600,h_178,al_c,lg_1,q_80,enc_avif,quality_auto/379045_d4be82487adb4fc999888823137efd2f~mv2.jpg"
            onError={e => imgFb(e.currentTarget)}
            alt="Humanity and Health Medical Centre logo"
          />
        </Link>
        <button
          className="menu-toggle"
          aria-label={t('nav.openMenu')}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          ☰
        </button>
        <nav className={`links${open ? ' open' : ''}`} id="navlinks">
          {links.map(({ key, to }) => (
            <Link
              key={to}
              to={to}
              aria-current={isActive(to) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {t(key)}
            </Link>
          ))}
        </nav>
        <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
          {t('nav.langToggle')}
        </button>
        <Link className="btn" to="/contact">{t('nav.makeAppt')}</Link>
      </div>
    </header>
  );
}
