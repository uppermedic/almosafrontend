import React from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "../Card";
import HeadingSection from "./Heading_Section";
const data = [
  {
    id: 1,
    content: "Visiting Hours & Policies",
  },
  {
    id: 2,
    content: "Interpreter Services",
  },
  {
    id: 3,
    content: "Waiting Areas",
  },
  {
    id: 4,
    content: "Mosques",
  },
  {
    id: 5,
    content: "Waiting Areas",
  },
  {
    id: 6,
    content: "Mosques",
  },
];

const index = () => {
  return (
    <section className="guide-directions">
      <Container>
        <HeadingSection title="Directions & Parking" />
      </Container>

      <Container fluid={true}>
        <Row className="info-section">
          <Col>
            The following section contains information on how to reach the
            hospital and how to move around Al-Ahsa region.
          </Col>
        </Row>
      </Container>

      <Container>
        <Row style={{ paddingBottom: "80px" }}>
          <Col md={6}>
            {data.map(item => (
              <Card key={item.id} item={item} />
            ))}
          </Col>

          <Col md={6}>
            <HeadingSection title="DIRECTIONS :" subHeading={true} />
            <Row>
              <Col>
                <p style={{ fontSize: "39px" }}>
                  Almoosa Specialist Hospital is located at the following
                  address:
                </p>
                <p style={{ fontSize: "37px", fontWeight: 100 }}>
                  Dharan St | Alfaisal District | Al-Ahsa P.O. Box 5098 Eastern
                  Province | Saudi Arabia
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  src="/images/patient-guide/direction-map.png"
                  alt="Direction Map"
                  style={{ paddingTop: "120px", width: "100%" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <HeadingSection title="Parking :" subHeading={true} />
        <Row className="py-3" style={{ marginBottom: "150px" }}>
          <Col md={6}>
            <h4>Self-Parking:</h4>
            <p style={{ fontSize: "39px", fontWeight: 100 }}>
              The hospital has underground parking for 150 cars and surface
              parking for 100 cars. Both are easily accessible from Dharhan
              Street.
            </p>
          </Col>
          <Col md={6}>
            <h4>Valet Parking:</h4>
            <p style={{ fontSize: "39px", fontWeight: 100 }}>
              The hospital also provides valet parking for patients and visitors
              located at the hospital entrance. Security officers can assist in
              all your parking needs.
            </p>
          </Col>
        </Row>

        <HeadingSection title="Public Transportation :" subHeading={true} />
        <Row>
          <Col md={12}>
            <h4 className="mobility-subHeading">Mobility in Al-Ahsa:</h4>
            <p style={{ fontSize: "39px", fontWeight: 100 }}>
              Al –Ahsa can be reached using modern transport services at all
              times.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default index;
