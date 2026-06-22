import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks/useReveal';
import { imgFb } from '../utils';
import PageHero from '../components/PageHero';

export default function Doctors() {
  useReveal();
  const { t } = useTranslation();
  return (
    <main>
      <PageHero
        breadcrumb={[{ label: t('common.home'), href: '/' }, { label: t('nav.doctors') }]}
        eyebrow={t('doctors.hero.eyebrow')}
        title={t('doctors.hero.title')}
        lead={t('doctors.hero.lead')}
      />

      {/* DOCTORS */}
      <section id="specialists">
        <div className="wrap">
          <div className="doc-grid full">

            <div className="doc full reveal" id="dr-george-lau">
              <img
                src="/assets/doc-george-lau.jpg"
                data-cdn="https://static.wixstatic.com/media/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg"
                data-cdn2="https://static.wixstatic.com/media/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg/v1/fill/w_122,h_79,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_54b5b9f3ccd04f8ca21026652aff4329~mv2.jpg"
                onError={e => imgFb(e.currentTarget)}
                alt="Dr George Lau"
                loading="lazy"
              />
              <div className="info">
                <h3>Dr George Lau</h3>
                <div className="spec">{t('doctors.george.spec')}</div>
                <div className="quals">MB BS (HK) · MRCP (UK) · FHKCP · MD (HK) · FRCP (Edin) · FRCP (Lond) · FHKAM (Medicine)</div>
                <p className="bio">{t('doctors.george.bio')}</p>
                <div className="contact">
                  <div><strong>{t('common.phone')}:</strong> <a href="tel:+85228613777">(852) 2861 3777</a></div>
                  <div><strong>{t('common.email')}:</strong> <a href="mailto:gkklau@hnhmgl.com">gkklau@hnhmgl.com</a></div>
                  <div><strong>{t('common.clinicalResearch')}:</strong> <Link to="/clinical-research">HNH Clinical Trial Centre</Link></div>
                </div>
              </div>
            </div>

            <div className="doc full reveal" id="dr-richard-choi">
              <img
                src="/assets/doc-richard-choi.jpg"
                data-cdn="https://static.wixstatic.com/media/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg"
                data-cdn2="https://static.wixstatic.com/media/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg/v1/fill/w_122,h_79,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_8bdd93b57d8e41e1b5705d2b632f07f0~mv2.jpg"
                onError={e => imgFb(e.currentTarget)}
                alt="Dr Richard Choi"
                loading="lazy"
              />
              <div className="info">
                <h3>Dr Richard Choi</h3>
                <div className="spec">{t('doctors.richard.spec')}</div>
                <div className="quals">MB BS (HK) · DPD (Wales) · FRACS · FRCS (Edin) · FCSHK · FHKAM (Surgery)</div>
                <p className="bio">{t('doctors.richard.bio')}</p>
                <div className="contact">
                  <div><strong>{t('common.phone')}:</strong> <a href="tel:+85293498851">(852) 9349 8851</a></div>
                  <div><strong>{t('common.whatsapp')}:</strong> <a href="https://wa.me/85293498851">+852 9349 8851</a></div>
                </div>
              </div>
            </div>

            <div className="doc full reveal" id="dr-patrick-lau">
              <img
                src="/assets/doc-patrick-lau.jpg"
                data-cdn="https://static.wixstatic.com/media/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg"
                data-cdn2="https://static.wixstatic.com/media/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg/v1/fill/w_122,h_76,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_4a31d9482e454378898b131b8c485ad6~mv2.jpg"
                onError={e => imgFb(e.currentTarget)}
                alt="Dr Patrick Lau"
                loading="lazy"
              />
              <div className="info">
                <h3>Dr Patrick Lau</h3>
                <div className="spec">{t('doctors.patrick.spec')}</div>
                <div className="quals">MB BChir (Cambridge) · MRCP (UK) · FRCP (Glasg) · FRCP (Edin) · FRCP (Lond) · FHKCP · FHKAM</div>
                <p className="bio">{t('doctors.patrick.bio')}</p>
                <div className="contact">
                  <div><strong>{t('common.phone')}:</strong> <a href="tel:+85228613777">(852) 2861 3777</a></div>
                  <div><strong>{t('common.email')}:</strong> <a href="mailto:drpatrick.lau@hnhmgl.com">drpatrick.lau@hnhmgl.com</a></div>
                </div>
              </div>
            </div>

            <div className="doc full reveal" id="dr-jane-chan">
              <img
                src="/assets/doc-jane-chan.jpg"
                data-cdn="https://static.wixstatic.com/media/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg"
                data-cdn2="https://static.wixstatic.com/media/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg/v1/fill/w_129,h_87,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/379045_60df67c157eb4749a0b9fe7736b95b3a~mv2.jpg"
                onError={e => imgFb(e.currentTarget)}
                alt="Dr Chan Chun Kwong, Jane"
                loading="lazy"
              />
              <div className="info">
                <h3>Dr Chan Chun Kwong, Jane</h3>
                <div className="spec">{t('doctors.jane.spec')}</div>
                <div className="quals">LMCHK · MD (Chicago USA) · DABIM · FHKCP · FHKAM (Medicine) · DABIM (Pulmonary D) · DABIM (Critical Care Med) · FRCP (Edin) · PDipID (HK)</div>
                <p className="bio">{t('doctors.jane.bio')}</p>
                <div className="contact">
                  <div><strong>{t('common.phone')}:</strong> <a href="tel:+85228613777">(852) 2861 3777</a></div>
                </div>
              </div>
            </div>

          </div>

          <div className="honorary reveal">{t('doctors.honorary')}</div>
        </div>
      </section>

      {/* NURSING & SUPPORT */}
      <section className="alt">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">{t('doctors.team.eyebrow')}</div>
            <h2>{t('doctors.team.title')}</h2>
            <p>{t('doctors.team.body')}</p>
          </div>
          <div className="svc-grid" style={{ maxWidth: '800px' }}>
            <div className="svc reveal" style={{ gap: '10px' }}>
              <div style={{ fontSize: '1.6rem' }}>🩺</div>
              <h3>{t('doctors.nurses.title')}</h3>
              <p>{t('doctors.nurses.body')}</p>
            </div>
            <div className="svc reveal" style={{ gap: '10px' }}>
              <div style={{ fontSize: '1.6rem' }}>🔬</div>
              <h3>{t('doctors.lab.title')}</h3>
              <p>{t('doctors.lab.body')}</p>
            </div>
            <div className="svc reveal" style={{ gap: '10px' }}>
              <div style={{ fontSize: '1.6rem' }}>📋</div>
              <h3>{t('doctors.coordinators.title')}</h3>
              <p>{t('doctors.coordinators.body')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: 'var(--orange-deep)', color: '#fff' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: '#FFD0A6', marginBottom: 0 }}>{t('doctors.cta.eyebrow')}</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.6rem,2.8vw,2.2rem)', fontWeight: 500, margin: '16px 0 12px' }}>{t('doctors.cta.title')}</h2>
          <p style={{ color: '#F1DDC4', maxWidth: '50ch', margin: '0 auto 28px' }}>{t('doctors.cta.body')}</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/contact" style={{ background: 'var(--cinnabar)' }}>{t('common.makeAppt')}</Link>
            <a className="btn ghost" href="tel:+85228613777" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>+852 2861 3777</a>
          </div>
        </div>
      </section>

    </main>
  );
}
