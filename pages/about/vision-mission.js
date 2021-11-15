import React from 'react';
import { withTranslation } from 'root/i18n';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import VisionAndMessage from 'src/components/About/VisionMessage';
import { fetchData } from 'src/store/Request.js';

const VisionMessage = ({ t, data }) => {
  const seo = {
    ar: {
      title: 'الرؤية والرسالة',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Vision and Mission',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="vision-mission">
      <Head data={seo}></Head>
      <Hero bg={data.page.page_cover}>
        <div className="hero-content">
          <h1 className="title">{t('menu:vision and mission')}</h1>
        </div>
      </Hero>
      <VisionAndMessage data={data} />
    </div>
  );
};

export default withTranslation(['menu'])(VisionMessage);

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
