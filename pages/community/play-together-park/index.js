import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/Community/play-together';
import { i18n } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';

export default function index({ data }) {
  const lang = i18n.language;
  const titleHero = lang && data[lang]?.title;

  return (
    <div className="play-together">
      <Head data={data.seo}></Head>
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h1 className="title">{titleHero} </h1>
        </div>
      </Hero>
      <Content data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/community/8');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
