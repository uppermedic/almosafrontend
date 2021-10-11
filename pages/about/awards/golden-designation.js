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
      <GoldenDesignation />
    </div>
  );
};
export default withTranslation(['menu'])(golden_designation);
