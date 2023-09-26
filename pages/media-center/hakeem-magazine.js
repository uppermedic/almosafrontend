import React from 'react';
import Head from 'src/components/layout/head';
import Content from 'src/components/MediaCenter/HakeemMagazine';
import { fetchData } from 'src/store/Request.js';
import { serialize } from 'src/utils/helpers';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function index({ data }) {
  return (
    <div className="hakeem-magazine">
      <Head data={data.page.seo}></Head>
      <Content data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query , locale } = context;
  let path = `/media/magazine?${serialize(query)}`;
  let { error, data } = await fetchData(path);
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, [
        'common',
        'about',
        'news',
        'menu',
        'header',
        'footer',
        'patient_guide'
      ]))
    }
  };
}
