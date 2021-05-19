import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import WhyUs from 'src/components/why-us';

export default function Why_Choose_Us() {
  return (
    <div className="why-choose-us">
      <Head title="Why Choose Us"></Head>
      <Hero bg="/images/why_choose_us/why-choose-us-hero.png"></Hero>
      <WhyUs />
    </div>
  );
}
