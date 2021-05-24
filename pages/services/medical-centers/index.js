import React from 'react';
import Head from '../../../components/layout/head';
import Hero from '../../../components/layout/Hero';
import MedicalCentersComp from 'src/components/Services/medical-centers';
import { fetchData } from 'src/store/Request.js';
import { withTranslation } from 'root/i18n';

function MedicalCenters({ t, data }) {
  return (
    <div className="medical-centers">
      <Head data={data.seo || false}></Head>
      <Hero>
        <img src={data.page_cover} alt="hero-cover" className="hero-cover" />
        <div className="hero-content">
          <h2 className="title">{t('menu:medical centers')}</h2>
        </div>
      </Hero>
      <MedicalCentersComp data={data.services} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/services/2');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
export default withTranslation(['menu'])(MedicalCenters);
