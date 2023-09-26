import React from 'react';
import Head from 'src/components/layout/head';
import Hero from '../../components/layout/Hero';
import ServicesContent from 'src/components/Services';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Services = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data.page?.seo[locale]?.title;

  if (data) {
    return (
      <div className="services">
        <Head data={data.page.seo}></Head>
        <Hero bg={data.page.page_cover}>
          <div className="hero-content">
            <h1 className="title">{titleHero}</h1>
          </div>
        </Hero>
        <ServicesContent data={data.categories} seo={data.page.seo} />
      </div>
    );
  } else {
    return 'Loading';
  }
};

export async function getServerSideProps({ locale }) {
  let { error, data } = await fetchData('/services');
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

export default Services;
