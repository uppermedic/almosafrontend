import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/Community/asha-marathon';

export default function index() {
  return (
    <div className="asha-marathon">
      <Head title="Asha Run Marathon"></Head>
      <Hero bg="/images/community/asha-marathon/asha-hero.png"></Hero>
      <Content />
    </div>
  );
}
