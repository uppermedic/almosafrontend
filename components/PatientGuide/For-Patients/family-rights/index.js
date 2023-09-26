import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';

const Content = ({ itemContent }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="family-rights-content">
      <div className="top-content">
        <div className="title">
          <div className="container">
            <h2>{locale && itemContent[locale]?.title}</h2>
          </div>
        </div>
        <div className="description">
          <div className="container">
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: locale && itemContent[locale]?.content
                }}
              ></div>
            </p>
          </div>
        </div>
      </div>
      <div className="content">
        <Container>
          {itemContent?.page_items.length > 0 &&
            itemContent.page_items?.map((item, index) => {
              if (index % 2 == 0) {
                return (
                  <Row xs="1" lg="2" key={index}>
                    <Col key={index}>
                      <div className="info">
                        {locale && item[locale]?.title && (
                          <div className="info-title">
                            <p>{locale && item[locale]?.title}</p>
                            <hr />
                          </div>
                        )}
                        <p className="info-list">
                          <div
                            className="desc"
                            dangerouslySetInnerHTML={{
                              __html: item[locale]?.content
                            }}
                          />
                        </p>
                        {/* <ul className="info-list">
                          {locale && (
                            <>
                              {item.rights.map((right, index) => {
                                return (
                                  <li key={index}>
                                    <span className="num">
                                      {index > 9 ? index : '0' + index}
                                    </span>
                                    <div
                                      className="desc"
                                      dangerouslySetInnerHTML={{
                                        __html: right[locale]?.content
                                      }}
                                    ></div>
                                  </li>
                                );
                              })}
                            </>
                          )}
                        </ul> */}
                      </div>
                    </Col>
                    <Col className="img-col">
                      <div
                        className="the-img"
                        style={{
                          backgroundImage: `url(${item.image[0]})`
                        }}
                      ></div>
                    </Col>
                  </Row>
                );
              } else {
                return (
                  <Row xs="1" lg="2" key={index}>
                    <Col className="img-col">
                      <div
                        className="the-img"
                        style={{
                          backgroundImage: `url(${item?.image[0]})`
                        }}
                      ></div>
                    </Col>
                    <Col key={index}>
                      <div className="info">
                        {locale && item[locale]?.title && (
                          <div className="info-title">
                            <p>{locale && item[locale]?.title}</p>
                            <hr />
                          </div>
                        )}
                        <p className="info-list">
                          <div
                            className="desc"
                            dangerouslySetInnerHTML={{
                              __html: item[locale]?.content
                            }}
                          />
                        </p>
                      </div>
                    </Col>
                  </Row>
                );
              }
            })}
        </Container>
      </div>
    </div>
  );
};

export default Content;
