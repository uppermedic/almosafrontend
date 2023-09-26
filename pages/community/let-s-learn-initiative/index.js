import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import { Container, Row, Col } from 'reactstrap';
import {
  PostWithRightImg,
  PostWithCenterImg
} from 'src/components/reusableComponents/Post';
import SmallGallery from 'src/components/SmallGallery';
import { fetchData } from 'src/store/Request.js';
import { strippedContent } from 'src/utils/helpers';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const LetsLearn = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data[locale]?.title;

  return (
    <section className="lets_learn_section">
      <Head data={data.seo} />
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h1 className="title">{titleHero} </h1>
        </div>
      </Hero>

      {data?.contents[0] && (
        <PostWithRightImg
          title={(locale && data?.contents[0][locale]?.title) || ''}
          color="#1E455C"
          paragraphs={[(locale && data?.contents[0][locale]?.content) || '']}
          theImg={data?.contents[0]?.images[0]}
        />
      )}

      {data?.contents[1] && (
        <div className="middle-paragraph">
          <div className="container">
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    (locale &&
                      strippedContent(data?.contents[1][locale]?.content)) ||
                    ''
                }}
              />
            </p>
          </div>
        </div>
      )}

      {data?.contents[2] && (
        <SmallGallery
          imgs={data?.contents[2]?.images.map(img => {
            return img;
          })}
          bgColor="#1E455C"
        />
      )}

      {data?.contents[3] && (
        <div className="middle-paragraph">
          <div className="container">
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    (locale &&
                      strippedContent(data?.contents[3][locale]?.content)) ||
                    ' '
                }}
              />
            </p>
          </div>
        </div>
      )}

      {data?.contents[4] && (
        <div className="post-two">
          <Container>
            <Row xs="1" lg="2">
              {data?.contents[4]?.images[0] && (
                <Col>
                  <div className="post-img">
                    <img src={data?.contents[4]?.images[0]} alt="post-img" />
                  </div>
                </Col>
              )}
              {data?.contents[4][locale]?.content && (
                <Col>
                  <div className="post-paragraph">
                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            (locale &&
                              strippedContent(
                                data?.contents[4][locale]?.content
                              )) ||
                            ' '
                        }}
                      />
                    </p>
                  </div>
                </Col>
              )}
            </Row>
          </Container>
        </div>
      )}

      {data?.contents[5] && (
        <PostWithCenterImg
          title={
            (locale && strippedContent(data?.contents[5][locale]?.title)) || ''
          }
          paragraphs={[
            (locale && strippedContent(data?.contents[5][locale]?.content)) ||
              ''
          ]}
          theImg={data?.contents[5]?.images[0]}
          color="#1E455C"
        />
      )}
    </section>
  );
};

export default LetsLearn;

export async function getServerSideProps({locale}) {
  let { error, data } = await fetchData('/community/2');
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
