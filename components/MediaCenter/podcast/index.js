import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { i18n } from 'root/i18n';

const logos = [
  {
    img: '/images/media-center/podcast/logo-1.png',
    link:
      'https://castbox.fm/episode/%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%AE%D8%B1%D8%A7%D9%81%D8%A7%D8%AA-%D9%88-%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D8%A7%D8%AA-%D9%85%D9%8A%D9%86-%D9%86%D8%B5%D8%AF%D9%82-%D8%9F!!!-id2723878-id245912805?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=%D8%A8%D9%8A%D9%86%20%D8%A7%D9%84%D8%AE%D8%B1%D8%A7%D9%81%D8%A7%D8%AA%20%D9%88%20%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D8%A7%D8%AA%20%D9%85%D9%8A%D9%86%20%D9%86%D8%B5%D8%AF%D9%82%20%D8%9F!!!-CastBox_FM&country=us'
  },
  {
    img: '/images/media-center/podcast/logo-2.png',
    link: 'https://podcasts.apple.com/sa/podcast/hakeem-podcast/id1502880282'
  },
  {
    img: '/images/media-center/podcast/logo-3.png',
    link: 'https://overcast.fm/login'
  },
  {
    img: '/images/media-center/podcast/logo-4.png',
    link:
      'https://www.omnycontent.com/d/playlist/069923d4-ce31-4ce4-a7e5-ab5f0187c34b/14124618-6bf8-4325-86d3-ab7b005dc4cb/7e1c58d0-604e-4506-9b04-ab7b0078e75f/podcast.rss'
  }
];

const Content = () => {
  const lang = i18n.language;
  return (
    <div className="content">
      <div className="container">
        <div className="banner">
          <Container>
            <Row>
              <Col lg="3" className="column left-parent">
                <div className="left-side w-100">
                  <div className="title">
                    <h2>
                      {(lang == 'en' && 'Listen To') || 'استمع إلى'}
                      <br />
                      {(lang == 'en' && 'Our') || ''}
                      <span>{(lang == 'en' && 'Podcast') || 'اذاعتنا'}</span>
                    </h2>
                  </div>
                  <div className="arrow">
                    <i className="fas fa-arrow-alt-circle-down"></i>
                  </div>
                </div>
              </Col>
              <Col lg="9" className="column">
                <div
                  className="right-side"
                  style={{
                    backgroundImage:
                      'url("/images/media-center/podcast/podcast.png")'
                  }}
                ></div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="logos">
          <Container>
            <Row xs="2" md="4">
              {logos.map((logo, index) => {
                return (
                  <Col key={index}>
                    <div className="logo">
                      <a
                        href={logo.link}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <img src={logo.img} alt="logo" />
                      </a>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Content;
