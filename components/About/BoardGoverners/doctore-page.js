import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, i18n, withTranslation } from 'root/i18n';

const index = ({ doctorData, t }) => {
  const { language } = i18n;

  return (
    <section className="our-doctors">
      <Container>
        <Row className="doctor-details m-auto doctor-content-page">
          {/*  the comming data will come when create main doctor key and value  */}
          <Col lg={4} className="doctor-img">
            <img
              src={doctorData.image[0]}
              alt={
                language && doctorData[language] && doctorData[language]?.name
              }
              className="shadow governer-doctor"
            />
          </Col>
          <Col lg={{ size: 8 }} className="pl-sm-5 pr-4 pt-4">
            <h3 className="doctor-name">
              {language && doctorData[language] && doctorData[language]?.name}
            </h3>
            <p className="py-2 doctor-title">
              {language && doctorData[language] && doctorData[language]?.title}
            </p>
            {language && doctorData[language]?.content?.length > 0 && (
              <p className="doctor-paragraph">
                <div
                  dangerouslySetInnerHTML={{
                    __html: doctorData[language]?.content
                  }}
                />
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default withTranslation(['common', 'menu'])(index);
