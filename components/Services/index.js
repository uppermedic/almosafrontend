import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n } from 'root/i18n';
import Service from './Service';

const ServicesContent = ({ data }) => {
  const { language } = i18n;

  return (
    <section className="our-services">
      <Container>
        <Row>
          <Col>
            <h2>{language == 'ar' ? 'خدماتنا' : 'OUR SERVICES'}</h2>
          </Col>
        </Row>
        <Row xs="1" sm="2" className="d-flex justify-content-between">
          {data.map(item => (
            <Col key={item.id} className="m-auto card-wrapper">
              <Service item={item} />
            </Col>
          ))}
          <Col className="m-auto card-wrapper">
            <Service
              item={{
                thumbnail: '/images/services/nursing.png',
                en: {
                  slug: 'nursing-department',
                  title: 'Nursing Department'
                },
                ar: {
                  slug: 'nursing-department',
                  title: 'قسم التمريض'
                }
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesContent;
