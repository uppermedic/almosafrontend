import React from 'react';
import { withTranslation } from 'root/i18n';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Awards from 'src/components/why-us/awards';
import GoldenDesignation from 'src/components/why-us/awards/GoldenDesignation';

const golden_designation = ({ t }) => {
  const seo = {
    ar: {
      title: 'الوسام الذهبي من منظمة بلانتري',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Golden Designation from the Planetree Organization',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="golden-designation">
      <Head data={seo}></Head>
      {/* <Hero>
        <img
          src="/images/why_choose_us/awards-hero.png"
          alt="hero-cover"
          className="hero-cover"
        />
        <div className="hero-content">
          <h2>{t('menu:golden_designation')}</h2>
        </div>
      </Hero> */}
      <GoldenDesignation />
    </div>
  );
};
export default withTranslation(['menu'])(golden_designation);
