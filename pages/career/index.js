import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/Career';
import { withTranslation } from 'root/i18n';

const index = ({ t }) => {
  const seo = {
    ar: {
      title: 'وظائف',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Career',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="career">
      <Head data={seo} />
      <Hero bg="/images/about/hero-bg.jpg">
        <div className="hero-content">
          <h1 className="title">{t('common:career')}</h1>
        </div>
      </Hero>
      <Content />
    </div>
  );
};

export default withTranslation(['common'])(index);
