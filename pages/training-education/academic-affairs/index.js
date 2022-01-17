import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Academicpage from 'components/training/academicpage';
import { fetchData } from 'src/store/Request.js';
import { i18n, withTranslation } from 'root/i18n';

const AcademicTraning = ({ academicData, academicTeam, t }) => {
  const lang = i18n.language;
  const titleHero = lang && academicData.page?.seo[lang]?.title;

  return (
    <div className="training-education">
      <Head data={academicData.page.seo}></Head>
      <Hero bg={academicData.page?.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <Academicpage academicTeam={academicTeam} data={academicData?.contents} />
    </div>
  );
};

export async function getServerSideProps(context) {
  let { error: error1, data: academicData } = await fetchData('/page/17');
  let { error: error2, data: academicTeam } = await fetchData(
    '/education/academic/team'
  );

  if (error1 || error2) {
    return {
      notFound: true
    };
  }
  return {
    props: { academicData, academicTeam }
  };
}

export default withTranslation(['menu'])(AcademicTraning);
