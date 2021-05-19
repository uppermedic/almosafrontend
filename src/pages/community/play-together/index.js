import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/Community/play-together';

export default function index() {
  return (
    <div className="play-together">
      <Head title="Almoosa Hospital"></Head>
      <Hero bg="/images/community/play-together/hero.png"></Hero>
      <Content />
    </div>
  );
}
