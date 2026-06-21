import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';

export default function CRServices() {
  useReveal();
  return (
    <main>

      {/* PAGE HERO */}
      <div className="ctc-page-hero">
        <div className="wrap">
          <div className="breadcrumb" style={{ color: 'rgba(255,255,255,.5)' }}>
            <Link to="/clinical-research">Home</Link>
            <span className="sep">/</span>
            <span>Services &amp; Facilities</span>
          </div>
          <div className="eyebrow">Services &amp; Facilities · 服務與設施</div>
          <h1>A complete one-stop<br />clinical trial operation</h1>
          <p className="lead">Everything required to run a rigorous Phase II–IV clinical trial — investigator, experienced staff, advanced equipment, specimen handling, and regulatory support — under one roof in Central Hong Kong.</p>
        </div>
      </div>

      {/* TRIAL PHASES */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Trial Phases · 試驗階段</div>
            <h2>Phases II, III &amp; IV capabilities</h2>
            <p>We have the experience and infrastructure to serve as a principal site across the full spectrum of late-phase clinical development.</p>
          </div>
          <div className="phase-grid">

            <div className="phase-card reveal">
              <div className="phase-num">II</div>
              <h3>Phase II — Proof of Concept</h3>
              <p>Dose-finding, safety/tolerability, and early efficacy signal studies, often in defined biomarker-selected populations. We support both single-arm and randomised Phase II designs.</p>
              <ul>
                <li>Biomarker-driven patient selection (KRAS, EGFR, ALK, HER2, MSS/MSI)</li>
                <li>Safety monitoring and AE reporting</li>
                <li>PK/PD sampling with refrigerated centrifuge and −80°C storage</li>
                <li>Frequent visit schedules accommodated</li>
              </ul>
            </div>

            <div className="phase-card reveal">
              <div className="phase-num">III</div>
              <h3>Phase III — Pivotal Registration</h3>
              <p>Large randomised controlled trials supporting global regulatory submissions. Our top-ranked global recruitment history demonstrates the capacity to enrol at pace while maintaining data quality.</p>
              <ul>
                <li>Rapid IRB approval and site activation (&lt;3 months average)</li>
                <li>Blinded and open-label designs</li>
                <li>IRT/RTSM randomisation system experience</li>
                <li>High retention (&gt;90%) minimises informative censoring</li>
                <li>Electronic data capture (EDC) proficiency</li>
              </ul>
            </div>

            <div className="phase-card reveal">
              <div className="phase-num">IV</div>
              <h3>Phase IV — Post-Marketing</h3>
              <p>Real-world evidence studies, expanded access programmes, and long-term safety follow-up registries in the post-approval phase.</p>
              <ul>
                <li>Real-world outcomes data collection</li>
                <li>Long-term patient follow-up infrastructure</li>
                <li>Expanded access and compassionate use facilitation</li>
                <li>Patient-reported outcome (PRO) administration</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="alt">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Facilities · 設施</div>
            <h2>On-site equipment &amp; infrastructure</h2>
            <p>Participants rarely need to travel to an external facility. Our Central Hong Kong location houses the full complement of diagnostic, specimen-handling, and treatment infrastructure required for complex oncology protocols.</p>
          </div>
          <div className="equip-cols reveal">
            <div>
              <div className="equip-group" style={{ marginBottom: '36px' }}>
                <h3>Drug &amp; Specimen Storage</h3>
                <ul className="equip-list">
                  <li><div className="dot" /><span><strong>Locked investigational product storage</strong> — secure, temperature-monitored IP cabinets with access log</span></li>
                  <li><div className="dot" /><span><strong>2–8°C pharmaceutical refrigerators</strong> — for refrigerated IMP and biological kits</span></li>
                  <li><div className="dot" /><span><strong>−20°C freezers</strong> — intermediate biological specimen storage</span></li>
                  <li><div className="dot" /><span><strong>−80°C ultra-low freezers</strong> — long-term biobank-grade specimen storage for PK, PD, and correlative biomarker samples</span></li>
                </ul>
              </div>
              <div className="equip-group" style={{ marginBottom: '36px' }}>
                <h3>Sample Processing</h3>
                <ul className="equip-list">
                  <li><div className="dot" /><span><strong>Refrigerated centrifuge</strong> — plasma, serum, and PBMC separation per protocol-specific processing manuals</span></li>
                  <li><div className="dot" /><span><strong>Class II Biological Safety Cabinet</strong> — safe drug preparation and reconstitution for IV and intravesical agents</span></li>
                  <li><div className="dot" /><span>Temperature monitoring with data logger and alarm system</span></li>
                  <li><div className="dot" /><span>On-site IATA-certified specimen shipper with dry ice handling capability</span></li>
                </ul>
              </div>
            </div>
            <div>
              <div className="equip-group" style={{ marginBottom: '36px' }}>
                <h3>Diagnostics &amp; Monitoring</h3>
                <ul className="equip-list">
                  <li><div className="dot" /><span><strong>ECG (12-lead)</strong> — standard and continuous monitoring</span></li>
                  <li><div className="dot" /><span><strong>Holter monitoring</strong> — 24/48-hour ambulatory cardiac recording</span></li>
                  <li><div className="dot" /><span><strong>Ultrasound</strong> — abdominal, hepatic, and soft tissue imaging</span></li>
                  <li><div className="dot" /><span><strong>Echocardiography</strong> — cardiac function assessment (LVEF, wall motion)</span></li>
                  <li><div className="dot" /><span><strong>Endoscopy (gastroscopy &amp; colonoscopy)</strong> — Olympus HDTV/NBI system</span></li>
                  <li><div className="dot" /><span><strong>IV infusion systems</strong> — for IV chemotherapy, immunotherapy, and investigational agents</span></li>
                </ul>
              </div>
              <div className="equip-group">
                <h3>Imaging (via referral network)</h3>
                <ul className="equip-list">
                  <li><div className="dot" /><span><strong>X-ray</strong> — chest and skeletal</span></li>
                  <li><div className="dot" /><span><strong>CT scan</strong> — thorax, abdomen, pelvis; RECIST-compliant tumour assessment</span></li>
                  <li><div className="dot" /><span><strong>MRI</strong> — hepatic, brain, and whole-body protocols</span></li>
                  <li><div className="dot" /><span><strong>PET-CT</strong> — for metabolic response assessment where required by protocol</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGULATORY & SUPPORT SERVICES */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Support Services · 支援服務</div>
            <h2>End-to-end trial management</h2>
            <p>Our experienced team provides comprehensive research coordination beyond just patient care — from IRB submission to study close-out.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {[
              { ic: '📋', h: 'Regulatory Affairs', p: 'IRB/IEC submission, annual renewals, substantial amendments, and SAE/SUSAR reporting. Experienced with ICHE6(R2) GCP and Hong Kong Department of Health requirements.' },
              { ic: '💻', h: 'Data Management', p: 'Proficient in major EDC platforms (Medidata Rave, Oracle InForm, REDCap). Consistent low query rates and timely data entry to accelerate sponsor data cuts.' },
              { ic: '🩺', h: 'Research Nursing', p: 'Dedicated research nurses manage study visits end-to-end: scheduling, consent, sample collection, AE monitoring, and participant communication.' },
              { ic: '🔍', h: 'Patient Recruitment', p: "Proactive pre-screening from the Centre's established patient cohort. Collaboration with referring physicians across Hong Kong and the Greater Bay Area for broader reach." },
              { ic: '📦', h: 'IP Accountability', p: 'Strict investigational product receipt, storage, dispensing, and accountability records. IP destruction or return handled per protocol and local regulations.' },
              { ic: '📁', h: 'Trial Master File', p: 'Audit-ready paper and/or electronic TMF maintained throughout the study lifecycle, available for monitoring visits and regulatory inspection at all times.' },
            ].map(({ ic, h, p }) => (
              <div className="svc reveal" style={{ gap: '12px' }} key={h}>
                <div style={{ fontSize: '1.5rem' }}>{ic}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STARTUP PROCESS */}
      <section className="alt">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Site Activation · 啟動流程</div>
            <h2>From contract to first patient in &lt;3 months</h2>
            <p>Our streamlined site activation process has delivered first-patient-in timelines under 3 months — among the fastest in the Hong Kong clinical trial landscape.</p>
          </div>
          <div style={{ maxWidth: '680px' }} className="reveal">
            <div className="timeline">
              {[
                { n: '1', h: 'Feasibility Assessment', p: 'Rapid protocol review and patient population assessment. We provide honest, data-driven feasibility input — including expected screen failure rates and monthly enrolment projections — within 5 business days.', t: '~ 1 week' },
                { n: '2', h: 'Contract & Budget Negotiation', p: 'Transparent, fair-market-value budget discussions. Clinical trial agreement (CTA) review with our legal team. Parallel processing with IRB submission where allowable.', t: '2–4 weeks' },
                { n: '3', h: 'IRB / IEC Submission & Approval', p: 'Full submission prepared by our regulatory coordinator, reviewed by PI, and submitted to the Institutional Review Board. We maintain an established relationship with our IRB to facilitate efficient review.', t: '4–6 weeks' },
                { n: '4', h: 'Site Initiation Visit & Training', p: 'Protocol-specific training for all staff. IP receipt and accountability procedures established. All regulatory documents finalised and filed in the TMF.', t: '1–2 weeks' },
                { n: '5', h: 'First Patient Enrolled', p: 'Pre-screened patients contacted immediately upon site activation. Eligibility confirmed, informed consent obtained, and first patient randomised.', t: 'Target: week 10–12' },
              ].map(({ n, h, p, t }) => (
                <div className="tl-step" key={n}>
                  <div className="tl-line">
                    <div className="tl-num">{n}</div>
                    <div className="tl-connector" />
                  </div>
                  <div className="tl-content">
                    <h4>{h}</h4>
                    <p>{p}</p>
                    <span className="timing">{t}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg,#0D1F2D,#1A3547)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: '#E0731D' }}>Ready to begin?</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.7rem,3vw,2.4rem)', fontWeight: 500, color: '#fff', margin: '14px 0 12px' }}>Request a feasibility assessment</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '52ch', margin: '0 auto 28px' }}>Send us your protocol or synopsis and we'll provide a rapid feasibility response with enrolment projections and timeline estimates.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/clinical-research/contact" style={{ background: 'var(--orange)' }}>Contact the Centre</Link>
            <a className="btn ghost" href="mailto:hnhctc@hnhmgl.com" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.45)' }}>hnhctc@hnhmgl.com</a>
          </div>
        </div>
      </section>

    </main>
  );
}
