import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import PageHero from '../components/PageHero';

export default function Contact() {
  useReveal();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
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
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        eyebrow="Make an Appointment · 預約"
        title="Contact our medical specialists"
        lead="Reach us by phone, WhatsApp, email, or use the form below to request a consultation. We'll confirm your appointment as soon as possible."
      />

      {/* CONTACT DETAILS + HOURS */}
      <section>
        <div className="wrap">
          <div className="contact-grid">

            <div>
              <div className="sec-head reveal" style={{ marginBottom: '28px' }}>
                <div className="eyebrow">Get in Touch · 聯絡方式</div>
                <h2>Contact details</h2>
              </div>
              <ul className="contact-list reveal">
                <li>
                  <span className="ic">☎</span>
                  <span><strong>Reservation Phone</strong><br /><a href="tel:+85228613777">+852 2861 3777</a></span>
                </li>
                <li>
                  <span className="ic">✆</span>
                  <span><strong>WhatsApp</strong><br /><a href="https://wa.me/85297423389">+852 9742 3389</a></span>
                </li>
                <li>
                  <span className="ic">✉</span>
                  <span><strong>General Enquiries</strong><br /><a href="mailto:info@hnhmgl.com">info@hnhmgl.com</a></span>
                </li>
                <li>
                  <span className="ic">⌖</span>
                  <span>
                    <strong>Address</strong><br />
                    Room 1401–02, 9 Queen's Road Central<br />
                    Central, Hong Kong Island
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
                  <span>9 Queen's Road Central, Central</span>
                  <span style={{ fontSize: '.82rem', opacity: .7 }}>View on Google Maps →</span>
                </div>
                <div className="map-address">
                  <strong>Humanity &amp; Health Medical Centre</strong>
                  Room 1401–02, 9 Queen's Road Central, Central, Hong Kong<br />
                  <span style={{ color: 'var(--orange)', fontSize: '.84rem' }}>Near Central MTR Station Exit D1 or D2</span>
                </div>
              </a>
            </div>

            <div>
              <div className="hours reveal" style={{ marginBottom: '28px' }}>
                <h3 style={{ fontFamily: "'Fraunces',serif", color: 'var(--orange-deep)', marginBottom: '14px', fontSize: '1.15rem' }}>Clinic Hours</h3>
                <table>
                  <tbody>
                    <tr><td>Monday – Friday</td><td>9:00 am – 1:00 pm<br />2:00 pm – 6:00 pm</td></tr>
                    <tr><td>Saturday</td><td>9:00 am – 1:00 pm</td></tr>
                    <tr className="closed"><td>Sundays &amp; Public Holidays</td><td>Closed</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="hours reveal">
                <h3 style={{ fontFamily: "'Fraunces',serif", color: 'var(--orange-deep)', marginBottom: '14px', fontSize: '1.15rem' }}>Doctor Direct Contacts</h3>
                <ul className="contact-list" style={{ marginTop: 0 }}>
                  <li>
                    <span className="ic" style={{ fontSize: '.78rem', fontWeight: 700, fontFamily: "'Fraunces',serif" }}>Geo</span>
                    <span style={{ fontSize: '.88rem' }}>
                      <strong>Dr George Lau</strong> — Gastroenterology &amp; Hepatology<br />
                      <a href="tel:+85228613777">(852) 2861 3777</a> · <a href="mailto:gkklau@hnhmgl.com">gkklau@hnhmgl.com</a>
                    </span>
                  </li>
                  <li>
                    <span className="ic" style={{ fontSize: '.78rem', fontWeight: 700, fontFamily: "'Fraunces',serif" }}>Ric</span>
                    <span style={{ fontSize: '.88rem' }}>
                      <strong>Dr Richard Choi</strong> — General Surgery<br />
                      <a href="tel:+85293498851">(852) 9349 8851</a> · <a href="https://wa.me/85293498851">WhatsApp</a>
                    </span>
                  </li>
                  <li>
                    <span className="ic" style={{ fontSize: '.78rem', fontWeight: 700, fontFamily: "'Fraunces',serif" }}>Pat</span>
                    <span style={{ fontSize: '.88rem' }}>
                      <strong>Dr Patrick Lau</strong> — Medical Oncology<br />
                      <a href="tel:+85228613777">(852) 2861 3777</a> · <a href="mailto:drpatrick.lau@hnhmgl.com">drpatrick.lau@hnhmgl.com</a>
                    </span>
                  </li>
                  <li>
                    <span className="ic" style={{ fontSize: '.78rem', fontWeight: 700, fontFamily: "'Fraunces',serif" }}>Jan</span>
                    <span style={{ fontSize: '.88rem' }}>
                      <strong>Dr Jane Chan</strong> — Respiratory Medicine<br />
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
            <div className="eyebrow">Online Request · 網上預約</div>
            <h2>Request an appointment</h2>
            <p>Fill in the form and our team will contact you within one business day to confirm your appointment time. For urgent matters please call <a href="tel:+85228613777" style={{ color: 'var(--orange)', fontWeight: 600 }}>+852 2861 3777</a> directly.</p>
          </div>

          <div className="appt-form reveal" style={{ maxWidth: '760px' }}>
            {status === 'success' ? (
              <div style={{ background: 'var(--orange-soft)', border: '1px solid var(--orange)', borderRadius: 'var(--radius)', padding: '20px 24px', fontSize: '.95rem' }}>
                <strong style={{ color: 'var(--orange-deep)' }}>Thank you — your request has been received.</strong><br />
                Our team will contact you within one business day to confirm your appointment. If you need to reach us sooner, please call <a href="tel:+85228613777">(852) 2861 3777</a>.
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="firstName">First Name *</label>
                    <input className="form-input" type="text" id="firstName" name="firstName" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="lastName">Last Name *</label>
                    <input className="form-input" type="text" id="lastName" name="lastName" placeholder="Smith" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input className="form-input" type="tel" id="phone" name="phone" placeholder="+852 9000 0000" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input className="form-input" type="email" id="email" name="email" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="service">Service / Reason for Visit *</label>
                  <select className="form-select" id="service" name="service" required>
                    <option value="" disabled defaultValue="">Select a service…</option>
                    <optgroup label="Liver Health">
                      <option>Hepatitis B Evaluation &amp; Treatment</option>
                      <option>Hepatitis C Evaluation &amp; Treatment</option>
                      <option>Liver Fibrosis Assessment</option>
                      <option>Liver Cancer Screening</option>
                      <option>Fatty Liver Disease Assessment</option>
                    </optgroup>
                    <optgroup label="Gastroenterology">
                      <option>Gastroscopy</option>
                      <option>Colonoscopy</option>
                    </optgroup>
                    <optgroup label="Surgery">
                      <option>Hemorrhoid Treatment</option>
                      <option>Hernia Repair</option>
                      <option>Other Surgical Consultation</option>
                    </optgroup>
                    <optgroup label="General">
                      <option>Physical / Health Examination</option>
                      <option>Respiratory Medicine</option>
                      <option>Medical Oncology Consultation</option>
                      <option>Other / Not Sure</option>
                    </optgroup>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="preferredDate">Preferred Date</label>
                    <input className="form-input" type="date" id="preferredDate" name="preferredDate" ref={dateRef} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="preferredTime">Preferred Time</label>
                    <select className="form-select" id="preferredTime" name="preferredTime">
                      <option value="" disabled defaultValue="">Select a time…</option>
                      <option>Morning (9:00 am – 1:00 pm)</option>
                      <option>Afternoon (2:00 pm – 6:00 pm)</option>
                      <option>No preference</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="notes">Additional Notes</label>
                  <textarea className="form-textarea" id="notes" name="notes" placeholder="Please describe your symptoms or any relevant medical history…" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactMethod">Preferred Contact Method *</label>
                  <select className="form-select" id="contactMethod" name="contactMethod" required>
                    <option value="" disabled defaultValue="">How should we reach you?</option>
                    <option>Phone call</option>
                    <option>WhatsApp</option>
                    <option>Email</option>
                  </select>
                </div>

                <button className="form-submit" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Submit Appointment Request'}
                </button>

                {status === 'error' && (
                  <div style={{ marginTop: '16px', padding: '14px 18px', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '10px', color: '#b91c1c', fontSize: '.9rem' }}>
                    Something went wrong sending your request — please try again, or call us directly at <a href="tel:+85228613777" style={{ color: '#b91c1c', fontWeight: 600 }}>(852) 2861 3777</a>.
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
            <div className="eyebrow">Clinical Research · 臨床研究</div>
            <h2>HNH Clinical Trial Centre</h2>
            <p>Humanity &amp; Health Medical Centre operates a dedicated clinical trial centre — HNH-CTC — conducting research into liver disease, viral hepatitis, and gastroenterology. Dr George Lau serves as Principal Investigator on numerous international clinical trials. Patients who may be eligible for clinical trial participation can enquire through our main appointment line.</p>
            <Link className="btn ghost" to="/clinical-research" style={{ marginTop: '8px' }}>Visit HNH Clinical Trial Centre →</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
