import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Awards from 'src/components/why-Us/awards';

export default function Awards_accreditation() {
  return (
    <div className="awards_accreditation">
      <Head title="Awards & Accreditation"></Head>
      <Hero bg="/images/why_choose_us/awards-hero.png"></Hero>
      <Awards />
    </div>
  );
}
