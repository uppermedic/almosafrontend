import React from 'react';
import { withTranslation } from 'root/i18n';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import OverviewComp from 'src/components/why-us/overview';

const Overview = ({ t }) => {
  const seo = {
    ar: {
      title: 'لمحة عن المستشفى',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Overview',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="overview">
      <Head data={seo}></Head>
      <Hero bg="/images/about/hero-bg.jpg">
        <div className="hero-content">
          <h1 className="title">{t('menu:overview')}</h1>
        </div>
      </Hero>
      <OverviewComp />
    </div>
  );
};
export default withTranslation(['menu'])(Overview);
