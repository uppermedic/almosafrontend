import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Service from './Service';

const data = [
  {
    id: 1,
    title: 'Power of Art Initiative',
    bg: '/images/community/power-of-art.png',
    ribbon_class: 'green',
    url: '/community/power-of-art'
  },
  {
    id: 2,
    title: 'Let’s Learn Initiative',
    bg: '/images/community/lets-learn.png',
    ribbon_class: 'purple',
    url: '/community/letslearn'
  },
  {
    id: 3,
    title: 'Cooperation with productive families',
    bg: '/images/community/cooperate.png',
    ribbon_class: 'brown',
    url: '/community/cooperation'
  },
  {
    id: 4,
    title: 'Taste of Art',
    bg: '/images/community/tast-of-art.png',
    ribbon_class: 'blue',
    url: '/community/taste-of-art'
  },
  {
    id: 5,
    title: 'Ahsa Run Marathon',
    bg: '/images/community/marathon.png',
    ribbon_class: 'green',
    url: '/community/asha-marathon'
  },
  {
    id: 6,
    title: 'Cleft Lip Initiative',
    bg: '/images/community/cleft.png',
    ribbon_class: 'purple',
    url: '/community/cleft'
  },
  {
    id: 7,
    title: 'Play Together Park',
    bg: '/images/community/park.png',
    ribbon_class: 'brown',
    url: '/community/play-together'
  },
  {
    id: 8,
    title: 'Paramedic in each school',
    bg: '/images/community/paramedic.png',
    ribbon_class: 'blue',
    url: '/community/paramedic'
  }
];
export default function index() {
  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2>Initiatives</h2>
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
