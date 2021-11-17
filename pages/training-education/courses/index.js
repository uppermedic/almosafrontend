import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Coursespage from 'components/training/coursespage';
import { fetchData } from 'src/store/Request.js';
import { i18n, withTranslation } from 'root/i18n';

const CursesTraning = ({ courseData, educationData, t }) => {
  const lang = i18n.language;
  return (
    <div className="training-education">
      <Head data={educationData.page.seo}></Head>
      <Hero bg={educationData.page.page_cover}>
        <div className="hero-content">
          <h1 className="title">
            {(lang == 'en' && 'BE UP TO DATE WITH LATEST') ||
              'كن على اطلاع بأحدث '}
            <br />
            <span>{t('menu:courses')}</span>
          </h1>
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
