import React, { useEffect } from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Inpatient from 'src/components/Services/inpatient';
import { fetchData } from 'src/store/Request.js';
import { withTranslation, i18n } from 'root/i18n';
import { useRouter } from 'next/router';

function InpatientPage({ t, services, servicesDataSingle }) {
  const router = useRouter();
  const { locale } = router;
  const lang = i18n.language;

  useEffect(() => {
    if (lang && locale && router?.asPath == '/services/inpatient-units/') {
      router.push(
        `/${lang}/services/inpatient-units/?id=${services.services[0].id}`
      );
    }
  }, []);

  console.log('router', router);
  return (
    <React.Fragment>
      <Head data={services.seo}></Head>
      <div className="inpatient-units">
        <Hero bg={servicesDataSingle.thumbnail}>
          <div className="hero-content">
            <h1 className="title">
              {lang && servicesDataSingle.seo[lang].title}
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
    props: { services, servicesDataSingle }
  };
}

export default withTranslation(['menu'])(InpatientPage);
