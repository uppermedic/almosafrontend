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
import { i18n } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { strippedContent } from 'src/utils/helpers';

const LetsLearn = ({ data }) => {
  const lang = i18n.language;
  const head_data = {
    ar: {
      title: 'مبادرة لنتعلم',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Let’s Learn Initiative',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <section className="lets_learn_section">
      <Head data={head_data} />
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h2 className="title">{lang && data[lang].title} </h2>
        </div>
      </Hero>

      {data?.contents[0] && (
        <PostWithRightImg
          title={(lang && data?.contents[0][lang]?.title) || ''}
          color="#1E455C"
          paragraphs={[(lang && data?.contents[0][lang]?.content) || '']}
          theImg={data?.contents[0]?.images[0]}
        />
      )}

      {data?.contents[1] && (
        <div className="middle-paragraph">
          <div className="container">
            <Markdown>
              {(lang && strippedContent(data?.contents[1][lang]?.content)) ||
                ''}
            </Markdown>
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
            <Markdown>
              {(lang && strippedContent(data?.contents[3][lang]?.content)) ||
                ' '}
            </Markdown>
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
              {data?.contents[4][lang]?.content && (
                <Col>
                  <div className="post-paragraph">
                    <Markdown>
                      {(lang &&
                        strippedContent(data?.contents[4][lang]?.content)) ||
                        ' '}
                    </Markdown>
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
            (lang && strippedContent(data?.contents[5][lang]?.title)) || ''
          }
          paragraphs={[
            (lang && strippedContent(data?.contents[5][lang]?.content)) || ''
          ]}
          theImg={data?.contents[5]?.images[0]}
          color="#1E455C"
        />
      )}
    </section>
  );
};

export default LetsLearn;

// small Components

const BannerOverlay = ({ data }) => {
  const lang = i18n.language;
  return (
    <div className="banner-overlay">
      <Container>
        <Row xs="1" sm="2">
          <Col>
            <div className="logo">
              <img src="/images/png-logo.png" alt="logo" />
            </div>
          </Col>
          <Col>
            <div className="initiative-name">
              <h2>{lang && data[lang].title}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/community/2');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
