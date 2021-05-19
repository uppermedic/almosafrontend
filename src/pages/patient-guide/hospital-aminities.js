import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import HospitalAmenities from 'src/components/PatientGuide/HospitalAmenities';

export default function services() {
  return (
    <div className="hospital-aminities">
      <Head title="Almoosa Hospital"></Head>
      <Hero bg="/images/patient-guide/for-patient.png"></Hero>
      <HospitalAmenities />
    </div>
  );
}
