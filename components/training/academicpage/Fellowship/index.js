import React from 'react';
import { Row, Col, Card } from 'reactstrap';
import { useRouter } from 'next/router';

const index = ({ fellowshipData }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <section className="fellowship">
      <Row>
        <Col>
          <h2 className="section-title">
            {locale && fellowshipData[locale]?.title}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {locale && (
            <div className="section-content">
              {
                <p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: fellowshipData[locale]?.content || ' '
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
                            fellowshipData?.page_items[0][locale]?.content) ||
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
