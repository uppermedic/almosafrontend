import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, Link, withTranslation } from 'root/i18n';
import { toArabicDigits } from 'utils/helpers';
const Statistics = ({ hospital, emergency_phone, t }) => {
  const { language } = i18n;

  return (
    <div className="statistics">
      <Container className="position-relative">
        <Row className="statcisInfo m-0">
          <Col xs={6} sm={3} lg={3}>
            <div
              className="infoContainer"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <i className="fas fa-user" />
              <p className="st-value">
                {language === 'ar'
                  ? toArabicDigits(hospital.doctor)
                  : hospital.doctor}
              </p>
              <p className="st-name"> {t('doctor')} </p>
            </div>
          </Col>
          <Col xs={6} sm={3} lg={3}>
            <div
              className="infoContainer"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <i className="fas fa-user-friends" />
              <p className="st-value">
                {language === 'ar'
                  ? toArabicDigits(hospital.worker)
                  : hospital.worker}
              </p>
              <p className="st-name"> {t('worker')} </p>
            </div>
          </Col>
          <Col xs={6} sm={3} lg={3}>
            <div
              className="infoContainer"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <i className="fas fa-bed" />
              <p className="st-value">
                {language === 'ar'
                  ? toArabicDigits(hospital.single_bed)
                  : hospital.single_bed}
              </p>
              <p className="st-name"> {t('single_bed')} </p>
            </div>
          </Col>
          <Col xs={6} sm={3} lg={3}>
            <div
              className="infoContainer"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <i className="fas fa-cut" />
              <p className="st-value">
                {language === 'ar'
                  ? toArabicDigits(hospital.surgery)
                  : hospital.surgery}
              </p>
              <p className="st-name"> {t('surgery')} </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withTranslation('common')(Statistics);
