import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import ForVisitors from 'src/components/PatientGuide/For-Visitors';

export default function services() {
  return (
    <div className="for-visitors">
      <Head title="Almoosa Hospital"></Head>
      <Hero bg="/images/patient-guide/for-visitors-hero.png"></Hero>
      <ForVisitors />
    </div>
  );
}
