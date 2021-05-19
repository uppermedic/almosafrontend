import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Directions from 'src/components/PatientGuide/directions_parking';

export default function Directions_Guide() {
  return (
    <div className="directions">
      <Head title="Directions & Parking"></Head>
      <Hero bg="/images/patient-guide/directions-hero.png"></Hero>
      <Directions />
    </div>
  );
}
