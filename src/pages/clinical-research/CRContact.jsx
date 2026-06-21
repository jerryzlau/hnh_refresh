import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';

export default function CRContact() {
  useReveal();
  const [enquiryType, setEnquiryType] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

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
      enquiryType: form.enquiryType.value,
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      diagnosis: form.diagnosis ? form.diagnosis.value.trim() : undefined,
      priorTx: form.priorTx ? form.priorTx.value.trim() : undefined,
      company: form.company ? form.company.value.trim() : undefined,
      indication: form.indication ? form.indication.value.trim() : undefined,
      phase: form.phase ? form.phase.value : undefined,
      message: form.message.value.trim(),
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

  const showPatientFields = enquiryType === 'patient' || enquiryType === 'physician';
  const showSponsorFields = enquiryType === 'sponsor';

  return (
    <main>

      {/* PAGE HERO */}
      <div className="ctc-page-hero">
        <div className="wrap">
          <div className="breadcrumb" style={{ color: 'rgba(255,255,255,.5)' }}>
            <Link to="/clinical-research">Home</Link>
            <span className="sep">/</span>
            <span>Contact</span>
          </div>
          <div className="eyebrow">Contact · 聯絡我們</div>
          <h1>Get in touch with<br />HNH Clinical Trial Centre</h1>
          <p className="lead">Whether you're a patient exploring trial eligibility, a physician with a referral, or a sponsor requesting a feasibility assessment — we respond within one business day.</p>
        </div>
      </div>

      {/* CONTACT DETAILS + FORM */}
      <section>
        <div className="wrap">
          <div className="contact-grid">

            <div>
              <div className="sec-head reveal" style={{ marginBottom: '28px' }}>
                <div className="eyebrow">Contact Details · 聯絡方式</div>
                <h2>Reach us directly</h2>
              </div>
              <ul className="contact-list reveal">
                <li>
                  <span className="ic">☎</span>
                  <span>
                    <strong>Phone</strong><br />
                    <a href="tel:+85221169283">+852 2116 9283</a>
                  </span>
                </li>
                <li>
                  <span className="ic">✉</span>
                  <span>
                    <strong>Email</strong><br />
                    <a href="mailto:hnhctc@hnhmgl.com">hnhctc@hnhmgl.com</a>
                  </span>
                </li>
                <li>
                  <span className="ic">⌖</span>
                  <span>
                    <strong>Address</strong><br />
                    Room 1401, 14/F, 9 Queen's Road Central<br />
                    Central, Hong Kong Island
                  </span>
                </li>
                <li>
                  <span className="ic">🕐</span>
                  <span>
                    <strong>Hours</strong><br />
                    Monday – Friday: 9:00 am – 6:00 pm<br />
                    <span style={{ color: 'var(--cinnabar)', fontWeight: 600 }}>Closed weekends &amp; public holidays</span>
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
                <div className="map-placeholder" style={{ height: '200px', background: 'linear-gradient(135deg,#0D1F2D,#1A3547)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#fff', fontSize: '.95rem' }}>
                  <div className="pin" style={{ fontSize: '2.2rem' }}>📍</div>
                  <span>9 Queen's Road Central, Central</span>
                  <span style={{ fontSize: '.82rem', opacity: .7 }}>View on Google Maps →</span>
                </div>
                <div className="map-address">
                  <strong>HNH Clinical Trial Centre — Room 1401, 14/F</strong>
                  9 Queen's Road Central, Central, Hong Kong Island<br />
                  <span style={{ color: 'var(--orange)', fontSize: '.82rem' }}>Near Central MTR Station Exit D1 or D2 · Same building as the Medical Centre</span>
                </div>
              </a>

              <div className="hours reveal" style={{ marginTop: '24px' }}>
                <h3 style={{ fontFamily: "'Fraunces',serif", color: 'var(--orange-deep)', marginBottom: '14px', fontSize: '1.1rem' }}>Principal Investigator</h3>
                <ul className="contact-list" style={{ marginTop: 0 }}>
                  <li>
                    <span className="ic" style={{ fontSize: '.78rem', fontWeight: 700, fontFamily: "'Fraunces',serif" }}>PI</span>
                    <span style={{ fontSize: '.88rem' }}>
                      <strong>Dr George Lau</strong> — Gastroenterology &amp; Hepatology<br />
                      <a href="tel:+85228613777">(852) 2861 3777</a> · <a href="mailto:gkklau@hnhmgl.com">gkklau@hnhmgl.com</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="appt-form reveal" id="enquiry-form">
                <h3>Send us an enquiry</h3>
                {status === 'success' ? (
                  <div style={{ background: 'var(--orange-soft)', border: '1px solid var(--orange)', borderRadius: 'var(--radius)', padding: '20px 24px', fontSize: '.95rem' }}>
                    <strong style={{ color: 'var(--orange-deep)' }}>Your enquiry has been sent.</strong><br />
                    Our team will respond within one business day. For urgent matters, please call <a href="tel:+85221169283">(852) 2116 9283</a>.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>

                    <div className="form-group">
                      <label className="form-label" htmlFor="enquiryType">Enquiry Type *</label>
                      <select
                        className="form-select"
                        id="enquiryType"
                        name="enquiryType"
                        required
                        value={enquiryType}
                        onChange={e => setEnquiryType(e.target.value)}
                      >
                        <option value="" disabled>I am a…</option>
                        <option value="patient">Patient or carer — interested in trial participation</option>
                        <option value="physician">Physician — patient referral</option>
                        <option value="sponsor">Sponsor or CRO — feasibility request</option>
                        <option value="general">Other / General enquiry</option>
                      </select>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="firstName">First Name *</label>
                        <input className="form-input" type="text" id="firstName" name="firstName" placeholder="George" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="lastName">Last Name *</label>
                        <input className="form-input" type="text" id="lastName" name="lastName" placeholder="Lau" required />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone *</label>
                        <input className="form-input" type="tel" id="phone" name="phone" placeholder="+852 9000 0000" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Email *</label>
                        <input className="form-input" type="email" id="email" name="email" placeholder="email@example.com" required />
                      </div>
                    </div>

                    {/* Patient / physician fields */}
                    {showPatientFields && (
                      <>
                        <div className="form-group">
                          <label className="form-label" htmlFor="diagnosis">Diagnosis / Condition</label>
                          <input className="form-input" type="text" id="diagnosis" name="diagnosis" placeholder="e.g. NSCLC, HCC, colorectal cancer…" />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="priorTx">Prior Treatments Received</label>
                          <input className="form-input" type="text" id="priorTx" name="priorTx" placeholder="e.g. cisplatin + pemetrexed, sorafenib…" />
                        </div>
                      </>
                    )}

                    {/* Sponsor / CRO fields */}
                    {showSponsorFields && (
                      <>
                        <div className="form-group">
                          <label className="form-label" htmlFor="company">Company / Organisation *</label>
                          <input className="form-input" type="text" id="company" name="company" placeholder="Pharma Co. / CRO Ltd." />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="indication">Indication / Therapeutic Area</label>
                          <input className="form-input" type="text" id="indication" name="indication" placeholder="e.g. HCC, NSCLC, breast cancer…" />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="phase">Trial Phase</label>
                          <select className="form-select" id="phase" name="phase" defaultValue="">
                            <option value="" disabled>Select phase…</option>
                            <option>Phase II</option>
                            <option>Phase III</option>
                            <option>Phase IV</option>
                            <option>Phase II/III</option>
                            <option>Not yet determined</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Message *</label>
                      <textarea className="form-textarea" id="message" name="message" placeholder="Please describe your enquiry…" required />
                    </div>

                    <button className="form-submit" type="submit" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                    </button>

                    {status === 'error' && (
                      <div style={{ marginTop: '16px', padding: '14px 18px', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '10px', color: '#b91c1c', fontSize: '.9rem' }}>
                        Something went wrong sending your enquiry — please try again, or call us at <a href="tel:+85221169283" style={{ color: '#b91c1c', fontWeight: 600 }}>(852) 2116 9283</a>.
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOR SPONSORS & PHYSICIANS */}
      <section className="alt">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}>
            <div className="reveal">
              <div className="eyebrow">For Sponsors &amp; CROs</div>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: 'var(--orange-deep)', lineHeight: 1.2, marginTop: '14px' }}>Feasibility requests</h2>
              <p style={{ marginTop: '16px', color: 'var(--ink-soft)' }}>Email your protocol or synopsis to <a href="mailto:hnhctc@hnhmgl.com" style={{ color: 'var(--orange)', fontWeight: 600 }}>hnhctc@hnhmgl.com</a>. We will provide a detailed feasibility response within 5 business days including:</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '14px' }}>
                {[
                  'Estimated screen failure rate and basis for that estimate',
                  'Projected monthly enrolment and confidence level',
                  'Realistic site activation timeline (IRB, CTA, SIV)',
                  'Infrastructure fit — any missing equipment or referral dependencies',
                  'PI interest and availability',
                ].map(item => (
                  <li key={item} style={{ fontSize: '.92rem', color: 'var(--ink-soft)', paddingLeft: '18px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--orange)' }}>–</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <div className="eyebrow">For Physicians</div>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: 'var(--orange-deep)', lineHeight: 1.2, marginTop: '14px' }}>Referring patients</h2>
              <p style={{ marginTop: '16px', color: 'var(--ink-soft)' }}>If you have a patient who may be eligible for one of our current studies, please contact us with the patient's diagnosis, stage, and prior treatment history. We will arrange a prompt eligibility review and keep you fully informed of the outcome.</p>
              <p style={{ marginTop: '12px', color: 'var(--ink-soft)' }}>Referral letters can be sent to <a href="mailto:hnhctc@hnhmgl.com" style={{ color: 'var(--orange)', fontWeight: 600 }}>hnhctc@hnhmgl.com</a>. All communications are handled confidentially.</p>
              <p style={{ marginTop: '12px', color: 'var(--ink-soft)' }}>For HCC, NSCLC, colorectal cancer, and breast cancer patients, please see the <Link to="/clinical-research/participation#current-studies" style={{ color: 'var(--orange)', fontWeight: 600 }}>current study listings</Link> for detailed eligibility criteria before referring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LINK BACK TO MAIN MEDICAL CENTRE */}
      <section style={{ padding: '60px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Humanity &amp; Health Medical Centre</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.5rem,2.4vw,1.9rem)', color: 'var(--orange-deep)', margin: '14px 0 12px' }}>Need a clinical consultation?</h2>
          <p style={{ color: 'var(--ink-soft)', maxWidth: '50ch', margin: '0 auto 24px' }}>For specialist medical consultations — including hepatology, gastroenterology, surgery, and oncology — visit our main medical centre at the same address.</p>
          <Link className="btn" to="/contact">Main Clinic — Make an Appointment</Link>
        </div>
      </section>

    </main>
  );
}
