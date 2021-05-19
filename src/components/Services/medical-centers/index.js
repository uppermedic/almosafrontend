import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MedicalCenter from './MedicalCenter';
const data = [
  {
    id: 1,
    title: 'cardiology center',
    bg: '/images/services/medical-centers/Image-2.png',
    icon: '/images/services/medical-centers/Group-13.png',
    path: '/services/medical-centers/cardiology-center'
  },
  {
    id: 2,
    title: 'Orthopedic Center',
    bg: '/images/services/medical-centers/Image-3.png',
    icon: '/images/services/medical-centers/Group-13.png',
    path: '/services/medical-centers/orthopedic-center'
  },
  {
    id: 3,
    title: 'OPHTHALMOLOGY CENTER',
    bg: '/images/services/medical-centers/Image-4.png',
    icon: '/images/services/medical-centers/Group-13.png',
    path: '/services/medical-centers/ophthalmology-center'
  },
  {
    id: 4,
    title: 'Neurosciences Center',
    bg: '/images/services/medical-centers/Image-5.png',
    icon: '/images/services/medical-centers/Group-13.png'
  },
  {
    id: 5,
    title: 'Dental center',
    bg: '/images/services/medical-centers/Image-6.png',
    icon: '/images/services/medical-centers/Group-14.png'
  },
  {
    id: 6,
    title: 'Bariatric Center',
    bg: '/images/services/medical-centers/Image-7.png',
    icon: '/images/services/medical-centers/Group-13.png'
  },
  {
    id: 7,
    title: 'Women’s Health Center',
    bg: '/images/services/medical-centers/Image-8.png',
    icon: '/images/services/medical-centers/Group-15.png'
  },
  {
    id: 8,
    title: 'Surgery Center',
    bg: '/images/services/medical-centers/Image-9.png',
    icon: '/images/services/medical-centers/Group-13.png'
  },
  {
    id: 9,
    title: 'Pediatrics Center',
    bg: '/images/services/medical-centers/Image-10.png',
    icon: '/images/services/medical-centers/Group-13.png'
  },
  {
    id: 10,
    title: 'Sleep Disorders Center',
    bg: '/images/services/medical-centers/Image-11.png',
    icon: '/images/services/medical-centers/Group-13.png'
  },
  {
    id: 11,
    title: 'Emergency Center',
    bg: '/images/services/medical-centers/Image-12.png',
    icon: '/images/services/medical-centers/Group-16.png'
  },
  {
    id: 12,
    title: 'Oncology Center',
    bg: '/images/services/medical-centers/Image-13.png',
    icon: '/images/services/medical-centers/Group-13.png'
  },
  {
    id: 13,
    title: 'Internal Medicine Center',
    bg: '/images/services/medical-centers/Image-14.png',
    icon: '/images/services/medical-centers/Group-17.png'
  },
  {
    id: 14,
    title: 'Nephrology and the Hemodialysis center',
    bg: '/images/services/medical-centers/Image-15.png',
    icon: '/images/services/medical-centers/Group-013.png'
  }
];
export default function index() {
  return (
    <section className="centers">
      <Container>
        <Row>
          <Col>
            <h2>Medical Centers</h2>
          </Col>
        </Row>
        <Row>
          {data.map(item => (
            <Col md={4} key={item.id} className="px-lg-5 cols">
              <MedicalCenter item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
