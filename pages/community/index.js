import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Community from 'src/components/Community';
import { i18n } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';

export default function index({ data }) {
  const lang = i18n.language;
  const titleHero = lang && data.page?.seo[lang]?.title;

  return (
    <div className="community">
      <Head data={data.page.seo}></Head>
      <Hero bg={data.page.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero} </h1>
        </div>
      </Hero>
      <Community data={data.communities} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/community');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
