import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import DoctorPage from 'src/components/About/BoardGoverners/doctore-page';
import { i18n } from 'root/i18n';
import { getCategories } from 'src/store/actions';
import { connect } from 'react-redux';

function BordDirectors() {
  const { language } = i18n;
  const seo = {
    ar: {
      title: 'أعضاء مجلس الإدارة والفريق التنفيذي',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Board Directors & Executive Team',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };

  const [doctorData, setdoctorData] = useState({});

  useEffect(() => {
    setdoctorData(
      JSON.parse(localStorage.getItem('doctor'))
        ? JSON.parse(localStorage.getItem('doctor'))
        : {}
    );

    return () => {};
  }, []);

  return (
    <div className="almoosa-doctors doctor-slug-page">
      <Head data={seo}></Head>
      {/* <Hero>
        <img
          src="/images/why_choose_us/overview-hero.png"
          alt="hero-cover"
          className="hero-cover"
        />
        <div className="hero-content">
          <h2>{seo[language]?.title}</h2>
        </div>
      </Hero> */}
      <DoctorPage doctorData={doctorData} />
    </div>
  );
}

export default connect(null, { getCategories })(BordDirectors);
