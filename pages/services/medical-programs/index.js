import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import MedicalPrograms from 'src/components/Services/medical-programs';
import { fetchData } from 'src/store/Request.js';
import { withTranslation } from 'root/i18n';

const MedicalCenters = ({ t, data }) => {
  return (
    <div className="medical-programs">
      <Head data={data.seo}></Head>
      <Hero bg={data.page_cover}>
        <div className="hero-content">
          <h2 className="title">{t('menu:medical programs')}</h2>
        </div>
      </Hero>
      <MedicalPrograms data={data.services} />
    </div>
  );
};

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/services/1');
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
