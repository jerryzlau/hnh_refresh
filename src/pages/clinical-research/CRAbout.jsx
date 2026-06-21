import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import { imgFb } from '../../utils';

export default function CRAbout() {
  useReveal();
  return (
    <main>

      {/* PAGE HERO */}
      <div className="ctc-page-hero">
        <div className="wrap">
          <div className="breadcrumb" style={{ color: 'rgba(255,255,255,.5)' }}>
            <Link to="/clinical-research">Home</Link>
            <span className="sep">/</span>
            <span>About</span>
          </div>
          <div className="eyebrow">About Us · 關於我們</div>
          <h1>Excellence in clinical research,<br />grounded in patient care</h1>
          <p className="lead">HNH Clinical Trial Centre combines the investigator expertise of a world-class academic centre with the efficiency and patient access of a dedicated private clinical trial unit.</p>
        </div>
      </div>

      {/* MISSION */}
      <section>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}>
            <div className="reveal">
              <div className="eyebrow">Our Mission · 使命</div>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.7rem,2.8vw,2.2rem)', color: 'var(--orange-deep)', lineHeight: 1.2, marginTop: '14px' }}>Bridging innovation and patients</h2>
              <p style={{ marginTop: '18px', color: 'var(--ink-soft)' }}>Clinical trials are the engine of medical progress — but they only work when the right patients can access them, and when sites execute with the discipline that produces trustworthy data. HNH Clinical Trial Centre exists to do both.</p>
              <p style={{ marginTop: '12px', color: 'var(--ink-soft)' }}>We are committed to professional service, strict patient confidentiality, and the highest standards of research integrity under ICH-GCP guidelines. Our patient-centred approach means that every participant is treated as an individual deserving of care — not just a data point.</p>
              <p style={{ marginTop: '12px', color: 'var(--ink-soft)' }}>Located at the heart of Hong Kong's financial district, we draw patients from across Hong Kong Island and the broader Guangdong-Hong Kong-Macao Greater Bay Area, giving sponsors access to a diverse and medically underserved oncology population.</p>
            </div>
            <div className="reveal">
              <div className="eyebrow">Our Principles · 原則</div>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.7rem,2.8vw,2.2rem)', color: 'var(--orange-deep)', lineHeight: 1.2, marginTop: '14px' }}>How we work</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '18px' }}>
                {[
                  { n: '1', title: 'Patient first', body: 'Every decision — from eligibility screening to follow-up scheduling — prioritises participant safety and wellbeing above study metrics.' },
                  { n: '2', title: 'Rigorous GCP compliance', body: 'All studies are conducted in strict accordance with ICH E6(R2) GCP guidelines and applicable Hong Kong regulatory requirements. Protocol deviations are rare; when they occur, they are reported immediately.' },
                  { n: '3', title: 'Data quality & integrity', body: 'Clean, complete, and audit-ready data at every data cut. Our query rate is consistently below industry average, reducing sponsor burden and accelerating timelines.' },
                  { n: '4', title: 'Transparent communication', body: 'Sponsors and monitors receive proactive, timely updates. We view our sponsor relationships as partnerships, not transactions.' },
                ].map(({ n, title, body }) => (
                  <li key={n} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <span style={{ flex: '0 0 32px', height: '32px', borderRadius: '8px', background: 'var(--orange-soft)', color: 'var(--orange)', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: '.9rem' }}>{n}</span>
                    <div>
                      <strong style={{ color: 'var(--ink)' }}>{title}</strong>
                      <p style={{ fontSize: '.9rem', color: 'var(--ink-soft)', marginTop: '3px' }}>{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPAL INVESTIGATOR */}
      <section className="alt">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Principal Investigator · 主要研究員</div>
            <h2>Dr George Lau</h2>
          </div>
          <div className="pi-card reveal">
            <img
              src="/assets/doc-george-lau.jpg"
              data-cdn="https://static.wixstatic.com/media/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg"
              onError={e => imgFb(e.currentTarget)}
              alt="Dr George Lau"
            />
            <div className="info">
              <h3>Dr George Lau</h3>
              <div className="role">Principal Investigator · Gastroenterology &amp; Hepatology</div>
              <div className="quals">MB BS (HK) · MRCP (UK) · FHKCP · MD (HK) · FRCP (Edin) · FRCP (Lond) · FHKAM (Medicine)</div>
              <p>Dr George Lau is one of Asia's foremost hepatologists and one of the world's most cited researchers in viral hepatitis and liver disease. He holds a Doctor of Medicine from The University of Hong Kong and triple fellowship from the Royal Colleges of Physicians of Edinburgh and London, as well as the Hong Kong Academy of Medicine.</p>
              <p>As Principal Investigator at HNH-CTC, Dr Lau has led or co-led numerous pivotal international clinical trials. He served as a core investigator in the landmark HIMALAYA Phase III study of tremelimumab plus durvalumab (STRIDE regimen) in unresectable HCC, and presented findings on the Asian patient subgroup at the 2025 APASL Single Topic Conference in Qingdao, China. HNH-CTC ranked among the top 3 global recruitment sites for this study.</p>
              <p>Beyond HCC, Dr Lau has extensive trial experience in HBV, HCV, NASH, and oncology spanning NSCLC, colorectal cancer, and breast cancer. He has published more than 300 peer-reviewed articles in journals including <em>Journal of Hepatology</em>, <em>Hepatology</em>, <em>Gut</em>, and <em>The Lancet</em>.</p>
              <div className="contact">
                <div><strong>Email:</strong> <a href="mailto:gkklau@hnhmgl.com">gkklau@hnhmgl.com</a></div>
                <div><strong>Phone:</strong> <a href="tel:+85228613777">(852) 2861 3777</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THERAPEUTIC AREAS */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Therapeutic Areas · 治療領域</div>
            <h2>Where we operate</h2>
            <p>Our established patient populations and subspecialty expertise allow us to recruit efficiently across several high-priority oncology and hepatology indications.</p>
          </div>
          <div className="ta-grid reveal">
            <div className="ta-item">
              <div className="ic">🫁</div>
              <div>
                <h4>Non-Small Cell Lung Cancer (NSCLC)</h4>
                <p>Targeted therapies including KRAS G12C, ALK, EGFR inhibitors; immune checkpoint blockade; and combination strategies. Top 3 global recruitment in prior ALK study.</p>
              </div>
            </div>
            <div className="ta-item">
              <div className="ic">🫀</div>
              <div>
                <h4>Hepatocellular Carcinoma (HCC)</h4>
                <p>Systemic therapies, immunotherapy, and combination regimens for unresectable or metastatic HCC. Core HIMALAYA investigator site; 41 patients enrolled in one HCC programme.</p>
              </div>
            </div>
            <div className="ta-item">
              <div className="ic">🔬</div>
              <div>
                <h4>Colorectal Cancer (CRC)</h4>
                <p>Treatment-experienced MSS and MSI-H colorectal cancer; novel immunotherapy combinations and targeted agents. Colonoscopy capability on-site.</p>
              </div>
            </div>
            <div className="ta-item">
              <div className="ic">🎗️</div>
              <div>
                <h4>Breast Cancer</h4>
                <p>ER+/HER2− locally advanced and metastatic breast cancer; CDK4/6 inhibitor combinations; next-generation endocrine strategies including complete ER antagonists.</p>
              </div>
            </div>
            <div className="ta-item">
              <div className="ic">🦠</div>
              <div>
                <h4>Viral Hepatitis &amp; Liver Disease</h4>
                <p>HBV, HCV, NASH/MAFLD clinical trials — decades of investigator experience and an established hepatitis patient cohort in Hong Kong.</p>
              </div>
            </div>
            <div className="ta-item">
              <div className="ic">⚕️</div>
              <div>
                <h4>GI Oncology &amp; Other Solid Tumours</h4>
                <p>Gastric, biliary tract, and pancreatic cancers; GIST; and other solid tumour indications. Full GI endoscopy capability available on-site.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="alt">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Why Choose Us · 為何選擇我們</div>
            <h2>What sets us apart</h2>
          </div>
          <div className="value-grid">
            {[
              { ic: '🏆', h: 'Top-Ranked Global Recruitment', p: 'Ranked top 3 globally in multiple international Phase II–III trials. Our patient access, precise screening, and minimal screen failures make us a consistently high-performing site.' },
              { ic: '⚡', h: 'Rapid Site Activation', p: 'Average time from contract signature to first patient enrolled is under 3 months — well below the industry average — driven by experienced regulatory coordinators and an established IRB relationship.' },
              { ic: '🤝', h: 'High Retention', p: 'Average patient retention above 90% across all studies. Our dedicated research nurses and responsive follow-up processes minimise early withdrawal and protocol deviations.' },
              { ic: '📊', h: 'Clean Data', p: 'Consistently low query rates and audit-ready TMFs. Our experienced research coordinators complete CRFs accurately and on time, minimising sponsor monitoring burden.' },
              { ic: '🏥', h: 'One-Stop Facilities', p: 'ECG, ultrasound, echocardiography, Holter monitoring, endoscopy, IV infusion, and bio-sample processing all on-site — removing logistical barriers for participants.' },
              { ic: '🌏', h: 'Access to Asia-Pacific Patients', p: 'Central Hong Kong location with reach into the Greater Bay Area. Ethnically diverse patient population relevant to pan-Asian and global oncology studies.' },
            ].map(({ ic, h, p }) => (
              <div className="value-card reveal" key={h}>
                <div className="ic">{ic}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg,#0D1F2D,#1A3547)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: '#E0731D' }}>Contact Us</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.7rem,3vw,2.4rem)', fontWeight: 500, color: '#fff', margin: '14px 0 12px' }}>Interested in partnering with HNH-CTC?</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '50ch', margin: '0 auto 28px' }}>Whether you represent a sponsor, CRO, or are a patient interested in trial participation, we welcome your enquiry.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/clinical-research/contact" style={{ background: 'var(--orange)' }}>Get in Touch</Link>
            <Link className="btn ghost" to="/clinical-research/services" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.45)' }}>Services &amp; Facilities</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
