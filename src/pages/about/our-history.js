import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/About/OurHistory';

export default function index() {
  return (
    <div className="our-history-page">
      <Head title="Almoosa Hospital"></Head>
      <Hero bg="/images/about/hero-bg.png"></Hero>
      <Content />
    </div>
  );
}
