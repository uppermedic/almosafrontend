import React from 'react';
import { i18n, withTranslation } from 'root/i18n';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/About/OurHistory';
import { fetchData } from 'src/store/Request.js';

const History = ({ data, t }) => {
  const { language } = i18n;
  return (
    <div className="our-history-page">
      <Head data={data.page.seo}></Head>
      <Hero bg={data.page.page_cover}>
        <div className="hero-content">
          <h1 className="title">{t('menu:history')}</h1>
        </div>
      </Hero>
      <Content histories={data.data} />
    </div>
  );
};

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/history');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}

export default withTranslation(['menu'])(History);
