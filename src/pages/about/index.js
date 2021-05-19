import React from 'react';
import Head from 'src/components/layout/head';
import Hero from '../../components/layout/Hero';
import OurIdentity from '../../components/About/OurIdentity';
import Goals from '../../components/About/Goals';
import History from '../../components/About/History';
export default function about() {
  return (
    <div className="about">
      <Head title="Almoosa Hospital"></Head>
      <Hero bg="/images/about/hero-bg.png"></Hero>
      <OurIdentity />
      <Goals />
      <History />
    </div>
  );
}
