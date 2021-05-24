import React from 'react';
import Head from 'src/components/layout/head';
import Hero from '../../components/layout/Hero';
import ServicesContent from 'src/components/Services';
import { i18n } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';

const Services = ({ data }) => {
  const { language } = i18n;

  if (data) {
    return (
      <div className="services">
        <Head data={data.page.seo}></Head>
        <Hero>
          <img
            src={data.page.page_cover}
            alt="hero-cover"
            className="hero-cover"
          />
          <div className="hero-content">
            <h2 className="title">{data && data.page.seo[language]?.title}</h2>
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
