import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import ForPatients from 'src/components/PatientGuide/For-Patients';
import { withTranslation, i18n } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';

const services = ({ data }) => {
  const lang = i18n.language;
  const titleHero = lang && data.page?.seo[lang]?.title;

  return (
    <div className="for-patients">
      <Head data={data.page.seo}></Head>
      <Hero bg={data.page?.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <ForPatients contentData={data?.contents} />
    </div>
  );
};

export async function getServerSideProps() {
  let { error, data } = await fetchData('/page/14');
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
