import React from 'react';
import Head from 'src/components/layout/head';
import Hero from '../../components/layout/Hero';
import ServicesContent from 'src/components/Services';
import { i18n } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';

const Services = ({ data }) => {
  const { language } = i18n;
  const lang = i18n.language;
  const titleHero = lang && data.page?.seo[lang]?.title;

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

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/services');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}

export default Services;
