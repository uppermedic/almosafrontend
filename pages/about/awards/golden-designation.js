import React from 'react';
import { withTranslation, i18n } from 'root/i18n';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import GoldenDesignation from 'src/components/why-us/awards/GoldenDesignation';
import { fetchData } from 'src/store/Request.js';

const golden_designation = ({ data }) => {
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
      <GoldenDesignation contentData={data?.contents} />
    </div>
  );
};

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/page/27');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
export default withTranslation(['menu'])(golden_designation);
