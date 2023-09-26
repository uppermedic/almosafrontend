import React from 'react';
import { strippedContent } from 'src/utils/helpers';
import ReusableTabs from 'src/components/Services/re-tabs';
import {
  Col,
  Container,
  Row
} from 'reactstrap';
import { useRouter } from 'next/router';

const Content = props => {
  const { seo, sections, physicians } = props.contentData;
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="content">
      <h2 className="title">{locale && seo[locale]?.title} </h2>
      <div className="page-desc">
        <Container>
          {locale && seo[locale]?.content && (
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: seo[locale]?.content
                }}
              />
            </p>
          )}
        </Container>
      </div>
      <div className="info">
        {locale &&
          seo[locale]?.content2 &&
          seo[locale]?.content2 != '' &&
          seo[locale]?.image2 &&
          seo[locale]?.image2 != '' && (
            <Container>
              <Row xs="1" md="2">
                <Col>
                  <div
                    className="the-img"
                    style={{
                      backgroundImage: `url("${seo[locale]?.image2}")`
                    }}
                  ></div>
                </Col>
                <Col>
                  <div className="text">
                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: strippedContent(seo[locale]?.content2)
                        }}
                      />
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          )}
        {sections[0] || physicians?.length > 0 ? (
          <div className="container">
            <div className="tabs">
              <ReusableTabs
                tab1Data={sections[0]}
                {...props}
                physicians={physicians}
              />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Content;


