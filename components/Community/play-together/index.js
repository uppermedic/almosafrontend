import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import { i18n } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { strippedContent } from 'src/utils/helpers.js';
import {
  PostWithCenterImg,
  PostWithRightImg
} from 'src/components/reusableComponents/Post';

export default function index({ data }) {
  const lang = i18n.language;

  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2>{lang && data?.contents[0][lang]?.title}</h2>
          </Col>
        </Row>
        {data?.contents[0][lang]?.content && (
          <Row className="d-flex justify-content-between align-items-center section-one no-gutters">
            <Col xs={12} lg={6}>
              <Markdown>
                {(lang && data?.contents[0][lang]?.content) || ''}
              </Markdown>
            </Col>
            <Col xs={12} lg={6}>
              <img src={data?.contents[0]?.images[0]} alt="" />
            </Col>
          </Row>
        )}

        {lang && data?.contents[1][lang]?.content && (
          <div className="section-two">
            <PostWithCenterImg
              paragraphs={[lang && data?.contents[1][lang]?.content]}
            />
            <p></p>
          </div>
        )}

        {data?.contents[2]?.images && (
          <div className="last-section">
            <Row>
              {data?.contents[2]?.images.map((img, idx) => {
                return (
                  <Col xs={12} sm={6} key={idx}>
                    <img src={img} alt="" />
                  </Col>
                );
              })}
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
}
