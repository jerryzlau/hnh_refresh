import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks/useReveal';
import PageHero from '../components/PageHero';

export default function Contact() {
  useReveal();
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');
  const dateRef = useRef(null);

  useEffect(() => {
    if (dateRef.current) {
      const today = new Date().toISOString().split('T')[0];
      dateRef.current.setAttribute('min', today);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(el => {
      if (!el.value.trim()) { el.style.borderColor = 'var(--cinnabar)'; valid = false; }
      else el.style.borderColor = '';
    });
    if (!valid) return;

    const data = {
      submittedAt: new Date().toLocaleString('en-HK', { timeZone: 'Asia/Hong_Kong' }),
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      service: form.service.value,
      preferredDate: form.preferredDate.value,
      preferredTime: form.preferredTime.value,
      contactMethod: form.contactMethod.value,
      notes: form.notes.value.trim(),
    };

    setStatus('sending');
    fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(r => { if (!r.ok) throw new Error(r.status); })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'));
  }

  return (
    <main>
      <PageHero
        breadcrumb={[{ label: t('common.home'), href: '/' }, { label: t('nav.contact') }]}
        eyebrow={t('contact.hero.eyebrow')}
        title={t('contact.hero.title')}
        lead={t('contact.hero.lead')}
      />

      {/* CONTACT DETAILS + HOURS */}
      <section>
        <div className="wrap">
          <div className="contact-grid">

            <div>
              <div className="sec-head reveal" style={{ marginBottom: '28px' }}>
                <div className="eyebrow">{t('contact.details.eyebrow')}</div>
                <h2>{t('contact.details.title')}</h2>
              </div>
              <ul className="contact-list reveal">
                <li>
                  <span className="ic">☎</span>
                  <span><strong>{t('contact.details.reservationPhone')}</strong><br /><a href="tel:+85228613777">+852 2861 3777</a></span>
                </li>
                <li>
                  <span className="ic">✆</span>
                  <span><strong>{t('common.whatsapp')}</strong><br /><a href="https://wa.me/85297423389">+852 9742 3389</a></span>
                </li>
                <li>
                  <span className="ic">✉</span>
                  <span><strong>{t('contact.details.generalEnquiries')}</strong><br /><a href="mailto:info@hnhmgl.com">info@hnhmgl.com</a></span>
                </li>
                <li>
                  <span className="ic">⌖</span>
                  <span>
                    <strong>{t('contact.details.address')}</strong><br />
                    {t('contact.details.addressLine')}<br />
                    {t('contact.details.addressCity')}
                  </span>
                </li>
              </ul>

              <a
                className="map-link reveal"
                href="https://maps.google.com/?q=9+Queen%27s+Road+Central,+Central,+Hong+Kong"
                target="_blank"
                rel="noopener"
                style={{ marginTop: '26px' }}
              >
                <div className="map-placeholder">
                  <div className="pin">📍</div>
                  <span>{t('contact.details.mapAlt')}</span>
                  <span style={{ fontSize: '.82rem', opacity: .7 }}>{t('contact.details.mapLink')}</span>
                </div>
                <div className="map-address">
                  <strong>Humanity &amp; Health Medical Centre</strong>
                  {t('contact.details.mapAddress')}<br />
                  <span style={{ color: 'var(--orange)', fontSize: '.84rem' }}>{t('contact.details.mtrNote')}</span>
                </div>
              </a>
            </div>

            <div>
              <div className="hours reveal" style={{ marginBottom: '28px' }}>
                <h3 style={{ fontFamily: "'Fraunces',serif", color: 'var(--orange-deep)', marginBottom: '14px', fontSize: '1.15rem' }}>{t('contact.hours.title')}</h3>
                <table>
                  <tbody>
                    <tr><td>{t('contact.hours.monFri')}</td><td>{t('contact.hours.monFriTimes')}<br />{t('contact.hours.monFriTimes2')}</td></tr>
                    <tr><td>{t('contact.hours.sat')}</td><td>{t('contact.hours.satTimes')}</td></tr>
                    <tr className="closed"><td>{t('contact.hours.sunPh')}</td><td>{t('contact.hours.closed')}</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="hours reveal">
                <h3 style={{ fontFamily: "'Fraunces',serif", color: 'var(--orange-deep)', marginBottom: '14px', fontSize: '1.15rem' }}>{t('contact.doctorContacts')}</h3>
                <ul className="contact-list" style={{ marginTop: 0 }}>
                  <li>
                    <span className="ic" style={{ fontSize: '.78rem', fontWeight: 700, fontFamily: "'Fraunces',serif" }}>Geo</span>
                    <span style={{ fontSize: '.88rem' }}>
                      <strong>Dr George Lau</strong> — {t('doctors.george.spec')}<br />
                      <a href="tel:+85228613777">(852) 2861 3777</a> · <a href="mailto:gkklau@hnhmgl.com">gkklau@hnhmgl.com</a>
                    </span>
                  </li>
                  <li>
                    <span className="ic" style={{ fontSize: '.78rem', fontWeight: 700, fontFamily: "'Fraunces',serif" }}>Ric</span>
                    <span style={{ fontSize: '.88rem' }}>
                      <strong>Dr Richard Choi</strong> — {t('doctors.richard.spec')}<br />
                      <a href="tel:+85293498851">(852) 9349 8851</a> · <a href="https://wa.me/85293498851">WhatsApp</a>
                    </span>
                  </li>
                  <li>
                    <span className="ic" style={{ fontSize: '.78rem', fontWeight: 700, fontFamily: "'Fraunces',serif" }}>Pat</span>
                    <span style={{ fontSize: '.88rem' }}>
                      <strong>Dr Patrick Lau</strong> — {t('doctors.patrick.spec')}<br />
                      <a href="tel:+85228613777">(852) 2861 3777</a> · <a href="mailto:drpatrick.lau@hnhmgl.com">drpatrick.lau@hnhmgl.com</a>
                    </span>
                  </li>
                  <li>
                    <span className="ic" style={{ fontSize: '.78rem', fontWeight: 700, fontFamily: "'Fraunces',serif" }}>Jan</span>
                    <span style={{ fontSize: '.88rem' }}>
                      <strong>Dr Jane Chan</strong> — {t('doctors.jane.spec')}<br />
                      <a href="tel:+85228613777">(852) 2861 3777</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APPOINTMENT FORM */}
      <section className="alt" id="appointment-form">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">{t('contact.form.eyebrow')}</div>
            <h2>{t('contact.form.title')}</h2>
            <p>{t('contact.form.body')} <a href="tel:+85228613777" style={{ color: 'var(--orange)', fontWeight: 600 }}>+852 2861 3777</a>.</p>
          </div>

          <div className="appt-form reveal" style={{ maxWidth: '760px' }}>
            {status === 'success' ? (
              <div style={{ background: 'var(--orange-soft)', border: '1px solid var(--orange)', borderRadius: 'var(--radius)', padding: '20px 24px', fontSize: '.95rem' }}>
                <strong style={{ color: 'var(--orange-deep)' }}>{t('contact.form.successTitle')}</strong><br />
                {t('contact.form.successBody')} <a href="tel:+85228613777">(852) 2861 3777</a>.
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="firstName">{t('contact.form.firstName')} *</label>
                    <input className="form-input" type="text" id="firstName" name="firstName" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="lastName">{t('contact.form.lastName')} *</label>
                    <input className="form-input" type="text" id="lastName" name="lastName" placeholder="Smith" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">{t('contact.form.phone')} *</label>
                    <input className="form-input" type="tel" id="phone" name="phone" placeholder="+852 9000 0000" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">{t('contact.form.email')}</label>
                    <input className="form-input" type="email" id="email" name="email" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="service">{t('contact.form.service')} *</label>
                  <select className="form-select" id="service" name="service" required>
                    <option value="" disabled defaultValue="">{t('contact.form.selectService')}</option>
                    <optgroup label={t('contact.form.liverHealth')}>
                      <option>{t('contact.form.svcHepb')}</option>
                      <option>{t('contact.form.svcHepc')}</option>
                      <option>{t('contact.form.svcFibrosis')}</option>
                      <option>{t('contact.form.svcLiverCancer')}</option>
                      <option>{t('contact.form.svcFattyLiver')}</option>
                    </optgroup>
                    <optgroup label={t('contact.form.gastroGroup')}>
                      <option>{t('contact.form.svcGastroscopy')}</option>
                      <option>{t('contact.form.svcColonoscopy')}</option>
                    </optgroup>
                    <optgroup label={t('contact.form.surgeryGroup')}>
                      <option>{t('contact.form.svcHemorrhoid')}</option>
                      <option>{t('contact.form.svcHernia')}</option>
                      <option>{t('contact.form.svcOtherSurgery')}</option>
                    </optgroup>
                    <optgroup label={t('contact.form.generalGroup')}>
                      <option>{t('contact.form.svcPhysical')}</option>
                      <option>{t('contact.form.svcRespiratory')}</option>
                      <option>{t('contact.form.svcOncology')}</option>
                      <option>{t('contact.form.svcOther')}</option>
                    </optgroup>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="preferredDate">{t('contact.form.preferredDate')}</label>
                    <input className="form-input" type="date" id="preferredDate" name="preferredDate" ref={dateRef} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="preferredTime">{t('contact.form.preferredTime')}</label>
                    <select className="form-select" id="preferredTime" name="preferredTime">
                      <option value="" disabled defaultValue="">{t('contact.form.selectTime')}</option>
                      <option>{t('contact.form.morning')}</option>
                      <option>{t('contact.form.afternoon')}</option>
                      <option>{t('contact.form.noPreference')}</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="notes">{t('contact.form.notes')}</label>
                  <textarea className="form-textarea" id="notes" name="notes" placeholder={t('contact.form.notesPlaceholder')} />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactMethod">{t('contact.form.contactMethod')} *</label>
                  <select className="form-select" id="contactMethod" name="contactMethod" required>
                    <option value="" disabled defaultValue="">{t('contact.form.selectContact')}</option>
                    <option>{t('contact.form.byPhone')}</option>
                    <option>{t('contact.form.byWhatsApp')}</option>
                    <option>{t('contact.form.byEmail')}</option>
                  </select>
                </div>

                <button className="form-submit" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                </button>

                {status === 'error' && (
                  <div style={{ marginTop: '16px', padding: '14px 18px', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '10px', color: '#b91c1c', fontSize: '.9rem' }}>
                    {t('contact.form.errorMsg')} <a href="tel:+85228613777" style={{ color: '#b91c1c', fontWeight: 600 }}>(852) 2861 3777</a>.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CLINICAL RESEARCH */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal" style={{ maxWidth: '780px' }}>
            <div className="eyebrow">{t('contact.ctc.eyebrow')}</div>
            <h2>{t('contact.ctc.title')}</h2>
            <p>{t('contact.ctc.body')}</p>
            <Link className="btn ghost" to="/clinical-research" style={{ marginTop: '8px' }}>{t('contact.ctc.cta')}</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
