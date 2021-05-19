import React from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "../Card";

const data = [
  {
    id: 1,
    title: "Day Surgery Unit",
    content:
      "Day surgery allows you to be admitted to hospital for surgery or a procedure and be discharged home on the same day.We try to reduce the length of stay in the hospital …………...",
  },
  {
    id: 2,
    title: "Coronary Care Unit (CCU)",
    content:
      "The coronary care unit (CCU) at Almoosa Specialist Hospital is equipped with the most advanced equipment to provide the best care for patients with critical cardiac conditions ……….",
  },
  {
    id: 3,
    title: "Intensive Care Unit (ICU)",
    content:
      "In the Intensive Care Unit, patients get continuous monitoring and treatment, benefiting from a higher level of safety and prevention of any undesirable situations that may arise during a patient stay.",
  },
  {
    id: 4,
    title: "Nursery & Neonatal Intensive Care Unit (NICU)",
    content:
      "Treatment of new born babies is challenging. Sometimes, a baby has difficulty making the transition to the new world. Being born prematurely, having a difficult delivery or birth defects can make these changes more challenging.",
  },
];
export default function index() {
  return (
    <section className="support-services-card">
      <Container>
        <Row>
          <Col>
            <h2>Support Services</h2>
          </Col>
        </Row>
        <Row className="justify-content-around">
          {data.map(item => (
            <Col md={5} key={item.id} className="cols mt-5">
              <Card item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
