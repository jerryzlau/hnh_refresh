import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks/useReveal';
import { imgFb } from '../utils';

/* ============================================================
   Intro Animation Component
   ============================================================ */
function IntroAnimation({ onDone }) {
  const canvasRef = useRef(null);
  const ovRef = useRef(null);
  const [textVisible, setTextVisible] = useState({ zh: false, en: false, tag: false });
  const { t } = useTranslation();

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
        <div className={`i-tag${textVisible.tag ? ' v' : ''}`}>{t('intro.tag')}</div>
      </div>
      <button className="i-skip" onClick={() => window.__endIntro && window.__endIntro()}>{t('common.skip')}</button>
    </div>
  );
}

/* ============================================================
   Home Page
   ============================================================ */
export default function Home() {
  const [introVisible, setIntroVisible] = useState(() => !localStorage.getItem('hnhmgl-intro-seen'));
  const { t } = useTranslation();
  useReveal();

  function handleIntroDone() {
    localStorage.setItem('hnhmgl-intro-seen', '1');
    setIntroVisible(false);
  }

  return (
    <>
      {introVisible && <IntroAnimation onDone={handleIntroDone} />}

      <main id="top">

        {/* ============ HERO ============ */}
        <section className="hero">
          <img className="hero-bg" src="/assets/doc-george-lau-hero.jpg" alt={t('home.hero.imgAlt')} />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="wrap">
            <div className="seal" aria-hidden="true">天下仁心</div>
            <div>
              <div className="eyebrow">{t('home.hero.eyebrow')}</div>
              <h1 dangerouslySetInnerHTML={{ __html: t('home.hero.title') }} />
              <p className="lead">{t('home.hero.lead')}</p>
              <div className="cta">
                <Link className="btn" to="/contact">{t('home.hero.bookCta')}</Link>
                <Link className="btn ghost" to="/services">{t('home.hero.servicesCta')}</Link>
              </div>
              <div className="hero-nameplate">
                <strong>{t('home.hero.chipName')}</strong>
                <span>{t('home.hero.chipRole')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section>
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="eyebrow">{t('home.about.eyebrow')}</div>
              <h2>{t('home.about.title')}</h2>
              <p>{t('home.about.body')}</p>
            </div>
            <blockquote className="dr-quote reveal">
              <p>"{t('home.hero.quote')}"</p>
              <cite>— {t('home.hero.quoteAuthor')}</cite>
            </blockquote>
          </div>
        </section>

        {/* ============ SERVICES ============ */}
        <section className="alt" id="services">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="eyebrow">{t('home.services.eyebrow')}</div>
              <h2>{t('home.services.title')}</h2>
              <Link className="view-all" to="/services">{t('common.viewAll')}</Link>
            </div>
            <div className="svc-grid">
              <div className="svc reveal">
                <img src="/assets/svc-hepb.jpg" data-cdn="https://static.wixstatic.com/media/11062b_d74a331a352b46dea8e1687d01ab8a78~mv2.jpeg/v1/crop/x_1120,y_0,w_4480,h_4480/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E9%86%AB%E7%99%82%E9%9A%8A.jpeg" onError={e => imgFb(e.currentTarget)} alt="Medical team" loading="lazy" />
                <h3>{t('services.hepb.title')}</h3>
                <p>{t('services.hepb.items.0')}</p>
                <Link className="more" to="/services#hepb">{t('common.learnMore')}</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-fibrosis.jpg" data-cdn="https://static.wixstatic.com/media/11062b_aa6818fb704a4824a6607192ae95da67~mv2.jpeg/v1/crop/x_1000,y_0,w_4000,h_4000/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E9%86%AB%E7%94%9F%E5%92%8C%E7%97%85%E4%BA%BA.jpeg" onError={e => imgFb(e.currentTarget)} alt="Doctor with patient" loading="lazy" />
                <h3>{t('services.fibrosis.title')}</h3>
                <p>{t('services.fibrosis.items.0')}</p>
                <Link className="more" to="/services#fibrosis">{t('common.learnMore')}</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-hepc.jpg" data-cdn="https://static.wixstatic.com/media/ea997dc9475841f2a7709e8098764f30.jpg/v1/crop/x_128,y_0,w_2671,h_2671/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E5%8F%8B%E5%A5%BD%E5%B9%B4%E8%BC%95%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Friendly young doctor" loading="lazy" />
                <h3>{t('services.hepc.title')}</h3>
                <p>{t('services.hepc.items.0')}</p>
                <Link className="more" to="/services#hepc">{t('common.learnMore')}</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-cancer.jpg" data-cdn="https://static.wixstatic.com/media/11062b_2670f3edbdaf4e3386e49f3274bb96e3~mv2.jpg/v1/crop/x_690,y_0,w_3570,h_3570/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%94%AF%E6%8C%81%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Supporting doctors" loading="lazy" />
                <h3>{t('services.liverCancer.title')}</h3>
                <p>{t('services.liverCancer.items.0')}</p>
                <Link className="more" to="/services#liver-cancer">{t('common.learnMore')}</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-consult.jpg" data-cdn="https://static.wixstatic.com/media/11062b_4db9398f08b34877b8d7735d43d4957b~mv2.jpg/v1/crop/x_834,y_0,w_3333,h_3333/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E7%B6%B2%E4%B8%8A%E9%86%AB%E7%99%82%E9%A1%A7%E5%95%8F.jpg" onError={e => imgFb(e.currentTarget)} alt="Medical consultant" loading="lazy" />
                <h3>{t('services.fattyLiver.title')}</h3>
                <p>{t('services.fattyLiver.items.0')}</p>
                <Link className="more" to="/services#fatty-liver">{t('common.learnMore')}</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-gastro.jpg" data-cdn="https://static.wixstatic.com/media/11062b_4ebfd43bcda34322a29ca6f1c23eff76~mv2_d_5100_3399_s_4_2.jpg/v1/crop/x_851,y_0,w_3399,h_3399/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%89%8B%E8%A1%93%E5%AE%A4%E7%9A%84%E5%A4%96%E7%A7%91%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Surgeon in operating room" loading="lazy" />
                <h3>{t('services.gastroscopy.title')}</h3>
                <p>{t('services.gastroscopy.items.0')}</p>
                <Link className="more" to="/services#gastroscopy">{t('common.learnMore')}</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-consult.jpg" data-cdn="https://static.wixstatic.com/media/11062b_4db9398f08b34877b8d7735d43d4957b~mv2.jpg/v1/crop/x_834,y_0,w_3333,h_3333/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E7%B6%B2%E4%B8%8A%E9%86%AB%E7%99%82%E9%A1%A7%E5%95%8F.jpg" onError={e => imgFb(e.currentTarget)} alt="Colonoscopy consultation" loading="lazy" />
                <h3>{t('services.colonoscopy.title')}</h3>
                <p>{t('services.colonoscopy.items.0')}</p>
                <Link className="more" to="/services#colonoscopy">{t('common.learnMore')}</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-hemorrhoid.jpg" data-cdn="https://static.wixstatic.com/media/11062b_ebed553b419a414fadd847af8f58f23f~mv2_d_8660_5773_s_4_2.jpg/v1/crop/x_1444,y_0,w_5773,h_5773/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%89%8B%E8%A1%93%E6%9C%9F%E9%96%93%E7%9A%84%E5%A4%96%E7%A7%91%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Surgeon during surgery" loading="lazy" />
                <h3>{t('services.hemorrhoids.title')}</h3>
                <p>{t('services.hemorrhoids.items.0')}</p>
                <Link className="more" to="/services#hemorrhoids">{t('common.learnMore')}</Link>
              </div>
              <div className="svc reveal">
                <img src="/assets/svc-surgery.jpg" data-cdn="https://static.wixstatic.com/media/04b70ad4e4af4a9290c1769bf2b63030.jpg/v1/crop/x_854,y_0,w_3414,h_3414/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%89%8B%E8%A1%93.jpg" onError={e => imgFb(e.currentTarget)} alt="Operation in progress" loading="lazy" />
                <h3>{t('services.hernia.title')}</h3>
                <p>{t('services.hernia.items.0')}</p>
                <Link className="more" to="/services#hernia">{t('common.learnMore')}</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ EQUIPMENT ============ */}
        <section id="equipment">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="eyebrow">{t('home.equipment.eyebrow')}</div>
              <h2>{t('home.equipment.title')}</h2>
              <p>{t('home.equipment.lead')}</p>
            </div>
            <div className="equip">
              <div className="text reveal">
                <h3>{t('home.equipment.endoscopy.title')}</h3>
                <p>{t('home.equipment.endoscopy.body')}</p>
                <h3>{t('home.equipment.nbi.title')}</h3>
                <p>{t('home.equipment.nbi.body')}</p>
                <h3>{t('home.equipment.fibroscan.title')}</h3>
                <p>{t('home.equipment.fibroscan.body')}</p>
                <h3>{t('home.equipment.bowa.title')}</h3>
                <p>{t('home.equipment.bowa.body')}</p>
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
              <div className="eyebrow">{t('home.doctors.eyebrow')}</div>
              <h2>{t('home.doctors.title')}</h2>
              <Link className="view-all" to="/doctors">{t('common.viewAllStaff')}</Link>
            </div>
            <div className="doc-grid">
              <div className="doc reveal featured">
                <img src="/assets/doc-george-lau.jpg" data-cdn="https://static.wixstatic.com/media/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg" data-cdn2="https://static.wixstatic.com/media/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg/v1/fill/w_122,h_79,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg" onError={e => imgFb(e.currentTarget)} alt="Dr George Lau" loading="lazy" />
                <div className="info">
                  <div className="principal-badge">{t('doctors.george.role')}</div>
                  <h3>Dr George Lau</h3>
                  <div className="spec">{t('doctors.george.spec')}</div>
                  <div className="quals">MB BS (HK) · MRCP (UK) · FHKCP · MD (HK) · FRCP (Edin) · FRCP (Lond) · FHKAM (Medicine)</div>
                  <div className="contact"><a href="tel:+85228613777">(852) 2861 3777</a><br /><a href="mailto:gkklau@hnhmgl.com">gkklau@hnhmgl.com</a></div>
                </div>
              </div>
              <div className="doc reveal">
                <img src="/assets/doc-richard-choi.jpg" data-cdn="https://static.wixstatic.com/media/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg" data-cdn2="https://static.wixstatic.com/media/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg/v1/fill/w_122,h_79,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg" onError={e => imgFb(e.currentTarget)} alt="Dr Richard Choi" loading="lazy" />
                <div className="info">
                  <h3>Dr Richard Choi</h3>
                  <div className="spec">{t('doctors.richard.spec')}</div>
                  <div className="quals">MB BS (HK) · DPD (Wales) · FRACS · FRCS (Edin) · FCSHK · FHKAM (Surgery)</div>
                  <div className="contact"><a href="tel:+85293498851">(852) 9349 8851</a><br /><a href="https://wa.me/93498851">WhatsApp</a></div>
                </div>
              </div>
              <div className="doc reveal">
                <img src="/assets/doc-patrick-lau.jpg" data-cdn="https://static.wixstatic.com/media/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg" data-cdn2="https://static.wixstatic.com/media/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg/v1/fill/w_122,h_76,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg" onError={e => imgFb(e.currentTarget)} alt="Dr Patrick Lau" loading="lazy" />
                <div className="info">
                  <h3>Dr Patrick Lau</h3>
                  <div className="spec">{t('doctors.patrick.spec')}</div>
                  <div className="quals">MB BChir (Cambridge) · MRCP (UK) · FRCP (Glasg) · FRCP (Edin) · FRCP (Lond) · FHKCP · FHKAM</div>
                  <div className="contact"><a href="tel:+85228613777">(852) 2861 3777</a><br /><a href="mailto:drpatrick.lau@hnhmgl.com">drpatrick.lau@hnhmgl.com</a></div>
                </div>
              </div>
              <div className="doc reveal">
                <img src="/assets/doc-jane-chan.jpg" data-cdn="https://static.wixstatic.com/media/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg" data-cdn2="https://static.wixstatic.com/media/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg/v1/fill/w_129,h_87,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg" onError={e => imgFb(e.currentTarget)} alt="Dr Chan Chun Kwong, Jane" loading="lazy" />
                <div className="info">
                  <h3>Dr Chan Chun Kwong, Jane</h3>
                  <div className="spec">{t('doctors.jane.spec')}</div>
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
              <div className="eyebrow" style={{ color: '#FFD0A6' }}>{t('home.vaccination.eyebrow')}</div>
              <h2>{t('home.vaccination.title')}</h2>
              <p>{t('home.vaccination.body')}</p>
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
                <li><Link to="/health-education#health-checks">{t('healthEd.topics.checks')}</Link></li>
                <li><Link to="/health-education#vaccination">{t('healthEd.topics.vaccination')}</Link></li>
                <li><Link to="/health-education#hepb">{t('healthEd.topics.hepb')}</Link></li>
                <li><Link to="/health-education#hepc">{t('healthEd.topics.hepc')}</Link></li>
                <li><Link to="/health-education#colorectal">{t('healthEd.topics.colorectal')}</Link></li>
                <li><Link to="/health-education#hemorrhoids">{t('healthEd.topics.hemorrhoids')}</Link></li>
                <li><Link to="/health-education#hernia">{t('healthEd.topics.hernia')}</Link></li>
              </ul>
            </aside>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="eyebrow">{t('home.contact.eyebrow')}</div>
              <h2>{t('home.contact.title')}</h2>
              <Link className="view-all" to="/contact">{t('common.fullContact')}</Link>
            </div>
            <div className="contact-grid">
              <ul className="contact-list reveal">
                <li>
                  <span className="ic">☎</span>
                  <span><strong>{t('common.phone')}</strong><br /><a href="tel:+85228613777">+852 2861 3777</a></span>
                </li>
                <li>
                  <span className="ic">✆</span>
                  <span><strong>{t('common.whatsapp')}</strong><br /><a href="https://wa.me/+85297423389">+852 9742 3389</a></span>
                </li>
                <li>
                  <span className="ic">✉</span>
                  <span><strong>{t('common.email')}</strong><br /><a href="mailto:info@hnhmgl.com">info@hnhmgl.com</a></span>
                </li>
                <li>
                  <span className="ic">⌖</span>
                  <span><strong>{t('contact.details.address')}</strong><br />{t('contact.details.addressLine')}, {t('contact.details.addressCity')}</span>
                </li>
              </ul>
              <div className="hours reveal">
                <h3 style={{ fontFamily: "'Fraunces',serif", color: 'var(--orange-deep)', marginBottom: '14px' }}>{t('home.contact.hours')}</h3>
                <table>
                  <tbody>
                    <tr><td>{t('home.contact.monFri')}</td><td>{t('home.contact.monFriHours')}</td></tr>
                    <tr><td>{t('home.contact.sat')}</td><td>{t('home.contact.satHours')}</td></tr>
                    <tr className="closed"><td>{t('home.contact.sunPh')}</td><td>{t('home.contact.closed')}</td></tr>
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
