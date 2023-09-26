import React, { useState } from 'react';
import { Row, Col, Card } from 'reactstrap';
import { useTranslation } from 'next-i18next';
import { truncate, strippedContent } from 'src/utils/helpers.js';
import { useRouter } from 'next/router';

const Index = ({ sectionData }) => {
  const { t } = useTranslation(['common', 'menu']);
  const router = useRouter();
  const { locale } = router;

  const [readmore, setReadmore] = useState(false);
  return (
    <section className="life-support">
      <Row>
        <Col>
          <div className="card-contend">
            <Card>
              <div className="about-us">
                <div className="overlay">
                  <img
                    src="/images/training/academic/blue-zigzag.png"
                    alt="zigzag"
                  />
                </div>
                <Row>
                  <Col md="8">
                    <h4>{locale && sectionData[0][locale]?.title}</h4>

                    {locale && (
                      <p>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: readmore
                              ? sectionData[0][locale]?.content
                              : truncate(
                                  strippedContent(
                                    sectionData[0][locale]?.content
                                  ),
                                  600,
                                  '......'
                                )
                          }}
                        />
                      </p>
                    )}

                    <button
                      className="btn read-more"
                      onClick={() => setReadmore(!readmore)}
                    >
                      {readmore ? t('read_less') : t('read_more')}
                    </button>
                  </Col>
                  <Col md="4">
                    <img src={sectionData[0]?.image[0]} alt="about" />
                  </Col>
                </Row>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card-contend">
            <Card>
              <div className="purpose">
                <div className="overlay">
                  <img
                    src="/images/training/academic/green-zigzag.png"
                    alt="zigzag"
                  />
                </div>
                <Row>
                  <Col>
                    <h4>{locale && sectionData[1][locale]?.title}</h4>

                    {locale && (
                      <p>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: sectionData[1][locale]?.content || ' '
                          }}
                        />
                      </p>
                    )}
                  </Col>
                </Row>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Index;
