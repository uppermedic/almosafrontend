import React, { useEffect } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import axios from 'axios';
import Head from 'src/components/layout/head';
// import Hero from "src/components/layout/Hero";
import Hero from 'src/components/layout/Hero';
import HeroContent from 'src/components/Home/HeroContent';
import MeetOurTeam from 'src/components/Home/MeetOurTeam';
import Centers from 'src/components/Home/Centers';
import Testimonial from 'src/components/Home/Testimonial';
import WhyMosa from 'src/components/Home/WhyMosa';
import Statistics from 'src/components/Home/Statistics';
//image

const Homepage = ({ t, data }) => {
  console.log(data);
  return (
    <div className="home">
      <Head
        title={data?.header?.site_title[i18n.language] || 'Almoosa Hospital'}
      >
        {/* <link
          rel="stylesheet"
          href="/plugins/owlcarousel/owl.carousel.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="/plugins/owlcarousel/owl.theme.default.min.css"
        ></link>

        <script
          type="text/javascript"
          src="/plugins/owlcarousel/owl.carousel.min.js"
        ></script>
      */}
        {/* <script
          type="text/javascript"
          src="/plugins/owlcarousel/init.js"
        ></script> */}
      </Head>
      <Hero bg="/images/home/hero.png">{<HeroContent />}</Hero>
      <WhyMosa />
      <MeetOurTeam />
      <Centers />
      <Testimonial />
      <Statistics
        hospital={data?.hospital || {}}
        emergency_phone={data?.emergency_phone || ''}
      />
    </div>
  );
};

Homepage.getInitialProps = async () => {
  // let Request = await fetch(process.env.API + '/home'),
  // data = await Request.json();
  return {
    namespacesRequired: ['common'],
    data: {}
  };
};

export default withTranslation('common')(Homepage);
