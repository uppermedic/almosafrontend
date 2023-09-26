import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Service from './Service';
import { useRouter } from 'next/router';

export default function index({ data }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2 className="post_title">
              {(locale == 'en' && 'Initiatives') || 'المبادرات'}
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
