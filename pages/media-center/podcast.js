import React from 'react';
import Head from 'src/components/layout/head';
import Content from 'src/components/MediaCenter/podcast/index.js';

const Podcast = () => {
  const head_data = {
    ar: {
      title: 'الإذاعة',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Podcast',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="podcast">
      <Head data={head_data}></Head>
      <Content />
    </div>
  );
};

export default Podcast;
