import React from 'react';
import Head from '../../components/layout/head';
import Hero from '../../components/layout/Hero';
import Content from '../../components/Blog';

export default function index() {
  return (
    <div className="blog">
      <Head title="Almoosa Hospital"></Head>
      <Hero bg="/images/Blog/hero.png"></Hero>
      <Content />
    </div>
  );
}
