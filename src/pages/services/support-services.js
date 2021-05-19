import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import SupportServices from 'src/components/Services/support-services';

export default function MedicalCenters() {
  return (
    <div className="support-services">
      <Head title="Support Services"></Head>
      <Hero bg="/images/services/support-services-hero.png"></Hero>
      <SupportServices />
    </div>
  );
}
