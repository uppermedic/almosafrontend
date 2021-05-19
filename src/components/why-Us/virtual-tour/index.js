import React from "react";
import { Container, Row, Col } from "reactstrap";

const index = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h2>Virtual Hospital Tour</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <img src="/images/why_choose_us/virtual-tour.png" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default index;
