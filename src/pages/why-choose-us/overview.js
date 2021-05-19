import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import OverviewComp from 'src/components/why-us/overview';

export default function Overview() {
  return (
    <div className="overview">
      <Head title="Overview"></Head>
      <Hero bg="/images/why_choose_us/overview-hero.png"></Hero>
      <OverviewComp />
    </div>
  );
}
