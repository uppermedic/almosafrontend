import React from 'react';
import { Row, Col, Card } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';

const index = ({ sectionData }) => {
  const lang = i18n.language;

  return (
    <section className="research-center">
      {/* <Row>
        <Col xs={12}>
          <h2 className="section-title">
            {lang == 'en' ? 'Research Center (RC)' : 'مركز الأبحاث (RC)'}
          </h2>
        </Col>
      </Row> */}
      <Row>
        <Col xs={12}>
          <div
            className="overlay"
            style={{ backgroundImage: `url(${sectionData[0].image[0]})` }}
          >
            <Card>
              {lang && (
                <p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sectionData[0][lang]?.content || ' '
                    }}
                  />
                </p>
              )}

              <img
                src="/images/training/academic/green-zigzag.png"
                alt="green-zigzag"
              />
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
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
    </section>
  );
};

export default withTranslation('common')(index);
