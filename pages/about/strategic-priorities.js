import React from 'react';
import { withTranslation } from 'root/i18n';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import StrategicGoals from 'src/components/About/StrategicGoals';

const FutureProjects = ({ t }) => {
  const seo = {
    ar: {
      title: 'أهدافنا الإستراتيجية',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Strategic Priorities',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="strategic-goals">
      <Head data={seo}></Head>
      <Hero>
        <img
          src="/images/about/hero-bg.png"
          alt="hero-cover"
          className="hero-cover"
        />
        <div className="hero-content">
          <h2>{t('menu:strategic priorities')}</h2>
        </div>
      </Hero>
      <StrategicGoals />
    </div>
  );
};

export default withTranslation(['menu'])(FutureProjects);
