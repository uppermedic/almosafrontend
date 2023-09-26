import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Academicpage from 'components/training/academicpage';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const AcademicTraning = ({ academicData, academicTeam }) => {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && academicData.page?.seo[locale]?.title;

  return (
    <div className="training-education">
      <Head data={academicData.page.seo}></Head>
      <Hero bg={academicData.page?.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <Academicpage academicTeam={academicTeam} data={academicData?.contents} />
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  let { error: error1, data: academicData } = await fetchData('/page/17');
  let { error: error2, data: academicTeam } = await fetchData(
    '/education/academic/team'
  );

  if (error1 || error2) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      academicData,
      academicTeam,
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

export default AcademicTraning;
