import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Topbar() {
  const { t } = useTranslation();
  return (
    <div className="topbar">
      <div className="wrap">
        <span>{t('topbar.hours')}</span>
        <span>{t('topbar.reservations')}: <a href="tel:+85228613777">+852 2861 3777</a></span>
        <span className="lic">Day Medical Centre Licence No. DP000128</span>
      </div>
    </div>
  );
}
