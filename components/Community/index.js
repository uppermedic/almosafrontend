import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n } from 'root/i18n';
import Service from './Service';

export default function index({ data }) {
  const lang = i18n.language;
  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2 className="post_title">
              {(lang == 'en' && 'Initiatives') || 'المبادرات'}
            </h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between">
          {data.map((item, index) => (
            <Col md={5} key={item.id}>
              <Service item={item} index={index + 1} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
