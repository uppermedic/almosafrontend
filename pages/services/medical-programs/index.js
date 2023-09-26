import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import MedicalPrograms from 'src/components/Services/medical-programs';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const MedicalCenters = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data?.seo[locale]?.title;

  return (
    <div className="medical-programs">
      <Head data={data.seo}></Head>
      <Hero bg={data.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <MedicalPrograms data={data.services} />
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  let { error, data } = await fetchData('/services/1');
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
