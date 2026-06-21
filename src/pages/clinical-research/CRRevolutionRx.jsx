import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';

export default function CRRevolutionRx() {
  useReveal();
  return (
    <main>

      {/* PAGE HERO */}
      <div className="ctc-page-hero">
        <div className="wrap">
          <div className="breadcrumb" style={{ color: 'rgba(255,255,255,.5)' }}>
            <Link to="/clinical-research">Home</Link>
            <span className="sep">/</span>
            <span>RevolutionRx</span>
          </div>
          <div className="eyebrow">RevolutionRx · 醫學教育</div>
          <h1>Clinical education on<br />emerging treatments</h1>
          <p className="lead">RevolutionRx is HNH-CTC's medical education resource — evidence-based summaries on breakthrough therapies and practice-changing research across oncology and hepatology.</p>
        </div>
      </div>

      {/* TOPIC CARDS */}
      <section style={{ padding: '72px 0' }}>
        <div className="wrap">
          <div className="rx-grid">
            <a className="rx-card reveal" href="#himalaya">
              <div className="ic">🏔️</div>
              <div className="tag">HCC · Immunotherapy</div>
              <h3>HIMALAYA Trial — STRIDE in Unresectable HCC</h3>
              <p>Tremelimumab plus durvalumab vs. sorafenib. Asian subgroup outcomes and real-world implications.</p>
              <span className="go">Read summary →</span>
            </a>
            <a className="rx-card reveal" href="#kras">
              <div className="ic">🎯</div>
              <div className="tag">NSCLC · Targeted Therapy</div>
              <h3>KRAS G12C Inhibitors in Lung Cancer</h3>
              <p>Sotorasib, adagrasib, and next-generation KRAS inhibitors — mechanism, efficacy data, and resistance.</p>
              <span className="go">Read summary →</span>
            </a>
            <a className="rx-card reveal" href="#breast">
              <div className="ic">🎗️</div>
              <div className="tag">Breast Cancer · Endocrinology</div>
              <h3>Next-Generation Endocrine Therapy for ER+ MBC</h3>
              <p>Complete ER antagonists (CERANs / oral SERDs) and overcoming CDK4/6 inhibitor resistance.</p>
              <span className="go">Read summary →</span>
            </a>
            <a className="rx-card reveal" href="#mss-crc">
              <div className="ic">🔬</div>
              <div className="tag">CRC · Immunotherapy</div>
              <h3>Cracking the MSS CRC Immunotherapy Problem</h3>
              <p>Why MSS colorectal cancer resists checkpoint blockade and emerging combination strategies that may change this.</p>
              <span className="go">Read summary →</span>
            </a>
            <a className="rx-card reveal" href="#hcc-io">
              <div className="ic">🛡️</div>
              <div className="tag">HCC · Immune Checkpoint</div>
              <h3>Immune Checkpoint Therapy for HCC — 2025 and Beyond</h3>
              <p>The evolving treatment landscape for hepatocellular carcinoma following HIMALAYA, IMbrave150, and TOPAZ-1.</p>
              <span className="go">Read summary →</span>
            </a>
            <a className="rx-card reveal" href="#gist">
              <div className="ic">⚕️</div>
              <div className="tag">GIST · Targeted Therapy</div>
              <h3>Treatment of GIST — Beyond Imatinib</h3>
              <p>Fourth-line options, ripretinib, avapritinib for PDGFRA D842V, and the role of liquid biopsy in GIST management.</p>
              <span className="go">Read summary →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="alt" style={{ paddingTop: '72px', paddingBottom: '96px' }}>
        <div className="wrap">

          {/* HIMALAYA */}
          <div className="rx-article reveal" id="himalaya">
            <span className="tag">HCC · Phase III · Immunotherapy</span>
            <h2>HIMALAYA Trial — The STRIDE Regimen in Unresectable Hepatocellular Carcinoma</h2>
            <p>The HIMALAYA trial (NCT03298451) was a landmark randomised Phase III study comparing three immunotherapy strategies against sorafenib in patients with unresectable, systemic therapy-naïve hepatocellular carcinoma (HCC). HNH-CTC was a core investigator site, enrolling 41 patients and ranking in the top 3 globally for recruitment.</p>
            <h3>The STRIDE Regimen</h3>
            <p>STRIDE stands for <strong>Single Tremelimumab Regular Interval Durvalumab</strong>: a single priming dose of tremelimumab 300 mg (an anti-CTLA-4 antibody) combined with durvalumab 1500 mg (anti-PD-L1), followed by durvalumab monotherapy every 4 weeks. The rationale is that a single high-dose CTLA-4 blockade primes the immune response while minimising the toxicity associated with ongoing dual checkpoint inhibition.</p>
            <div className="data-box">
              <div className="data-row">
                <div className="datum"><span className="num">16.4 mo</span><div className="lbl">Median OS — STRIDE</div></div>
                <div className="datum"><span className="num">13.8 mo</span><div className="lbl">Median OS — Sorafenib</div></div>
                <div className="datum"><span className="num">0.78</span><div className="lbl">Hazard Ratio (OS)</div></div>
                <div className="datum"><span className="num">31%</span><div className="lbl">3-year OS rate (STRIDE vs. 20% sorafenib)</div></div>
              </div>
            </div>
            <h3>Asian Subgroup — HNH-CTC Publication</h3>
            <p>An accepted manuscript in the <em>Journal of Hepatology</em> (Impact Factor 26.8) reports outcomes specifically in the Asian patient subgroup of HIMALAYA. This analysis is clinically important because HCC in Asia is predominantly HBV-associated and occurs in a younger population than in Western cohorts, and Asian patients may have distinct immunobiological profiles affecting response to checkpoint blockade.</p>
            <p>Dr George Lau, as a core HIMALAYA investigator and lead author on the Asian subgroup analysis, presented related data at the 2025 APASL Single Topic Conference in Qingdao, China — "Immune Checkpoint Therapy for Hepatocellular Carcinoma: 2025 and Beyond."</p>
            <h3>Practical Implications</h3>
            <ul>
              <li>STRIDE (tremelimumab + durvalumab) is now an approved first-line option for unresectable HCC alongside atezolizumab + bevacizumab (IMbrave150) and sintilimab + bevacizumab biosimilar</li>
              <li>The single-dose CTLA-4 priming approach offers a more tolerable alternative to ongoing ipilimumab-based regimens</li>
              <li>Patients with active HBV should receive antiviral prophylaxis prior to immunotherapy — established practice at HNH-CTC</li>
              <li>Child-Pugh A liver function is required; patients with ascites or encephalopathy generally do not qualify</li>
            </ul>
            <div className="note">HNH-CTC is currently enrolling a first-line HCC study. <Link to="/clinical-research/participation#hcc">See eligibility criteria →</Link></div>
          </div>

          {/* KRAS G12C */}
          <div className="rx-article reveal" id="kras">
            <span className="tag">NSCLC · Targeted Therapy · KRAS</span>
            <h2>KRAS G12C Inhibitors in Non-Small Cell Lung Cancer</h2>
            <p>KRAS is the most frequently mutated oncogene in human cancer, yet for decades was considered "undruggable." The development of covalent KRAS G12C inhibitors — which exploit the unique cysteine residue created by the G12C mutation — has fundamentally changed the treatment landscape for a major subset of NSCLC patients.</p>
            <h3>The KRAS G12C Mutation</h3>
            <p>KRAS G12C occurs in approximately 13% of NSCLC patients (predominantly adenocarcinoma), 3–4% of colorectal cancers, and 2% of other solid tumours. The mutation locks KRAS in an active GTP-bound state, driving uncontrolled cell proliferation. KRAS G12C inhibitors bind covalently to the mutant cysteine residue in the GDP-bound (inactive) state, locking the protein off.</p>
            <h3>Key Agents</h3>
            <ul>
              <li><strong>Sotorasib (Lumakras):</strong> First approved KRAS G12C inhibitor. CodeBreaK 200 Phase III trial showed improved PFS vs. docetaxel (5.6 vs. 4.5 months) in 2L+ NSCLC.</li>
              <li><strong>Adagrasib (Krazati):</strong> KRYSTAL-1 Phase II/III data showed ORR ~43% in 2L NSCLC, with CNS activity in patients with brain metastases.</li>
              <li><strong>Next-generation inhibitors:</strong> Divarasib, olomorasib, and others in development show improved potency and activity against the dominant acquired resistance mechanism (KRAS Y96D mutation).</li>
            </ul>
            <h3>Resistance Mechanisms</h3>
            <p>Primary and acquired resistance to KRAS G12C inhibitors is heterogeneous and includes:</p>
            <ul>
              <li>On-target mutations (KRAS Y96D, R68S, H95D/Q/R)</li>
              <li>Bypass resistance via RTK amplification (EGFR, MET, FGFR), RAS/RAF pathway activation (NF1 loss, BRAF V600E)</li>
              <li>Histological transformation to small cell lung cancer</li>
            </ul>
            <p>Combination strategies pairing KRAS G12C inhibitors with SHP2 inhibitors, mTOR inhibitors, or immunotherapy are under active investigation and represent the rationale for current Phase III combination trials — including studies actively recruiting at HNH-CTC.</p>
            <div className="note">HNH-CTC is enrolling a Phase III KRAS G12C NSCLC study. <Link to="/clinical-research/participation#nsclc">See eligibility criteria →</Link></div>
          </div>

          {/* Breast */}
          <div className="rx-article reveal" id="breast">
            <span className="tag">Breast Cancer · Endocrine Therapy · ER+/HER2−</span>
            <h2>Next-Generation Endocrine Therapy for ER+ Metastatic Breast Cancer</h2>
            <p>Hormone receptor-positive (HR+), HER2-negative breast cancer is the most common subtype of metastatic breast cancer. While CDK4/6 inhibitors combined with aromatase inhibitors transformed first-line treatment outcomes, the majority of patients eventually progress — and subsequent endocrine options have historically been limited.</p>
            <h3>The Problem with Traditional SERDs</h3>
            <p>Fulvestrant, an injectable selective estrogen receptor degrader (SERD), is widely used post-CDK4/6 inhibitor progression but has limited bioavailability due to its mandatory IM administration. Acquired ESR1 mutations — present in up to 40% of patients after aromatase inhibitor exposure — confer resistance to traditional SERDs and aromatase inhibitors.</p>
            <h3>Complete Estrogen Receptor Antagonists (CERANs / Oral SERDs)</h3>
            <p>A new class of oral agents — including OP-1250 (palazestrant), camizestrant, imlunestrant, and others — combine SERD activity with complete ER antagonism (CERAN mechanism), blocking ER transcriptional activity even without degradation. Key features:</p>
            <ul>
              <li>Oral bioavailability, unlike fulvestrant</li>
              <li>Activity against ESR1-mutant tumours</li>
              <li>Potential to combine with CDK4/6 inhibitors, PI3K/AKT inhibitors, and antibody-drug conjugates</li>
            </ul>
            <div className="data-box">
              <div className="data-row">
                <div className="datum"><span className="num">~40%</span><div className="lbl">ESR1 mutation rate post-AI therapy</div></div>
                <div className="datum"><span className="num">1st</span><div className="lbl">Oral SERD class — new standard candidate</div></div>
                <div className="datum"><span className="num">HR+/HER2−</span><div className="lbl">Most common MBC subtype (~70%)</div></div>
              </div>
            </div>
            <h3>Combination Strategies</h3>
            <p>The field is moving towards combining oral SERDs/CERANs with PI3K pathway inhibitors (alpelisib for PIK3CA-mutant, capivasertib AKT inhibitor), and with antibody-drug conjugates (sacituzumab govitecan, trastuzumab deruxtecan for HER2-low). Understanding the sequence and combination potential of these agents is the central question of current Phase III trials.</p>
            <div className="note">HNH-CTC is enrolling an ER+/HER2− MBC study. <Link to="/clinical-research/participation#breast">See eligibility criteria →</Link></div>
          </div>

          {/* MSS CRC */}
          <div className="rx-article reveal" id="mss-crc">
            <span className="tag">Colorectal Cancer · Immunotherapy · MSS</span>
            <h2>Cracking the MSS Colorectal Cancer Immunotherapy Problem</h2>
            <p>Immunotherapy with checkpoint inhibitors has transformed the management of MSI-H (microsatellite instability-high) colorectal cancer — pembrolizumab is now standard first-line in MSI-H/dMMR CRC. However, MSS (microsatellite stable) CRC accounts for approximately 95% of all colorectal cancers, and these tumours are characteristically resistant to immunotherapy monotherapy.</p>
            <h3>Why MSS CRC Resists Immunotherapy</h3>
            <p>MSS tumours have a relatively low tumour mutational burden (TMB), producing fewer neoantigens. They also have an immunosuppressive tumour microenvironment characterised by:</p>
            <ul>
              <li>Reduced T-cell infiltration ("cold" tumours)</li>
              <li>High levels of immunosuppressive cells (MDSCs, regulatory T-cells)</li>
              <li>Upregulation of alternative immune evasion mechanisms (TGF-β, VEGF, WNT)</li>
              <li>Lack of IFN-γ signalling that drives PD-L1 upregulation</li>
            </ul>
            <h3>Strategies Under Investigation</h3>
            <ul>
              <li><strong>Anti-VEGF + checkpoint inhibition:</strong> Bevacizumab may normalise tumour vasculature and promote immune infiltration, potentially sensitising MSS tumours to PD-1 blockade</li>
              <li><strong>MEK inhibition + PD-1/PD-L1:</strong> MEK inhibitors may increase tumour antigen presentation and MHC-I expression</li>
              <li><strong>TGF-β + PD-L1 dual blockade:</strong> Bintrafusp alfa and similar bifunctional agents targeting both the immunosuppressive TGF-β pathway and PD-L1</li>
              <li><strong>CAR-T and bispecific T-cell engagers:</strong> CEA-directed and GUCY2C-directed approaches in development</li>
              <li><strong>Oncolytic viruses:</strong> Intratumoural viral injection to trigger immunogenic cell death and systemic immune activation</li>
            </ul>
            <div className="note">HNH-CTC is enrolling a novel combination therapy study in treatment-experienced MSS CRC. <Link to="/clinical-research/participation#crc">See eligibility criteria →</Link></div>
          </div>

          {/* HCC IO landscape */}
          <div className="rx-article reveal" id="hcc-io">
            <span className="tag">HCC · Immunotherapy · 2025 Landscape</span>
            <h2>Immune Checkpoint Therapy for HCC — 2025 and Beyond</h2>
            <p>The treatment landscape for hepatocellular carcinoma has undergone a revolution over the past five years, driven by the convergence of anti-PD-1/PD-L1 and anti-VEGF strategies that together overcome the immune exclusion characteristic of HCC. Dr George Lau presented on this topic at the 2025 APASL Single Topic Conference in Qingdao.</p>
            <h3>Current Approved First-Line Regimens</h3>
            <ul>
              <li><strong>Atezolizumab + bevacizumab (IMbrave150):</strong> The first IO-based regimen to beat sorafenib. mOS 19.2 months vs. 13.4 months for sorafenib. Now the global standard.</li>
              <li><strong>Tremelimumab + durvalumab (HIMALAYA/STRIDE):</strong> mOS 16.4 months. Chemotherapy-free, CTLA-4 + PD-L1 dual checkpoint. The only approved dual IO regimen.</li>
              <li><strong>Sintilimab + bevacizumab biosimilar (ORIENT-32):</strong> Approved in China. mOS 22.5 months in predominantly HBV-associated HCC.</li>
            </ul>
            <h3>Open Questions for 2025 and Beyond</h3>
            <ul>
              <li><strong>Sequencing after first-line IO:</strong> What is the optimal second-line after atezolizumab + bevacizumab or STRIDE? Cabozantinib, ramucirumab (AFP ≥400), and regorafenib are options, but IO re-challenge data is limited.</li>
              <li><strong>Biomarkers of response:</strong> PD-L1 expression, TMB, and gut microbiome composition are being studied. The HBV-positive Asian patient may have a distinct immune phenotype.</li>
              <li><strong>TACE + IO combination:</strong> Multiple Phase III trials (EMERALD-1, LEAP-012) are examining IO combination with TACE for intermediate-stage HCC not eligible for systemic therapy — results anticipated 2025–2026.</li>
              <li><strong>Neoadjuvant and adjuvant IO:</strong> Pembrolizumab is under Phase III evaluation in the adjuvant setting post-resection (KEYNOTE-937). Neoadjuvant downstaging approaches are also being explored.</li>
            </ul>
            <div className="note">To discuss current HCC trial options at HNH-CTC, <Link to="/clinical-research/contact">contact our team</Link> or email <a href="mailto:hnhctc@hnhmgl.com">hnhctc@hnhmgl.com</a>.</div>
          </div>

          {/* GIST */}
          <div className="rx-article reveal" id="gist">
            <span className="tag">GIST · Targeted Therapy · Tyrosine Kinase Inhibitors</span>
            <h2>Treatment of GIST — Beyond Imatinib</h2>
            <p>Gastrointestinal stromal tumours (GISTs) are the most common mesenchymal tumours of the GI tract, driven predominantly by activating mutations in KIT (80%) or PDGFRA (10%). The introduction of imatinib transformed GIST from a uniformly fatal disease into a manageable chronic condition — but resistance inevitably develops, and the treatment ladder beyond first-line is complex.</p>
            <h3>The GIST Treatment Sequence</h3>
            <ul>
              <li><strong>1st line — Imatinib 400 mg:</strong> Standard for most KIT/PDGFRA-mutant GISTs. Median PFS ~18–24 months. Patients with PDGFRA D842V mutation are imatinib-resistant.</li>
              <li><strong>2nd line — Sunitinib:</strong> Following imatinib failure. Active against secondary KIT exon 13/14 mutations. Median PFS ~6 months.</li>
              <li><strong>3rd line — Regorafenib:</strong> Multikinase inhibitor. GRID trial showed PFS 4.8 months vs. 0.9 months for placebo. Tolerability requires careful dose management.</li>
              <li><strong>4th line — Ripretinib (Qinlock):</strong> A switch-control KIT/PDGFRA inhibitor that simultaneously blocks the switch pocket and activation loop, preventing conformational activation. INVICTUS trial: PFS 6.3 months vs. 1.0 months (placebo).</li>
            </ul>
            <h3>Avapritinib for PDGFRA D842V GIST</h3>
            <p>PDGFRA D842V mutation — found in ~6% of GISTs — confers resistance to imatinib, sunitinib, and regorafenib. Avapritinib (Ayvakit) is specifically designed to inhibit PDGFRA D842V and has achieved unprecedented response rates (ORR ~84–91%) in this previously refractory population in the NAVIGATOR trial. It is now the preferred first-line agent for PDGFRA D842V GIST.</p>
            <h3>Liquid Biopsy in GIST</h3>
            <p>Circulating tumour DNA (ctDNA) from plasma "liquid biopsies" can identify secondary KIT mutations responsible for acquired resistance before radiological progression becomes apparent. This allows earlier therapeutic switching. ctDNA-guided treatment sequencing in GIST is an active area of research and may help guide optimal use of the expanding treatment arsenal.</p>
            <div className="note">For discussion of GIST treatment options or trial eligibility, <Link to="/clinical-research/contact">contact our team</Link> for a consultation with Dr George Lau or Dr Richard Choi.</div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg,#0D1F2D,#1A3547)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: '#E0731D' }}>Discuss your case</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.7rem,3vw,2.4rem)', fontWeight: 500, color: '#fff', margin: '14px 0 12px' }}>Interested in any of these treatments?</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '52ch', margin: '0 auto 28px' }}>Our team can discuss whether any ongoing clinical trials or established treatments may be appropriate for you or your patient.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/clinical-research/participation" style={{ background: 'var(--orange)' }}>Current Recruiting Studies</Link>
            <Link className="btn ghost" to="/clinical-research/contact" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.45)' }}>Contact the Centre</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
