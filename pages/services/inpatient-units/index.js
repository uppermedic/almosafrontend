import React, { useEffect } from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Inpatient from 'src/components/Services/inpatient';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function InpatientPage({ services, servicesDataSingle }) {
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (locale && locale && router?.asPath == '/services/inpatient-units/') {
      router.push(
        `/${locale}/services/inpatient-units/?id=${services.services[0].id}`
      );
    }
  }, []);

  return (
    <React.Fragment>
      <Head data={services.seo}></Head>
      <div className="inpatient-units">
        <Hero bg={servicesDataSingle.thumbnail}>
          <div className="hero-content">
            <h1 className="title">
              {locale && servicesDataSingle.seo[locale]?.title}
            </h1>
          </div>
        </Hero>
        <Inpatient
          dataSectionTabs={services}
          dataSectionContent={servicesDataSingle}
        />
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const locale = context.locale;
  let { error: error1, data: services } = await fetchData('/services/4');
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

export default InpatientPage;
