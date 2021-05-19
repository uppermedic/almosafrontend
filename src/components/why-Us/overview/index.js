import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const index = () => {
  return (
    <section className="over-view-section">
      <Container>
        <Row>
          <Col>
            <h2>Overview</h2>
          </Col>
        </Row>
        <Row className="py-5 top-section">
          <Col md={6}>
            <p>
              We are proud to be a leading integrated health services provider,
              focusing on human-centered care.
              <br /> With highly qualified medical, technical and administrative
              staff using the latest equipment, thus keeping pace with the needs
              of visitors from all regions of the Kingdom and neighboring Gulf.
              <br />
              Almoosa Specialist Hospital is one of the largest hospitals in the
              region with a capacity of 240 beds The hospital employs more than
              2000 caregivers with more than 700 nurses and 280 full-time
              physicians. It is accredited by major international and regional
              accreditation bodies such as Joint Commission International,
              CBAHI, and College of American pathologist. It hosts a Bariatric
              Center of Excellence and was the first hospital in the Middle East
              to receive the Planetree Golden Certification for excellence in
              patient-centered care. It is a teaching hospital accredited by the
              Saudi Commission for Health Specialties to train physicians under
              the Saudi Board program.
            </p>
          </Col>
          <Col md={6}>
            <img src="/images/why_choose_us/overview-section.png" alt="" />
          </Col>
        </Row>
        <Row className="pt-5">
          <Col className="d-flex justify-content-center">
            <iframe
              width="1000"
              height="560"
              src="https://www.youtube.com/embed/Gmh_xMMJ2Pw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default index;
