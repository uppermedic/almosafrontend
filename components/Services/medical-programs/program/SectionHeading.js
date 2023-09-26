import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useRouter } from 'next/router';

const SharedPost = ({ data, cutomImgStyle }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <div className="page-heading">
        <div className="container">
          <h1>{locale && data.seo[locale].title}</h1>
        </div>
      </div>
      <section className="hair-post">
        <Container>
          <Row xs="1" xl="2">
            <Col xl="8">
              {locale && data.seo[locale]?.content && (
                <p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.seo[locale]?.content
                    }}
                  />
                </p>
              )}
            </Col>
            <Col xl="4">
              <img style={cutomImgStyle} src={data.image} alt="hair-plant" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SharedPost;
