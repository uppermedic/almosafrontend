import React, { useEffect, useState } from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import SupportServices from 'src/components/Services/support-services';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Supportive({ services, servicesDataSingle }) {
  const router = useRouter();
  const { locale } = router;
  const titleHero = locale && servicesDataSingle.seo[locale]?.title;

  const [url, seturl] = useState('');

  useEffect(() => {
    if (locale && router?.asPath == '/services/supportive-services/') {
      router.push(
        `/${locale}/services/supportive-services/?id=${services.services[0].id}`
      );
    }
  }, []);

  useEffect(() => {
    seturl(window.location.href);
  });

  return (
    <div className="support-services">
      <Head data={services.seo}></Head>
      <Hero bg={servicesDataSingle.thumbnail}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
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
  const locale = context.locale;
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
    props: {
      services,
      servicesDataSingle,
      ...(await serverSideTranslations(locale, [
        'common',
        'about',
        'news',
        'menu',
        'header',
        'footer',
        'patient_guide'
      ]))
    }
  };
}

export default Supportive;
