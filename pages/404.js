import React from 'react';
import Head from 'src/components/layout/head';
// import Hero from "src/components/layout/Hero";
import Hero from '../components/layout/Hero';
import Content from '../components/NotFound';

export default function NotFound() {
  return (
    <div className="not-found">
      <Head />
      <Hero bg="/images/error/hero.png"></Hero>
      <Content />
    </div>
  );
}
