import React from 'react';
import { withTranslation } from 'root/i18n';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import OurValues from 'src/components/About/Values';
import { fetchData } from 'src/store/Request.js';

const Values = ({ t, data }) => {
  const seo = {
    ar: {
      title: 'قيمنا',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Our Values',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="values">
      <Head data={seo}></Head>
      <Hero>
        <div className="banner-overlay"></div>

        <img
          src={data.page.page_cover}
          alt="hero-cover"
          className="hero-cover"
        />
        <div className="hero-content">
          <h2>{t('menu:core values')}</h2>
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
