import React, { useEffect } from 'react';
import EventInfo from 'src/components/training/event-info';
import Head from 'src/components/layout/head';
import { fetchData } from 'src/store/Request.js';
import { i18n } from 'root/i18n';
import { useRouter } from 'next/router';

const Event = ({ data }) => {
  const lang = i18n.language;
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (lang && locale) {
      router.push(
        `/${lang}/training-education/events/${String(data[lang].title)
          .split(' ')
          .join('-')}/?id=${data.id}`
      );
    }
  }, [lang, locale]);

  return (
    <div>
      <Head data={data.page.seo}></Head>
      <EventInfo data={data} />
    </div>
  );
};

export default Event;

export async function getServerSideProps(context) {
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
      props: { data }
    };
  } else {
    return {
      notFound: true
    };
  }
}
