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

  const [url, seturl] = useState('');
  // useEffect(() => {
  //   router.push(`/services/supportive-services?id=${services.services[0].id}`);
  //   return () => {};
  // }, []);

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
      <Head data={seo}></Head>
      <Hero>
        <img
          src={
            url?.includes('?')
              ? servicesDataSingle.thumbnail
              : pharmacy.thumbnail
          }
          alt="hero-cover"
          className="hero-cover"
        />
        <div className="hero-content">
          <h2 className="title">
            {url?.includes('?')
              ? lang && servicesDataSingle.seo[lang].title
              : lang && pharmacy.seo[lang].title}
          </h2>
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
