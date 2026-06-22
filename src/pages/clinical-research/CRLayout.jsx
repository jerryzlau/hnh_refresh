import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../cr.css';

export default function CRLayout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const crLinks = [
    { key: 'cr.nav.overview', to: '/clinical-research' },
    { key: 'cr.nav.about', to: '/clinical-research/about' },
    { key: 'cr.nav.services', to: '/clinical-research/services' },
    { key: 'cr.nav.participation', to: '/clinical-research/participation' },
    { key: 'cr.nav.rxr', to: '/clinical-research/revolutionrx' },
    { key: 'cr.nav.contact', to: '/clinical-research/contact' },
  ];

  function isActive(to) {
    if (to === '/clinical-research') return pathname === '/clinical-research';
    return pathname === to || pathname.startsWith(to + '/');
  }

  function toggleLang() {
    const next = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(next);
    localStorage.setItem('hnhmgl-lang', next);
  }

  return (
    <>
      {/* CR Topbar */}
      <div className="topbar">
        <div className="wrap">
          <span>Mon–Fri 9:00am–6:00pm</span>
          <span>Enquiries: <a href="tel:+85221169283">+852 2116 9283</a></span>
          <span className="lic">
            <Link to="/" style={{ color: '#fff' }}>{t('cr.backLink')}</Link>
          </span>
        </div>
      </div>

      {/* CR Nav */}
      <header className="nav">
        <div className="wrap">
          <Link className="brand" to="/clinical-research">
            <div className="name">
              <strong style={{ fontSize: '.94rem' }}>HNH Clinical Trial Centre</strong>
              <span>天下仁心臨床研究中心</span>
            </div>
          </Link>
          <button
            className="menu-toggle"
            aria-label={t('nav.openMenu')}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            ☰
          </button>
          <nav className={`links${open ? ' open' : ''}`}>
            {crLinks.map(({ key, to }) => (
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
          <button className="lang-toggle" onClick={toggleLang}>{t('nav.langToggle')}</button>
          <Link className="btn" to="/clinical-research/participation">{t('cr.participation.cta.btn')}</Link>
        </div>
      </header>

      <Outlet />

      {/* CR Footer */}
      <footer className="ctc-footer">
        <div className="wrap">
          <div>
            <div style={{ fontFamily: "'Fraunces',serif", fontSize: '1rem', color: '#fff' }}>HNH Clinical Trial Centre</div>
            <div style={{ marginTop: '4px', color: 'rgba(255,255,255,.6)' }}>Humanity &amp; Health Medical Centre · 1401, 14/F, 9 Queen's Road Central, Hong Kong</div>
            <div style={{ marginTop: '8px', fontSize: '.78rem' }}>©2026 Humanity &amp; Health Clinical Trial Centre · <Link to="/" style={{ color: 'var(--orange)' }}>Humanity &amp; Health Medical Centre ↗</Link></div>
          </div>
          <Link className="btn" to="/clinical-research/participation" style={{ background: 'var(--orange)' }}>{t('cr.participation.cta.btn')}</Link>
        </div>
      </footer>
    </>
  );
}
