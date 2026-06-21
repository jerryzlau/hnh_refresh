import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { imgFb } from '../utils';
import PageHero from '../components/PageHero';

export default function Services() {
  useReveal();
  return (
    <main>
      <PageHero
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        eyebrow="Centre Services · 中心服務"
        title="Specialist services for the liver,<br>digestive system and beyond"
        lead="From hepatology and gastroenterology to surgery and oncology, our team of specialists offers precise, personalised care across a full range of conditions."
      />

      {/* LIVER HEALTH */}
      <section id="liver-health">
        <div className="wrap">
          <div className="cat-label reveal">Liver Health · 肝臟健康</div>
          <div className="svc-grid">

            <div className="svc expanded reveal" id="hepb">
              <img src="/assets/svc-hepb.jpg" data-cdn="https://static.wixstatic.com/media/11062b_d74a331a352b46dea8e1687d01ab8a78~mv2.jpeg/v1/crop/x_1120,y_0,w_4480,h_4480/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E9%86%AB%E7%99%82%E9%9A%8A.jpeg" onError={e => imgFb(e.currentTarget)} alt="Medical team" loading="lazy" />
              <h3>Hepatitis B Evaluation &amp; Treatment</h3>
              <p>Nearly one in ten adults in Hong Kong carry the hepatitis B virus (HBV). Transmitted through blood, body fluids, and mother-to-child contact, most carriers are asymptomatic for years while the virus silently damages the liver. Without management, HBV can progress to cirrhosis or liver cancer. Our comprehensive programme includes:</p>
              <ul>
                <li>HBsAg, anti-HBs and HBeAg serology</li>
                <li>HBV DNA viral load quantification</li>
                <li>Liver function tests (ALT, AST, bilirubin)</li>
                <li>Abdominal ultrasound and liver assessment</li>
                <li>Fibroscan (transient elastography) for fibrosis staging</li>
                <li>Antiviral therapy: tenofovir (TDF) or entecavir (ETV)</li>
                <li>Hepatitis B vaccination for non-immune individuals</li>
              </ul>
              <Link className="more" to="/contact">Book a consultation →</Link>
            </div>

            <div className="svc expanded reveal" id="hepc">
              <img src="/assets/svc-hepc.jpg" data-cdn="https://static.wixstatic.com/media/ea997dc9475841f2a7709e8098764f30.jpg/v1/crop/x_128,y_0,w_2671,h_2671/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E5%8F%8B%E5%A5%BD%E5%B9%B4%E8%BC%95%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Friendly young doctor" loading="lazy" />
              <h3>Hepatitis C Evaluation &amp; Treatment</h3>
              <p>HCV has six major genotypes, all capable of causing acute or chronic hepatitis leading to cirrhosis and liver cancer. Patients rarely notice symptoms until damage is advanced, making regular screening essential. Modern direct-acting antiviral (DAA) regimens now achieve cure rates above 95% in 8–12 weeks. We offer:</p>
              <ul>
                <li>HCV antibody and PCR RNA testing</li>
                <li>Genotype determination to guide therapy</li>
                <li>Non-invasive liver fibrosis assessment</li>
                <li>DAA treatment regimens (sofosbuvir-based combinations)</li>
                <li>Post-treatment surveillance and follow-up</li>
              </ul>
              <Link className="more" to="/contact">Book a consultation →</Link>
            </div>

            <div className="svc expanded reveal" id="fibrosis">
              <img src="/assets/svc-fibrosis.jpg" data-cdn="https://static.wixstatic.com/media/11062b_aa6818fb704a4824a6607192ae95da67~mv2.jpeg/v1/crop/x_1000,y_0,w_4000,h_4000/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E9%86%AB%E7%94%9F%E5%92%8C%E7%97%85%E4%BA%BA.jpeg" onError={e => imgFb(e.currentTarget)} alt="Doctor with patient" loading="lazy" />
              <h3>Liver Fibrosis Assessment &amp; Treatment</h3>
              <p>Repeated liver inflammation replaces healthy liver cells with fibrous scar tissue. Left untreated, fibrosis progresses to cirrhosis — dramatically increasing the risk of liver failure and cancer. We offer both non-invasive and traditional approaches to staging and treating fibrosis:</p>
              <ul>
                <li>Fibroscan (transient elastography) — painless, accurate staging</li>
                <li>Blood-based indices: FIB-4, APRI, liver function panel</li>
                <li>Liver biopsy when indicated</li>
                <li>Treatment of underlying cause (antiviral therapy, lifestyle changes)</li>
                <li>Regular monitoring to track progression or regression</li>
              </ul>
              <Link className="more" to="/contact">Book a consultation →</Link>
            </div>

            <div className="svc expanded reveal" id="liver-cancer">
              <img src="/assets/svc-cancer.jpg" data-cdn="https://static.wixstatic.com/media/11062b_2670f3edbdaf4e3386e49f3274bb96e3~mv2.jpg/v1/crop/x_690,y_0,w_3570,h_3570/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%94%AF%E6%8C%81%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Supporting doctors" loading="lazy" />
              <h3>Liver Cancer Screening &amp; Treatment</h3>
              <p>Liver cancer (hepatocellular carcinoma) is the 5th most common cancer in Hong Kong, and typically shows no early symptoms. High-risk individuals — including HBV and HCV carriers, and those with cirrhosis — should undergo regular screening every 6–9 months. Our programme includes:</p>
              <ul>
                <li>Alpha-fetoprotein (AFP) blood test</li>
                <li>Abdominal ultrasound scan</li>
                <li>CT or MRI for suspicious lesions</li>
                <li>Tumour staging and multidisciplinary treatment planning</li>
                <li>Coordination with surgical and oncology teams</li>
              </ul>
              <Link className="more" to="/contact">Book a consultation →</Link>
            </div>

            <div className="svc expanded reveal" id="fatty-liver">
              <img src="/assets/svc-consult.jpg" data-cdn="https://static.wixstatic.com/media/11062b_4db9398f08b34877b8d7735d43d4957b~mv2.jpg/v1/crop/x_834,y_0,w_3333,h_3333/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E7%B6%B2%E4%B8%8A%E9%86%AB%E7%99%82%E9%A1%A7%E5%95%8F.jpg" onError={e => imgFb(e.currentTarget)} alt="Medical consultant" loading="lazy" />
              <h3>Fatty Liver Disease Assessment &amp; Treatment</h3>
              <p>Non-alcoholic fatty liver disease (NAFLD) affects an estimated 30% of adults, closely linked to obesity, type 2 diabetes, and high cholesterol. Without intervention, NAFLD can progress from simple fat accumulation to steatohepatitis (NASH), fibrosis, and cirrhosis. Early detection and treatment is key:</p>
              <ul>
                <li>Liver function tests and metabolic panel</li>
                <li>Abdominal ultrasound to assess fat deposition</li>
                <li>Fibroscan to evaluate fibrosis stage</li>
                <li>Dietary counselling and exercise prescription</li>
                <li>Management of metabolic risk factors (diabetes, dyslipidaemia)</li>
              </ul>
              <Link className="more" to="/contact">Book a consultation →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* GASTROENTEROLOGY */}
      <section className="alt" id="gastro">
        <div className="wrap">
          <div className="cat-label reveal">Gastroenterology · 腸胃內科</div>
          <div className="svc-grid">

            <div className="svc expanded reveal" id="gastroscopy">
              <img src="/assets/svc-gastro.jpg" data-cdn="https://static.wixstatic.com/media/11062b_4ebfd43bcda34322a29ca6f1c23eff76~mv2_d_5100_3399_s_4_2.jpg/v1/crop/x_851,y_0,w_3399,h_3399/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%89%8B%E8%A1%93%E5%AE%A4%E7%9A%84%E5%A4%96%E7%A7%91%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Surgeon in operating room" loading="lazy" />
              <h3>Gastroscopy</h3>
              <p>Upper GI endoscopy allows direct visualisation of the oesophagus, stomach, and duodenum through a flexible camera inserted via the mouth. The procedure is conducted using our advanced Olympus HDTV system with NBI narrow-band imaging for enhanced mucosal detail. Indications include:</p>
              <ul>
                <li>Dyspepsia, epigastric pain, or bloating</li>
                <li>Gastro-oesophageal reflux disease (GERD)</li>
                <li>Suspected peptic ulcer disease or upper GI bleeding</li>
                <li>Barrett's oesophagus surveillance</li>
                <li>H. pylori testing and eradication confirmation</li>
              </ul>
              <p>Tissue biopsies, polyp removal, and haemostasis can be performed during the same procedure.</p>
              <Link className="more" to="/contact">Book a consultation →</Link>
            </div>

            <div className="svc expanded reveal" id="colonoscopy">
              <img src="/assets/svc-consult.jpg" data-cdn="https://static.wixstatic.com/media/11062b_4db9398f08b34877b8d7735d43d4957b~mv2.jpg/v1/crop/x_834,y_0,w_3333,h_3333/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E7%B6%B2%E4%B8%8A%E9%86%AB%E7%99%82%E9%A1%A7%E5%95%8F.jpg" onError={e => imgFb(e.currentTarget)} alt="Colonoscopy consultation" loading="lazy" />
              <h3>Colonoscopy</h3>
              <p>Lower GI endoscopy examines the full length of the large intestine — from the sigmoid and descending colon through the transverse and ascending colon to the caecum. Using our high-definition endoscope with NBI technology, our specialists can detect even subtle mucosal changes. Indications include:</p>
              <ul>
                <li>Colorectal cancer screening (recommended from age 50)</li>
                <li>Rectal bleeding or unexplained change in bowel habits</li>
                <li>Inflammatory bowel disease (Crohn's / ulcerative colitis) assessment</li>
                <li>Surveillance following prior polyp removal</li>
                <li>Investigation of anaemia or unexplained weight loss</li>
              </ul>
              <p>Tissue biopsies and polypectomy (polyp removal) can be performed during the examination.</p>
              <Link className="more" to="/contact">Book a consultation →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* SURGICAL SERVICES */}
      <section id="surgery">
        <div className="wrap">
          <div className="cat-label reveal">Surgery · 外科手術</div>
          <div className="svc-grid">

            <div className="svc expanded reveal" id="hemorrhoids">
              <img src="/assets/svc-hemorrhoid.jpg" data-cdn="https://static.wixstatic.com/media/11062b_ebed553b419a414fadd847af8f58f23f~mv2_d_8660_5773_s_4_2.jpg/v1/crop/x_1444,y_0,w_5773,h_5773/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%89%8B%E8%A1%93%E6%9C%9F%E9%96%93%E7%9A%84%E5%A4%96%E7%A7%91%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Surgeon during surgery" loading="lazy" />
              <h3>Hemorrhoid Treatment &amp; Surgery</h3>
              <p>We offer the full spectrum of haemorrhoid treatments, from conservative outpatient procedures to definitive surgical options — tailored to the grade and severity of each patient's condition:</p>
              <ul>
                <li>Rubber band ligation for internal haemorrhoids</li>
                <li>Bipolar diathermy coagulation (BOWA 350) for precise, minimally invasive treatment</li>
                <li>Doppler-guided haemorrhoidal artery ligation with recto-anal repair (HAL-RAR)</li>
                <li>Conventional haemorrhoidectomy</li>
                <li>Stapled haemorrhoidopexy (Procedure for Prolapse and Haemorrhoids)</li>
              </ul>
              <p>Minimally invasive approaches offer shorter recovery times and reduced post-operative discomfort.</p>
              <Link className="more" to="/contact">Book a consultation →</Link>
            </div>

            <div className="svc expanded reveal" id="hernia">
              <img src="/assets/svc-surgery.jpg" data-cdn="https://static.wixstatic.com/media/04b70ad4e4af4a9290c1769bf2b63030.jpg/v1/crop/x_854,y_0,w_3414,h_3414/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%89%8B%E8%A1%93.jpg" onError={e => imgFb(e.currentTarget)} alt="Operation in progress" loading="lazy" />
              <h3>Hernia Repair &amp; Minor Surgery</h3>
              <p>Our surgical team manages a wide range of hernias and minor surgical conditions, with an emphasis on minimally invasive techniques to minimise recovery time:</p>
              <ul>
                <li>Open tension-free mesh repair (Lichtenstein technique) for inguinal hernias</li>
                <li>Laparoscopic (keyhole) hernia repair for faster recovery</li>
                <li>Incisional and ventral hernia repair</li>
                <li>Excision of benign skin and soft tissue tumours</li>
                <li>Wound care and minor outpatient procedures</li>
                <li>Partial organ resection and palliative surgical procedures</li>
              </ul>
              <Link className="more" to="/contact">Book a consultation →</Link>
            </div>

            <div className="svc expanded reveal">
              <img src="/assets/svc-surgery.jpg" data-cdn="https://static.wixstatic.com/media/04b70ad4e4af4a9290c1769bf2b63030.jpg/v1/crop/x_854,y_0,w_3414,h_3414/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%89%8B%E8%A1%93.jpg" onError={e => imgFb(e.currentTarget)} alt="Cardiothoracic surgery" loading="lazy" />
              <h3>Cardiothoracic, Neuro &amp; Oncological Surgery</h3>
              <p>Beyond gastrointestinal surgery, the Centre works with a network of specialist surgeons to manage complex surgical needs across multiple disciplines:</p>
              <ul>
                <li>Cardiothoracic surgical consultations</li>
                <li>Neurosurgery referrals and co-management</li>
                <li>Cancer surgery — tumour removal and resection</li>
                <li>Reconstructive and body-contouring procedures</li>
                <li>Palliative surgical interventions</li>
              </ul>
              <Link className="more" to="/contact">Book a consultation →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="alt" id="equipment">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Centre Equipment · 中心設備</div>
            <h2>Advanced diagnostics, monitored end to end</h2>
            <p>From preparation to examination, every step is strictly supervised by dedicated doctors and nurses, with a staff member assigned to follow up with each patient personally.</p>
          </div>
          <div className="equip">
            <div className="text reveal">
              <h3>One-stop Endoscopy Centre</h3>
              <p>Our centre is equipped with an advanced endoscopic imaging system. Every nurse and technician involved has received specialised professional training, enabling us to provide a complete one-stop endoscopic examination and treatment service without the need for hospital admission.</p>
              <h3>NBI Narrow Band Imaging</h3>
              <p>By filtering out longer-wavelength red light and retaining blue and green wavelengths, NBI technology reveals micro-blood-vessel changes and subtle mucosal colour variations that are invisible under standard white light — enabling earlier and more accurate identification of lesions and early-stage cancer.</p>
              <h3>HDTV High-Definition Image Processing</h3>
              <p>The Endoscopy Centre uses the Olympus CV-290 HDTV image processing system paired with the Olympus GIF Type H260 endoscope. Together they deliver significantly superior image clarity, enabling our specialists to make more accurate diagnoses and perform more precise therapeutic interventions.</p>
              <h3>BOWA 350 Bipolar Diathermy</h3>
              <p>The BOWA 350 electrosurgical system provides precise bipolar coagulation for haemorrhoid treatment and other minimally invasive surgical procedures, with excellent haemostatic control and minimal thermal spread to surrounding tissue.</p>
            </div>
            <div className="gallery reveal">
              <img src="/assets/equip-1.jpg" data-cdn="https://static.wixstatic.com/media/379045_631c5974f8714639ad19277bd2d9c142~mv2.jpg/v1/fill/w_401,h_534,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_E3565_JPG.jpg" onError={e => imgFb(e.currentTarget)} alt="Endoscopy equipment" loading="lazy" />
              <img src="/assets/equip-2.jpg" data-cdn="https://static.wixstatic.com/media/379045_17eb02b8a0064af489d186c6ce2a3cea~mv2.jpg/v1/fill/w_401,h_534,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_E3559_JPG.jpg" onError={e => imgFb(e.currentTarget)} alt="Examination room" loading="lazy" />
              <img src="/assets/equip-3.jpg" data-cdn="https://static.wixstatic.com/media/379045_dab52014742e4534b05ccca11a73b495~mv2.jpg/v1/fill/w_401,h_534,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_E3562_JPG.jpg" onError={e => imgFb(e.currentTarget)} alt="Medical imaging system" loading="lazy" />
              <img src="/assets/equip-4.jpg" data-cdn="https://static.wixstatic.com/media/379045_d8bdaaa528284ff18983b68e38f6fc77~mv2.jpg/v1/fill/w_401,h_534,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_E3563_JPG.jpg" onError={e => imgFb(e.currentTarget)} alt="Centre facilities" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ padding: '72px 0', background: 'var(--orange-deep)', color: '#fff' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: '#FFD0A6', marginBottom: 0 }}>Ready to take the next step?</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.6rem,2.8vw,2.2rem)', fontWeight: 500, margin: '16px 0 12px' }}>Book a consultation with our specialists</h2>
          <p style={{ color: '#F1DDC4', maxWidth: '50ch', margin: '0 auto 28px' }}>Our team is available Monday to Saturday. Call us, WhatsApp, or submit an online appointment request.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/contact" style={{ background: 'var(--cinnabar)' }}>Make an Appointment</Link>
            <a className="btn ghost" href="tel:+85228613777" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>+852 2861 3777</a>
          </div>
        </div>
      </section>

    </main>
  );
}
