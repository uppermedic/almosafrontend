import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/Career';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index = () => {
  const { t } = useTranslation('common');
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'about',
        'news',
        'menu',
        'header',
        'footer',
        'patient_guide'
      ]))
    }
  };
}

export default Index;
