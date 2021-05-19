import React from 'react';
import Head from 'src/components/layout/head';
import Hero from '../../components/layout/Hero';
import PatientGuide from 'src/components/PatientGuide';

export default function services() {
  return (
    <div className="patient-guide">
      <Head title="Almoosa Hospital"></Head>
      <Hero bg="/images/patient-guide/hero.png"></Hero>
      <PatientGuide />
    </div>
  );
}
