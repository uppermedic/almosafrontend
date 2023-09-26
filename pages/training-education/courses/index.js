import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Coursespage from 'components/training/coursespage';
import { fetchData } from 'src/store/Request.js';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CursesTraning = ({ courseData, educationData }) => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('menu');

  return (
    <div className="training-education">
      <Head data={educationData.page.seo}></Head>
      <Hero bg={educationData.page.page_cover}>
        <div className="hero-content">
          <h1 className="title">
            {(locale == 'en' && 'BE UP TO DATE WITH LATEST') ||
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
  const locale = context.locale;
  const { page } = context.query;

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
    fetchData(`/education/type/course?page=${page}`)
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
          courseData,
          ...tranlation
        }
      };
    }
  );

  return tst;
}

export default CursesTraning;
