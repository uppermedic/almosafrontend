import React from 'react';
import { Row, Col, Card } from 'reactstrap';
import { useRouter } from 'next/router';

const Index = ({ sectionData }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <section className="research-center">
      <Row>
        <Col xs={12}>
          <div
            className="overlay"
            style={{ backgroundImage: `url(${sectionData[0].image[0]})` }}
          >
            <Card>
              {locale && (
                <p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sectionData[0][locale]?.content || ' '
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
    </section>
  );
};

export default Index;
