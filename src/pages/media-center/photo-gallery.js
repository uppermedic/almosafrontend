import React from 'react';
import Head from 'src/components/layout/head';
import Gallery from 'src/components/MediaCenter/PhotoGallery';

export default function index() {
  return (
    <div className="photo-Gallery">
      <Head title="Photo Gallery"></Head>
      <Gallery />
    </div>
  );
}
