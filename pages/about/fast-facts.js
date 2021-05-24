import React from 'react';
import Head from 'src/components/layout/head';
import { i18n, withTranslation } from 'root/i18n';
import Content from 'src/components/About/FastFacts';
import Hero from 'src/components/layout/Hero';

const index = ({ t }) => {
  const { language } = i18n;
  const seo = {
    ar: {
      title: 'حقائق سريعة',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Fast Facts',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="fast-facts">
      <Head data={seo}></Head>
      <Hero>
        <img
          src="/images/about/hero-bg.png"
          alt="hero-cover"
          className="hero-cover"
        />
        <div className="hero-content">
          <h2>{t('menu:fast facts')}</h2>
        </div>
      </Hero>
      <Content />
    </div>
  );
};

export default withTranslation(['menu'])(index);
