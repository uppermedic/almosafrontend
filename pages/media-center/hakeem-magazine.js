import React from 'react';
import Head from 'src/components/layout/head';
import Content from 'src/components/MediaCenter/HakeemMagazine';
import { fetchData } from 'src/store/Request.js';
import { serialize } from 'src/utils/helpers';

export default function index({ data }) {
  const head_data = {
    ar: {
      title: 'مجلة حكيم',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Hakeem Magazine',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="hakeem-magazine">
      <Head data={head_data}></Head>
      <Content data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  let path = `/media/magazine?${serialize(query)}`;
  let { error, data } = await fetchData(path);
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
