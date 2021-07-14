import React from 'react';
import { withTranslation } from 'root/i18n';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Awards from 'src/components/why-us/awards';

const Awards_accreditation = ({ t }) => {
  const seo = {
    ar: {
      title: 'الجوائز والاعتمادات',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Awards & Accreditations',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="awards_accreditation">
      <Head data={seo}></Head>
      <Hero>
        <img
          src="/images/about/hero-bg.png"
          alt="hero-cover"
          className="hero-cover"
        />
        <div className="hero-content">
          <h2 className="title">{t('menu:awards')}</h2>
        </div>
      </Hero>
      <Awards />
    </div>
  );
};
export default withTranslation(['menu'])(Awards_accreditation);
