import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Academicpage from 'components/training/academicpage';
import { fetchData } from 'src/store/Request.js';
import { i18n, withTranslation } from 'root/i18n';

const AcademicTraning = ({ data, t }) => {
  const lang = i18n.language;

  const seo = {
    ar: {
      title: 'الشؤون الأكاديمية',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Academic Affairs',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="training-education">
      <Head data={seo}></Head>
      <Hero bg="/images/training/academic/academic-banner1.jpg">
        <div className="hero-content">
          <h2 className="title">{t('menu:academic affairs')}</h2>
        </div>
      </Hero>
      <Academicpage data={data} />
    </div>
  );
};

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('education/academic/team');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}

export default withTranslation(['menu'])(AcademicTraning);
