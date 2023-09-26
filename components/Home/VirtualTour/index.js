import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {useTranslation } from 'next-i18next';

const Index = ({ data }) => {
  const { t } = useTranslation('common');

  return (
    <div className="virtual-tour">
      <Container>
        <Row>
          <Col xs={12}>
            <h3 className="section-title">
              {t('virtual_tour_of_almoosa_specialist_hospital')}
            </h3>
          </Col>
        </Row>
        <Row style={{ marginTop: 44 }}>
          <Col xs={12}>
            <iframe
              src="https://almoosahospital.org/virtual-tour/"
              width="100%"
              height="600"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
