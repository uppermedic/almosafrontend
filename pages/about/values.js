import React from 'react';
import { withTranslation } from 'root/i18n';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import OurValues from 'src/components/About/Values';
import { fetchData } from 'src/store/Request.js';

const Values = ({ t, data }) => {
  return (
    <div className="values">
      <Head data={data.page.seo}></Head>
      <Hero bg={data.page.page_cover}>
        <div className="hero-content">
          <h1 className="title">{t('menu:core values')}</h1>
        </div>
      </Hero>
      <OurValues data={data} />
    </div>
  );
};

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/about');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}

export default withTranslation(['menu'])(Values);
