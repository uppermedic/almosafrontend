import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import { strippedContent } from 'src/utils/helpers';
import Markdown from 'markdown-to-jsx';

export default function Goals({ data }) {
  const { language } = i18n;

  return (
    <section
      className="goals"
      style={{ backgroundImage: `url(/images/about/goals-bg.png)` }}
    >
      <Container>
        <Row>
          <Col>
            <h2>{language ? data[language]?.title : ''}</h2>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            lg={6}
            className="d-flex justify-content-center justify-content-lg-start align-items-center"
          >
            <Markdown>{language ? data[language]?.content : ''}</Markdown>
            {/* <p>
              We are proud to be a leading integrated health services provider,
              focusing on human-centered care.
            </p>
            <p>
              With highly qualified medical, technical and administrative staff
              using the latest equipment, thus keeping pace with the needs of
              visitors from all regions of the Kingdom and neighboring Gulf. We
              are proud to be a leading integrated health services provider,
              focusing on human-centered care.
            </p> */}
          </Col>
          <Col xs={12} lg={6}>
            <img src={data?.image} alt="" className="half_section_img " />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
