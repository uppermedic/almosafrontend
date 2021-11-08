import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import { data } from './data';
const Content = ({ t }) => {
  let { language } = i18n;

  return (
    <div className="family-rights-content">
      <div className="top-content">
        <div className="title">
          <div className="container">
            <h2>
              {language === 'ar'
                ? ` وثيقة حقوق وواجبات المرضى`
                : 'Patient and family bill of rights and responsibilities'}
            </h2>
          </div>
        </div>
        <div className="description">
          <div className="container">
            <p>
              {language === 'ar'
                ? `بصفتك أحد مرضى المستشفى الأعزاء: يحق لك أنت وأفراد عائلتك الكريمة ممارسة الحقوق التالية أثناء تلقيك الخدمة بالمستشفى`
                : `Being a valued patient in Almoosa Specialist Hospital (ASH), you
                and your family have the following Rights :`}
            </p>
          </div>
        </div>
      </div>
      <div className="content">
        <Container>
          {data.map((item, index) => {
            if (index % 2 == 0) {
              return (
                <Row xs="1" lg="2" key={index}>
                  <Col key={index}>
                    <div className="info">
                      {index === 0 && (
                        <div className="info-title">
                          <p>
                            {language === 'ar'
                              ? `علما بأنه في حالة الأطفال وكبار السن والمرضى الذين لا تسمح حالتهم الصحية بممارسة بعض حقوقهم فسوف يتم ممارسة هذه الحقوق من قبل ذويهم نيابة عنهم.`
                              : `(Rights of Children, Old people and Patients not able to practice their rights, will be granted to their families/ guardians) :`}
                          </p>
                          <hr />
                        </div>
                      )}
                      <ul className="info-list">
                        {language === 'ar' && (
                          <>
                            {item.rights.map((right, index) => {
                              return (
                                <li key={index}>
                                  <span className="num">{right.num}</span>
                                  <div
                                    className="desc"
                                    dangerouslySetInnerHTML={{
                                      __html: right['ar']?.content
                                    }}
                                  ></div>
                                </li>
                              );
                            })}
                          </>
                        )}
                        {language === 'en' && (
                          <>
                            {item.rights.map((right, index) => {
                              return (
                                <li key={index}>
                                  <span className="num">{right.num}</span>
                                  <div
                                    className="desc"
                                    dangerouslySetInnerHTML={{
                                      __html: right['en']?.content
                                    }}
                                  ></div>
                                </li>
                              );
                            })}
                          </>
                        )}
                      </ul>
                    </div>
                  </Col>
                  <Col className="img-col">
                    <div
                      className="the-img"
                      style={{
                        backgroundImage: `url(${item.img})`
                      }}
                    ></div>
                  </Col>
                </Row>
              );
            } else {
              return (
                <Row xs="1" lg="2" key={index}>
                  <Col className="img-col">
                    <div
                      className="the-img"
                      style={{
                        backgroundImage: `url(${item.img})`
                      }}
                    ></div>
                  </Col>
                  <Col key={index}>
                    <div className="info">
                      <ul className="info-list">
                        {language === 'ar' && (
                          <>
                            {item.rights.map((right, index) => {
                              return (
                                <li key={index}>
                                  <span className="num">{right.num}</span>
                                  <div
                                    className="desc"
                                    dangerouslySetInnerHTML={{
                                      __html: right['ar']?.content
                                    }}
                                  ></div>
                                </li>
                              );
                            })}
                          </>
                        )}
                        {language === 'en' && (
                          <>
                            {item.rights.map((right, index) => {
                              return (
                                <li key={index}>
                                  <span className="num">{right.num}</span>
                                  <div
                                    className="desc"
                                    dangerouslySetInnerHTML={{
                                      __html: right['en']?.content
                                    }}
                                  ></div>
                                </li>
                              );
                            })}
                          </>
                        )}
                      </ul>
                    </div>
                  </Col>
                </Row>
              );
            }
          })}
        </Container>
      </div>
    </div>
  );
};

export default withTranslation(['menu'])(Content);
