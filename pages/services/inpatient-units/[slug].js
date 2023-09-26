import React, { useEffect } from 'react';
import Head from 'src/components/layout/head';
import Content from 'src/components/Services/inpatient/Single';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { removeSpChar } from 'src/utils/helpers';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const IntensiveCare = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (locale) {
      router.push(
        `/${locale}/services/inpatient-units/${removeSpChar(
          String(data.seo[locale].title)
        )
          .split(' ')
          .join('-')}/?id=${data.id}` || '#'
      );
    }
  }, [locale, data]);

  return (
    <div className="intensive-care mb-50">
      <Head data={data.seo}></Head>
      <Content
        data={data}
        sections={data['sections']}
        physicians={data['physicians']}
        seo={data['seo']}
      />
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

export default IntensiveCare;
