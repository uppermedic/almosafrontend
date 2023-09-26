import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Community from 'src/components/Community';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function index({ data }) {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data.page?.seo[locale]?.title;

  return (
    <div className="community">
      <Head data={data.page.seo}></Head>
      <Hero bg={data.page.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero} </h1>
        </div>
      </Hero>
      <Community data={data.communities} />
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  let { error, data } = await fetchData('/community');
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
