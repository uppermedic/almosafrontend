import React from 'react';
import Head from 'src/components/layout/head';
import { i18n, withTranslation } from 'root/i18n';
import Content from 'src/components/Services/Nursing';
import Hero from 'src/components/layout/Hero';
import { fetchData } from 'src/store/Request.js';

const index = ({ t, data }) => {
  const lang = i18n.language;
  const titleHero = lang && data?.seo[lang]?.title;

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

export async function getServerSideProps() {
  let { error, data } = await fetchData('/services/6');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}

export default withTranslation(['menu'])(index);
