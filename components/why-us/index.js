import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'next-i18next';
import Card from './Card';

const data = [
  {
    id: 1,
    title: 'overview',
    icon: '/images/why_choose_us/overview.svg',
    url: 'why-choose-us/overview'
  },
  {
    id: 2,
    title: 'awards',
    icon: '/images/why_choose_us/awards.svg',
    url: 'why-choose-us/awards'
  },
  {
    id: 3,
    title: 'our doctors',
    icon: '/images/why_choose_us/doctors.svg',
    url: 'our-doctors'
  }
];
const Index = () => {
const { t } = useTranslation('menu');

  return (
    <section className="why-us">
      <Container>
        <Row>
          <Col>
            <h2>{t('menu:why_choose_us')}</h2>
          </Col>
        </Row>
        <Row>
          {data.map(item => (
            <Col sm={6} className="cols p-0">
              <Card item={item} key={item.id} t={t} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Index;
