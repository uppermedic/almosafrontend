import React from 'react';
import { i18n } from 'root/i18n';
import { Col, Container, Row } from 'reactstrap';
import Markdown from 'markdown-to-jsx';
import { strippedContent } from 'src/utils/helpers';
import ReusableTabs from 'src/components/Services/re-tabs';

const Content = props => {
  const { contentData } = props;
  const { seo, sections, physicians } = contentData;
  //console.log('🚀 ~ file: index.js ~ line 13 ~ data', data);
  const { language } = i18n;

  return (
    <div className="coronary-unit-content">
      {/* <Hero bg={contentData.image}>
        <PageHeading title={language && seo[language]?.title} />
      </Hero> */}
      <h2 className="title">{language && seo[language]?.title} </h2>
      <div className="colmuns-of-text">
        <Container>
          <Row>
            <Col>
              <div className="text">
                {language && seo[language]?.content && (
                  <Markdown>{strippedContent(seo[language]?.content)}</Markdown>
                )}
              </div>
            </Col>
            {language &&
              seo[language].content2 &&
              seo[language]?.content2 != '' && (
                <Col>
                  {/* <Markdown>
                    {strippedContent(seo[language]?.content2)}
                  </Markdown> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: seo[language]?.content2
                    }}
                  />
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
