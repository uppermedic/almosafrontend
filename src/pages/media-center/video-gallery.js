import React from "react";
import Head from "src/components/layout/head";
import Gallery from "src/components/MediaCenter/VedioGallery";

export default function index() {
  return (
    <div className="video-Gallery">
      <Head title="Vedio Gallery"></Head>
      <Gallery />
    </div>
  );
}
