import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import EventsPage from 'components/training/eventsPage';
import { fetchData } from 'src/store/Request.js';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const EventsTraning = ({ eventData, educationData}) => {
  const { t } = useTranslation('menu');

  return (
    <div className="training-education">
      <Head data={educationData.page.seo}></Head>
      <Hero bg={educationData.page.page_cover}>
        <div className="hero-content">
          <h1 className="title">{t('menu:events')}</h1>
        </div>
      </Hero>
      <EventsPage data={eventData} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { page } = context.query;
  const locale =context.locale
  const tranlation = await serverSideTranslations(locale, [
    'common',
    'about',
    'news',
    'menu',
    'header',
    'footer',
    'patient_guide'
  ]);
  const tst = Promise.all([
    fetchData('/education'),
    fetchData(`/education/type/event?page=${page}`)
  ]).then(
    ([
      { error: error1, data: educationData },
      { error: error2, data: eventData }
    ]) => {
      if (error1 || error2) {
        return {
          notFound: true
        };
      }
      return {
        props: {
          educationData,
          eventData,
          ...tranlation
        }
      };
    }
  );

  return tst;
}

export default EventsTraning;
 