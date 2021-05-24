import React from 'react';
import Head from 'src/components/layout/head';
import i18n from 'root/i18n';
import Content from 'src/components/Privacy';

const index = () => {
  const { language } = i18n;
  const seo = {
    ar: {
      title: 'سياسة الخصوصية',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Privacy Policy',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="privacy">
      <Head data={seo}></Head>
      <Content />
    </div>
  );
};

export default index;
