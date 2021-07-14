import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/Community/play-together';
import { i18n } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';

export default function index({ data }) {
  const lang = i18n.language;
  const head_data = {
    ar: {
      title: 'حديقة لنلعب معا',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Play Together Park',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="play-together">
      <Head data={head_data}></Head>
      <Hero>
        <img src={data.cover_image} alt="hero-cover" className="hero-cover" />
        <div className="hero-content">
          <h2 className="title">{lang && data[lang].title} </h2>
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
