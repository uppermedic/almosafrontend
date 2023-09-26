import React from 'react';
import Regisiter from 'src/components/training/register';
import Head from 'src/components/layout/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const register = () => {
  const head_data = {
    ar: {
      title: 'التسجيل',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Register',
      meta_description: 'meta',
      meta_keywords: '', 
      url: ''
    }
  };
  return (
    <div>
      <Head data={head_data}></Head>
      <Regisiter />
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

export default register;
 