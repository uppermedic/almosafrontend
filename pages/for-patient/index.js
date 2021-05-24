import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import ForPatients from 'src/components/PatientGuide/For-Patients';
import { withTranslation } from 'root/i18n';

const services = ({ t }) => {
  const seo = {
    ar: {
      title: 'للمريض',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'For Patient',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="for-patients">
      <Head data={seo}></Head>
      <Hero>
        <img
          src="/images/patient-guide/for_patient/hero.png"
          alt="hero-cover"
          className="hero-cover"
        />
        <div className="hero-content">
          <h2 className="title">{t('menu:for patient')}</h2>
        </div>
      </Hero>
      <ForPatients />
    </div>
  );
};

export default withTranslation(['menu'])(services);
