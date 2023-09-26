import React from 'react';
import Head from 'src/components/layout/head';
import Content from 'src/components/Services/support-services/operation-rooms';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const OperationRooms = () => {
  const seo = {
    ar: {
      title: 'غرف العمليات',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Operation Rooms',
      meta_description: 'meta',
      meta_keywords: '', 
      url: ''
    }
  };
  return (
    <div className="operation-rooms">
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

export default OperationRooms;
