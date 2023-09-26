import React, { useEffect } from 'react';
import Head from 'src/components/layout/head';
import SectionHeading from 'src/components/Services/medical-programs/program/SectionHeading';
import Content from 'src/components/Services/medical-programs/program/content';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { removeSpChar } from 'src/utils/helpers';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HairTranplant = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (locale) {
      router.push(
        `/${locale}/services/medical-programs/${removeSpChar(
          String(data.seo[locale].title)
        )
          .split(' ')
          .join('-')}/?id=${data.id}`
      );
    }
  }, [locale]);
  return (
    <div className="hair-transplant">
      <Head data={data.seo}></Head>
      <SectionHeading data={data} />
      {(data['sections'].length > 0 || data['physicians'].length > 0) && (
        <Content physicians={data['physicians']} data={data.sections} />
      )}
      {/* <Content physicians={data['physicians']} data={data.sections} /> */}
    </div>
  );
};

export async function getServerSideProps(context) {
  const locale = context.locale;
  if (context.query.id) {
    let { error, data } = await fetchData(
      `/services/single/${context.query.id}`
    );
    if (error) {
      return {
        notFound: true
      };
    }
    return {
      props: {
        data,
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
  } else {
    return {
      notFound: true
    };
  }
}
export default HairTranplant;
