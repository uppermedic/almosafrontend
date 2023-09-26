import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Service from './Service';
import { useRouter } from 'next/router';

const ServicesContent = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <section className="our-services">
      <Container>
        <Row>
          <Col>
            <h2>{locale == 'ar' ? 'خدماتنا' : 'OUR SERVICES'}</h2>
          </Col>
        </Row>
        <Row xs="1" sm="2" className="d-flex justify-content-between">
          {data.map(item => (
            <Col key={item.id} className="m-auto card-wrapper">
              <Service item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesContent;
