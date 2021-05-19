import React from "react";
import { Container, Row, Col } from "reactstrap";
import ForPatients from "../Card";

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
  {
    id: 5,
    content: "Disabled Access & Services",
    feature_color: "green-3",
  },
  {
    id: 6,
    content: "Preparing For Your Appointment",
    feature_color: "blue-3",
  },
  {
    id: 7,
    content: "Planning your Hospital Stay",
    feature_color: "green-4",
  },
  {
    id: 8,
    content: "Preparing for a Procedure",
    feature_color: "blue-4",
  },
  {
    id: 9,
    content: "Patient Complains",
    feature_color: "green-5",
  },
];
export default function index() {
  return (
    <section className="guide-cards">
      <Container>
        <Row>
          <Col>
            <h2>For Patients</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center cards-wrapper">
          <div className="overlay" />
          {data.map(item => (
            <Col md={6} key={item.id} className="cols">
              <ForPatients item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
