import React, { useEffect } from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import SupportServices from 'src/components/Services/support-services';
import { fetchData } from 'src/store/Request.js';
import { withTranslation } from 'root/i18n';
import { useRouter } from 'next/router';

function Supportive({ t, services, servicesDataSingle }) {
  const router = useRouter();

  const seo = {
    ar: {
      title: 'الخدمات المساندة',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Support Services',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };

  // useEffect(() => {
  //   router.push(`/services/supportive-services?id=${services.services[0].id}`);
  //   return () => {};
  // }, []);

  return (
    <div className="support-services">
      <Head data={seo}></Head>
      <Hero>
        <img
          src={services.page_cover}
          alt="hero-cover"
          className="hero-cover"
        />
        <div className="hero-content">
          <h2 className="title">{t('menu:supportive services')}</h2>
        </div>
      </Hero>
      <SupportServices
        dataSectionTabs={services}
        dataSectionContent={servicesDataSingle}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  // const tst = Promise.all([
  //   fetchData('/services/5'),
  //   fetchData(`/services/single/${context.query.id ? context.query.id : 43}`)
  // ]).then(
  //   ([
  //     { error: error1, data: services },
  //     { error: error2, data: servicesDataSingle }
  //   ]) => {
  //     if (error1 || error2) {
  //       return {
  //         notFound: true
  //       };
  //     }
  //     return {
  //       props: {
  //         services,
  //         servicesDataSingle
  //       }
  //     };
  //   }
  // );
  // return tst;
  let { error: error1, data: services } = await fetchData('/services/5');
  let { error: error2, data: servicesDataSingle } = await fetchData(
    `/services/single/${
      context.query.id ? context.query.id : services.services[0].id
    }`
  );

  if (error1 || error2) {
    return {
      notFound: true
    };
  }
  return {
    props: { services, servicesDataSingle }
  };
}
export default withTranslation(['menu'])(Supportive);
