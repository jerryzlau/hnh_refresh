import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import PageHero from '../components/PageHero';

export default function HealthEducation() {
  useReveal();
  return (
    <main>
      <PageHero
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Health Education' }]}
        eyebrow="Health Promotion · 健康推廣"
        title="Understanding your health"
        lead="Evidence-based patient education on conditions we treat — from viral hepatitis and liver disease to colorectal cancer screening, vaccination, and more."
      />

      {/* TOPIC CARDS */}
      <section style={{ padding: '72px 0' }}>
        <div className="wrap">
          <div className="edu-grid">
            <a className="edu-card reveal" href="#health-checks">
              <div className="ic">🩺</div>
              <h3>Physical Examination Plans</h3>
              <p>Comprehensive health screening packages designed to detect conditions early, when treatment is most effective.</p>
              <span className="go">Read more →</span>
            </a>
            <a className="edu-card reveal" href="#vaccination">
              <div className="ic">💉</div>
              <h3>Vaccination</h3>
              <p>How vaccines work, COVID-19 and influenza programmes, and what to expect after immunisation.</p>
              <span className="go">Read more →</span>
            </a>
            <a className="edu-card reveal" href="#hepb">
              <div className="ic">🔬</div>
              <h3>Understanding Hepatitis B</h3>
              <p>Prevalence in Hong Kong, how HBV is transmitted, the risk of cirrhosis and liver cancer, and current treatments.</p>
              <span className="go">Read more →</span>
            </a>
            <a className="edu-card reveal" href="#hepc">
              <div className="ic">🧬</div>
              <h3>Understanding Hepatitis C</h3>
              <p>HCV genotypes, routes of transmission, modern DAA cure rates, and the importance of screening.</p>
              <span className="go">Read more →</span>
            </a>
            <a className="edu-card reveal" href="#colorectal">
              <div className="ic">🔎</div>
              <h3>Colorectal Cancer Screening</h3>
              <p>Why screening from age 50 matters, what colonoscopy involves, and how polyps become cancer.</p>
              <span className="go">Read more →</span>
            </a>
            <a className="edu-card reveal" href="#hemorrhoids">
              <div className="ic">🏥</div>
              <h3>Understanding Hemorrhoids</h3>
              <p>Causes, grades, symptoms, and treatment options from lifestyle changes to minimally invasive surgery.</p>
              <span className="go">Read more →</span>
            </a>
            <a className="edu-card reveal" href="#hernia">
              <div className="ic">⚕️</div>
              <h3>Understanding Inguinal Hernia</h3>
              <p>What a hernia is, who is at risk, warning signs that need urgent care, and surgical repair options.</p>
              <span className="go">Read more →</span>
            </a>
            <a className="edu-card reveal" href="#fatty-liver">
              <div className="ic">🫀</div>
              <h3>Fatty Liver Disease</h3>
              <p>The link between metabolic syndrome and NAFLD, how it progresses, and lifestyle and medical strategies to reverse it.</p>
              <span className="go">Read more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="alt" style={{ paddingTop: '72px', paddingBottom: '96px' }}>
        <div className="wrap">

          {/* Physical Examination Plans */}
          <div className="article reveal" id="health-checks">
            <div className="eyebrow">Health Screening · 體檢計劃</div>
            <h2>Physical Examination Plans</h2>
            <p>A specialist doctor will provide you with a professional assessment, examination, and detailed report to help you understand your current physical condition and detect diseases — including cancer, heart disease, and metabolic disorders — at the earliest, most treatable stage. Early diagnosis consistently leads to better outcomes.</p>
            <h3>Who should consider a health check?</h3>
            <ul>
              <li>Adults aged 40 and above for a baseline assessment</li>
              <li>Individuals with a family history of cancer, heart disease, or diabetes</li>
              <li>Anyone who hasn't had a medical review in more than two years</li>
              <li>Patients with known risk factors such as smoking, obesity, or hypertension</li>
            </ul>
            <h3>What our checks cover</h3>
            <ul>
              <li><strong>Basic Health Check:</strong> Blood pressure, height, weight, BMI, blood glucose, cholesterol, liver and kidney function, complete blood count, urinalysis</li>
              <li><strong>Comprehensive Check:</strong> All basic tests plus thyroid function, tumour markers (AFP, CEA, CA-19.9), chest X-ray, abdominal ultrasound, ECG</li>
              <li><strong>Cancer Screening Add-on:</strong> Faecal occult blood test, colonoscopy (if indicated), low-dose CT for lung cancer in smokers</li>
              <li><strong>Cardiac Assessment:</strong> ECG, echocardiogram, treadmill stress test, lipid panel, CRP</li>
            </ul>
            <div className="note">To discuss which examination package is right for you, please <Link to="/contact">contact our team</Link> or call <a href="tel:+85228613777">(852) 2861 3777</a>.</div>
          </div>

          {/* Vaccination */}
          <div className="article reveal" id="vaccination">
            <div className="eyebrow">Vaccination · 疫苗接種</div>
            <h2>Vaccination</h2>
            <p>Vaccines leverage the immune system's ability to recognise and remember foreign substances. When a vaccine is administered, the immune system responds by producing antibodies and establishing immunological memory — so that when the body encounters the actual pathogen in future, it can mount a rapid and effective defence.</p>
            <p>Vaccines have proven effective against many historically devastating diseases, including smallpox, tuberculosis, diphtheria, tetanus, whooping cough, and polio. They remain one of the most cost-effective public health interventions available.</p>
            <h3>COVID-19 Vaccination Programme</h3>
            <p>Citizens can receive the Sinovac (CoronaVac) or Pfizer-BioNTech (Comirnaty) COVID-19 vaccine at our private clinic vaccination station in Central, including toddler formulations for eligible children.</p>
            <div className="note">
              <strong>mRNA COVID-19 vaccine (toddler formulation available)</strong><br />
              Private Clinic COVID-19 Vaccination Station<br />
              CENTRAL — 9 Queen's Road Central, Room 1401–02, by Humanity &amp; Health Medical Centre<br />
              <a href="https://booking.covidvaccine.gov.hk/forms/index_tc.jsp" target="_blank" rel="noopener">Book via the Government system →</a>
            </div>
            <h3>Influenza Vaccination</h3>
            <p>Eligible Hong Kong residents aged 6 months to under 18, or aged 50 and above, can receive free influenza vaccination at designated sites. Influenza vaccination is recommended annually as circulating strains change each season.</p>
            <h3>Who is not suitable for vaccination?</h3>
            <p>Not everyone is suitable for every vaccine. Your doctor will assess your medical history and current health status before administration. Common reasons for deferral include acute fever, certain allergies, and immunosuppression.</p>
            <h3>Common side effects</h3>
            <ul>
              <li>Injection-site pain, redness, or swelling — usually resolves within 1–2 days</li>
              <li>Mild fatigue, muscle soreness, or headache</li>
              <li>Low-grade fever in the first 24–48 hours</li>
            </ul>
            <p>An observation period of 15–30 minutes after administration allows prompt management of any acute allergic reactions. Serious reactions are rare but require immediate medical attention.</p>
          </div>

          {/* Hepatitis B */}
          <div className="article reveal" id="hepb">
            <div className="eyebrow">Liver Health · 乙型肝炎</div>
            <h2>Understanding Hepatitis B</h2>
            <p>Approximately one in ten adults in Hong Kong is a chronic hepatitis B virus (HBV) carrier — one of the highest rates in the world. Despite this, most carriers are completely unaware of their infection because HBV often causes no symptoms for decades.</p>
            <h3>How is HBV transmitted?</h3>
            <ul>
              <li>Mother-to-child transmission during childbirth (the most common route in Hong Kong)</li>
              <li>Contact with infected blood (needlestick injuries, sharing needles)</li>
              <li>Sexual contact with an infected person</li>
              <li>HBV is not spread by casual contact, coughing, sneezing, or sharing food</li>
            </ul>
            <h3>Why does HBV matter?</h3>
            <p>Chronic HBV infection causes persistent liver inflammation that gradually scars liver tissue. Over 20–30 years, this can lead to:</p>
            <ul>
              <li><strong>Liver fibrosis</strong> — accumulation of scar tissue replacing normal liver cells</li>
              <li><strong>Cirrhosis</strong> — irreversible liver scarring causing loss of liver function</li>
              <li><strong>Liver cancer</strong> — HBV accounts for 50–70% of hepatocellular carcinoma cases in Hong Kong</li>
            </ul>
            <h3>Monitoring &amp; treatment</h3>
            <p>Regular monitoring allows early detection of complications and timely intervention. HBV carriers should undergo:</p>
            <ul>
              <li>Liver function tests (ALT, AST) and HBV DNA viral load every 6 months</li>
              <li>Abdominal ultrasound and AFP every 6–12 months</li>
              <li>Fibroscan to assess fibrosis stage</li>
            </ul>
            <p>When treatment is indicated, modern antiviral agents — tenofovir disoproxil fumarate (TDF) and entecavir (ETV) — are highly effective at suppressing viral replication and halting disease progression. Most patients tolerate them well with minimal side effects.</p>
            <h3>Prevention</h3>
            <p>The hepatitis B vaccine is safe, effective, and provides long-term protection. It is given as a three-dose course and is routinely offered to all newborns in Hong Kong. Non-immune adults should be vaccinated.</p>
            <div className="note">If you are a hepatitis B carrier or have not been tested, <Link to="/contact">speak to our team</Link> about a liver health assessment.</div>
          </div>

          {/* Hepatitis C */}
          <div className="article reveal" id="hepc">
            <div className="eyebrow">Liver Health · 丙型肝炎</div>
            <h2>Understanding Hepatitis C</h2>
            <p>Hepatitis C virus (HCV) infects an estimated 71 million people worldwide. Unlike hepatitis B, no vaccine exists for HCV — but modern treatments now offer a cure for over 95% of patients in just 8–12 weeks.</p>
            <h3>Transmission</h3>
            <p>HCV is spread primarily through blood-to-blood contact:</p>
            <ul>
              <li>Sharing needles or syringes (most common route globally)</li>
              <li>Blood transfusions or organ transplants before routine HCV screening (pre-1993 in Hong Kong)</li>
              <li>Needlestick injuries in healthcare settings</li>
              <li>Sexual transmission (less common, but higher risk with multiple partners or co-infection with HIV)</li>
            </ul>
            <h3>Why HCV is often missed</h3>
            <p>About 80% of people with acute HCV infection develop no symptoms. Chronic infection causes vague symptoms — fatigue, mild nausea — that are easy to attribute to other causes. Many patients are only diagnosed when significant liver damage has already occurred, which is why targeted screening is so important.</p>
            <h3>HCV genotypes</h3>
            <p>HCV has six major genotypes (1–6), with genotypes 1 and 6 most common in Hong Kong. Genotype testing guides the choice of treatment regimen, though modern pan-genotypic drugs now work across all genotypes.</p>
            <h3>Modern treatment: Direct-acting antivirals (DAAs)</h3>
            <p>DAA regimens (sofosbuvir/velpatasvir, glecaprevir/pibrentasvir, and others) achieve cure rates above 95% in 8–12 weeks with minimal side effects. Treatment eliminates the virus, halts fibrosis progression, and — in patients without cirrhosis — allows the liver to recover substantially.</p>
            <div className="note">A simple blood test can detect HCV antibodies. If you have risk factors for HCV, <Link to="/contact">contact us</Link> for a confidential assessment.</div>
          </div>

          {/* Colorectal Cancer */}
          <div className="article reveal" id="colorectal">
            <div className="eyebrow">Cancer Screening · 大腸癌普查</div>
            <h2>Colorectal Cancer Screening</h2>
            <p>Colorectal cancer (CRC) is one of the most common cancers in Hong Kong and is also among the most preventable when detected early. The vast majority of colorectal cancers begin as benign polyps — abnormal growths on the lining of the colon or rectum — that can be identified and removed during a colonoscopy long before they become malignant.</p>
            <h3>Risk factors</h3>
            <ul>
              <li>Age 50 and above (risk increases with age)</li>
              <li>Family history of colorectal cancer or adenomatous polyps</li>
              <li>Personal history of inflammatory bowel disease (Crohn's / ulcerative colitis)</li>
              <li>Diet high in red and processed meat, low in fibre</li>
              <li>Obesity, physical inactivity, smoking, and excessive alcohol</li>
            </ul>
            <h3>Screening options</h3>
            <ul>
              <li><strong>Faecal occult blood test (FOBT/FIT):</strong> A simple home stool test detecting hidden blood. Recommended annually for lower-risk individuals. Positive results require follow-up colonoscopy.</li>
              <li><strong>Colonoscopy:</strong> The gold standard — allows direct visualisation, biopsy, and polyp removal in a single procedure. Recommended every 10 years from age 50, or more frequently if polyps are found.</li>
              <li><strong>Flexible sigmoidoscopy:</strong> Examines the lower colon only; less comprehensive than full colonoscopy.</li>
            </ul>
            <h3>What to expect during colonoscopy</h3>
            <p>Bowel preparation the day before clears the colon for a clear view. The procedure takes 30–60 minutes and is performed under sedation — most patients have no memory of it. Recovery takes a few hours. Polyps found during the examination can typically be removed immediately using biopsy forceps or a wire snare.</p>
            <div className="note">Colonoscopy is recommended from age 50. If you have a family history of colorectal cancer, screening should begin earlier. <Link to="/contact">Book a consultation</Link> to discuss your screening plan.</div>
          </div>

          {/* Hemorrhoids */}
          <div className="article reveal" id="hemorrhoids">
            <div className="eyebrow">Surgery · 痔瘡</div>
            <h2>Understanding Hemorrhoids</h2>
            <p>Haemorrhoids (piles) are swollen and inflamed blood vessels in the rectum and anus. They are extremely common — affecting an estimated 75% of adults at some point in their lives — but are frequently undertreated due to embarrassment. Effective treatments are available across a wide spectrum, from simple dietary changes to minimally invasive procedures.</p>
            <h3>Internal vs. external haemorrhoids</h3>
            <ul>
              <li><strong>Internal haemorrhoids</strong> develop inside the rectum. They are graded I–IV by degree of prolapse. Grade I and II are generally managed non-surgically; Grade III and IV often require procedural intervention.</li>
              <li><strong>External haemorrhoids</strong> develop under the skin around the anus and may cause pain, swelling, and thrombosis.</li>
            </ul>
            <h3>Symptoms</h3>
            <ul>
              <li>Bright red bleeding after defaecation (painless in internal haemorrhoids)</li>
              <li>Prolapse — tissue protruding from the anus</li>
              <li>Perianal discomfort, itching, or mucus discharge</li>
              <li>Pain and swelling (more common with external or thrombosed haemorrhoids)</li>
            </ul>
            <h3>Treatment options at our centre</h3>
            <ul>
              <li><strong>Dietary and lifestyle changes:</strong> High-fibre diet, adequate hydration, and regular exercise reduce constipation and straining — the primary drivers of haemorrhoid development.</li>
              <li><strong>Rubber band ligation:</strong> A rubber band is placed at the base of an internal haemorrhoid, cutting off its blood supply so it shrinks and falls off within 1–2 weeks. Highly effective for Grade I–III.</li>
              <li><strong>Bipolar diathermy (BOWA 350):</strong> Precise electrical coagulation therapy for smaller haemorrhoids, performed in clinic without anaesthesia.</li>
              <li><strong>Doppler-guided haemorrhoidal artery ligation (HAL-RAR):</strong> A minimally invasive procedure that identifies and ties off the arteries supplying the haemorrhoid, reducing its blood supply and enabling prolapsed tissue to be repositioned.</li>
              <li><strong>Haemorrhoidectomy:</strong> Surgical removal for large Grade III–IV haemorrhoids. Conventional or stapled techniques available.</li>
            </ul>
            <div className="note">Rectal bleeding should always be evaluated by a doctor — it can be a sign of haemorrhoids, but also of other conditions including colorectal cancer. <Link to="/contact">Book a consultation</Link> for a proper assessment.</div>
          </div>

          {/* Inguinal Hernia */}
          <div className="article reveal" id="hernia">
            <div className="eyebrow">Surgery · 腹股溝疝氣</div>
            <h2>Understanding Inguinal Hernia</h2>
            <p>A hernia occurs when an internal organ or fatty tissue pushes through a weak spot in the surrounding muscle or connective tissue. An inguinal hernia — the most common type in adults — involves tissue (usually part of the intestine or fat) pushing through the inguinal canal in the groin.</p>
            <h3>Who is at risk?</h3>
            <ul>
              <li>Men are significantly more likely to develop inguinal hernias than women due to anatomical differences</li>
              <li>Advancing age (muscles weaken over time)</li>
              <li>Chronic cough, constipation, or heavy lifting — all raise intra-abdominal pressure</li>
              <li>Previous hernia or hernia repair (risk of recurrence)</li>
              <li>Premature birth (the inguinal canal may not close properly)</li>
            </ul>
            <h3>Symptoms</h3>
            <ul>
              <li>A visible bulge in the groin or scrotum that becomes more prominent when standing, coughing, or straining</li>
              <li>Aching or burning sensation at the bulge site</li>
              <li>Discomfort when bending, coughing, or lifting</li>
            </ul>
            <h3>When is it an emergency?</h3>
            <p>A hernia becomes dangerous when the protruding tissue becomes trapped (incarcerated) and cannot be pushed back in, or when its blood supply is cut off (strangulated). Signs include: severe sudden pain, a tender, hard bulge that cannot be reduced, nausea, and vomiting. This requires emergency surgery.</p>
            <h3>Surgical options</h3>
            <ul>
              <li><strong>Open repair (Lichtenstein tension-free mesh):</strong> A synthetic mesh is placed over the defect through a groin incision. Well-established technique with low recurrence rates.</li>
              <li><strong>Laparoscopic repair:</strong> Three small keyhole incisions allow the surgeon to place mesh behind the abdominal wall using a camera. Faster recovery, less post-operative pain, and ideal for bilateral hernias or recurrent cases.</li>
            </ul>
            <div className="note">Hernias do not resolve on their own and may enlarge or strangulate over time. Early repair is generally recommended. <Link to="/contact">Contact our surgical team</Link> to discuss your options.</div>
          </div>

          {/* Fatty Liver */}
          <div className="article reveal" id="fatty-liver">
            <div className="eyebrow">Liver Health · 脂肪肝</div>
            <h2>Fatty Liver Disease</h2>
            <p>Fatty liver disease (hepatic steatosis) is one of the most prevalent liver conditions worldwide, estimated to affect up to 30% of adults in Hong Kong. It describes the accumulation of excess fat within liver cells — a process that triggers inflammation and, over time, progressive liver damage.</p>
            <h3>Two main types</h3>
            <ul>
              <li><strong>Non-alcoholic fatty liver disease (NAFLD):</strong> Occurs in people who drink little or no alcohol. Closely linked to metabolic syndrome — obesity, type 2 diabetes, high triglycerides, and high blood pressure.</li>
              <li><strong>Alcohol-related fatty liver disease (ALD):</strong> Caused by excessive alcohol consumption. Abstinence can reverse early-stage ALD.</li>
            </ul>
            <h3>How does it progress?</h3>
            <p>Fatty liver disease typically follows this trajectory:</p>
            <ul>
              <li><strong>Simple steatosis:</strong> Fat accumulation with no significant inflammation. Often reversible with lifestyle changes.</li>
              <li><strong>Steatohepatitis (NASH):</strong> Fat plus liver inflammation and cell injury. Approximately 20% of NAFLD patients have NASH.</li>
              <li><strong>Fibrosis:</strong> Scarring of the liver. Can regress if the underlying cause is treated.</li>
              <li><strong>Cirrhosis:</strong> Extensive irreversible scarring. Risk of liver failure and liver cancer.</li>
            </ul>
            <h3>Diagnosis</h3>
            <p>Most patients with fatty liver have no symptoms. The condition is often discovered incidentally on blood tests or ultrasound performed for other reasons. Assessment includes:</p>
            <ul>
              <li>Liver function tests (elevated ALT/AST may indicate steatohepatitis)</li>
              <li>Abdominal ultrasound to estimate fat content</li>
              <li>Fibroscan (transient elastography) for non-invasive fibrosis staging</li>
              <li>Liver biopsy — reserved for cases where the severity is unclear</li>
            </ul>
            <h3>Management</h3>
            <ul>
              <li><strong>Weight loss:</strong> Even 5–10% reduction in body weight significantly reduces liver fat. 7–10% reduction may reverse NASH.</li>
              <li><strong>Exercise:</strong> Both aerobic and resistance training reduce liver fat independently of weight loss.</li>
              <li><strong>Diet:</strong> Mediterranean-style diet (rich in vegetables, legumes, olive oil, fish, and whole grains) is the most evidence-based dietary approach.</li>
              <li><strong>Control of metabolic risk factors:</strong> Optimising blood glucose, blood pressure, and lipid levels reduces disease progression.</li>
              <li><strong>Alcohol avoidance:</strong> Even moderate alcohol may worsen NAFLD.</li>
            </ul>
            <div className="note">If you have been told you have fatty liver, or have risk factors such as obesity or type 2 diabetes, <Link to="/contact">speak to our hepatologist</Link> about a comprehensive liver assessment.</div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: 'var(--orange-deep)', color: '#fff' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: '#FFD0A6', marginBottom: 0 }}>Speak to a specialist</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.6rem,2.8vw,2.2rem)', fontWeight: 500, margin: '16px 0 12px' }}>Have questions about your health?</h2>
          <p style={{ color: '#F1DDC4', maxWidth: '52ch', margin: '0 auto 28px' }}>Our specialist doctors are available for consultations Monday to Saturday. Don't wait — early assessment makes a difference.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/contact" style={{ background: 'var(--cinnabar)' }}>Make an Appointment</Link>
            <a className="btn ghost" href="tel:+85228613777" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>+852 2861 3777</a>
          </div>
        </div>
      </section>

    </main>
  );
}
