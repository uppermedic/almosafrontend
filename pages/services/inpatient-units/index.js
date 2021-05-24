import React, { useEffect } from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Inpatient from 'src/components/Services/inpatient';
import { fetchData } from 'src/store/Request.js';
import { withTranslation } from 'root/i18n';
import { useRouter } from 'next/router';

function InpatientPage({ t, services, servicesDataSingle }) {
  const router = useRouter();

  useEffect(() => {
    router.push(`/services/inpatient-units?id=${services.services[0].id}`);
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <Head data={services.seo}></Head>
      <div className="inpatient-units">
        <Hero>
          <img
            src={services.page_cover}
            alt="hero-cover"
            className="hero-cover"
          />
          <div className="hero-content">
            <h2 className="title">{t('menu:inpatient units')}</h2>
          </div>
          {/* <div className="overlay-1">
          <div className="overlay-2">
            <div className="title">Inpatient Units</div>
          </div>
        </div> */}
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
