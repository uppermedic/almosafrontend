import React from 'react';
import { withTranslation } from 'root/i18n';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import MedicalGroup from 'src/components/About/MedicalGroup';

const FutureProjects = ({ t }) => {
  const seo = {
    ar: {
      title: 'مجموعة الموسى الطبية',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Almoosa Medical Group',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="almoosa-medical-group">
      <Head data={seo}></Head>
      <Hero bg="/images/about/hero-bg.png">
        <div className="hero-content">
          <h2 className="title">{t('menu:almoosa medical group')}</h2>
        </div>
      </Hero>
      <MedicalGroup />
    </div>
  );
};

export default withTranslation(['menu'])(FutureProjects);
