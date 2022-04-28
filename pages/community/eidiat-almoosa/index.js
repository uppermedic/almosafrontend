import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import { Container, Row, Col } from 'reactstrap';
import { PostWithCenterImg } from 'src/components/reusableComponents/Post';
import { fetchData } from 'src/store/Request.js';
import { i18n } from 'root/i18n';
import { strippedContent } from 'src/utils/helpers';

const LetsLearn = ({ data }) => {
  const lang = i18n.language;
  const titleHero = lang && data[lang]?.title;

  return (
    <section className="eidiat-almoosa">
      <Head data={data.seo} />
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h1 className="title">{titleHero} </h1>
        </div>
      </Hero>

      {data?.contents[0]?.images && (
        <>
          <PostWithCenterImg
            title={lang && data.contents[0][lang].title}
            color="#55B047"
            paragraphs={[lang && data.contents[0][lang].content]}
          />
          <Container>
            <Row className="mb-5">
              <Col xs={12}>
                <iframe
                  src={data?.contents[0]?.images[0]}
                  width="100%"
                  height="600"
                  frameborder="0"
                  allowfullscreen
                />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </section>
  );
};

export default LetsLearn;

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/community/10');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
