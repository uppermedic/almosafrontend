import React from 'react';
import { Container, Row, Col } from 'reactstrap';
export default function Goals() {
  return (
    <section
      className="goals"
      style={{ backgroundImage: `url(/images/about/goals-bg.png)` }}
    >
      <Container>
        <Row>
          <Col>
            <h2>Goals</h2>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col xs={12} lg={6}>
            <p>
              We are proud to be a leading integrated health services provider,
              focusing on human-centered care.
            </p>
            <p>
              With highly qualified medical, technical and administrative staff
              using the latest equipment, thus keeping pace with the needs of
              visitors from all regions of the Kingdom and neighboring Gulf. We
              are proud to be a leading integrated health services provider,
              focusing on human-centered care.
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <img
              src="/images/about/goals-sec-img.png"
              alt=""
              className="w-100 h-100"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
