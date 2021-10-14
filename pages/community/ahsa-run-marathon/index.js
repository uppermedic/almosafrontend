import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/Community/asha-marathon';
import { fetchData } from 'src/store/Request.js';
import { i18n } from 'root/i18n';

export default function index({ data }) {
  const lang = i18n.language;
  const head_data = {
    ar: {
      title: 'سباق الحسا تركض',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Asha Run Marathon',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="asha-marathon">
      <Head data={head_data}></Head>
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h2 className="title">{lang && data[lang].title}</h2>
        </div>
      </Hero>
      <Content data={data.contents} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/community/6');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
