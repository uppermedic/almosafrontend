import React from 'react';
import Head from 'src/components/layout/head';
import Hero from '../../components/layout/Hero';
import ForPatients from '../../components/PatientGuide/For-Patients';

export default function services() {
  return (
    <div className="for-patients">
      <Head title="Almoosa Hospital"></Head>
      <Hero bg="/images/patient-guide/for-patient.png"></Hero>
      <ForPatients />
    </div>
  );
}
