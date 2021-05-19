import React from "react";
import { Container, Row, Col } from "reactstrap";
import Service from "./Service";

const data = [
  {
    id: 1,
    title: "For Patients",
    bg: "/images/patient-guide/for-patients.png",
    ribbon_class: "green",
    url: "/patient-guide/for-patients",
  },
  {
    id: 2,
    title: "For Visitors",
    bg: "/images/patient-guide/for-visitors.png",
    ribbon_class: "purple",
    url: "/patient-guide/for-visitors",
  },
  {
    id: 3,
    title: "Directions & Parking",
    bg: "/images/patient-guide/directions-parking.png",
    ribbon_class: "brown",
    url: "/patient-guide/for-patients",
  },
  {
    id: 4,
    title: "Hospital Aminities",
    bg: "/images/patient-guide/hospital-aminities.png",
    ribbon_class: "blue",
    url: "/patient-guide/hospital-aminities",
  },
];
export default function index() {
  return (
    <section className="guides">
      <Container>
        <Row>
          <Col>
            <h2>Patient Guide</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between">
          {data.map(item => (
            <Col md={5} key={item.id}>
              <Service item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
