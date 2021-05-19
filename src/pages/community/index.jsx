import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Community from 'src/components/Community';

export default function index() {
  return (
    <div className="community">
      <Head title="Almoosa Hospital"></Head>
      <Hero bg="/images/community/hero.png"></Hero>
      <Community />
    </div>
  );
}
