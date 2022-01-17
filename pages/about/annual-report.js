import React from 'react';
import { withTranslation, i18n } from 'root/i18n';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import AnnualReport from 'src/components/About/AboutContentPages';
import { fetchData } from 'src/store/Request.js';

const Values = ({ data }) => {
  const lang = i18n.language;
  const titleHero = lang && data.page?.seo[lang]?.title;

  return (
    <div className="about-page">
      <Head data={data.page.seo}></Head>
      <Hero bg={data.page?.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <AnnualReport contentData={data?.contents} sideTabIndex={9} />
    </div>
  );
};

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/page/26');
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
