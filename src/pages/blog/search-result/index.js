import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/Blog/SearchResult';

export default function index() {
  return (
    <div className="blog-search-result">
      <Head title="Almoosa Hospital"></Head>
      <Content />
    </div>
  );
}
