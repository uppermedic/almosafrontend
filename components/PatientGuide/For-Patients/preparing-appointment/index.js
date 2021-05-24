import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import { data } from './data';

const Content = ({ t }) => {
  let { language } = i18n;

  return (
    <div className="content">
      <div className="overlay"></div>
      <div className="container">
        <div className="title">
          <h2>
            {language === 'ar'
              ? 'التحضير لموعدك'
              : `Preparing for your appointment`}
          </h2>
        </div>
        <div className="items">
          <Container>
            <Row sx="1" xl="2">
              <Col xl="8">
                {language === 'ar' && (
                  <>
                    {data.map((item, index) => {
                      return (
                        <Fragment key={index}>
                          <h6 className="items-title">{item['ar']?.title}</h6>
                          <div
                            className="items-content"
                            dangerouslySetInnerHTML={{
                              __html: item['ar']?.content
                            }}
                          ></div>
                        </Fragment>
                      );
                    })}
                  </>
                )}
                {language === 'en' && (
                  <>
                    {data.map((item, index) => {
                      return (
                        <Fragment key={index}>
                          <h6 className="items-title">{item['en']?.title}</h6>
                          <div
                            className="items-content"
                            dangerouslySetInnerHTML={{
                              __html: item['en']?.content
                            }}
                          ></div>
                        </Fragment>
                      );
                    })}
                  </>
                )}
              </Col>
              <Col xl="4" className="side-img">
                <div className="img">
                  <img
                    src="/images/patient-guide/for_patient/prp_appointment.jpg"
                    alt="side img"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(['menu', 'patient_guide'])(Content);
