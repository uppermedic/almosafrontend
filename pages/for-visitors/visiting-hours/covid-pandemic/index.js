import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import CovidMessage from 'src/components/PatientGuide/For-Visitors/visiting-hours/covid-pandemic/CovidMessage';
import Covid from 'src/components/PatientGuide/For-Visitors/visiting-hours/covid-pandemic';
import { i18n } from 'root/i18n';

export default function index() {
  const { language } = i18n;
  const seo = {
    ar: {
      title: 'جائحة مرض فيروس كورونا',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Covid Pandemic',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="covid-panemic ">
      <Head data={seo}></Head>
      <Hero
        bg={
          (language == 'ar' &&
            '/images/patient-guide/covid-pandemic/hero-ar.png') ||
          '/images/patient-guide/covid-pandemic/hero.png'
        }
      >
        <Row className="covid-message col-xs-12 col-lg-10 col-xl-7 position-relative">
          <Col>
            <CovidMessage />
          </Col>
        </Row>
        <img
          src="/images/patient-guide/covid-pandemic/zigzag.png"
          alt="zigzag"
        />
      </Hero>
      <Covid />
    </div>
  );
}
