import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import MediaCenter from 'src/components/MediaCenter';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Media = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data.page.seo[locale]?.title;
  return (
    <div className="media-center">
      <Head data={data.page.seo}></Head>
      <Hero bg={data.page.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <MediaCenter />
    </div>
  );
};

export async function getServerSideProps({locale}) {
  let { error, data } = await fetchData('/media');
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

export default Media;
