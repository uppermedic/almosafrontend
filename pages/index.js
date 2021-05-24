import React, { useEffect } from 'react';
import { i18n, withTranslation } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import HeroContent from 'src/components/Home/HeroContent';
import MeetOurTeam from 'src/components/Home/MeetOurTeam';
import Centers from 'src/components/Home/Centers';
import Testimonial from 'src/components/Home/Testimonial';
import WhyMosa from 'src/components/Home/WhyMosa';
import Statistics from 'src/components/Home/Statistics';
import Carousel from 'src/components/layout/Carousel';
import IconsSection from 'src/components/Home/IconsSection';
import EmergyncyCall from 'src/components/Home/EmergyncyCall';
import Blogs from 'src/components/Home/Blogs';

const Homepage = props => {
  if (props.data) {
    return (
      <div className="home">
        <Head data={props.data.page.seo}></Head>
        {/* <Hero bg={props.data.page.page_cover || '/images/home/hero.png'}>
          <div className="overlay" />
          {<HeroContent data={props.data.page.seo[i18n.language]} />}
        </Hero> */}
        <Carousel data={props.data.sliders} />
        <IconsSection />
        <WhyMosa data={props.data.content[1]} />
        {/* <MeetOurTeam data={props.data.content[0]} /> */}
        <Centers data={props.data.home_services} />
        <Testimonial data={props.data.testimonials} />
        <Statistics
          hospital={props.data?.hospital || ''}
          emergency_phone={props.data?.emergency_phone || ''}
        />
        <Blogs data={props.data.blogs} />
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
// Homepage.getInitialProps = async context => ({
//   namespacesRequired: ['common', 'menu', 'header']
// });

// const mapStateToProps = state => ({
//   home: state.Home,
//   loading: state.Globals.loading
// });

// const mapDispatchToProps = {
//   getHomeData
// };

export default withTranslation('common')(Homepage);
