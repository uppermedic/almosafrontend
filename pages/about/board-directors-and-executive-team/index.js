import React, { useEffect, useState } from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import BoardGoverners from 'src/components/About/BoardGoverners';
import { withTranslation, i18n } from 'root/i18n';
import { getCategories } from 'src/store/actions';
import { connect } from 'react-redux';
import { GovernersData, TeamData } from 'utils/datafile';

function BordDirectors({ t }) {
  const { language } = i18n;
  const seo = {
    ar: {
      title: 'أعضاء مجلس الإدارة والفريق التنفيذي',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Board governers & Leadership Team',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };

  return (
    <div className="almoosa-doctors">
      <Head data={seo}></Head>
      <Hero>
        <img
          src="/images/why_choose_us/overview-hero.png"
          alt="hero-cover"
          className="hero-cover"
        />
        <div className="hero-content title-directors">
          <h2 className="title-directors">
            {t('menu:board governers and leadership team')}
          </h2>
        </div>
      </Hero>
      <BoardGoverners GovernersData={GovernersData} TeamData={TeamData} />
    </div>
  );
}

export default withTranslation(['menu'])(
  connect(null, { getCategories })(BordDirectors)
);
