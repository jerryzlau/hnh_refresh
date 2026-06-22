import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks/useReveal';
import PageHero from '../components/PageHero';

export default function HealthEducation() {
  useReveal();
  const { t } = useTranslation();
  return (
    <main>
      <PageHero
        breadcrumb={[{ label: t('common.home'), href: '/' }, { label: t('nav.healthEd') }]}
        eyebrow={t('healthEd.hero.eyebrow')}
        title={t('healthEd.hero.title')}
        lead={t('healthEd.hero.lead')}
      />

      {/* TOPIC CARDS */}
      <section style={{ padding: '72px 0' }}>
        <div className="wrap">
          <div className="edu-grid">
            <a className="edu-card reveal" href="#health-checks">
              <div className="ic">🩺</div>
              <h3>{t('healthEd.topics.checks')}</h3>
              <p>{t('healthEd.checks.p1')}</p>
              <span className="go">{t('common.learnMore')}</span>
            </a>
            <a className="edu-card reveal" href="#vaccination">
              <div className="ic">💉</div>
              <h3>{t('healthEd.topics.vaccination')}</h3>
              <p>{t('healthEd.vaccination.p1')}</p>
              <span className="go">{t('common.learnMore')}</span>
            </a>
            <a className="edu-card reveal" href="#hepb">
              <div className="ic">🔬</div>
              <h3>{t('healthEd.topics.hepb')}</h3>
              <p>{t('healthEd.hepb.p1')}</p>
              <span className="go">{t('common.learnMore')}</span>
            </a>
            <a className="edu-card reveal" href="#hepc">
              <div className="ic">🧬</div>
              <h3>{t('healthEd.topics.hepc')}</h3>
              <p>{t('healthEd.hepc.p1')}</p>
              <span className="go">{t('common.learnMore')}</span>
            </a>
            <a className="edu-card reveal" href="#colorectal">
              <div className="ic">🔎</div>
              <h3>{t('healthEd.topics.colorectal')}</h3>
              <p>{t('healthEd.colorectal.p1')}</p>
              <span className="go">{t('common.learnMore')}</span>
            </a>
            <a className="edu-card reveal" href="#hemorrhoids">
              <div className="ic">🏥</div>
              <h3>{t('healthEd.topics.hemorrhoids')}</h3>
              <p>{t('healthEd.hemorrhoids.p1')}</p>
              <span className="go">{t('common.learnMore')}</span>
            </a>
            <a className="edu-card reveal" href="#hernia">
              <div className="ic">⚕️</div>
              <h3>{t('healthEd.topics.hernia')}</h3>
              <p>{t('healthEd.hernia.p1')}</p>
              <span className="go">{t('common.learnMore')}</span>
            </a>
            <a className="edu-card reveal" href="#fatty-liver">
              <div className="ic">🫀</div>
              <h3>{t('healthEd.topics.fattyLiver')}</h3>
              <p>{t('healthEd.fattyLiver.p1')}</p>
              <span className="go">{t('common.learnMore')}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="alt" style={{ paddingTop: '72px', paddingBottom: '96px' }}>
        <div className="wrap">

          <div className="article reveal" id="health-checks">
            <div className="eyebrow">{t('healthEd.checks.eyebrow')}</div>
            <h2>{t('healthEd.checks.title')}</h2>
            <p>{t('healthEd.checks.p1')}</p>
            <p>{t('healthEd.checks.p2')}</p>
            <p>{t('healthEd.checks.p3')}</p>
            <div className="note">{t('common.getInTouch')}: <Link to="/contact">{t('common.makeAppt')}</Link> · <a href="tel:+85228613777">(852) 2861 3777</a></div>
          </div>

          <div className="article reveal" id="vaccination">
            <div className="eyebrow">{t('healthEd.vaccination.eyebrow')}</div>
            <h2>{t('healthEd.vaccination.title')}</h2>
            <p>{t('healthEd.vaccination.p1')}</p>
            <h3>{t('healthEd.vaccination.howTitle')}</h3>
            <p>{t('healthEd.vaccination.p2')}</p>
            <h3>{t('healthEd.vaccination.covidTitle')}</h3>
            <p>{t('healthEd.vaccination.p3')}</p>
            <div className="note">
              <strong>mRNA COVID-19 vaccine (toddler formulation available)</strong><br />
              Private Clinic COVID-19 Vaccination Station<br />
              CENTRAL — 9 Queen's Road Central, Room 1401–02, by Humanity &amp; Health Medical Centre<br />
              <a href="https://booking.covidvaccine.gov.hk/forms/index_tc.jsp" target="_blank" rel="noopener">Book via the Government system →</a>
            </div>
            <h3>{t('healthEd.vaccination.fluTitle')}</h3>
            <p>{t('healthEd.vaccination.p4')}</p>
            <h3>{t('healthEd.vaccination.sideTitle')}</h3>
            <p>{t('healthEd.vaccination.p5')}</p>
          </div>

          <div className="article reveal" id="hepb">
            <div className="eyebrow">{t('healthEd.hepb.eyebrow')}</div>
            <h2>{t('healthEd.hepb.title')}</h2>
            <p>{t('healthEd.hepb.p1')}</p>
            <h3>{t('healthEd.hepb.chronTitle')}</h3>
            <p>{t('healthEd.hepb.p2')}</p>
            <h3>{t('healthEd.hepb.antiviralTitle')}</h3>
            <p>{t('healthEd.hepb.p3')}</p>
            <h3>{t('healthEd.hepb.vaccTitle')}</h3>
            <p>{t('healthEd.hepb.p4')}</p>
            <div className="note"><Link to="/contact">{t('common.bookConsult')}</Link></div>
          </div>

          <div className="article reveal" id="hepc">
            <div className="eyebrow">{t('healthEd.hepc.eyebrow')}</div>
            <h2>{t('healthEd.hepc.title')}</h2>
            <p>{t('healthEd.hepc.p1')}</p>
            <h3>{t('healthEd.hepc.genoTitle')}</h3>
            <p>{t('healthEd.hepc.p2')}</p>
            <h3>{t('healthEd.hepc.noteTitle')}</h3>
            <p>{t('healthEd.hepc.p3')}</p>
            <div className="note"><Link to="/contact">{t('common.bookConsult')}</Link></div>
          </div>

          <div className="article reveal" id="colorectal">
            <div className="eyebrow">{t('healthEd.colorectal.eyebrow')}</div>
            <h2>{t('healthEd.colorectal.title')}</h2>
            <p>{t('healthEd.colorectal.p1')}</p>
            <h3>{t('healthEd.colorectal.screenTitle')}</h3>
            <p>{t('healthEd.colorectal.p2')}</p>
            <h3>{t('healthEd.colorectal.polypTitle')}</h3>
            <p>{t('healthEd.colorectal.p3')}</p>
            <div className="note"><Link to="/contact">{t('common.bookConsult')}</Link></div>
          </div>

          <div className="article reveal" id="hemorrhoids">
            <div className="eyebrow">{t('healthEd.hemorrhoids.eyebrow')}</div>
            <h2>{t('healthEd.hemorrhoids.title')}</h2>
            <p>{t('healthEd.hemorrhoids.p1')}</p>
            <h3>{t('healthEd.hemorrhoids.gradeTitle')}</h3>
            <p>{t('healthEd.hemorrhoids.p2')}</p>
            <h3>{t('healthEd.hemorrhoids.treatTitle')}</h3>
            <p>{t('healthEd.hemorrhoids.p3')}</p>
            <div className="note"><Link to="/contact">{t('common.bookConsult')}</Link></div>
          </div>

          <div className="article reveal" id="hernia">
            <div className="eyebrow">{t('healthEd.hernia.eyebrow')}</div>
            <h2>{t('healthEd.hernia.title')}</h2>
            <p>{t('healthEd.hernia.p1')}</p>
            <h3>{t('healthEd.hernia.emergTitle')}</h3>
            <p>{t('healthEd.hernia.p2')}</p>
            <h3>{t('healthEd.hernia.repairTitle')}</h3>
            <p>{t('healthEd.hernia.p3')}</p>
            <div className="note"><Link to="/contact">{t('common.bookConsult')}</Link></div>
          </div>

          <div className="article reveal" id="fatty-liver">
            <div className="eyebrow">{t('healthEd.fattyLiver.eyebrow')}</div>
            <h2>{t('healthEd.fattyLiver.title')}</h2>
            <p>{t('healthEd.fattyLiver.p1')}</p>
            <h3>{t('healthEd.fattyLiver.progTitle')}</h3>
            <p>{t('healthEd.fattyLiver.p2')}</p>
            <h3>{t('healthEd.fattyLiver.manageTitle')}</h3>
            <p>{t('healthEd.fattyLiver.p3')}</p>
            <div className="note"><Link to="/contact">{t('common.bookConsult')}</Link></div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: 'var(--orange-deep)', color: '#fff' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.6rem,2.8vw,2.2rem)', fontWeight: 500, margin: '0 0 12px' }}>{t('doctors.cta.title')}</h2>
          <p style={{ color: '#F1DDC4', maxWidth: '52ch', margin: '0 auto 28px' }}>{t('doctors.cta.body')}</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/contact" style={{ background: 'var(--cinnabar)' }}>{t('common.makeAppt')}</Link>
            <a className="btn ghost" href="tel:+85228613777" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>+852 2861 3777</a>
          </div>
        </div>
      </section>

    </main>
  );
}
