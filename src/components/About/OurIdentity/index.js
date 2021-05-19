import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';

const data = [
  {
    id: 1,
    title: 'Vistion',
    description: `
            To be a trusted world-class health system that promotes wellness and heals illness.
        `,
    bg: '/images/about/vision.png',
    icon: 'far fa-eye'
  },
  {
    id: 1,
    title: 'Vistion',
    description: `
            To be a trusted world-class health system that promotes wellness and heals illness.
        `,
    bg: '/images/about/mission.png',
    icon: 'far fa-eye'
  },
  {
    id: 1,
    title: 'Vistion',
    description: `
            To be a trusted world-class health system that promotes wellness and heals illness.
        `,
    bg: '/images/about/values.png',
    icon: 'far fa-eye'
  }
];
export default function index() {
  return (
    <section className="ourIdentity">
      <div className="ripple d-none d-xl-block"></div>
      <Container>
        <Row className="m-0 justify-content-between">
          {data.map((item, idx) => (
            <Col xs={12} md={6} xl={4} key={idx}>
              <Card item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
