import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="wrap">
        <div>
          <div className="zh">天下仁心醫療集團</div>
          <div className="en">Humanity and Health Medical Centre</div>
          <div className="lic">{t('footer.licence')}</div>
        </div>
        <Link className="btn" to="/contact">{t('footer.cta')}</Link>
      </div>
    </footer>
  );
}
