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

  const [url, seturl] = useState('');

  useEffect(() => {
    seturl(window.location.href);
  });

  const pharmacy = {
    thumbnail: '/images/services/support/pharmacy.png',
    seo: {
      en: {
        title: 'The Pharmacy'
      },
      ar: {
        title: 'الصيدلية'
      }
    }
  };
  return (
    <div className="support-services">
      <Head data={services.seo}></Head>
      <Hero
        bg={
          url?.includes('?') ? servicesDataSingle.thumbnail : pharmacy.thumbnail
        }
      >
        <div className="hero-content">
          <h1 className="title">
            {url?.includes('?')
              ? lang && servicesDataSingle.seo[lang].title
              : lang && pharmacy.seo[lang].title}
          </h1>
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
