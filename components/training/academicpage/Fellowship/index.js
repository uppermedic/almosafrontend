import React from 'react';
import { Row, Col, Card } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';

const index = ({ fellowshipData }) => {
  const lang = i18n.language;
  console.log('fellowshipData[lang]?.page_items', fellowshipData?.page_items);
  return (
    <section className="fellowship">
      <Row>
        <Col>
          <h2 className="section-title">
            {lang && fellowshipData[lang]?.title}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {lang && (
            <div className="section-content">
              {
                <p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: fellowshipData[lang]?.content || ' '
                    }}
                  />
                </p>
              }
              <Card>
                {
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          (fellowshipData?.page_items?.length > 0 &&
                            fellowshipData?.page_items[0][lang]?.content) ||
                          ' '
                      }}
                    />
                  </p>
                }
              </Card>
            </div>
          )}
        </Col>
      </Row>
    </section>
  );
};

export default index;
