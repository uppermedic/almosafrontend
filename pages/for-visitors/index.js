import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import ForVisitors from 'src/components/PatientGuide/For-Visitors';
import { withTranslation } from 'root/i18n';

const services = ({ t }) => {
  const seo = {
    ar: {
      title: 'للزوار',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'For Visitors',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="for-visitors">
      <Head data={seo}></Head>
      <Hero>
        <img
          src="/images/patient-guide/for_visitors/hero.png"
          alt="hero-cover"
          className="hero-cover"
        />
        <div className="hero-content">
          <h2 className="title">{t('menu:for visitors')}</h2>
        </div>
      </Hero>
      <ForVisitors />
    </div>
  );
};

export default withTranslation(['menu'])(services);
