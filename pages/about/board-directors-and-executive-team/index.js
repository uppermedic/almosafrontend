import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import BoardGoverners from 'src/components/About/BoardGoverners';
import { getCategories } from 'src/store/actions';
import { connect } from 'react-redux';
import { GovernersData, TeamData } from 'utils/datafile';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function BordDirectors({ data }) {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data.page?.seo[locale]?.title;

  return (
    <div className="almoosa-doctors">
      <Head data={data.page.seo}></Head>
      <Hero bg={data.page?.page_cover}>
        <div className="hero-content title-directors">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <BoardGoverners
        GovernersData={GovernersData}
        TeamData={TeamData}
        contentData={data?.contents}
      />
    </div>
  );
}

export async function getServerSideProps({locale}) {
  let { error, data } = await fetchData('/page/18');
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
}

export default connect(null, { getCategories })(BordDirectors);
