import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import ForVisitors from 'src/components/PatientGuide/For-Visitors';
import { withTranslation, i18n } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';

const services = ({ data }) => {
  const lang = i18n.language;
  const titleHero = lang && data.page?.seo[lang]?.title;

  return (
    <div className="for-visitors">
      <Head data={data.page.seo}></Head>
      <Hero bg={data.page?.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <ForVisitors contentData={data?.contents} />
    </div>
  );
};

export async function getServerSideProps() {
  let { error, data } = await fetchData('/page/15');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}

export default withTranslation(['menu'])(services);
