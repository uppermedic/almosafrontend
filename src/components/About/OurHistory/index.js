import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import HistoryTimeLine from './HistoryTimeLine';
export default function index() {
  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2>OUR HISTORY AND TIME LINE</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <HistoryTimeLine />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
