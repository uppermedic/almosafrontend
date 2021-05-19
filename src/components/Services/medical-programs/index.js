import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '../Card';

const data = [
  {
    id: 1,
    title: 'Hair Transplant',
    path: '/services/medical-programs/hair-transplant',
    content:
      'We aim to offer a high-quality service with a very competitive price that guarantees the best result avoiding the travel ………...'
  },
  {
    id: 2,
    title: 'Stroke Management Program',
    path: '/services/medical-programs/stroke-management-program',
    content:
      'From the moment a stroke occurs, patients have a small window in which precise diagnosis and rapid treatment may …………....'
  },
  {
    id: 3,
    title: 'Medical Checkup Program',
    path: '/services/medical-programs/medical-checkup-program',
    content:
      'A good medical checkup may be the only effort you can make to ensure your good health and to prevent any ……………...'
  },
  {
    id: 4,
    title: 'Maternity Program',
    path: '/services/medical-programs/maternity-program',
    content:
      'Motherhood is an interesting journey full of emotions and surprises We at almoosa specialist ………………...'
  },
  {
    id: 5,
    title: 'Vaccination Program',
    path: '/services/medical-programs/vaccination-program',
    content:
      'Vaccination is one of the best ways that can protect the community from potentially harmful diseases. Vaccine-...……………...'
  },
  {
    id: 6,
    title: 'Speech Therapy Program',
    path: '/services/medical-programs/speech-therapy-program',
    content:
      'Phoniatrics: Is the medical specialty for communicative disorders. It is related with the normal, pathological, and professional...……….'
  },
  {
    id: 7,
    title: 'Depression Management Program',
    content:
      'Depression is Common mental disorders refer to two main diagnostic categories: depressive disorders and anxiety disorders...…………………….'
  },
  {
    id: 8,
    title: 'Diabetes Management Program',
    content:
      'The Diabetes Management Program at ِAlmoosa Specialist Hospital offers comprehensive and a multidisciplinar………..'
  },
  {
    id: 9,
    title: 'Fertility Treatment Program',
    content:
      'The Almoosa Specialist Hospital fertility program offers hope, compassion and understanding to couples...…………………...'
  },
  {
    id: 10,
    title: 'Sickle Cell Management',
    content:
      'Sickle cell disease (SCD) is a serious disease in which the body makes an altered form of hemoglobin. This genetic ……………………….'
  },
  {
    id: 11,
    title: 'Varicose Treatment Program',
    content:
      'Varicose veins is one of the most common problems, affecting 30-50% of the community, in almoosa …………………………...'
  },
  {
    id: 12,
    title: 'Migraine Management',
    content:
      'Migraine (headache) is a common disease which affects millions of people. It decreases work performance...……………………………………...'
  }
];
export default function index() {
  return (
    <section className="medical-programs-card">
      <Container>
        <Row>
          <Col>
            <h2>Medical Programs</h2>
          </Col>
        </Row>
        <Row>
          {data.map(item => (
            <Col
              xs={12}
              md={6}
              xl={4}
              key={item.id}
              className="px-lg-5 cols mt-5"
            >
              <Card item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
