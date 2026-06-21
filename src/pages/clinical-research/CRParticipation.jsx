import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';

export default function CRParticipation() {
  useReveal();
  const [tab, setTab] = useState('patients');
  const [openFaq, setOpenFaq] = useState(null);

  function toggleFaq(i) {
    setOpenFaq(prev => prev === i ? null : i);
  }

  const faqs = [
    {
      q: 'Am I guaranteed to receive the new treatment?',
      a: 'In a randomised controlled trial, participants are allocated by chance to either the investigational treatment or a comparator (which may be standard of care, a placebo, or another active drug). Neither you nor the study team chooses which group you are in. In single-arm Phase II studies, all participants receive the investigational therapy. The consent form will clearly explain the design of the study you are considering.',
    },
    {
      q: 'Will my regular doctor be informed?',
      a: 'Yes, with your permission, we will keep your regular physician informed of your participation and provide copies of any relevant test results. Good communication between the trial team and your referring doctor ensures continuity of your overall care.',
    },
    {
      q: 'What happens if I experience side effects?',
      a: 'All side effects (called adverse events) are documented and managed by the trial team. You will be given an emergency contact number to reach the research nurses or on-call physician at any time. Serious adverse events are reported to the IRB and sponsor within strict timelines. You will receive appropriate medical treatment for any side effects, at no cost to you.',
    },
    {
      q: 'Can I participate if I live outside Hong Kong?',
      a: 'It depends on the study protocol and how frequent your visits need to be. Some studies allow patients from the Greater Bay Area to participate, particularly for less frequent visit schedules. Please discuss your situation with our team and we will advise you on feasibility for your specific circumstances.',
    },
    {
      q: 'Is there any cost to me for participating?',
      a: 'All study-related procedures, laboratory tests, imaging, and investigational medication are covered by the study sponsor at no charge to participants. You may still incur costs for travel to the clinic, or for medical care unrelated to the study. Some studies also provide a travel reimbursement — the consent form will specify this.',
    },
    {
      q: 'What happens when the study ends?',
      a: "At study completion, the data is submitted to the sponsor and regulatory authorities. If the treatment was beneficial, you may be eligible for compassionate use or expanded access while the drug awaits approval. Your ongoing medical care is transferred back to your treating physician. You will be informed of the study's overall results when they are published.",
    },
  ];

  const stepStyle = {
    display: 'grid',
    gridTemplateColumns: '48px 1fr',
    gap: '20px',
    alignItems: 'stretch',
  };

  return (
    <main>

      {/* PAGE HERO */}
      <div className="ctc-page-hero">
        <div className="wrap">
          <div className="breadcrumb" style={{ color: 'rgba(255,255,255,.5)' }}>
            <Link to="/clinical-research">Home</Link>
            <span className="sep">/</span>
            <span>Participation</span>
          </div>
          <div className="eyebrow">Participation · 參與</div>
          <h1>Get involved in<br />clinical research</h1>
          <p className="lead">Whether you are a patient exploring access to investigational therapies, or a sponsor seeking a high-performing Hong Kong site, this page explains how to work with us.</p>
        </div>
      </div>

      {/* AUDIENCE TABS */}
      <section>
        <div className="wrap">
          <div className="tab-nav" role="tablist">
            <button
              className={`tab-btn${tab === 'patients' ? ' active' : ''}`}
              role="tab"
              aria-selected={tab === 'patients'}
              onClick={() => setTab('patients')}
            >
              For Patients
            </button>
            <button
              className={`tab-btn${tab === 'sponsors' ? ' active' : ''}`}
              role="tab"
              aria-selected={tab === 'sponsors'}
              onClick={() => setTab('sponsors')}
            >
              For Sponsors &amp; CROs
            </button>
          </div>

          {/* PATIENTS TAB */}
          <div className={`tab-panel${tab === 'patients' ? ' active' : ''}`} id="tab-patients">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}>
              <div className="reveal">
                <div className="eyebrow">What is a Clinical Trial?</div>
                <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.7rem,2.8vw,2.2rem)', color: 'var(--orange-deep)', lineHeight: 1.2, marginTop: '14px' }}>A new treatment — before it's widely available</h2>
                <p style={{ marginTop: '18px', color: 'var(--ink-soft)' }}>Clinical trials are carefully designed research studies that test whether new medical treatments — drugs, biologics, combinations, or devices — are safe and effective for patients. Before a treatment can be approved for general use, it must pass through rigorous clinical testing.</p>
                <p style={{ marginTop: '12px', color: 'var(--ink-soft)' }}>By joining a clinical trial at HNH-CTC, you may gain access to promising new therapies that are not yet available through standard care. You will also contribute to research that helps future patients with the same condition.</p>
                <p style={{ marginTop: '12px', color: 'var(--ink-soft)' }}>Participation is entirely voluntary. You may withdraw from a study at any time, without affecting your right to standard medical care.</p>
              </div>
              <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div className="svc" style={{ gap: '10px' }}>
                  <div style={{ fontSize: '1.4rem' }}>💊</div>
                  <h3>Access to New Treatments</h3>
                  <p>Some patients in clinical trials access therapies months or years before regulatory approval — especially important for cancers with limited second- or third-line options.</p>
                </div>
                <div className="svc" style={{ gap: '10px' }}>
                  <div style={{ fontSize: '1.4rem' }}>🩺</div>
                  <h3>Close Medical Monitoring</h3>
                  <p>Trial participants receive more frequent clinic visits, blood tests, and scans than in routine care — enabling early detection of any changes.</p>
                </div>
                <div className="svc" style={{ gap: '10px' }}>
                  <div style={{ fontSize: '1.4rem' }}>💸</div>
                  <h3>Study Costs Covered</h3>
                  <p>All study-related procedures, tests, and investigational medication are provided at no cost to participants enrolled in sponsored trials.</p>
                </div>
              </div>
            </div>

            {/* YOUR RIGHTS */}
            <div style={{ marginTop: '72px' }}>
              <div className="sec-head reveal">
                <div className="eyebrow">Your Rights · 您的權利</div>
                <h2>What you are protected by</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
                {[
                  { ic: '📄', h: 'Informed Consent', p: 'You will receive a full written explanation of the study — its purpose, procedures, potential risks, and benefits — before you agree to participate. You may ask questions and take as much time as you need.' },
                  { ic: '🚪', h: 'Right to Withdraw', p: 'You may withdraw from the study at any time, for any reason, without penalty. Withdrawal will not affect the standard medical care you receive from your doctor.' },
                  { ic: '🔒', h: 'Confidentiality', p: 'Your personal identity is kept strictly confidential. Data shared with the sponsor is coded — only the research team at HNH-CTC can link your code to your identity.' },
                  { ic: '⚖️', h: 'IRB Oversight', p: 'Every study is independently reviewed and approved by an Institutional Review Board (IRB) before it begins, and the IRB monitors the trial throughout. Your welfare is their priority.' },
                  { ic: '💬', h: 'Access to Information', p: 'You have the right to receive information about the study results when they become available. You may also ask for information about your own health data collected during the trial.' },
                  { ic: '🏥', h: 'Ongoing Medical Care', p: 'If you experience side effects or adverse events, you will receive prompt medical attention. You will not be asked to remain on a study treatment if your doctor believes it is no longer in your interest.' },
                ].map(({ ic, h, p }) => (
                  <div className="svc reveal" style={{ gap: '10px' }} key={h}>
                    <div style={{ fontSize: '1.4rem' }}>{ic}</div>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT TO EXPECT */}
            <div style={{ marginTop: '72px' }}>
              <div className="sec-head reveal">
                <div className="eyebrow">What to Expect · 參與過程</div>
                <h2>How participation works</h2>
              </div>
              <div style={{ maxWidth: '680px' }} className="reveal">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {[
                    { n: '1', title: 'Initial eligibility discussion', body: 'Contact our team by phone or email. We\'ll ask about your diagnosis, treatment history, and current status to give you a preliminary idea of which studies you may qualify for.', connector: true },
                    { n: '2', title: 'Screening assessment', body: 'A clinic visit with Dr Lau or the study team. Blood tests, imaging review, and a medical history review confirm whether you meet the study\'s inclusion and exclusion criteria. Screening is covered by the study sponsor.', connector: true },
                    { n: '3', title: 'Informed consent', body: 'If eligible, the research team walks you through the informed consent form in detail. You have time to discuss with family and ask any questions before signing. This is never rushed.', connector: true },
                    { n: '4', title: 'Treatment & study visits', body: 'You receive the investigational treatment at our clinic on a schedule defined by the protocol. Our research nurses guide every visit and are available between visits if you have concerns.', connector: true },
                    { n: '5', title: 'Follow-up & close-out', body: 'At the end of the treatment period, the team conducts a follow-up assessment. If the study ends, your care is transitioned back to your treating physician without interruption.', connector: false },
                  ].map(({ n, title, body, connector }) => (
                    <div key={n} style={stepStyle}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--orange)', color: '#fff', fontFamily: "'Fraunces',serif", fontWeight: 600, display: 'grid', placeItems: 'center', flexShrink: 0 }}>{n}</div>
                        {connector && <div style={{ flex: 1, width: '2px', background: 'var(--orange-soft)', margin: '6px 0' }} />}
                      </div>
                      <div style={{ paddingBottom: '28px' }}>
                        <strong style={{ color: 'var(--ink)' }}>{title}</strong>
                        <p style={{ fontSize: '.9rem', color: 'var(--ink-soft)', marginTop: '4px' }}>{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div style={{ marginTop: '72px' }}>
              <div className="sec-head reveal">
                <div className="eyebrow">FAQ · 常見問題</div>
                <h2>Patient frequently asked questions</h2>
              </div>
              <div className="faq reveal">
                {faqs.map((faq, i) => (
                  <div className="faq-item" key={i}>
                    <button
                      className={`faq-q${openFaq === i ? ' open' : ''}`}
                      onClick={() => toggleFaq(i)}
                    >
                      {faq.q}
                      <span className="arrow">+</span>
                    </button>
                    <div className={`faq-a${openFaq === i ? ' open' : ''}`}>{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SPONSORS TAB */}
          <div className={`tab-panel${tab === 'sponsors' ? ' active' : ''}`} id="tab-sponsors">
            <div className="reveal">
              <div className="eyebrow">For Sponsors &amp; CROs · 贊助商及合約研究機構</div>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.7rem,2.8vw,2.2rem)', color: 'var(--orange-deep)', lineHeight: 1.2, marginTop: '14px' }}>Partner with a top-performing Asia site</h2>
              <p style={{ marginTop: '18px', color: 'var(--ink-soft)', maxWidth: '64ch' }}>HNH-CTC has a demonstrated track record of high-speed, high-quality execution in competitive international trials. We are positioned to be a valuable site in your study — particularly for oncology indications in which Asia-Pacific patient access is critical.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', marginTop: '36px' }}>
              {[
                { ic: '📈', h: 'Proven Enrolment Performance', p: 'Top-3 global recruitment ranking in two separate international Phase III trials. 41 patients enrolled in a single HCC study. 0% screen failure in select programmes.' },
                { ic: '⚡', h: 'Fast Site Activation', p: 'Average startup under 3 months from contract signature to FPI. Experienced regulatory coordinator and established IRB relationship accelerate submission timelines.' },
                { ic: '📊', h: 'Data Quality', p: 'Consistently low query rates. Audit-ready Trial Master File maintained throughout. GCP-trained staff with experience in Medidata Rave, Oracle InForm, and REDCap.' },
                { ic: '🌏', h: 'Asia-Pacific Access', p: 'Established patient cohort in hepatology and oncology. HBV prevalence in Hong Kong creates a unique HCC population. Access to Greater Bay Area patients for select protocols.' },
                { ic: '🏥', h: 'Full On-Site Infrastructure', p: 'ECG, echo, Holter, ultrasound, IV infusion, endoscopy, −80°C biobanking, and centrifuge on-site — minimising patient burden and logistical complexity.' },
                { ic: '🤝', h: 'Investigator Expertise', p: 'Dr George Lau is a globally recognised PI with over 300 publications. His reputation and referral network are a recruitment asset no CRO can replicate.' },
              ].map(({ ic, h, p }) => (
                <div className="svc reveal" style={{ gap: '12px' }} key={h}>
                  <div style={{ fontSize: '1.5rem' }}>{ic}</div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '56px', background: 'var(--orange-soft)', borderRadius: 'var(--radius)', padding: '36px 40px' }} className="reveal">
              <div className="eyebrow">To partner with us</div>
              <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: '1.3rem', color: 'var(--orange-deep)', marginTop: '10px', marginBottom: '14px' }}>Request a feasibility assessment</h3>
              <p style={{ color: 'var(--ink-soft)', maxWidth: '60ch' }}>Send your protocol synopsis or full protocol to <a href="mailto:hnhctc@hnhmgl.com" style={{ color: 'var(--orange)', fontWeight: 600 }}>hnhctc@hnhmgl.com</a>. We will provide a written feasibility response within 5 business days including estimated screen failure rate, projected monthly enrolment, and a realistic site activation timeline.</p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '24px' }}>
                <Link className="btn" to="/clinical-research/contact">Submit a Feasibility Request</Link>
                <Link className="btn ghost" to="/clinical-research/services">View Our Capabilities</Link>
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
            <h2>Currently open studies</h2>
            <p>We are currently enrolling patients into the following studies. If you think you may be eligible, <Link to="/clinical-research/contact" style={{ color: 'var(--orange)', fontWeight: 600 }}>contact our team</Link> for a confidential eligibility discussion — there is no obligation.</p>
          </div>

          <div className="study-elig reveal" id="nsclc">
            <h3>KRAS G12C-Mutant Non-Small Cell Lung Cancer</h3>
            <div className="meta">
              <span>📋 Phase III</span>
              <span style={{ color: 'var(--cinnabar)' }}>🫁 Thoracic Oncology</span>
              <span className="recruit-dot">Currently Recruiting</span>
            </div>
            <p style={{ fontSize: '.93rem', color: 'var(--ink-soft)' }}>A randomised study evaluating a targeted oral KRAS G12C inhibitor in patients with advanced or metastatic NSCLC with a confirmed KRAS G12C mutation following platinum-based chemotherapy. KRAS G12C occurs in approximately 13% of NSCLC patients and has historically lacked approved targeted therapies.</p>
            <div className="elig-cols">
              <div className="elig-group incl">
                <h4>Key Inclusion Criteria</h4>
                <ul>
                  <li>Histologically confirmed advanced or metastatic NSCLC</li>
                  <li>KRAS G12C mutation confirmed by local testing</li>
                  <li>ECOG performance status 0 or 1</li>
                  <li>Received ≥1 prior line of platinum-based chemotherapy</li>
                  <li>Age ≥18 years</li>
                </ul>
              </div>
              <div className="elig-group excl">
                <h4>Key Exclusion Criteria</h4>
                <ul>
                  <li>Prior KRAS G12C inhibitor therapy</li>
                  <li>Untreated or symptomatic CNS metastases</li>
                  <li>Active autoimmune disease requiring systemic treatment</li>
                  <li>Significant hepatic impairment (Child-Pugh B/C)</li>
                </ul>
              </div>
            </div>
            <Link className="btn sm" to="/clinical-research/contact" style={{ marginTop: '20px', display: 'inline-block' }}>Discuss eligibility →</Link>
          </div>

          <div className="study-elig reveal" id="hcc">
            <h3>Unresectable Metastatic Hepatocellular Carcinoma (First-line)</h3>
            <div className="meta">
              <span>📋 Phase III</span>
              <span style={{ color: 'var(--cinnabar)' }}>🫀 Hepatology / HCC</span>
              <span className="recruit-dot">Currently Recruiting</span>
            </div>
            <p style={{ fontSize: '.93rem', color: 'var(--ink-soft)' }}>An investigational systemic therapy regimen for patients with unresectable or metastatic HCC who have not received prior systemic treatment. Building on HNH-CTC's extensive experience with the HIMALAYA trial, this study targets first-line HCC — where improvements in overall survival remain urgently needed.</p>
            <div className="elig-cols">
              <div className="elig-group incl">
                <h4>Key Inclusion Criteria</h4>
                <ul>
                  <li>Histologically or radiologically confirmed unresectable or metastatic HCC</li>
                  <li>No prior systemic therapy for HCC</li>
                  <li>Child-Pugh A liver function</li>
                  <li>ECOG performance status 0 or 1</li>
                  <li>Adequate haematological, renal, and hepatic function</li>
                </ul>
              </div>
              <div className="elig-group excl">
                <h4>Key Exclusion Criteria</h4>
                <ul>
                  <li>Prior systemic HCC therapy (including sorafenib)</li>
                  <li>Active HBV with HBV DNA &gt;500 IU/mL (unless on antiviral therapy)</li>
                  <li>Liver transplant history</li>
                  <li>Active autoimmune disease requiring immunosuppression</li>
                </ul>
              </div>
            </div>
            <Link className="btn sm" to="/clinical-research/contact" style={{ marginTop: '20px', display: 'inline-block' }}>Discuss eligibility →</Link>
          </div>

          <div className="study-elig reveal" id="crc">
            <h3>Treatment-Experienced Microsatellite Stable Colorectal Cancer (MSS CRC)</h3>
            <div className="meta">
              <span>📋 Phase II/III</span>
              <span style={{ color: 'var(--cinnabar)' }}>🔬 GI Oncology</span>
              <span className="recruit-dot">Currently Recruiting</span>
            </div>
            <p style={{ fontSize: '.93rem', color: 'var(--ink-soft)' }}>MSS colorectal cancer — which accounts for ~95% of all CRC — does not respond to immunotherapy alone, representing a major unmet need. This study investigates a novel combination strategy for patients who have progressed on standard first- and second-line chemotherapy.</p>
            <div className="elig-cols">
              <div className="elig-group incl">
                <h4>Key Inclusion Criteria</h4>
                <ul>
                  <li>Confirmed MSS (non-MSI-H) colorectal adenocarcinoma</li>
                  <li>Received ≥2 prior lines of chemotherapy (oxaliplatin and irinotecan-based)</li>
                  <li>ECOG performance status 0–1</li>
                  <li>Measurable disease per RECIST 1.1</li>
                </ul>
              </div>
              <div className="elig-group excl">
                <h4>Key Exclusion Criteria</h4>
                <ul>
                  <li>MSI-H or dMMR tumour status</li>
                  <li>Prior treatment with any anti-PD-1 / anti-PD-L1 antibody</li>
                  <li>Untreated brain metastases</li>
                  <li>Significant GI bleeding within 6 months</li>
                </ul>
              </div>
            </div>
            <Link className="btn sm" to="/clinical-research/contact" style={{ marginTop: '20px', display: 'inline-block' }}>Discuss eligibility →</Link>
          </div>

          <div className="study-elig reveal" id="breast">
            <h3>ER+ / HER2− Locally Advanced or Metastatic Breast Cancer</h3>
            <div className="meta">
              <span>📋 Phase II/III</span>
              <span style={{ color: 'var(--cinnabar)' }}>🎗️ Breast Oncology</span>
              <span className="recruit-dot">Currently Recruiting</span>
            </div>
            <p style={{ fontSize: '.93rem', color: 'var(--ink-soft)' }}>Evaluating a next-generation endocrine agent — a complete estrogen receptor antagonist (CERAN) — in patients with ER+/HER2− metastatic breast cancer who have progressed on at least one prior endocrine therapy. This class of agent may overcome acquired resistance to CDK4/6 inhibitors and SERDs.</p>
            <div className="elig-cols">
              <div className="elig-group incl">
                <h4>Key Inclusion Criteria</h4>
                <ul>
                  <li>ER+/HER2− locally advanced or metastatic breast cancer (female or male)</li>
                  <li>Progressed on ≥1 prior endocrine therapy ± CDK4/6 inhibitor</li>
                  <li>Post-menopausal or receiving ovarian suppression</li>
                  <li>ECOG PS 0–1; measurable or bone-only disease</li>
                </ul>
              </div>
              <div className="elig-group excl">
                <h4>Key Exclusion Criteria</h4>
                <ul>
                  <li>HER2-positive or triple-negative breast cancer</li>
                  <li>&gt;2 prior lines of chemotherapy for metastatic disease</li>
                  <li>Active or symptomatic visceral crisis requiring chemotherapy</li>
                  <li>Untreated CNS metastases</li>
                </ul>
              </div>
            </div>
            <Link className="btn sm" to="/clinical-research/contact" style={{ marginTop: '20px', display: 'inline-block' }}>Discuss eligibility →</Link>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg,#0D1F2D,#1A3547)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: '#E0731D' }}>Get in touch</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.7rem,3vw,2.4rem)', fontWeight: 500, color: '#fff', margin: '14px 0 12px' }}>Think you may be eligible?</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '50ch', margin: '0 auto 28px' }}>Contact us for a no-obligation, confidential discussion about current studies and whether any may be right for you.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/clinical-research/contact" style={{ background: 'var(--orange)' }}>Contact the Centre</Link>
            <a className="btn ghost" href="tel:+85221169283" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.45)' }}>+852 2116 9283</a>
          </div>
        </div>
      </section>

    </main>
  );
}
