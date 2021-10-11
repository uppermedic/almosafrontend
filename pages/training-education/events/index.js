import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import EventsPage from 'components/training/eventsPage';
import { fetchData } from 'src/store/Request.js';
import { i18n, withTranslation } from 'root/i18n';

const EventsTraning = ({ eventData, educationData, t }) => {
  const lang = i18n.language;
  const seo = {
    ar: {
      title: 'الفعاليات',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'EVENTS',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="training-education">
      <Head data={seo}></Head>
      <Hero bg={educationData.page.page_cover}>
        <div className="hero-content">
          <h2 className="title">{t('menu:events')}</h2>
        </div>
      </Hero>
      <EventsPage data={eventData} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const tst = Promise.all([
    fetchData('/education'),
    fetchData('/education/type/event')
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
          eventData
        }
      };
    }
  );

  return tst;
}

export default withTranslation(['menu'])(EventsTraning);
