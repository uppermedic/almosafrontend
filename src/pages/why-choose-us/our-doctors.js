import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import OurDoctors from 'src/components/why-us/our-doctors';

export default function Our_Doctors() {
  return (
    <div className="almoosa-doctors">
      <Head title="Our Doctors"></Head>
      <Hero bg="/images/why_choose_us/our-doctors/our-doctors-hero.png"></Hero>
      <OurDoctors />
    </div>
  );
}
