import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import ContactUs from 'src/components/contact-us';

export default function index() {
  return (
    <div className="contact-us">
      <Head title="Contact Us"></Head>
      <Hero bg="/images/contact-us/contact-us-hero.png"></Hero>
      <ContactUs />
    </div>
  );
}
