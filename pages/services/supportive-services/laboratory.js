import React from 'react';
import Head from 'src/components/layout/head';
import Content from 'src/components/Services/support-services/laboratory';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Laboratory = () => {
  const seo = {
    ar: {
      title: 'الخدمات المساندة',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Laboratory',
      meta_description: 'meta',
      meta_keywords: '',
      url: '' 
    }
  };
  return (
    <div className="laboratory">
      <Head data={seo}></Head>
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


export default Laboratory; 
