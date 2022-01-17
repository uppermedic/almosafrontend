import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import i18n from 'root/i18n';
import Content from 'src/components/Privacy';
import { withTranslation } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';

const index = ({ data }) => {
  const lang = i18n.language;
  const titleHero = lang && data.page?.seo[lang]?.title;

  return (
    <div className="privacy">
      <Head data={data.page.seo}></Head>
      <Hero bg={data.page?.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <Content contentData={data?.contents} />
    </div>
  );
};

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/page/28');
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
