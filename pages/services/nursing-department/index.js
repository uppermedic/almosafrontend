import React from 'react';
import Head from 'src/components/layout/head';
import Content from 'src/components/Services/Nursing';
import Hero from 'src/components/layout/Hero';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data?.seo[locale]?.title;

  return (
    <div className="nursing-department">
      <Head data={data.seo} />
      <Hero bg={data.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <Content data={data?.services[0]} />
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  let { error, data } = await fetchData('/services/6');
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

export default Index;
