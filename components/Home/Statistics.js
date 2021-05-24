import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, Link, withTranslation } from 'root/i18n';
import { toArabicDigits } from 'utils/helpers';
const Statistics = ({ hospital, emergency_phone, t }) => {
  const { language } = i18n;

  //console.log(hospital);
  // const staticHospital = [
  //   { name: 'single bed', value: 250, icon: 'fas fa-bed' },
  //   { name: 'doctor', value: 250, icon: 'fas fa-user' },
  //   { name: 'surgey', value: 250, icon: 'fas fa-cut' },
  //   { name: 'patient', value: 250, icon: 'fas fa-user-friends' }
  // ];
  return (
    <div className="statistics">
      {/* <img
        src="images/home/statistics_bg.jpg"
        alt=""
        className="position-absolute w-100 h-100"
      /> */}
      <Container className="position-relative">
        <Row className="statcisInfo m-0">
          <Col xs={6} sm={3} lg={3}>
            <div
              className="infoContainer"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <i className="fas fa-user"></i>
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
              <i className="fas fa-user-friends"></i>
              <p className="st-value">
                {language === 'ar'
                  ? toArabicDigits(hospital.patient)
                  : hospital.patient}
              </p>
              <p className="st-name"> {t('patient')} </p>
            </div>
          </Col>
          <Col xs={6} sm={3} lg={3}>
            <div
              className="infoContainer"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <i className="fas fa-bed"></i>
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
              <i className="fas fa-cut"></i>
              <p className="st-value">
                {language === 'ar'
                  ? toArabicDigits(hospital.surgery)
                  : hospital.surgery}
              </p>
              <p className="st-name"> {t('surgery')} </p>
            </div>
          </Col>
        </Row>

        {/* <Row className="emergyncyContainer d-flex justify-content-lg-between align-content-center m-0">
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
        </Row> */}
      </Container>
    </div>
  );
};

export default withTranslation('common')(Statistics);
