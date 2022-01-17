import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import ContactUs from 'src/components/contact-us';
import { fetchData } from 'src/store/Request.js';
import { i18n } from 'root/i18n';

export default function index({ data }) {
  const lang = i18n.language;
  const titleHero = lang && data.page?.seo[lang]?.title;

  return (
    <div className="contact-us">
      <Head data={data.page.seo}></Head>
      <Hero bg={data.page.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <ContactUs data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/contact');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
