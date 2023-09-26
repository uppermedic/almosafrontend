import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ReusableTabs from 'src/components/Services/re-tabs';
import { useRouter } from 'next/router';

const Content = props => {
  const { contentData } = props;
  const { seo, sections, physicians } = contentData;
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="coronary-unit-content">
      <h2 className="title">{locale && seo[locale]?.title} </h2>
      <div className="colmuns-of-text">
        <Container>
          <Row>
            <Col>
              <div className="text">
                {locale && seo[locale]?.content && (
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: seo[locale]?.content
                      }}
                    />
                  </p>
                )}
              </div>
            </Col>
            {locale &&
              seo[locale].content2 &&
              seo[locale]?.content2 != '' && (
                <Col>
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: seo[locale]?.content2
                      }}
                    />
                  </p>
                </Col>
              )}
          </Row>
        </Container>
      </div>
      {((sections[0]?.items && sections[0].items.length > 0) ||
        (physicians && physicians.length > 0)) && (
        <ReusableTabs
          tab1Data={sections[0]}
          physicians={physicians}
          {...props}
        />
      )}
    </div>
  );
};

export default Content;
