import React from 'react';
import Head from 'src/components/layout/head';
import Hero from '../components/layout/Hero';
import Content from '../components/NotFound';

export default function NotFound() {
  const seo = {
    ar: {
      title: 'صفحة غير موجودة 404',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Not Found 404',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="not-found">
      <Head data={seo} />
      <Hero bg="/images/error/hero.png"></Hero>
      <Content />
    </div>
  );
}
