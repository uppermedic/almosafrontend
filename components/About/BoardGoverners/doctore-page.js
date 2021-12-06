import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, i18n, withTranslation } from 'root/i18n';

const index = ({ doctorData, t }) => {
  const { language } = i18n;

  return (
    <section className="our-doctors">
      <Container>
        <Row className="doctor-details m-auto">
          {/*  the comming data will come when create main doctor key and value  */}
          <Col lg={4} className="doctor-img">
            <img
              src={doctorData.image}
              alt={
                language && doctorData[language] && doctorData[language]?.name
              }
              className="shadow"
            />
          </Col>
          <Col lg={{ size: 8 }} className="pl-sm-5 pr-4 pt-4">
            <h3 className="doctor-name">
              {language && doctorData[language] && doctorData[language]?.name}
            </h3>
            <p className="py-2 doctor-title">
              {language && doctorData[language] && doctorData[language]?.title}
            </p>
            {language &&
              doctorData[language] &&
              doctorData[language].paragraph &&
              doctorData[language].paragraph.length > 0 && (
                <p className="doctor-paragraph">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: doctorData[language].paragraph
                    }}
                  />
                </p>
              )}

            {language &&
              doctorData[language] &&
              doctorData[language].qualifications &&
              doctorData[language].qualifications.length > 0 && (
                <>
                  <h3 className="doctor-qualifications mt-5">
                    {t('common:qualifications')}
                  </h3>
                  <ul>
                    {language &&
                      doctorData[language].qualifications.map((value, idx) => (
                        <li key={idx}>{value}</li>
                      ))}
                  </ul>
                </>
              )}

            {language &&
              doctorData[language] &&
              doctorData[language].positions &&
              doctorData[language].positions.length > 0 && (
                <>
                  <h3 className="doctor-qualifications mt-5">
                    {t('common:positions held')}
                  </h3>
                  <ul>
                    {language &&
                      doctorData[language].positions.map((value, idx) => (
                        <li key={idx}>{value}</li>
                      ))}
                  </ul>
                </>
              )}

            {language &&
              doctorData[language] &&
              doctorData[language].member_in &&
              doctorData[language].member_in.length > 0 && (
                <>
                  <h3 className="doctor-qualifications mt-5">
                    {t('common:member_in')}
                  </h3>
                  <ul>
                    {language &&
                      doctorData[language].member_in.map((value, idx) => (
                        <li key={idx}>{value}</li>
                      ))}
                  </ul>
                </>
              )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default withTranslation(['common', 'menu'])(index);
