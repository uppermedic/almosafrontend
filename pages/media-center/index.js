import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import MediaCenter from 'src/components/MediaCenter';
import { fetchData } from 'src/store/Request.js';
import { withTranslation, i18n } from 'root/i18n';

const Media = ({ data, t }) => {
  const { language } = i18n;
  return (
    <div className="media-center">
      <Head data={data.page.seo}></Head>
      <Hero>
        <img
          src={data.page.page_cover}
          alt="hero-cover"
          className="hero-cover"
        />
        <div className="hero-content">
          <h2 className="title">{language && data.page.seo[language].title}</h2>
        </div>
      </Hero>
      <MediaCenter />
    </div>
  );
};

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/media');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}

export default withTranslation(['menu'])(Media);
