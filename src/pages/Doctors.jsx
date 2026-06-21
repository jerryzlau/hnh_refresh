import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { imgFb } from '../utils';
import PageHero from '../components/PageHero';

export default function Doctors() {
  useReveal();
  return (
    <main>
      <PageHero
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Medical Staff' }]}
        eyebrow="Medical Staff · 醫療團隊"
        title="Our specialist doctors"
        lead="Internationally trained specialists bringing decades of combined experience in hepatology, gastroenterology, surgery, oncology, and respiratory medicine."
      />

      {/* DOCTORS */}
      <section id="specialists">
        <div className="wrap">
          <div className="doc-grid full">

            {/* Dr George Lau */}
            <div className="doc full reveal" id="dr-george-lau">
              <img
                src="/assets/doc-george-lau.jpg"
                data-cdn="https://static.wixstatic.com/media/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg"
                data-cdn2="https://static.wixstatic.com/media/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg/v1/fill/w_122,h_79,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg"
                onError={e => imgFb(e.currentTarget)}
                alt="Dr George Lau"
                loading="lazy"
              />
              <div className="info">
                <h3>Dr George Lau</h3>
                <div className="spec">Gastroenterology &amp; Hepatology</div>
                <div className="quals">MB BS (HK) · MRCP (UK) · FHKCP · MD (HK) · FRCP (Edin) · FRCP (Lond) · FHKAM (Medicine)</div>
                <p className="bio">Dr George Lau is a leading authority in viral hepatitis and liver disease in Hong Kong and the Asia-Pacific region. He holds a Doctor of Medicine from The University of Hong Kong and is a Fellow of both the Royal College of Physicians of Edinburgh and London. Dr Lau has published extensively in peer-reviewed journals on hepatitis B and C management, antiviral therapy, and liver fibrosis, and has participated in numerous clinical trials bringing new treatment options to patients. He is committed to combining the latest evidence-based treatments with attentive, personalised care.</p>
                <div className="contact">
                  <div><strong>Phone:</strong> <a href="tel:+85228613777">(852) 2861 3777</a></div>
                  <div><strong>Email:</strong> <a href="mailto:gkklau@hnhmgl.com">gkklau@hnhmgl.com</a></div>
                  <div><strong>Clinical Research:</strong> <Link to="/clinical-research">HNH Clinical Trial Centre</Link></div>
                </div>
              </div>
            </div>

            {/* Dr Richard Choi */}
            <div className="doc full reveal" id="dr-richard-choi">
              <img
                src="/assets/doc-richard-choi.jpg"
                data-cdn="https://static.wixstatic.com/media/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg"
                data-cdn2="https://static.wixstatic.com/media/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg/v1/fill/w_122,h_79,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg"
                onError={e => imgFb(e.currentTarget)}
                alt="Dr Richard Choi"
                loading="lazy"
              />
              <div className="info">
                <h3>Dr Richard Choi</h3>
                <div className="spec">General Surgery</div>
                <div className="quals">MB BS (HK) · DPD (Wales) · FRACS · FRCS (Edin) · FCSHK · FHKAM (Surgery)</div>
                <p className="bio">Dr Richard Choi is a Fellow of the Royal Australasian College of Surgeons (FRACS) and a Fellow of the Royal College of Surgeons of Edinburgh. With dual fellowship qualifications in surgery from Australasia and the United Kingdom, Dr Choi brings broad expertise in colorectal surgery, haemorrhoid treatment, hernia repair, and minimally invasive laparoscopic procedures. He places particular emphasis on patient education, ensuring individuals fully understand their condition and treatment options before proceeding.</p>
                <div className="contact">
                  <div><strong>Phone:</strong> <a href="tel:+85293498851">(852) 9349 8851</a></div>
                  <div><strong>WhatsApp:</strong> <a href="https://wa.me/85293498851">+852 9349 8851</a></div>
                </div>
              </div>
            </div>

            {/* Dr Patrick Lau */}
            <div className="doc full reveal" id="dr-patrick-lau">
              <img
                src="/assets/doc-patrick-lau.jpg"
                data-cdn="https://static.wixstatic.com/media/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg"
                data-cdn2="https://static.wixstatic.com/media/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg/v1/fill/w_122,h_76,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg"
                onError={e => imgFb(e.currentTarget)}
                alt="Dr Patrick Lau"
                loading="lazy"
              />
              <div className="info">
                <h3>Dr Patrick Lau</h3>
                <div className="spec">Medical Oncology</div>
                <div className="quals">MB BChir (Cambridge) · MRCP (UK) · FRCP (Glasg) · FRCP (Edin) · FRCP (Lond) · FHKCP · FHKAM</div>
                <p className="bio">Dr Patrick Lau graduated from the University of Cambridge and holds triple FRCP fellowships from Glasgow, Edinburgh, and London — a testament to his breadth of clinical training. As the Centre's medical oncologist, Dr Lau specialises in the systemic treatment of cancer including chemotherapy, targeted therapy, and immunotherapy. He brings a compassionate approach to cancer care, working closely with surgical and radiology colleagues to design individualised treatment plans for each patient.</p>
                <div className="contact">
                  <div><strong>Phone:</strong> <a href="tel:+85228613777">(852) 2861 3777</a></div>
                  <div><strong>Email:</strong> <a href="mailto:drpatrick.lau@hnhmgl.com">drpatrick.lau@hnhmgl.com</a></div>
                </div>
              </div>
            </div>

            {/* Dr Jane Chan */}
            <div className="doc full reveal" id="dr-jane-chan">
              <img
                src="/assets/doc-jane-chan.jpg"
                data-cdn="https://static.wixstatic.com/media/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg"
                data-cdn2="https://static.wixstatic.com/media/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg/v1/fill/w_129,h_87,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg"
                onError={e => imgFb(e.currentTarget)}
                alt="Dr Chan Chun Kwong, Jane"
                loading="lazy"
              />
              <div className="info">
                <h3>Dr Chan Chun Kwong, Jane</h3>
                <div className="spec">Respiratory Medicine &amp; Infectious Disease</div>
                <div className="quals">LMCHK · MD (Chicago USA) · DABIM · FHKCP · FHKAM (Medicine) · DABIM (Pulmonary D) · DABIM (Critical Care Med) · FRCP (Edin) · PDipID (HK)</div>
                <p className="bio">Dr Jane Chan holds an MD from the University of Illinois at Chicago and is triple board-certified by the American Board of Internal Medicine in internal medicine, pulmonary disease, and critical care medicine. A Fellow of the Royal College of Physicians of Edinburgh and a Member of the Hong Kong College of Physicians, Dr Chan specialises in respiratory conditions including asthma, COPD, interstitial lung disease, sleep apnoea, and respiratory infections. Her postgraduate diploma in infectious diseases further equips her to manage complex infectious conditions across systems.</p>
                <div className="contact">
                  <div><strong>Phone:</strong> <a href="tel:+85228613777">(852) 2861 3777</a></div>
                </div>
              </div>
            </div>

          </div>

          <div className="honorary reveal">
            <strong>Honorary Consultant:</strong> Professor SK Lam — distinguished hepatologist and Professor Emeritus at The University of Hong Kong
          </div>
        </div>
      </section>

      {/* NURSING & SUPPORT */}
      <section className="alt">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Our Team · 團隊</div>
            <h2>Dedicated nursing &amp; support staff</h2>
            <p>Behind every specialist physician is a team of experienced nurses, endoscopy technicians, and administrative professionals. All nursing and technical staff hold relevant professional qualifications and receive ongoing training to stay current with evolving clinical practice. Every patient is assigned a designated staff member who follows their care journey from initial booking through to post-procedure follow-up.</p>
          </div>
          <div className="svc-grid" style={{ maxWidth: '800px' }}>
            <div className="svc reveal" style={{ gap: '10px' }}>
              <div style={{ fontSize: '1.6rem' }}>🩺</div>
              <h3>Endoscopy Nurses</h3>
              <p>Specially trained in endoscopic procedures, patient preparation, and post-procedure monitoring under the Olympus HDTV/NBI system.</p>
            </div>
            <div className="svc reveal" style={{ gap: '10px' }}>
              <div style={{ fontSize: '1.6rem' }}>🔬</div>
              <h3>Laboratory Technicians</h3>
              <p>Qualified medical laboratory technologists processing on-site blood tests for rapid results, supporting fast and accurate clinical decisions.</p>
            </div>
            <div className="svc reveal" style={{ gap: '10px' }}>
              <div style={{ fontSize: '1.6rem' }}>📋</div>
              <h3>Patient Coordinators</h3>
              <p>Dedicated coordinators manage appointments, liaise between specialists, and ensure seamless follow-up for every patient.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: 'var(--orange-deep)', color: '#fff' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: '#FFD0A6', marginBottom: 0 }}>Get in touch</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.6rem,2.8vw,2.2rem)', fontWeight: 500, margin: '16px 0 12px' }}>Book a consultation with one of our specialists</h2>
          <p style={{ color: '#F1DDC4', maxWidth: '50ch', margin: '0 auto 28px' }}>Available Monday to Friday 9am–6pm and Saturday 9am–1pm. Contact us by phone, WhatsApp, or email.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/contact" style={{ background: 'var(--cinnabar)' }}>Make an Appointment</Link>
            <a className="btn ghost" href="tel:+85228613777" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>+852 2861 3777</a>
          </div>
        </div>
      </section>

    </main>
  );
}
