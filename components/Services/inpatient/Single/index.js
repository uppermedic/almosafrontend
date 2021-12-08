import React from 'react';
import { i18n } from 'root/i18n';
import { Col, Container, Row } from 'reactstrap';
import ReusableTabs from 'src/components/Services/re-tabs';

const Content = props => {
  const { contentData } = props;
  const { seo, sections, physicians } = contentData;
  const { language } = i18n;

  return (
    <div className="coronary-unit-content">
      <h2 className="title">{language && seo[language]?.title} </h2>
      <div className="colmuns-of-text">
        <Container>
          <Row>
            <Col>
              <div className="text">
                {language && seo[language]?.content && (
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: seo[language]?.content
                      }}
                    />
                  </p>
                )}
              </div>
            </Col>
            {language &&
              seo[language].content2 &&
              seo[language]?.content2 != '' && (
                <Col>
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: seo[language]?.content2
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
