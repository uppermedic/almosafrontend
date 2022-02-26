import React, { useEffect, useState } from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import SupportServices from 'src/components/Services/support-services';
import { fetchData } from 'src/store/Request.js';
import { withTranslation, i18n } from 'root/i18n';
import { useRouter } from 'next/router';

function Supportive({ t, services, servicesDataSingle }) {
  const router = useRouter();
  const lang = i18n.language;
  const { locale } = router;
  const titleHero = lang && servicesDataSingle.seo[lang]?.title;

  const [url, seturl] = useState('');

  useEffect(() => {
    if (lang && locale && router?.asPath == '/services/supportive-services/') {
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
