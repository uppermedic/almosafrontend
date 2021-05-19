import React from 'react';
import Head from '../../../components/layout/head';
import Hero from '../../../components/layout/Hero';
import MedicalCentersComp from 'src/components/Services/medical-centers';

export default function MedicalCenters() {
  return (
    <div className="medical-centers">
      <Head title="Medical Centers"></Head>
      <Hero bg="/images/services/medical-centers/hero.png"></Hero>
      <MedicalCentersComp />
    </div>
  );
}
