import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { imgFb } from '../utils';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Medical Staff', to: '/doctors' },
  { label: 'Health Education', to: '/health-education' },
  { label: 'Contact', to: '/contact' },
  { label: 'Clinical Research', to: '/clinical-research' },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  function isActive(to) {
    if (to === '/') return pathname === '/';
    return pathname === to || pathname.startsWith(to + '/');
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
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          ☰
        </button>
        <nav className={`links${open ? ' open' : ''}`} id="navlinks">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              aria-current={isActive(to) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="btn" to="/contact">Make an Appointment</Link>
      </div>
    </header>
  );
}
