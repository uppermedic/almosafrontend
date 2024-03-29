import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import Markdown from 'markdown-to-jsx';
import { strippedContent } from 'src/utils/helpers.js';
import { PostWithCenterImg } from 'src/components/reusableComponents/Post';
import PostHeading from 'src/components/reusableComponents/PostHeading';
import { useRouter } from 'next/router';

const index = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <section className="content-wrapper">
      {data[0] && (
        <Container>
          <Row>
            <Col>
              <PostHeading
                title={locale && data[0][locale]?.title}
                color="#1E455C"
              />
            </Col>
          </Row>
          <Row className="marathon-sponsor p-3">
            <Col xs={12}>
              <p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: locale && strippedContent(data[0][locale]?.content)
                  }}
                />
              </p>
            </Col>
            {data[0].images.map((img, idx) => {
              return (
                <Col md={4} key={idx}>
                  <Card className="mb-2">
                    <CardImg width="100%" src={img} alt="Card image cap" />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
      {data[1] && (
        <div className="marathon-info">
          <Container>
            <Row className="p-3">
              <img
                src="/images/community/asha-marathon/marathon-info-bg.png"
                className="bottom-zigzag"
                alt="asha-marathon"
              />

              <Col md={4}>
                <h4>
                  <Markdown>
                    {(locale && strippedContent(data[1][locale]?.title)) ||
                      'No Data'}
                  </Markdown>
                </h4>
              </Col>
              <Col md={8} className=" mt-md-4">
                <p className="p-3 py-5">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: locale && strippedContent(data[1][locale]?.content)
                    }}
                  />
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {data[1] && data[2] && (
        <PostWithCenterImg
          title={locale && data[1][locale].title}
          color="#55B047"
          theVideo={data[2].video}
        />
      )}
    </section>
  );
};

export default index;
