import React from 'react';
import Head from 'src/components/layout/head';
import Hero from '../../components/layout/Hero';
import Services from 'src/components/Services';
export default function services() {
  return (
    <div className="services">
      <Head title="Almoosa Hospital"></Head>
      <Hero bg="/images/services/hero.png"></Hero>
      <Services />
    </div>
  );
}
