import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import { Container, Row, Col } from 'reactstrap';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const LetsLearn = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data[locale]?.title;

  return (
    <section className="eidiat-almoosa">
      <Head data={data.seo} />
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h1 className="title">{titleHero} </h1>
        </div>
      </Hero>
      {data?.contents[0]?.video && (
        <div className="eidiat-almoosa">
          <Container>
            <Row>
              <Col xs={12}>
                <h3 className="section-title">
                  {locale && data.contents[0][locale].title}
                </h3>
              </Col>
            </Row>
            <Row style={{ marginTop: 44 }}>
              <Col xs={12}>
                <iframe
                  src={data?.contents[0]?.video}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </section>
  );
};

export default LetsLearn;

export async function getServerSideProps({ locale }) {
  let { error, data } = await fetchData('/community/10');
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
      ]))
    }
  };
}
