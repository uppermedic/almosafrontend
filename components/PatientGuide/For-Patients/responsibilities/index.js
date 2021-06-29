import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import { data } from './data';

const Content = ({ t }) => {
  let language = i18n.language;
  return (
    <div className="content">
      <div className="overlay"></div>
      <div className="container">
        <div className="title">
          <h2>{t('patient_guide:Patient Responsibilities')}</h2>
        </div>
        <div className="items">
          <div className="items-title">
            <h5>
              {language === 'ar'
                ? 'اللوائح الخاصة بالواجبات والمسؤوليات التي يتحملها المرضى وأسرهم :'
                : `Policies regarding duties and responsibilities of patients and
            their families :`}
            </h5>
          </div>
          <Container>
            <Row sx="1" xl="2">
              <Col xl="8">
                <ul className="list">
                  {language === 'ar' && (
                    <>
                      {data.map((item, index) => {
                        return (
                          <li key={index}>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item['ar']
                              }}
                            ></span>
                          </li>
                        );
                      })}
                    </>
                  )}
                  {language === 'en' && (
                    <>
                      {data.map((item, index) => {
                        return (
                          <li key={index}>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item['en']
                              }}
                            ></span>
                          </li>
                        );
                      })}
                    </>
                  )}
                </ul>
              </Col>
              <Col xl="4" className="side-img">
                <div className="img mt-5">
                  <img
                    src="/images/patient-guide/for_patient/patient_respons_photo.jpg"
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
