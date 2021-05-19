import React from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "../Card";

const data = [
  {
    id: 1,
    content: "Patient and Family Rights",
    feature_color: "green-1",
  },
  {
    id: 2,
    content: "Patient Responsibilities",
    feature_color: "blue-1",
  },
  {
    id: 3,
    content: "Insurance",
    feature_color: "green-2",
  },
  {
    id: 4,
    content: "Request Medical Records",
    feature_color: "blue-2",
  },
];
export default function index() {
  return (
    <section className="guide-cards">
      <Container>
        <Row>
          <Col>
            <h2>For Visitors</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center cards-wrapper">
          <div className="overlay" />
          {data.map(item => (
            <Col md={6} key={item.id} className="cols">
              <Card item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
