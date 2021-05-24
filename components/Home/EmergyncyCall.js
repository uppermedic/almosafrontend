import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, Link, withTranslation } from 'root/i18n';
import { toArabicDigits } from 'utils/helpers';
const emergyncyCall = ({ emergency_phone, t }) => {
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
                  <i class="fas fa-phone-alt mr-1 hvr-icon"></i>
                  {emergency_phone}
                </p>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withTranslation('common')(emergyncyCall);
