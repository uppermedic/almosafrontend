import React, { useEffect } from 'react';
import EventInfo from 'src/components/training/event-info';
import Head from 'src/components/layout/head';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { removeSpChar } from 'src/utils/helpers';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Event = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (locale) {
      router.push(
        `/${locale}/training-education/events/${removeSpChar(
          String(data[locale].title)
        )
          .split(' ')
          .join('-')}/?id=${data.id}`
      );
    }
  }, [locale]);

  return (
    <div>
      <Head data={data.page.seo}></Head>
      <EventInfo data={data} />
    </div>
  );
};

export default Event;

export async function getServerSideProps(context) {
  const locale = context.locale;
  if (context.query.id) {
    let { error, data } = await fetchData(
      `/education/single/${context.query.id}`
    );
    if (error || !data) {
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
