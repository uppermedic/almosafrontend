import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card.jsx';
const data = [
  {
    id: 1,
    title: 'Overview',
    icon: '/images/why_choose_us/overview.svg',
    url: '/why-choose-us/overview'
  },
  {
    id: 2,
    title: 'Awards and accreditations',
    icon: '/images/why_choose_us/awards.svg',
    url: '/why-choose-us/awards'
  },
  {
    id: 3,
    title: 'Almoosa Doctors',
    icon: '/images/why_choose_us/doctors.svg',
    url: '/why-choose-us/our-doctors'
  },
  {
    id: 4,
    title: 'Virtual hospital tour',
    icon: '/images/why_choose_us/virtual hospital.svg',
    url: '/why-choose-us/virtual-tour'
  }
];
const index = () => {
  return (
    <section className="why-us">
      <Container>
        <Row>
          <Col>
            <h2>Why choose Almoosa</h2>
          </Col>
        </Row>
        <Row>
          {data.map(item => (
            <Col sm={6} className="cols p-0">
              <Card item={item} key={item.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default index;
