import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'root/i18n';

const WhyMosa = () => {
  return (
    <div className="whyalmoosaWrapper">
      <Container>
        <Row className="top-section m-0">
          <Col xs={12} lg={6} className="p-0">
            <h2>Why AlMOOSA HOSPITAL</h2>
          </Col>
          <Col className="link_div p-0" xs={12} lg={6}>
            <Link href="/why-choose-us">
              <span>Know about us</span>
            </Link>
          </Col>
        </Row>

        <Row className="bottom-section">
          <Col xs={12} lg={6}>
            <img src="/images/home/WhyMosa.png" alt="mosabuilding" />
          </Col>
          <Col xs={12} lg={6}>
            <p>
              Almoosa Specialist Hospital employs 2,000+ of the best medical,
              technical, and administrative staff from more than 30
              nationalities to establish a national center with international
              expertise in diagnosis and treatment.
            </p>
            <p className="pt-5">
              We believe in Saudis capabilities, and to empaower them, our
              Saudization ratio reached 39%.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyMosa;
