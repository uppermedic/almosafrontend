import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import MediaCenter from 'src/components/MediaCenter';

export default function services() {
  return (
    <div className="media-center">
      <Head title="Media Center"></Head>
      <Hero bg="/images/media-center/hero.png"></Hero>
      <MediaCenter />
    </div>
  );
}
