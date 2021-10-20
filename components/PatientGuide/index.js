import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Service from './Service';
import { i18n, withTranslation } from 'root/i18n';

const data = [
  {
    id: 1,
    title: 'for patient',
    bg: '/images/patient-guide/for-patients.png',
    ribbon_class: 'green',
    url: 'patient-guide/for-patient'
  },
  {
    id: 2,
    title: 'for visitors',
    bg: '/images/patient-guide/for-visitors.png',
    ribbon_class: 'purple',
    url: 'patient-guide/for-visitors'
  },
  {
    id: 3,
    title: 'directions',
    bg: '/images/patient-guide/directions-parking.png',
    ribbon_class: 'brown',
    url: 'patient-guide/directions'
  },
  {
    id: 4,
    title: 'hospital amenities',
    bg: '/images/patient-guide/hospital-aminities.png',
    ribbon_class: 'blue',
    url: 'patient-guide/hospital-amenities'
  }
];
const PatientGuide = ({ t }) => {
  return (
    <section className="guides">
      <Container>
        <Row>
          <Col>
            <h2>{t('menu:patient guide')}</h2>
          </Col>
        </Row>
        <Row xs="1" sm="1" md="2" className="d-flex justify-content-around">
          {data.map(item => (
            <Col key={item.id}>
              <Service item={item} t={t} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default withTranslation(['common', 'menu', 'patient_guide'])(
  PatientGuide
);
