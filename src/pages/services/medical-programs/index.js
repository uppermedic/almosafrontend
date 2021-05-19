import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import MedicalPrograms from 'src/components/Services/medical-programs';

export default function MedicalCenters() {
  return (
    <div className="medical-programs">
      <Head title="Medical Programs"></Head>
      <Hero bg="/images/services/medicalPrograms-hero.png"></Hero>
      <MedicalPrograms />
    </div>
  );
}
