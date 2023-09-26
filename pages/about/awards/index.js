import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Awards from 'src/components/why-us/awards';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const AwardsAccreditation = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data.page?.seo[locale]?.title;

  return (
    <div className="awards_accreditation">
      <Head data={data.page.seo}></Head>
      <Hero bg={data.page?.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <Awards contentData={data?.contents} />
    </div>
  );
};

export async function getServerSideProps({locale}) {
  let { error, data } = await fetchData('/page/19');
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

export default AwardsAccreditation;
