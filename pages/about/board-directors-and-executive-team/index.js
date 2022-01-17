import React, { useEffect, useState } from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import BoardGoverners from 'src/components/About/BoardGoverners';
import { withTranslation, i18n } from 'root/i18n';
import { getCategories } from 'src/store/actions';
import { connect } from 'react-redux';
import { GovernersData, TeamData } from 'utils/datafile';
import { fetchData } from 'src/store/Request.js';

function BordDirectors({ data }) {
  const lang = i18n.language;
  const titleHero = lang && data.page?.seo[lang]?.title;

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

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/page/18');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}

export default withTranslation(['menu'])(
  connect(null, { getCategories })(BordDirectors)
);
