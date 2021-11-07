import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { i18n } from 'root/i18n';

const SharedPost = ({ data, cutomImgStyle }) => {
  const { language } = i18n;

  return (
    <section className="hair-post">
      <Container>
        <Row xs="1" xl="2">
          <Col xl="8">
            <div
              dangerouslySetInnerHTML={{
                __html: language && data.seo[language].content
              }}
            />
          </Col>
          <Col xl="4">
            <img style={cutomImgStyle} src={data.image} alt="hair-plant" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SharedPost;
