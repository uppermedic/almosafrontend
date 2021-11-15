import React from 'react';
import Head from 'src/components/layout/head';
import { i18n, withTranslation } from 'root/i18n';
import Content from 'src/components/Services/Nursing';
import Hero from 'src/components/layout/Hero';

const index = ({ t }) => {
  const { language } = i18n;
  const seo = {
    ar: {
      title: 'قسم التمريض',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Nursing Department',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="nursing-department">
      <Head data={seo} />
      <Hero bg="/images/services/nursing.png">
        <div className="hero-content">
          <h1 className="title">{t('menu:nursing department')}</h1>
        </div>
      </Hero>
      <Content />
    </div>
  );
};

export default withTranslation(['menu'])(index);
