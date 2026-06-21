import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';

export default function CRIndex() {
  useReveal();
  return (
    <main>

      {/* HERO */}
      <div className="ctc-hero">
        <div className="wrap">
          <div>
            <div className="eyebrow">Hong Kong · Est. 2009</div>
            <h1>Your one-stop<br />clinical trial <em>solution</em><br />in Asia.</h1>
            <p className="lead">HNH Clinical Trial Centre conducts Phase II, III, and IV oncology trials with a track record of top-ranked global recruitment, rapid startup, and patient retention rates above 90%.</p>
            <div className="cta">
              <Link className="btn" to="/clinical-research/participation">Join a Trial</Link>
              <Link className="btn ghost" to="/clinical-research/services">Our Capabilities</Link>
            </div>
          </div>
          <div className="stat-panel">
            <div className="stat">
              <div className="stat-num">&gt;90%</div>
              <div className="stat-label">Average patient retention rate across all active studies</div>
            </div>
            <div className="stat">
              <div className="stat-num">&lt;3 mo</div>
              <div className="stat-label">Average startup time from contract to first patient enrolled</div>
            </div>
            <div className="stat">
              <div className="stat-num">Top 3</div>
              <div className="stat-label">Global recruitment ranking in multiple international trials</div>
            </div>
            <div className="stat">
              <div className="stat-num">0%</div>
              <div className="stat-label">Screen failure rate in select HCC and PBC studies</div>
            </div>
          </div>
        </div>
      </div>

      {/* STAT BAR */}
      <div className="stat-bar">
        <div className="wrap">
          <div className="item"><span className="num">Phase II–IV</span><span className="lbl">Trial phases conducted</span></div>
          <div className="item"><span className="num">4</span><span className="lbl">Studies currently recruiting</span></div>
          <div className="item"><span className="num">26.8</span><span className="lbl">Impact factor of recent publication</span></div>
          <div className="item"><span className="num">GCP</span><span className="lbl">Compliant operations, every study</span></div>
        </div>
      </div>

      {/* ABOUT SNIPPET */}
      <section>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}>
            <div className="reveal">
              <div className="eyebrow">About the Centre · 中心簡介</div>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.7rem,2.8vw,2.2rem)', color: 'var(--orange-deep)', lineHeight: 1.2, marginTop: '14px' }}>Bringing new treatments to patients in Asia</h2>
              <p style={{ marginTop: '18px', color: 'var(--ink-soft)' }}>HNH Clinical Trial Centre is the research arm of Humanity &amp; Health Medical Centre, located in Central Hong Kong. We partner with global pharmaceutical companies and academic institutions to run rigorously conducted clinical trials that bring access to investigational therapies to patients in Hong Kong and the wider Asia-Pacific region.</p>
              <p style={{ marginTop: '14px', color: 'var(--ink-soft)' }}>Our Principal Investigator, Dr George Lau, is a world-recognised authority in hepatology and has served as PI on major international studies including the HIMALAYA trial of tremelimumab plus durvalumab in hepatocellular carcinoma.</p>
              <Link className="btn ghost" to="/clinical-research/about" style={{ marginTop: '26px' }}>Learn more about us →</Link>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div className="svc" style={{ gap: '10px' }}>
                <div style={{ fontSize: '1.5rem' }}>🔬</div>
                <h3>Oncology Focus</h3>
                <p>Specialising in hepatocellular carcinoma, NSCLC, colorectal cancer, and breast cancer — therapeutic areas with the greatest unmet need in Asia.</p>
              </div>
              <div className="svc" style={{ gap: '10px' }}>
                <div style={{ fontSize: '1.5rem' }}>⚡</div>
                <h3>Rapid Execution</h3>
                <p>Average startup under 3 months. Our experienced team and established infrastructure remove friction at every stage from IRB submission to first patient in.</p>
              </div>
              <div className="svc" style={{ gap: '10px' }}>
                <div style={{ fontSize: '1.5rem' }}>🤝</div>
                <h3>Patient-Centred</h3>
                <p>Every participant is matched carefully to eligible studies, cared for by our dedicated research nurses, and followed through to study completion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT STUDIES */}
      <section className="alt" id="current-studies">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Now Recruiting · 現正招募</div>
            <h2>Currently open clinical trials</h2>
            <p>If you or a patient may be eligible for one of these studies, <Link to="/clinical-research/contact" style={{ color: 'var(--orange)', fontWeight: 600 }}>contact our team</Link> for a confidential eligibility discussion.</p>
          </div>
          <div className="study-grid">

            <div className="study-card reveal">
              <div className="study-header">
                <div>
                  <span className="phase-badge">Phase III</span>
                  <span className="recruit-dot" style={{ marginLeft: '10px' }}>Recruiting</span>
                </div>
              </div>
              <div className="ta">Thoracic Oncology · NSCLC</div>
              <h3>KRAS G12C-Mutant Non-Small Cell Lung Cancer</h3>
              <p>Evaluating a targeted KRAS G12C inhibitor in patients with advanced or metastatic NSCLC harbouring a confirmed KRAS G12C mutation who have received prior platinum-based chemotherapy.</p>
              <Link className="more" to="/clinical-research/participation#nsclc">Eligibility criteria →</Link>
            </div>

            <div className="study-card reveal">
              <div className="study-header">
                <div>
                  <span className="phase-badge">Phase III</span>
                  <span className="recruit-dot" style={{ marginLeft: '10px' }}>Recruiting</span>
                </div>
              </div>
              <div className="ta">Hepatology · HCC</div>
              <h3>Unresectable Metastatic Hepatocellular Carcinoma</h3>
              <p>An investigational systemic therapy regimen for patients with unresectable or metastatic HCC who have not received prior systemic treatment. Building on the success of our HIMALAYA experience.</p>
              <Link className="more" to="/clinical-research/participation#hcc">Eligibility criteria →</Link>
            </div>

            <div className="study-card reveal">
              <div className="study-header">
                <div>
                  <span className="phase-badge">Phase II/III</span>
                  <span className="recruit-dot" style={{ marginLeft: '10px' }}>Recruiting</span>
                </div>
              </div>
              <div className="ta">GI Oncology · CRC</div>
              <h3>Treatment-Experienced Microsatellite Stable Colorectal Cancer (MSS CRC)</h3>
              <p>Investigating a novel therapeutic strategy for patients with MSS colorectal cancer who have progressed on standard first- and second-line treatment, a population with significant unmet need.</p>
              <Link className="more" to="/clinical-research/participation#crc">Eligibility criteria →</Link>
            </div>

            <div className="study-card reveal">
              <div className="study-header">
                <div>
                  <span className="phase-badge">Phase II/III</span>
                  <span className="recruit-dot" style={{ marginLeft: '10px' }}>Recruiting</span>
                </div>
              </div>
              <div className="ta">Breast Oncology</div>
              <h3>Treatment-Experienced ER+ / HER2− Locally Advanced or Metastatic Breast Cancer</h3>
              <p>Evaluating a next-generation endocrine-based therapy for patients with hormone receptor-positive, HER2-negative metastatic breast cancer following progression on at least one prior line of endocrine therapy.</p>
              <Link className="more" to="/clinical-research/participation#breast">Eligibility criteria →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Track Record · 往績</div>
            <h2>A proven record of high-quality execution</h2>
          </div>
          <div className="achieve-grid">
            <div className="achieve-card reveal">
              <div className="medal">🥇</div>
              <h3>ALK-Positive NSCLC — Top 3 Global</h3>
              <p>Randomised 8 patients in just 6 months, earning a top-3 global recruitment ranking among all sites worldwide in this international Phase III study.</p>
            </div>
            <div className="achieve-card reveal">
              <div className="medal">🎯</div>
              <h3>HCC &amp; PBC Study — 0% Screen Failure</h3>
              <p>Randomised 4 patients with a zero screen failure rate — demonstrating exceptional patient selection accuracy and reducing wasted resource for the sponsor.</p>
            </div>
            <div className="achieve-card reveal">
              <div className="medal">⚡</div>
              <h3>Unresectable HCC — 41 Patients, Top 3 Global</h3>
              <p>Enrolled 41 patients across the study lifecycle (30 in the first 6 months alone), again ranking in the top 3 globally — affirming our access to the HCC patient population in Hong Kong.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATION HIGHLIGHT */}
      <section className="alt">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Publications · 發表研究</div>
            <h2>Recent research output</h2>
          </div>
          <div className="pub-card reveal">
            <div>
              <h3>"Outcomes in the Asian subgroup of the phase III randomised HIMALAYA study of tremelimumab plus durvalumab in unresectable hepatocellular carcinoma"</h3>
              <div className="journal"><strong style={{ color: '#fff' }}>Journal of Hepatology</strong> · Accepted Manuscript · 2025</div>
              <p style={{ marginTop: '14px', fontSize: '.9rem', color: '#F1DDC4' }}>Dr George Lau served as a core investigator of the HIMALAYA study — a landmark Phase III trial of the STRIDE regimen (single tremelimumab dose plus durvalumab) versus sorafenib in unresectable HCC. This sub-analysis examines outcomes specifically in the Asian patient subgroup, relevant to the predominantly Asian population treated at HNH-CTC. Dr Lau presented related data at the 2025 APASL STC in Qingdao.</p>
              <Link className="btn" to="/clinical-research/revolutionrx#himalaya" style={{ background: 'var(--cinnabar)', marginTop: '20px', display: 'inline-block' }}>Read summary →</Link>
            </div>
            <div className="if-badge">
              <span className="if-num">26.8</span>
              <div className="if-lbl">Impact Factor</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg,#0D1F2D,#1A3547)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: '#E0731D' }}>Get Involved</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.7rem,3vw,2.4rem)', fontWeight: 500, color: '#fff', margin: '14px 0 12px' }}>Ready to partner with us?</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '50ch', margin: '0 auto 28px' }}>Whether you're a patient exploring trial options or a sponsor seeking a high-performing Asia site, we'd like to hear from you.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/clinical-research/participation" style={{ background: 'var(--orange)' }}>For Patients &amp; Sponsors</Link>
            <Link className="btn ghost" to="/clinical-research/contact" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.45)' }}>Contact the Centre</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
