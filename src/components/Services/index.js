import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Service from './Service';

const data = [
  {
    id: 1,
    title: 'Medical Centers',
    bg: '/images/services/medical-centers.png',
    ribbon_class: 'green',
    url: '/services/medical-centers'
  },
  {
    id: 2,
    title: 'Medical Programs',
    bg: '/images/services/medical-programs.png',
    ribbon_class: 'blue',
    url: '/services/medical-programs'
  },
  {
    id: 3,
    title: 'Support services ',
    bg: '/images/services/support-services.png',
    ribbon_class: 'purple',
    url: '/services/support-services'
  },
  {
    id: 4,
    title: 'Inpatient',
    bg: '/images/services/inpatient.png',
    ribbon_class: 'brown',
    url: '/services/inpatient-units'
  }
];
export default function index() {
  return (
    <section className="our-services">
      <Container>
        <Row>
          <Col>
            <h2>OUR SERVICES</h2>
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
