import React from 'react';
import Head from '../../../components/layout/head';
import Hero from '../../../components/layout/Hero';
import MedicalCentersComp from 'src/components/Services/medical-centers';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function MedicalCenters({ data }) {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data?.seo[locale]?.title;

  return (
    <div className="medical-centers">
      <Head data={data.seo || false}></Head>
      <Hero bg={data.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <MedicalCentersComp data={data.services} />
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  let { error, data } = await fetchData('/services/2');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      data,
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

export default MedicalCenters;
