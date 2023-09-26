import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const EmergyncyCall = ({ emergency_phone}) => {
  const { t } = useTranslation('common');

  return (
    <div className="emergyncyContainer">
      <Container className="position-relative">
        <Row className="emergyncyContainer d-flex justify-content-lg-between align-content-center m-0">
          <Col xs={12} lg={6}>
            <div className="emergyncy-call-us">
              <h3> {t('emergency')} </h3>
              <p>{t('call_us')}</p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <Link href={`tel:${emergency_phone}`}>
              <a className="emergyncy-phone hvr-icon-grow-rotate">
                <p>
                  <i className="fas fa-phone-alt mr-1 hvr-icon"></i>
                  {emergency_phone?.split(' ').join('')}
                </p>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default EmergyncyCall;
