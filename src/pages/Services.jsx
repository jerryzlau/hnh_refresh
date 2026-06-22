import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks/useReveal';
import { imgFb } from '../utils';
import PageHero from '../components/PageHero';

export default function Services() {
  useReveal();
  const { t } = useTranslation();
  return (
    <main>
      <PageHero
        breadcrumb={[{ label: t('common.home'), href: '/' }, { label: t('nav.services') }]}
        eyebrow={t('services.hero.eyebrow')}
        title={t('services.hero.title')}
        lead={t('services.hero.lead')}
      />

      {/* LIVER HEALTH */}
      <section id="liver-health">
        <div className="wrap">
          <div className="cat-label reveal">{t('services.liverHealth')}</div>
          <div className="svc-grid">

            <div className="svc expanded reveal" id="hepb">
              <img src="/assets/svc-hepb.jpg" data-cdn="https://static.wixstatic.com/media/11062b_d74a331a352b46dea8e1687d01ab8a78~mv2.jpeg/v1/crop/x_1120,y_0,w_4480,h_4480/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E9%86%AB%E7%99%82%E9%9A%8A.jpeg" onError={e => imgFb(e.currentTarget)} alt="Medical team" loading="lazy" />
              <h3>{t('services.hepb.title')}</h3>
              <p>{t('services.hepb.body')}</p>
              <ul>{t('services.hepb.items', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}</ul>
              <Link className="more" to="/contact">{t('common.bookConsult')}</Link>
            </div>

            <div className="svc expanded reveal" id="hepc">
              <img src="/assets/svc-hepc.jpg" data-cdn="https://static.wixstatic.com/media/ea997dc9475841f2a7709e8098764f30.jpg/v1/crop/x_128,y_0,w_2671,h_2671/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E5%8F%8B%E5%A5%BD%E5%B9%B4%E8%BC%95%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Friendly young doctor" loading="lazy" />
              <h3>{t('services.hepc.title')}</h3>
              <p>{t('services.hepc.body')}</p>
              <ul>{t('services.hepc.items', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}</ul>
              <Link className="more" to="/contact">{t('common.bookConsult')}</Link>
            </div>

            <div className="svc expanded reveal" id="fibrosis">
              <img src="/assets/svc-fibrosis.jpg" data-cdn="https://static.wixstatic.com/media/11062b_aa6818fb704a4824a6607192ae95da67~mv2.jpeg/v1/crop/x_1000,y_0,w_4000,h_4000/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E9%86%AB%E7%94%9F%E5%92%8C%E7%97%85%E4%BA%BA.jpeg" onError={e => imgFb(e.currentTarget)} alt="Doctor with patient" loading="lazy" />
              <h3>{t('services.fibrosis.title')}</h3>
              <p>{t('services.fibrosis.body')}</p>
              <ul>{t('services.fibrosis.items', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}</ul>
              <Link className="more" to="/contact">{t('common.bookConsult')}</Link>
            </div>

            <div className="svc expanded reveal" id="liver-cancer">
              <img src="/assets/svc-cancer.jpg" data-cdn="https://static.wixstatic.com/media/11062b_2670f3edbdaf4e3386e49f3274bb96e3~mv2.jpg/v1/crop/x_690,y_0,w_3570,h_3570/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%94%AF%E6%8C%81%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Supporting doctors" loading="lazy" />
              <h3>{t('services.liverCancer.title')}</h3>
              <p>{t('services.liverCancer.body')}</p>
              <ul>{t('services.liverCancer.items', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}</ul>
              <Link className="more" to="/contact">{t('common.bookConsult')}</Link>
            </div>

            <div className="svc expanded reveal" id="fatty-liver">
              <img src="/assets/svc-consult.jpg" data-cdn="https://static.wixstatic.com/media/11062b_4db9398f08b34877b8d7735d43d4957b~mv2.jpg/v1/crop/x_834,y_0,w_3333,h_3333/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E7%B6%B2%E4%B8%8A%E9%86%AB%E7%99%82%E9%A1%A7%E5%95%8F.jpg" onError={e => imgFb(e.currentTarget)} alt="Medical consultant" loading="lazy" />
              <h3>{t('services.fattyLiver.title')}</h3>
              <p>{t('services.fattyLiver.body')}</p>
              <ul>{t('services.fattyLiver.items', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}</ul>
              <Link className="more" to="/contact">{t('common.bookConsult')}</Link>
            </div>

          </div>
        </div>
      </section>

      {/* GASTROENTEROLOGY */}
      <section className="alt" id="gastro">
        <div className="wrap">
          <div className="cat-label reveal">{t('services.gastro')}</div>
          <div className="svc-grid">

            <div className="svc expanded reveal" id="gastroscopy">
              <img src="/assets/svc-gastro.jpg" data-cdn="https://static.wixstatic.com/media/11062b_4ebfd43bcda34322a29ca6f1c23eff76~mv2_d_5100_3399_s_4_2.jpg/v1/crop/x_851,y_0,w_3399,h_3399/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%89%8B%E8%A1%93%E5%AE%A4%E7%9A%84%E5%A4%96%E7%A7%91%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Surgeon in operating room" loading="lazy" />
              <h3>{t('services.gastroscopy.title')}</h3>
              <p>{t('services.gastroscopy.body')}</p>
              <ul>{t('services.gastroscopy.items', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}</ul>
              <Link className="more" to="/contact">{t('common.bookConsult')}</Link>
            </div>

            <div className="svc expanded reveal" id="colonoscopy">
              <img src="/assets/svc-consult.jpg" data-cdn="https://static.wixstatic.com/media/11062b_4db9398f08b34877b8d7735d43d4957b~mv2.jpg/v1/crop/x_834,y_0,w_3333,h_3333/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E7%B6%B2%E4%B8%8A%E9%86%AB%E7%99%82%E9%A1%A7%E5%95%8F.jpg" onError={e => imgFb(e.currentTarget)} alt="Colonoscopy consultation" loading="lazy" />
              <h3>{t('services.colonoscopy.title')}</h3>
              <p>{t('services.colonoscopy.body')}</p>
              <ul>{t('services.colonoscopy.items', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}</ul>
              <Link className="more" to="/contact">{t('common.bookConsult')}</Link>
            </div>

          </div>
        </div>
      </section>

      {/* SURGICAL SERVICES */}
      <section id="surgery">
        <div className="wrap">
          <div className="cat-label reveal">{t('services.surgery')}</div>
          <div className="svc-grid">

            <div className="svc expanded reveal" id="hemorrhoids">
              <img src="/assets/svc-hemorrhoid.jpg" data-cdn="https://static.wixstatic.com/media/11062b_ebed553b419a414fadd847af8f58f23f~mv2_d_8660_5773_s_4_2.jpg/v1/crop/x_1444,y_0,w_5773,h_5773/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%89%8B%E8%A1%93%E6%9C%9F%E9%96%93%E7%9A%84%E5%A4%96%E7%A7%91%E9%86%AB%E7%94%9F.jpg" onError={e => imgFb(e.currentTarget)} alt="Surgeon during surgery" loading="lazy" />
              <h3>{t('services.hemorrhoids.title')}</h3>
              <p>{t('services.hemorrhoids.body')}</p>
              <ul>{t('services.hemorrhoids.items', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}</ul>
              <Link className="more" to="/contact">{t('common.bookConsult')}</Link>
            </div>

            <div className="svc expanded reveal" id="hernia">
              <img src="/assets/svc-surgery.jpg" data-cdn="https://static.wixstatic.com/media/04b70ad4e4af4a9290c1769bf2b63030.jpg/v1/crop/x_854,y_0,w_3414,h_3414/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%89%8B%E8%A1%93.jpg" onError={e => imgFb(e.currentTarget)} alt="Operation in progress" loading="lazy" />
              <h3>{t('services.hernia.title')}</h3>
              <p>{t('services.hernia.body')}</p>
              <ul>{t('services.hernia.items', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}</ul>
              <Link className="more" to="/contact">{t('common.bookConsult')}</Link>
            </div>

          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="alt" id="equipment">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">{t('services.equipment')}</div>
            <h2>{t('services.equipSection.title')}</h2>
            <p>{t('services.equipSection.lead')}</p>
          </div>
          <div className="equip">
            <div className="text reveal">
              <h3>{t('services.equipSection.endoscopy.title')}</h3>
              <p>{t('services.equipSection.endoscopy.body')}</p>
              <h3>{t('services.equipSection.fibroscan.title')}</h3>
              <p>{t('services.equipSection.fibroscan.body')}</p>
              <h3>{t('services.equipSection.bowa.title')}</h3>
              <p>{t('services.equipSection.bowa.body')}</p>
              <h3>{t('services.equipSection.lab.title')}</h3>
              <p>{t('services.equipSection.lab.body')}</p>
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
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.6rem,2.8vw,2.2rem)', fontWeight: 500, margin: '0 0 12px' }}>{t('services.cta.title')}</h2>
          <p style={{ color: '#F1DDC4', maxWidth: '50ch', margin: '0 auto 28px' }}>{t('services.cta.body')}</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/contact" style={{ background: 'var(--cinnabar)' }}>{t('common.makeAppt')}</Link>
            <a className="btn ghost" href="tel:+85228613777" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>+852 2861 3777</a>
          </div>
        </div>
      </section>

    </main>
  );
}
