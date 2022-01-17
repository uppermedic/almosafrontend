import React, { useState } from 'react';
import { Row, Col, Card } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { truncate, strippedContent } from 'src/utils/helpers.js';

const index = ({ t, sectionData }) => {
  const lang = i18n.language;

  const [readmore, setReadmore] = useState(false);
  return (
    <section className="life-support">
      {/* <Row>
        <Col>
          <h2 className="section-title">
            {lang == 'en' ? 'Life Support Center ' : 'مركز دعم الحياة المتقدم'}
          </h2>
        </Col>
      </Row> */}
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
                    <h4>{lang && sectionData[0][lang]?.title}</h4>

                    {lang && (
                      <p>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: readmore
                              ? sectionData[0][lang]?.content
                              : truncate(
                                  strippedContent(
                                    sectionData[0][lang]?.content
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
                    <h4>{lang && sectionData[1][lang]?.title}</h4>

                    {lang && (
                      <p>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: sectionData[1][lang]?.content || ' '
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

export default withTranslation('common')(index);
