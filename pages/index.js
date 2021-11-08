import React from 'react';
import { i18n, withTranslation } from 'root/i18n';
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

const Homepage = props => {
  if (props.data) {
    return (
      <div className="home">
        <Head data={props.data.page.seo}></Head>
        <Carousel data={props.data.sliders} />
        <IconsSection />
        <WhyMosa data={props.data.content[1]} />
        <Centers data={props.data.home_services} />
        <Testimonial data={props.data.testimonials} />
        <Statistics
          hospital={props.data?.hospital || ''}
          emergency_phone={props.data?.emergency_phone || ''}
        />
        <News data={props.data.blogs} />
        <EmergyncyCall emergency_phone={props.data?.emergency_phone || ''} />
      </div>
    );
  } else {
    return 'loading';
  }
};

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/home');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data, namespacesRequired: ['common', 'menu', 'header'] }
  };
}

export default withTranslation('common')(Homepage);
