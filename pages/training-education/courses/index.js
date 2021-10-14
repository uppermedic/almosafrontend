import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Coursespage from 'components/training/coursespage';
import { fetchData } from 'src/store/Request.js';
import { i18n, withTranslation } from 'root/i18n';

const CursesTraning = ({ courseData, educationData, t }) => {
  const lang = i18n.language;

  const seo = {
    ar: {
      title: 'الدورات',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'COURSES',
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
          <h2 className="title">
            {(lang == 'en' && 'BE UP TO DATE WITH LATEST') ||
              'كن على اطلاع بأحدث '}
            <br />
            <span>{t('menu:courses')}</span>
          </h2>
        </div>
      </Hero>
      <Coursespage data={courseData} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const tst = Promise.all([
    fetchData('/education'),
    fetchData('/education/type/course')
  ]).then(
    ([
      { error: error1, data: educationData },
      { error: error2, data: courseData }
    ]) => {
      if (error1 || error2) {
        return {
          notFound: true
        };
      }
      return {
        props: {
          educationData,
          courseData
        }
      };
    }
  );

  return tst;
}

export default withTranslation(['menu'])(CursesTraning);
