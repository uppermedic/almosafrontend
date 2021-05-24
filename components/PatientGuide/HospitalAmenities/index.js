import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '../Card';
import { withTranslation } from 'root/i18n';

const data = [
  {
    id: 1,
    content: 'tabeby service',
    feature_color: 'green',
    path: '/patient-guide/hospital-amenities/tabeby-service'
  },
  {
    id: 2,
    content: 'hospitality services',
    feature_color: 'green',
    path: '/patient-guide/hospital-amenities/hospitality-services'
  },
  {
    id: 3,
    content: 'support groubs',
    feature_color: 'green',
    path: '/patient-guide/hospital-amenities/support-groubs'
  },
  {
    id: 4,
    content: 'pharmacy',
    feature_color: 'green',
    path: '/patient-guide/hospital-amenities/pharmacy'
  },
  {
    id: 6,
    content: 'atm',
    feature_color: 'green',
    path: '/patient-guide/hospital-amenities/atms'
  },
  {
    id: 7,
    content: 'wifi',
    feature_color: 'green',
    path: '/patient-guide/hospital-amenities/wifi'
  },
  {
    id: 8,
    content: 'library',
    feature_color: 'green',
    path: '/patient-guide/hospital-amenities/library'
  }
];
const Amentities = ({ t }) => {
  return (
    <section className="hospital-amenities guide-cards">
      <Container>
        <Row>
          <Col>
            <h2>{t('menu:hospital amenities')}</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center cards-wrapper">
          <div className="overlay" />
          {data.map(item => (
            <Col md={6} key={item.id} className="cols">
              <Card item={item} withTwoBg />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default withTranslation(['menu', 'patient_guide'])(Amentities);
