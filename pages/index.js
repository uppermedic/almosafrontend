import React from 'react';
import { fetchData } from 'src/store/Request.js';
import Head from 'src/components/layout/head';
import Centers from 'src/components/Home/Centers';
import Testimonial from 'src/components/Home/Testimonial';
import WhyMosa from 'src/components/Home/WhyMosa';
import Statistics from 'src/components/Home/Statistics';
import Carousel from 'src/components/layout/Carousel';
import IconsSection from 'src/components/Home/IconsSection';
import EmergyncyCall from 'src/components/Home/EmergyncyCall';
import News from 'src/components/Home/News';
import VirtualTour from 'components/Home/VirtualTour';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Homepage = ({data}) => {
  if (data) {
    return (
      <div className="home">
        <Head data={data.page.seo}></Head>
        <Carousel data={data.sliders} />
        <IconsSection />
        <WhyMosa data={data.content[1]} />
        <VirtualTour />
        <Centers data={data.home_services} />
        <Testimonial data={data.testimonials} />
        <Statistics
          hospital={data?.hospital || ''}
          emergency_phone={data?.emergency_phone || ''}
        />
        <News data={data.blogs} />
        <EmergyncyCall emergency_phone={data?.emergency_phone || ''} />
      </div>
    );
  } else {
    return 'loading';
  }
};

export async function getStaticProps({locale}) {
  
  const { error, data } = await fetchData('/home');
  if (error) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, [
        'common',
        'about',
        'news',
        'menu',
        'header',
        'footer',
        'patient_guide'
      ])),
    },
  };
}
export default Homepage
