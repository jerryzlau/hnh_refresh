import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { imgFb } from '../utils';

/* ============================================================
   Intro Animation Component
   ============================================================ */
function IntroAnimation({ onDone }) {
  const canvasRef = useRef(null);
  const ovRef = useRef(null);
  const [textVisible, setTextVisible] = useState({ zh: false, en: false, tag: false });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const ov = ovRef.current;
    const cv = canvasRef.current;
    if (!ov || !cv) return;
    const ctx = cv.getContext('2d');
    let W, H, CX, CY;

    function rsz() {
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
      CX = W / 2; CY = H / 2;
    }
    rsz();
    window.addEventListener('resize', rsz);

    /* Pre-render a glowing dot sprite once */
    const spr = document.createElement('canvas');
    spr.width = spr.height = 64;
    const sc = spr.getContext('2d');
    const sg = sc.createRadialGradient(32, 32, 0, 32, 32, 30);
    sg.addColorStop(0, 'rgba(255,200,110,1)');
    sg.addColorStop(0.22, 'rgba(224,115,29,.88)');
    sg.addColorStop(0.55, 'rgba(224,115,29,.22)');
    sg.addColorStop(1, 'rgba(224,115,29,0)');
    sc.fillStyle = sg;
    sc.fillRect(0, 0, 64, 64);

    /* Fibonacci-lattice sphere */
    const N = 130;
    let R = Math.min(W, H) * 0.195;
    const PHI = Math.PI * (3 - Math.sqrt(5));
    const pts = [];
    for (let i = 0; i < N; i++) {
      const yy = 1 - (i / (N - 1)) * 2;
      const rr = Math.sqrt(1 - yy * yy) * R;
      const th = PHI * i;
      pts.push({
        tx: Math.cos(th) * rr, ty: yy * R, tz: Math.sin(th) * rr,
        sx: (Math.random() - .5) * W * 1.8,
        sy: (Math.random() - .5) * H * 1.8,
        sz: (Math.random() - .5) * 900,
        x: 0, y: 0, z: 0,
        ps: Math.random() * 1.3 + 0.65
      });
    }

    let aY = 0, aX = 0, raf, gone = false, t0 = null;

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    function endIntro() {
      if (gone) return;
      gone = true;
      cancelAnimationFrame(raf);
      document.body.style.overflow = '';
      ov.classList.add('out');
      setTimeout(() => onDone(), 800);
    }

    window.__endIntro = endIntro;

    function frame(ts) {
      if (gone) return;
      if (!t0) t0 = ts;
      const t = (ts - t0) / 1000;
      let i, p, ex;

      if (t < 1.1) {
        const pp = easeOut(t / 1.1);
        for (i = 0; i < N; i++) {
          pts[i].x = pts[i].sx + (pts[i].tx - pts[i].sx) * pp;
          pts[i].y = pts[i].sy + (pts[i].ty - pts[i].sy) * pp;
          pts[i].z = pts[i].sz + (pts[i].tz - pts[i].sz) * pp;
        }
        aY = t * 0.3;
        aX = Math.sin(t) * 0.1;
      } else if (t < 2.75) {
        for (i = 0; i < N; i++) {
          pts[i].x = pts[i].tx; pts[i].y = pts[i].ty; pts[i].z = pts[i].tz;
        }
        aY += 0.016;
        aX = Math.sin(t * 0.55) * 0.23;
        if (t > 0.9) setTextVisible({ zh: true, en: true, tag: true });
      } else {
        ex = easeOut((t - 2.75) / 1.1);
        for (i = 0; i < N; i++) {
          pts[i].x = pts[i].tx * (1 + ex * 8);
          pts[i].y = pts[i].ty * (1 + ex * 8);
          pts[i].z = pts[i].tz * (1 + ex * 8);
        }
        aY += 0.008;
      }

      if (t > 3.05) endIntro();

      ctx.clearRect(0, 0, W, H);

      let glA = t < 0.8 ? 0 : Math.min(0.16, (t - 0.8) * 0.22);
      if (t > 2.55) glA = Math.max(0, glA - (t - 2.55) * 0.5);
      if (glA > 0.003) {
        const g = ctx.createRadialGradient(CX, CY, 0, CX, CY, R * 1.6);
        g.addColorStop(0, 'rgba(224,115,29,' + glA + ')');
        g.addColorStop(1, 'rgba(224,115,29,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      const cosY = Math.cos(aY), sinY = Math.sin(aY);
      const cosX = Math.cos(aX), sinX = Math.sin(aX);
      const fov = Math.min(W, H) * 0.88;
      const proj = new Array(N);
      for (i = 0; i < N; i++) {
        p = pts[i];
        const rx = p.x * cosY + p.z * sinY;
        const ry = p.y;
        const rz = -p.x * sinY + p.z * cosY;
        const ry2 = ry * cosX - rz * sinX;
        const rz2 = ry * sinX + rz * cosX;
        const dep = rz2 + fov;
        proj[i] = {
          sx: CX + rx * fov / dep,
          sy: CY + ry2 * fov / dep,
          sc: fov / dep,
          zz: rz2,
          d: (rz2 + R) / (2 * R),
          ps: p.ps
        };
      }
      proj.sort((a, b) => a.zz - b.zz);

      const maxD = R * 0.54;
      const connA = t < 1.1
        ? (t / 1.1) * 0.22
        : t > 2.75
          ? Math.max(0, 0.22 * (1 - (t - 2.75) / 0.55))
          : 0.22;
      if (connA > 0.005) {
        ctx.lineWidth = 0.55;
        for (i = 0; i < proj.length - 1; i++) {
          for (let j = i + 1; j < proj.length; j++) {
            const dx = proj[i].sx - proj[j].sx;
            const dy = proj[i].sy - proj[j].sy;
            const dd = Math.sqrt(dx * dx + dy * dy);
            if (dd < maxD) {
              const a = connA * (1 - dd / maxD) * Math.min(proj[i].d, proj[j].d);
              ctx.strokeStyle = 'rgba(224,115,29,' + a + ')';
              ctx.beginPath();
              ctx.moveTo(proj[i].sx, proj[i].sy);
              ctx.lineTo(proj[j].sx, proj[j].sy);
              ctx.stroke();
            }
          }
        }
      }

      for (i = 0; i < proj.length; i++) {
        p = proj[i];
        const r = p.ps * p.sc * 6.8;
        ctx.globalAlpha = Math.max(0, Math.min(1, 0.25 + p.d * 0.75));
        ctx.drawImage(spr, p.sx - r, p.sy - r, r * 2, r * 2);
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);

    return () => {
      window.removeEventListener('resize', rsz);
      cancelAnimationFrame(raf);
      document.body.style.overflow = '';
      delete window.__endIntro;
    };
  }, [onDone]);

  return (
    <div id="intro" ref={ovRef} aria-hidden="true" style={{
      position: 'fixed', inset: 0, zIndex: 9999, background: '#0B1B28',
      display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
    }}>
      <style>{`
        #intro.out{animation:iOut .72s cubic-bezier(.76,0,.24,1) forwards}
        @keyframes iOut{to{transform:translateY(-100%)}}
        .i-zh{font-family:'Noto Serif TC',serif;font-weight:600;font-size:clamp(2.5rem,5.5vw,4.2rem);letter-spacing:.44em;color:#E0731D;opacity:0;transform:scale(.93) translateY(16px);transition:opacity .95s ease,transform .95s ease;text-shadow:0 0 50px rgba(224,115,29,.55),0 0 100px rgba(224,115,29,.2)}
        .i-zh.v{opacity:1;transform:none}
        .i-en{font-family:'Fraunces',serif;font-weight:400;font-size:clamp(.88rem,2vw,1.18rem);color:rgba(255,255,255,.72);letter-spacing:.13em;opacity:0;transition:opacity .85s ease .3s}
        .i-en.v{opacity:1}
        .i-tag{font-family:'Albert Sans',sans-serif;font-size:.73rem;letter-spacing:.3em;text-transform:uppercase;color:rgba(255,255,255,.3);opacity:0;transition:opacity .7s ease .6s}
        .i-tag.v{opacity:1}
        .i-skip{position:absolute;bottom:22px;right:26px;background:none;border:1px solid rgba(255,255,255,.18);color:rgba(255,255,255,.35);font-family:'Albert Sans',sans-serif;font-size:.71rem;letter-spacing:.2em;text-transform:uppercase;padding:5px 14px;border-radius:999px;cursor:pointer;transition:color .2s,border-color .2s}
        .i-skip:hover{color:rgba(255,255,255,.65);border-color:rgba(255,255,255,.45)}
      `}</style>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
        <div className={`i-zh${textVisible.zh ? ' v' : ''}`}>天下仁心</div>
        <div className={`i-en${textVisible.en ? ' v' : ''}`}>Humanity &amp; Health Medical Centre</div>
        <div className={`i-tag${textVisible.tag ? ' v' : ''}`}>Hong Kong · Est.&nbsp;2009</div>
      </div>
      <button className="i-skip" onClick={() => window.__endIntro && window.__endIntro()}>Skip</button>
    </div>
  );
}

/* ============================================================
   Home Page
   ============================================================ */
export default function Home() {
  const [introVisible, setIntroVisible] = useState(true);
  useReveal();

  return (
    <>
      {introVisible && <IntroAnimation onDone={() => setIntroVisible(false)} />}

      <main id="top">

        {/* ============ HERO ============ */}
        <section className="hero" style={{ padding: 0 }}>
          <div className="wrap">
            <div className="seal" aria-hidden="true">天下仁心</div>
            <div>
              <div className="eyebrow">Serving Hong Kong since 2009</div>
              <h1>Precision medicine,<br />delivered with <em>humanity</em>.</h1>
              <p className="lead">Humanity and Health Medical Centre is located in the heart of Hong Kong, combining internationally recognised diagnostic technology with personalised care across gastroenterology &amp; hepatology, surgery, oncology, and more.</p>
              <div className="cta">
                <Link className="btn" to="/contact">Book a consultation</Link>
                <Link className="btn ghost" to="/services">Explore our services</Link>
              </div>
            </div>
            <div className="photo">
              <img
                src="/assets/equip-1.jpg"
                data-cdn="https://static.wixstatic.com/media/379045_631c5974f8714639ad19277bd2d9c142~mv2.jpg/v1/fill/w_401,h_534,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_E3565_JPG.jpg"
                onError={e => imgFb(e.currentTarget)}
                alt="Endoscopy suite at Humanity and Health Medical Centre"
              />
              <div className="chip"><strong>2009</strong>Caring for patients for over 15 years</div>
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section>
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="eyebrow">About the Centre · 中心簡介</div>
              <h2>Comprehensive medical and nursing services</h2>
              <p>Established in 2009, the Centre is equipped with advanced medical and laboratory instruments providing accurate diagnosis. We have always emphasised precision medicine, combined with personalised care, across specialties including gastroenterology and hepatology, surgery, oncology, obstetrics and gynaecology, neurosurgery, cardiothoracic surgery, and cardiology — and we continue to expand so patients can receive treatment in a quiet, comfortable environment with peace of mind. Since opening, we have continuously introduced advanced equipment, partnered with specialist doctors, and hired qualified nursing and technical staff to ensure every patient receives appropriate care.</p>
            </div>
          </div>
        </section>

        {/* ============ SERVICES ============ */}
        <section className="alt" id="services">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="eyebrow">Centre Services · 中心服務</div>
              <h2>Specialist services for the liver, digestive system and beyond</h2>
              <Link className="view-all" to="/services">View all services →</Link>
            </div>
            <div className="svc-grid">
              <div className="svc reveal">
                <img src="/assets/svc-hepb.jpg" data-cdn="https://static.wixstatic.com/media/11062b_d74a331a352b46dea8e1687d01ab8a78~mv2.jpeg/v1/crop/x_1120,y_0,w_4480,h_4480/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E9%86%AB%E7%99%82%E9%9A%8A.jpeg" onError={e => imgFb(e.currentTarget)} alt="Medical team" loading="lazy" />
                <h3>Hepatitis B Evaluation &amp; Treatment</h3>
                <p>Nearly one in ten adults in Hong Kong are HBV carriers. The virus can cause acute or chronic hepatitis, cirrhosis or liver cancer — regular hepatitis B liver tests help ensure liver health.</p>
                <Link className="more" to="/services#hepb">Learn more →</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-fibrosis.jpg" data-cdn="https://static.wixstatic.com/media/11062b_aa6818fb704a4824a6607192ae95da67~mv2.jpeg/v1/crop/x_1000,y_0,w_4000,h_4000/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E9%86%AB%E7%94%9F%E5%92%8C%E7%97%85%E4%BA%BA.jpeg" onError={e => imgFb(e.currentTarget)} alt="Doctor with patient" loading="lazy" />
                <h3>Liver Fibrosis Assessment &amp; Treatment</h3>
                <p>Chronic liver disease keeps the liver inflamed, gradually forming fibrosis. Excess fibre accumulation progresses to cirrhosis — a main cause of liver failure and liver cancer.</p>
                <Link className="more" to="/services#fibrosis">Learn more →</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-hepc.jpg" data-cdn="https://static.wixstatic.com/media/ea997dc9475841f2a7709e8098764f30.jpg/v1/crop/x_128,y_0,w_2671,h_2671/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E5%8F%8B%E5%A5%BD%E5%B9%B4%E8%BC%95%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Friendly young doctor" loading="lazy" />
                <h3>Hepatitis C Evaluation &amp; Treatment</h3>
                <p>HCV has six genotypes, all of which can cause acute or chronic hepatitis that may develop into cirrhosis or liver cancer. Confirmed patients need regular liver function tests and follow-up.</p>
                <Link className="more" to="/services#hepc">Learn more →</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-cancer.jpg" data-cdn="https://static.wixstatic.com/media/11062b_2670f3edbdaf4e3386e49f3274bb96e3~mv2.jpg/v1/crop/x_690,y_0,w_3570,h_3570/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%94%AF%E6%8C%81%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Supporting doctors" loading="lazy" />
                <h3>Liver Cancer Screening &amp; Treatment</h3>
                <p>Liver cancer is the fifth most common cancer in Hong Kong and often shows no early symptoms. High-risk individuals should undergo liver function, alpha-fetoprotein and ultrasound checks every 6–9 months.</p>
                <Link className="more" to="/services#liver-cancer">Learn more →</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-consult.jpg" data-cdn="https://static.wixstatic.com/media/11062b_4db9398f08b34877b8d7735d43d4957b~mv2.jpg/v1/crop/x_834,y_0,w_3333,h_3333/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E7%B6%B2%E4%B8%8A%E9%86%AB%E7%99%82%E9%A1%A7%E5%95%8F.jpg" onError={e => imgFb(e.currentTarget)} alt="Medical consultant" loading="lazy" />
                <h3>Fatty Liver Disease Assessment &amp; Treatment</h3>
                <p>Fatty liver — whether non-alcoholic or alcohol-related — shows no early symptoms but can progress to fibrosis, cirrhosis and even liver cancer. Regular liver examinations enable early treatment.</p>
                <Link className="more" to="/services#fatty-liver">Learn more →</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-gastro.jpg" data-cdn="https://static.wixstatic.com/media/11062b_4ebfd43bcda34322a29ca6f1c23eff76~mv2_d_5100_3399_s_4_2.jpg/v1/crop/x_851,y_0,w_3399,h_3399/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%89%8B%E8%A1%93%E5%AE%A4%E7%9A%84%E5%A4%96%E7%A7%91%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Surgeon in operating room" loading="lazy" />
                <h3>Gastroscopy</h3>
                <p>A flexible tube enters the upper gastrointestinal tract through the mouth to check for inflammation, ulcers, tumours or internal bleeding. Tissue sampling and polypectomy can be performed if needed.</p>
                <Link className="more" to="/services#gastroscopy">Learn more →</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-consult.jpg" data-cdn="https://static.wixstatic.com/media/11062b_4db9398f08b34877b8d7735d43d4957b~mv2.jpg/v1/crop/x_834,y_0,w_3333,h_3333/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E7%B6%B2%E4%B8%8A%E9%86%AB%E7%99%82%E9%A1%A7%E5%95%8F.jpg" onError={e => imgFb(e.currentTarget)} alt="Colonoscopy consultation" loading="lazy" />
                <h3>Colonoscopy</h3>
                <p>A flexible tube examines the sigmoid, descending, transverse and ascending colon and cecum for inflammation, ulcers, tumours or lesions, with tissue sampling and polypectomy available when needed.</p>
                <Link className="more" to="/services#colonoscopy">Learn more →</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-hemorrhoid.jpg" data-cdn="https://static.wixstatic.com/media/11062b_ebed553b419a414fadd847af8f58f23f~mv2_d_8660_5773_s_4_2.jpg/v1/crop/x_1444,y_0,w_5773,h_5773/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%89%8B%E8%A1%93%E6%9C%9F%E9%96%93%E7%9A%84%E5%A4%96%E7%A7%91%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Surgeon during surgery" loading="lazy" />
                <h3>Hemorrhoid Treatment &amp; Surgery</h3>
                <p>From rubber band ligation to circumferential hemorrhoidectomy, Doppler-guided artery ligation (HAL), and bipolar vascular closure (BOWA 350 diathermy) — minimally invasive options with faster recovery.</p>
                <Link className="more" to="/services#hemorrhoids">Learn more →</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-surgery.jpg" data-cdn="https://static.wixstatic.com/media/04b70ad4e4af4a9290c1769bf2b63030.jpg/v1/crop/x_854,y_0,w_3414,h_3414/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%89%8B%E8%A1%93.jpg" onError={e => imgFb(e.currentTarget)} alt="Operation in progress" loading="lazy" />
                <h3>Hernia Repair &amp; Intermediate / Minor Surgery</h3>
                <p>Surgical treatment of inguinal and wound hernias, plus tumour removal, partial organ removal, chest, heart and neurosurgery, body remodelling and palliative procedures.</p>
                <Link className="more" to="/services#hernia">Learn more →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ EQUIPMENT ============ */}
        <section id="equipment">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="eyebrow">Centre Equipment · 中心設備</div>
              <h2>Advanced diagnostics, monitored end to end</h2>
              <p>From preparation to examination, the whole process is strictly monitored by dedicated doctors and nurses, with a dedicated staff member following up with every patient.</p>
            </div>
            <div className="equip">
              <div className="text reveal">
                <h3>One-stop Endoscopy Centre</h3>
                <p>Our centre is equipped with an advanced endoscopic imaging system, and the nurses and technicians involved have received professional training — providing one-stop endoscopic examination and treatment.</p>
                <h3>NBI Narrow Band Imaging</h3>
                <p>By filtering out longer-wavelength red light and retaining blue and green light, micro-blood-vessel changes — even mucosal tissue and colour changes that were previously hard to detect — are shown clearly, helping locate lesions or cancer early and accurately.</p>
                <h3>HDTV High-Definition Image Processing</h3>
                <p>The Endoscopy Centre uses the advanced Olympus CV-290 HDTV image processing system together with the Olympus GIF Type H260 endoscope, significantly improving image quality for clearer, more accurate diagnosis and treatment.</p>
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

        {/* ============ DOCTORS ============ */}
        <section className="alt" id="doctors">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="eyebrow">Medical Staff · 醫療團隊</div>
              <h2>Our specialist doctors</h2>
              <Link className="view-all" to="/doctors">View all medical staff →</Link>
            </div>
            <div className="doc-grid">
              <div className="doc reveal">
                <img src="/assets/doc-george-lau.jpg" data-cdn="https://static.wixstatic.com/media/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg" data-cdn2="https://static.wixstatic.com/media/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg/v1/fill/w_122,h_79,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg" onError={e => imgFb(e.currentTarget)} alt="Dr George Lau" loading="lazy" />
                <div className="info">
                  <h3>Dr George Lau</h3>
                  <div className="spec">Gastroenterology &amp; Hepatology</div>
                  <div className="quals">MB BS (HK) · MRCP (UK) · FHKCP · MD (HK) · FRCP (Edin) · FRCP (Lond) · FHKAM (Medicine)</div>
                  <div className="contact"><a href="tel:+85228613777">(852) 2861 3777</a><br /><a href="mailto:gkklau@hnhmgl.com">gkklau@hnhmgl.com</a></div>
                </div>
              </div>
              <div className="doc reveal">
                <img src="/assets/doc-richard-choi.jpg" data-cdn="https://static.wixstatic.com/media/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg" data-cdn2="https://static.wixstatic.com/media/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg/v1/fill/w_122,h_79,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg" onError={e => imgFb(e.currentTarget)} alt="Dr Richard Choi" loading="lazy" />
                <div className="info">
                  <h3>Dr Richard Choi</h3>
                  <div className="spec">General Surgery</div>
                  <div className="quals">MB BS (HK) · DPD (Wales) · FRACS · FRCS (Edin) · FCSHK · FHKAM (Surgery)</div>
                  <div className="contact"><a href="tel:+85293498851">(852) 9349 8851</a><br /><a href="https://wa.me/93498851">WhatsApp</a></div>
                </div>
              </div>
              <div className="doc reveal">
                <img src="/assets/doc-patrick-lau.jpg" data-cdn="https://static.wixstatic.com/media/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg" data-cdn2="https://static.wixstatic.com/media/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg/v1/fill/w_122,h_76,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg" onError={e => imgFb(e.currentTarget)} alt="Dr Patrick Lau" loading="lazy" />
                <div className="info">
                  <h3>Dr Patrick Lau</h3>
                  <div className="spec">Medical Oncology</div>
                  <div className="quals">MB BChir (Cambridge) · MRCP (UK) · FRCP (Glasg) · FRCP (Edin) · FRCP (Lond) · FHKCP · FHKAM</div>
                  <div className="contact"><a href="tel:+85228613777">(852) 2861 3777</a><br /><a href="mailto:drpatrick.lau@hnhmgl.com">drpatrick.lau@hnhmgl.com</a></div>
                </div>
              </div>
              <div className="doc reveal">
                <img src="/assets/doc-jane-chan.jpg" data-cdn="https://static.wixstatic.com/media/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg" data-cdn2="https://static.wixstatic.com/media/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg/v1/fill/w_129,h_87,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg" onError={e => imgFb(e.currentTarget)} alt="Dr Chan Chun Kwong, Jane" loading="lazy" />
                <div className="info">
                  <h3>Dr Chan Chun Kwong, Jane</h3>
                  <div className="spec">Respiratory Medicine</div>
                  <div className="quals">LMCHK · MD (Chicago USA) · DABIM · FHKCP · FHKAM (Medicine) · DABIM (Pulmonary D) · DABIM (Critical Care Med) · FRCP (Edin) · PDipID (HK)</div>
                  <div className="contact"><a href="tel:+85228613777">(852) 2861 3777</a></div>
                </div>
              </div>
            </div>
            <div className="honorary reveal"><strong>Honorary Consultant:</strong> SK Lam</div>
          </div>
        </section>

        {/* ============ VACCINATION ============ */}
        <section className="vax" id="vaccination">
          <div className="wrap">
            <div className="reveal">
              <div className="eyebrow" style={{ color: '#FFD0A6' }}>Health Promotion · 健康推廣</div>
              <h2>COVID-19 Vaccination Programme</h2>
              <p>Citizens can make an appointment to receive the vaccine at our private clinic vaccination station, or book directly with participating doctors and clinics, for the Sinovac or Pfizer-BioNTech vaccine. Eligible Hong Kong residents (aged 6 months to under 18, or 50 and above) can choose to receive a free influenza vaccination at the same time at designated sites.</p>
              <div className="loc">
                <strong>mRNA COVID-19 vaccine (toddler formulation available)</strong><br />
                Private Clinic COVID-19 Vaccination Station<br />
                CENTRAL — 9 Queen's Road Central, Room 1401–02<br />
                by Humanity &amp; Health Medical Centre
              </div>
              <a className="btn" href="https://booking.covidvaccine.gov.hk/forms/index_tc.jsp" target="_blank" rel="noopener">Book via the Government system</a>
            </div>
            <aside className="reveal">
              <h3>Patient education resources</h3>
              <ul>
                <li><Link to="/health-education#health-checks">Physical Examination Plans</Link></li>
                <li><Link to="/health-education#vaccination">Vaccination</Link></li>
                <li><Link to="/health-education#hepb">Understanding Hepatitis B</Link></li>
                <li><Link to="/health-education#hepc">Understanding Hepatitis C</Link></li>
                <li><Link to="/health-education#colorectal">Colorectal Cancer Screening</Link></li>
                <li><Link to="/health-education#hemorrhoids">Understanding Hemorrhoids</Link></li>
                <li><Link to="/health-education#hernia">Understanding Inguinal Hernia</Link></li>
              </ul>
            </aside>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="eyebrow">Make an Appointment · 預約</div>
              <h2>Contact our medical specialists</h2>
              <Link className="view-all" to="/contact">Full contact &amp; appointment form →</Link>
            </div>
            <div className="contact-grid">
              <ul className="contact-list reveal">
                <li>
                  <span className="ic">☎</span>
                  <span><strong>Reservation phone</strong><br /><a href="tel:+85228613777">+852 2861 3777</a></span>
                </li>
                <li>
                  <span className="ic">✆</span>
                  <span><strong>WhatsApp</strong><br /><a href="https://wa.me/+85297423389">+852 9742 3389</a></span>
                </li>
                <li>
                  <span className="ic">✉</span>
                  <span><strong>Email</strong><br /><a href="mailto:info@hnhmgl.com">info@hnhmgl.com</a></span>
                </li>
                <li>
                  <span className="ic">⌖</span>
                  <span><strong>Address</strong><br />Room 1401–02, 9 Queen's Road Central, Central, Hong Kong</span>
                </li>
              </ul>
              <div className="hours reveal">
                <h3 style={{ fontFamily: "'Fraunces',serif", color: 'var(--orange-deep)', marginBottom: '14px' }}>Clinic Hours</h3>
                <table>
                  <tbody>
                    <tr><td>Monday – Friday</td><td>9:00 am – 1:00 pm · 2:00 pm – 6:00 pm</td></tr>
                    <tr><td>Saturday</td><td>9:00 am – 1:00 pm</td></tr>
                    <tr className="closed"><td>Sundays &amp; Public Holidays</td><td>Closed</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
